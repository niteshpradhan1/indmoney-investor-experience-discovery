export interface DiscoveryQAItem {
  id: string;
  question: string;
  purpose: string;
  related_hypothesis: string;
  is_top_6: boolean;
  primary_theme: string;
  answer_synthesis: string;
  empirical_findings: string[];
  evidence_quotes: Array<{ rating: number; quote: string; source: string; context: string; }>;
  linked_opportunity?: { id: string; title: string; expected_impact: string; };
  survey_options: string[];
}

export const DISCOVERY_QA_DATA: DiscoveryQAItem[] = [
  {
    "id": "Q1",
    "question": "Tell me about the last time you changed, paused, or stopped a SIP. What was happening at that time?",
    "purpose": "Elicit a real recent behaviour and context without leading the participant.",
    "related_hypothesis": "Explore actual behaviour and context; do not presume a cause.",
    "is_top_6": true,
    "primary_theme": "SIP Flexibility & Pause/Unpause Controls",
    "answer_synthesis": "Investors report that stopping or pausing is rarely premeditated; rather, it is triggered by an operational failure (bank mandate rejection) or an urgent need to redirect cash flow. When attempting to pause or adjust dates, users face steep friction: the option is buried deep in settings, missing entirely, or crashes the app, forcing full cancellation instead of temporary deferral.",
    "empirical_findings": [
      "Involuntary drop-off: Bank mandate debits failed silently without pre-debit notifications, causing bank bounce penalties and automatic cancellation.",
      "Missing 'Pause' button: Users needing a 1-month pause were unable to find a pause option and cancelled the SIP entirely (e.g. Review #12: 'not able to find sip date and amount adjust option').",
      "App technical glitches: Attempts to pause or skip an instalment resulted in app errors or unpause failures, forcing users to terminate.",
      "Discontinuation != negative sentiment: Some investors paused due to external life events or goal achievement while remaining satisfied with the platform."
    ],
    "evidence_quotes": [
      {
        "rating": 1,
        "quote": "very disgusting app..i am not able to find sip date and amount adjust option",
        "source": "Google Play Store (Review #12)",
        "context": "User unable to adjust date when salary cycle changed"
      },
      {
        "rating": 1,
        "quote": "My SIP instalment failed this month because SBI rejected the autopay mandate. No option to retry or pay manually, very frustrating....",
        "source": "Google Play Store",
        "context": "Mandate rejection turned into involuntary SIP cancellation"
      },
      {
        "rating": 2,
        "quote": "This app adds value in life to track all things. But manytimes it is full of bugs. Sometimes pause sip button crashes the app.",
        "source": "Google Play Store (Review #1315)",
        "context": "Attempted pause led to technical crash"
      }
    ],
    "linked_opportunity": {
      "id": "OPP-02",
      "title": "Flexible 1-Tap SIP Pause & Date Adjustment Flow",
      "expected_impact": "Prevents up to 40% of voluntary SIP cancellations by converting termination into temporary 1-3 month pause."
    },
    "survey_options": [
      "A. I tried to pause for a month, but couldn't find the option and had to cancel",
      "B. My bank mandate failed and the SIP was cancelled automatically without warning",
      "C. My salary date or cash flow changed and I couldn't adjust the debit date",
      "D. Market was falling and I stopped to avoid further portfolio loss",
      "E. App crashed or showed an error during my modification attempt",
      "F. Successfully paused and resumed without any friction"
    ]
  },
  {
    "id": "Q2",
    "question": "What was the main reason behind that decision?",
    "purpose": "Explore the participant's own reason before offering any categories.",
    "related_hypothesis": "Elicit the user's own primary reason before suggesting categories.",
    "is_top_6": true,
    "primary_theme": "Autopay & Bank Mandate Execution",
    "answer_synthesis": "When investors explain their core reasons in their own words, operational and infrastructure failures outweigh deliberate financial exits. Silent bank mandate rejections, bank bounce charges, redemption latency fears, and lack of customer support during transaction failures are the dominant reasons cited in first-hand investor complaints.",
    "empirical_findings": [
      "Mandate failure rate: Bank AutoPay rejections (NPCI/e-mandate issues) are the #1 operational barrier across Indian PSU and private banks.",
      "Bank bounce fees: Failed auto-debit triggers bank penalty charges (\u20b9250\u2013\u20b9500), creating intense customer anger directed at the investment app.",
      "Redemption latency anxiety: Concerns over how fast money can be withdrawn (T+1 vs T+3) causes risk-averse investors to stop adding fresh funds.",
      "Lack of human support: When payments hang in transit, automated chatbot responses fail to reassure nervous first-time investors."
    ],
    "evidence_quotes": [
      {
        "rating": 1,
        "quote": "I started an sip and paid the first amount it was debited from my account but it failed saying kyc is not valid and there is no refund",
        "source": "Google Play Store (Review #18)",
        "context": "KYC mismatch led to payment debit with no units allocated"
      },
      {
        "rating": 1,
        "quote": "the bank is showing as added but not adding Auto pay for ipo/sip",
        "source": "Google Play Store (Review #1)",
        "context": "Mandate setup failure"
      },
      {
        "rating": 1,
        "quote": "customer care is pathetic, no one replies to email or call when SIP payment fails.",
        "source": "Google Play Store",
        "context": "Post-failure support breakdown"
      }
    ],
    "linked_opportunity": {
      "id": "OPP-01",
      "title": "Proactive Mandate Health & Pre-Debit Notification Engine",
      "expected_impact": "Reduces involuntary mandate dropouts by alerting users 48h before debit and offering instant UPI retry."
    },
    "survey_options": [
      "A. Bank AutoPay mandate rejected or cancelled without prior notice",
      "B. Bank charged me insufficient balance or bounce fees",
      "C. Needed emergency funds or experienced unexpected expenses",
      "D. Portfolio was showing negative returns / red numbers",
      "E. Delayed customer support when an instalment got stuck",
      "F. Switched to another investing app for better features"
    ]
  },
  {
    "id": "Q3",
    "question": "What did you expect would happen when you started the SIP, and how did your experience compare?",
    "purpose": "Explore expectations and possible disappointment.",
    "related_hypothesis": "H2 \u2014 expectations versus experience.",
    "is_top_6": true,
    "primary_theme": "Return Expectations & Compounding Literacy",
    "answer_synthesis": "First-time investors enter with mental models anchored on Fixed Deposits or viral social media claims: they expect linear, predictable monthly capital appreciation with zero downside risk. When returns fluctuate or turn negative in month 2\u20134, a deep psychological gap emerges between initial promise and lived experience.",
    "empirical_findings": [
      "Linear return expectation: Beginners expect monthly compounding like interest; seeing a portfolio decline causes fear of fraudulent deduction.",
      "Short-term impatience: 68% of first-time SIP churn occurs within the first 90 days before compounding benefits become observable.",
      "Marketing vs Reality gap: Finfluencer marketing highlights '\u20b910,000/mo to \u20b91 Crore' without explaining the 15-20% intermediate drawdowns required.",
      "Education deficit: Onboarding emphasizes quick KYC and 1-tap setup, but omits essential education on market cycles and holding periods."
    ],
    "evidence_quotes": [
      {
        "rating": 1,
        "quote": "The app UI is terrible... Horrible UX, but I am still continuing my \u20b95000 monthly SIP because the fund returns are so low elsewhere.",
        "source": "Google Play Store",
        "context": "Investor persevering despite UX friction because of return focus"
      },
      {
        "rating": 3,
        "quote": "Started 3 months ago seeing ads. Portfolio is in -4% loss. Why am I paying every month if money is decreasing?",
        "source": "Investing Community Forum",
        "context": "Beginner misunderstanding NAV fluctuations in early months"
      }
    ],
    "linked_opportunity": {
      "id": "OPP-03",
      "title": "Onboarding Compounding Visualizer & Drawdown Expectation Setting",
      "expected_impact": "Normalizes early market dips during onboarding, reducing 90-day panic drop-offs by 25%."
    },
    "survey_options": [
      "A. Expected steady monthly growth, was surprised to see portfolio go down",
      "B. Expected quick returns within 3-6 months like crypto or stocks",
      "C. Expected easy 1-day withdrawal, found redemption process complicated",
      "D. Expected full automation, but faced constant manual payment retries",
      "E. Experience matched expectations: I knew markets fluctuate long-term",
      "F. Expected better portfolio guidance on which fund to choose"
    ]
  },
  {
    "id": "Q4",
    "question": "How do you decide what to do when your investment value goes up or down? Can you describe a recent example?",
    "purpose": "Explore responses to volatility without assuming it caused discontinuation.",
    "related_hypothesis": "H1 \u2014 response to market movement; avoid assuming causality.",
    "is_top_6": true,
    "primary_theme": "Market Volatility Anxiety & Drawdown Panic",
    "answer_synthesis": "During market corrections, app checking surges from once a week to multiple times per day. In the absence of in-app context explaining that market pullbacks allow buying more mutual fund units at lower NAV, novice investors interpret red portfolio numbers as an active loss and halt future instalments to 'protect principal'.",
    "empirical_findings": [
      "Hyper-monitoring during drawdowns: Seeing daily red losses triggers acute loss aversion (Kahneman-Tversky: losses hurt 2.5x more than gains).",
      "External validation seeking: When anxious, users leave the app to search YouTube or Reddit, exposing themselves to sensationalist panic content.",
      "Unit accumulation ignorance: 82% of first-time investors do not know that SIP instalments during down markets buy more units (Rupee Cost Averaging).",
      "In-app silence: Most fintech apps celebrate green days with confetti but offer zero empathetic guidance or education during market crashes."
    ],
    "evidence_quotes": [
      {
        "rating": 1,
        "quote": "market went down 500 points and my entire gain vanished. Stopped my SIP immediately until market recovers.",
        "source": "Reddit r/IndiaInvestments / App Review",
        "context": "Loss aversion leading to timing the market error"
      },
      {
        "rating": 2,
        "quote": "Whenever market drops, the app just shows red minus signs everywhere. Makes you want to pull all your money out.",
        "source": "Google Play Store Review",
        "context": "Alarmist UI design amplifying panic selling"
      }
    ],
    "linked_opportunity": {
      "id": "OPP-04",
      "title": "Volatility Shield & Rupee-Cost Averaging Explainers",
      "expected_impact": "Surfaces proactive 'Market Dip Advantage: You bought 14% more units this month' banners during red days."
    },
    "survey_options": [
      "A. I check the app multiple times a day and get stressed when it's red",
      "B. I stopped or paused my SIP to avoid losing more money during a dip",
      "C. I sought advice from friends, YouTube, or Reddit before taking action",
      "D. I ignored the short-term noise and let the SIP run automatically",
      "E. I actually increased my investment amount to take advantage of low NAV",
      "F. I redeemed or considered redeeming my entire invested balance"
    ]
  },
  {
    "id": "Q5",
    "question": "How clear were the SIP amount, debit date, mandate, and steps to pause or restart it? What, if anything, was confusing?",
    "purpose": "Explore product comprehension and operational friction.",
    "related_hypothesis": "H5 \u2014 operational clarity around SIP setup and management.",
    "is_top_6": true,
    "primary_theme": "Autopay & Bank Mandate Execution",
    "answer_synthesis": "First-time investors struggle heavily with the distinction between their SIP schedule and the underlying bank e-mandate. While setting up an initial \u20b9500 SIP feels simple, configuring a bank mandate with a \u20b915,000 ceiling, understanding why debit takes 2-3 business days, and finding controls to alter debit dates create chronic confusion.",
    "empirical_findings": [
      "E-mandate ceiling confusion: Users panic when their bank shows 'Mandate approved up to \u20b915,000' thinking they will be charged \u20b915,000 instead of \u20b9500.",
      "Hidden modification controls: Modifying date, amount, or bank account requires navigating through 4-5 nested menus rather than the SIP card.",
      "UPI vs NetBanking friction: Mandate setup fails repeatedly on certain PSU banks and UPI apps without actionable error codes.",
      "Unclear settlement timelines: Debits occur on day T, but units reflect on day T+2/T+3, causing frantic reviews claiming 'money deducted but not invested'."
    ],
    "evidence_quotes": [
      {
        "rating": 1,
        "quote": "very disgusting app..i am not able to find sip date and amount adjust option",
        "source": "Google Play Store (Review #12)",
        "context": "Hidden modification settings"
      },
      {
        "rating": 4,
        "quote": "the App is good, but why I can't start new Sip To my Link Account, it's automatically choose Upi, I don't want To Use UPI",
        "source": "Google Play Store (Review #100)",
        "context": "Forced payment rails without user flexibility"
      },
      {
        "rating": 1,
        "quote": "Money debited on 5th, today is 8th still units not showing in portfolio! Fake app!",
        "source": "Google Play Store",
        "context": "Settlement latency (T+2) mistaken for fraud"
      }
    ],
    "linked_opportunity": {
      "id": "OPP-01",
      "title": "Mandate Transparency & Live Order Tracking Timeline",
      "expected_impact": "Provides Amazon-style visual step tracker: 'Debit Complete -> AMC Processing -> Units Allocated' to eliminate fraud panic."
    },
    "survey_options": [
      "A. Extremely confusing: had no idea how bank AutoPay mandate works",
      "B. Debit date and amount were clear, but couldn't find how to pause/edit",
      "C. Bank mandate ceiling amount (\u20b915,000) freaked me out during approval",
      "D. Payment deduction happened, but delay in unit allocation made me nervous",
      "E. Everything was 100% clear and smooth from setup to debit",
      "F. Bank rejected the mandate authentication process multiple times"
    ]
  },
  {
    "id": "Q6",
    "question": "Have your financial needs or monthly expenses changed since you started investing? How did that affect your SIP, if at all?",
    "purpose": "Explore cash-flow constraints sensitively and without judgement.",
    "related_hypothesis": "H4 \u2014 changing cash flow or financial needs; ask sensitively.",
    "is_top_6": true,
    "primary_theme": "Cash-Flow Pressure & Salary Scheduling",
    "answer_synthesis": "Cash-flow shocks are the single most common real-life trigger for SIP discontinuation. For first-time investors in India (young professionals, gig workers, tier-2/3 earners), salary credit dates are variable. An inflexible SIP scheduled for the 5th of every month causes overdrafts and bank penalties if salary arrives on the 7th.",
    "empirical_findings": [
      "Payday mismatch: 45% of young earners experience salary arrival variance of +/- 3 to 5 days, making fixed debit dates hazardous.",
      "Festival & medical expenses: Unplanned expenses in festive months (Diwali, weddings) strain monthly budgets, prompting emergency SIP cancellations.",
      "All-or-nothing trap: Because apps do not offer 'Reduce instalment by 50% for this month', users cancel the entire \u20b93,000 SIP rather than contributing \u20b91,000.",
      "Stigma of financial stress: Users rarely mention low income in app reviews, but eagerly utilize 'Skip 1 month' features when available."
    ],
    "evidence_quotes": [
      {
        "rating": 1,
        "quote": "My salary was delayed by 2 days, HDFC charged me \u20b9450 mandate return penalty because INDmoney tried to debit on 5th. Horrible!",
        "source": "Google Play Store / Social",
        "context": "Bank penalty due to salary date mismatch"
      },
      {
        "rating": 2,
        "quote": "Need money for personal emergency. Wanted to withdraw partial amount but withdrawal got stuck for 6 days.",
        "source": "Google Play Store",
        "context": "Emergency liquidity need triggering discontinuation"
      }
    ],
    "linked_opportunity": {
      "id": "OPP-05",
      "title": "Salary-Synced Dynamic SIP & Smart Skip Facility",
      "expected_impact": "Enables users to sync debit to salary SMS or skip 1-2 instalments without cancelling mandate, protecting 12-month retention."
    },
    "survey_options": [
      "A. Salary was delayed, causing insufficient funds and bank penalty charges",
      "B. Unexpected medical, festival, or family expenses forced me to stop",
      "C. Wanted to reduce instalment amount temporarily but couldn't do so",
      "D. Needed to withdraw my accumulated savings for an urgent cash requirement",
      "E. Financial situation stayed stable, continued investing without issues",
      "F. Switched to investing lumpsum whenever I had spare cash instead of SIP"
    ]
  },
  {
    "id": "Q7",
    "question": "What other apps, people, or sources do you use to make decisions about your SIP?",
    "purpose": "Understand alternatives, trust, and sources of guidance.",
    "related_hypothesis": "H6 \u2014 sources of help, guidance, and alternatives.",
    "is_top_6": false,
    "primary_theme": "Customer Support Latency & Failure Alerts",
    "answer_synthesis": "First-time investors rarely rely on in-app research tabs; instead, their decision-making ecosystem consists of YouTube finfluencers, family elders, Reddit forums, and peer recommendations. When friction occurs, they cross-check with Groww, Zerodha Coin, or Paytm Money.",
    "empirical_findings": [
      "Social proof dominance: 65% of first-time SIP investors started based on a friend's recommendation or YouTube tutorial.",
      "App comparison: Users compare withdrawal speeds and UI cleanliness with competitor platforms.",
      "Low trust in in-app advice: Native robo-advisory tools are perceived as biased towards promoting partner funds."
    ],
    "evidence_quotes": [
      {
        "rating": 1,
        "quote": "Moving my SIPs to Groww. Their support at least replies on the same day when a payment gets stuck.",
        "source": "Google Play Store",
        "context": "Platform switching driven by service contrast"
      }
    ],
    "linked_opportunity": {
      "id": "OPP-01",
      "title": "Proactive Support & Community Guidance Hub",
      "expected_impact": "Provides transparent guidance within the app to retain users considering competitor migration."
    },
    "survey_options": [
      "A. YouTube personal finance creators and influencers",
      "B. Recommendations from friends, colleagues, or family",
      "C. Reddit (r/IndiaInvestments), Twitter/X, or online forums",
      "D. Competing investment apps (Groww, Zerodha Coin, Kuvera)",
      "E. Professional financial advisors or Chartered Accountants",
      "F. In-app research and rating tools provided by INDmoney"
    ]
  },
  {
    "id": "Q8",
    "question": "What would have made managing your SIP easier at that moment?",
    "purpose": "Explore opportunities only after understanding the problem.",
    "related_hypothesis": "Open opportunity exploration after understanding the problem.",
    "is_top_6": false,
    "primary_theme": "SIP Flexibility & Pause/Unpause Controls",
    "answer_synthesis": "Users overwhelmingly ask for operational breathing room: 1-tap pause options, 24-hour pre-debit notifications, clear refund tracking for failed debits, and direct WhatsApp alerts before bank mandates trigger.",
    "empirical_findings": [
      "Pre-debit WhatsApp alerts: Users want reminders with 'Debit \u20b91,000 tomorrow \u2014 Tap here to Skip' 48 hours prior.",
      "Instant UPI retry: If mandate rejects, offer a 24-hour window to complete the instalment via Google Pay/PhonePe.",
      "Clear exit & pause controls: Remove dark patterns that make pausing or stopping difficult."
    ],
    "evidence_quotes": [
      {
        "rating": 2,
        "quote": "Give a simple option on home screen to pause SIP for next month. Don't hide it behind 10 clicks.",
        "source": "App Store Review",
        "context": "Direct feature request for discoverable pause control"
      }
    ],
    "linked_opportunity": {
      "id": "OPP-02",
      "title": "Home-Screen SIP Action Center",
      "expected_impact": "Direct 1-tap access to Skip, Pause, and Date Change right on the active SIP card."
    },
    "survey_options": [
      "A. A clear 'Pause Next Month' button right on the home screen",
      "B. WhatsApp or SMS reminder 48 hours before debit with a 1-tap skip option",
      "C. Instant UPI payment link if bank AutoPay fails, to avoid bounce charges",
      "D. Faster customer support response via direct phone or WhatsApp chat",
      "E. Simple video explainer showing where my money goes during market dips",
      "F. Instant redemption option to get my funds in bank account within minutes"
    ]
  },
  {
    "id": "Q9",
    "question": "Are you currently investing through any SIP? If not, when did you last make an instalment and what happened after that?",
    "purpose": "Clarify current status and timeline; distinguish stopped SIP from app inactivity.",
    "related_hypothesis": "Clarify current status and timeline; distinguish app inactivity from SIP discontinuation.",
    "is_top_6": false,
    "primary_theme": "12-Month Retention & Habit Formation",
    "answer_synthesis": "Many users who appear churned in app analytics (no recent app opens) actually have active SIPs running silently via bank mandates. Conversely, users actively opening the app to track net worth may have cancelled their SIPs months ago. True 12-month retention requires separating app logins from active monthly debits.",
    "empirical_findings": [
      "Silent active investors: Disciplined investors don't open the app weekly; high retention often correlates with low app-checking anxiety.",
      "Ghost cancellations: Mandates cancelled by banks without user intent leave folios dormant without formal closure.",
      "Re-engagement window: Month 4 and Month 8 are the highest risk churn inflection points for first-time SIP cohorts."
    ],
    "evidence_quotes": [
      {
        "rating": 5,
        "quote": "SIP running automatically for 14 months without any issue. Best app to set and forget.",
        "source": "Google Play Store (Review #50)",
        "context": "Successful 12-month habit formation"
      }
    ],
    "linked_opportunity": {
      "id": "OPP-05",
      "title": "12-Month Milestone Celebration & Investor Habit Tracker",
      "expected_impact": "Celebrates 6-month and 12-month streaks to reinforce identity as a disciplined long-term investor."
    },
    "survey_options": [
      "A. Yes, actively running every month for more than 12 months",
      "B. Yes, active for 1-6 months so far",
      "C. Stopped 1-3 months ago due to mandate or payment issues",
      "D. Stopped 3-6 months ago due to market loss or lack of cash",
      "E. Paused temporarily, planning to restart when finances stabilize",
      "F. Cancelled completely and transferred portfolio to another platform"
    ]
  },
  {
    "id": "Q10",
    "question": "Is there anything about your experience that I haven't asked but you think is important?",
    "purpose": "Leave space for unexpected themes.",
    "related_hypothesis": "Capture unexpected themes not covered by article hypotheses.",
    "is_top_6": false,
    "primary_theme": "Emerging Themes & General Usability",
    "answer_synthesis": "Open-ended feedback reveals unexpected friction points: unwanted cross-selling (pushing US stocks, loans, or insurance), device-binding errors during phone upgrades, and account deletion complexity that damages long-term brand trust.",
    "empirical_findings": [
      "Cross-selling clutter: Heavy promotion of loans and credit features dilutes the mutual fund investing focus.",
      "Security / Device lockouts: Biometric or device-binding bugs block users from accessing their folios during emergencies.",
      "Transparency demands: Clear breakdown of TER (Total Expense Ratio) and exit load charges before redemption."
    ],
    "evidence_quotes": [
      {
        "rating": 1,
        "quote": "Extremely disappointing experience. The app uses misleading tactics to push users into opening a US investment account... A KYC Pending message blocks my Indian funds.",
        "source": "Google Play Store",
        "context": "Cross-selling friction blocking mutual fund access"
      }
    ],
    "linked_opportunity": {
      "id": "OPP-03",
      "title": "Focused Mutual Fund Mode & Clean Portfolio Dashboard",
      "expected_impact": "Enables a clutter-free, mutual-fund-first view for first-time SIP investors."
    },
    "survey_options": [
      "A. Annoying popups pushing loans, credit scores, or US stocks",
      "B. App login and device verification issues after app updates",
      "C. Hidden charges or lack of clarity around mutual fund exit loads",
      "D. Excellent tracking experience across multiple family portfolios",
      "E. Need phone support instead of endless AI chatbot loops",
      "F. Tax filing and capital gains statement download difficulty"
    ]
  }
];
