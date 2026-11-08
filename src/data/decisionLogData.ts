import { DecisionLogEntry } from '../types';

export const INITIAL_DECISION_LOG: DecisionLogEntry[] = [
  {
    id: 'DEC-001',
    date: '2026-10-22',
    decision: 'Prioritised Hypothesis H1 (Bank Mandate Debit Failures) for Graduation Project',
    contextAndRationale: 'From candidate reviews, Mandate Failures emerged as the highest scoring opportunity (95.7/100 preliminary model score). Qualitative feedback revealed that mandate failures trigger involuntary churn: users do not lose willingness to invest, but get trapped in unresolved bank return loops and fear of bounce charges.',
    stakeholder: 'Senior PM & NextLeap Mentor',
    status: 'Approved',
    category: 'Hypothesis'
  },
  {
    id: 'DEC-002',
    date: '2026-10-25',
    decision: 'Strict Separation of Qualitative Evidence vs Actual Production Metrics',
    contextAndRationale: 'Established core policy: publicly scraped app reviews and interview transcripts provide plausible behavioural insights but cannot independently prove 12-month retention rates. All baseline metrics (e.g. 54.2% retention, 18.4% recovery rate) are labelled as illustrative/model benchmarks until live telemetry is connected.',
    stakeholder: 'Lead Product Researcher',
    status: 'Approved',
    category: 'AI Governance'
  },
  {
    id: 'DEC-003',
    date: '2026-10-28',
    decision: 'Human-in-the-Loop Governance over AI Categorisation',
    contextAndRationale: 'AI clustering and theme summarisation must remain advisory drafts. A human researcher must review and approve themes before they influence product roadmaps. Unreviewed AI categorisations are visually tagged with "Needs Review" badges.',
    stakeholder: 'AI Engineering Partner',
    status: 'Approved',
    category: 'AI Governance'
  },
  {
    id: 'DEC-004',
    date: '2026-11-02',
    decision: 'Adopted 3-Option Recovery Model for Prototype Design',
    contextAndRationale: 'User research highlighted 3 distinct root causes: (1) Temporary cash balance delay -> solved by Instant UPI retry for same-day NAV; (2) Persistent salary date mismatch -> solved by Reschedule Debit Date; (3) Mandate authentication/limit expiry -> solved by Update Bank Mandate.',
    stakeholder: 'Product Designer & PM Lead',
    status: 'Approved',
    category: 'Design'
  },
  {
    id: 'DEC-005',
    date: '2026-11-06',
    decision: 'Zero-Charge Reassurance Messaging as Critical Value Proposition',
    contextAndRationale: 'Interviews revealed that fear of bank penalty charges (e.g. standard SBI ₹250 + GST NACH return fee) causes first-time users to abandon the app entirely. Prototype explicitly states: "INDmoney charges ₹0 penalty for failed debits. Your existing investments and credit score remain safe."',
    stakeholder: 'Senior PM',
    status: 'Approved',
    category: 'Design'
  },
  {
    id: 'DEC-006',
    date: '2026-11-08',
    decision: 'Phase 2 Data Audit: Correction of Unsupported Research Claims & Metric Disclaimers',
    contextAndRationale: 'Audited all displayed statistics across the application. (1) Clarified that the "52" figure represents a broad keyword search cluster across 2,490 reviews, containing general autopay mentions that require manual filtering. (2) Re-labeled the 95.7 score as an "Imported Preliminary Model Output" awaiting live cohort experiment validation. (3) Marked 18% to 65% recovery rate strictly as an A/B experiment design target rather than a measured metric. (4) Documented ₹295 bank return fees as an illustrative PSU bank fee scenario.',
    stakeholder: 'Lead PM Researcher',
    status: 'Approved',
    category: 'Data Audit'
  },
  {
    id: 'DEC-007',
    date: '2026-11-08',
    decision: 'Target Graduation Project Deadline Updated to 9 November 2026',
    contextAndRationale: 'Updated target graduation project delivery milestone and final defense submission date across all screens, documentation, and executive exports to 9 November 2026.',
    stakeholder: 'NextLeap Cohort Lead',
    status: 'Approved',
    category: 'Scope'
  }
];
