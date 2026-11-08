import { NextRequest, NextResponse } from 'next/server';
import { isSupabaseConfigured, getSupabaseClient, getSupabaseAdminClient } from '@/lib/supabase';
import { INITIAL_CANDIDATE_REVIEWS } from '@/data/candidateReviewsData';
import { ReviewRecord } from '@/types';

export async function GET(request: NextRequest) {
  if (!isSupabaseConfigured()) {
    // Graceful offline / local fallback
    return NextResponse.json({
      source: 'local_baseline',
      count: INITIAL_CANDIDATE_REVIEWS.length,
      data: INITIAL_CANDIDATE_REVIEWS,
    });
  }

  try {
    const supabase = getSupabaseClient();
    if (!supabase) {
      return NextResponse.json({ source: 'local_baseline', data: INITIAL_CANDIDATE_REVIEWS });
    }

    // Fetch candidate reviews with joined AI suggestions and human decisions
    const { data: candidates, error: candError } = await supabase
      .from('candidate_reviews')
      .select(`
        id,
        original_row,
        rating,
        review_text,
        review_date,
        found_helpful,
        source_platform,
        source_provenance,
        source_reference,
        preliminary_keyword_signals,
        triage_priority,
        ai_classification_suggestions (
          categories,
          evidence_strength,
          supporting_excerpt,
          explanation,
          research_implication
        ),
        human_review_decisions (
          approval_status,
          human_categories,
          human_evidence_strength,
          researcher_notes,
          reviewed_by,
          reviewed_at
        )
      `)
      .order('original_row', { ascending: true });

    if (candError || !candidates || candidates.length === 0) {
      // If table is empty or query failed, return local baseline
      return NextResponse.json({
        source: 'local_baseline_fallback',
        error: candError?.message,
        count: INITIAL_CANDIDATE_REVIEWS.length,
        data: INITIAL_CANDIDATE_REVIEWS,
      });
    }

    // Map database shape to ReviewRecord interface
    const mapped: ReviewRecord[] = candidates.map((c: any) => {
      const ai = c.ai_classification_suggestions || {};
      const human = c.human_review_decisions || {};

      return {
        id: c.id,
        originalRow: c.original_row,
        rating: c.rating,
        reviewText: c.review_text,
        reviewDate: c.review_date,
        foundHelpful: c.found_helpful || 0,
        sourcePlatform: c.source_platform || 'Google Play Store',
        sourceProvenance: c.source_provenance || 'Imported INDMoney app review dataset',
        sourceReference: c.source_reference,
        preliminaryKeywordSignals: c.preliminary_keyword_signals || '',
        triagePriority: c.triage_priority || '',
        humanReviewStatus: human.approval_status || 'pending',
        humanCategories: human.human_categories || [],
        humanEvidenceStrength: human.human_evidence_strength || 'UNASSIGNED',
        researcherNotes: human.researcher_notes || '',
        reviewedAt: human.reviewed_at || null,
        reviewedBy: human.reviewed_by || null,
        aiSuggestion: {
          categories: ai.categories || ['Insufficient information'],
          evidenceStrength: ai.evidence_strength || 'INSUFFICIENT',
          supportingExcerpt: ai.supporting_excerpt || '',
          explanation: ai.explanation || '',
          researchImplication: ai.research_implication || '',
        },
      };
    });

    return NextResponse.json({
      source: 'supabase_postgres',
      count: mapped.length,
      data: mapped,
    });
  } catch (err: any) {
    return NextResponse.json({
      source: 'local_baseline_exception',
      error: err?.message,
      data: INITIAL_CANDIDATE_REVIEWS,
    });
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { updates, action = 'BATCH_UPDATE' } = body;

    if (!Array.isArray(updates) || updates.length === 0) {
      return NextResponse.json({ error: 'Expected non-empty array of updates' }, { status: 400 });
    }

    if (!isSupabaseConfigured()) {
      return NextResponse.json({
        success: true,
        mode: 'local_storage_acknowledged',
        updatedCount: updates.length,
      });
    }

    const supabase = getSupabaseAdminClient() || getSupabaseClient();
    if (!supabase) {
      return NextResponse.json({ success: true, mode: 'local_only' });
    }

    const now = new Date().toISOString();
    const upsertRows = updates.map((u: any) => ({
      candidate_id: u.id,
      approval_status: u.humanReviewStatus || 'pending',
      human_categories: u.humanCategories || [],
      human_evidence_strength: u.humanEvidenceStrength || 'UNASSIGNED',
      researcher_notes: u.researcherNotes || '',
      reviewed_by: u.reviewedBy || 'Lead PM Researcher',
      reviewed_at: u.reviewedAt || now.replace('T', ' ').substring(0, 16),
      updated_at: now,
    }));

    const { error: upsertError } = await supabase
      .from('human_review_decisions')
      .upsert(upsertRows, { onConflict: 'candidate_id' });

    if (upsertError) {
      return NextResponse.json({ error: upsertError.message }, { status: 500 });
    }

    // Log to decision history
    const historyRows = updates.map((u: any) => ({
      candidate_id: u.id,
      action,
      new_status: u.humanReviewStatus,
      new_strength: u.humanEvidenceStrength,
      categories_assigned: u.humanCategories,
      notes: u.researcherNotes,
      actor: u.reviewedBy || 'Lead PM Researcher',
    }));

    await supabase.from('research_decision_history').insert(historyRows);

    return NextResponse.json({
      success: true,
      mode: 'supabase_upserted',
      updatedCount: updates.length,
    });
  } catch (err: any) {
    return NextResponse.json({ error: err?.message }, { status: 500 });
  }
}
