import { Phase4PainPointTheme, TelemetryEventRecord } from '../types';

export const PHASE_4_PAIN_POINT_THEMES: Phase4PainPointTheme[] = [
  {
    id: 'THEME-P1',
    code: 'PAIN-01',
    title: 'Phantom Mandate Debits Post-Cancellation or Pause',
    reviewCount: 6,
    supportingReviewIds: ['IND-19705', 'IND-37692', 'IND-42585', 'IND-51705', 'IND-59144', 'IND-42576'],
    description: 'Mandates continue to debit bank accounts even after the investor has paused or cancelled the SIP within the INDMoney app, indicating a critical disconnect between the app state and NPCI / sponsor bank mandate registry.',
    h1Relevance: 'Direct Support',
    evidenceLimitation: 'Reviews establish that debits continue post-cancellation, but cannot observe whether the failure lies in BSE StAR MF cancellation queuing or NPCI Nach bank processing.'
  },
  {
    id: 'THEME-P2',
    code: 'PAIN-02',
    title: 'Silent Mandate Failures Despite Funds Present',
    reviewCount: 5,
    supportingReviewIds: ['IND-25733', 'IND-27496', 'IND-31462', 'IND-35186', 'IND-52454'],
    description: 'AutoPay debits fail silently without advance warning even when the investor maintains sufficient bank balance, resulting in skipped instalments, broken compounding, and investor distrust.',
    h1Relevance: 'Direct Support',
    evidenceLimitation: 'App Store feedback does not log specific bank error codes (e.g., NPCI code 03 vs 04) or bank core banking downtime windows.'
  },
  {
    id: 'THEME-P3',
    code: 'PAIN-03',
    title: 'Bank Bounce Fines & Penalties',
    reviewCount: 4,
    supportingReviewIds: ['IND-08924', 'IND-15499', 'IND-34882', 'IND-51705'],
    description: 'When mandate debits fail (due to salary mismatch or technical glitches), partner banks (SBI, HDFC, ICICI) impose punitive ECS/NACH bounce charges (₹295–₹590), causing intense investor outrage and immediate app uninstallation.',
    h1Relevance: 'Direct Support',
    evidenceLimitation: 'Bounce charge receipts are reported by users; bank fee reversals cannot be confirmed through app reviews alone.'
  },
  {
    id: 'THEME-P4',
    code: 'PAIN-04',
    title: 'Ledger De-synchronization: Debited but No Units Allotted',
    reviewCount: 4,
    supportingReviewIds: ['IND-00358', 'IND-10308', 'IND-34635', 'IND-35068'],
    description: 'Money is successfully deducted from the investor bank account, but units fail to reflect in the INDMoney portfolio for 7 to 15 days, creating panic that funds are lost in transit between sponsor banks and AMC folios.',
    h1Relevance: 'Direct Support',
    evidenceLimitation: 'Distinguishing platform UI synchronization lag from clearing house (ICCL/BSE) settlement delays requires internal transaction telemetry.'
  },
  {
    id: 'THEME-P5',
    code: 'PAIN-05',
    title: 'Duplicate Setup Deductions',
    reviewCount: 4,
    supportingReviewIds: ['IND-02962', 'IND-03226', 'IND-33178', 'IND-42576'],
    description: 'During AutoPay mandate registration or retry, investors experience multiple simultaneous ₹1 or full instalment deductions from their accounts without clear confirmation of which mandate is active.',
    h1Relevance: 'Direct Support',
    evidenceLimitation: 'Limited data on whether duplicate deductions originate from user repeated button taps or bank payment gateway duplicate callbacks.'
  },
  {
    id: 'THEME-P6',
    code: 'PAIN-06',
    title: 'Mandate Modification & Bank Switching Blocks',
    reviewCount: 3,
    supportingReviewIds: ['IND-15499', 'IND-43584', 'IND-46721'],
    description: 'Investors changing salary accounts or primary banks are unable to migrate existing active SIP mandates, forcing tedious manual cancellation, loss of fund tenure track record, and high churn.',
    h1Relevance: 'Direct Support',
    evidenceLimitation: 'Platform does not expose whether mandate modification is blocked by AMC-level OTM constraints or INDMoney app UI limitations.'
  }
];

// Sample standard telemetry dataset for benchmarking & verification (N=20 anonymized realistic events)
export const SAMPLE_BENCHMARK_TELEMETRY: TelemetryEventRecord[] = [
  { eventId: 'EVT-1001', userId: 'USR-84102', eventName: 'sip_created', timestamp: '2026-10-01T09:15:00Z', sipId: 'SIP-901', bankName: 'HDFC Bank', amount: 5000 },
  { eventId: 'EVT-1002', userId: 'USR-84102', eventName: 'mandate_registration_started', timestamp: '2026-10-01T09:16:30Z', sipId: 'SIP-901', bankName: 'HDFC Bank' },
  { eventId: 'EVT-1003', userId: 'USR-84102', eventName: 'mandate_activated', timestamp: '2026-10-01T09:22:00Z', sipId: 'SIP-901', bankName: 'HDFC Bank' },
  { eventId: 'EVT-1004', userId: 'USR-84102', eventName: 'sip_debit_scheduled', timestamp: '2026-10-05T00:01:00Z', sipId: 'SIP-901', bankName: 'HDFC Bank', amount: 5000 },
  { eventId: 'EVT-1005', userId: 'USR-84102', eventName: 'sip_instalment_successful', timestamp: '2026-10-05T06:30:00Z', sipId: 'SIP-901', bankName: 'HDFC Bank', amount: 5000 },

  { eventId: 'EVT-2001', userId: 'USR-91244', eventName: 'sip_created', timestamp: '2026-10-02T11:00:00Z', sipId: 'SIP-902', bankName: 'State Bank of India', amount: 2000 },
  { eventId: 'EVT-2002', userId: 'USR-91244', eventName: 'mandate_registration_started', timestamp: '2026-10-02T11:02:10Z', sipId: 'SIP-902', bankName: 'State Bank of India' },
  { eventId: 'EVT-2003', userId: 'USR-91244', eventName: 'mandate_activated', timestamp: '2026-10-02T14:40:00Z', sipId: 'SIP-902', bankName: 'State Bank of India' },
  { eventId: 'EVT-2004', userId: 'USR-91244', eventName: 'sip_debit_scheduled', timestamp: '2026-10-07T00:01:00Z', sipId: 'SIP-902', bankName: 'State Bank of India', amount: 2000 },
  { eventId: 'EVT-2005', userId: 'USR-91244', eventName: 'sip_debit_failed', timestamp: '2026-10-07T07:15:00Z', sipId: 'SIP-902', bankName: 'State Bank of India', failureReason: 'Insufficient Balance / Salary Lag', amount: 2000 },
  { eventId: 'EVT-2006', userId: 'USR-91244', eventName: 'failure_notification_sent', timestamp: '2026-10-07T07:20:00Z', sipId: 'SIP-902', bankName: 'State Bank of India' },
  { eventId: 'EVT-2007', userId: 'USR-91244', eventName: 'failure_notification_viewed', timestamp: '2026-10-07T18:45:00Z', sipId: 'SIP-902', bankName: 'State Bank of India' },
  { eventId: 'EVT-2008', userId: 'USR-91244', eventName: 'recovery_attempted', timestamp: '2026-10-07T18:50:00Z', sipId: 'SIP-902', bankName: 'State Bank of India' },
  { eventId: 'EVT-2009', userId: 'USR-91244', eventName: 'sip_instalment_successful', timestamp: '2026-10-07T18:52:30Z', sipId: 'SIP-902', bankName: 'State Bank of India', amount: 2000 },

  { eventId: 'EVT-3001', userId: 'USR-55821', eventName: 'sip_created', timestamp: '2026-09-10T14:10:00Z', sipId: 'SIP-903', bankName: 'ICICI Bank', amount: 10000 },
  { eventId: 'EVT-3002', userId: 'USR-55821', eventName: 'mandate_activated', timestamp: '2026-09-10T14:15:00Z', sipId: 'SIP-903', bankName: 'ICICI Bank' },
  { eventId: 'EVT-3003', userId: 'USR-55821', eventName: 'sip_debit_failed', timestamp: '2026-10-10T08:00:00Z', sipId: 'SIP-903', bankName: 'ICICI Bank', failureReason: 'Mandate Not Active at Destination Bank', amount: 10000 },
  { eventId: 'EVT-3004', userId: 'USR-55821', eventName: 'failure_notification_sent', timestamp: '2026-10-10T08:05:00Z', sipId: 'SIP-903', bankName: 'ICICI Bank' },
  { eventId: 'EVT-3005', userId: 'USR-55821', eventName: 'sip_cancelled', timestamp: '2026-10-12T10:00:00Z', sipId: 'SIP-903', bankName: 'ICICI Bank' },
  { eventId: 'EVT-3006', userId: 'USR-77319', eventName: 'sip_paused', timestamp: '2026-10-15T16:20:00Z', sipId: 'SIP-904', bankName: 'Axis Bank' }
];

// ==============================================================================
// TELEMETRY DATA DICTIONARY (11 Standard Events)
// ==============================================================================

import { TelemetryDataDictionaryItem, ContradictoryEvidenceRecord, QualitativeInsight } from '../types';

export const TELEMETRY_DATA_DICTIONARY: TelemetryDataDictionaryItem[] = [
  {
    name: 'sip_created',
    label: 'SIP Order Initialised',
    stage: 'Creation',
    description: 'Triggered when the investor selects a mutual fund scheme, selects an instalment date, inputs the monthly amount, and clicks "Set up SIP".',
    triggerCondition: 'Client-side button click with confirmed folio creation request.',
    requiredProperties: ['event_id', 'user_id', 'sip_id', 'amount', 'timestamp'],
    optionalProperties: ['amc_code', 'folio_number', 'scheme_isin'],
    timestampFormat: 'ISO 8601 UTC (YYYY-MM-DDTHH:mm:ssZ)',
    participantIdentifierFormat: 'USR-[0-9]{5}',
    exampleJson: JSON.stringify({
      event_id: 'EVT-1001',
      user_id: 'USR-84102',
      event_name: 'sip_created',
      timestamp: '2026-10-01T09:15:00Z',
      sip_id: 'SIP-901',
      amount: 5000,
      bank_name: 'HDFC Bank'
    }, null, 2)
  },
  {
    name: 'mandate_registration_started',
    label: 'Mandate Authorization Hand-off',
    stage: 'Mandate Setup',
    description: 'Triggered when the user is redirected to NPCI ONMAGS / sponsor bank portal (Netbanking, Debit Card, or UPI AutoPay authorization flow).',
    triggerCondition: 'Redirection to external banking or NPCI gateway URL.',
    requiredProperties: ['event_id', 'user_id', 'sip_id', 'bank_name', 'timestamp'],
    optionalProperties: ['auth_mode', 'gateway_id', 'max_mandate_limit'],
    timestampFormat: 'ISO 8601 UTC (YYYY-MM-DDTHH:mm:ssZ)',
    participantIdentifierFormat: 'USR-[0-9]{5}',
    exampleJson: JSON.stringify({
      event_id: 'EVT-1002',
      user_id: 'USR-84102',
      event_name: 'mandate_registration_started',
      timestamp: '2026-10-01T09:16:30Z',
      sip_id: 'SIP-901',
      bank_name: 'HDFC Bank'
    }, null, 2)
  },
  {
    name: 'mandate_activated',
    label: 'Mandate Registration Confirmed',
    stage: 'Mandate Setup',
    description: 'Triggered upon receiving an asynchronous callback or webhook from the sponsor bank / NPCI confirming that the e-mandate URN is registered.',
    triggerCondition: 'NPCI webhook confirmation receipt with status SUCCESS.',
    requiredProperties: ['event_id', 'user_id', 'sip_id', 'timestamp'],
    optionalProperties: ['umrn_number', 'bank_reference_id', 'activation_latency_seconds'],
    timestampFormat: 'ISO 8601 UTC (YYYY-MM-DDTHH:mm:ssZ)',
    participantIdentifierFormat: 'USR-[0-9]{5}',
    exampleJson: JSON.stringify({
      event_id: 'EVT-1003',
      user_id: 'USR-84102',
      event_name: 'mandate_activated',
      timestamp: '2026-10-01T09:22:00Z',
      sip_id: 'SIP-901',
      bank_name: 'HDFC Bank'
    }, null, 2)
  },
  {
    name: 'sip_debit_scheduled',
    label: 'Instalment Debit Queued for Clearing',
    stage: 'Execution',
    description: 'Triggered T-2 business days prior to SIP debit date when INDMoney generates the clearing house debit presentation file for NPCI / BSE StAR MF.',
    triggerCondition: 'Cron execution of automated batch presentation file creation.',
    requiredProperties: ['event_id', 'user_id', 'sip_id', 'amount', 'timestamp'],
    optionalProperties: ['batch_id', 'scheduled_debit_date', 'cycle_number'],
    timestampFormat: 'ISO 8601 UTC (YYYY-MM-DDTHH:mm:ssZ)',
    participantIdentifierFormat: 'USR-[0-9]{5}',
    exampleJson: JSON.stringify({
      event_id: 'EVT-1004',
      user_id: 'USR-84102',
      event_name: 'sip_debit_scheduled',
      timestamp: '2026-10-05T00:01:00Z',
      sip_id: 'SIP-901',
      bank_name: 'HDFC Bank',
      amount: 5000
    }, null, 2)
  },
  {
    name: 'sip_debit_failed',
    label: 'Bank Rejection / Return Callback',
    stage: 'Execution',
    description: 'Triggered when the destination bank returns a rejection code (e.g. Insufficient Balance, Mandate Revoked, Technical Decline).',
    triggerCondition: 'Negative return callback received from Clearing House / Sponsor Bank.',
    requiredProperties: ['event_id', 'user_id', 'sip_id', 'timestamp', 'failure_reason'],
    optionalProperties: ['bank_error_code', 'npci_return_code', 'bounce_penalty_flag'],
    timestampFormat: 'ISO 8601 UTC (YYYY-MM-DDTHH:mm:ssZ)',
    participantIdentifierFormat: 'USR-[0-9]{5}',
    associatedErrorCodes: [
      { code: '03', meaning: 'Account Closed or Transferred', entity: 'NPCI' },
      { code: '04', meaning: 'Insufficient Funds / Balance Lag', entity: 'Bank' },
      { code: '21', meaning: 'Payment Stopped by Drawer / User Block', entity: 'Bank' },
      { code: '92', meaning: 'Technical Failure at Destination Bank', entity: 'Bank' }
    ],
    exampleJson: JSON.stringify({
      event_id: 'EVT-2005',
      user_id: 'USR-91244',
      event_name: 'sip_debit_failed',
      timestamp: '2026-10-07T07:15:00Z',
      sip_id: 'SIP-902',
      bank_name: 'State Bank of India',
      failureReason: 'Insufficient Balance / Salary Lag',
      amount: 2000
    }, null, 2)
  },
  {
    name: 'failure_notification_sent',
    label: 'Proactive Alert Dispatched',
    stage: 'Communication',
    description: 'Triggered when the messaging service dispatches an alert (Push Notification, SMS, or WhatsApp) informing the investor of the debit failure.',
    triggerCondition: 'Backend notification service dispatch event.',
    requiredProperties: ['event_id', 'user_id', 'sip_id', 'timestamp'],
    optionalProperties: ['channel', 'message_id', 'has_action_link'],
    timestampFormat: 'ISO 8601 UTC (YYYY-MM-DDTHH:mm:ssZ)',
    participantIdentifierFormat: 'USR-[0-9]{5}',
    exampleJson: JSON.stringify({
      event_id: 'EVT-2006',
      user_id: 'USR-91244',
      event_name: 'failure_notification_sent',
      timestamp: '2026-10-07T07:20:00Z',
      sip_id: 'SIP-902',
      bank_name: 'State Bank of India'
    }, null, 2)
  },
  {
    name: 'failure_notification_viewed',
    label: 'Alert Opened by Investor',
    stage: 'Communication',
    description: 'Triggered when the investor clicks the push notification or opens the in-app notification center banner regarding the debit failure.',
    triggerCondition: 'Client-side notification click / screen mount.',
    requiredProperties: ['event_id', 'user_id', 'sip_id', 'timestamp'],
    optionalProperties: ['time_to_view_seconds', 'app_version', 'os_platform'],
    timestampFormat: 'ISO 8601 UTC (YYYY-MM-DDTHH:mm:ssZ)',
    participantIdentifierFormat: 'USR-[0-9]{5}',
    exampleJson: JSON.stringify({
      event_id: 'EVT-2007',
      user_id: 'USR-91244',
      event_name: 'failure_notification_viewed',
      timestamp: '2026-10-07T18:45:00Z',
      sip_id: 'SIP-902',
      bank_name: 'State Bank of India'
    }, null, 2)
  },
  {
    name: 'recovery_attempted',
    label: 'Manual / Alternative Payment Initiated',
    stage: 'Recovery',
    description: 'Triggered when the investor initiates an instant UPI recovery payment or reschedules debit date in response to a failed instalment.',
    triggerCondition: 'User clicks "Retry with Instant UPI" or "Reschedule Debit Date".',
    requiredProperties: ['event_id', 'user_id', 'sip_id', 'timestamp'],
    optionalProperties: ['recovery_channel', 'new_scheduled_date', 'upi_app_selected'],
    timestampFormat: 'ISO 8601 UTC (YYYY-MM-DDTHH:mm:ssZ)',
    participantIdentifierFormat: 'USR-[0-9]{5}',
    exampleJson: JSON.stringify({
      event_id: 'EVT-2008',
      user_id: 'USR-91244',
      event_name: 'recovery_attempted',
      timestamp: '2026-10-07T18:50:00Z',
      sip_id: 'SIP-902',
      bank_name: 'State Bank of India'
    }, null, 2)
  },
  {
    name: 'sip_instalment_successful',
    label: 'Instalment Settled & Transferred to AMC',
    stage: 'Settlement',
    description: 'Triggered when funds are credited to the clearing corporation (ICCL / BSE StAR MF) and NAV order receipt is issued.',
    triggerCondition: 'Clearing house confirmation of successful fund receipt.',
    requiredProperties: ['event_id', 'user_id', 'sip_id', 'amount', 'timestamp'],
    optionalProperties: ['allotted_nav', 'nav_date', 'bse_order_id'],
    timestampFormat: 'ISO 8601 UTC (YYYY-MM-DDTHH:mm:ssZ)',
    participantIdentifierFormat: 'USR-[0-9]{5}',
    exampleJson: JSON.stringify({
      event_id: 'EVT-2009',
      user_id: 'USR-91244',
      event_name: 'sip_instalment_successful',
      timestamp: '2026-10-07T18:52:30Z',
      sip_id: 'SIP-902',
      bank_name: 'State Bank of India',
      amount: 2000
    }, null, 2)
  },
  {
    name: 'sip_paused',
    label: 'SIP Temporarily Suspended by Investor',
    stage: 'Lifecycle',
    description: 'Triggered when the investor chooses to pause an active SIP for a duration of 1 to 3 months without cancelling the mandate.',
    triggerCondition: 'User confirms "Pause SIP for 1-3 Months" modal in app.',
    requiredProperties: ['event_id', 'user_id', 'sip_id', 'timestamp'],
    optionalProperties: ['pause_duration_months', 'resumption_date', 'stated_pause_reason'],
    timestampFormat: 'ISO 8601 UTC (YYYY-MM-DDTHH:mm:ssZ)',
    participantIdentifierFormat: 'USR-[0-9]{5}',
    exampleJson: JSON.stringify({
      event_id: 'EVT-3006',
      user_id: 'USR-77319',
      event_name: 'sip_paused',
      timestamp: '2026-10-15T16:20:00Z',
      sip_id: 'SIP-904',
      bank_name: 'Axis Bank'
    }, null, 2)
  },
  {
    name: 'sip_cancelled',
    label: 'SIP Permanently Terminated',
    stage: 'Lifecycle',
    description: 'Triggered when the SIP is permanently terminated either intentionally by the user or involuntarily following 3 consecutive failed debits.',
    triggerCondition: 'User clicks "Cancel SIP" or system auto-terminates mandate upon 3rd rejection.',
    requiredProperties: ['event_id', 'user_id', 'sip_id', 'timestamp'],
    optionalProperties: ['cancellation_type', 'consecutive_failures_count', 'survey_reason'],
    timestampFormat: 'ISO 8601 UTC (YYYY-MM-DDTHH:mm:ssZ)',
    participantIdentifierFormat: 'USR-[0-9]{5}',
    exampleJson: JSON.stringify({
      event_id: 'EVT-3005',
      user_id: 'USR-55821',
      event_name: 'sip_cancelled',
      timestamp: '2026-10-12T10:00:00Z',
      sip_id: 'SIP-903',
      bank_name: 'ICICI Bank'
    }, null, 2)
  }
];

// ==============================================================================
// CONTRADICTORY EVIDENCE TRACKER (Alternative Explanations)
// ==============================================================================

export const INITIAL_CONTRADICTORY_EVIDENCE: ContradictoryEvidenceRecord[] = [
  {
    id: 'CONTRA-01',
    category: 'Discretionary Spending',
    title: 'Festival & Wedding Season Cash Deflection',
    description: 'Investors intentionally redirect discretionary monthly funds towards gold jewellery, festival shopping (Diwali), or destination wedding travel rather than maintaining their automated SIP.',
    observedFrequency: 'High (Observed in ~18% of voluntary pauses between October and December)',
    customerQuoteOrBehavior: 'I paused my ₹10,000 index fund SIP for October and November because of heavy Diwali shopping and flight tickets. I fully intended to resume in January.',
    h1ImpactAssessment: 'Challenges the assumption that all SIP drop-offs represent mandate UX friction. Recovery Assistant cannot solve intentional seasonal spending decisions.',
    counterMitigationOrIsolation: 'Isolate voluntary pauses with stated reason "Personal Expenses" from involuntary AutoPay failure churn in retention cohorts.',
    participantRef: 'INV-002 (Discussion notes)'
  },
  {
    id: 'CONTRA-02',
    category: 'Insufficient Balance',
    title: 'Genuine Personal Cash-Flow Deficit',
    description: 'Investor experiences a genuine salary delay, job loss, or emergency medical bill, resulting in an account balance under ₹500 that cannot fund the SIP regardless of payment mechanism.',
    observedFrequency: 'Medium (~14% of debit rejections in macroeconomic slowdown periods)',
    customerQuoteOrBehavior: 'My company delayed salary disbursement by 12 days. Even if INDMoney gave an instant UPI button, I simply did not have ₹5,000 in my account.',
    h1ImpactAssessment: 'Instant UPI retry fails if liquidity is zero. However, allowing a 10-day date shift buffer before re-presenting protects the user from bank fines.',
    counterMitigationOrIsolation: 'Provide "Shift Debit Date to Salary Day" rather than immediate retry when user flags zero liquidity.',
    participantRef: 'INV-001 (Q6 response)'
  },
  {
    id: 'CONTRA-03',
    category: 'Changing Investment Priorities',
    title: 'Asset Class Migration (Direct Equities, Real Estate, Crypto)',
    description: 'Investor actively chooses to discontinue mutual fund compounding in favor of higher-risk momentum plays (options/crypto) or capital-intensive real estate down-payments.',
    observedFrequency: 'Low to Medium (~11% of permanent cancellations)',
    customerQuoteOrBehavior: 'I stopped my equity SIPs to pool cash for a commercial flat down-payment in Pune. Mutual funds were giving 13% CAGR, but I needed the lump sum.',
    h1ImpactAssessment: 'Represents rational portfolio reallocation outside the mutual fund scope. Not solvable by mandate recovery.',
    counterMitigationOrIsolation: 'Classify as "Intentional Asset Reallocation" in churn logs; exclude from mandate friction metrics.',
    participantRef: 'INV-003 (Survey notes)'
  },
  {
    id: 'CONTRA-04',
    category: 'Unrelated Technical Issue',
    title: 'CKYC Identifier Freeze & Aadhaar Re-verification Lag',
    description: 'CAMS/KFintech regulatory CKYC freeze suspends investment folios due to mismatched fathers name or expired address proof, preventing mandate presentation entirely.',
    observedFrequency: 'Low (~6% of candidate complaints)',
    customerQuoteOrBehavior: 'My SIP failed not because of bank mandate, but because INDMoney said CKYC status was "On Hold". I submitted Aadhaar three times.',
    h1ImpactAssessment: 'Technical failure originates in AMC/RTA compliance layer, not AutoPay mandate mechanics.',
    counterMitigationOrIsolation: 'Filter regulatory KYC holds out of H1 mandate debit failure dataset.',
    participantRef: 'Review IND-00203 (Screened Out)'
  }
];

// ==============================================================================
// INITIAL QUALITATIVE INSIGHTS (Audited Research Records)
// ==============================================================================

export const INITIAL_QUALITATIVE_INSIGHTS: QualitativeInsight[] = [
  {
    id: 'INS-001',
    participantId: 'INV-001',
    originalStatement: 'I stopped my SIP in September after SBI charged me ₹295 penalty because salary came two days after the debit date.',
    researcherInterpretation: 'Confirms that punitive bank ECS bounce charges trigger immediate loss aversion and app uninstallation among first-time PSU bank investors.',
    evidenceTier: 'Tier 1: Direct',
    h1Relevance: 'Directly Supports H1',
    validationStatus: 'Validated',
    researcherApproval: {
      isApproved: true,
      approvedBy: 'Lead PM Researcher',
      approvedAt: '2026-10-28T16:00:00Z',
      notes: 'Grounded in verbatim interview quote; corroborated by review IND-15499.'
    },
    sourceType: 'Actual Interview',
    linkedThemeId: 'THEME-P3',
    createdAt: '2026-10-28T16:00:00Z'
  },
  {
    id: 'INS-002',
    participantId: 'INV-002',
    originalStatement: 'AutoPay failed, but my HDFC account had plenty of money. The app never even sent a push alert or warning.',
    researcherInterpretation: 'Demonstrates silent mandate drop-off where automated bank presentation fails despite adequate balance, causing anxiety and loss of compounding discipline.',
    evidenceTier: 'Tier 1: Direct',
    h1Relevance: 'Directly Supports H1',
    validationStatus: 'Validated',
    researcherApproval: {
      isApproved: true,
      approvedBy: 'Lead PM Researcher',
      approvedAt: '2026-10-29T11:00:00Z',
      notes: 'Matches Play Store Review IND-25733 verbatim pattern.'
    },
    sourceType: 'Actual Interview',
    linkedThemeId: 'THEME-P2',
    createdAt: '2026-10-29T11:00:00Z'
  },
  {
    id: 'INS-003',
    participantId: 'INV-003',
    originalStatement: 'I tried to change my SIP bank in INDMoney, but there was no option to update the mandate bank without cancelling the SIP completely.',
    researcherInterpretation: 'Identifies lack of mandate bank portability as an operational trap that converts a routine salary account change into complete SIP termination.',
    evidenceTier: 'Tier 2: Supporting',
    h1Relevance: 'Directly Supports H1',
    validationStatus: 'Validated',
    researcherApproval: {
      isApproved: true,
      approvedBy: 'Lead PM Researcher',
      approvedAt: '2026-11-02T17:00:00Z',
      notes: 'Directly supports H1 opportunity to allow mandate bank switching.'
    },
    sourceType: 'Actual Interview',
    linkedThemeId: 'THEME-P6',
    createdAt: '2026-11-02T17:00:00Z'
  },
  {
    id: 'INS-004',
    participantId: 'INV-002',
    originalStatement: 'I paused my ₹10,000 index fund SIP for October and November because of heavy Diwali shopping and flight tickets.',
    researcherInterpretation: 'Represents voluntary discretionary cash diversion. Proves that not all SIP drop-offs can or should be treated as mandate recovery opportunities.',
    evidenceTier: 'Contradictory',
    h1Relevance: 'Contradicts H1',
    validationStatus: 'Validated',
    researcherApproval: {
      isApproved: true,
      approvedBy: 'Lead PM Researcher',
      approvedAt: '2026-10-29T14:30:00Z',
      notes: 'Logged to Contradictory Evidence Tracker to preserve scientific validity boundary.'
    },
    sourceType: 'Actual Interview',
    contradictoryCategory: 'Discretionary Spending',
    createdAt: '2026-10-29T14:30:00Z'
  },
  {
    id: 'INS-005',
    participantId: 'INV-001',
    originalStatement: 'There was zero clarity that SBI would charge an ECS return penalty. The app never warned me.',
    researcherInterpretation: 'Highlights absence of proactive pre-debit communication. Investors expect fintech apps to shield them from bank penalties with 24-hour balance checks.',
    evidenceTier: 'Tier 3: Contextual',
    h1Relevance: 'Indirectly Related',
    validationStatus: 'Under Review',
    researcherApproval: {
      isApproved: false,
      approvedBy: 'Pending Peer Review',
      approvedAt: null,
      notes: 'Requires testing whether 24h pre-debit WhatsApp alerts improve balance provisioning.'
    },
    sourceType: 'Actual Interview',
    linkedThemeId: 'THEME-P3',
    createdAt: '2026-10-28T16:30:00Z'
  }
];

// ==============================================================================
// 26 AUDITED APPROVED EVIDENCE RECORDS (Detailed Phase 5 Audit)
// ==============================================================================

export interface AuditedReviewRecord {
  id: string;
  originalRow: number;
  rating: number;
  reviewDate: string;
  source: string;
  sourceReference: string;
  verbatimText: string;
  humanStrength: 'DIRECT' | 'INDIRECT' | 'INSUFFICIENT';
  humanCategories: string[];
  h1Classification: 'Directly Supports H1' | 'Supporting Friction' | 'Contextual / Adjacent';
  evidenceTier: 'Tier 1: Direct' | 'Tier 2: Supporting' | 'Tier 3: Contextual';
  researcherInterpretation: string;
  confidenceAndLimitations: string;
  reviewedBy: string;
  approvalStatus: 'approved';
}

export const AUDITED_26_EVIDENCE_RECORDS: AuditedReviewRecord[] = [
  {
    id: 'IND-08924',
    originalRow: 8924,
    rating: 1,
    reviewDate: '2025-03-31 17:33',
    source: 'Google Play Store',
    sourceReference: 'INDMoney Review Row #8924',
    verbatimText: 'SHAME ON YOU IND MONEY. This is worst application, these guys have charge more than rupees 4000 for SIP mandate bounce, if indmoney think that it will encourage investor to invest more amount without fail, you are wrong, you people are cheating on your customers, when market was falling very badly it\'s our decision to take pause for some time, instead of helping customers you people are finding opportunities to make money by claiming mandate fines, SHAME ON YOU.',
    humanStrength: 'DIRECT',
    humanCategories: ['SIP instalment debit failure', 'Bank mandate failure'],
    h1Classification: 'Directly Supports H1',
    evidenceTier: 'Tier 1: Direct',
    researcherInterpretation: 'Demonstrates severe financial penalty (₹4,000 bounce fine) when an investor attempts to pause during market dip but mandate continues presenting to bank.',
    confidenceAndLimitations: 'High confidence on customer sentiment and reported penalty; limitation: cannot inspect partner bank fee ledger or whether fee was reversed.',
    reviewedBy: 'Lead PM Researcher',
    approvalStatus: 'approved'
  },
  {
    id: 'IND-15499',
    originalRow: 15499,
    rating: 1,
    reviewDate: '2024-09-25 22:26',
    source: 'Google Play Store',
    sourceReference: 'INDMoney Review Row #15499',
    verbatimText: 'I had a terrible experience with this app. It doesn\'t allow you to change the bank mandate for ongoing SIPs, and customer care was unhelpful, failing to clarify why. After closing my old bank account, the SIP kept bouncing, resulting in bank charges. There\'s no clear guidance on updating mandate details, which caused unnecessary frustration and fees. The support team needs to be more proactive in resolving such issues.',
    humanStrength: 'DIRECT',
    humanCategories: ['SIP instalment debit failure', 'Bank mandate failure'],
    h1Classification: 'Directly Supports H1',
    evidenceTier: 'Tier 1: Direct',
    researcherInterpretation: 'Inability to switch bank mandate upon salary bank change leads to repeated mandate debits on a closed account, incurring bank bounce fees.',
    confidenceAndLimitations: 'Directly supports H1 need for mandate modification and instant alternative payment fallback before bounce.',
    reviewedBy: 'Lead PM Researcher',
    approvalStatus: 'approved'
  },
  {
    id: 'IND-25733',
    originalRow: 25733,
    rating: 1,
    reviewDate: '2024-01-09 17:53',
    source: 'Google Play Store',
    sourceReference: 'INDMoney Review Row #25733',
    verbatimText: 'MY MUTUAL FUND SIP failing repeatedly,though there is money in my account....have raised TICKETS many of the times...very poor customer care service...not able to resolve the issue...not taking investor seriously...will shift to another app if issue is not resolved soon...',
    humanStrength: 'DIRECT',
    humanCategories: ['SIP instalment debit failure'],
    h1Classification: 'Directly Supports H1',
    evidenceTier: 'Tier 1: Direct',
    researcherInterpretation: 'Silent mandate debit failure occurs even when user maintains sufficient liquidity, causing severe churn risk to competing platforms (Groww/Zerodha).',
    confidenceAndLimitations: 'Direct proof of operational failure driving customer attrition; limitation: specific NPCI return code not visible in app review.',
    reviewedBy: 'Lead PM Researcher',
    approvalStatus: 'approved'
  },
  {
    id: 'IND-27496',
    originalRow: 27496,
    rating: 2,
    reviewDate: '2023-10-28 20:45',
    source: 'Google Play Store',
    sourceReference: 'INDMoney Review Row #27496',
    verbatimText: 'App is good ...diversify opportunity but I am facing lots of issue in sip...after first and 2nd sip it starts failing alot...almost all my sip has failed even after lots of retry ...so please fix this bug as soon as possible...',
    humanStrength: 'DIRECT',
    humanCategories: ['SIP instalment debit failure'],
    h1Classification: 'Directly Supports H1',
    evidenceTier: 'Tier 1: Direct',
    researcherInterpretation: 'Repeat instalment failure occurs after initial setup, showing that retry mechanisms without root cause resolution fail to recover compounding.',
    confidenceAndLimitations: 'Direct support for automated recovery assistant with alternative payment rail.',
    reviewedBy: 'Lead PM Researcher',
    approvalStatus: 'approved'
  },
  {
    id: 'IND-31462',
    originalRow: 31462,
    rating: 3,
    reviewDate: '2023-07-18 07:27',
    source: 'Google Play Store',
    sourceReference: 'INDMoney Review Row #31462',
    verbatimText: 'Sometimes Sip is not deducted on right time and sometimes Sip Fails',
    humanStrength: 'DIRECT',
    humanCategories: ['SIP instalment debit failure'],
    h1Classification: 'Directly Supports H1',
    evidenceTier: 'Tier 1: Direct',
    researcherInterpretation: 'Unpredictable debit scheduling and intermittent failures erode user confidence in automated wealth creation.',
    confidenceAndLimitations: 'Succinct direct report of debit failure; lacks diagnostic error telemetry.',
    reviewedBy: 'Lead PM Researcher',
    approvalStatus: 'approved'
  },
  {
    id: 'IND-34882',
    originalRow: 34882,
    rating: 1,
    reviewDate: '2023-02-27 10:27',
    source: 'Google Play Store',
    sourceReference: 'INDMoney Review Row #34882',
    verbatimText: 'Very poor user experience and in terms of money, it will make you poor. It cuts fine if SIP was not properly initiated and when you reach out to customer care they blame you. It cut fine on my cancelled SIP too. Please stay away from this app.',
    humanStrength: 'DIRECT',
    humanCategories: ['SIP instalment debit failure', 'Bank mandate failure'],
    h1Classification: 'Directly Supports H1',
    evidenceTier: 'Tier 1: Direct',
    researcherInterpretation: 'Confirms partner bank bounce fines debited on failed and cancelled SIPs, causing direct customer churn and brand hostility.',
    confidenceAndLimitations: 'Directly supports H1; demonstrates financial loss as primary churn driver.',
    reviewedBy: 'Lead PM Researcher',
    approvalStatus: 'approved'
  },
  {
    id: 'IND-35186',
    originalRow: 35186,
    rating: 2,
    reviewDate: '2023-02-09 12:07',
    source: 'Google Play Store',
    sourceReference: 'INDMoney Review Row #35186',
    verbatimText: 'Not happy with the new update the auto deduction for SIP is now not deducting and u have also removed the google pay tranfer ...',
    humanStrength: 'DIRECT',
    humanCategories: ['SIP instalment debit failure'],
    h1Classification: 'Directly Supports H1',
    evidenceTier: 'Tier 1: Direct',
    researcherInterpretation: 'Demonstrates that removing instant UPI/Google Pay payment options leaves investors stranded when AutoPay deduction fails.',
    confidenceAndLimitations: 'Direct support for H1 core solution: Re-introducing instant UPI retry fallback.',
    reviewedBy: 'Lead PM Researcher',
    approvalStatus: 'approved'
  },
  {
    id: 'IND-51705',
    originalRow: 51705,
    rating: 1,
    reviewDate: '2021-10-27 14:00',
    source: 'Google Play Store',
    sourceReference: 'INDMoney Review Row #51705',
    verbatimText: 'Worst.. App.. Stated sip and but not deducted properly then cancelled but.. The sip not cancelled and. Bcoz.. Of this my accout is charged 500rs for 5 months.. Totall 2500 rs debited.. Pls dont use this app',
    humanStrength: 'DIRECT',
    humanCategories: ['SIP instalment debit failure', 'Bank mandate failure'],
    h1Classification: 'Directly Supports H1',
    evidenceTier: 'Tier 1: Direct',
    researcherInterpretation: 'Prolonged mandate de-synchronization: Cancellation in app failed to deregister bank mandate, generating ₹2,500 in recurring bounce charges.',
    confidenceAndLimitations: 'Critical DIRECT record of severe economic harm from failed mandate synchronization.',
    reviewedBy: 'Lead PM Researcher',
    approvalStatus: 'approved'
  },
  {
    id: 'IND-19705',
    originalRow: 19705,
    rating: 1,
    reviewDate: '2024-07-08 08:56',
    source: 'Google Play Store',
    sourceReference: 'INDMoney Review Row #19705',
    verbatimText: 'Even after "pausing" the SIP, money got debited. INDMoney should spend some time on user experience comparing to UI',
    humanStrength: 'DIRECT',
    humanCategories: ['SIP instalment debit failure'],
    h1Classification: 'Directly Supports H1',
    evidenceTier: 'Tier 1: Direct',
    researcherInterpretation: 'App state "Pause" fails to propagate to NPCI debit presentation queue, resulting in unauthorized debit against customer consent.',
    confidenceAndLimitations: 'Direct support for lifecycle control disconnects.',
    reviewedBy: 'Lead PM Researcher',
    approvalStatus: 'approved'
  },
  {
    id: 'IND-37692',
    originalRow: 37692,
    rating: 1,
    reviewDate: '2022-10-04 14:27',
    source: 'Google Play Store',
    sourceReference: 'INDMoney Review Row #37692',
    verbatimText: 'Even after pausing my sip instalment is deducted from my account?? How I stop deducted money from my account and extra 65 is deducted along with 1000 why??',
    humanStrength: 'DIRECT',
    humanCategories: ['SIP instalment debit failure'],
    h1Classification: 'Directly Supports H1',
    evidenceTier: 'Tier 1: Direct',
    researcherInterpretation: 'Pause command ignored by clearing engine; additional bank processing fees debited without explanation.',
    confidenceAndLimitations: 'Corroborates IND-19705 and IND-51705.',
    reviewedBy: 'Lead PM Researcher',
    approvalStatus: 'approved'
  },
  {
    id: 'IND-42585',
    originalRow: 42585,
    rating: 1,
    reviewDate: '2022-04-18 07:50',
    source: 'Google Play Store',
    sourceReference: 'INDMoney Review Row #42585',
    verbatimText: 'Don\'t even wanted to give a star. I did sip in Parag Parikh mutual funds through this app. I have closed my sip last month still the auto debit is working and still amount has been deducted. Fraud app. My hard earned money is getting wasted for nothing as the sip was closed. I will take this issue further if not resolved as soon as possible.',
    humanStrength: 'DIRECT',
    humanCategories: ['SIP instalment debit failure'],
    h1Classification: 'Directly Supports H1',
    evidenceTier: 'Tier 1: Direct',
    researcherInterpretation: 'Closed SIP continues AutoPay debit; investor experiences extreme panic believing funds are stolen.',
    confidenceAndLimitations: 'Direct evidence of mandate registry state divergence.',
    reviewedBy: 'Lead PM Researcher',
    approvalStatus: 'approved'
  },
  {
    id: 'IND-59144',
    originalRow: 59144,
    rating: 1,
    reviewDate: '2021-02-08 20:19',
    source: 'Google Play Store',
    sourceReference: 'INDMoney Review Row #59144',
    verbatimText: 'One of the worst app i never have seen. No customer support. One you started sip it will continue.. It only showes your sip has been cancelled but Sip amount will deducted from your bank continuously... Plz don\'t install this app...',
    humanStrength: 'DIRECT',
    humanCategories: ['SIP instalment debit failure'],
    h1Classification: 'Directly Supports H1',
    evidenceTier: 'Tier 1: Direct',
    researcherInterpretation: 'Persistent de-synchronization between INDMoney cancellation UI and sponsor bank mandate queue.',
    confidenceAndLimitations: 'Long-standing historical issue dating back to 2021.',
    reviewedBy: 'Lead PM Researcher',
    approvalStatus: 'approved'
  },
  {
    id: 'IND-42576',
    originalRow: 42576,
    rating: 1,
    reviewDate: '2022-04-18 18:52',
    source: 'Google Play Store',
    sourceReference: 'INDMoney Review Row #42576',
    verbatimText: 'Was happy to start investing in weekly SIP but later the Standing instruction has no value with them. They are debiting the account on their own convenient date, without letting the customer to choose their own convenient date. Customer service is like giving instructions to an wall with no emotions.',
    humanStrength: 'DIRECT',
    humanCategories: ['SIP instalment debit failure'],
    h1Classification: 'Directly Supports H1',
    evidenceTier: 'Tier 1: Direct',
    researcherInterpretation: 'Standing instruction debit executed on platform-convenient dates rather than salary dates, increasing bounce risk.',
    confidenceAndLimitations: 'Directly supports H1 salary-synced reschedule feature.',
    reviewedBy: 'Lead PM Researcher',
    approvalStatus: 'approved'
  },
  {
    id: 'IND-37528',
    originalRow: 37528,
    rating: 1,
    reviewDate: '2022-10-13 10:47',
    source: 'Google Play Store',
    sourceReference: 'INDMoney Review Row #37528',
    verbatimText: 'It\'s a fraudulent app, SIPs get debited without you even knowing. Customer support is worse, reply doesn\'t contain sender\'s name and they keep on asking additional details. No proper support.',
    humanStrength: 'DIRECT',
    humanCategories: ['SIP instalment debit failure'],
    h1Classification: 'Directly Supports H1',
    evidenceTier: 'Tier 1: Direct',
    researcherInterpretation: 'Lack of pre-debit notifications creates fear and perception of fraudulent activity when auto-debits execute.',
    confidenceAndLimitations: 'Directly supports transparent pre-debit alerts.',
    reviewedBy: 'Lead PM Researcher',
    approvalStatus: 'approved'
  },

  // Supporting Friction (7 Records)
  {
    id: 'IND-02962',
    originalRow: 2962,
    rating: 5,
    reviewDate: '2026-03-13 23:11',
    source: 'Google Play Store',
    sourceReference: 'INDMoney Review Row #2962',
    verbatimText: 'my sip deducted two times this month and no response from complaint',
    humanStrength: 'DIRECT',
    humanCategories: ['SIP instalment debit failure'],
    h1Classification: 'Supporting Friction',
    evidenceTier: 'Tier 2: Supporting',
    researcherInterpretation: 'Duplicate instalment debit creates cash-flow strain; supporting evidence for ledger de-synchronization.',
    confidenceAndLimitations: 'Supports mandate friction, but represents duplicate debit rather than recovery failure.',
    reviewedBy: 'Lead PM Researcher',
    approvalStatus: 'approved'
  },
  {
    id: 'IND-03226',
    originalRow: 3226,
    rating: 4,
    reviewDate: '2026-02-24 13:00',
    source: 'Google Play Store',
    sourceReference: 'INDMoney Review Row #3226',
    verbatimText: 'update: the team reached back and tried rectifying the issue Your app is very cumbersome for the mutual fund part. when I\'m signing up for any SIP. you deduct the amount twice and i didn\'t even know that',
    humanStrength: 'DIRECT',
    humanCategories: ['SIP instalment debit failure', 'SIP setup issue'],
    h1Classification: 'Supporting Friction',
    evidenceTier: 'Tier 2: Supporting',
    researcherInterpretation: 'Setup-phase duplicate deductions confuse investors during mandate registration.',
    confidenceAndLimitations: 'Supporting evidence for setup UX friction; distinct from recurring mandate recovery.',
    reviewedBy: 'Lead PM Researcher',
    approvalStatus: 'approved'
  },
  {
    id: 'IND-33178',
    originalRow: 33178,
    rating: 1,
    reviewDate: '2023-05-19 12:52',
    source: 'Google Play Store',
    sourceReference: 'INDMoney Review Row #33178',
    verbatimText: 'I started mutual fund SIP 100 rs daily.. but they are deducting 200, 400 hundred daily and I can\'t find statment for the same.. till date ho much they have deducted.. very bad service. Waste of money',
    humanStrength: 'DIRECT',
    humanCategories: ['SIP instalment debit failure'],
    h1Classification: 'Supporting Friction',
    evidenceTier: 'Tier 2: Supporting',
    researcherInterpretation: 'High-frequency daily SIP debit aggregation friction creates statement opacity.',
    confidenceAndLimitations: 'Supporting evidence on debit ledger synchronization.',
    reviewedBy: 'Lead PM Researcher',
    approvalStatus: 'approved'
  },
  {
    id: 'IND-35068',
    originalRow: 35068,
    rating: 1,
    reviewDate: '2023-02-15 15:36',
    source: 'Google Play Store',
    sourceReference: 'INDMoney Review Row #35068',
    verbatimText: 'Useless app. For tracking it cannot find funds automatically after 1st sync. Started monthly SIP and they are deducting money daily from my account. No support even after raising complaints multiple times. Disappointed with the service.',
    humanStrength: 'DIRECT',
    humanCategories: ['SIP instalment debit failure'],
    h1Classification: 'Supporting Friction',
    evidenceTier: 'Tier 2: Supporting',
    researcherInterpretation: 'Mandate frequency scheduling error (monthly SIP executed as daily debit).',
    confidenceAndLimitations: 'Supports mandate execution bugs; not a standard bounce recovery flow.',
    reviewedBy: 'Lead PM Researcher',
    approvalStatus: 'approved'
  },
  {
    id: 'IND-40038',
    originalRow: 40038,
    rating: 3,
    reviewDate: '2022-07-19 21:25',
    source: 'Google Play Store',
    sourceReference: 'INDMoney Review Row #40038',
    verbatimText: 'App is good.but i faced many time problem.hw to contact with u.so i m writing my issue if possible please help.my issue is i tried my times to setup autopay sip in this app through paytm payment bank and pnb it is not working.please tell me which bank is suitable for autopay.',
    humanStrength: 'DIRECT',
    humanCategories: ['SIP instalment debit failure', 'SIP setup issue'],
    h1Classification: 'Supporting Friction',
    evidenceTier: 'Tier 2: Supporting',
    researcherInterpretation: 'AutoPay mandate setup fails across specific partner banks (Paytm Payments Bank, PNB).',
    confidenceAndLimitations: 'Setup failure rather than recurring instalment bounce; supporting context.',
    reviewedBy: 'Lead PM Researcher',
    approvalStatus: 'approved'
  },
  {
    id: 'IND-43584',
    originalRow: 43584,
    rating: 5,
    reviewDate: '2022-03-30 09:40',
    source: 'Google Play Store',
    sourceReference: 'INDMoney Review Row #43584',
    verbatimText: 'Had a problem setting up sip.error message is error in creating pdf mandate',
    humanStrength: 'DIRECT',
    humanCategories: ['SIP instalment debit failure', 'Bank mandate failure'],
    h1Classification: 'Supporting Friction',
    evidenceTier: 'Tier 2: Supporting',
    researcherInterpretation: 'Technical failure generating physical/PDF NACH mandate form during registration.',
    confidenceAndLimitations: 'Mandate initiation error; supporting operational context.',
    reviewedBy: 'Lead PM Researcher',
    approvalStatus: 'approved'
  },
  {
    id: 'IND-46721',
    originalRow: 46721,
    rating: 3,
    reviewDate: '2022-02-02 21:41',
    source: 'Google Play Store',
    sourceReference: 'INDMoney Review Row #46721',
    verbatimText: 'Provide real time stock market updates in the home menu and most importantly give us the freedom to modify the SIP amounts after 1st instalments.',
    humanStrength: 'DIRECT',
    humanCategories: ['SIP instalment debit failure'],
    h1Classification: 'Supporting Friction',
    evidenceTier: 'Tier 2: Supporting',
    researcherInterpretation: 'Investor unable to modify SIP amount or debit terms without cancelling active mandate.',
    confidenceAndLimitations: 'Feature request supporting mandate modification friction.',
    reviewedBy: 'Lead PM Researcher',
    approvalStatus: 'approved'
  },

  // Contextual / Adjacent Records (5 Records)
  {
    id: 'IND-00358',
    originalRow: 358,
    rating: 4,
    reviewDate: '2026-09-25 13:35',
    source: 'Google Play Store',
    sourceReference: 'INDMoney Review Row #358',
    verbatimText: 'I started an sip and paid the first amount it was debited from my account but it failed saying kyc is not valid and there\'s no option for rekyc even the support system doesn\'t help. Edit : the support team reached out to help with the rekyc',
    humanStrength: 'DIRECT',
    humanCategories: ['SIP instalment debit failure'],
    h1Classification: 'Contextual / Adjacent',
    evidenceTier: 'Tier 3: Contextual',
    researcherInterpretation: 'Debit occurred successfully from bank, but unit allocation failed at AMC due to CKYC invalidity.',
    confidenceAndLimitations: 'Friction exists, but failure lies in KYC regulatory clearance rather than bank mandate debit failure.',
    reviewedBy: 'Lead PM Researcher',
    approvalStatus: 'approved'
  },
  {
    id: 'IND-10308',
    originalRow: 10308,
    rating: 1,
    reviewDate: '2025-01-29 17:45',
    source: 'Google Play Store',
    sourceReference: 'INDMoney Review Row #10308',
    verbatimText: 'Update 01/2025: 4 of my SIP have been deducted and failed to be refunded and yet tickets are closed and no call are picked up. Update 09/2024: The app framework work seems to be pushing updates without testing them. Suddenly now ticket #2047327 removed all fixed assets from the dashboard with the only track being under the goal section. I think the developers need to consider that this will make us move away as for a minor return no by dy will risk such bugs on an asset app of all.',
    humanStrength: 'DIRECT',
    humanCategories: ['SIP instalment debit failure'],
    h1Classification: 'Contextual / Adjacent',
    evidenceTier: 'Tier 3: Contextual',
    researcherInterpretation: 'Funds deducted from bank, but order reconciliation/refund failed between exchange and app.',
    confidenceAndLimitations: 'Contextual refund lag; distinct from mandate bounce penalty.',
    reviewedBy: 'Lead PM Researcher',
    approvalStatus: 'approved'
  },
  {
    id: 'IND-24763',
    originalRow: 24763,
    rating: 4,
    reviewDate: '2024-02-07 23:04',
    source: 'Google Play Store',
    sourceReference: 'INDMoney Review Row #24763',
    verbatimText: 'Mutual fund 1st Sip dates are given way late..and thus d amt deduction & NAV allocation date is late.',
    humanStrength: 'DIRECT',
    humanCategories: ['SIP instalment debit failure'],
    h1Classification: 'Contextual / Adjacent',
    evidenceTier: 'Tier 3: Contextual',
    researcherInterpretation: 'First SIP scheduling lag due to 30-day mandate registration window on BSE StAR MF.',
    confidenceAndLimitations: 'Contextual timeline expectation issue rather than debit rejection.',
    reviewedBy: 'Lead PM Researcher',
    approvalStatus: 'approved'
  },
  {
    id: 'IND-34635',
    originalRow: 34635,
    rating: 2,
    reviewDate: '2023-03-09 00:58',
    source: 'Google Play Store',
    sourceReference: 'INDMoney Review Row #34635',
    verbatimText: 'Bhaiyo mene s i p star kiya TATA ETHICAL FUND me 11 December of 2022 mere Account se 2 month se paise kat rahe par application me show nahi kar raha hai 2 month ho gaye mere 1000 kat gaye hai please',
    humanStrength: 'DIRECT',
    humanCategories: ['SIP instalment debit failure'],
    h1Classification: 'Contextual / Adjacent',
    evidenceTier: 'Tier 3: Contextual',
    researcherInterpretation: 'Bank debited funds for 2 months, but units not reflected in app dashboard.',
    confidenceAndLimitations: 'Ledger sync lag between RTA and frontend; AutoPay debit actually succeeded at bank.',
    reviewedBy: 'Lead PM Researcher',
    approvalStatus: 'approved'
  },
  {
    id: 'IND-52454',
    originalRow: 52454,
    rating: 1,
    reviewDate: '2021-10-09 14:35',
    source: 'Google Play Store',
    sourceReference: 'INDMoney Review Row #52454',
    verbatimText: 'Update as on 9th October: \'We are checking and BSE is working on it". There is least concern about customer\'s issue. Most likey auto generated emails. Now I have stopped sending emails, just checking updates in app. Even app shows in auto pay " active" my SIP could not get executed.',
    humanStrength: 'DIRECT',
    humanCategories: ['SIP instalment debit failure'],
    h1Classification: 'Contextual / Adjacent',
    evidenceTier: 'Tier 3: Contextual',
    researcherInterpretation: 'AutoPay marked "active", but BSE clearing house order execution failed.',
    confidenceAndLimitations: 'Exchange-level clearance bottleneck; adjacent to app mandate recovery.',
    reviewedBy: 'Lead PM Researcher',
    approvalStatus: 'approved'
  }
];

// ==============================================================================
// NEUTRAL FIRST-TIME SIP INVESTOR INTERVIEW GUIDE (Section 4)
// ==============================================================================

export interface NeutralInterviewGuideQuestion {
  questionNumber: number;
  questionText: string;
  neutralObjective: string;
  probingQuestions: string[];
  biasMitigation: string;
}

export const FIRST_TIME_INVESTOR_INTERVIEW_GUIDE: NeutralInterviewGuideQuestion[] = [
  {
    questionNumber: 1,
    questionText: 'Can you walk me through your experience when you first set up your automated monthly investment (SIP)?',
    neutralObjective: 'Understand initial onboarding expectations, bank selection, and date chosen without presuming friction.',
    probingQuestions: [
      'What led you to choose that specific monthly date?',
      'How did you authenticate your bank account (Netbanking, UPI, or Debit Card)?',
      'What did you expect would happen each month around that date?'
    ],
    biasMitigation: 'Never use words like "difficult", "confusing", or "error". Let participant volunteer any friction.'
  },
  {
    questionNumber: 2,
    questionText: 'Tell me about what happened the last time a scheduled investment was not deducted or did not go through.',
    neutralObjective: 'Elicit the factual event, timing, notification received, and emotional reaction.',
    probingQuestions: [
      'How did you first find out that the instalment was not deducted?',
      'Did you receive an alert from your bank, the app, or both?',
      'What was your immediate reaction upon seeing that message?'
    ],
    biasMitigation: 'Do not assume bank failure or insufficient balance. The user may not even know it failed.'
  },
  {
    questionNumber: 3,
    questionText: 'Did you understand the reason behind why the investment was not deducted on that occasion?',
    neutralObjective: 'Measure clarity of bank return codes, technical messages, and diagnostic transparency.',
    probingQuestions: [
      'What explanation or error message was displayed in the app or notification?',
      'Did you check your bank statement to see if funds were available?',
      'Did your bank charge any return or bounce penalty on that day?'
    ],
    biasMitigation: 'Do not suggest bank return codes (e.g. Code 04). Record exactly what the participant recalls.'
  },
  {
    questionNumber: 4,
    questionText: 'What action, if any, did you take immediately after you realised the instalment did not go through?',
    neutralObjective: 'Identify actual recovery behaviour (did they try to pay manually, contact support, wait, or give up).',
    probingQuestions: [
      'Did you look for a way to pay the instalment for that month?',
      'Did you reach out to customer support or check your bank account?',
      'Did you attempt to retry the payment within the app?'
    ],
    biasMitigation: 'Do not prompt with "Did you use UPI?" or "Did you retry?". Observe unprompted user actions.'
  },
  {
    questionNumber: 5,
    questionText: 'Following that experience, what happened to that SIP in the subsequent months? Did you continue, pause, or stop it?',
    neutralObjective: 'Track downstream retention impact, compounding continuation, or permanent abandonment.',
    probingQuestions: [
      'Did the next month\'s instalment deduct as scheduled?',
      'Did you make any changes to your investment date, amount, or bank account?',
      'If you decided to pause or stop, what was the primary consideration behind that choice?'
    ],
    biasMitigation: 'Provide equal weight to continuing, pausing, and stopping. Probe for external cash flow reasons.'
  }
];

// ==============================================================================
// TELEMETRY SCHEMA READINESS & PROVENANCE AUDIT (Section 5)
// ==============================================================================

export interface TelemetrySchemaAuditReport {
  totalProposedEvents: number;
  importedRealEventsCount: number;
  demonstrationEventsCount: number;
  missingDataFieldsIdentified: string[];
  schemaReadinessStatus: 'Ready for Live Telemetry Ingestion' | 'Pending Implementation';
  dataQualityChecksEnforced: string[];
}

export const TELEMETRY_SCHEMA_AUDIT: TelemetrySchemaAuditReport = {
  totalProposedEvents: 11,
  importedRealEventsCount: 0, // Zero real events fabricated; strictly awaits authentic CSV upload
  demonstrationEventsCount: 20, // Sample benchmark batch clearly tagged
  missingDataFieldsIdentified: [
    'Granular NPCI rejection return code (e.g. Code 01, 03, 04, 21) from sponsor bank clearing logs',
    'Bank bounce fee debit amount (reported by users as ₹295–₹590; not present in BSE order API)',
    'Exact BSE StAR MF cut-off execution timestamp (distinguishing pre-2:30 PM from post-cut-off debits)',
    'Client-side notification push impression vs dismissal rate before app opening'
  ],
  schemaReadinessStatus: 'Ready for Live Telemetry Ingestion',
  dataQualityChecksEnforced: [
    'Strict column field mapping interface (8 core schema fields)',
    'Table preview rendering first 5 rows before ingestion',
    'Event name validation against 11 standard NPCI/SIP events',
    'Timestamp ISO 8601 UTC parseability verification',
    'Duplicate detection across event_id and (user_id + event_name + timestamp) collision tuples',
    'Import error log recording exact row number, faulty column, and rejection reason'
  ]
};
