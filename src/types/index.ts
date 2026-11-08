export type NavSection =
  | 'overview'
  | 'review_workspace'
  | 'evidence'
  | 'themes'
  | 'opportunities'
  | 'h1_workspace'
  | 'prototype'
  | 'decision_log'
  | 'survey';

export type HumanReviewStatus =
  | 'draft'
  | 'approved'
  | 'rejected'
  | 'needs_validation';

export type ClassificationCategory =
  | 'Bank mandate failure'
  | 'SIP debit failure'
  | 'SIP instalment debit failure'
  | 'NACH / AutoPay issue'
  | 'Bank account linking problem'
  | 'SIP setup issue'
  | 'Withdrawal / redemption issue'
  | 'General payment issue'
  | 'Unrelated feedback'
  | 'Insufficient information';

export type EvidenceStrength =
  | 'DIRECT'
  | 'INDIRECT'
  | 'INSUFFICIENT'
  | 'UNASSIGNED';

export type CandidateReviewStatus =
  | 'pending'
  | 'approved'
  | 'rejected'
  | 'investigate';

export interface AISuggestion {
  categories: ClassificationCategory[];
  evidenceStrength: 'DIRECT' | 'INDIRECT' | 'INSUFFICIENT';
  supportingExcerpt: string;
  explanation: string;
  researchImplication: string;
}

export interface ReviewRecord {
  id: string;
  originalRow: number;
  rating: number | null;
  reviewText: string;
  reviewDate: string;
  foundHelpful: number;
  sourcePlatform: string;
  sourceProvenance: string;
  sourceReference: string;
  preliminaryKeywordSignals: string;
  triagePriority: string;
  humanReviewStatus: CandidateReviewStatus;
  humanCategories: ClassificationCategory[];
  humanEvidenceStrength: EvidenceStrength;
  researcherNotes: string;
  reviewedAt: string | null;
  reviewedBy: string | null;
  aiSuggestion: AISuggestion;
}

export interface EvidenceItem {
  id: string;
  source: 'Google Play Store' | 'Apple App Store' | 'Reddit r/IndiaInvestments' | 'TradingQ&A' | 'User Research Interview';
  sourceUrl?: string;
  sourceReference: string; // e.g. "Google Play Review ID: 1004" or "TradingQ&A Thread #10492"
  date: string;
  rating?: number;
  userSegment: 'First-time SIP (PSU Bank)' | 'First-time SIP (Private Bank)' | 'Experienced SIP' | 'Salary Mismatch';
  verbatimText: string;
  platform: 'Android App' | 'iOS App' | 'Web Community' | 'Qualitative Interview';
  identifiedPainPoints: string[];
  assignedTheme: string;
  aiSuggestedCategory: string;
  humanReviewStatus: HumanReviewStatus;
  reviewedBy?: string;
  humanReviewNotes?: string;
  confidenceScore: number; // 0 - 100 (AI heuristic score)
  h1Relevant: boolean;
  isVerifiedRealReview: boolean; // Flag distinguishing authentic scraped review from illustrative benchmark
}

export interface ThemeItem {
  id: string;
  title: string;
  description: string;
  frequencyRank: number;
  sampleCount: number; // Mentions in raw keyword cluster
  verifiedSampleCount: number; // Verified SIP-specific samples
  severityLevel: 'High' | 'Medium' | 'Critical';
  humanReviewStatus: HumanReviewStatus;
  reviewedBy: string;
  keyQuotes: string[];
  suggestedAction: string;
  isPreliminaryCluster: boolean;
}

export interface OpportunityItem {
  id: string;
  code: string; // e.g. OPP-01
  title: string;
  hypothesis: string;
  targetSegment: string;
  evidenceCount: number;
  frequencyScore: number; // 1-5 (4.8)
  severityScore: number;  // 1-5 (4.9)
  retentionLinkScore: number; // 1-5 (4.8)
  evidenceQualityScore: number; // 1-5 (4.6)
  overallScore: number; // 95.7
  scoreType: 'Imported Preliminary Score' | 'Evaluated Score';
  isSelectedForGraduation: boolean;
  status: 'Selected for Graduation' | 'Backlog' | 'Under Evaluation';
  validationStatus: 'Not Validated' | 'Partially Validated' | 'Validated';
  scoringMethodology: string;
}

export interface Persona {
  id: string;
  name: string;
  role: string;
  age: number;
  city: string;
  bankType: string;
  sipAmount: string;
  sipTenure: string;
  quote: string;
  goals: string[];
  painPoints: string[];
  behaviourAfterFailure: string;
  evidenceSourceRef: string;
}

export interface JourneyStep {
  stepNumber: number;
  stageName: string;
  userAction: string;
  touchpoint: string;
  systemBehavior: string;
  emotionalState: 'Frustrated' | 'Confused' | 'Anxious' | 'Neutral' | 'Reassured' | 'Confident';
  painPointOrGain: string;
}

export interface DecisionLogEntry {
  id: string;
  date: string;
  decision: string;
  contextAndRationale: string;
  stakeholder: string;
  status: 'Approved' | 'Proposed' | 'Under Review';
  category: 'Hypothesis' | 'Scope' | 'Design' | 'Analytics' | 'AI Governance' | 'Data Audit';
}
