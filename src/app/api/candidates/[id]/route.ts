import { NextRequest, NextResponse } from 'next/server';
import { isSupabaseConfigured, getSupabaseClient, getSupabaseAdminClient } from '@/lib/supabase';

export async function PATCH(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const body = await request.json();
    const {
      status,
      categories,
      evidenceStrength,
      notes,
      reviewedBy = 'Lead PM Researcher',
      action = 'SINGLE_UPDATE',
    } = body;

    const now = new Date().toISOString();
    const formattedDate = now.replace('T', ' ').substring(0, 16);

    if (!isSupabaseConfigured()) {
      return NextResponse.json({
        success: true,
        mode: 'local_storage_acknowledged',
        id,
        status,
        categories,
        evidenceStrength,
        notes,
        reviewedAt: formattedDate,
      });
    }

    const supabase = getSupabaseAdminClient() || getSupabaseClient();
    if (!supabase) {
      return NextResponse.json({ success: true, mode: 'local_fallback', id });
    }

    // 1. Fetch current decision to log transition
    const { data: currentDecision } = await supabase
      .from('human_review_decisions')
      .select('approval_status, human_evidence_strength')
      .eq('candidate_id', id)
      .single();

    // 2. Upsert decision
    const { error: upsertError } = await supabase
      .from('human_review_decisions')
      .upsert({
        candidate_id: id,
        approval_status: status,
        human_categories: categories || [],
        human_evidence_strength: evidenceStrength || 'UNASSIGNED',
        researcher_notes: notes || '',
        reviewed_by: reviewedBy,
        reviewed_at: formattedDate,
        updated_at: now,
      }, { onConflict: 'candidate_id' });

    if (upsertError) {
      return NextResponse.json({ error: upsertError.message }, { status: 500 });
    }

    // 3. Insert audit log
    await supabase.from('research_decision_history').insert({
      candidate_id: id,
      action,
      previous_status: currentDecision?.approval_status || 'pending',
      new_status: status,
      previous_strength: currentDecision?.human_evidence_strength || 'UNASSIGNED',
      new_strength: evidenceStrength,
      categories_assigned: categories,
      notes,
      actor: reviewedBy,
    });

    return NextResponse.json({
      success: true,
      mode: 'supabase_postgres',
      id,
      status,
      categories,
      evidenceStrength,
      notes,
      reviewedAt: formattedDate,
    });
  } catch (err: any) {
    return NextResponse.json({ error: err?.message }, { status: 500 });
  }
}
