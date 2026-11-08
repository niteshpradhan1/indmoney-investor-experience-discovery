import { NextRequest, NextResponse } from 'next/server';
import { isSupabaseConfigured, getSupabaseAdminClient, getSupabaseClient } from '@/lib/supabase';
import * as XLSX from 'xlsx';

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const file = formData.get('file') as File;
    const adminKey = formData.get('adminKey') as string;

    const expectedSecret = process.env.RESEARCH_ADMIN_SECRET || 'indmoney_research_admin_2026';
    if (adminKey && adminKey !== expectedSecret) {
      return NextResponse.json({ error: 'Unauthorized: Invalid admin secret' }, { status: 401 });
    }

    if (!file) {
      return NextResponse.json({ error: 'No file uploaded' }, { status: 400 });
    }

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);
    const workbook = XLSX.read(buffer, { type: 'buffer' });

    // Look for candidate sheet or first sheet
    const sheetName = workbook.SheetNames.includes('H1 Evidence Candidates')
      ? 'H1 Evidence Candidates'
      : workbook.SheetNames[0];

    const sheet = workbook.Sheets[sheetName];
    const rawRows: any[] = XLSX.utils.sheet_to_json(sheet);

    if (rawRows.length === 0) {
      return NextResponse.json({ error: 'Sheet is empty' }, { status: 400 });
    }

    const importedCandidates: any[] = [];
    const aiSuggestions: any[] = [];

    rawRows.forEach((row, idx) => {
      const id = row['Evidence ID'] || `IND-${String(idx + 1).padStart(5, '0')}`;
      const originalRow = Number(row['Original workbook row'] || idx + 1);
      const text = row['Original review text'] || row['Review'] || row['reviewText'] || '';

      if (!text) return;

      importedCandidates.push({
        id,
        original_row: originalRow,
        rating: row['Rating'] ? Number(row['Rating']) : null,
        review_text: text,
        review_date: String(row['Review date'] || row['Date'] || ''),
        found_helpful: row['Found helpful'] ? Number(row['Found helpful']) : 0,
        source_platform: row['Source platform'] || 'Google Play Store',
        source_provenance: row['Source provenance'] || 'Imported dataset',
        source_reference: row['Source reference'] || `INDMoney Review Row #${originalRow}`,
        preliminary_keyword_signals: row['Keyword signals'] || '',
        triage_priority: row['Triage priority (not a finding)'] || '',
      });

      // Default AI suggestion
      aiSuggestions.push({
        candidate_id: id,
        categories: row['AI Suggested Categories']
          ? row['AI Suggested Categories'].split(';').map((s: string) => s.trim())
          : ['Bank mandate failure'],
        evidence_strength: row['AI Suggested Evidence Strength'] || 'INDIRECT',
        supporting_excerpt: (text.substring(0, 100)),
        explanation: 'Imported from verified research sheet.',
        research_implication: 'Requires researcher validation.',
      });
    });

    if (!isSupabaseConfigured()) {
      return NextResponse.json({
        success: true,
        mode: 'parsed_only_no_supabase',
        filename: file.name,
        processedRows: importedCandidates.length,
      });
    }

    const supabase = getSupabaseAdminClient() || getSupabaseClient();
    if (!supabase) {
      return NextResponse.json({ success: true, processedRows: importedCandidates.length });
    }

    // Insert candidates (ON CONFLICT DO NOTHING to preserve human decisions)
    const { error: candError } = await supabase
      .from('candidate_reviews')
      .upsert(importedCandidates, { onConflict: 'id', ignoreDuplicates: true });

    if (candError) {
      return NextResponse.json({ error: candError.message }, { status: 500 });
    }

    // Insert suggestions (ignore duplicates)
    await supabase
      .from('ai_classification_suggestions')
      .upsert(aiSuggestions, { onConflict: 'candidate_id', ignoreDuplicates: true });

    // Record dataset import provenance log
    await supabase.from('dataset_imports').insert({
      filename: file.name,
      row_count: importedCandidates.length,
      imported_by: 'PM Research Import',
      metadata: { sheetName, source: 'User File Upload' },
    });

    return NextResponse.json({
      success: true,
      mode: 'supabase_upserted_safely',
      filename: file.name,
      importedCount: importedCandidates.length,
      note: 'Existing human decisions were preserved without overwrite.',
    });
  } catch (err: any) {
    return NextResponse.json({ error: err?.message }, { status: 500 });
  }
}
