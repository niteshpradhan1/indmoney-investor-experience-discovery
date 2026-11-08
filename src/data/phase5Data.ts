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
