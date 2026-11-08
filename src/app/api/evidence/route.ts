import { NextRequest, NextResponse } from 'next/server';
import { isSupabaseConfigured, getSupabaseClient, getSupabaseAdminClient } from '@/lib/supabase';
import { INITIAL_EVIDENCE_ITEMS } from '@/data/evidenceData';
import { EvidenceItem } from '@/types';

export async function GET() {
  if (!isSupabaseConfigured()) {
    return NextResponse.json({
      source: 'local_baseline',
      count: INITIAL_EVIDENCE_ITEMS.length,
      data: INITIAL_EVIDENCE_ITEMS,
    });
  }

  try {
    const supabase = getSupabaseClient();
    if (!supabase) {
      return NextResponse.json({ source: 'local_baseline', data: INITIAL_EVIDENCE_ITEMS });
    }

    const { data, error } = await supabase
      .from('audited_evidence_records')
      .select('*')
      .order('id', { ascending: true });

    if (error || !data || data.length === 0) {
      return NextResponse.json({
        source: 'local_baseline_fallback',
        count: INITIAL_EVIDENCE_ITEMS.length,
        data: INITIAL_EVIDENCE_ITEMS,
      });
    }

    // Map snake_case to camelCase EvidenceItem
    const mapped: EvidenceItem[] = data.map((d: any) => ({
      id: d.id,
      source: d.source,
      sourceUrl: d.source_url,
      sourceReference: d.source_reference,
      date: d.date,
      rating: d.rating,
      userSegment: d.user_segment,
      verbatimText: d.verbatim_text,
      platform: d.platform,
      identifiedPainPoints: d.identified_pain_points || [],
      assignedTheme: d.assigned_theme,
      aiSuggestedCategory: d.ai_suggested_category,
      humanReviewStatus: d.human_review_status,
      reviewedBy: d.reviewed_by,
      humanReviewNotes: d.human_review_notes,
      confidenceScore: d.confidence_score,
      h1Relevant: d.h1_relevant,
      isVerifiedRealReview: d.is_verified_real_review,
    }));

    return NextResponse.json({
      source: 'supabase_postgres',
      count: mapped.length,
      data: mapped,
    });
  } catch (err: any) {
    return NextResponse.json({
      source: 'local_baseline_exception',
      error: err?.message,
      data: INITIAL_EVIDENCE_ITEMS,
    });
  }
}

export async function POST(request: NextRequest) {
  try {
    const item: EvidenceItem = await request.json();

    if (!item.id || !item.verbatimText) {
      return NextResponse.json({ error: 'Missing required evidence fields' }, { status: 400 });
    }

    if (!isSupabaseConfigured()) {
      return NextResponse.json({
        success: true,
        mode: 'local_storage_acknowledged',
        item,
      });
    }

    const supabase = getSupabaseAdminClient() || getSupabaseClient();
    if (!supabase) {
      return NextResponse.json({ success: true, mode: 'local_fallback', item });
    }

    const row = {
      id: item.id,
      source: item.source,
      source_url: item.sourceUrl,
      source_reference: item.sourceReference,
      date: item.date,
      rating: item.rating,
      platform: item.platform,
      user_segment: item.userSegment,
      verbatim_text: item.verbatimText,
      identified_pain_points: item.identifiedPainPoints,
      assigned_theme: item.assignedTheme,
      ai_suggested_category: item.aiSuggestedCategory,
      human_review_status: item.humanReviewStatus,
      reviewed_by: item.reviewedBy || 'Lead PM Researcher',
      human_review_notes: item.humanReviewNotes,
      confidence_score: item.confidenceScore,
      h1_relevant: item.h1Relevant,
      is_verified_real_review: item.isVerifiedRealReview,
    };

    const { error } = await supabase
      .from('audited_evidence_records')
      .upsert(row, { onConflict: 'id' });

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({
      success: true,
      mode: 'supabase_postgres',
      item,
    });
  } catch (err: any) {
    return NextResponse.json({ error: err?.message }, { status: 500 });
  }
}
