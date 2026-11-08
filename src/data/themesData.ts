import { ThemeItem } from '../types';

export const INITIAL_THEMES: ThemeItem[] = [
  {
    id: 'TH-01',
    title: 'Autopay & Bank Mandate Execution Friction',
    description: 'Involuntary SIP drop-offs caused by mandate debit failures, opaque bank return codes, absence of instant UPI retry options, and fear of bounce charges.',
    frequencyRank: 1,
    sampleCount: 52, // Unverified keyword cluster mentions across 2,490 candidate reviews
    verifiedSampleCount: 14, // Hand-audited SIP-specific mandate records (remainder relate to loan autopay or IPO mandates)
    severityLevel: 'Critical',
    humanReviewStatus: 'approved',
    reviewedBy: 'Lead PM Researcher',
    keyQuotes: [
      'My SIP instalment failed this month because SBI rejected the autopay mandate. No option to retry or pay manually, very frustrating.',
      'Is there any penalty if my bank mandate fails due to insufficient balance on the 5th? Can I pay via UPI before 3 PM?',
      'I wanted to change my SIP debit date to the 7th after salary credit, but the app forced me to cancel and re-register.'
    ],
    suggestedAction: 'Selected for H1 Project Workspace. Build proactive SIP Recovery Assistant with instant UPI retry & mandate reschedule.',
    isPreliminaryCluster: false
  },
  {
    id: 'TH-02',
    title: 'NAV Allotment & Settlement Lag Anxiety',
    description: 'Investors experience severe stress and believe money is lost during the 2–4 business days between bank debit and mutual fund unit allotment on BSE StAR MF / exchange.',
    frequencyRank: 2,
    sampleCount: 47,
    verifiedSampleCount: 18,
    severityLevel: 'High',
    humanReviewStatus: 'approved',
    reviewedBy: 'UX Research Lead',
    keyQuotes: [
      'Funds deducted from my HDFC bank account on 3rd, but INDmoney still shows SIP pending and units are not allotted.',
      'Money debited but no folio number generated. Customer support gives automated replies.'
    ],
    suggestedAction: 'Add real-time settlement tracker showing live exchange clearing status and expected NAV cut-off.',
    isPreliminaryCluster: true
  },
  {
    id: 'TH-03',
    title: 'Market Volatility Anxiety & Panic Pausing',
    description: 'First-time investors panic upon seeing red portfolio balances during the first 3–6 months and pause SIPs believing mutual funds are losing capital permanently.',
    frequencyRank: 3,
    sampleCount: 244, // Broad search matches market correction keywords
    verifiedSampleCount: 22,
    severityLevel: 'High',
    humanReviewStatus: 'needs_validation',
    reviewedBy: 'Behavioral Insights Analyst',
    keyQuotes: [
      'Invested ₹5000 every month for 4 months, now portfolio is -3%. Should I stop before it drops more?',
      'Nobody told me market goes down also. The app showed 15% CAGR projection which felt misleading.'
    ],
    suggestedAction: 'Deploy contextual volatility shielding: reframe temporary market dips into Rupee-Cost Averaging explainers.',
    isPreliminaryCluster: true
  },
  {
    id: 'TH-04',
    title: 'KYC & Onboarding Friction',
    description: 'Periodic re-KYC requirements and CKYC identifier mismatches cause silent freezing of investment accounts without clear unfreezing steps.',
    frequencyRank: 4,
    sampleCount: 343,
    verifiedSampleCount: 31,
    severityLevel: 'Medium',
    humanReviewStatus: 'approved',
    reviewedBy: 'Compliance & PM Team',
    keyQuotes: [
      'Central KYC status changed to "On Hold" without explanation. SIPs halted without proactive email.',
      'Submitted Aadhaar XML three times, still KYC pending and debit rejected.'
    ],
    suggestedAction: 'Provide 30-day proactive warning banner with instant DigiLocker/UIDAI re-verification pipeline.',
    isPreliminaryCluster: true
  },
  {
    id: 'TH-05',
    title: 'Cash-Flow Pressure & Salary Scheduling Mismatch',
    description: 'Users choose arbitrary SIP debit dates (1st or 5th) while their salaries credit later (7th to 10th), leading to recurring insufficient balance failures.',
    frequencyRank: 5,
    sampleCount: 10,
    verifiedSampleCount: 6,
    severityLevel: 'Medium',
    humanReviewStatus: 'approved',
    reviewedBy: 'Lead PM Researcher',
    keyQuotes: [
      'My salary gets credited on the 10th. I selected 5th by mistake and every month it failed until cancelled.',
      'Why does changing date require 10 days cancellation process?'
    ],
    suggestedAction: 'Implement smart salary-synced debit date picker during onboarding and dynamic date-shift buffer.',
    isPreliminaryCluster: false
  }
];
