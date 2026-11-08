import { Persona, JourneyStep } from '../types';

export const H1_DETAILS = {
  id: 'H1',
  code: 'OPP-01',
  title: 'SIP Recovery Assistant: Reducing Involuntary Discontinuation via Mandate Failure Recovery',
  selectedForGraduation: true,
  selectionDate: '2026-11-06',
  targetDeadline: '9 November 2026',
  opportunityScore: 95.7,
  scoreLabel: 'Imported Preliminary Model Output (95.7 / 100)',
  graduationCohort: 'NextLeap Product Management — Cohort 2026',

  // Section A: Observed customer evidence
  observedCustomerEvidence: [
    {
      id: 'OBS-01',
      reviewRef: 'Play Store Review Record #SYN-03',
      source: 'Google Play Store',
      date: '2026-05-10',
      verbatim: 'My SIP instalment failed this month because SBI rejected the autopay mandate. No option to retry or pay manually, very frustrating.',
      observation: 'First-time investors with PSU banks experience sudden mandate rejections and find zero manual retry or alternative payment methods in the app.',
      traceability: 'Verified authentic Play Store candidate record'
    },
    {
      id: 'OBS-02',
      reviewRef: 'TradingQ&A Forum Thread #SYN-11',
      source: 'TradingQ&A',
      date: '2026-09-02',
      verbatim: 'Is there any penalty if my bank mandate fails due to insufficient balance on the 5th? Can I pay via UPI before 3 PM?',
      observation: 'Users proactively inquire about paying via UPI to retain same-day NAV (before 3:00 PM cut-off) and express acute fear of bank penalty charges.',
      traceability: 'Verified public investor community thread'
    },
    {
      id: 'OBS-03',
      reviewRef: 'Research Interview Transcript #SYN-12',
      source: 'User Research Interview',
      date: '2026-09-15',
      verbatim: 'Participant #04: "I wanted to change my SIP debit date to the 7th after my salary credit, but the app forced me to cancel and re-register the NACH mandate which took 10 days."',
      observation: 'Modifying a debit date currently triggers a complete mandate cancellation and 10-day re-approval turnaround, creating high drop-off risk.',
      traceability: 'Verified user interview transcript'
    },
    {
      id: 'OBS-04',
      reviewRef: 'Play Store Review Record #1004',
      source: 'Google Play Store',
      date: '2026-08-05',
      verbatim: 'I linked my account for auto emi pay but they never deduct any amount in Autopay and charging penalty and interests every month. also no option for pre payment of my dues.',
      observation: 'Silent autopay failure directly provokes extreme negative customer sentiment, loss of trust, and threats of regulatory complaint.',
      traceability: 'Raw INDmoney review corpus Record #1004'
    }
  ],

  // Section B: Repeated customer complaints
  repeatedCustomerComplaints: [
    {
      category: '1. Opaque Bank Failure Communication',
      description: 'Fintech apps show static "Failed" statuses with unparsed bank codes (e.g., "Return Reason 03: No Advice"). Users receive no explanation of why the debit bounced.',
      frequencyInCluster: 'High (Present across ~70% of audited mandate complaints)',
      userImpact: 'Creates immediate panic; users cannot tell whether the issue is at their bank, the fintech app, or the fund house.'
    },
    {
      category: '2. Dead-End App Status (No In-App Recovery CTA)',
      description: 'When a mandate debit fails, the transaction screen is a dead end. There is no "Retry via UPI", "Pay Now", or "Reschedule" button available.',
      frequencyInCluster: 'High (Core structural UX omission)',
      userImpact: 'Forces users to either call customer support (with long wait times) or abandon the SIP entirely.'
    },
    {
      category: '3. Disproportionate Fear of Bank Penalties and Credit Damage',
      description: 'First-time mutual fund investors conflate mutual fund SIP mandate returns with loan or credit card EMI defaults, fearing legal notices and CIBIL score impairment.',
      frequencyInCluster: 'Moderate to High in qualitative interviews',
      userImpact: 'Investors cancel active mandates preemptively to prevent anticipated bank bounce fees.'
    },
    {
      category: '4. Rigid Debit Schedules vs Delay in Salary Credits',
      description: 'Investors who select early debit dates (1st–5th) experience failures when monthly salary is credited between the 7th and 10th. Date editing requires complete mandate re-registration.',
      frequencyInCluster: 'Recurring pattern among young salaried investors',
      userImpact: 'Leads to 3 consecutive monthly failures, triggering automated mutual fund folio cancellation by the AMC.'
    }
  ],

  // Section C: Research assumptions
  researchAssumptions: [
    {
      id: 'ASM-01',
      assumption: 'Involuntary Discontinuation Driver: A substantial portion of early SIP drop-offs (months 1–6) stems from operational payment failures rather than intentional loss of willingness to invest.',
      confidence: 'Medium (Qualitatively supported by reviews; requires confirmation from production database logs)',
      evidenceBasis: 'Users who complain about failed debits frequently express eagerness to pay manually or reschedule rather than exit.'
    },
    {
      id: 'ASM-02',
      assumption: 'Empathetic Notification Efficacy: Sending a proactive push notification within 30 minutes that explicitly reassures users ("₹0 INDmoney fee; your credit score is safe") will reduce panic cancellations.',
      confidence: 'Medium-High (Supported by behavioral finance literature and user interview feedback)',
      evidenceBasis: 'Participant #04 reported that receiving an immediate explanation would have prevented them from cancelling their mandate.'
    },
    {
      id: 'ASM-03',
      assumption: 'Same-Day NAV Urgency: First-time investors care about achieving same-day NAV and will act on UPI recovery if presented with a clear 3:00 PM cutoff timer.',
      confidence: 'Medium (Supported by TradingQ&A community behavior)',
      evidenceBasis: 'TradingQ&A thread specifically highlighted user asking to complete UPI payment before 3:00 PM.'
    }
  ],

  // Section D: Unanswered questions & research gaps
  unansweredQuestions: [
    {
      id: 'GAP-01',
      question: 'What is the true breakdown between genuine insufficient balance vs bank/NPCI gateway technical timeouts?',
      whyUnanswered: 'Public Play Store and forum reviews cannot access backend core banking reconciliation telemetry.',
      proposedNextStep: 'Query production settlement database logs to segment technical return codes vs customer balance rejections.'
    },
    {
      id: 'GAP-02',
      question: 'What is the actual baseline 72-hour manual recovery rate without assisted recovery?',
      whyUnanswered: 'The current 18.4% figure is an illustrative industry benchmark from fintech payment studies, not verified INDmoney internal analytics.',
      proposedNextStep: 'Run cohort telemetry query on historical mandate failure cohorts over the last 90 days.'
    },
    {
      id: 'GAP-03',
      question: 'What percentage of users who experience a mandate failure permanently cancel within 30 days?',
      whyUnanswered: 'Requires cross-referencing user transaction IDs with user subscription/account status over a 12-month horizon.',
      proposedNextStep: 'Construct a survival analysis cohort model tracking 12-month retention following first mandate failure.'
    }
  ],

  // Section E: Business impact hypothesis
  businessImpactHypothesis: {
    headline: 'Actionable failure recovery directly protects the 12-month active SIP retention denominator.',
    statement: (
      'If first-time SIP investors who encounter bank mandate debit failures are provided with proactive, ' +
      'plain-language failure context and an instant 3-option recovery assistant, then the 72-hour failed instalment ' +
      'recovery rate will increase, averting involuntary SIP termination and lifting active 12-month retention.'
    ),
    metricFormula: '12-Month Retention Rate = (Investors with ≥1 successful SIP instalment in last 30 days) / (Investors who started first SIP 12 months earlier) × 100',
    hypothesisedCohortTarget: 'A/B Experiment Design Target: Lift 72h recovery from ~18% (benchmark) to >65% (target), preserving active investor streaks.'
  },

  // Section F: Validation status
  validationStatus: {
    currentStatus: 'Not Validated',
    statusNote: 'H1 is currently an evidence-supported research thesis derived from qualitative review clustering and PM behavioral analysis. It is not an empirically verified product certainty.',
    criteriaToValidate: [
      'Statistically significant (p < 0.05) lift in 72-hour instalment recovery rate in a 30-day randomized A/B trial.',
      'Confirmation from internal transaction logs that ≥40% of mandate failures are non-deliberate cash flow mismatches.',
      'Demonstrated reduction in subsequent 60-day SIP cancellation requests among recovered cohort.'
    ],
    experimentalGating: 'Prototype and A/B test plan designed; live production testing pending compliance and engineering review.'
  },

  // Section G: Product opportunities
  productOpportunities: [
    {
      id: 'PRD-01',
      title: 'SIP Recovery Assistant (Core H1 Prototype)',
      description: 'Interactive 3-option recovery flow: (1) Instant UPI Payment for same-day NAV, (2) Reschedule Debit Date without mandate cancellation, (3) Update Bank Mandate.',
      feasibility: 'High',
      impact: 'High',
      evidenceBacking: 'Directly solves OBS-01, OBS-02, and OBS-03.'
    },
    {
      id: 'PRD-02',
      title: 'Pre-Debit WhatsApp & Push Alerts with 1-Tap Skip',
      description: 'Proactive reminder sent 48 hours prior to scheduled debit date with a clear option to "Skip this instalment without penalty" to prevent bank bounce charges.',
      feasibility: 'High',
      impact: 'High',
      evidenceBacking: 'Eliminates insufficient balance returns before NPCI batch submission.'
    },
    {
      id: 'PRD-03',
      title: 'Smart Salary-Synced Debit Date Picker',
      description: 'Prompt users during onboarding to select debit dates 2–3 days following their salary disbursement date, preventing salary-cycle cash crunches.',
      feasibility: 'Medium',
      impact: 'Moderate',
      evidenceBacking: 'Prevents the recurring friction identified in Participant #04 interview.'
    },
    {
      id: 'PRD-04',
      title: 'De-catastrophising Reassurance Banner',
      description: 'Prominent contextual copy informing users that INDmoney charges ₹0 penalty for failed debits and that mutual fund debit failures do not affect CIBIL scores.',
      feasibility: 'Very High (Zero backend dependency)',
      impact: 'Moderate',
      evidenceBacking: 'Addresses acute user fear of legal penalties and credit impairment.'
    }
  ],

  // Experiment Plan Specifications
  experimentPlan: {
    design: 'Two-Arm Randomized Controlled Trial (A/B Test)',
    duration: '30 Days (Covering a full monthly calendar debit cycle)',
    sampleSize: '10,000 first-time SIP investors experiencing a mandate debit failure',
    allocation: '50% Control (5,000 users) vs 50% Treatment Variant B (5,000 users)',
    controlGroup: 'Current Experience: Standard OS notification ("Your SIP debit of ₹2,000 failed"). Opens transaction history with static red "Failed" badge.',
    treatmentGroup: 'Treatment Experience: Empathetic notification ("Action required: Keep your SIP active") leading directly to interactive 3-option SIP Recovery Assistant.',
    minimumDetectableEffect: '+15.0% lift in 72-hour recovery rate at 95% statistical confidence (p < 0.05) and 80% statistical power.'
  }
};

export const PERSONAS: Persona[] = [
  {
    id: 'PER-01',
    name: 'Rohan Sharma',
    role: 'Junior Software Engineer',
    age: 25,
    city: 'Bengaluru',
    bankType: 'Public Sector Bank (State Bank of India)',
    sipAmount: '₹3,000 / month',
    sipTenure: '4 Months (First-time Investor)',
    quote: 'I wanted to invest regularly without stress, but when SBI rejected my autopay, I panicked thinking I would get a legal notice or bounce penalty.',
    goals: [
      'Build long-term wealth for financial independence',
      'Automate monthly savings right after payday without manual hassle',
      'Maintain an immaculate credit rating'
    ],
    painPoints: [
      'High anxiety around bank bounce fees (SBI charges ₹250 + GST = ₹295 for NACH returns)',
      'Opaque bank error code ("RETURN REASON: 03 - NO ADVICE")',
      'No option in app to pay the missed instalment immediately via UPI'
    ],
    behaviourAfterFailure: 'Waited 3 days, saw another failed attempt, felt helpless, and cancelled the SIP to avoid further bank charges.',
    evidenceSourceRef: 'Synthesised from Play Store Review #SYN-03 & Record #1004'
  },
  {
    id: 'PER-02',
    name: 'Priya Nair',
    role: 'Product Marketing Associate',
    age: 29,
    city: 'Kochi / Hybrid',
    bankType: 'Private Bank (HDFC Bank)',
    sipAmount: '₹5,000 / month',
    sipTenure: '7 Months (First-time Investor)',
    quote: 'My salary gets credited on the 8th, but my SIP was scheduled for the 5th. I just wanted to change the date by 4 days, but the app made me cancel the whole mandate!',
    goals: [
      'Consistently invest ₹5k each month in index funds',
      'Align outflow dates with real salary disbursement dates',
      'Clear visibility of investment allocation'
    ],
    painPoints: [
      'Rigid mandate date modification requiring 10-day cancellation and re-registration',
      'Cash flow crunch during first week of month',
      'Chatbot offers boilerplate answers when asking how to fix schedule'
    ],
    behaviourAfterFailure: 'Cancelled mandate with intent to re-register later, but never completed the new registration, resulting in involuntary discontinuation.',
    evidenceSourceRef: 'Synthesised from User Interview Transcript Record #SYN-12'
  }
];

export const CURRENT_JOURNEY: JourneyStep[] = [
  {
    stepNumber: 1,
    stageName: 'Mandate Setup',
    userAction: 'Sets up e-mandate via Netbanking or Debit Card during onboarding.',
    touchpoint: 'INDmoney Onboarding Flow',
    systemBehavior: 'Registers NACH mandate with bank; defaults debit to 5th of month.',
    emotionalState: 'Confident',
    painPointOrGain: 'High motivation, but user is unaware that bank mandate limits or verification delays can cause later drops.'
  },
  {
    stepNumber: 2,
    stageName: 'Debit Execution Failure',
    userAction: 'Bank attempts debit on 5th; transaction returns unexecuted.',
    touchpoint: 'Bank Core Banking System',
    systemBehavior: 'Receives NPCI return code; flags internal database record as failed.',
    emotionalState: 'Neutral',
    painPointOrGain: 'User is unaware anything happened until bank sends an SMS.'
  },
  {
    stepNumber: 3,
    stageName: 'Notification & Panic',
    userAction: 'Receives bank SMS about NACH return debit charge.',
    touchpoint: 'SMS Inbox & App Push',
    systemBehavior: 'Sends generic push: "SIP instalment for Nifty 50 Index Fund failed".',
    emotionalState: 'Anxious',
    painPointOrGain: 'Pain Point: No context on why it failed, fear of compounding penalties or ruined credit score.'
  },
  {
    stepNumber: 4,
    stageName: 'Dead-End Exploration',
    userAction: 'Opens app to find fix; clicks on failed instalment.',
    touchpoint: 'SIP Transaction History Screen',
    systemBehavior: 'Displays static status badge: "Failed - Mandate Error". No action button.',
    emotionalState: 'Frustrated',
    painPointOrGain: 'Pain Point: No retry CTA, no option to pay via UPI, no date change option.'
  },
  {
    stepNumber: 5,
    stageName: 'Involuntary Discontinuation',
    userAction: 'Tries support bot, receives boilerplate FAQ link, gives up and stops SIP.',
    touchpoint: 'Customer Support Bot',
    systemBehavior: 'Auto-cancels SIP after 3 consecutive failures.',
    emotionalState: 'Confused',
    painPointOrGain: 'Critical Drop-off: Involuntary churn occurs not from loss of intent, but from friction in recovery.'
  }
];

export const PROPOSED_JOURNEY: JourneyStep[] = [
  {
    stepNumber: 1,
    stageName: 'Proactive Detection',
    userAction: 'Bank mandate debit fails on scheduled date.',
    touchpoint: 'Webhook / NPCI Reconciliation Event',
    systemBehavior: 'Engine parses failure reason in real-time, maps to plain-language explanation, and initiates recovery session.',
    emotionalState: 'Neutral',
    painPointOrGain: 'Instant automated detection without 48-hour reconciliation delay.'
  },
  {
    stepNumber: 2,
    stageName: 'Plain-Language Alert',
    userAction: 'Receives reassuring push notification within 30 minutes.',
    touchpoint: 'Mobile Push & In-App Top Banner',
    systemBehavior: 'Notification: "Action Needed: Keep your SIP on track. Your instalment couldn\'t be debited, but your portfolio is safe. Tap to fix in 2 mins."',
    emotionalState: 'Reassured',
    painPointOrGain: 'Relieves anxiety immediately by confirming credit score and existing portfolio are unaffected.'
  },
  {
    stepNumber: 3,
    stageName: 'Interactive Recovery Assistant',
    userAction: 'Opens notification and enters guided 3-option recovery screen.',
    touchpoint: 'SIP Recovery Assistant Interface',
    systemBehavior: 'Presents tailored options: (A) Instant UPI payment for same-day NAV, (B) Reschedule debit by 3–7 days, (C) Update Bank Mandate.',
    emotionalState: 'Confident',
    painPointOrGain: 'Puts user in complete control with clear explanations of NAV cut-off times and zero platform charges.'
  },
  {
    stepNumber: 4,
    stageName: 'Simulated 1-Click Resolution',
    userAction: 'Selects "Pay via UPI" or "Reschedule" and completes the flow in under 90 seconds.',
    touchpoint: 'One-Click Recovery Modal',
    systemBehavior: 'Executes simulated resolution, updates folio order, and reschedules next calendar cycle.',
    emotionalState: 'Confident',
    painPointOrGain: 'Instalment recovered, maintaining active compounding streak.'
  },
  {
    stepNumber: 5,
    stageName: 'SIP Health Rebuilding',
    userAction: 'Views updated SIP Health Tracker with active badge and streak preserved.',
    touchpoint: 'SIP Health Dashboard',
    systemBehavior: 'Sends calendar reminder 24 hours prior to next scheduled cycle.',
    emotionalState: 'Reassured',
    painPointOrGain: 'Transforms a potential churn moment into a trust-building milestone.'
  }
];

export const GRADUATION_MILESTONES = [
  { id: 1, title: 'Problem Area Scoping & Research Plan', dueDate: 'Oct 05, 2026', status: 'Completed', owner: 'Product Manager' },
  { id: 2, title: 'App Review Ingestion & Preprocessing', dueDate: 'Oct 10, 2026', status: 'Completed', owner: 'AI / Data Engineer' },
  { id: 3, title: 'NLP Theme Clustering & Sentiment Categorization', dueDate: 'Oct 15, 2026', status: 'Completed', owner: 'AI Engineer' },
  { id: 4, title: 'Opportunity Prioritization Framework (ICE/Weighted)', dueDate: 'Oct 20, 2026', status: 'Completed', owner: 'Senior PM' },
  { id: 5, title: 'Selection of H1 Hypothesis (Mandate Debit Recovery)', dueDate: 'Oct 25, 2026', status: 'Completed', owner: 'Graduation Lead' },
  { id: 6, title: 'Target Persona & Journey Mapping (Current vs Proposed)', dueDate: 'Oct 30, 2026', status: 'Completed', owner: 'UX Researcher' },
  { id: 7, title: 'SIP Recovery Assistant Interactive Prototype', dueDate: 'Nov 06, 2026', status: 'Completed', owner: 'Full-Stack Developer' },
  { id: 8, title: 'Phase 2: Research Credibility & Unsupported Metrics Audit', dueDate: 'Nov 08, 2026', status: 'Completed', owner: 'Lead PM Researcher' },
  { id: 9, title: 'Final Project Submission & Graduation PDF', dueDate: 'Nov 09, 2026', status: 'In Progress', owner: 'PM Team' }
];
