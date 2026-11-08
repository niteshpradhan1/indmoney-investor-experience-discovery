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

// ==============================================================================
// PHASE 5: INVESTOR INTERVIEWS & JOURNEY TELEMETRY TYPES
// ==============================================================================

export type InvestorExperienceLevel = 'Novice' | 'Intermediate' | 'Experienced';
export type SIPContinuityStatus = 'Active' | 'Paused' | 'Discontinued';
export type FirstTimeSIPStatus = 'First-time SIP' | 'Repeat / Experienced SIP';
export type ConsentStatus = 'Informed Consent Obtained' | 'Pending Consent';

export type TelemetryEventName =
  | 'sip_created'
  | 'mandate_registration_started'
  | 'mandate_activated'
  | 'sip_debit_scheduled'
  | 'sip_debit_failed'
  | 'failure_notification_sent'
  | 'failure_notification_viewed'
  | 'recovery_attempted'
  | 'sip_instalment_successful'
  | 'sip_paused'
  | 'sip_cancelled';

export interface InterviewParticipant {
  id: string; // e.g. "INV-001"
  experienceProfile: InvestorExperienceLevel;
  firstTimeSip: boolean;
  sipStatus: SIPContinuityStatus;
  bankMandateExperience: string; // e.g. "State Bank of India (PSU NACH)"
  interviewDate: string;
  consentObtained: boolean;
  interviewNotes: string;
  researcherObservations: string;
  responses: Record<string, string>; // Q1 -> response text
  verbatimQuotes: Array<{
    id: string;
    quote: string;
    questionId: string;
    linkedThemeId?: string;
    isContradictory?: boolean;
    researcherInterpretation?: string;
  }>;
  createdAt: string;
}

export interface Phase4PainPointTheme {
  id: string;
  code: string;
  title: string;
  reviewCount: number;
  supportingReviewIds: string[];
  description: string;
  h1Relevance: 'Direct Support' | 'Indirect Context';
  evidenceLimitation: string;
}

export interface TelemetryEventRecord {
  eventId: string;
  userId: string;
  eventName: TelemetryEventName;
  timestamp: string;
  sipId: string;
  bankName: string;
  failureReason?: string;
  amount?: number;
}

export interface CohortAnalysisSummary {
  firstTimeSipCohort: {
    totalInvestors: number;
    mandateActivationRate: number; // percentage
    firstDebitFailureRate: number; // percentage
    subsequentDropOffRate: number; // percentage
  };
  experiencedSipCohort: {
    totalInvestors: number;
    mandateActivationRate: number;
    firstDebitFailureRate: number;
    subsequentDropOffRate: number;
  };
  failedMandateCohort: {
    totalFailed: number;
    recoveredWithin48h: number; // percentage
    subsequentDebitSuccess: number; // percentage
    involuntaryCancellationRate: number; // percentage
  };
  successfulMandateCohort: {
    totalSuccessful: number;
    instalmentSuccessRate: number; // percentage
    cancellationRate: number; // percentage
  };
  repeatDebitFailures: {
    singleFailure: number;
    twoConsecutiveFailures: number;
    threeOrMoreFailures: number;
  };
  pausesAndCancellations: {
    voluntaryPauseCount: number;
    postFailureCancellationCount: number;
    proactiveCancellationCount: number;
  };
  retention12Month: {
    eligibleInvestorsCount: number;
    activeInvestorsCount: number; // at least 1 successful debit in prior 30 days
    retentionRate: number;
    strictDefinition: string;
  };
}

export interface HypothesisValidationSynthesis {
  status: 'NOT VALIDATED';
  confidenceScore: number;
  reviewCorpusDirectCount: number;
  participantCount: number;
  telemetryEventsCount: number;
  supportingPillars: Array<{
    title: string;
    evidence: string;
    strength: 'DIRECT' | 'SUPPORTIVE';
  }>;
  contradictoryFindings: Array<{
    title: string;
    finding: string;
    implication: string;
  }>;
  missingDataGaps: Array<{
    gap: string;
    whyNeeded: string;
  }>;
  remainingValidationQuestions: string[];
}

// ==============================================================================
// PHASE 5: RESEARCH QUALITY & EVIDENCE GOVERNANCE TYPES
// ==============================================================================

export type EvidenceTier =
  | 'Tier 1: Direct'
  | 'Tier 2: Supporting'
  | 'Tier 3: Contextual'
  | 'Contradictory';

export type H1RelevanceRating =
  | 'Directly Supports H1'
  | 'Indirectly Related'
  | 'Contradicts H1'
  | 'Not Relevant';

export type InsightValidationStatus =
  | 'Draft'
  | 'Under Review'
  | 'Validated'
  | 'Rejected';

export type ContradictoryCategory =
  | 'Discretionary Spending'
  | 'Insufficient Balance'
  | 'Changing Investment Priorities'
  | 'Unrelated Technical Issue';

export interface QualitativeInsight {
  id: string; // e.g. "INS-001"
  participantId: string; // e.g. "INV-001"
  originalStatement: string; // Original verbatim quote or event ref
  researcherInterpretation: string; // Deep PM deduction
  evidenceTier: EvidenceTier;
  h1Relevance: H1RelevanceRating;
  validationStatus: InsightValidationStatus;
  researcherApproval: {
    isApproved: boolean;
    approvedBy: string;
    approvedAt: string | null;
    notes?: string;
  };
  sourceType: 'Actual Interview' | 'Demonstration Benchmark';
  linkedThemeId?: string; // e.g. "THEME-P3"
  contradictoryCategory?: ContradictoryCategory;
  createdAt: string;
}

export interface ContradictoryEvidenceRecord {
  id: string;
  category: ContradictoryCategory;
  title: string;
  description: string;
  observedFrequency: string; // e.g. "High (18% of pauses)"
  customerQuoteOrBehavior: string;
  h1ImpactAssessment: string;
  counterMitigationOrIsolation: string;
  participantRef?: string;
}

export interface TelemetryDataDictionaryItem {
  name: TelemetryEventName;
  label: string;
  stage: 'Creation' | 'Mandate Setup' | 'Execution' | 'Communication' | 'Recovery' | 'Settlement' | 'Lifecycle';
  description: string;
  triggerCondition: string;
  requiredProperties: string[];
  optionalProperties: string[];
  timestampFormat: string; // e.g. "ISO 8601 UTC (YYYY-MM-DDTHH:mm:ssZ)"
  participantIdentifierFormat: string; // e.g. "USR-[0-9]{5}"
  associatedErrorCodes?: Array<{ code: string; meaning: string; entity: 'NPCI' | 'Bank' | 'INDMoney' }>;
  exampleJson: string;
}

export interface CsvImportError {
  rowNumber: number;
  field: string;
  message: string;
  rawSnippet: string;
}

export interface CsvDuplicateRecord {
  rowNumber: number;
  eventId: string;
  userId: string;
  eventName: string;
  reason: string;
}

export interface CsvImportResult {
  totalRowsProcessed: number;
  validRowsCount: number;
  duplicatesCount: number;
  errorCount: number;
  errors: CsvImportError[];
  duplicates: CsvDuplicateRecord[];
  importedEvents: TelemetryEventRecord[];
}
