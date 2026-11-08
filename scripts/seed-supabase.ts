import { createClient } from '@supabase/supabase-js';
import * as dotenv from 'dotenv';
import { INITIAL_CANDIDATE_REVIEWS } from '../src/data/candidateReviewsData';
import { INITIAL_EVIDENCE_ITEMS } from '../src/data/evidenceData';

dotenv.config({ path: '.env.local' });
dotenv.config();

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseKey) {
  console.error('Error: NEXT_PUBLIC_SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY (or ANON_KEY) must be defined.');
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

async function seed() {
  console.log('Seeding Supabase database for INDMoney Investor Experience Discovery...');

  // 1. Seed Candidates (235 items)
  console.log(`Seeding ${INITIAL_CANDIDATE_REVIEWS.length} candidate reviews...`);
  const candidateRows = INITIAL_CANDIDATE_REVIEWS.map((c) => ({
    id: c.id,
    original_row: c.originalRow,
    rating: c.rating,
    review_text: c.reviewText,
    review_date: c.reviewDate,
    found_helpful: c.foundHelpful,
    source_platform: c.sourcePlatform,
    source_provenance: c.sourceProvenance,
    source_reference: c.sourceReference,
    preliminary_keyword_signals: c.preliminaryKeywordSignals,
    triage_priority: c.triagePriority,
  }));

  const { error: candErr } = await supabase
    .from('candidate_reviews')
    .upsert(candidateRows, { onConflict: 'id', ignoreDuplicates: true });

  if (candErr) {
    console.error('Error inserting candidate reviews:', candErr.message);
  } else {
    console.log('Successfully seeded candidate_reviews table.');
  }

  // 2. Seed AI suggestions
  console.log('Seeding AI classification suggestions...');
  const suggestionRows = INITIAL_CANDIDATE_REVIEWS.map((c) => ({
    candidate_id: c.id,
    categories: c.aiSuggestion.categories,
    evidence_strength: c.aiSuggestion.evidenceStrength,
    supporting_excerpt: c.aiSuggestion.supportingExcerpt,
    explanation: c.aiSuggestion.explanation,
    research_implication: c.aiSuggestion.researchImplication,
    model_used: 'heuristic-rule-engine-v2',
  }));

  const { error: sugErr } = await supabase
    .from('ai_classification_suggestions')
    .upsert(suggestionRows, { onConflict: 'candidate_id', ignoreDuplicates: true });

  if (sugErr) {
    console.error('Error inserting AI suggestions:', sugErr.message);
  } else {
    console.log('Successfully seeded ai_classification_suggestions table.');
  }

  // 3. Seed Audited Evidence Records (8 items)
  console.log(`Seeding ${INITIAL_EVIDENCE_ITEMS.length} audited evidence records...`);
  const evidenceRows = INITIAL_EVIDENCE_ITEMS.map((e) => ({
    id: e.id,
    source: e.source,
    source_url: e.sourceUrl,
    source_reference: e.sourceReference,
    date: e.date,
    rating: e.rating,
    platform: e.platform,
    user_segment: e.userSegment,
    verbatim_text: e.verbatimText,
    identified_pain_points: e.identifiedPainPoints,
    assigned_theme: e.assignedTheme,
    ai_suggested_category: e.aiSuggestedCategory,
    human_review_status: e.humanReviewStatus,
    reviewed_by: e.reviewedBy || 'Lead PM Researcher',
    human_review_notes: e.humanReviewNotes,
    confidence_score: e.confidenceScore,
    h1_relevant: e.h1Relevant,
    is_verified_real_review: e.isVerifiedRealReview,
  }));

  const { error: evErr } = await supabase
    .from('audited_evidence_records')
    .upsert(evidenceRows, { onConflict: 'id', ignoreDuplicates: true });

  if (evErr) {
    console.error('Error inserting audited evidence records:', evErr.message);
  } else {
    console.log('Successfully seeded audited_evidence_records table.');
  }

  console.log('Seeding complete! Human decisions were preserved without overwrite.');
}

seed().catch((err) => {
  console.error('Unexpected error during seeding:', err);
  process.exit(1);
});
