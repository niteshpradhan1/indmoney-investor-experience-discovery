import { NextResponse } from 'next/server';
import { isSupabaseConfigured, getSupabaseClient } from '@/lib/supabase';
import { DATASET_METRICS } from '@/data/candidateReviewsData';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export async function GET() {
  const configured = isSupabaseConfigured();
  let dbStatus = 'unconfigured';
  
  const tableChecks: Record<string, number | null> = {
    original_reviews: null,
    candidate_reviews: null,
    human_review_decisions: null,
    audited_evidence_records: null,
    research_decision_history: null
  };

  const queryErrors: Array<{ target: string; error: string }> = [];
  const requiredTables = [
    'original_reviews',
    'candidate_reviews',
    'human_review_decisions',
    'audited_evidence_records',
    'research_decision_history'
  ];
  const missingTables: string[] = [];

  let approvedCount: number | null = null;
  let rejectedCount: number | null = null;
  let investigateCount: number | null = null;
  let explicitPendingCount: number | null = null;

  if (configured) {
    try {
      const supabase = getSupabaseClient();
      if (!supabase) {
        dbStatus = 'client_initialization_failed';
      } else {
        dbStatus = 'connected';

        // 1. Check table existence and row counts
        for (const tableName of requiredTables) {
          try {
            const { count, error } = await supabase
              .from(tableName)
              .select('*', { count: 'exact', head: true });

            if (error) {
              queryErrors.push({ target: `table:${tableName}`, error: error.message });
              missingTables.push(tableName);
              tableChecks[tableName] = null;
            } else {
              tableChecks[tableName] = count;
            }
          } catch (err: any) {
            queryErrors.push({ target: `table:${tableName}`, error: err?.message || 'unknown table query error' });
            tableChecks[tableName] = null;
          }
        }

        // 2. Query status breakdown from human_review_decisions
        try {
          const { count: appCount, error: appErr } = await supabase
            .from('human_review_decisions')
            .select('*', { count: 'exact', head: true })
            .eq('approval_status', 'approved');
          if (appErr) queryErrors.push({ target: 'status:approved', error: appErr.message });
          else approvedCount = appCount;

          const { count: rejCount, error: rejErr } = await supabase
            .from('human_review_decisions')
            .select('*', { count: 'exact', head: true })
            .eq('approval_status', 'rejected');
          if (rejErr) queryErrors.push({ target: 'status:rejected', error: rejErr.message });
          else rejectedCount = rejCount;

          const { count: invCount, error: invErr } = await supabase
            .from('human_review_decisions')
            .select('*', { count: 'exact', head: true })
            .eq('approval_status', 'investigate');
          if (invErr) queryErrors.push({ target: 'status:investigate', error: invErr.message });
          else investigateCount = invCount;

          const { count: penCount, error: penErr } = await supabase
            .from('human_review_decisions')
            .select('*', { count: 'exact', head: true })
            .eq('approval_status', 'pending');
          if (penErr) queryErrors.push({ target: 'status:pending', error: penErr.message });
          else explicitPendingCount = penCount;
        } catch (err: any) {
          queryErrors.push({ target: 'status_breakdown', error: err?.message || 'status query error' });
        }
      }
    } catch (e: any) {
      dbStatus = `exception: ${e?.message || 'unknown'}`;
    }
  }

  // 3. Reconcile statuses
  const totalCandidates = tableChecks['candidate_reviews'];
  const totalDecisionsRecorded = tableChecks['human_review_decisions'];

  let calculatedPending: number | null = null;
  if (totalCandidates !== null && approvedCount !== null && rejectedCount !== null && investigateCount !== null) {
    const unreviewed = totalDecisionsRecorded !== null
      ? Math.max(0, totalCandidates - totalDecisionsRecorded)
      : Math.max(0, totalCandidates - (approvedCount + rejectedCount + investigateCount));
    calculatedPending = (explicitPendingCount || 0) + unreviewed;
  }

  const calculatedSum = (approvedCount ?? 0) + (rejectedCount ?? 0) + (investigateCount ?? 0) + (calculatedPending ?? 0);
  const isStatusReconciled = totalCandidates !== null && calculatedSum === totalCandidates;

  const unresolvedIssues: string[] = [];
  if (tableChecks['original_reviews'] === 0) {
    unresolvedIssues.push(
      'Table original_reviews has 0 rows in PostgreSQL (full 62,523 corpus preserved in local workbook/provenance files; 235 candidates seeded to database).'
    );
  }
  if (!isStatusReconciled) {
    unresolvedIssues.push(
      `Candidate status sum mismatch: calculated sum (${calculatedSum}) does not equal total candidates (${totalCandidates}).`
    );
  }
  if (queryErrors.length > 0) {
    unresolvedIssues.push(`${queryErrors.length} database query error(s) detected.`);
  }

  return NextResponse.json({
    status: queryErrors.length === 0 && configured && dbStatus === 'connected' ? 'ok' : 'degraded',
    project: 'INDMoney Investor Experience Discovery',
    targetDeadline: '2026-11-09',
    phase: 'Phase 6: Evidence-to-Prototype Validation',
    h1ValidationStatus: 'NOT VALIDATED (Scientific Validation Boundary Enforced)',
    deployment: {
      platform: 'Vercel Serverless (Next.js 15)',
      environment: 'production',
      readOnlyEndpoint: true,
      lastAuditTimestamp: new Date().toISOString()
    },
    databaseCounts: {
      originalReviewsInDatabase: tableChecks['original_reviews'],
      originalReviews: tableChecks['original_reviews'], // backward compatibility
      evidenceCandidates: totalCandidates,
      approvedRecords: approvedCount,
      rejectedRecords: rejectedCount,
      investigateRecords: investigateCount,
      pendingRecords: calculatedPending,
      auditedEvidenceRecords: tableChecks['audited_evidence_records'],
      decisionHistoryLogs: tableChecks['research_decision_history']
    },
    evidenceAndCorpusDistinction: {
      originalCorpusRowsInSourceFiles: 62523,
      originalReviewRowsInPostgres: tableChecks['original_reviews'] ?? 0,
      screenedCandidateRowsInPostgres: totalCandidates ?? 0,
      humanApprovedEvidenceRows: approvedCount ?? 0,
      humanRejectedCandidateRows: rejectedCount ?? 0,
      investigateCandidateRows: investigateCount ?? 0,
      pendingCandidateRows: calculatedPending ?? 0,
      auditedDeepDiveRecords: tableChecks['audited_evidence_records'] ?? 0,
      sourceFileProvenance: "INDMoney_H1_Evidence_Collection_Workbook.xlsx [Sheet: 'All Original Reviews']",
      integrityNote: "Source-file corpus rows (62,523) and PostgreSQL database rows (0) are explicitly separated to prevent conflating raw research source files with live database records."
    },
    candidateReconciliation: {
      totalCandidates,
      approved: approvedCount,
      rejected: rejectedCount,
      investigate: investigateCount,
      pending: calculatedPending,
      calculatedSum,
      isReconciled: isStatusReconciled,
      expectedDistribution: {
        total: 235,
        approved: 26,
        rejected: 169,
        investigate: 3,
        pending: 37
      },
      matchesExpectedDistribution: (
        totalCandidates === 235 &&
        approvedCount === 26 &&
        rejectedCount === 169 &&
        investigateCount === 3 &&
        calculatedPending === 37
      )
    },
    dataIntegrity: {
      supabaseConfigured: configured,
      supabaseStatus: dbStatus,
      databaseQueriesSucceeded: queryErrors.length === 0,
      statusCountsReconciled: isStatusReconciled,
      missingTables,
      queryErrors,
      unresolvedIssues
    },
    // Backward-compatibility fields
    persistence: {
      supabaseConfigured: configured,
      supabaseStatus: dbStatus,
      databaseCandidateCount: totalCandidates ?? 0,
    },
    datasetMetrics: {
      ...DATASET_METRICS,
      totalOriginalReviewsInCorpus: 62523,
      totalOriginalReviewsInDatabase: tableChecks['original_reviews'] ?? 0,
    }
  });
}
