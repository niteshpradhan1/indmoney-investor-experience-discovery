import { NextResponse } from 'next/server';
import { isSupabaseConfigured, getSupabaseClient } from '@/lib/supabase';
import { DATASET_METRICS } from '@/data/candidateReviewsData';

export async function GET() {
  const configured = isSupabaseConfigured();
  let dbStatus = 'unconfigured';
  let dbCandidateCount = 0;

  if (configured) {
    try {
      const supabase = getSupabaseClient();
      if (supabase) {
        const { count, error } = await supabase
          .from('candidate_reviews')
          .select('*', { count: 'exact', head: true });

        if (error) {
          dbStatus = `error: ${error.message}`;
        } else {
          dbStatus = 'connected';
          dbCandidateCount = count || 0;
        }
      }
    } catch (e: any) {
      dbStatus = `exception: ${e?.message || 'unknown'}`;
    }
  }

  return NextResponse.json({
    status: 'ok',
    project: 'INDMoney Investor Experience Discovery',
    targetDeadline: '2026-11-09',
    phase: 'Phase 3.1: Live Deployment & Backend Architecture',
    persistence: {
      supabaseConfigured: configured,
      supabaseStatus: dbStatus,
      databaseCandidateCount: dbCandidateCount,
    },
    datasetMetrics: DATASET_METRICS,
  });
}
