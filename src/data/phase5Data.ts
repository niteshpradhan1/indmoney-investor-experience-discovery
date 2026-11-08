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
