-- ==============================================================================
-- INDMoney Investor Experience Discovery: Database Schema (Supabase PostgreSQL)
-- Target Deadline: 9 November 2026
-- ==============================================================================

-- 1. Candidate Reviews Table (235 keyword-screened candidate reviews)
CREATE TABLE IF NOT EXISTS candidate_reviews (
    id VARCHAR(32) PRIMARY KEY, -- e.g. 'IND-00055'
    original_row INTEGER NOT NULL,
    rating INTEGER,
    review_text TEXT NOT NULL,
    review_date VARCHAR(32),
    found_helpful INTEGER DEFAULT 0,
    source_platform VARCHAR(64) DEFAULT 'Google Play Store',
    source_provenance VARCHAR(128) DEFAULT 'Imported INDMoney app review dataset',
    source_reference VARCHAR(128) NOT NULL,
    preliminary_keyword_signals TEXT,
    triage_priority TEXT,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Index for searching and filtering
CREATE INDEX IF NOT EXISTS idx_candidates_rating ON candidate_reviews(rating);
CREATE INDEX IF NOT EXISTS idx_candidates_date ON candidate_reviews(review_date);
CREATE INDEX IF NOT EXISTS idx_candidates_row ON candidate_reviews(original_row);

-- 2. AI Classification Suggestions Table
CREATE TABLE IF NOT EXISTS ai_classification_suggestions (
    candidate_id VARCHAR(32) PRIMARY KEY REFERENCES candidate_reviews(id) ON DELETE CASCADE,
    categories TEXT[] NOT NULL DEFAULT '{}',
    evidence_strength VARCHAR(32) NOT NULL, -- 'DIRECT', 'INDIRECT', 'INSUFFICIENT'
    supporting_excerpt TEXT,
    explanation TEXT,
    research_implication TEXT,
    model_used VARCHAR(64) DEFAULT 'heuristic-rule-engine-v2',
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 3. Human Review Decisions Table (Governance & overrides)
CREATE TABLE IF NOT EXISTS human_review_decisions (
    candidate_id VARCHAR(32) PRIMARY KEY REFERENCES candidate_reviews(id) ON DELETE CASCADE,
    approval_status VARCHAR(32) NOT NULL DEFAULT 'pending', -- 'pending', 'approved', 'rejected', 'investigate'
    human_categories TEXT[] DEFAULT '{}',
    human_evidence_strength VARCHAR(32) DEFAULT 'UNASSIGNED', -- 'DIRECT', 'INDIRECT', 'INSUFFICIENT', 'UNASSIGNED'
    researcher_notes TEXT DEFAULT '',
    reviewed_by VARCHAR(128) DEFAULT 'Lead PM Researcher',
    reviewed_at VARCHAR(64),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_human_status ON human_review_decisions(approval_status);
CREATE INDEX IF NOT EXISTS idx_human_strength ON human_review_decisions(human_evidence_strength);

-- 4. Audited Evidence Records Table (8 Deep-Dive Core Records)
CREATE TABLE IF NOT EXISTS audited_evidence_records (
    id VARCHAR(32) PRIMARY KEY, -- e.g. 'EVD-001'
    source VARCHAR(128) NOT NULL,
    source_url TEXT,
    source_reference TEXT NOT NULL,
    date VARCHAR(32) NOT NULL,
    rating INTEGER,
    platform VARCHAR(64) NOT NULL,
    user_segment VARCHAR(128) NOT NULL,
    verbatim_text TEXT NOT NULL,
    identified_pain_points TEXT[] DEFAULT '{}',
    assigned_theme VARCHAR(128) NOT NULL,
    ai_suggested_category VARCHAR(128),
    human_review_status VARCHAR(32) DEFAULT 'approved',
    reviewed_by VARCHAR(128) DEFAULT 'Lead PM Researcher',
    human_review_notes TEXT,
    confidence_score INTEGER DEFAULT 92,
    h1_relevant BOOLEAN DEFAULT TRUE,
    is_verified_real_review BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 5. Research Decision History (Immutable Audit Log)
CREATE TABLE IF NOT EXISTS research_decision_history (
    id BIGSERIAL PRIMARY KEY,
    candidate_id VARCHAR(32) REFERENCES candidate_reviews(id) ON DELETE CASCADE,
    action VARCHAR(64) NOT NULL, -- 'STATUS_CHANGE', 'CATEGORIES_EDIT', 'STRENGTH_OVERRIDE', 'NOTE_ADDED', 'BATCH_TRIAGE'
    previous_status VARCHAR(32),
    new_status VARCHAR(32),
    previous_strength VARCHAR(32),
    new_strength VARCHAR(32),
    categories_assigned TEXT[],
    notes TEXT,
    actor VARCHAR(128) DEFAULT 'Lead PM Researcher',
    created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_history_candidate ON research_decision_history(candidate_id);
CREATE INDEX IF NOT EXISTS idx_history_created ON research_decision_history(created_at);

-- 6. Dataset Imports Log (Excel ingestion provenance)
CREATE TABLE IF NOT EXISTS dataset_imports (
    id BIGSERIAL PRIMARY KEY,
    filename VARCHAR(256) NOT NULL,
    row_count INTEGER NOT NULL,
    checksum VARCHAR(64),
    imported_by VARCHAR(128) DEFAULT 'System Seed',
    metadata JSONB DEFAULT '{}',
    imported_at TIMESTAMPTZ DEFAULT NOW()
);

-- 7. Original Reviews Corpus (62,523 raw reviews)
CREATE TABLE IF NOT EXISTS original_reviews (
    id BIGSERIAL PRIMARY KEY,
    rating INTEGER,
    review_text TEXT NOT NULL,
    review_date VARCHAR(32),
    developer_reply TEXT,
    found_helpful INTEGER DEFAULT 0,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_original_rating ON original_reviews(rating);
CREATE INDEX IF NOT EXISTS idx_original_date ON original_reviews(review_date);

-- ==============================================================================
-- ROW LEVEL SECURITY (RLS) POLICIES
-- ==============================================================================

ALTER TABLE candidate_reviews ENABLE ROW LEVEL SECURITY;
ALTER TABLE ai_classification_suggestions ENABLE ROW LEVEL SECURITY;
ALTER TABLE human_review_decisions ENABLE ROW LEVEL SECURITY;
ALTER TABLE audited_evidence_records ENABLE ROW LEVEL SECURITY;
ALTER TABLE research_decision_history ENABLE ROW LEVEL SECURITY;
ALTER TABLE dataset_imports ENABLE ROW LEVEL SECURITY;
ALTER TABLE original_reviews ENABLE ROW LEVEL SECURITY;

-- Read policies: Public read access for research review
DROP POLICY IF EXISTS "Public Read Candidates" ON candidate_reviews;
CREATE POLICY "Public Read Candidates" ON candidate_reviews FOR SELECT USING (true);

DROP POLICY IF EXISTS "Public Read AI Suggestions" ON ai_classification_suggestions;
CREATE POLICY "Public Read AI Suggestions" ON ai_classification_suggestions FOR SELECT USING (true);

DROP POLICY IF EXISTS "Public Read Human Decisions" ON human_review_decisions;
CREATE POLICY "Public Read Human Decisions" ON human_review_decisions FOR SELECT USING (true);

DROP POLICY IF EXISTS "Public Read Audited Evidence" ON audited_evidence_records;
CREATE POLICY "Public Read Audited Evidence" ON audited_evidence_records FOR SELECT USING (true);

DROP POLICY IF EXISTS "Public Read Decision History" ON research_decision_history;
CREATE POLICY "Public Read Decision History" ON research_decision_history FOR SELECT USING (true);

DROP POLICY IF EXISTS "Public Read Dataset Imports" ON dataset_imports;
CREATE POLICY "Public Read Dataset Imports" ON dataset_imports FOR SELECT USING (true);

DROP POLICY IF EXISTS "Public Read Original Reviews" ON original_reviews;
CREATE POLICY "Public Read Original Reviews" ON original_reviews FOR SELECT USING (true);

-- Write policies: Enable write via authenticated clients or service role
DROP POLICY IF EXISTS "Public Write Human Decisions" ON human_review_decisions;
CREATE POLICY "Public Write Human Decisions" ON human_review_decisions FOR ALL USING (true) WITH CHECK (true);

DROP POLICY IF EXISTS "Public Write History" ON research_decision_history;
CREATE POLICY "Public Write History" ON research_decision_history FOR INSERT WITH CHECK (true);

DROP POLICY IF EXISTS "Public Write Candidates" ON candidate_reviews;
CREATE POLICY "Public Write Candidates" ON candidate_reviews FOR ALL USING (true) WITH CHECK (true);

DROP POLICY IF EXISTS "Public Write AI Suggestions" ON ai_classification_suggestions;
CREATE POLICY "Public Write AI Suggestions" ON ai_classification_suggestions FOR ALL USING (true) WITH CHECK (true);

DROP POLICY IF EXISTS "Public Write Audited Evidence" ON audited_evidence_records;
CREATE POLICY "Public Write Audited Evidence" ON audited_evidence_records FOR ALL USING (true) WITH CHECK (true);

DROP POLICY IF EXISTS "Public Write Dataset Imports" ON dataset_imports;
CREATE POLICY "Public Write Dataset Imports" ON dataset_imports FOR ALL USING (true) WITH CHECK (true);
