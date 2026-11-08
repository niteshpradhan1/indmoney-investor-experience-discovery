import { ReviewRecord } from '../types';

export const DATASET_METRICS = {
  totalOriginalReviews: 62523,
  keywordScreenedCandidates: 235,
  auditedEvidenceRecords: 8,
  datasetSource: 'INDMoney App Store & Google Play Review Corpus (May 2021 – Sep 2026)',
  screeningKeywords: 'SIP, mandate, autopay, NACH, failed debit, penalty, SBI, bounce'
};

export const INITIAL_CANDIDATE_REVIEWS: ReviewRecord[] = [
  {
    "id": "IND-00055",
    "originalRow": 55,
    "rating": 1,
    "reviewText": "I am unable to add account to setup Auto pay for ipo the bank is showing as added but not adding",
    "reviewDate": "2026-10-21 10:41",
    "foundHelpful": 0,
    "sourcePlatform": "Google Play Store",
    "sourceProvenance": "Imported INDMoney app review dataset",
    "sourceReference": "INDMoney Review Row #55",
    "preliminaryKeywordSignals": "Bank mandate / NACH / e-mandate / AutoPay",
    "triagePriority": "Review \u2013 related keyword, H1 fit uncertain",
    "humanReviewStatus": "pending",
    "humanCategories": [],
    "humanEvidenceStrength": "UNASSIGNED",
    "researcherNotes": "",
    "reviewedAt": null,
    "reviewedBy": null,
    "aiSuggestion": {
      "categories": [
        "NACH / AutoPay issue",
        "Bank account linking problem"
      ],
      "evidenceStrength": "INDIRECT",
      "supportingExcerpt": "I am unable to add account to setup Auto pay for ipo the bank is showing as added but not adding",
      "explanation": "Mentions bank mandate or AutoPay friction, but does not explicitly confirm a mutual fund SIP was affected.",
      "researchImplication": "Supports broader friction around automated recurring debits, but requires confirmation of SIP context."
    }
  },
  {
    "id": "IND-00203",
    "originalRow": 203,
    "rating": 1,
    "reviewText": "i have opened a federal Bank account through indmoney app and also added funds in the account. However, not able to add money in US wallet using funds available in federal Bank account.",
    "reviewDate": "2026-10-07 22:47",
    "foundHelpful": 0,
    "sourcePlatform": "Google Play Store",
    "sourceProvenance": "Imported INDMoney app review dataset",
    "sourceReference": "INDMoney Review Row #203",
    "preliminaryKeywordSignals": "Bank account linking for investment",
    "triagePriority": "Review \u2013 related keyword, H1 fit uncertain",
    "humanReviewStatus": "pending",
    "humanCategories": [],
    "humanEvidenceStrength": "UNASSIGNED",
    "researcherNotes": "",
    "reviewedAt": null,
    "reviewedBy": null,
    "aiSuggestion": {
      "categories": [
        "Bank account linking problem"
      ],
      "evidenceStrength": "INSUFFICIENT",
      "supportingExcerpt": "i have opened a federal Bank account through indmoney app and also added funds in the account",
      "explanation": "Pertains to upstream bank account verification or linking, rather than active SIP mandate debit execution.",
      "researchImplication": "Upstream onboarding friction; does not substantiate H1 involuntary discontinuation after SIP creation."
    }
  },
  {
    "id": "IND-00358",
    "originalRow": 358,
    "rating": 4,
    "reviewText": "I started an sip and paid the first amount it was debited from my account but it failed saying kyc is not valid and there's no option for rekyc even the support system doesn't help. Edit : the support team reached out to help with the rekyc",
    "reviewDate": "2026-09-25 13:35",
    "foundHelpful": 0,
    "sourcePlatform": "Google Play Store",
    "sourceProvenance": "Imported INDMoney app review dataset",
    "sourceReference": "INDMoney Review Row #358",
    "preliminaryKeywordSignals": "SIP instalment / SIP debit / SIP payment",
    "triagePriority": "High \u2013 explicit SIP + mandate/AutoPay language",
    "humanReviewStatus": "pending",
    "humanCategories": [],
    "humanEvidenceStrength": "UNASSIGNED",
    "researcherNotes": "",
    "reviewedAt": null,
    "reviewedBy": null,
    "aiSuggestion": {
      "categories": [
        "SIP instalment debit failure",
        "SIP setup issue"
      ],
      "evidenceStrength": "DIRECT",
      "supportingExcerpt": "I started an sip and paid the first amount it was debited from my account but it failed saying kyc is not valid and there's no option for rekyc even the support system doesn't help",
      "explanation": "Review explicitly describes a mutual fund SIP instalment or mandate debit failure.",
      "researchImplication": "Directly substantiates H1: user experienced unexpected payment failure during active SIP cycle."
    }
  },
  {
    "id": "IND-00720",
    "originalRow": 720,
    "rating": 5,
    "reviewText": "improvement needed in remove primary bank account and add other bank not option available need improvement",
    "reviewDate": "2026-08-27 12:00",
    "foundHelpful": 0,
    "sourcePlatform": "Google Play Store",
    "sourceProvenance": "Imported INDMoney app review dataset",
    "sourceReference": "INDMoney Review Row #720",
    "preliminaryKeywordSignals": "Bank account linking for investment",
    "triagePriority": "Review \u2013 related keyword, H1 fit uncertain",
    "humanReviewStatus": "pending",
    "humanCategories": [],
    "humanEvidenceStrength": "UNASSIGNED",
    "researcherNotes": "",
    "reviewedAt": null,
    "reviewedBy": null,
    "aiSuggestion": {
      "categories": [
        "Bank account linking problem"
      ],
      "evidenceStrength": "INSUFFICIENT",
      "supportingExcerpt": "improvement needed in remove primary bank account and add other bank not option available need improvement",
      "explanation": "Pertains to upstream bank account verification or linking, rather than active SIP mandate debit execution.",
      "researchImplication": "Upstream onboarding friction; does not substantiate H1 involuntary discontinuation after SIP creation."
    }
  },
  {
    "id": "IND-00741",
    "originalRow": 741,
    "rating": 3,
    "reviewText": "I have recently open an account for investment in the US market when I tried to add fund it showing that there are four private sector banks available to add fund no any PSB banks appearing to add fund that means investors should have bank account in private sector bank if anybody have account in PSB banks .they can't add fund to invest in us market. there should be an option for psu banks also so that investors can add fund for the same.",
    "reviewDate": "2026-08-25 22:39",
    "foundHelpful": 0,
    "sourcePlatform": "Google Play Store",
    "sourceProvenance": "Imported INDMoney app review dataset",
    "sourceReference": "INDMoney Review Row #741",
    "preliminaryKeywordSignals": "Bank account linking for investment",
    "triagePriority": "Review \u2013 related keyword, H1 fit uncertain",
    "humanReviewStatus": "pending",
    "humanCategories": [],
    "humanEvidenceStrength": "UNASSIGNED",
    "researcherNotes": "",
    "reviewedAt": null,
    "reviewedBy": null,
    "aiSuggestion": {
      "categories": [
        "Bank account linking problem"
      ],
      "evidenceStrength": "INSUFFICIENT",
      "supportingExcerpt": "I have recently open an account for investment in the US market when I tried to add fund it showing that there are four private sector banks available to add fund no any PSB banks appearing to add fund that means investors should have bank account in private sector bank if anybody have account in PSB banks",
      "explanation": "Pertains to upstream bank account verification or linking, rather than active SIP mandate debit execution.",
      "researchImplication": "Upstream onboarding friction; does not substantiate H1 involuntary discontinuation after SIP creation."
    }
  },
  {
    "id": "IND-00742",
    "originalRow": 742,
    "rating": 1,
    "reviewText": "Worst experience with INDmoney & Fibe. Setup AutoPay/NACH for Insta Cash loan \u20b995k+. Got stuck on IMPS transfer error for over 24h. No money disbursed, but support bot says \"No records found\" for valid Txn ID ID26082451xxxx. Now mandate is active without getting the loan. Pathetic service!",
    "reviewDate": "2026-08-25 21:28",
    "foundHelpful": 0,
    "sourcePlatform": "Google Play Store",
    "sourceProvenance": "Imported INDMoney app review dataset",
    "sourceReference": "INDMoney Review Row #742",
    "preliminaryKeywordSignals": "Bank mandate / NACH / e-mandate / AutoPay",
    "triagePriority": "Review \u2013 related keyword, H1 fit uncertain",
    "humanReviewStatus": "pending",
    "humanCategories": [],
    "humanEvidenceStrength": "UNASSIGNED",
    "researcherNotes": "",
    "reviewedAt": null,
    "reviewedBy": null,
    "aiSuggestion": {
      "categories": [
        "Bank mandate failure",
        "NACH / AutoPay issue"
      ],
      "evidenceStrength": "INDIRECT",
      "supportingExcerpt": "Setup AutoPay/NACH for Insta Cash loan \u20b995k+",
      "explanation": "Mentions bank mandate or AutoPay friction, but does not explicitly confirm a mutual fund SIP was affected.",
      "researchImplication": "Supports broader friction around automated recurring debits, but requires confirmation of SIP context."
    }
  },
  {
    "id": "IND-00745",
    "originalRow": 745,
    "rating": 2,
    "reviewText": "I use this app for US investments and UPI payments. Recently, a UPI payment went to 'Pending' and the money was debited from my account. Since the driver insisted on cash, I had to pay twice. When I opened a support ticket, your team just told me to contact my bank. If you won't take responsibility for UPI failures on your platform, why even offer the feature? You have completely lost my trust.",
    "reviewDate": "2026-08-25 18:29",
    "foundHelpful": 8,
    "sourcePlatform": "Google Play Store",
    "sourceProvenance": "Imported INDMoney app review dataset",
    "sourceReference": "INDMoney Review Row #745",
    "preliminaryKeywordSignals": "Payment failure / pending payment",
    "triagePriority": "Review \u2013 related keyword, H1 fit uncertain",
    "humanReviewStatus": "pending",
    "humanCategories": [],
    "humanEvidenceStrength": "UNASSIGNED",
    "researcherNotes": "",
    "reviewedAt": null,
    "reviewedBy": null,
    "aiSuggestion": {
      "categories": [
        "General payment issue"
      ],
      "evidenceStrength": "INSUFFICIENT",
      "supportingExcerpt": "Recently, a UPI payment went to 'Pending' and the money was debited from my account",
      "explanation": "Review describes general app service, withdrawal, or unrelated payment issue without establishing SIP mandate failure.",
      "researchImplication": "Does not support H1 hypothesis."
    }
  },
  {
    "id": "IND-00795",
    "originalRow": 795,
    "rating": 1,
    "reviewText": "never apply ipo through ind money, no notification received for UPI Mandate",
    "reviewDate": "2026-08-20 19:42",
    "foundHelpful": 0,
    "sourcePlatform": "Google Play Store",
    "sourceProvenance": "Imported INDMoney app review dataset",
    "sourceReference": "INDMoney Review Row #795",
    "preliminaryKeywordSignals": "Bank mandate / NACH / e-mandate / AutoPay",
    "triagePriority": "Review \u2013 related keyword, H1 fit uncertain",
    "humanReviewStatus": "pending",
    "humanCategories": [],
    "humanEvidenceStrength": "UNASSIGNED",
    "researcherNotes": "",
    "reviewedAt": null,
    "reviewedBy": null,
    "aiSuggestion": {
      "categories": [
        "General payment issue"
      ],
      "evidenceStrength": "INSUFFICIENT",
      "supportingExcerpt": "never apply ipo through ind money, no notification received for UPI Mandate",
      "explanation": "Review describes general app service, withdrawal, or unrelated payment issue without establishing SIP mandate failure.",
      "researchImplication": "Does not support H1 hypothesis."
    }
  },
  {
    "id": "IND-00962",
    "originalRow": 962,
    "rating": 1,
    "reviewText": "not working Link bank account",
    "reviewDate": "2026-08-07 18:13",
    "foundHelpful": 1,
    "sourcePlatform": "Google Play Store",
    "sourceProvenance": "Imported INDMoney app review dataset",
    "sourceReference": "INDMoney Review Row #962",
    "preliminaryKeywordSignals": "Bank account linking for investment",
    "triagePriority": "Review \u2013 related keyword, H1 fit uncertain",
    "humanReviewStatus": "pending",
    "humanCategories": [],
    "humanEvidenceStrength": "UNASSIGNED",
    "researcherNotes": "",
    "reviewedAt": null,
    "reviewedBy": null,
    "aiSuggestion": {
      "categories": [
        "Bank account linking problem"
      ],
      "evidenceStrength": "INSUFFICIENT",
      "supportingExcerpt": "not working Link bank account",
      "explanation": "Pertains to upstream bank account verification or linking, rather than active SIP mandate debit execution.",
      "researchImplication": "Upstream onboarding friction; does not substantiate H1 involuntary discontinuation after SIP creation."
    }
  },
  {
    "id": "IND-00988",
    "originalRow": 988,
    "rating": 4,
    "reviewText": "plz add sbi bank account for us Market, everyone waiting for that ,thank you, nice application , plz add stoploss option in premarket trading aslo , it very helpful to new & many people, so as soon as possible add it ,thank you",
    "reviewDate": "2026-08-06 15:11",
    "foundHelpful": 0,
    "sourcePlatform": "Google Play Store",
    "sourceProvenance": "Imported INDMoney app review dataset",
    "sourceReference": "INDMoney Review Row #988",
    "preliminaryKeywordSignals": "Bank account linking for investment",
    "triagePriority": "Review \u2013 related keyword, H1 fit uncertain",
    "humanReviewStatus": "pending",
    "humanCategories": [],
    "humanEvidenceStrength": "UNASSIGNED",
    "researcherNotes": "",
    "reviewedAt": null,
    "reviewedBy": null,
    "aiSuggestion": {
      "categories": [
        "Bank account linking problem"
      ],
      "evidenceStrength": "INSUFFICIENT",
      "supportingExcerpt": "plz add sbi bank account for us Market, everyone waiting for that ,thank you, nice application , plz add stoploss option in premarket trading aslo , it very helpful to new & many people, so as soon as possible add it ,thank you",
      "explanation": "Pertains to upstream bank account verification or linking, rather than active SIP mandate debit execution.",
      "researchImplication": "Upstream onboarding friction; does not substantiate H1 involuntary discontinuation after SIP creation."
    }
  },
  {
    "id": "IND-01004",
    "originalRow": 1004,
    "rating": 1,
    "reviewText": "Poor experience. They lent me money on pledged mutual funds. I linked my account for auto emi pay but they never deduct any amount in Autopay and charging penalty and interests every month. also no option for pre payment of my dues. It's a trap to lose money. I am taking this to the consumer forum or maybe SEBI to address these fraudsters.",
    "reviewDate": "2026-08-05 17:24",
    "foundHelpful": 2,
    "sourcePlatform": "Google Play Store",
    "sourceProvenance": "Imported INDMoney app review dataset",
    "sourceReference": "INDMoney Review Row #1004",
    "preliminaryKeywordSignals": "Bank mandate / NACH / e-mandate / AutoPay",
    "triagePriority": "Review \u2013 related keyword, H1 fit uncertain",
    "humanReviewStatus": "pending",
    "humanCategories": [],
    "humanEvidenceStrength": "UNASSIGNED",
    "researcherNotes": "",
    "reviewedAt": null,
    "reviewedBy": null,
    "aiSuggestion": {
      "categories": [
        "NACH / AutoPay issue"
      ],
      "evidenceStrength": "INDIRECT",
      "supportingExcerpt": "I linked my account for auto emi pay but they never deduct any amount in Autopay and charging penalty and interests every month",
      "explanation": "Mentions bank mandate or AutoPay friction, but does not explicitly confirm a mutual fund SIP was affected.",
      "researchImplication": "Supports broader friction around automated recurring debits, but requires confirmation of SIP context."
    }
  },
  {
    "id": "IND-01035",
    "originalRow": 1035,
    "rating": 5,
    "reviewText": "best app in the Playstore for the shear market and trading sip UPI payment... etc i really love this app\ud83e\udd29\ud83e\udd29",
    "reviewDate": "2026-08-03 22:13",
    "foundHelpful": 0,
    "sourcePlatform": "Google Play Store",
    "sourceProvenance": "Imported INDMoney app review dataset",
    "sourceReference": "INDMoney Review Row #1035",
    "preliminaryKeywordSignals": "SIP instalment / SIP debit / SIP payment",
    "triagePriority": "High \u2013 explicit SIP + mandate/AutoPay language",
    "humanReviewStatus": "pending",
    "humanCategories": [],
    "humanEvidenceStrength": "UNASSIGNED",
    "researcherNotes": "",
    "reviewedAt": null,
    "reviewedBy": null,
    "aiSuggestion": {
      "categories": [
        "General payment issue"
      ],
      "evidenceStrength": "INSUFFICIENT",
      "supportingExcerpt": "best app in the Playstore for the shear market and trading sip UPI payment",
      "explanation": "Review describes general app service, withdrawal, or unrelated payment issue without establishing SIP mandate failure.",
      "researchImplication": "Does not support H1 hypothesis."
    }
  },
  {
    "id": "IND-01220",
    "originalRow": 1220,
    "rating": 4,
    "reviewText": "lot of confusions in linking the bank account. I have not able to make even a single transaction till date because of the issues in the linked icici bank account. if I click add money and enter amount select icici and proceed that's it. we will not get the icici login page forever. not sure if it is only for icici. but they have very limited number of banks and no support for upi for US stock trading. Updated 2 to 4 Star: The indmoney team responded to my comment here and rectified the issue \ud83d\udc4d",
    "reviewDate": "2026-07-21 22:17",
    "foundHelpful": 45,
    "sourcePlatform": "Google Play Store",
    "sourceProvenance": "Imported INDMoney app review dataset",
    "sourceReference": "INDMoney Review Row #1220",
    "preliminaryKeywordSignals": "Bank account linking for investment",
    "triagePriority": "Review \u2013 related keyword, H1 fit uncertain",
    "humanReviewStatus": "pending",
    "humanCategories": [],
    "humanEvidenceStrength": "UNASSIGNED",
    "researcherNotes": "",
    "reviewedAt": null,
    "reviewedBy": null,
    "aiSuggestion": {
      "categories": [
        "Bank account linking problem"
      ],
      "evidenceStrength": "INSUFFICIENT",
      "supportingExcerpt": "lot of confusions in linking the bank account",
      "explanation": "Pertains to upstream bank account verification or linking, rather than active SIP mandate debit execution.",
      "researchImplication": "Upstream onboarding friction; does not substantiate H1 involuntary discontinuation after SIP creation."
    }
  },
  {
    "id": "IND-01429",
    "originalRow": 1429,
    "rating": 1,
    "reviewText": "I was going to apply loan at insta cash. but there is a problem, i choose 36 months installments but in Autopay window they asking for 72 month installments of same amount.",
    "reviewDate": "2026-07-07 17:30",
    "foundHelpful": 1,
    "sourcePlatform": "Google Play Store",
    "sourceProvenance": "Imported INDMoney app review dataset",
    "sourceReference": "INDMoney Review Row #1429",
    "preliminaryKeywordSignals": "Bank mandate / NACH / e-mandate / AutoPay",
    "triagePriority": "Review \u2013 related keyword, H1 fit uncertain",
    "humanReviewStatus": "pending",
    "humanCategories": [],
    "humanEvidenceStrength": "UNASSIGNED",
    "researcherNotes": "",
    "reviewedAt": null,
    "reviewedBy": null,
    "aiSuggestion": {
      "categories": [
        "NACH / AutoPay issue"
      ],
      "evidenceStrength": "INDIRECT",
      "supportingExcerpt": "but there is a problem, i choose 36 months installments but in Autopay window they asking for 72 month installments of same amount",
      "explanation": "Mentions bank mandate or AutoPay friction, but does not explicitly confirm a mutual fund SIP was affected.",
      "researchImplication": "Supports broader friction around automated recurring debits, but requires confirmation of SIP context."
    }
  },
  {
    "id": "IND-01457",
    "originalRow": 1457,
    "rating": 1,
    "reviewText": "Rs.500 streak is scam. when you complete almost 9 month, it says Autopay is not supported. very bad experience.",
    "reviewDate": "2026-07-06 08:51",
    "foundHelpful": 0,
    "sourcePlatform": "Google Play Store",
    "sourceProvenance": "Imported INDMoney app review dataset",
    "sourceReference": "INDMoney Review Row #1457",
    "preliminaryKeywordSignals": "Bank mandate / NACH / e-mandate / AutoPay",
    "triagePriority": "Review \u2013 related keyword, H1 fit uncertain",
    "humanReviewStatus": "pending",
    "humanCategories": [],
    "humanEvidenceStrength": "UNASSIGNED",
    "researcherNotes": "",
    "reviewedAt": null,
    "reviewedBy": null,
    "aiSuggestion": {
      "categories": [
        "NACH / AutoPay issue"
      ],
      "evidenceStrength": "INDIRECT",
      "supportingExcerpt": "when you complete almost 9 month, it says Autopay is not supported",
      "explanation": "Mentions bank mandate or AutoPay friction, but does not explicitly confirm a mutual fund SIP was affected.",
      "researchImplication": "Supports broader friction around automated recurring debits, but requires confirmation of SIP context."
    }
  },
  {
    "id": "IND-01857",
    "originalRow": 1857,
    "rating": 4,
    "reviewText": "us stock add money in my bank account is canara bank add",
    "reviewDate": "2026-06-13 21:18",
    "foundHelpful": 0,
    "sourcePlatform": "Google Play Store",
    "sourceProvenance": "Imported INDMoney app review dataset",
    "sourceReference": "INDMoney Review Row #1857",
    "preliminaryKeywordSignals": "Bank account linking for investment",
    "triagePriority": "Review \u2013 related keyword, H1 fit uncertain",
    "humanReviewStatus": "pending",
    "humanCategories": [],
    "humanEvidenceStrength": "UNASSIGNED",
    "researcherNotes": "",
    "reviewedAt": null,
    "reviewedBy": null,
    "aiSuggestion": {
      "categories": [
        "Bank account linking problem"
      ],
      "evidenceStrength": "INSUFFICIENT",
      "supportingExcerpt": "us stock add money in my bank account is canara bank add",
      "explanation": "Pertains to upstream bank account verification or linking, rather than active SIP mandate debit execution.",
      "researchImplication": "Upstream onboarding friction; does not substantiate H1 involuntary discontinuation after SIP creation."
    }
  },
  {
    "id": "IND-01949",
    "originalRow": 1949,
    "rating": 1,
    "reviewText": "INDmoney bugs: Txn times show AEDT instead of IST. Indpay UPI scans ask for PIN then error out, requiring a force close. Critical Flaw: If an Indpay txn hangs due to low signal, the next payment pushes the old pending amount instead of the new one (e.g., sent 30k medical bill instead of 60). Disabling UPI till refunded. Feature Requests: Add separate tax-saving fund card (like Groww). Improve EPFO for corporate private PF trusts (HCL/TCS) or add manual entry (like Artos). Add Wi-Fi tablet suppot",
    "reviewDate": "2026-06-08 21:42",
    "foundHelpful": 5,
    "sourcePlatform": "Google Play Store",
    "sourceProvenance": "Imported INDMoney app review dataset",
    "sourceReference": "INDMoney Review Row #1949",
    "preliminaryKeywordSignals": "Payment failure / pending payment",
    "triagePriority": "Review \u2013 related keyword, H1 fit uncertain",
    "humanReviewStatus": "pending",
    "humanCategories": [],
    "humanEvidenceStrength": "UNASSIGNED",
    "researcherNotes": "",
    "reviewedAt": null,
    "reviewedBy": null,
    "aiSuggestion": {
      "categories": [
        "General payment issue"
      ],
      "evidenceStrength": "INSUFFICIENT",
      "supportingExcerpt": "INDmoney bugs: Txn times show AEDT instead of IST",
      "explanation": "Review describes general app service, withdrawal, or unrelated payment issue without establishing SIP mandate failure.",
      "researchImplication": "Does not support H1 hypothesis."
    }
  },
  {
    "id": "IND-02041",
    "originalRow": 2041,
    "rating": 1,
    "reviewText": "Again, they have disabled the support to receive money to different bank account other than Federal Bank account. I am not able to USD available balance into ICICI bank account, which is already linked.",
    "reviewDate": "2026-06-02 21:08",
    "foundHelpful": 3,
    "sourcePlatform": "Google Play Store",
    "sourceProvenance": "Imported INDMoney app review dataset",
    "sourceReference": "INDMoney Review Row #2041",
    "preliminaryKeywordSignals": "Bank account linking for investment",
    "triagePriority": "Review \u2013 related keyword, H1 fit uncertain",
    "humanReviewStatus": "pending",
    "humanCategories": [],
    "humanEvidenceStrength": "UNASSIGNED",
    "researcherNotes": "",
    "reviewedAt": null,
    "reviewedBy": null,
    "aiSuggestion": {
      "categories": [
        "Bank account linking problem"
      ],
      "evidenceStrength": "INSUFFICIENT",
      "supportingExcerpt": "Again, they have disabled the support to receive money to different bank account other than Federal Bank account",
      "explanation": "Pertains to upstream bank account verification or linking, rather than active SIP mandate debit execution.",
      "researchImplication": "Upstream onboarding friction; does not substantiate H1 involuntary discontinuation after SIP creation."
    }
  },
  {
    "id": "IND-02142",
    "originalRow": 2142,
    "rating": 4,
    "reviewText": "not link all bank account RBL BANK ACCOUNT",
    "reviewDate": "2026-05-26 22:48",
    "foundHelpful": 0,
    "sourcePlatform": "Google Play Store",
    "sourceProvenance": "Imported INDMoney app review dataset",
    "sourceReference": "INDMoney Review Row #2142",
    "preliminaryKeywordSignals": "Bank account linking for investment",
    "triagePriority": "Review \u2013 related keyword, H1 fit uncertain",
    "humanReviewStatus": "pending",
    "humanCategories": [],
    "humanEvidenceStrength": "UNASSIGNED",
    "researcherNotes": "",
    "reviewedAt": null,
    "reviewedBy": null,
    "aiSuggestion": {
      "categories": [
        "Bank account linking problem"
      ],
      "evidenceStrength": "INSUFFICIENT",
      "supportingExcerpt": "not link all bank account RBL BANK ACCOUNT",
      "explanation": "Pertains to upstream bank account verification or linking, rather than active SIP mandate debit execution.",
      "researchImplication": "Upstream onboarding friction; does not substantiate H1 involuntary discontinuation after SIP creation."
    }
  },
  {
    "id": "IND-02261",
    "originalRow": 2261,
    "rating": 1,
    "reviewText": "i can't add money from my Union bank account\ud83d\ude12",
    "reviewDate": "2026-05-18 11:29",
    "foundHelpful": 0,
    "sourcePlatform": "Google Play Store",
    "sourceProvenance": "Imported INDMoney app review dataset",
    "sourceReference": "INDMoney Review Row #2261",
    "preliminaryKeywordSignals": "Bank account linking for investment",
    "triagePriority": "Review \u2013 related keyword, H1 fit uncertain",
    "humanReviewStatus": "pending",
    "humanCategories": [],
    "humanEvidenceStrength": "UNASSIGNED",
    "researcherNotes": "",
    "reviewedAt": null,
    "reviewedBy": null,
    "aiSuggestion": {
      "categories": [
        "Bank account linking problem"
      ],
      "evidenceStrength": "INSUFFICIENT",
      "supportingExcerpt": "i can't add money from my Union bank account\ud83d\ude12",
      "explanation": "Pertains to upstream bank account verification or linking, rather than active SIP mandate debit execution.",
      "researchImplication": "Upstream onboarding friction; does not substantiate H1 involuntary discontinuation after SIP creation."
    }
  },
  {
    "id": "IND-02332",
    "originalRow": 2332,
    "rating": 2,
    "reviewText": "Bad experience with the bank account linking functionality. It shows all banks but the support bot says, tracking is only available for HDFC and Federal banks. While the Axis bank transaction shows correctly, Canara Bank account information is completely blank. Automatic ticket raising is broken as well.",
    "reviewDate": "2026-05-12 20:05",
    "foundHelpful": 4,
    "sourcePlatform": "Google Play Store",
    "sourceProvenance": "Imported INDMoney app review dataset",
    "sourceReference": "INDMoney Review Row #2332",
    "preliminaryKeywordSignals": "Bank account linking for investment",
    "triagePriority": "Review \u2013 related keyword, H1 fit uncertain",
    "humanReviewStatus": "pending",
    "humanCategories": [],
    "humanEvidenceStrength": "UNASSIGNED",
    "researcherNotes": "",
    "reviewedAt": null,
    "reviewedBy": null,
    "aiSuggestion": {
      "categories": [
        "Bank account linking problem"
      ],
      "evidenceStrength": "INSUFFICIENT",
      "supportingExcerpt": "Bad experience with the bank account linking functionality",
      "explanation": "Pertains to upstream bank account verification or linking, rather than active SIP mandate debit execution.",
      "researchImplication": "Upstream onboarding friction; does not substantiate H1 involuntary discontinuation after SIP creation."
    }
  },
  {
    "id": "IND-02441",
    "originalRow": 2441,
    "rating": 1,
    "reviewText": "Serious Concern Regarding Incorrect Auto-Linked Bank Account I recently noticed that my INDmoney account is showing a bank account number and IFSC code that are completely unknown to me. I have never added, authorized, or linked this account at any point. This appears to have been auto-linked by the system, which raises serious concerns about account security, data accuracy, and fund safety. I hope the support team resolves this matter urgently and transparently.",
    "reviewDate": "2026-04-29 15:30",
    "foundHelpful": 9,
    "sourcePlatform": "Google Play Store",
    "sourceProvenance": "Imported INDMoney app review dataset",
    "sourceReference": "INDMoney Review Row #2441",
    "preliminaryKeywordSignals": "Bank account linking for investment",
    "triagePriority": "Review \u2013 related keyword, H1 fit uncertain",
    "humanReviewStatus": "pending",
    "humanCategories": [],
    "humanEvidenceStrength": "UNASSIGNED",
    "researcherNotes": "",
    "reviewedAt": null,
    "reviewedBy": null,
    "aiSuggestion": {
      "categories": [
        "Bank account linking problem"
      ],
      "evidenceStrength": "INSUFFICIENT",
      "supportingExcerpt": "Serious Concern Regarding Incorrect Auto-Linked Bank Account I recently noticed that my INDmoney account is showing a bank account number and IFSC code that are completely unknown to me",
      "explanation": "Pertains to upstream bank account verification or linking, rather than active SIP mandate debit execution.",
      "researchImplication": "Upstream onboarding friction; does not substantiate H1 involuntary discontinuation after SIP creation."
    }
  },
  {
    "id": "IND-02462",
    "originalRow": 2462,
    "rating": 4,
    "reviewText": "why auto pay is not working",
    "reviewDate": "2026-04-24 22:23",
    "foundHelpful": 0,
    "sourcePlatform": "Google Play Store",
    "sourceProvenance": "Imported INDMoney app review dataset",
    "sourceReference": "INDMoney Review Row #2462",
    "preliminaryKeywordSignals": "Bank mandate / NACH / e-mandate / AutoPay",
    "triagePriority": "Review \u2013 related keyword, H1 fit uncertain",
    "humanReviewStatus": "pending",
    "humanCategories": [],
    "humanEvidenceStrength": "UNASSIGNED",
    "researcherNotes": "",
    "reviewedAt": null,
    "reviewedBy": null,
    "aiSuggestion": {
      "categories": [
        "NACH / AutoPay issue"
      ],
      "evidenceStrength": "INDIRECT",
      "supportingExcerpt": "why auto pay is not working",
      "explanation": "Mentions bank mandate or AutoPay friction, but does not explicitly confirm a mutual fund SIP was affected.",
      "researchImplication": "Supports broader friction around automated recurring debits, but requires confirmation of SIP context."
    }
  },
  {
    "id": "IND-02634",
    "originalRow": 2634,
    "rating": 1,
    "reviewText": "The spend analysis option is not available in the latest update. I linked all my bank accounts and credit cards so that i can track my spends easily. Now it is gone",
    "reviewDate": "2026-04-08 17:29",
    "foundHelpful": 5,
    "sourcePlatform": "Google Play Store",
    "sourceProvenance": "Imported INDMoney app review dataset",
    "sourceReference": "INDMoney Review Row #2634",
    "preliminaryKeywordSignals": "Bank account linking for investment",
    "triagePriority": "Review \u2013 related keyword, H1 fit uncertain",
    "humanReviewStatus": "pending",
    "humanCategories": [],
    "humanEvidenceStrength": "UNASSIGNED",
    "researcherNotes": "",
    "reviewedAt": null,
    "reviewedBy": null,
    "aiSuggestion": {
      "categories": [
        "Bank account linking problem"
      ],
      "evidenceStrength": "INSUFFICIENT",
      "supportingExcerpt": "I linked all my bank accounts and credit cards so that i can track my spends easily",
      "explanation": "Pertains to upstream bank account verification or linking, rather than active SIP mandate debit execution.",
      "researchImplication": "Upstream onboarding friction; does not substantiate H1 involuntary discontinuation after SIP creation."
    }
  },
  {
    "id": "IND-02676",
    "originalRow": 2676,
    "rating": 1,
    "reviewText": "app is good but there is some issue which can not be ignored. 1. I added a bank account can not be delete. 2. IND money open a demate account without our permission if you try to invest in mutual fund (we don't need a demate account).",
    "reviewDate": "2026-04-05 19:13",
    "foundHelpful": 3,
    "sourcePlatform": "Google Play Store",
    "sourceProvenance": "Imported INDMoney app review dataset",
    "sourceReference": "INDMoney Review Row #2676",
    "preliminaryKeywordSignals": "Bank account linking for investment",
    "triagePriority": "Review \u2013 related keyword, H1 fit uncertain",
    "humanReviewStatus": "pending",
    "humanCategories": [],
    "humanEvidenceStrength": "UNASSIGNED",
    "researcherNotes": "",
    "reviewedAt": null,
    "reviewedBy": null,
    "aiSuggestion": {
      "categories": [
        "Bank account linking problem"
      ],
      "evidenceStrength": "INSUFFICIENT",
      "supportingExcerpt": "I added a bank account can not be delete",
      "explanation": "Pertains to upstream bank account verification or linking, rather than active SIP mandate debit execution.",
      "researchImplication": "Upstream onboarding friction; does not substantiate H1 involuntary discontinuation after SIP creation."
    }
  },
  {
    "id": "IND-02760",
    "originalRow": 2760,
    "rating": 1,
    "reviewText": "worst app couldn't link my bank account Waited a month nothing happened. they'll tell you it will take 3 days but wouldn't happen. They steal data as well pathetic service. i recommend groww instead. switching the app now.",
    "reviewDate": "2026-03-30 16:58",
    "foundHelpful": 3,
    "sourcePlatform": "Google Play Store",
    "sourceProvenance": "Imported INDMoney app review dataset",
    "sourceReference": "INDMoney Review Row #2760",
    "preliminaryKeywordSignals": "Bank account linking for investment",
    "triagePriority": "Review \u2013 related keyword, H1 fit uncertain",
    "humanReviewStatus": "pending",
    "humanCategories": [],
    "humanEvidenceStrength": "UNASSIGNED",
    "researcherNotes": "",
    "reviewedAt": null,
    "reviewedBy": null,
    "aiSuggestion": {
      "categories": [
        "Bank account linking problem"
      ],
      "evidenceStrength": "INSUFFICIENT",
      "supportingExcerpt": "worst app couldn't link my bank account Waited a month nothing happened",
      "explanation": "Pertains to upstream bank account verification or linking, rather than active SIP mandate debit execution.",
      "researchImplication": "Upstream onboarding friction; does not substantiate H1 involuntary discontinuation after SIP creation."
    }
  },
  {
    "id": "IND-02881",
    "originalRow": 2881,
    "rating": 1,
    "reviewText": "Worst app. I was install the app before 6 months. Still now i can't add my bank details. They push to open Federal bank account. This app haven't customer care contact numbers. How to reach you with out customer care contact numbers. Very poor app. I recommend all peoples Angel one is best. They having customer care contact numbers. If any problem they will solve within a hour. Indmoney is worst app don't install the app.",
    "reviewDate": "2026-03-20 06:59",
    "foundHelpful": 17,
    "sourcePlatform": "Google Play Store",
    "sourceProvenance": "Imported INDMoney app review dataset",
    "sourceReference": "INDMoney Review Row #2881",
    "preliminaryKeywordSignals": "Bank account linking for investment",
    "triagePriority": "Review \u2013 related keyword, H1 fit uncertain",
    "humanReviewStatus": "pending",
    "humanCategories": [],
    "humanEvidenceStrength": "UNASSIGNED",
    "researcherNotes": "",
    "reviewedAt": null,
    "reviewedBy": null,
    "aiSuggestion": {
      "categories": [
        "Bank account linking problem"
      ],
      "evidenceStrength": "INSUFFICIENT",
      "supportingExcerpt": "Still now i can't add my bank details",
      "explanation": "Pertains to upstream bank account verification or linking, rather than active SIP mandate debit execution.",
      "researchImplication": "Upstream onboarding friction; does not substantiate H1 involuntary discontinuation after SIP creation."
    }
  },
  {
    "id": "IND-02882",
    "originalRow": 2882,
    "rating": 1,
    "reviewText": "please add other bank account fund future via upi",
    "reviewDate": "2026-03-20 06:44",
    "foundHelpful": 0,
    "sourcePlatform": "Google Play Store",
    "sourceProvenance": "Imported INDMoney app review dataset",
    "sourceReference": "INDMoney Review Row #2882",
    "preliminaryKeywordSignals": "Bank account linking for investment",
    "triagePriority": "Review \u2013 related keyword, H1 fit uncertain",
    "humanReviewStatus": "pending",
    "humanCategories": [],
    "humanEvidenceStrength": "UNASSIGNED",
    "researcherNotes": "",
    "reviewedAt": null,
    "reviewedBy": null,
    "aiSuggestion": {
      "categories": [
        "Bank account linking problem"
      ],
      "evidenceStrength": "INSUFFICIENT",
      "supportingExcerpt": "please add other bank account fund future via upi",
      "explanation": "Pertains to upstream bank account verification or linking, rather than active SIP mandate debit execution.",
      "researchImplication": "Upstream onboarding friction; does not substantiate H1 involuntary discontinuation after SIP creation."
    }
  },
  {
    "id": "IND-02962",
    "originalRow": 2962,
    "rating": 5,
    "reviewText": "my sip deducted two times this month and no response from complaint",
    "reviewDate": "2026-03-13 23:11",
    "foundHelpful": 0,
    "sourcePlatform": "Google Play Store",
    "sourceProvenance": "Imported INDMoney app review dataset",
    "sourceReference": "INDMoney Review Row #2962",
    "preliminaryKeywordSignals": "SIP instalment / SIP debit / SIP payment",
    "triagePriority": "Review \u2013 related keyword, H1 fit uncertain",
    "humanReviewStatus": "pending",
    "humanCategories": [],
    "humanEvidenceStrength": "UNASSIGNED",
    "researcherNotes": "",
    "reviewedAt": null,
    "reviewedBy": null,
    "aiSuggestion": {
      "categories": [
        "SIP instalment debit failure"
      ],
      "evidenceStrength": "DIRECT",
      "supportingExcerpt": "my sip deducted two times this month and no response from complaint",
      "explanation": "Review explicitly describes a mutual fund SIP instalment or mandate debit failure.",
      "researchImplication": "Directly substantiates H1: user experienced unexpected payment failure during active SIP cycle."
    }
  },
  {
    "id": "IND-03009",
    "originalRow": 3009,
    "rating": 1,
    "reviewText": "most frustrating experience taking 6 days to deposit money from bank account after debit . this kind of bad services getting from this app",
    "reviewDate": "2026-03-10 22:25",
    "foundHelpful": 0,
    "sourcePlatform": "Google Play Store",
    "sourceProvenance": "Imported INDMoney app review dataset",
    "sourceReference": "INDMoney Review Row #3009",
    "preliminaryKeywordSignals": "Bank account linking for investment",
    "triagePriority": "Review \u2013 related keyword, H1 fit uncertain",
    "humanReviewStatus": "pending",
    "humanCategories": [],
    "humanEvidenceStrength": "UNASSIGNED",
    "researcherNotes": "",
    "reviewedAt": null,
    "reviewedBy": null,
    "aiSuggestion": {
      "categories": [
        "Bank account linking problem"
      ],
      "evidenceStrength": "INSUFFICIENT",
      "supportingExcerpt": "most frustrating experience taking 6 days to deposit money from bank account after debit",
      "explanation": "Pertains to upstream bank account verification or linking, rather than active SIP mandate debit execution.",
      "researchImplication": "Upstream onboarding friction; does not substantiate H1 involuntary discontinuation after SIP creation."
    }
  },
  {
    "id": "IND-03226",
    "originalRow": 3226,
    "rating": 4,
    "reviewText": "update: the team reached back and tried rectifying the issue Your app is very cumbersome for the mutual fund part. when I'm signing up for any SIP. you deduct the amount twice and i didn't even know that",
    "reviewDate": "2026-02-24 13:00",
    "foundHelpful": 4,
    "sourcePlatform": "Google Play Store",
    "sourceProvenance": "Imported INDMoney app review dataset",
    "sourceReference": "INDMoney Review Row #3226",
    "preliminaryKeywordSignals": "SIP instalment / SIP debit / SIP payment",
    "triagePriority": "Review \u2013 related keyword, H1 fit uncertain",
    "humanReviewStatus": "pending",
    "humanCategories": [],
    "humanEvidenceStrength": "UNASSIGNED",
    "researcherNotes": "",
    "reviewedAt": null,
    "reviewedBy": null,
    "aiSuggestion": {
      "categories": [
        "SIP instalment debit failure"
      ],
      "evidenceStrength": "DIRECT",
      "supportingExcerpt": "when I'm signing up for any SIP",
      "explanation": "Review explicitly describes a mutual fund SIP instalment or mandate debit failure.",
      "researchImplication": "Directly substantiates H1: user experienced unexpected payment failure during active SIP cycle."
    }
  },
  {
    "id": "IND-03709",
    "originalRow": 3709,
    "rating": 1,
    "reviewText": "I have union Bank account and I can't add money in us stocks \ud83e\udd21",
    "reviewDate": "2026-01-21 18:37",
    "foundHelpful": 1,
    "sourcePlatform": "Google Play Store",
    "sourceProvenance": "Imported INDMoney app review dataset",
    "sourceReference": "INDMoney Review Row #3709",
    "preliminaryKeywordSignals": "Bank account linking for investment",
    "triagePriority": "Review \u2013 related keyword, H1 fit uncertain",
    "humanReviewStatus": "pending",
    "humanCategories": [],
    "humanEvidenceStrength": "UNASSIGNED",
    "researcherNotes": "",
    "reviewedAt": null,
    "reviewedBy": null,
    "aiSuggestion": {
      "categories": [
        "Bank account linking problem"
      ],
      "evidenceStrength": "INSUFFICIENT",
      "supportingExcerpt": "I have union Bank account and I can't add money in us stocks \ud83e\udd21",
      "explanation": "Pertains to upstream bank account verification or linking, rather than active SIP mandate debit execution.",
      "researchImplication": "Upstream onboarding friction; does not substantiate H1 involuntary discontinuation after SIP creation."
    }
  },
  {
    "id": "IND-03810",
    "originalRow": 3810,
    "rating": 1,
    "reviewText": "5 days will take the money added reach us stock account..I only added 500 rs \ud83d\ude05 the withdrawal charge from us stock account to my bank account is just 5$\ud83d\ude02\ud83d\ude02why guys don't tell this before adding fund?nothing to say this is called cheating also in Indian market 2 days for withdrawal high charges and brokerage..zerodha is better than this . I accidentally invested in ind money \ud83e\udd23",
    "reviewDate": "2026-01-15 19:45",
    "foundHelpful": 3,
    "sourcePlatform": "Google Play Store",
    "sourceProvenance": "Imported INDMoney app review dataset",
    "sourceReference": "INDMoney Review Row #3810",
    "preliminaryKeywordSignals": "Bank account linking for investment",
    "triagePriority": "Review \u2013 related keyword, H1 fit uncertain",
    "humanReviewStatus": "pending",
    "humanCategories": [],
    "humanEvidenceStrength": "UNASSIGNED",
    "researcherNotes": "",
    "reviewedAt": null,
    "reviewedBy": null,
    "aiSuggestion": {
      "categories": [
        "Bank account linking problem",
        "Withdrawal / redemption issue"
      ],
      "evidenceStrength": "INSUFFICIENT",
      "supportingExcerpt": "I only added 500 rs \ud83d\ude05 the withdrawal charge from us stock account to my bank account is just 5$\ud83d\ude02\ud83d\ude02why guys don't tell this before adding fund",
      "explanation": "Pertains to upstream bank account verification or linking, rather than active SIP mandate debit execution.",
      "researchImplication": "Upstream onboarding friction; does not substantiate H1 involuntary discontinuation after SIP creation."
    }
  },
  {
    "id": "IND-04036",
    "originalRow": 4036,
    "rating": 3,
    "reviewText": "Please add bi-weekly SIP options in mutual fund frequencies subscription this is missing in the mutual fund feature options. add it as soon as possible for benefits of all customer and rupee costs averaging.",
    "reviewDate": "2025-12-29 20:46",
    "foundHelpful": 0,
    "sourcePlatform": "Google Play Store",
    "sourceProvenance": "Imported INDMoney app review dataset",
    "sourceReference": "INDMoney Review Row #4036",
    "preliminaryKeywordSignals": "SIP instalment / SIP debit / SIP payment",
    "triagePriority": "Review \u2013 related keyword, H1 fit uncertain",
    "humanReviewStatus": "pending",
    "humanCategories": [],
    "humanEvidenceStrength": "UNASSIGNED",
    "researcherNotes": "",
    "reviewedAt": null,
    "reviewedBy": null,
    "aiSuggestion": {
      "categories": [
        "Unrelated feedback"
      ],
      "evidenceStrength": "INSUFFICIENT",
      "supportingExcerpt": "Please add bi-weekly SIP options in mutual fund frequencies subscription this is missing in the mutual fund feature options",
      "explanation": "Review describes general app service, withdrawal, or unrelated payment issue without establishing SIP mandate failure.",
      "researchImplication": "Does not support H1 hypothesis."
    }
  },
  {
    "id": "IND-04081",
    "originalRow": 4081,
    "rating": 4,
    "reviewText": "ok , but quant and Invesco send DD while selling instead of Direct transfer to my bank account citing my surname not available in bank account as per PAN card, whereas they won't raise any objection while receiving money from the same account, why ? 10 days delay in getting my money into my bank account, who is responsible? Indmoney should address this kind of small investors concern. thank you",
    "reviewDate": "2025-12-26 22:44",
    "foundHelpful": 0,
    "sourcePlatform": "Google Play Store",
    "sourceProvenance": "Imported INDMoney app review dataset",
    "sourceReference": "INDMoney Review Row #4081",
    "preliminaryKeywordSignals": "Bank account linking for investment",
    "triagePriority": "Review \u2013 related keyword, H1 fit uncertain",
    "humanReviewStatus": "pending",
    "humanCategories": [],
    "humanEvidenceStrength": "UNASSIGNED",
    "researcherNotes": "",
    "reviewedAt": null,
    "reviewedBy": null,
    "aiSuggestion": {
      "categories": [
        "Bank account linking problem",
        "Withdrawal / redemption issue"
      ],
      "evidenceStrength": "INSUFFICIENT",
      "supportingExcerpt": "ok , but quant and Invesco send DD while selling instead of Direct transfer to my bank account citing my surname not available in bank account as per PAN card, whereas they won't raise any objection while receiving money from the same account, why",
      "explanation": "Pertains to upstream bank account verification or linking, rather than active SIP mandate debit execution.",
      "researchImplication": "Upstream onboarding friction; does not substantiate H1 involuntary discontinuation after SIP creation."
    }
  },
  {
    "id": "IND-04147",
    "originalRow": 4147,
    "rating": 1,
    "reviewText": "The worst app..... when I tried to set up a sip on US market fails 3 times but in the sip section it's showing 3 sips active but only one got successful and I want to cancel the remaining 2 but it's not",
    "reviewDate": "2025-12-22 12:15",
    "foundHelpful": 3,
    "sourcePlatform": "Google Play Store",
    "sourceProvenance": "Imported INDMoney app review dataset",
    "sourceReference": "INDMoney Review Row #4147",
    "preliminaryKeywordSignals": "SIP instalment / SIP debit / SIP payment",
    "triagePriority": "High \u2013 explicit SIP + mandate/AutoPay language",
    "humanReviewStatus": "pending",
    "humanCategories": [],
    "humanEvidenceStrength": "UNASSIGNED",
    "researcherNotes": "",
    "reviewedAt": null,
    "reviewedBy": null,
    "aiSuggestion": {
      "categories": [
        "SIP instalment debit failure",
        "SIP setup issue"
      ],
      "evidenceStrength": "DIRECT",
      "supportingExcerpt": "when I tried to set up a sip on US market fails 3 times but in the sip section it's showing 3 sips active but only one got successful and I want to cancel the remaining 2 but it's not",
      "explanation": "Review explicitly describes a mutual fund SIP instalment or mandate debit failure.",
      "researchImplication": "Directly substantiates H1: user experienced unexpected payment failure during active SIP cycle."
    }
  },
  {
    "id": "IND-04260",
    "originalRow": 4260,
    "rating": 1,
    "reviewText": "One of the worst app.When I trying to get an insta cash, it shows me an offer of 2 Lakhs and also my KYC was completed.After that when I'm trying to Select Autopay, INDmoney own app lacked or hanged mid-way and due to which I'm unable to select Autopay mode.Unfortunately I need to back off from the app,because there is no options available at that time.I waited but got no update.I also contacted customer service and they said wait 15 minutes to get an update and then select Autopay mode. No sudd",
    "reviewDate": "2025-12-14 10:38",
    "foundHelpful": 6,
    "sourcePlatform": "Google Play Store",
    "sourceProvenance": "Imported INDMoney app review dataset",
    "sourceReference": "INDMoney Review Row #4260",
    "preliminaryKeywordSignals": "Bank mandate / NACH / e-mandate / AutoPay",
    "triagePriority": "Review \u2013 related keyword, H1 fit uncertain",
    "humanReviewStatus": "pending",
    "humanCategories": [],
    "humanEvidenceStrength": "UNASSIGNED",
    "researcherNotes": "",
    "reviewedAt": null,
    "reviewedBy": null,
    "aiSuggestion": {
      "categories": [
        "NACH / AutoPay issue"
      ],
      "evidenceStrength": "INDIRECT",
      "supportingExcerpt": "After that when I'm trying to Select Autopay, INDmoney own app lacked or hanged mid-way and due to which I'm unable to select Autopay mode",
      "explanation": "Mentions bank mandate or AutoPay friction, but does not explicitly confirm a mutual fund SIP was affected.",
      "researchImplication": "Supports broader friction around automated recurring debits, but requires confirmation of SIP context."
    }
  },
  {
    "id": "IND-04719",
    "originalRow": 4719,
    "rating": 1,
    "reviewText": "worst ever experience with credit card bill payments, i made the payment and the app received the payment but it didn't submit it to my credit card instead it reverted my payment after one day when my due date was over, i was charged with penality just because the payment was failed by them. Will switch back to CRED now for making payments.",
    "reviewDate": "2025-11-08 10:27",
    "foundHelpful": 26,
    "sourcePlatform": "Google Play Store",
    "sourceProvenance": "Imported INDMoney app review dataset",
    "sourceReference": "INDMoney Review Row #4719",
    "preliminaryKeywordSignals": "Payment failure / pending payment",
    "triagePriority": "Review \u2013 related keyword, H1 fit uncertain",
    "humanReviewStatus": "pending",
    "humanCategories": [],
    "humanEvidenceStrength": "UNASSIGNED",
    "researcherNotes": "",
    "reviewedAt": null,
    "reviewedBy": null,
    "aiSuggestion": {
      "categories": [
        "General payment issue"
      ],
      "evidenceStrength": "INSUFFICIENT",
      "supportingExcerpt": "worst ever experience with credit card bill payments, i made the payment and the app received the payment but it didn't submit it to my credit card instead it reverted my payment after one day when my due date was over, i was charged with penality just because the payment was failed by them",
      "explanation": "Review describes general app service, withdrawal, or unrelated payment issue without establishing SIP mandate failure.",
      "researchImplication": "Does not support H1 hypothesis."
    }
  },
  {
    "id": "IND-04818",
    "originalRow": 4818,
    "rating": 4,
    "reviewText": "i can not track my DCB Bank account bank balance. Kindly add DCB Bank in the list.",
    "reviewDate": "2025-11-01 11:01",
    "foundHelpful": 0,
    "sourcePlatform": "Google Play Store",
    "sourceProvenance": "Imported INDMoney app review dataset",
    "sourceReference": "INDMoney Review Row #4818",
    "preliminaryKeywordSignals": "Bank account linking for investment",
    "triagePriority": "Review \u2013 related keyword, H1 fit uncertain",
    "humanReviewStatus": "pending",
    "humanCategories": [],
    "humanEvidenceStrength": "UNASSIGNED",
    "researcherNotes": "",
    "reviewedAt": null,
    "reviewedBy": null,
    "aiSuggestion": {
      "categories": [
        "Bank account linking problem"
      ],
      "evidenceStrength": "INSUFFICIENT",
      "supportingExcerpt": "i can not track my DCB Bank account bank balance",
      "explanation": "Pertains to upstream bank account verification or linking, rather than active SIP mandate debit execution.",
      "researchImplication": "Upstream onboarding friction; does not substantiate H1 involuntary discontinuation after SIP creation."
    }
  },
  {
    "id": "IND-05191",
    "originalRow": 5191,
    "rating": 5,
    "reviewText": "Kindly add Jana Small Finance Bank option to add in add bank account section.",
    "reviewDate": "2025-10-12 20:20",
    "foundHelpful": 0,
    "sourcePlatform": "Google Play Store",
    "sourceProvenance": "Imported INDMoney app review dataset",
    "sourceReference": "INDMoney Review Row #5191",
    "preliminaryKeywordSignals": "Bank account linking for investment",
    "triagePriority": "Review \u2013 related keyword, H1 fit uncertain",
    "humanReviewStatus": "pending",
    "humanCategories": [],
    "humanEvidenceStrength": "UNASSIGNED",
    "researcherNotes": "",
    "reviewedAt": null,
    "reviewedBy": null,
    "aiSuggestion": {
      "categories": [
        "Bank account linking problem"
      ],
      "evidenceStrength": "INSUFFICIENT",
      "supportingExcerpt": "Kindly add Jana Small Finance Bank option to add in add bank account section",
      "explanation": "Pertains to upstream bank account verification or linking, rather than active SIP mandate debit execution.",
      "researchImplication": "Upstream onboarding friction; does not substantiate H1 involuntary discontinuation after SIP creation."
    }
  },
  {
    "id": "IND-05639",
    "originalRow": 5639,
    "rating": 3,
    "reviewText": "allow any bank in name and linked to mobile number for sip upi auto pay like Paytm money. one mandate setup and link various sip .",
    "reviewDate": "2025-09-14 14:33",
    "foundHelpful": 0,
    "sourcePlatform": "Google Play Store",
    "sourceProvenance": "Imported INDMoney app review dataset",
    "sourceReference": "INDMoney Review Row #5639",
    "preliminaryKeywordSignals": "Bank mandate / NACH / e-mandate / AutoPay; SIP instalment / SIP debit / SIP payment",
    "triagePriority": "High \u2013 explicit SIP + mandate/AutoPay language",
    "humanReviewStatus": "pending",
    "humanCategories": [],
    "humanEvidenceStrength": "UNASSIGNED",
    "researcherNotes": "",
    "reviewedAt": null,
    "reviewedBy": null,
    "aiSuggestion": {
      "categories": [
        "NACH / AutoPay issue",
        "SIP setup issue"
      ],
      "evidenceStrength": "INDIRECT",
      "supportingExcerpt": "allow any bank in name and linked to mobile number for sip upi auto pay like Paytm money",
      "explanation": "Mentions bank mandate or AutoPay friction, but does not explicitly confirm a mutual fund SIP was affected.",
      "researchImplication": "Supports broader friction around automated recurring debits, but requires confirmation of SIP context."
    }
  },
  {
    "id": "IND-05790",
    "originalRow": 5790,
    "rating": 5,
    "reviewText": "The ui is good. But I tried to make a federal bank account and the app just couldn't send me an otp linked to my aadhaar card. I tried several times and then it showed that I've exhausted my attempts. Please fix this issue. Issue was resolved in time. Thank you.",
    "reviewDate": "2025-09-05 17:20",
    "foundHelpful": 1,
    "sourcePlatform": "Google Play Store",
    "sourceProvenance": "Imported INDMoney app review dataset",
    "sourceReference": "INDMoney Review Row #5790",
    "preliminaryKeywordSignals": "Bank account linking for investment",
    "triagePriority": "Review \u2013 related keyword, H1 fit uncertain",
    "humanReviewStatus": "pending",
    "humanCategories": [],
    "humanEvidenceStrength": "UNASSIGNED",
    "researcherNotes": "",
    "reviewedAt": null,
    "reviewedBy": null,
    "aiSuggestion": {
      "categories": [
        "Bank account linking problem"
      ],
      "evidenceStrength": "INSUFFICIENT",
      "supportingExcerpt": "But I tried to make a federal bank account and the app just couldn't send me an otp linked to my aadhaar card",
      "explanation": "Pertains to upstream bank account verification or linking, rather than active SIP mandate debit execution.",
      "researchImplication": "Upstream onboarding friction; does not substantiate H1 involuntary discontinuation after SIP creation."
    }
  },
  {
    "id": "IND-05908",
    "originalRow": 5908,
    "rating": 1,
    "reviewText": "Customer support is useless. They have linked bank account with wrong ifsc code and continued the transaction. On raising the issue no resolution and no calls at all,grievence team is also of no use. I have wasted lot of time on this issue and it remains. Too many emails sent by me but they are least bothered.",
    "reviewDate": "2025-08-27 21:25",
    "foundHelpful": 40,
    "sourcePlatform": "Google Play Store",
    "sourceProvenance": "Imported INDMoney app review dataset",
    "sourceReference": "INDMoney Review Row #5908",
    "preliminaryKeywordSignals": "Bank account linking for investment",
    "triagePriority": "Review \u2013 related keyword, H1 fit uncertain",
    "humanReviewStatus": "pending",
    "humanCategories": [],
    "humanEvidenceStrength": "UNASSIGNED",
    "researcherNotes": "",
    "reviewedAt": null,
    "reviewedBy": null,
    "aiSuggestion": {
      "categories": [
        "Bank account linking problem"
      ],
      "evidenceStrength": "INSUFFICIENT",
      "supportingExcerpt": "They have linked bank account with wrong ifsc code and continued the transaction",
      "explanation": "Pertains to upstream bank account verification or linking, rather than active SIP mandate debit execution.",
      "researchImplication": "Upstream onboarding friction; does not substantiate H1 involuntary discontinuation after SIP creation."
    }
  },
  {
    "id": "IND-06649",
    "originalRow": 6649,
    "rating": 3,
    "reviewText": "Does not provide option to track other bank accounts linked to other mobile numbers. Maybe fetch all bank account of a person from the PAN to calculate accurate networth.",
    "reviewDate": "2025-07-21 11:07",
    "foundHelpful": 0,
    "sourcePlatform": "Google Play Store",
    "sourceProvenance": "Imported INDMoney app review dataset",
    "sourceReference": "INDMoney Review Row #6649",
    "preliminaryKeywordSignals": "Bank account linking for investment",
    "triagePriority": "Review \u2013 related keyword, H1 fit uncertain",
    "humanReviewStatus": "pending",
    "humanCategories": [],
    "humanEvidenceStrength": "UNASSIGNED",
    "researcherNotes": "",
    "reviewedAt": null,
    "reviewedBy": null,
    "aiSuggestion": {
      "categories": [
        "Bank account linking problem"
      ],
      "evidenceStrength": "INSUFFICIENT",
      "supportingExcerpt": "Does not provide option to track other bank accounts linked to other mobile numbers",
      "explanation": "Pertains to upstream bank account verification or linking, rather than active SIP mandate debit execution.",
      "researchImplication": "Upstream onboarding friction; does not substantiate H1 involuntary discontinuation after SIP creation."
    }
  },
  {
    "id": "IND-06879",
    "originalRow": 6879,
    "rating": 2,
    "reviewText": "Linking and removing bank account process is weird. Ind money is Creating UPI accounts on it's own.",
    "reviewDate": "2025-07-12 20:46",
    "foundHelpful": 0,
    "sourcePlatform": "Google Play Store",
    "sourceProvenance": "Imported INDMoney app review dataset",
    "sourceReference": "INDMoney Review Row #6879",
    "preliminaryKeywordSignals": "Bank account linking for investment",
    "triagePriority": "Review \u2013 related keyword, H1 fit uncertain",
    "humanReviewStatus": "pending",
    "humanCategories": [],
    "humanEvidenceStrength": "UNASSIGNED",
    "researcherNotes": "",
    "reviewedAt": null,
    "reviewedBy": null,
    "aiSuggestion": {
      "categories": [
        "Bank account linking problem"
      ],
      "evidenceStrength": "INSUFFICIENT",
      "supportingExcerpt": "Linking and removing bank account process is weird",
      "explanation": "Pertains to upstream bank account verification or linking, rather than active SIP mandate debit execution.",
      "researchImplication": "Upstream onboarding friction; does not substantiate H1 involuntary discontinuation after SIP creation."
    }
  },
  {
    "id": "IND-07116",
    "originalRow": 7116,
    "rating": 4,
    "reviewText": "I've given 4 stars because everything is great except that I can not add my bank account with Jana SFB becaus it's not listed as an option to add. Hoping this could be rectified at the earliest!",
    "reviewDate": "2025-07-02 18:08",
    "foundHelpful": 0,
    "sourcePlatform": "Google Play Store",
    "sourceProvenance": "Imported INDMoney app review dataset",
    "sourceReference": "INDMoney Review Row #7116",
    "preliminaryKeywordSignals": "Bank account linking for investment",
    "triagePriority": "Review \u2013 related keyword, H1 fit uncertain",
    "humanReviewStatus": "pending",
    "humanCategories": [],
    "humanEvidenceStrength": "UNASSIGNED",
    "researcherNotes": "",
    "reviewedAt": null,
    "reviewedBy": null,
    "aiSuggestion": {
      "categories": [
        "Bank account linking problem"
      ],
      "evidenceStrength": "INSUFFICIENT",
      "supportingExcerpt": "I've given 4 stars because everything is great except that I can not add my bank account with Jana SFB becaus it's not listed as an option to add",
      "explanation": "Pertains to upstream bank account verification or linking, rather than active SIP mandate debit execution.",
      "researchImplication": "Upstream onboarding friction; does not substantiate H1 involuntary discontinuation after SIP creation."
    }
  },
  {
    "id": "IND-07279",
    "originalRow": 7279,
    "rating": 1,
    "reviewText": "This is advertising company. everytime asking to link hdfc account. why? i already linked my bank account and asking me to link hdfc. they are promoting banks. \ud83d\ude21\ud83d\ude21\ud83d\ude21\ud83d\ude21\ud83d\ude21\ud83d\ude21",
    "reviewDate": "2025-06-26 23:55",
    "foundHelpful": 0,
    "sourcePlatform": "Google Play Store",
    "sourceProvenance": "Imported INDMoney app review dataset",
    "sourceReference": "INDMoney Review Row #7279",
    "preliminaryKeywordSignals": "Bank account linking for investment",
    "triagePriority": "Review \u2013 related keyword, H1 fit uncertain",
    "humanReviewStatus": "pending",
    "humanCategories": [],
    "humanEvidenceStrength": "UNASSIGNED",
    "researcherNotes": "",
    "reviewedAt": null,
    "reviewedBy": null,
    "aiSuggestion": {
      "categories": [
        "Bank account linking problem"
      ],
      "evidenceStrength": "INSUFFICIENT",
      "supportingExcerpt": "i already linked my bank account and asking me to link hdfc",
      "explanation": "Pertains to upstream bank account verification or linking, rather than active SIP mandate debit execution.",
      "researchImplication": "Upstream onboarding friction; does not substantiate H1 involuntary discontinuation after SIP creation."
    }
  },
  {
    "id": "IND-07343",
    "originalRow": 7343,
    "rating": 1,
    "reviewText": "WORST APP,, they ask you to create account even if you have an existing fed bank account added durinv application. and crazh part is even if you do create account and complete the entire process. they show message that your existing account has kyc problem.",
    "reviewDate": "2025-06-23 21:56",
    "foundHelpful": 0,
    "sourcePlatform": "Google Play Store",
    "sourceProvenance": "Imported INDMoney app review dataset",
    "sourceReference": "INDMoney Review Row #7343",
    "preliminaryKeywordSignals": "Bank account linking for investment",
    "triagePriority": "Review \u2013 related keyword, H1 fit uncertain",
    "humanReviewStatus": "pending",
    "humanCategories": [],
    "humanEvidenceStrength": "UNASSIGNED",
    "researcherNotes": "",
    "reviewedAt": null,
    "reviewedBy": null,
    "aiSuggestion": {
      "categories": [
        "Bank account linking problem"
      ],
      "evidenceStrength": "INSUFFICIENT",
      "supportingExcerpt": "WORST APP,, they ask you to create account even if you have an existing fed bank account added durinv application",
      "explanation": "Pertains to upstream bank account verification or linking, rather than active SIP mandate debit execution.",
      "researchImplication": "Upstream onboarding friction; does not substantiate H1 involuntary discontinuation after SIP creation."
    }
  },
  {
    "id": "IND-07824",
    "originalRow": 7824,
    "rating": 1,
    "reviewText": "I\u2019m really disappointed with the app\u2019s bank account management features. I\u2019m unable to remove my linked bank accounts or add a new one. App has linked an SBM account that serves no purpose, and despite several attempts, I haven\u2019t been able to remove it. Additionally, a Federal Bank account meant for US transactions is also showing up under my Mutual Funds section, which makes no sense. Both the SBM and Federal accounts are incorrectly listed under Mutual Funds, causing confusion and frustration.",
    "reviewDate": "2025-05-31 14:22",
    "foundHelpful": 8,
    "sourcePlatform": "Google Play Store",
    "sourceProvenance": "Imported INDMoney app review dataset",
    "sourceReference": "INDMoney Review Row #7824",
    "preliminaryKeywordSignals": "Bank account linking for investment",
    "triagePriority": "Review \u2013 related keyword, H1 fit uncertain",
    "humanReviewStatus": "pending",
    "humanCategories": [],
    "humanEvidenceStrength": "UNASSIGNED",
    "researcherNotes": "",
    "reviewedAt": null,
    "reviewedBy": null,
    "aiSuggestion": {
      "categories": [
        "Bank account linking problem"
      ],
      "evidenceStrength": "INSUFFICIENT",
      "supportingExcerpt": "I\u2019m really disappointed with the app\u2019s bank account management features",
      "explanation": "Pertains to upstream bank account verification or linking, rather than active SIP mandate debit execution.",
      "researchImplication": "Upstream onboarding friction; does not substantiate H1 involuntary discontinuation after SIP creation."
    }
  },
  {
    "id": "IND-08659",
    "originalRow": 8659,
    "rating": 4,
    "reviewText": "How to use my existing bank account to add funds to a US stocks account? Like I have an account in IDFC bank and SBI Bank",
    "reviewDate": "2025-04-14 17:42",
    "foundHelpful": 0,
    "sourcePlatform": "Google Play Store",
    "sourceProvenance": "Imported INDMoney app review dataset",
    "sourceReference": "INDMoney Review Row #8659",
    "preliminaryKeywordSignals": "Bank account linking for investment",
    "triagePriority": "Review \u2013 related keyword, H1 fit uncertain",
    "humanReviewStatus": "pending",
    "humanCategories": [],
    "humanEvidenceStrength": "UNASSIGNED",
    "researcherNotes": "",
    "reviewedAt": null,
    "reviewedBy": null,
    "aiSuggestion": {
      "categories": [
        "Bank account linking problem"
      ],
      "evidenceStrength": "INSUFFICIENT",
      "supportingExcerpt": "How to use my existing bank account to add funds to a US stocks account",
      "explanation": "Pertains to upstream bank account verification or linking, rather than active SIP mandate debit execution.",
      "researchImplication": "Upstream onboarding friction; does not substantiate H1 involuntary discontinuation after SIP creation."
    }
  },
  {
    "id": "IND-08924",
    "originalRow": 8924,
    "rating": 1,
    "reviewText": "SHAME ON YOU IND MONEY. This is worst application, these guys have charge more than rupees 4000 for SIP mandate bounce, if indmoney think that it will encourage investor to invest more amount without fail, you are wrong, you people are cheating on your customers, when market was falling very badly it's our decision to take pause for some time, instead of helping customers you people are finding opportunities to make money by claiming mandate fines, SHAME ON YOU.",
    "reviewDate": "2025-03-31 17:33",
    "foundHelpful": 2,
    "sourcePlatform": "Google Play Store",
    "sourceProvenance": "Imported INDMoney app review dataset",
    "sourceReference": "INDMoney Review Row #8924",
    "preliminaryKeywordSignals": "Bank mandate / NACH / e-mandate / AutoPay; SIP instalment / SIP debit / SIP payment",
    "triagePriority": "High \u2013 explicit SIP + mandate/AutoPay language",
    "humanReviewStatus": "pending",
    "humanCategories": [],
    "humanEvidenceStrength": "UNASSIGNED",
    "researcherNotes": "",
    "reviewedAt": null,
    "reviewedBy": null,
    "aiSuggestion": {
      "categories": [
        "SIP instalment debit failure",
        "Bank mandate failure"
      ],
      "evidenceStrength": "DIRECT",
      "supportingExcerpt": "This is worst application, these guys have charge more than rupees 4000 for SIP mandate bounce, if indmoney think that it will encourage investor to invest more amount without fail, you are wrong, you people are cheating on your customers, when market was falling very badly it's our decision to take pause for some time, instead of helping customers you people are finding opportunities to make money by claiming mandate fines, SHAME ON YOU",
      "explanation": "Review explicitly describes a mutual fund SIP instalment or mandate debit failure.",
      "researchImplication": "Directly substantiates H1: user experienced unexpected payment failure during active SIP cycle."
    }
  },
  {
    "id": "IND-09106",
    "originalRow": 9106,
    "rating": 2,
    "reviewText": "I just started to use the app. but facing the issues at start only. started to use app for US stock investment. As a part of procedure I linked 2 bank accounts which are in use successfully. but still application is forcing ro create a federal bank account. not allowing me to transfer funds in US wallet. no option found for help as well to come out from issue. they should require improvement in this process.",
    "reviewDate": "2025-03-22 13:09",
    "foundHelpful": 3,
    "sourcePlatform": "Google Play Store",
    "sourceProvenance": "Imported INDMoney app review dataset",
    "sourceReference": "INDMoney Review Row #9106",
    "preliminaryKeywordSignals": "Bank account linking for investment",
    "triagePriority": "Review \u2013 related keyword, H1 fit uncertain",
    "humanReviewStatus": "pending",
    "humanCategories": [],
    "humanEvidenceStrength": "UNASSIGNED",
    "researcherNotes": "",
    "reviewedAt": null,
    "reviewedBy": null,
    "aiSuggestion": {
      "categories": [
        "Bank account linking problem"
      ],
      "evidenceStrength": "INSUFFICIENT",
      "supportingExcerpt": "As a part of procedure I linked 2 bank accounts which are in use successfully",
      "explanation": "Pertains to upstream bank account verification or linking, rather than active SIP mandate debit execution.",
      "researchImplication": "Upstream onboarding friction; does not substantiate H1 involuntary discontinuation after SIP creation."
    }
  },
  {
    "id": "IND-09118",
    "originalRow": 9118,
    "rating": 1,
    "reviewText": "not able pay credit card bill payment always getting failed worst experience recently in this app",
    "reviewDate": "2025-03-21 20:27",
    "foundHelpful": 5,
    "sourcePlatform": "Google Play Store",
    "sourceProvenance": "Imported INDMoney app review dataset",
    "sourceReference": "INDMoney Review Row #9118",
    "preliminaryKeywordSignals": "Payment failure / pending payment",
    "triagePriority": "Review \u2013 related keyword, H1 fit uncertain",
    "humanReviewStatus": "pending",
    "humanCategories": [],
    "humanEvidenceStrength": "UNASSIGNED",
    "researcherNotes": "",
    "reviewedAt": null,
    "reviewedBy": null,
    "aiSuggestion": {
      "categories": [
        "General payment issue"
      ],
      "evidenceStrength": "INSUFFICIENT",
      "supportingExcerpt": "not able pay credit card bill payment always getting failed worst experience recently in this app",
      "explanation": "Review describes general app service, withdrawal, or unrelated payment issue without establishing SIP mandate failure.",
      "researchImplication": "Does not support H1 hypothesis."
    }
  },
  {
    "id": "IND-09220",
    "originalRow": 9220,
    "rating": 1,
    "reviewText": "account linked is very bad service federal Bank account open very complicate\u0964 one app 2 bank account very fenny app",
    "reviewDate": "2025-03-17 16:56",
    "foundHelpful": 0,
    "sourcePlatform": "Google Play Store",
    "sourceProvenance": "Imported INDMoney app review dataset",
    "sourceReference": "INDMoney Review Row #9220",
    "preliminaryKeywordSignals": "Bank account linking for investment",
    "triagePriority": "Review \u2013 related keyword, H1 fit uncertain",
    "humanReviewStatus": "pending",
    "humanCategories": [],
    "humanEvidenceStrength": "UNASSIGNED",
    "researcherNotes": "",
    "reviewedAt": null,
    "reviewedBy": null,
    "aiSuggestion": {
      "categories": [
        "Bank account linking problem"
      ],
      "evidenceStrength": "INSUFFICIENT",
      "supportingExcerpt": "account linked is very bad service federal Bank account open very complicate\u0964 one app 2 bank account very fenny app",
      "explanation": "Pertains to upstream bank account verification or linking, rather than active SIP mandate debit execution.",
      "researchImplication": "Upstream onboarding friction; does not substantiate H1 involuntary discontinuation after SIP creation."
    }
  },
  {
    "id": "IND-09519",
    "originalRow": 9519,
    "rating": 1,
    "reviewText": "Credit card payment is not safety in this app, I made credit card payment it's failed and money doesn't refunded yet",
    "reviewDate": "2025-03-03 22:56",
    "foundHelpful": 0,
    "sourcePlatform": "Google Play Store",
    "sourceProvenance": "Imported INDMoney app review dataset",
    "sourceReference": "INDMoney Review Row #9519",
    "preliminaryKeywordSignals": "Payment failure / pending payment",
    "triagePriority": "Review \u2013 related keyword, H1 fit uncertain",
    "humanReviewStatus": "pending",
    "humanCategories": [],
    "humanEvidenceStrength": "UNASSIGNED",
    "researcherNotes": "",
    "reviewedAt": null,
    "reviewedBy": null,
    "aiSuggestion": {
      "categories": [
        "General payment issue"
      ],
      "evidenceStrength": "INSUFFICIENT",
      "supportingExcerpt": "Credit card payment is not safety in this app, I made credit card payment it's failed and money doesn't refunded yet",
      "explanation": "Review describes general app service, withdrawal, or unrelated payment issue without establishing SIP mandate failure.",
      "researchImplication": "Does not support H1 hypothesis."
    }
  },
  {
    "id": "IND-09543",
    "originalRow": 9543,
    "rating": 1,
    "reviewText": "SIP mandates are not executed or are executed for amount other than mandate amount. With no timeline for resolution to the issues raised with customer service the investor is bound to lose on the value of money invested. Better to invest directly with mutual funds.",
    "reviewDate": "2025-03-02 10:12",
    "foundHelpful": 0,
    "sourcePlatform": "Google Play Store",
    "sourceProvenance": "Imported INDMoney app review dataset",
    "sourceReference": "INDMoney Review Row #9543",
    "preliminaryKeywordSignals": "Bank mandate / NACH / e-mandate / AutoPay; SIP instalment / SIP debit / SIP payment",
    "triagePriority": "High \u2013 explicit SIP + mandate/AutoPay language",
    "humanReviewStatus": "pending",
    "humanCategories": [],
    "humanEvidenceStrength": "UNASSIGNED",
    "researcherNotes": "",
    "reviewedAt": null,
    "reviewedBy": null,
    "aiSuggestion": {
      "categories": [
        "General payment issue"
      ],
      "evidenceStrength": "INSUFFICIENT",
      "supportingExcerpt": "SIP mandates are not executed or are executed for amount other than mandate amount",
      "explanation": "Review describes general app service, withdrawal, or unrelated payment issue without establishing SIP mandate failure.",
      "researchImplication": "Does not support H1 hypothesis."
    }
  },
  {
    "id": "IND-09583",
    "originalRow": 9583,
    "rating": 5,
    "reviewText": "One of the best apps I have ever come across and the beauty is money is transferred instantly into your bank account. Real time graphs TBT powered is an added feature",
    "reviewDate": "2025-02-28 08:37",
    "foundHelpful": 3,
    "sourcePlatform": "Google Play Store",
    "sourceProvenance": "Imported INDMoney app review dataset",
    "sourceReference": "INDMoney Review Row #9583",
    "preliminaryKeywordSignals": "Bank account linking for investment",
    "triagePriority": "Review \u2013 related keyword, H1 fit uncertain",
    "humanReviewStatus": "pending",
    "humanCategories": [],
    "humanEvidenceStrength": "UNASSIGNED",
    "researcherNotes": "",
    "reviewedAt": null,
    "reviewedBy": null,
    "aiSuggestion": {
      "categories": [
        "Bank account linking problem"
      ],
      "evidenceStrength": "INSUFFICIENT",
      "supportingExcerpt": "One of the best apps I have ever come across and the beauty is money is transferred instantly into your bank account",
      "explanation": "Pertains to upstream bank account verification or linking, rather than active SIP mandate debit execution.",
      "researchImplication": "Upstream onboarding friction; does not substantiate H1 involuntary discontinuation after SIP creation."
    }
  },
  {
    "id": "IND-10225",
    "originalRow": 10225,
    "rating": 5,
    "reviewText": "Every single month there is a auto pay problem. EVERY DAMN MONTH WITHOUT FAIL.",
    "reviewDate": "2025-01-31 21:26",
    "foundHelpful": 1,
    "sourcePlatform": "Google Play Store",
    "sourceProvenance": "Imported INDMoney app review dataset",
    "sourceReference": "INDMoney Review Row #10225",
    "preliminaryKeywordSignals": "Bank mandate / NACH / e-mandate / AutoPay",
    "triagePriority": "Review \u2013 related keyword, H1 fit uncertain",
    "humanReviewStatus": "pending",
    "humanCategories": [],
    "humanEvidenceStrength": "UNASSIGNED",
    "researcherNotes": "",
    "reviewedAt": null,
    "reviewedBy": null,
    "aiSuggestion": {
      "categories": [
        "NACH / AutoPay issue"
      ],
      "evidenceStrength": "INDIRECT",
      "supportingExcerpt": "Every single month there is a auto pay problem",
      "explanation": "Mentions bank mandate or AutoPay friction, but does not explicitly confirm a mutual fund SIP was affected.",
      "researchImplication": "Supports broader friction around automated recurring debits, but requires confirmation of SIP context."
    }
  },
  {
    "id": "IND-10308",
    "originalRow": 10308,
    "rating": 1,
    "reviewText": "Update 01/2025: 4 of my SIP have been deducted and failed to be refunded and yet tickets are closed and no call are picked up. Update 09/2024: The app framework work seems to be pushing updates without testing them. Suddenly now ticket #2047327 removed all fixed assets from the dashboard with the only track being under the goal section. I think the developers need to consider that this will make us move away as for a minor return no by dy will risk such bugs on an asset app of all.",
    "reviewDate": "2025-01-29 17:45",
    "foundHelpful": 8,
    "sourcePlatform": "Google Play Store",
    "sourceProvenance": "Imported INDMoney app review dataset",
    "sourceReference": "INDMoney Review Row #10308",
    "preliminaryKeywordSignals": "SIP instalment / SIP debit / SIP payment",
    "triagePriority": "High \u2013 explicit SIP + mandate/AutoPay language",
    "humanReviewStatus": "pending",
    "humanCategories": [],
    "humanEvidenceStrength": "UNASSIGNED",
    "researcherNotes": "",
    "reviewedAt": null,
    "reviewedBy": null,
    "aiSuggestion": {
      "categories": [
        "SIP instalment debit failure"
      ],
      "evidenceStrength": "DIRECT",
      "supportingExcerpt": "Update 01/2025: 4 of my SIP have been deducted and failed to be refunded and yet tickets are closed and no call are picked up",
      "explanation": "Review explicitly describes a mutual fund SIP instalment or mandate debit failure.",
      "researchImplication": "Directly substantiates H1: user experienced unexpected payment failure during active SIP cycle."
    }
  },
  {
    "id": "IND-10713",
    "originalRow": 10713,
    "rating": 2,
    "reviewText": "Its wonderful app. But I'm facing few issues like 1. Not able to setup US Stock Account as video KYC is not working properly (Should easy to create US account same as like India Dmat account creation) 2. Not able to link NPS through Gmail id (Link through Mobile No. option should be their). 3. Few Bank are not available to link Current Bank Account with App (Remaining Banks need to be added). I hope this feedback would be helpful in enhancing application feature. Best Wishes.",
    "reviewDate": "2025-01-15 23:40",
    "foundHelpful": 1,
    "sourcePlatform": "Google Play Store",
    "sourceProvenance": "Imported INDMoney app review dataset",
    "sourceReference": "INDMoney Review Row #10713",
    "preliminaryKeywordSignals": "Bank account linking for investment",
    "triagePriority": "Review \u2013 related keyword, H1 fit uncertain",
    "humanReviewStatus": "pending",
    "humanCategories": [],
    "humanEvidenceStrength": "UNASSIGNED",
    "researcherNotes": "",
    "reviewedAt": null,
    "reviewedBy": null,
    "aiSuggestion": {
      "categories": [
        "Bank account linking problem"
      ],
      "evidenceStrength": "INSUFFICIENT",
      "supportingExcerpt": "Few Bank are not available to link Current Bank Account with App (Remaining Banks need to be added)",
      "explanation": "Pertains to upstream bank account verification or linking, rather than active SIP mandate debit execution.",
      "researchImplication": "Upstream onboarding friction; does not substantiate H1 involuntary discontinuation after SIP creation."
    }
  },
  {
    "id": "IND-11133",
    "originalRow": 11133,
    "rating": 5,
    "reviewText": "Super app to manage all your finances at one place, I am loving the new upi payments integration feature. It now also enable us to auto pay our bills. I would like to see couple of tweaks/additions : 1) Bills should be allowed to be Named/Tagged so to make it easier to remember. 2) A shortcut should be added somehow to enable QR scanner without the need to go inside the application to maintain data privacy.",
    "reviewDate": "2025-01-02 20:07",
    "foundHelpful": 63,
    "sourcePlatform": "Google Play Store",
    "sourceProvenance": "Imported INDMoney app review dataset",
    "sourceReference": "INDMoney Review Row #11133",
    "preliminaryKeywordSignals": "Bank mandate / NACH / e-mandate / AutoPay",
    "triagePriority": "Review \u2013 related keyword, H1 fit uncertain",
    "humanReviewStatus": "pending",
    "humanCategories": [],
    "humanEvidenceStrength": "UNASSIGNED",
    "researcherNotes": "",
    "reviewedAt": null,
    "reviewedBy": null,
    "aiSuggestion": {
      "categories": [
        "NACH / AutoPay issue"
      ],
      "evidenceStrength": "INDIRECT",
      "supportingExcerpt": "It now also enable us to auto pay our bills",
      "explanation": "Mentions bank mandate or AutoPay friction, but does not explicitly confirm a mutual fund SIP was affected.",
      "researchImplication": "Supports broader friction around automated recurring debits, but requires confirmation of SIP context."
    }
  },
  {
    "id": "IND-11935",
    "originalRow": 11935,
    "rating": 1,
    "reviewText": "WORST APP EVER! I am unable to add my bank account & when I tried with my bank It is showing as existing account but when I TRIED TO ADD FUNDS IT IS SHOWING ME OPTION AGAIN TO ADD BANK ACCOUNT. THEN I TRIED FOR FEDERAL BANK. DURING KYC IT ASKED FOR ANNUAL SALARY AND DURING VIDEO KYC THEY ASKED FOR MONTHLY SALARY AND THEN THE AGENT DISCONNECTED BY SAYING INFORMATION IS NOT MATCHING. THEN I TRIED TO UPDATE MY SALARY BUT OPTION WAS NOT THERE SO CONNECTED WITH KYC AGENT AND THEY ASKED ME TO CONTACT",
    "reviewDate": "2024-12-13 12:35",
    "foundHelpful": 6,
    "sourcePlatform": "Google Play Store",
    "sourceProvenance": "Imported INDMoney app review dataset",
    "sourceReference": "INDMoney Review Row #11935",
    "preliminaryKeywordSignals": "Bank account linking for investment",
    "triagePriority": "Review \u2013 related keyword, H1 fit uncertain",
    "humanReviewStatus": "pending",
    "humanCategories": [],
    "humanEvidenceStrength": "UNASSIGNED",
    "researcherNotes": "",
    "reviewedAt": null,
    "reviewedBy": null,
    "aiSuggestion": {
      "categories": [
        "Bank account linking problem"
      ],
      "evidenceStrength": "INSUFFICIENT",
      "supportingExcerpt": "I am unable to add my bank account & when I tried with my bank It is showing as existing account but when I TRIED TO ADD FUNDS IT IS SHOWING ME OPTION AGAIN TO ADD BANK ACCOUNT",
      "explanation": "Pertains to upstream bank account verification or linking, rather than active SIP mandate debit execution.",
      "researchImplication": "Upstream onboarding friction; does not substantiate H1 involuntary discontinuation after SIP creation."
    }
  },
  {
    "id": "IND-12173",
    "originalRow": 12173,
    "rating": 1,
    "reviewText": "Don't instal this scam app, i m applied for ind insta loan, the amount is not credited to my bank account, but emi is debited, my mutual fund is not un lien at about 14 days, im allready raise a complaint towards sebi against them, no customer support is available properly, so don't instal this type of fraudulent app, they dont have a telephonic number to call, so un install this fraudulent app.. And save ur previous money.. SCAM..............",
    "reviewDate": "2024-12-08 09:20",
    "foundHelpful": 1,
    "sourcePlatform": "Google Play Store",
    "sourceProvenance": "Imported INDMoney app review dataset",
    "sourceReference": "INDMoney Review Row #12173",
    "preliminaryKeywordSignals": "Bank account linking for investment",
    "triagePriority": "Review \u2013 related keyword, H1 fit uncertain",
    "humanReviewStatus": "pending",
    "humanCategories": [],
    "humanEvidenceStrength": "UNASSIGNED",
    "researcherNotes": "",
    "reviewedAt": null,
    "reviewedBy": null,
    "aiSuggestion": {
      "categories": [
        "Bank account linking problem"
      ],
      "evidenceStrength": "INSUFFICIENT",
      "supportingExcerpt": "Don't instal this scam app, i m applied for ind insta loan, the amount is not credited to my bank account, but emi is debited, my mutual fund is not un lien at about 14 days, im allready raise a complaint towards sebi against them, no customer support is available properly, so don't instal this type of fraudulent app, they dont have a telephonic number to call, so un install this fraudulent app",
      "explanation": "Pertains to upstream bank account verification or linking, rather than active SIP mandate debit execution.",
      "researchImplication": "Upstream onboarding friction; does not substantiate H1 involuntary discontinuation after SIP creation."
    }
  },
  {
    "id": "IND-12205",
    "originalRow": 12205,
    "rating": 1,
    "reviewText": "App doesn't show option to increase mandate on UPI , it is very frustrating , raised ticket but of no use",
    "reviewDate": "2024-12-07 11:14",
    "foundHelpful": 0,
    "sourcePlatform": "Google Play Store",
    "sourceProvenance": "Imported INDMoney app review dataset",
    "sourceReference": "INDMoney Review Row #12205",
    "preliminaryKeywordSignals": "Bank mandate / NACH / e-mandate / AutoPay",
    "triagePriority": "Review \u2013 related keyword, H1 fit uncertain",
    "humanReviewStatus": "pending",
    "humanCategories": [],
    "humanEvidenceStrength": "UNASSIGNED",
    "researcherNotes": "",
    "reviewedAt": null,
    "reviewedBy": null,
    "aiSuggestion": {
      "categories": [
        "General payment issue"
      ],
      "evidenceStrength": "INSUFFICIENT",
      "supportingExcerpt": "App doesn't show option to increase mandate on UPI , it is very frustrating , raised ticket but of no use",
      "explanation": "Review describes general app service, withdrawal, or unrelated payment issue without establishing SIP mandate failure.",
      "researchImplication": "Does not support H1 hypothesis."
    }
  },
  {
    "id": "IND-13148",
    "originalRow": 13148,
    "rating": 2,
    "reviewText": "We Need to Start Sip but We need Net banking Option We not using Upi bcz we no need to add bank on Gpay and other Apps Please add Other Option Like Net banking/ISIP/Mandate. in lumpsum indmoney have option then why not in sip do work on it",
    "reviewDate": "2024-11-18 11:14",
    "foundHelpful": 0,
    "sourcePlatform": "Google Play Store",
    "sourceProvenance": "Imported INDMoney app review dataset",
    "sourceReference": "INDMoney Review Row #13148",
    "preliminaryKeywordSignals": "Bank mandate / NACH / e-mandate / AutoPay",
    "triagePriority": "High \u2013 explicit SIP + mandate/AutoPay language",
    "humanReviewStatus": "pending",
    "humanCategories": [],
    "humanEvidenceStrength": "UNASSIGNED",
    "researcherNotes": "",
    "reviewedAt": null,
    "reviewedBy": null,
    "aiSuggestion": {
      "categories": [
        "SIP setup issue"
      ],
      "evidenceStrength": "INSUFFICIENT",
      "supportingExcerpt": "We Need to Start Sip but We need Net banking Option We not using Upi bcz we no need to add bank on Gpay and other Apps Please add Other Option Like Net banking/ISIP/Mandate",
      "explanation": "Review describes general app service, withdrawal, or unrelated payment issue without establishing SIP mandate failure.",
      "researchImplication": "Does not support H1 hypothesis."
    }
  },
  {
    "id": "IND-13991",
    "originalRow": 13991,
    "rating": 3,
    "reviewText": "They only shows US STOCK account but you just can't add money in the wallet.. everytime it shows that you need to link your bank account.. then you link your bank ac by paying 1 rupee .. but it still shows that you have to link your bank account.. & this loop goes on and on and on.. worst experience in adding money in us stock account... Pls resolve the same...",
    "reviewDate": "2024-10-29 13:15",
    "foundHelpful": 1,
    "sourcePlatform": "Google Play Store",
    "sourceProvenance": "Imported INDMoney app review dataset",
    "sourceReference": "INDMoney Review Row #13991",
    "preliminaryKeywordSignals": "Bank account linking for investment",
    "triagePriority": "Review \u2013 related keyword, H1 fit uncertain",
    "humanReviewStatus": "pending",
    "humanCategories": [],
    "humanEvidenceStrength": "UNASSIGNED",
    "researcherNotes": "",
    "reviewedAt": null,
    "reviewedBy": null,
    "aiSuggestion": {
      "categories": [
        "Bank account linking problem"
      ],
      "evidenceStrength": "INSUFFICIENT",
      "supportingExcerpt": "everytime it shows that you need to link your bank account",
      "explanation": "Pertains to upstream bank account verification or linking, rather than active SIP mandate debit execution.",
      "researchImplication": "Upstream onboarding friction; does not substantiate H1 involuntary discontinuation after SIP creation."
    }
  },
  {
    "id": "IND-14610",
    "originalRow": 14610,
    "rating": 2,
    "reviewText": "Only good for portfolio analysis but payments are only happening through UPI like Phonepe etc. Not happening through netbanking. Failed twice through HDFC app netbanking and even freez3s the net banking app. Portfolio Payments also failed. Update: one more headache I faced yesterday was video KYC for the Federal bank account which connects to a video call with an agent who finally tell me that my PAN is tampered and cant proceed with V KYC. I am not sure what these guys are upto with all this.",
    "reviewDate": "2024-10-14 15:50",
    "foundHelpful": 1,
    "sourcePlatform": "Google Play Store",
    "sourceProvenance": "Imported INDMoney app review dataset",
    "sourceReference": "INDMoney Review Row #14610",
    "preliminaryKeywordSignals": "Payment failure / pending payment",
    "triagePriority": "Review \u2013 related keyword, H1 fit uncertain",
    "humanReviewStatus": "pending",
    "humanCategories": [],
    "humanEvidenceStrength": "UNASSIGNED",
    "researcherNotes": "",
    "reviewedAt": null,
    "reviewedBy": null,
    "aiSuggestion": {
      "categories": [
        "Bank account linking problem"
      ],
      "evidenceStrength": "INSUFFICIENT",
      "supportingExcerpt": "Not happening through netbanking",
      "explanation": "Pertains to upstream bank account verification or linking, rather than active SIP mandate debit execution.",
      "researchImplication": "Upstream onboarding friction; does not substantiate H1 involuntary discontinuation after SIP creation."
    }
  },
  {
    "id": "IND-14920",
    "originalRow": 14920,
    "rating": 4,
    "reviewText": "There is no option to start sip without autopay. There should be an option to manually pay sip amount without using autopay. Edit: we can use the indmony website to setup autopay with cards ~ Customer service",
    "reviewDate": "2024-10-07 19:53",
    "foundHelpful": 1,
    "sourcePlatform": "Google Play Store",
    "sourceProvenance": "Imported INDMoney app review dataset",
    "sourceReference": "INDMoney Review Row #14920",
    "preliminaryKeywordSignals": "Bank mandate / NACH / e-mandate / AutoPay; SIP instalment / SIP debit / SIP payment",
    "triagePriority": "High \u2013 explicit SIP + mandate/AutoPay language",
    "humanReviewStatus": "pending",
    "humanCategories": [],
    "humanEvidenceStrength": "UNASSIGNED",
    "researcherNotes": "",
    "reviewedAt": null,
    "reviewedBy": null,
    "aiSuggestion": {
      "categories": [
        "NACH / AutoPay issue",
        "SIP setup issue"
      ],
      "evidenceStrength": "INDIRECT",
      "supportingExcerpt": "There is no option to start sip without autopay",
      "explanation": "Mentions bank mandate or AutoPay friction, but does not explicitly confirm a mutual fund SIP was affected.",
      "researchImplication": "Supports broader friction around automated recurring debits, but requires confirmation of SIP context."
    }
  },
  {
    "id": "IND-15217",
    "originalRow": 15217,
    "rating": 1,
    "reviewText": "Keya yaar mere refar and earn ka pement abhi tak bhi Nehi Aya new bank account add kareke bad bhi \ud83d\ude14",
    "reviewDate": "2024-10-01 13:25",
    "foundHelpful": 0,
    "sourcePlatform": "Google Play Store",
    "sourceProvenance": "Imported INDMoney app review dataset",
    "sourceReference": "INDMoney Review Row #15217",
    "preliminaryKeywordSignals": "Bank account linking for investment",
    "triagePriority": "Review \u2013 related keyword, H1 fit uncertain",
    "humanReviewStatus": "pending",
    "humanCategories": [],
    "humanEvidenceStrength": "UNASSIGNED",
    "researcherNotes": "",
    "reviewedAt": null,
    "reviewedBy": null,
    "aiSuggestion": {
      "categories": [
        "Bank account linking problem"
      ],
      "evidenceStrength": "INSUFFICIENT",
      "supportingExcerpt": "Keya yaar mere refar and earn ka pement abhi tak bhi Nehi Aya new bank account add kareke bad bhi \ud83d\ude14",
      "explanation": "Pertains to upstream bank account verification or linking, rather than active SIP mandate debit execution.",
      "researchImplication": "Upstream onboarding friction; does not substantiate H1 involuntary discontinuation after SIP creation."
    }
  },
  {
    "id": "IND-15499",
    "originalRow": 15499,
    "rating": 1,
    "reviewText": "I had a terrible experience with this app. It doesn't allow you to change the bank mandate for ongoing SIPs, and customer care was unhelpful, failing to clarify this before I deleted my existing mandate. Reaching customer support directly by phone is impossible. When trying to create a new mandate for a different SIP, I'm only given the option to use UPI, and raising a ticket for assistance is extremely time-consuming. I will never use this app again.",
    "reviewDate": "2024-09-25 22:26",
    "foundHelpful": 4,
    "sourcePlatform": "Google Play Store",
    "sourceProvenance": "Imported INDMoney app review dataset",
    "sourceReference": "INDMoney Review Row #15499",
    "preliminaryKeywordSignals": "Bank mandate / NACH / e-mandate / AutoPay",
    "triagePriority": "High \u2013 explicit SIP + mandate/AutoPay language",
    "humanReviewStatus": "pending",
    "humanCategories": [],
    "humanEvidenceStrength": "UNASSIGNED",
    "researcherNotes": "",
    "reviewedAt": null,
    "reviewedBy": null,
    "aiSuggestion": {
      "categories": [
        "SIP instalment debit failure",
        "Bank mandate failure",
        "SIP setup issue"
      ],
      "evidenceStrength": "DIRECT",
      "supportingExcerpt": "It doesn't allow you to change the bank mandate for ongoing SIPs, and customer care was unhelpful, failing to clarify this before I deleted my existing mandate",
      "explanation": "Review explicitly describes a mutual fund SIP instalment or mandate debit failure.",
      "researchImplication": "Directly substantiates H1: user experienced unexpected payment failure during active SIP cycle."
    }
  },
  {
    "id": "IND-15873",
    "originalRow": 15873,
    "rating": 5,
    "reviewText": "What a beautiful app! I found this app after days of looking, and it has far above my expectations. It stands out because of the great support and the capability to track every transaction. Even if it turns into a premium software, the excellent trend lines make it well worth the download. The app is great overall, albeit I haven't used its investment advise. Including the ability to manually update balances or link bank accounts is one proposal. The benefits far exceed the downsides.",
    "reviewDate": "2024-09-18 17:48",
    "foundHelpful": 13,
    "sourcePlatform": "Google Play Store",
    "sourceProvenance": "Imported INDMoney app review dataset",
    "sourceReference": "INDMoney Review Row #15873",
    "preliminaryKeywordSignals": "Bank account linking for investment",
    "triagePriority": "Review \u2013 related keyword, H1 fit uncertain",
    "humanReviewStatus": "pending",
    "humanCategories": [],
    "humanEvidenceStrength": "UNASSIGNED",
    "researcherNotes": "",
    "reviewedAt": null,
    "reviewedBy": null,
    "aiSuggestion": {
      "categories": [
        "Bank account linking problem"
      ],
      "evidenceStrength": "INSUFFICIENT",
      "supportingExcerpt": "Including the ability to manually update balances or link bank accounts is one proposal",
      "explanation": "Pertains to upstream bank account verification or linking, rather than active SIP mandate debit execution.",
      "researchImplication": "Upstream onboarding friction; does not substantiate H1 involuntary discontinuation after SIP creation."
    }
  },
  {
    "id": "IND-16033",
    "originalRow": 16033,
    "rating": 1,
    "reviewText": "Worst app. It claims to be able to track all ur investments on various platforms & also bank accounts. I wasted a lot of time getting all of the accounts linked. The transactions are not updated even after days while one of the accounts got delinked twice, all by itself. Not sure how. I tried linking it again, but with no luck. Buying SIPs is another hassle on this app. The mandate just doesn't get uploaded & I have had to reach out to customer service every single time to get this sorted.",
    "reviewDate": "2024-09-16 02:37",
    "foundHelpful": 439,
    "sourcePlatform": "Google Play Store",
    "sourceProvenance": "Imported INDMoney app review dataset",
    "sourceReference": "INDMoney Review Row #16033",
    "preliminaryKeywordSignals": "Bank mandate / NACH / e-mandate / AutoPay",
    "triagePriority": "Review \u2013 related keyword, H1 fit uncertain",
    "humanReviewStatus": "pending",
    "humanCategories": [],
    "humanEvidenceStrength": "UNASSIGNED",
    "researcherNotes": "",
    "reviewedAt": null,
    "reviewedBy": null,
    "aiSuggestion": {
      "categories": [
        "Bank account linking problem"
      ],
      "evidenceStrength": "INSUFFICIENT",
      "supportingExcerpt": "It claims to be able to track all ur investments on various platforms & also bank accounts",
      "explanation": "Pertains to upstream bank account verification or linking, rather than active SIP mandate debit execution.",
      "researchImplication": "Upstream onboarding friction; does not substantiate H1 involuntary discontinuation after SIP creation."
    }
  },
  {
    "id": "IND-16244",
    "originalRow": 16244,
    "rating": 4,
    "reviewText": "Verry good app if not required to link Bank account i gave it 5 starr",
    "reviewDate": "2024-09-12 11:15",
    "foundHelpful": 0,
    "sourcePlatform": "Google Play Store",
    "sourceProvenance": "Imported INDMoney app review dataset",
    "sourceReference": "INDMoney Review Row #16244",
    "preliminaryKeywordSignals": "Bank account linking for investment",
    "triagePriority": "Review \u2013 related keyword, H1 fit uncertain",
    "humanReviewStatus": "pending",
    "humanCategories": [],
    "humanEvidenceStrength": "UNASSIGNED",
    "researcherNotes": "",
    "reviewedAt": null,
    "reviewedBy": null,
    "aiSuggestion": {
      "categories": [
        "Bank account linking problem"
      ],
      "evidenceStrength": "INSUFFICIENT",
      "supportingExcerpt": "Verry good app if not required to link Bank account i gave it 5 starr",
      "explanation": "Pertains to upstream bank account verification or linking, rather than active SIP mandate debit execution.",
      "researchImplication": "Upstream onboarding friction; does not substantiate H1 involuntary discontinuation after SIP creation."
    }
  },
  {
    "id": "IND-16893",
    "originalRow": 16893,
    "rating": 3,
    "reviewText": "i can set mandate through phonpe only , not opening/showing bank specific app to proceed.",
    "reviewDate": "2024-09-01 03:04",
    "foundHelpful": 0,
    "sourcePlatform": "Google Play Store",
    "sourceProvenance": "Imported INDMoney app review dataset",
    "sourceReference": "INDMoney Review Row #16893",
    "preliminaryKeywordSignals": "Bank mandate / NACH / e-mandate / AutoPay",
    "triagePriority": "Review \u2013 related keyword, H1 fit uncertain",
    "humanReviewStatus": "pending",
    "humanCategories": [],
    "humanEvidenceStrength": "UNASSIGNED",
    "researcherNotes": "",
    "reviewedAt": null,
    "reviewedBy": null,
    "aiSuggestion": {
      "categories": [
        "Unrelated feedback"
      ],
      "evidenceStrength": "INSUFFICIENT",
      "supportingExcerpt": "i can set mandate through phonpe only , not opening/showing bank specific app to proceed",
      "explanation": "Review describes general app service, withdrawal, or unrelated payment issue without establishing SIP mandate failure.",
      "researchImplication": "Does not support H1 hypothesis."
    }
  },
  {
    "id": "IND-17112",
    "originalRow": 17112,
    "rating": 1,
    "reviewText": "Absolutely pathetic customer service. I pre applied for an IPO through the app, it's been over 48 hours and I haven't received mandate on my UPI app to approve. On checking with customer care, they had absolutely zero clue on what to do, basically telling me thaty application has not been processed and I can apply through other brokers.",
    "reviewDate": "2024-08-28 12:31",
    "foundHelpful": 3,
    "sourcePlatform": "Google Play Store",
    "sourceProvenance": "Imported INDMoney app review dataset",
    "sourceReference": "INDMoney Review Row #17112",
    "preliminaryKeywordSignals": "Bank mandate / NACH / e-mandate / AutoPay",
    "triagePriority": "Review \u2013 related keyword, H1 fit uncertain",
    "humanReviewStatus": "pending",
    "humanCategories": [],
    "humanEvidenceStrength": "UNASSIGNED",
    "researcherNotes": "",
    "reviewedAt": null,
    "reviewedBy": null,
    "aiSuggestion": {
      "categories": [
        "General payment issue"
      ],
      "evidenceStrength": "INSUFFICIENT",
      "supportingExcerpt": "I pre applied for an IPO through the app, it's been over 48 hours and I haven't received mandate on my UPI app to approve",
      "explanation": "Review describes general app service, withdrawal, or unrelated payment issue without establishing SIP mandate failure.",
      "researchImplication": "Does not support H1 hypothesis."
    }
  },
  {
    "id": "IND-19228",
    "originalRow": 19228,
    "rating": 1,
    "reviewText": "Worst credit card payment experience ever. Funds blocked for a day. No instant refunds for failed payments.",
    "reviewDate": "2024-07-18 14:01",
    "foundHelpful": 2,
    "sourcePlatform": "Google Play Store",
    "sourceProvenance": "Imported INDMoney app review dataset",
    "sourceReference": "INDMoney Review Row #19228",
    "preliminaryKeywordSignals": "Payment failure / pending payment",
    "triagePriority": "Review \u2013 related keyword, H1 fit uncertain",
    "humanReviewStatus": "pending",
    "humanCategories": [],
    "humanEvidenceStrength": "UNASSIGNED",
    "researcherNotes": "",
    "reviewedAt": null,
    "reviewedBy": null,
    "aiSuggestion": {
      "categories": [
        "General payment issue"
      ],
      "evidenceStrength": "INSUFFICIENT",
      "supportingExcerpt": "No instant refunds for failed payments",
      "explanation": "Review describes general app service, withdrawal, or unrelated payment issue without establishing SIP mandate failure.",
      "researchImplication": "Does not support H1 hypothesis."
    }
  },
  {
    "id": "IND-19286",
    "originalRow": 19286,
    "rating": 5,
    "reviewText": "Arunachal Pradesh",
    "reviewDate": "2024-07-17 07:52",
    "foundHelpful": 0,
    "sourcePlatform": "Google Play Store",
    "sourceProvenance": "Imported INDMoney app review dataset",
    "sourceReference": "INDMoney Review Row #19286",
    "preliminaryKeywordSignals": "Bank mandate / NACH / e-mandate / AutoPay",
    "triagePriority": "Review \u2013 related keyword, H1 fit uncertain",
    "humanReviewStatus": "pending",
    "humanCategories": [],
    "humanEvidenceStrength": "UNASSIGNED",
    "researcherNotes": "",
    "reviewedAt": null,
    "reviewedBy": null,
    "aiSuggestion": {
      "categories": [
        "NACH / AutoPay issue"
      ],
      "evidenceStrength": "INDIRECT",
      "supportingExcerpt": "Arunachal Pradesh",
      "explanation": "Mentions bank mandate or AutoPay friction, but does not explicitly confirm a mutual fund SIP was affected.",
      "researchImplication": "Supports broader friction around automated recurring debits, but requires confirmation of SIP context."
    }
  },
  {
    "id": "IND-19456",
    "originalRow": 19456,
    "rating": 1,
    "reviewText": "Interface is good but I rate it one star all because it's kinda racist. Even though I am in India to be specific Arunachal Pradesh but still it's showing out of country while I was trying for video verification. Is North East not part of India why does it have to show out of country.",
    "reviewDate": "2024-07-13 19:04",
    "foundHelpful": 5,
    "sourcePlatform": "Google Play Store",
    "sourceProvenance": "Imported INDMoney app review dataset",
    "sourceReference": "INDMoney Review Row #19456",
    "preliminaryKeywordSignals": "Bank mandate / NACH / e-mandate / AutoPay",
    "triagePriority": "Review \u2013 related keyword, H1 fit uncertain",
    "humanReviewStatus": "pending",
    "humanCategories": [],
    "humanEvidenceStrength": "UNASSIGNED",
    "researcherNotes": "",
    "reviewedAt": null,
    "reviewedBy": null,
    "aiSuggestion": {
      "categories": [
        "NACH / AutoPay issue"
      ],
      "evidenceStrength": "INDIRECT",
      "supportingExcerpt": "Even though I am in India to be specific Arunachal Pradesh but still it's showing out of country while I was trying for video verification",
      "explanation": "Mentions bank mandate or AutoPay friction, but does not explicitly confirm a mutual fund SIP was affected.",
      "researchImplication": "Supports broader friction around automated recurring debits, but requires confirmation of SIP context."
    }
  },
  {
    "id": "IND-19615",
    "originalRow": 19615,
    "rating": 1,
    "reviewText": "I am new to this and deposited 10K from my axis bank account to US stock wallet on 27/06/2024 but the debited amount still not reflected in wallet neither credited back to bank. Ticket raised, many times replied to the mail they sent to me, still not done on 09/07/2024. Is this a scam app or genuinely sebi registered?!",
    "reviewDate": "2024-07-09 22:54",
    "foundHelpful": 0,
    "sourcePlatform": "Google Play Store",
    "sourceProvenance": "Imported INDMoney app review dataset",
    "sourceReference": "INDMoney Review Row #19615",
    "preliminaryKeywordSignals": "Bank account linking for investment",
    "triagePriority": "Review \u2013 related keyword, H1 fit uncertain",
    "humanReviewStatus": "pending",
    "humanCategories": [],
    "humanEvidenceStrength": "UNASSIGNED",
    "researcherNotes": "",
    "reviewedAt": null,
    "reviewedBy": null,
    "aiSuggestion": {
      "categories": [
        "Bank account linking problem"
      ],
      "evidenceStrength": "INSUFFICIENT",
      "supportingExcerpt": "I am new to this and deposited 10K from my axis bank account to US stock wallet on 27/06/2024 but the debited amount still not reflected in wallet neither credited back to bank",
      "explanation": "Pertains to upstream bank account verification or linking, rather than active SIP mandate debit execution.",
      "researchImplication": "Upstream onboarding friction; does not substantiate H1 involuntary discontinuation after SIP creation."
    }
  },
  {
    "id": "IND-19705",
    "originalRow": 19705,
    "rating": 1,
    "reviewText": "Even after \"pausing\" the SIP, money got debited. INDMoney should spend some time on user experience comparing to UI",
    "reviewDate": "2024-07-08 08:56",
    "foundHelpful": 1,
    "sourcePlatform": "Google Play Store",
    "sourceProvenance": "Imported INDMoney app review dataset",
    "sourceReference": "INDMoney Review Row #19705",
    "preliminaryKeywordSignals": "SIP instalment / SIP debit / SIP payment",
    "triagePriority": "High \u2013 explicit SIP + mandate/AutoPay language",
    "humanReviewStatus": "pending",
    "humanCategories": [],
    "humanEvidenceStrength": "UNASSIGNED",
    "researcherNotes": "",
    "reviewedAt": null,
    "reviewedBy": null,
    "aiSuggestion": {
      "categories": [
        "SIP instalment debit failure"
      ],
      "evidenceStrength": "DIRECT",
      "supportingExcerpt": "Even after \"pausing\" the SIP, money got debited",
      "explanation": "Review explicitly describes a mutual fund SIP instalment or mandate debit failure.",
      "researchImplication": "Directly substantiates H1: user experienced unexpected payment failure during active SIP cycle."
    }
  },
  {
    "id": "IND-21131",
    "originalRow": 21131,
    "rating": 1,
    "reviewText": "the app has all the features but idk why i had a worst experience i made so much of profit but i didn't receive it always payment issue or it get's failed and too much of brokerage if you made 100 they will take 40 over all experience was not so good",
    "reviewDate": "2024-06-01 15:18",
    "foundHelpful": 0,
    "sourcePlatform": "Google Play Store",
    "sourceProvenance": "Imported INDMoney app review dataset",
    "sourceReference": "INDMoney Review Row #21131",
    "preliminaryKeywordSignals": "Payment failure / pending payment",
    "triagePriority": "Review \u2013 related keyword, H1 fit uncertain",
    "humanReviewStatus": "pending",
    "humanCategories": [],
    "humanEvidenceStrength": "UNASSIGNED",
    "researcherNotes": "",
    "reviewedAt": null,
    "reviewedBy": null,
    "aiSuggestion": {
      "categories": [
        "General payment issue"
      ],
      "evidenceStrength": "INSUFFICIENT",
      "supportingExcerpt": "the app has all the features but idk why i had a worst experience i made so much of profit but i didn't receive it always payment issue or it get's failed and too much of brokerage if you made 100 they will take 40 over all experience was not so good",
      "explanation": "Review describes general app service, withdrawal, or unrelated payment issue without establishing SIP mandate failure.",
      "researchImplication": "Does not support H1 hypothesis."
    }
  },
  {
    "id": "IND-22037",
    "originalRow": 22037,
    "rating": 5,
    "reviewText": "My bank account linking problem has been resolved after raising the ticket and customer care called me to discuss the issue with me after 4 days and then resolved, Good Support",
    "reviewDate": "2024-05-01 17:21",
    "foundHelpful": 0,
    "sourcePlatform": "Google Play Store",
    "sourceProvenance": "Imported INDMoney app review dataset",
    "sourceReference": "INDMoney Review Row #22037",
    "preliminaryKeywordSignals": "Bank account linking for investment",
    "triagePriority": "Review \u2013 related keyword, H1 fit uncertain",
    "humanReviewStatus": "pending",
    "humanCategories": [],
    "humanEvidenceStrength": "UNASSIGNED",
    "researcherNotes": "",
    "reviewedAt": null,
    "reviewedBy": null,
    "aiSuggestion": {
      "categories": [
        "Bank account linking problem"
      ],
      "evidenceStrength": "INSUFFICIENT",
      "supportingExcerpt": "My bank account linking problem has been resolved after raising the ticket and customer care called me to discuss the issue with me after 4 days and then resolved, Good Support",
      "explanation": "Pertains to upstream bank account verification or linking, rather than active SIP mandate debit execution.",
      "researchImplication": "Upstream onboarding friction; does not substantiate H1 involuntary discontinuation after SIP creation."
    }
  },
  {
    "id": "IND-22094",
    "originalRow": 22094,
    "rating": 1,
    "reviewText": "Paid towards my ICICI credit Card 10 days in advance, the amount of 500 did not get credited, and I got a payment miss and 500 fine. Added to my credit Card. I raised this IND Money they took 20 day's to only refund my money now after a impact on CIBIL they are not willing to do anything about it and mention that due to vendor error payment failed. I guess the company has to understand in digital world they cannot say their payment failed by sacrificing someone's CIBIL which is really important",
    "reviewDate": "2024-04-29 12:26",
    "foundHelpful": 7,
    "sourcePlatform": "Google Play Store",
    "sourceProvenance": "Imported INDMoney app review dataset",
    "sourceReference": "INDMoney Review Row #22094",
    "preliminaryKeywordSignals": "Payment failure / pending payment",
    "triagePriority": "Review \u2013 related keyword, H1 fit uncertain",
    "humanReviewStatus": "pending",
    "humanCategories": [],
    "humanEvidenceStrength": "UNASSIGNED",
    "researcherNotes": "",
    "reviewedAt": null,
    "reviewedBy": null,
    "aiSuggestion": {
      "categories": [
        "General payment issue"
      ],
      "evidenceStrength": "INSUFFICIENT",
      "supportingExcerpt": "I raised this IND Money they took 20 day's to only refund my money now after a impact on CIBIL they are not willing to do anything about it and mention that due to vendor error payment failed",
      "explanation": "Review describes general app service, withdrawal, or unrelated payment issue without establishing SIP mandate failure.",
      "researchImplication": "Does not support H1 hypothesis."
    }
  },
  {
    "id": "IND-22485",
    "originalRow": 22485,
    "rating": 1,
    "reviewText": "Not able to add the money in the federal account.Its been more than a month now,ISSUE IS NOT YET RESOLVED and same auto generated reply from customer care is getting that we are working on the issue. I think people should think regarding this app before installing as the payment is getting failed for many many instances.",
    "reviewDate": "2024-04-12 21:42",
    "foundHelpful": 4,
    "sourcePlatform": "Google Play Store",
    "sourceProvenance": "Imported INDMoney app review dataset",
    "sourceReference": "INDMoney Review Row #22485",
    "preliminaryKeywordSignals": "Payment failure / pending payment",
    "triagePriority": "Review \u2013 related keyword, H1 fit uncertain",
    "humanReviewStatus": "pending",
    "humanCategories": [],
    "humanEvidenceStrength": "UNASSIGNED",
    "researcherNotes": "",
    "reviewedAt": null,
    "reviewedBy": null,
    "aiSuggestion": {
      "categories": [
        "General payment issue"
      ],
      "evidenceStrength": "INSUFFICIENT",
      "supportingExcerpt": "I think people should think regarding this app before installing as the payment is getting failed for many many instances",
      "explanation": "Review describes general app service, withdrawal, or unrelated payment issue without establishing SIP mandate failure.",
      "researchImplication": "Does not support H1 hypothesis."
    }
  },
  {
    "id": "IND-22734",
    "originalRow": 22734,
    "rating": 1,
    "reviewText": "Got loan from instacash on their app. Now they levy bounce charges on emi when I already have auto pay enabled and no option to directly pay before due date UNTIL it's already bounced. Which is their fault not mine. And no direct way to contact support. Horrible service.",
    "reviewDate": "2024-04-04 22:42",
    "foundHelpful": 0,
    "sourcePlatform": "Google Play Store",
    "sourceProvenance": "Imported INDMoney app review dataset",
    "sourceReference": "INDMoney Review Row #22734",
    "preliminaryKeywordSignals": "Bank mandate / NACH / e-mandate / AutoPay",
    "triagePriority": "Review \u2013 related keyword, H1 fit uncertain",
    "humanReviewStatus": "pending",
    "humanCategories": [],
    "humanEvidenceStrength": "UNASSIGNED",
    "researcherNotes": "",
    "reviewedAt": null,
    "reviewedBy": null,
    "aiSuggestion": {
      "categories": [
        "NACH / AutoPay issue"
      ],
      "evidenceStrength": "INDIRECT",
      "supportingExcerpt": "Now they levy bounce charges on emi when I already have auto pay enabled and no option to directly pay before due date UNTIL it's already bounced",
      "explanation": "Mentions bank mandate or AutoPay friction, but does not explicitly confirm a mutual fund SIP was affected.",
      "researchImplication": "Supports broader friction around automated recurring debits, but requires confirmation of SIP context."
    }
  },
  {
    "id": "IND-22784",
    "originalRow": 22784,
    "rating": 3,
    "reviewText": "Why I can't track my central bank account, the app is continuously saying you don't have your bank account linked to this number , even if I linked to my phone no ,",
    "reviewDate": "2024-04-03 19:36",
    "foundHelpful": 0,
    "sourcePlatform": "Google Play Store",
    "sourceProvenance": "Imported INDMoney app review dataset",
    "sourceReference": "INDMoney Review Row #22784",
    "preliminaryKeywordSignals": "Bank account linking for investment",
    "triagePriority": "Review \u2013 related keyword, H1 fit uncertain",
    "humanReviewStatus": "pending",
    "humanCategories": [],
    "humanEvidenceStrength": "UNASSIGNED",
    "researcherNotes": "",
    "reviewedAt": null,
    "reviewedBy": null,
    "aiSuggestion": {
      "categories": [
        "Bank account linking problem"
      ],
      "evidenceStrength": "INSUFFICIENT",
      "supportingExcerpt": "Why I can't track my central bank account, the app is continuously saying you don't have your bank account linked to this number , even if I linked to my phone no ,",
      "explanation": "Pertains to upstream bank account verification or linking, rather than active SIP mandate debit execution.",
      "researchImplication": "Upstream onboarding friction; does not substantiate H1 involuntary discontinuation after SIP creation."
    }
  },
  {
    "id": "IND-23664",
    "originalRow": 23664,
    "rating": 1,
    "reviewText": "They are not trust worthy anymore, I cancelled my mutual funds auto mandate well in advance still the mandate hit my account. Cheaters",
    "reviewDate": "2024-03-12 17:45",
    "foundHelpful": 0,
    "sourcePlatform": "Google Play Store",
    "sourceProvenance": "Imported INDMoney app review dataset",
    "sourceReference": "INDMoney Review Row #23664",
    "preliminaryKeywordSignals": "Bank mandate / NACH / e-mandate / AutoPay",
    "triagePriority": "Review \u2013 related keyword, H1 fit uncertain",
    "humanReviewStatus": "pending",
    "humanCategories": [],
    "humanEvidenceStrength": "UNASSIGNED",
    "researcherNotes": "",
    "reviewedAt": null,
    "reviewedBy": null,
    "aiSuggestion": {
      "categories": [
        "Bank mandate failure"
      ],
      "evidenceStrength": "INDIRECT",
      "supportingExcerpt": "They are not trust worthy anymore, I cancelled my mutual funds auto mandate well in advance still the mandate hit my account",
      "explanation": "Mentions bank mandate or AutoPay friction, but does not explicitly confirm a mutual fund SIP was affected.",
      "researchImplication": "Supports broader friction around automated recurring debits, but requires confirmation of SIP context."
    }
  },
  {
    "id": "IND-24157",
    "originalRow": 24157,
    "rating": 1,
    "reviewText": "Do not use this app if you are interested in IPO, it has an extremely pathetic customer service. I ordered 1 unit of IPO on 23rd Feb, informed the INDmoney team today morning on 26th Feb 2024 to please send mandate, however they failed to send mandate and I lost the opportunity to invest. There was a Ticket ID 1683469 raised for the same. Thank you for making me loose this opportunity and not sending sending mandate or reverting on time. \ud83d\ude4f Regards, Very Very unhappy investor.",
    "reviewDate": "2024-02-26 19:09",
    "foundHelpful": 0,
    "sourcePlatform": "Google Play Store",
    "sourceProvenance": "Imported INDMoney app review dataset",
    "sourceReference": "INDMoney Review Row #24157",
    "preliminaryKeywordSignals": "Bank mandate / NACH / e-mandate / AutoPay",
    "triagePriority": "Review \u2013 related keyword, H1 fit uncertain",
    "humanReviewStatus": "pending",
    "humanCategories": [],
    "humanEvidenceStrength": "UNASSIGNED",
    "researcherNotes": "",
    "reviewedAt": null,
    "reviewedBy": null,
    "aiSuggestion": {
      "categories": [
        "Bank mandate failure"
      ],
      "evidenceStrength": "INDIRECT",
      "supportingExcerpt": "I ordered 1 unit of IPO on 23rd Feb, informed the INDmoney team today morning on 26th Feb 2024 to please send mandate, however they failed to send mandate and I lost the opportunity to invest",
      "explanation": "Mentions bank mandate or AutoPay friction, but does not explicitly confirm a mutual fund SIP was affected.",
      "researchImplication": "Supports broader friction around automated recurring debits, but requires confirmation of SIP context."
    }
  },
  {
    "id": "IND-24719",
    "originalRow": 24719,
    "rating": 2,
    "reviewText": "Based on a reco I decided to use this app. Here are some issues, it cannot access multiple demat accounts, the help desk blames NSDL. I am not sure of that. You cannot set up HDFC life insurance account to get latest updates. The app cannot add bank accounts to Citibank or SVC. So a complete picture never emerges. Constantly wants you to open another demat with them. So I simply would avoid using it.",
    "reviewDate": "2024-02-09 08:13",
    "foundHelpful": 6,
    "sourcePlatform": "Google Play Store",
    "sourceProvenance": "Imported INDMoney app review dataset",
    "sourceReference": "INDMoney Review Row #24719",
    "preliminaryKeywordSignals": "Bank account linking for investment",
    "triagePriority": "Review \u2013 related keyword, H1 fit uncertain",
    "humanReviewStatus": "pending",
    "humanCategories": [],
    "humanEvidenceStrength": "UNASSIGNED",
    "researcherNotes": "",
    "reviewedAt": null,
    "reviewedBy": null,
    "aiSuggestion": {
      "categories": [
        "Bank account linking problem"
      ],
      "evidenceStrength": "INSUFFICIENT",
      "supportingExcerpt": "The app cannot add bank accounts to Citibank or SVC",
      "explanation": "Pertains to upstream bank account verification or linking, rather than active SIP mandate debit execution.",
      "researchImplication": "Upstream onboarding friction; does not substantiate H1 involuntary discontinuation after SIP creation."
    }
  },
  {
    "id": "IND-24763",
    "originalRow": 24763,
    "rating": 4,
    "reviewText": "Mutual fund 1st Sip dates are given way late..and thus d amt deduction & NAV allocation date is late.",
    "reviewDate": "2024-02-07 23:04",
    "foundHelpful": 0,
    "sourcePlatform": "Google Play Store",
    "sourceProvenance": "Imported INDMoney app review dataset",
    "sourceReference": "INDMoney Review Row #24763",
    "preliminaryKeywordSignals": "SIP instalment / SIP debit / SIP payment",
    "triagePriority": "Review \u2013 related keyword, H1 fit uncertain",
    "humanReviewStatus": "pending",
    "humanCategories": [],
    "humanEvidenceStrength": "UNASSIGNED",
    "researcherNotes": "",
    "reviewedAt": null,
    "reviewedBy": null,
    "aiSuggestion": {
      "categories": [
        "SIP instalment debit failure"
      ],
      "evidenceStrength": "DIRECT",
      "supportingExcerpt": "Mutual fund 1st Sip dates are given way late",
      "explanation": "Review explicitly describes a mutual fund SIP instalment or mandate debit failure.",
      "researchImplication": "Directly substantiates H1: user experienced unexpected payment failure during active SIP cycle."
    }
  },
  {
    "id": "IND-24954",
    "originalRow": 24954,
    "rating": 4,
    "reviewText": "How to add funds in fedral bank account in this app?",
    "reviewDate": "2024-02-03 00:28",
    "foundHelpful": 0,
    "sourcePlatform": "Google Play Store",
    "sourceProvenance": "Imported INDMoney app review dataset",
    "sourceReference": "INDMoney Review Row #24954",
    "preliminaryKeywordSignals": "Bank account linking for investment",
    "triagePriority": "Review \u2013 related keyword, H1 fit uncertain",
    "humanReviewStatus": "pending",
    "humanCategories": [],
    "humanEvidenceStrength": "UNASSIGNED",
    "researcherNotes": "",
    "reviewedAt": null,
    "reviewedBy": null,
    "aiSuggestion": {
      "categories": [
        "Bank account linking problem"
      ],
      "evidenceStrength": "INSUFFICIENT",
      "supportingExcerpt": "How to add funds in fedral bank account in this app",
      "explanation": "Pertains to upstream bank account verification or linking, rather than active SIP mandate debit execution.",
      "researchImplication": "Upstream onboarding friction; does not substantiate H1 involuntary discontinuation after SIP creation."
    }
  },
  {
    "id": "IND-25492",
    "originalRow": 25492,
    "rating": 1,
    "reviewText": "Don't go for this app. Its worst app. Will ask for account verification, after giving all kyc information. Account verification includes the payment. But always fails with technical issues. Less support also getting even after we report issue",
    "reviewDate": "2024-01-16 18:55",
    "foundHelpful": 7,
    "sourcePlatform": "Google Play Store",
    "sourceProvenance": "Imported INDMoney app review dataset",
    "sourceReference": "INDMoney Review Row #25492",
    "preliminaryKeywordSignals": "Payment failure / pending payment",
    "triagePriority": "Review \u2013 related keyword, H1 fit uncertain",
    "humanReviewStatus": "pending",
    "humanCategories": [],
    "humanEvidenceStrength": "UNASSIGNED",
    "researcherNotes": "",
    "reviewedAt": null,
    "reviewedBy": null,
    "aiSuggestion": {
      "categories": [
        "General payment issue"
      ],
      "evidenceStrength": "INSUFFICIENT",
      "supportingExcerpt": "But always fails with technical issues",
      "explanation": "Review describes general app service, withdrawal, or unrelated payment issue without establishing SIP mandate failure.",
      "researchImplication": "Does not support H1 hypothesis."
    }
  },
  {
    "id": "IND-25733",
    "originalRow": 25733,
    "rating": 1,
    "reviewText": "MY MUTUAL FUND SIP failing repeatedly,though there is money in my account....have raised TICKETS many of the times...very poor customer care service...not able to solve BASIC PROBLEMS....",
    "reviewDate": "2024-01-09 17:53",
    "foundHelpful": 0,
    "sourcePlatform": "Google Play Store",
    "sourceProvenance": "Imported INDMoney app review dataset",
    "sourceReference": "INDMoney Review Row #25733",
    "preliminaryKeywordSignals": "SIP instalment / SIP debit / SIP payment",
    "triagePriority": "High \u2013 explicit SIP + mandate/AutoPay language",
    "humanReviewStatus": "pending",
    "humanCategories": [],
    "humanEvidenceStrength": "UNASSIGNED",
    "researcherNotes": "",
    "reviewedAt": null,
    "reviewedBy": null,
    "aiSuggestion": {
      "categories": [
        "SIP instalment debit failure"
      ],
      "evidenceStrength": "DIRECT",
      "supportingExcerpt": "MY MUTUAL FUND SIP failing repeatedly,though there is money in my account",
      "explanation": "Review explicitly describes a mutual fund SIP instalment or mandate debit failure.",
      "researchImplication": "Directly substantiates H1: user experienced unexpected payment failure during active SIP cycle."
    }
  },
  {
    "id": "IND-26110",
    "originalRow": 26110,
    "rating": 1,
    "reviewText": "Very worst app. ANY IPO UPI-Mandate MASSAGE RECEIVED AFTER 5 PM \ud83e\udd2c\ud83e\udd2c",
    "reviewDate": "2023-12-26 17:16",
    "foundHelpful": 0,
    "sourcePlatform": "Google Play Store",
    "sourceProvenance": "Imported INDMoney app review dataset",
    "sourceReference": "INDMoney Review Row #26110",
    "preliminaryKeywordSignals": "Bank mandate / NACH / e-mandate / AutoPay",
    "triagePriority": "Review \u2013 related keyword, H1 fit uncertain",
    "humanReviewStatus": "pending",
    "humanCategories": [],
    "humanEvidenceStrength": "UNASSIGNED",
    "researcherNotes": "",
    "reviewedAt": null,
    "reviewedBy": null,
    "aiSuggestion": {
      "categories": [
        "General payment issue"
      ],
      "evidenceStrength": "INSUFFICIENT",
      "supportingExcerpt": "ANY IPO UPI-Mandate MASSAGE RECEIVED AFTER 5 PM \ud83e\udd2c\ud83e\udd2c",
      "explanation": "Review describes general app service, withdrawal, or unrelated payment issue without establishing SIP mandate failure.",
      "researchImplication": "Does not support H1 hypothesis."
    }
  },
  {
    "id": "IND-26271",
    "originalRow": 26271,
    "rating": 5,
    "reviewText": "The best thing is whatsapp reminder of SIPs and also tells about from which bank account it's going to debited really wonderful application to begin and go on with \ud83d\ude09\ud83d\udc4d",
    "reviewDate": "2023-12-19 08:46",
    "foundHelpful": 0,
    "sourcePlatform": "Google Play Store",
    "sourceProvenance": "Imported INDMoney app review dataset",
    "sourceReference": "INDMoney Review Row #26271",
    "preliminaryKeywordSignals": "Bank account linking for investment",
    "triagePriority": "Review \u2013 related keyword, H1 fit uncertain",
    "humanReviewStatus": "pending",
    "humanCategories": [],
    "humanEvidenceStrength": "UNASSIGNED",
    "researcherNotes": "",
    "reviewedAt": null,
    "reviewedBy": null,
    "aiSuggestion": {
      "categories": [
        "SIP instalment debit failure",
        "Bank account linking problem"
      ],
      "evidenceStrength": "DIRECT",
      "supportingExcerpt": "The best thing is whatsapp reminder of SIPs and also tells about from which bank account it's going to debited really wonderful application to begin and go on with \ud83d\ude09\ud83d\udc4d",
      "explanation": "Review explicitly describes a mutual fund SIP instalment or mandate debit failure.",
      "researchImplication": "Directly substantiates H1: user experienced unexpected payment failure during active SIP cycle."
    }
  },
  {
    "id": "IND-26327",
    "originalRow": 26327,
    "rating": 1,
    "reviewText": "Lots of error in this app.very slow . auto payment verification activation error. hopes so u will resolve this issue",
    "reviewDate": "2023-12-16 23:24",
    "foundHelpful": 0,
    "sourcePlatform": "Google Play Store",
    "sourceProvenance": "Imported INDMoney app review dataset",
    "sourceReference": "INDMoney Review Row #26327",
    "preliminaryKeywordSignals": "Bank mandate / NACH / e-mandate / AutoPay",
    "triagePriority": "Review \u2013 related keyword, H1 fit uncertain",
    "humanReviewStatus": "pending",
    "humanCategories": [],
    "humanEvidenceStrength": "UNASSIGNED",
    "researcherNotes": "",
    "reviewedAt": null,
    "reviewedBy": null,
    "aiSuggestion": {
      "categories": [
        "NACH / AutoPay issue"
      ],
      "evidenceStrength": "INDIRECT",
      "supportingExcerpt": "auto payment verification activation error",
      "explanation": "Mentions bank mandate or AutoPay friction, but does not explicitly confirm a mutual fund SIP was affected.",
      "researchImplication": "Supports broader friction around automated recurring debits, but requires confirmation of SIP context."
    }
  },
  {
    "id": "IND-26330",
    "originalRow": 26330,
    "rating": 1,
    "reviewText": "Very bad don't use this app . Auto pay link is not working In this app. Nor they reply on time",
    "reviewDate": "2023-12-16 20:17",
    "foundHelpful": 0,
    "sourcePlatform": "Google Play Store",
    "sourceProvenance": "Imported INDMoney app review dataset",
    "sourceReference": "INDMoney Review Row #26330",
    "preliminaryKeywordSignals": "Bank mandate / NACH / e-mandate / AutoPay",
    "triagePriority": "Review \u2013 related keyword, H1 fit uncertain",
    "humanReviewStatus": "pending",
    "humanCategories": [],
    "humanEvidenceStrength": "UNASSIGNED",
    "researcherNotes": "",
    "reviewedAt": null,
    "reviewedBy": null,
    "aiSuggestion": {
      "categories": [
        "NACH / AutoPay issue"
      ],
      "evidenceStrength": "INDIRECT",
      "supportingExcerpt": "Auto pay link is not working In this app",
      "explanation": "Mentions bank mandate or AutoPay friction, but does not explicitly confirm a mutual fund SIP was affected.",
      "researchImplication": "Supports broader friction around automated recurring debits, but requires confirmation of SIP context."
    }
  },
  {
    "id": "IND-26859",
    "originalRow": 26859,
    "rating": 4,
    "reviewText": "Please just a suggestion: It will be great if IND money can show me that I already have a SIP or One time payment done whenever I search or view any given stock or mutual fund.Else I may end up doing another SIP in same.",
    "reviewDate": "2023-11-26 01:47",
    "foundHelpful": 0,
    "sourcePlatform": "Google Play Store",
    "sourceProvenance": "Imported INDMoney app review dataset",
    "sourceReference": "INDMoney Review Row #26859",
    "preliminaryKeywordSignals": "SIP instalment / SIP debit / SIP payment",
    "triagePriority": "High \u2013 explicit SIP + mandate/AutoPay language",
    "humanReviewStatus": "pending",
    "humanCategories": [],
    "humanEvidenceStrength": "UNASSIGNED",
    "researcherNotes": "",
    "reviewedAt": null,
    "reviewedBy": null,
    "aiSuggestion": {
      "categories": [
        "General payment issue"
      ],
      "evidenceStrength": "INSUFFICIENT",
      "supportingExcerpt": "Please just a suggestion: It will be great if IND money can show me that I already have a SIP or One time payment done whenever I search or view any given stock or mutual fund",
      "explanation": "Review describes general app service, withdrawal, or unrelated payment issue without establishing SIP mandate failure.",
      "researchImplication": "Does not support H1 hypothesis."
    }
  },
  {
    "id": "IND-27496",
    "originalRow": 27496,
    "rating": 2,
    "reviewText": "App is good ...diversify opportunity but I am facing lots of issue in sip...after first and 2nd sip it starts failing alot...almost all my sip has failed even after refreshing my autopay",
    "reviewDate": "2023-10-28 20:45",
    "foundHelpful": 1,
    "sourcePlatform": "Google Play Store",
    "sourceProvenance": "Imported INDMoney app review dataset",
    "sourceReference": "INDMoney Review Row #27496",
    "preliminaryKeywordSignals": "Bank mandate / NACH / e-mandate / AutoPay; SIP instalment / SIP debit / SIP payment",
    "triagePriority": "High \u2013 explicit SIP + mandate/AutoPay language",
    "humanReviewStatus": "pending",
    "humanCategories": [],
    "humanEvidenceStrength": "UNASSIGNED",
    "researcherNotes": "",
    "reviewedAt": null,
    "reviewedBy": null,
    "aiSuggestion": {
      "categories": [
        "SIP instalment debit failure",
        "NACH / AutoPay issue",
        "SIP setup issue"
      ],
      "evidenceStrength": "DIRECT",
      "supportingExcerpt": "diversify opportunity but I am facing lots of issue in sip",
      "explanation": "Review explicitly describes a mutual fund SIP instalment or mandate debit failure.",
      "researchImplication": "Directly substantiates H1: user experienced unexpected payment failure during active SIP cycle."
    }
  },
  {
    "id": "IND-28184",
    "originalRow": 28184,
    "rating": 3,
    "reviewText": "I can't add bank account with this app how can I clear this issue",
    "reviewDate": "2023-10-01 10:44",
    "foundHelpful": 0,
    "sourcePlatform": "Google Play Store",
    "sourceProvenance": "Imported INDMoney app review dataset",
    "sourceReference": "INDMoney Review Row #28184",
    "preliminaryKeywordSignals": "Bank account linking for investment",
    "triagePriority": "Review \u2013 related keyword, H1 fit uncertain",
    "humanReviewStatus": "pending",
    "humanCategories": [],
    "humanEvidenceStrength": "UNASSIGNED",
    "researcherNotes": "",
    "reviewedAt": null,
    "reviewedBy": null,
    "aiSuggestion": {
      "categories": [
        "Bank account linking problem"
      ],
      "evidenceStrength": "INSUFFICIENT",
      "supportingExcerpt": "I can't add bank account with this app how can I clear this issue",
      "explanation": "Pertains to upstream bank account verification or linking, rather than active SIP mandate debit execution.",
      "researchImplication": "Upstream onboarding friction; does not substantiate H1 involuntary discontinuation after SIP creation."
    }
  },
  {
    "id": "IND-28327",
    "originalRow": 28327,
    "rating": 1,
    "reviewText": "I apply for insta cash withdraw I have completed autopay method too after that it ur money will be credited in ur account with in 24 hr but after todays money still didn't credited I also raise an tickets regarts to that there is no reply till now",
    "reviewDate": "2023-09-26 20:54",
    "foundHelpful": 1,
    "sourcePlatform": "Google Play Store",
    "sourceProvenance": "Imported INDMoney app review dataset",
    "sourceReference": "INDMoney Review Row #28327",
    "preliminaryKeywordSignals": "Bank mandate / NACH / e-mandate / AutoPay",
    "triagePriority": "Review \u2013 related keyword, H1 fit uncertain",
    "humanReviewStatus": "pending",
    "humanCategories": [],
    "humanEvidenceStrength": "UNASSIGNED",
    "researcherNotes": "",
    "reviewedAt": null,
    "reviewedBy": null,
    "aiSuggestion": {
      "categories": [
        "NACH / AutoPay issue",
        "Withdrawal / redemption issue"
      ],
      "evidenceStrength": "INDIRECT",
      "supportingExcerpt": "I apply for insta cash withdraw I have completed autopay method too after that it ur money will be credited in ur account with in 24 hr but after todays money still didn't credited I also raise an tickets regarts to that there is no reply till now",
      "explanation": "Mentions bank mandate or AutoPay friction, but does not explicitly confirm a mutual fund SIP was affected.",
      "researchImplication": "Supports broader friction around automated recurring debits, but requires confirmation of SIP context."
    }
  },
  {
    "id": "IND-29625",
    "originalRow": 29625,
    "rating": 4,
    "reviewText": "Every thing is easy compared to other apps, below are some of my suggestions 1)if it best if we know how much total money we added/draw wallet from bank account to campare with total gain in all investment 2)in gold investment category also best to know how much we total invest vs total gain and also total grams purchased",
    "reviewDate": "2023-08-27 13:14",
    "foundHelpful": 1,
    "sourcePlatform": "Google Play Store",
    "sourceProvenance": "Imported INDMoney app review dataset",
    "sourceReference": "INDMoney Review Row #29625",
    "preliminaryKeywordSignals": "Bank account linking for investment",
    "triagePriority": "Review \u2013 related keyword, H1 fit uncertain",
    "humanReviewStatus": "pending",
    "humanCategories": [],
    "humanEvidenceStrength": "UNASSIGNED",
    "researcherNotes": "",
    "reviewedAt": null,
    "reviewedBy": null,
    "aiSuggestion": {
      "categories": [
        "Bank account linking problem"
      ],
      "evidenceStrength": "INSUFFICIENT",
      "supportingExcerpt": "Every thing is easy compared to other apps, below are some of my suggestions 1)if it best if we know how much total money we added/draw wallet from bank account to campare with total gain in all investment 2)in gold investment category also best to know how much we total invest vs total gain and also total grams purchased",
      "explanation": "Pertains to upstream bank account verification or linking, rather than active SIP mandate debit execution.",
      "researchImplication": "Upstream onboarding friction; does not substantiate H1 involuntary discontinuation after SIP creation."
    }
  },
  {
    "id": "IND-30402",
    "originalRow": 30402,
    "rating": 4,
    "reviewText": "It's a decent app for almost all the things. To gauge over your financials nly limited to you savings account but your investments and liabilities. Only major disadvantag I experience is there are limited banks that can be added. I use Bank of India as a primary bank account but it's not there in the list. So I couldn't get completel idea of my financials. Please add it up ASAP. Can you also mention a timeline by when it will get updated.",
    "reviewDate": "2023-08-10 14:59",
    "foundHelpful": 13,
    "sourcePlatform": "Google Play Store",
    "sourceProvenance": "Imported INDMoney app review dataset",
    "sourceReference": "INDMoney Review Row #30402",
    "preliminaryKeywordSignals": "Bank account linking for investment",
    "triagePriority": "Review \u2013 related keyword, H1 fit uncertain",
    "humanReviewStatus": "pending",
    "humanCategories": [],
    "humanEvidenceStrength": "UNASSIGNED",
    "researcherNotes": "",
    "reviewedAt": null,
    "reviewedBy": null,
    "aiSuggestion": {
      "categories": [
        "Bank account linking problem"
      ],
      "evidenceStrength": "INSUFFICIENT",
      "supportingExcerpt": "Only major disadvantag I experience is there are limited banks that can be added",
      "explanation": "Pertains to upstream bank account verification or linking, rather than active SIP mandate debit execution.",
      "researchImplication": "Upstream onboarding friction; does not substantiate H1 involuntary discontinuation after SIP creation."
    }
  },
  {
    "id": "IND-30516",
    "originalRow": 30516,
    "rating": 3,
    "reviewText": "Application is good to have one platform view of all finances and Ui is also good. However few improvements FD , bonds ,RD are not able to automatically fetch details . Also not all banks are supported for savings bank account to be linked which doesnt allo me to link my banks Additionally Ideally all this details.shouldnhad been fetched through pan card or addhar as giving access to read gmail is very risky",
    "reviewDate": "2023-08-08 09:27",
    "foundHelpful": 2,
    "sourcePlatform": "Google Play Store",
    "sourceProvenance": "Imported INDMoney app review dataset",
    "sourceReference": "INDMoney Review Row #30516",
    "preliminaryKeywordSignals": "Bank account linking for investment",
    "triagePriority": "Review \u2013 related keyword, H1 fit uncertain",
    "humanReviewStatus": "pending",
    "humanCategories": [],
    "humanEvidenceStrength": "UNASSIGNED",
    "researcherNotes": "",
    "reviewedAt": null,
    "reviewedBy": null,
    "aiSuggestion": {
      "categories": [
        "Bank account linking problem"
      ],
      "evidenceStrength": "INSUFFICIENT",
      "supportingExcerpt": "Also not all banks are supported for savings bank account to be linked which doesnt allo me to link my banks Additionally Ideally all this details",
      "explanation": "Pertains to upstream bank account verification or linking, rather than active SIP mandate debit execution.",
      "researchImplication": "Upstream onboarding friction; does not substantiate H1 involuntary discontinuation after SIP creation."
    }
  },
  {
    "id": "IND-30632",
    "originalRow": 30632,
    "rating": 3,
    "reviewText": "Please make more easier for mutual fund auto payment and bank linking 1.It is showing that transaction with my bank will take 30 to 45 days.Whera as I used other app and it's only take 2 days 2. In other app there's no need to sign anything but here I have to print out document and then sign and upload to your app. 3. When I try to upload it is showing uploaded successfully but when I see transaction then it is showing please verify auto-pay when I have already verified 3 to 4 times",
    "reviewDate": "2023-08-05 22:20",
    "foundHelpful": 3,
    "sourcePlatform": "Google Play Store",
    "sourceProvenance": "Imported INDMoney app review dataset",
    "sourceReference": "INDMoney Review Row #30632",
    "preliminaryKeywordSignals": "Bank mandate / NACH / e-mandate / AutoPay",
    "triagePriority": "Review \u2013 related keyword, H1 fit uncertain",
    "humanReviewStatus": "pending",
    "humanCategories": [],
    "humanEvidenceStrength": "UNASSIGNED",
    "researcherNotes": "",
    "reviewedAt": null,
    "reviewedBy": null,
    "aiSuggestion": {
      "categories": [
        "NACH / AutoPay issue",
        "Bank account linking problem"
      ],
      "evidenceStrength": "INDIRECT",
      "supportingExcerpt": "Please make more easier for mutual fund auto payment and bank linking 1",
      "explanation": "Mentions bank mandate or AutoPay friction, but does not explicitly confirm a mutual fund SIP was affected.",
      "researchImplication": "Supports broader friction around automated recurring debits, but requires confirmation of SIP context."
    }
  },
  {
    "id": "IND-31335",
    "originalRow": 31335,
    "rating": 1,
    "reviewText": "Not able to link Bank accounts, add bonds and not able to see my insurance policies. The app has gone through some degradation.",
    "reviewDate": "2023-07-20 20:02",
    "foundHelpful": 3,
    "sourcePlatform": "Google Play Store",
    "sourceProvenance": "Imported INDMoney app review dataset",
    "sourceReference": "INDMoney Review Row #31335",
    "preliminaryKeywordSignals": "Bank account linking for investment",
    "triagePriority": "Review \u2013 related keyword, H1 fit uncertain",
    "humanReviewStatus": "pending",
    "humanCategories": [],
    "humanEvidenceStrength": "UNASSIGNED",
    "researcherNotes": "",
    "reviewedAt": null,
    "reviewedBy": null,
    "aiSuggestion": {
      "categories": [
        "Bank account linking problem"
      ],
      "evidenceStrength": "INSUFFICIENT",
      "supportingExcerpt": "Not able to link Bank accounts, add bonds and not able to see my insurance policies",
      "explanation": "Pertains to upstream bank account verification or linking, rather than active SIP mandate debit execution.",
      "researchImplication": "Upstream onboarding friction; does not substantiate H1 involuntary discontinuation after SIP creation."
    }
  },
  {
    "id": "IND-31375",
    "originalRow": 31375,
    "rating": 4,
    "reviewText": "while setting up the SIP mandate, please provide an option to verify with MPIN as well.",
    "reviewDate": "2023-07-19 23:05",
    "foundHelpful": 0,
    "sourcePlatform": "Google Play Store",
    "sourceProvenance": "Imported INDMoney app review dataset",
    "sourceReference": "INDMoney Review Row #31375",
    "preliminaryKeywordSignals": "Bank mandate / NACH / e-mandate / AutoPay; SIP instalment / SIP debit / SIP payment",
    "triagePriority": "High \u2013 explicit SIP + mandate/AutoPay language",
    "humanReviewStatus": "pending",
    "humanCategories": [],
    "humanEvidenceStrength": "UNASSIGNED",
    "researcherNotes": "",
    "reviewedAt": null,
    "reviewedBy": null,
    "aiSuggestion": {
      "categories": [
        "Unrelated feedback"
      ],
      "evidenceStrength": "INSUFFICIENT",
      "supportingExcerpt": "while setting up the SIP mandate, please provide an option to verify with MPIN as well",
      "explanation": "Review describes general app service, withdrawal, or unrelated payment issue without establishing SIP mandate failure.",
      "researchImplication": "Does not support H1 hypothesis."
    }
  },
  {
    "id": "IND-31462",
    "originalRow": 31462,
    "rating": 3,
    "reviewText": "Sometimes Sip is not deducted on right time and sometimes Sip Fails",
    "reviewDate": "2023-07-18 07:27",
    "foundHelpful": 0,
    "sourcePlatform": "Google Play Store",
    "sourceProvenance": "Imported INDMoney app review dataset",
    "sourceReference": "INDMoney Review Row #31462",
    "preliminaryKeywordSignals": "SIP instalment / SIP debit / SIP payment",
    "triagePriority": "High \u2013 explicit SIP + mandate/AutoPay language",
    "humanReviewStatus": "pending",
    "humanCategories": [],
    "humanEvidenceStrength": "UNASSIGNED",
    "researcherNotes": "",
    "reviewedAt": null,
    "reviewedBy": null,
    "aiSuggestion": {
      "categories": [
        "SIP instalment debit failure"
      ],
      "evidenceStrength": "DIRECT",
      "supportingExcerpt": "Sometimes Sip is not deducted on right time and sometimes Sip Fails",
      "explanation": "Review explicitly describes a mutual fund SIP instalment or mandate debit failure.",
      "researchImplication": "Directly substantiates H1: user experienced unexpected payment failure during active SIP cycle."
    }
  },
  {
    "id": "IND-31862",
    "originalRow": 31862,
    "rating": 5,
    "reviewText": "Hey,I download this app by seeing it rate of audience of I fail to make payment I will be a poor person I am starting with only 2000 RS of Indian",
    "reviewDate": "2023-07-07 21:19",
    "foundHelpful": 0,
    "sourcePlatform": "Google Play Store",
    "sourceProvenance": "Imported INDMoney app review dataset",
    "sourceReference": "INDMoney Review Row #31862",
    "preliminaryKeywordSignals": "Payment failure / pending payment",
    "triagePriority": "Review \u2013 related keyword, H1 fit uncertain",
    "humanReviewStatus": "pending",
    "humanCategories": [],
    "humanEvidenceStrength": "UNASSIGNED",
    "researcherNotes": "",
    "reviewedAt": null,
    "reviewedBy": null,
    "aiSuggestion": {
      "categories": [
        "General payment issue"
      ],
      "evidenceStrength": "INSUFFICIENT",
      "supportingExcerpt": "Hey,I download this app by seeing it rate of audience of I fail to make payment I will be a poor person I am starting with only 2000 RS of Indian",
      "explanation": "Review describes general app service, withdrawal, or unrelated payment issue without establishing SIP mandate failure.",
      "researchImplication": "Does not support H1 hypothesis."
    }
  },
  {
    "id": "IND-32241",
    "originalRow": 32241,
    "rating": 4,
    "reviewText": "I'm unable to create new SIP in USstocks and my previous sip's are not getting auto-debited. What is the issue? Please resolve",
    "reviewDate": "2023-06-27 02:06",
    "foundHelpful": 0,
    "sourcePlatform": "Google Play Store",
    "sourceProvenance": "Imported INDMoney app review dataset",
    "sourceReference": "INDMoney Review Row #32241",
    "preliminaryKeywordSignals": "SIP instalment / SIP debit / SIP payment",
    "triagePriority": "High \u2013 explicit SIP + mandate/AutoPay language",
    "humanReviewStatus": "pending",
    "humanCategories": [],
    "humanEvidenceStrength": "UNASSIGNED",
    "researcherNotes": "",
    "reviewedAt": null,
    "reviewedBy": null,
    "aiSuggestion": {
      "categories": [
        "SIP instalment debit failure",
        "SIP setup issue"
      ],
      "evidenceStrength": "DIRECT",
      "supportingExcerpt": "I'm unable to create new SIP in USstocks and my previous sip's are not getting auto-debited",
      "explanation": "Review explicitly describes a mutual fund SIP instalment or mandate debit failure.",
      "researchImplication": "Directly substantiates H1: user experienced unexpected payment failure during active SIP cycle."
    }
  },
  {
    "id": "IND-32858",
    "originalRow": 32858,
    "rating": 1,
    "reviewText": "This app forcefully want you to open savings bank account with any of the bank they tie up with and not allowing to add money with existing bank accounts linked options",
    "reviewDate": "2023-06-02 11:26",
    "foundHelpful": 1,
    "sourcePlatform": "Google Play Store",
    "sourceProvenance": "Imported INDMoney app review dataset",
    "sourceReference": "INDMoney Review Row #32858",
    "preliminaryKeywordSignals": "Bank account linking for investment",
    "triagePriority": "Review \u2013 related keyword, H1 fit uncertain",
    "humanReviewStatus": "pending",
    "humanCategories": [],
    "humanEvidenceStrength": "UNASSIGNED",
    "researcherNotes": "",
    "reviewedAt": null,
    "reviewedBy": null,
    "aiSuggestion": {
      "categories": [
        "Bank account linking problem"
      ],
      "evidenceStrength": "INSUFFICIENT",
      "supportingExcerpt": "This app forcefully want you to open savings bank account with any of the bank they tie up with and not allowing to add money with existing bank accounts linked options",
      "explanation": "Pertains to upstream bank account verification or linking, rather than active SIP mandate debit execution.",
      "researchImplication": "Upstream onboarding friction; does not substantiate H1 involuntary discontinuation after SIP creation."
    }
  },
  {
    "id": "IND-32957",
    "originalRow": 32957,
    "rating": 1,
    "reviewText": "Waste of time, for demat account opening i done my kyc on 22nd may still now account is not created and it allowed to setup autopay and my Money got debited and no response from IND money team for my calls and mails",
    "reviewDate": "2023-05-29 14:48",
    "foundHelpful": 0,
    "sourcePlatform": "Google Play Store",
    "sourceProvenance": "Imported INDMoney app review dataset",
    "sourceReference": "INDMoney Review Row #32957",
    "preliminaryKeywordSignals": "Bank mandate / NACH / e-mandate / AutoPay",
    "triagePriority": "Review \u2013 related keyword, H1 fit uncertain",
    "humanReviewStatus": "pending",
    "humanCategories": [],
    "humanEvidenceStrength": "UNASSIGNED",
    "researcherNotes": "",
    "reviewedAt": null,
    "reviewedBy": null,
    "aiSuggestion": {
      "categories": [
        "NACH / AutoPay issue"
      ],
      "evidenceStrength": "INDIRECT",
      "supportingExcerpt": "Waste of time, for demat account opening i done my kyc on 22nd may still now account is not created and it allowed to setup autopay and my Money got debited and no response from IND money team for my calls and mails",
      "explanation": "Mentions bank mandate or AutoPay friction, but does not explicitly confirm a mutual fund SIP was affected.",
      "researchImplication": "Supports broader friction around automated recurring debits, but requires confirmation of SIP context."
    }
  },
  {
    "id": "IND-32963",
    "originalRow": 32963,
    "rating": 3,
    "reviewText": "payments are failing repeatedly",
    "reviewDate": "2023-05-29 11:55",
    "foundHelpful": 0,
    "sourcePlatform": "Google Play Store",
    "sourceProvenance": "Imported INDMoney app review dataset",
    "sourceReference": "INDMoney Review Row #32963",
    "preliminaryKeywordSignals": "Payment failure / pending payment",
    "triagePriority": "Review \u2013 related keyword, H1 fit uncertain",
    "humanReviewStatus": "pending",
    "humanCategories": [],
    "humanEvidenceStrength": "UNASSIGNED",
    "researcherNotes": "",
    "reviewedAt": null,
    "reviewedBy": null,
    "aiSuggestion": {
      "categories": [
        "General payment issue"
      ],
      "evidenceStrength": "INSUFFICIENT",
      "supportingExcerpt": "payments are failing repeatedly",
      "explanation": "Review describes general app service, withdrawal, or unrelated payment issue without establishing SIP mandate failure.",
      "researchImplication": "Does not support H1 hypothesis."
    }
  },
  {
    "id": "IND-33178",
    "originalRow": 33178,
    "rating": 1,
    "reviewText": "I started mutual fund SIP 100 rs daily.. but they are deducting 200, 400 hundred daily and I can't find statment for the same.. till date ho much they have deducted... Also I invested in Mini pot.. and it says active but money not getting added from last 3 months.. I was under assumption stocks are getting bought... Again there is no consolidated place to find till which date deduct happened n how much... I will be moving all my investments \ud83d\ude1e",
    "reviewDate": "2023-05-19 12:52",
    "foundHelpful": 0,
    "sourcePlatform": "Google Play Store",
    "sourceProvenance": "Imported INDMoney app review dataset",
    "sourceReference": "INDMoney Review Row #33178",
    "preliminaryKeywordSignals": "SIP instalment / SIP debit / SIP payment",
    "triagePriority": "Review \u2013 related keyword, H1 fit uncertain",
    "humanReviewStatus": "pending",
    "humanCategories": [],
    "humanEvidenceStrength": "UNASSIGNED",
    "researcherNotes": "",
    "reviewedAt": null,
    "reviewedBy": null,
    "aiSuggestion": {
      "categories": [
        "SIP instalment debit failure",
        "SIP setup issue"
      ],
      "evidenceStrength": "DIRECT",
      "supportingExcerpt": "I started mutual fund SIP 100 rs daily",
      "explanation": "Review explicitly describes a mutual fund SIP instalment or mandate debit failure.",
      "researchImplication": "Directly substantiates H1: user experienced unexpected payment failure during active SIP cycle."
    }
  },
  {
    "id": "IND-33671",
    "originalRow": 33671,
    "rating": 5,
    "reviewText": "5 star, Can add company RSU, Able to track bank accounts via sms, Give runtime asset allocation is super, Exact xirr for other members are not showing correct value. Us stock account had earlier very good offer, now not so good. Shows daily gain loss in mf Can see overall net worth Can't link family portfolio without paying Basic is free You can add stocks from India broker but from foregin broker you can't add or track",
    "reviewDate": "2023-04-23 22:43",
    "foundHelpful": 0,
    "sourcePlatform": "Google Play Store",
    "sourceProvenance": "Imported INDMoney app review dataset",
    "sourceReference": "INDMoney Review Row #33671",
    "preliminaryKeywordSignals": "Bank account linking for investment",
    "triagePriority": "Review \u2013 related keyword, H1 fit uncertain",
    "humanReviewStatus": "pending",
    "humanCategories": [],
    "humanEvidenceStrength": "UNASSIGNED",
    "researcherNotes": "",
    "reviewedAt": null,
    "reviewedBy": null,
    "aiSuggestion": {
      "categories": [
        "Bank account linking problem"
      ],
      "evidenceStrength": "INSUFFICIENT",
      "supportingExcerpt": "5 star, Can add company RSU, Able to track bank accounts via sms, Give runtime asset allocation is super, Exact xirr for other members are not showing correct value",
      "explanation": "Pertains to upstream bank account verification or linking, rather than active SIP mandate debit execution.",
      "researchImplication": "Upstream onboarding friction; does not substantiate H1 involuntary discontinuation after SIP creation."
    }
  },
  {
    "id": "IND-33762",
    "originalRow": 33762,
    "rating": 5,
    "reviewText": "The app is interface and though not quick or easy to find but able to resolve issues within 2 days once we escalate. They didn't remind us if any SIPs skipped, being free app I think this has to bear or keep checking every month whether SIP deducted or not. Not a good UI, no easy way to see scheduled sips otherthan going options, ok to manage nothing exceptional. Edit: you never send if any sip skipped due to your app technical issues, one has to open and see the status or check bank account.",
    "reviewDate": "2023-04-18 11:24",
    "foundHelpful": 19,
    "sourcePlatform": "Google Play Store",
    "sourceProvenance": "Imported INDMoney app review dataset",
    "sourceReference": "INDMoney Review Row #33762",
    "preliminaryKeywordSignals": "SIP instalment / SIP debit / SIP payment",
    "triagePriority": "Review \u2013 related keyword, H1 fit uncertain",
    "humanReviewStatus": "pending",
    "humanCategories": [],
    "humanEvidenceStrength": "UNASSIGNED",
    "researcherNotes": "",
    "reviewedAt": null,
    "reviewedBy": null,
    "aiSuggestion": {
      "categories": [
        "SIP instalment debit failure",
        "Bank account linking problem"
      ],
      "evidenceStrength": "DIRECT",
      "supportingExcerpt": "They didn't remind us if any SIPs skipped, being free app I think this has to bear or keep checking every month whether SIP deducted or not",
      "explanation": "Review explicitly describes a mutual fund SIP instalment or mandate debit failure.",
      "researchImplication": "Directly substantiates H1: user experienced unexpected payment failure during active SIP cycle."
    }
  },
  {
    "id": "IND-34227",
    "originalRow": 34227,
    "rating": 1,
    "reviewText": "Don't use this app. It's not safety. After adding all bank account there is no option to remove the bank form it. And also very bad customer support. They didn't support you in any dispute of their partners. Telling to connect them and partnes support are more bad like SBM bank. They will not reply you.",
    "reviewDate": "2023-03-28 16:53",
    "foundHelpful": 5,
    "sourcePlatform": "Google Play Store",
    "sourceProvenance": "Imported INDMoney app review dataset",
    "sourceReference": "INDMoney Review Row #34227",
    "preliminaryKeywordSignals": "Bank account linking for investment",
    "triagePriority": "Review \u2013 related keyword, H1 fit uncertain",
    "humanReviewStatus": "pending",
    "humanCategories": [],
    "humanEvidenceStrength": "UNASSIGNED",
    "researcherNotes": "",
    "reviewedAt": null,
    "reviewedBy": null,
    "aiSuggestion": {
      "categories": [
        "Bank account linking problem"
      ],
      "evidenceStrength": "INSUFFICIENT",
      "supportingExcerpt": "After adding all bank account there is no option to remove the bank form it",
      "explanation": "Pertains to upstream bank account verification or linking, rather than active SIP mandate debit execution.",
      "researchImplication": "Upstream onboarding friction; does not substantiate H1 involuntary discontinuation after SIP creation."
    }
  },
  {
    "id": "IND-34635",
    "originalRow": 34635,
    "rating": 2,
    "reviewText": "Bhaiyo mene s i p star kiya TATA ETHICAL FUND me 11 December of 2022 mere Account se 2 months ki s i p Amount deduct ho gya hai but mujhe aaj tak koi bhi unit's nahi mile hai or naahi koi folio numby mila hai problem ke solutions ke liye ticket raise bhi karwai but koi bhi help nahi kar raha hai even TATA MUTUAL FUND customer care number par bhi baat ki unhone bataya Aapke contact ya PAN number se koi folio number generat nahi hua hai Or Aaj tak meri 2 SiP instalment ka koi pata nhi hai kaha he",
    "reviewDate": "2023-03-09 00:58",
    "foundHelpful": 0,
    "sourcePlatform": "Google Play Store",
    "sourceProvenance": "Imported INDMoney app review dataset",
    "sourceReference": "INDMoney Review Row #34635",
    "preliminaryKeywordSignals": "SIP instalment / SIP debit / SIP payment",
    "triagePriority": "Review \u2013 related keyword, H1 fit uncertain",
    "humanReviewStatus": "pending",
    "humanCategories": [],
    "humanEvidenceStrength": "UNASSIGNED",
    "researcherNotes": "",
    "reviewedAt": null,
    "reviewedBy": null,
    "aiSuggestion": {
      "categories": [
        "SIP instalment debit failure"
      ],
      "evidenceStrength": "DIRECT",
      "supportingExcerpt": "Bhaiyo mene s i p star kiya TATA ETHICAL FUND me 11 December of 2022 mere Account se 2 months ki s i p Amount deduct ho gya hai but mujhe aaj tak koi bhi unit's nahi mile hai or naahi koi folio numby mila hai problem ke solutions ke liye ticket raise bhi karwai but koi bhi help nahi kar raha hai even TATA MUTUAL FUND customer care number par bhi baat ki unhone bataya Aapke contact ya PAN number se koi folio number generat nahi hua hai Or Aaj tak meri 2 SiP instalment ka koi pata nhi hai kaha he",
      "explanation": "Review explicitly describes a mutual fund SIP instalment or mandate debit failure.",
      "researchImplication": "Directly substantiates H1: user experienced unexpected payment failure during active SIP cycle."
    }
  },
  {
    "id": "IND-34701",
    "originalRow": 34701,
    "rating": 1,
    "reviewText": "Calculating wrong amount. Add 3 times same bank account and adding new bank account which I don't have.",
    "reviewDate": "2023-03-05 08:54",
    "foundHelpful": 2,
    "sourcePlatform": "Google Play Store",
    "sourceProvenance": "Imported INDMoney app review dataset",
    "sourceReference": "INDMoney Review Row #34701",
    "preliminaryKeywordSignals": "Bank account linking for investment",
    "triagePriority": "Review \u2013 related keyword, H1 fit uncertain",
    "humanReviewStatus": "pending",
    "humanCategories": [],
    "humanEvidenceStrength": "UNASSIGNED",
    "researcherNotes": "",
    "reviewedAt": null,
    "reviewedBy": null,
    "aiSuggestion": {
      "categories": [
        "Bank account linking problem"
      ],
      "evidenceStrength": "INSUFFICIENT",
      "supportingExcerpt": "Add 3 times same bank account and adding new bank account which I don't have",
      "explanation": "Pertains to upstream bank account verification or linking, rather than active SIP mandate debit execution.",
      "researchImplication": "Upstream onboarding friction; does not substantiate H1 involuntary discontinuation after SIP creation."
    }
  },
  {
    "id": "IND-34814",
    "originalRow": 34814,
    "rating": 1,
    "reviewText": "Scam app I started sip in US stocks and that amount also deducted from my bank account but till now It cannot shows buy order. And the contact support also very poor there is only inbuilt questions and answers in contact support",
    "reviewDate": "2023-02-28 19:58",
    "foundHelpful": 0,
    "sourcePlatform": "Google Play Store",
    "sourceProvenance": "Imported INDMoney app review dataset",
    "sourceReference": "INDMoney Review Row #34814",
    "preliminaryKeywordSignals": "SIP instalment / SIP debit / SIP payment",
    "triagePriority": "Review \u2013 related keyword, H1 fit uncertain",
    "humanReviewStatus": "pending",
    "humanCategories": [],
    "humanEvidenceStrength": "UNASSIGNED",
    "researcherNotes": "",
    "reviewedAt": null,
    "reviewedBy": null,
    "aiSuggestion": {
      "categories": [
        "SIP instalment debit failure",
        "Bank account linking problem",
        "SIP setup issue"
      ],
      "evidenceStrength": "DIRECT",
      "supportingExcerpt": "Scam app I started sip in US stocks and that amount also deducted from my bank account but till now It cannot shows buy order",
      "explanation": "Review explicitly describes a mutual fund SIP instalment or mandate debit failure.",
      "researchImplication": "Directly substantiates H1: user experienced unexpected payment failure during active SIP cycle."
    }
  },
  {
    "id": "IND-34882",
    "originalRow": 34882,
    "rating": 1,
    "reviewText": "SIP is not deducted and they are charging extra for payment also.\ud83d\udc4e",
    "reviewDate": "2023-02-26 09:54",
    "foundHelpful": 0,
    "sourcePlatform": "Google Play Store",
    "sourceProvenance": "Imported INDMoney app review dataset",
    "sourceReference": "INDMoney Review Row #34882",
    "preliminaryKeywordSignals": "SIP instalment / SIP debit / SIP payment",
    "triagePriority": "High \u2013 explicit SIP + mandate/AutoPay language",
    "humanReviewStatus": "pending",
    "humanCategories": [],
    "humanEvidenceStrength": "UNASSIGNED",
    "researcherNotes": "",
    "reviewedAt": null,
    "reviewedBy": null,
    "aiSuggestion": {
      "categories": [
        "SIP instalment debit failure"
      ],
      "evidenceStrength": "DIRECT",
      "supportingExcerpt": "SIP is not deducted and they are charging extra for payment also",
      "explanation": "Review explicitly describes a mutual fund SIP instalment or mandate debit failure.",
      "researchImplication": "Directly substantiates H1: user experienced unexpected payment failure during active SIP cycle."
    }
  },
  {
    "id": "IND-34940",
    "originalRow": 34940,
    "rating": 4,
    "reviewText": "duggirala dprunachnadrarao",
    "reviewDate": "2023-02-22 17:22",
    "foundHelpful": 0,
    "sourcePlatform": "Google Play Store",
    "sourceProvenance": "Imported INDMoney app review dataset",
    "sourceReference": "INDMoney Review Row #34940",
    "preliminaryKeywordSignals": "Bank mandate / NACH / e-mandate / AutoPay",
    "triagePriority": "Review \u2013 related keyword, H1 fit uncertain",
    "humanReviewStatus": "pending",
    "humanCategories": [],
    "humanEvidenceStrength": "UNASSIGNED",
    "researcherNotes": "",
    "reviewedAt": null,
    "reviewedBy": null,
    "aiSuggestion": {
      "categories": [
        "NACH / AutoPay issue"
      ],
      "evidenceStrength": "INDIRECT",
      "supportingExcerpt": "duggirala dprunachnadrarao",
      "explanation": "Mentions bank mandate or AutoPay friction, but does not explicitly confirm a mutual fund SIP was affected.",
      "researchImplication": "Supports broader friction around automated recurring debits, but requires confirmation of SIP context."
    }
  },
  {
    "id": "IND-35068",
    "originalRow": 35068,
    "rating": 1,
    "reviewText": "Useless app. For tracking it cannot find funds automatically after 1st sync. Started monthly SIP and they are deducting money daily from my account. No support team to call. Response on the app is only once in a day. No followup.",
    "reviewDate": "2023-02-15 15:36",
    "foundHelpful": 8,
    "sourcePlatform": "Google Play Store",
    "sourceProvenance": "Imported INDMoney app review dataset",
    "sourceReference": "INDMoney Review Row #35068",
    "preliminaryKeywordSignals": "SIP instalment / SIP debit / SIP payment",
    "triagePriority": "Review \u2013 related keyword, H1 fit uncertain",
    "humanReviewStatus": "pending",
    "humanCategories": [],
    "humanEvidenceStrength": "UNASSIGNED",
    "researcherNotes": "",
    "reviewedAt": null,
    "reviewedBy": null,
    "aiSuggestion": {
      "categories": [
        "SIP instalment debit failure",
        "SIP setup issue"
      ],
      "evidenceStrength": "DIRECT",
      "supportingExcerpt": "Started monthly SIP and they are deducting money daily from my account",
      "explanation": "Review explicitly describes a mutual fund SIP instalment or mandate debit failure.",
      "researchImplication": "Directly substantiates H1: user experienced unexpected payment failure during active SIP cycle."
    }
  },
  {
    "id": "IND-35186",
    "originalRow": 35186,
    "rating": 2,
    "reviewText": "Not happy with the new update the auto deduction for SIP is now not deducting and u have also removed the google pay tranfer ...",
    "reviewDate": "2023-02-09 12:07",
    "foundHelpful": 0,
    "sourcePlatform": "Google Play Store",
    "sourceProvenance": "Imported INDMoney app review dataset",
    "sourceReference": "INDMoney Review Row #35186",
    "preliminaryKeywordSignals": "SIP instalment / SIP debit / SIP payment",
    "triagePriority": "Review \u2013 related keyword, H1 fit uncertain",
    "humanReviewStatus": "pending",
    "humanCategories": [],
    "humanEvidenceStrength": "UNASSIGNED",
    "researcherNotes": "",
    "reviewedAt": null,
    "reviewedBy": null,
    "aiSuggestion": {
      "categories": [
        "SIP instalment debit failure"
      ],
      "evidenceStrength": "DIRECT",
      "supportingExcerpt": "Not happy with the new update the auto deduction for SIP is now not deducting and u have also removed the google pay tranfer",
      "explanation": "Review explicitly describes a mutual fund SIP instalment or mandate debit failure.",
      "researchImplication": "Directly substantiates H1: user experienced unexpected payment failure during active SIP cycle."
    }
  },
  {
    "id": "IND-35314",
    "originalRow": 35314,
    "rating": 1,
    "reviewText": "recent changes irritating me.I am trying to add my funds from my ICICI bank account but it is asking lot of details how do we know how many shares we are going to buy etc. And why don't the money immediately not transferred. Is this the same with Vested,GROWW and stoktel. I am unable to add money. Is there any easy process to add money.",
    "reviewDate": "2023-02-03 09:54",
    "foundHelpful": 0,
    "sourcePlatform": "Google Play Store",
    "sourceProvenance": "Imported INDMoney app review dataset",
    "sourceReference": "INDMoney Review Row #35314",
    "preliminaryKeywordSignals": "Bank account linking for investment",
    "triagePriority": "Review \u2013 related keyword, H1 fit uncertain",
    "humanReviewStatus": "pending",
    "humanCategories": [],
    "humanEvidenceStrength": "UNASSIGNED",
    "researcherNotes": "",
    "reviewedAt": null,
    "reviewedBy": null,
    "aiSuggestion": {
      "categories": [
        "Bank account linking problem"
      ],
      "evidenceStrength": "INSUFFICIENT",
      "supportingExcerpt": "I am trying to add my funds from my ICICI bank account but it is asking lot of details how do we know how many shares we are going to buy etc",
      "explanation": "Pertains to upstream bank account verification or linking, rather than active SIP mandate debit execution.",
      "researchImplication": "Upstream onboarding friction; does not substantiate H1 involuntary discontinuation after SIP creation."
    }
  },
  {
    "id": "IND-35673",
    "originalRow": 35673,
    "rating": 1,
    "reviewText": "I can't even add money to invest in US stocks. It says SBM Bank account error, and even customer care is also not able to solve it from the past 20 days. Repeated e-mails has no solution at all. Please look into this matter asap. My ticket id is - 1109566",
    "reviewDate": "2023-01-18 22:06",
    "foundHelpful": 0,
    "sourcePlatform": "Google Play Store",
    "sourceProvenance": "Imported INDMoney app review dataset",
    "sourceReference": "INDMoney Review Row #35673",
    "preliminaryKeywordSignals": "Bank account linking for investment",
    "triagePriority": "Review \u2013 related keyword, H1 fit uncertain",
    "humanReviewStatus": "pending",
    "humanCategories": [],
    "humanEvidenceStrength": "UNASSIGNED",
    "researcherNotes": "",
    "reviewedAt": null,
    "reviewedBy": null,
    "aiSuggestion": {
      "categories": [
        "Bank account linking problem"
      ],
      "evidenceStrength": "INSUFFICIENT",
      "supportingExcerpt": "It says SBM Bank account error, and even customer care is also not able to solve it from the past 20 days",
      "explanation": "Pertains to upstream bank account verification or linking, rather than active SIP mandate debit execution.",
      "researchImplication": "Upstream onboarding friction; does not substantiate H1 involuntary discontinuation after SIP creation."
    }
  },
  {
    "id": "IND-35853",
    "originalRow": 35853,
    "rating": 1,
    "reviewText": "when I link my bank account, it's showing my account balance, that is affecting my privacy",
    "reviewDate": "2023-01-08 16:28",
    "foundHelpful": 0,
    "sourcePlatform": "Google Play Store",
    "sourceProvenance": "Imported INDMoney app review dataset",
    "sourceReference": "INDMoney Review Row #35853",
    "preliminaryKeywordSignals": "Bank account linking for investment",
    "triagePriority": "Review \u2013 related keyword, H1 fit uncertain",
    "humanReviewStatus": "pending",
    "humanCategories": [],
    "humanEvidenceStrength": "UNASSIGNED",
    "researcherNotes": "",
    "reviewedAt": null,
    "reviewedBy": null,
    "aiSuggestion": {
      "categories": [
        "Bank account linking problem"
      ],
      "evidenceStrength": "INSUFFICIENT",
      "supportingExcerpt": "when I link my bank account, it's showing my account balance, that is affecting my privacy",
      "explanation": "Pertains to upstream bank account verification or linking, rather than active SIP mandate debit execution.",
      "researchImplication": "Upstream onboarding friction; does not substantiate H1 involuntary discontinuation after SIP creation."
    }
  },
  {
    "id": "IND-35907",
    "originalRow": 35907,
    "rating": 1,
    "reviewText": "No one is replying on your raising tickets. I am not able to see my added bank account balance. They show only 5 bank. They should know that all people not have account in these banks only. If I can't about to track my bank balance. Then why should I use this app. For stocks and mutual funds, there are many great apps available. Such a useless app and worst support service!\ud83d\ude11",
    "reviewDate": "2023-01-05 12:57",
    "foundHelpful": 16,
    "sourcePlatform": "Google Play Store",
    "sourceProvenance": "Imported INDMoney app review dataset",
    "sourceReference": "INDMoney Review Row #35907",
    "preliminaryKeywordSignals": "Bank account linking for investment",
    "triagePriority": "Review \u2013 related keyword, H1 fit uncertain",
    "humanReviewStatus": "pending",
    "humanCategories": [],
    "humanEvidenceStrength": "UNASSIGNED",
    "researcherNotes": "",
    "reviewedAt": null,
    "reviewedBy": null,
    "aiSuggestion": {
      "categories": [
        "Bank account linking problem"
      ],
      "evidenceStrength": "INSUFFICIENT",
      "supportingExcerpt": "I am not able to see my added bank account balance",
      "explanation": "Pertains to upstream bank account verification or linking, rather than active SIP mandate debit execution.",
      "researchImplication": "Upstream onboarding friction; does not substantiate H1 involuntary discontinuation after SIP creation."
    }
  },
  {
    "id": "IND-36744",
    "originalRow": 36744,
    "rating": 3,
    "reviewText": "IND money is no more indmoney there should be a option to mute it suggestiion. Adding health insurance Term insurance extra topup Super top up Mini save These seems to be promotional cards rather than insightful. If i read it one time and I am aware of it what's the meaning of showing this static card always at top. Their should be an option to improve. Team should Focus on adding value. Like credit auto-pay. Alert and analysis of credit spending activity. Better stock tracking of Indian stk",
    "reviewDate": "2022-11-19 10:03",
    "foundHelpful": 8,
    "sourcePlatform": "Google Play Store",
    "sourceProvenance": "Imported INDMoney app review dataset",
    "sourceReference": "INDMoney Review Row #36744",
    "preliminaryKeywordSignals": "Bank mandate / NACH / e-mandate / AutoPay",
    "triagePriority": "Review \u2013 related keyword, H1 fit uncertain",
    "humanReviewStatus": "pending",
    "humanCategories": [],
    "humanEvidenceStrength": "UNASSIGNED",
    "researcherNotes": "",
    "reviewedAt": null,
    "reviewedBy": null,
    "aiSuggestion": {
      "categories": [
        "NACH / AutoPay issue"
      ],
      "evidenceStrength": "INDIRECT",
      "supportingExcerpt": "IND money is no more indmoney there should be a option to mute it suggestiion",
      "explanation": "Mentions bank mandate or AutoPay friction, but does not explicitly confirm a mutual fund SIP was affected.",
      "researchImplication": "Supports broader friction around automated recurring debits, but requires confirmation of SIP context."
    }
  },
  {
    "id": "IND-36889",
    "originalRow": 36889,
    "rating": 1,
    "reviewText": "Unable to update nps investment and also I can't add Bank accounts like SBI, BOB etc. Tracking has become difficult after recent updates. Kindly add SGB",
    "reviewDate": "2022-11-11 23:52",
    "foundHelpful": 1,
    "sourcePlatform": "Google Play Store",
    "sourceProvenance": "Imported INDMoney app review dataset",
    "sourceReference": "INDMoney Review Row #36889",
    "preliminaryKeywordSignals": "Bank account linking for investment",
    "triagePriority": "Review \u2013 related keyword, H1 fit uncertain",
    "humanReviewStatus": "pending",
    "humanCategories": [],
    "humanEvidenceStrength": "UNASSIGNED",
    "researcherNotes": "",
    "reviewedAt": null,
    "reviewedBy": null,
    "aiSuggestion": {
      "categories": [
        "Bank account linking problem"
      ],
      "evidenceStrength": "INSUFFICIENT",
      "supportingExcerpt": "Unable to update nps investment and also I can't add Bank accounts like SBI, BOB etc",
      "explanation": "Pertains to upstream bank account verification or linking, rather than active SIP mandate debit execution.",
      "researchImplication": "Upstream onboarding friction; does not substantiate H1 involuntary discontinuation after SIP creation."
    }
  },
  {
    "id": "IND-37348",
    "originalRow": 37348,
    "rating": 1,
    "reviewText": "Extremely poor design of the app, no matter what you do autopay does not work. Mandate gets set but app is unable to understand that it is successful. Overall can be skipped due to lot of glitches here and there and autopay not being setup.",
    "reviewDate": "2022-10-22 20:35",
    "foundHelpful": 6,
    "sourcePlatform": "Google Play Store",
    "sourceProvenance": "Imported INDMoney app review dataset",
    "sourceReference": "INDMoney Review Row #37348",
    "preliminaryKeywordSignals": "Bank mandate / NACH / e-mandate / AutoPay",
    "triagePriority": "Review \u2013 related keyword, H1 fit uncertain",
    "humanReviewStatus": "pending",
    "humanCategories": [],
    "humanEvidenceStrength": "UNASSIGNED",
    "researcherNotes": "",
    "reviewedAt": null,
    "reviewedBy": null,
    "aiSuggestion": {
      "categories": [
        "Bank mandate failure",
        "NACH / AutoPay issue"
      ],
      "evidenceStrength": "INDIRECT",
      "supportingExcerpt": "Extremely poor design of the app, no matter what you do autopay does not work",
      "explanation": "Mentions bank mandate or AutoPay friction, but does not explicitly confirm a mutual fund SIP was affected.",
      "researchImplication": "Supports broader friction around automated recurring debits, but requires confirmation of SIP context."
    }
  },
  {
    "id": "IND-37476",
    "originalRow": 37476,
    "rating": 1,
    "reviewText": "Worst app. Been trying to add my bank accounts but failing to do so everytime.",
    "reviewDate": "2022-10-16 14:47",
    "foundHelpful": 0,
    "sourcePlatform": "Google Play Store",
    "sourceProvenance": "Imported INDMoney app review dataset",
    "sourceReference": "INDMoney Review Row #37476",
    "preliminaryKeywordSignals": "Bank account linking for investment",
    "triagePriority": "Review \u2013 related keyword, H1 fit uncertain",
    "humanReviewStatus": "pending",
    "humanCategories": [],
    "humanEvidenceStrength": "UNASSIGNED",
    "researcherNotes": "",
    "reviewedAt": null,
    "reviewedBy": null,
    "aiSuggestion": {
      "categories": [
        "Bank account linking problem"
      ],
      "evidenceStrength": "INSUFFICIENT",
      "supportingExcerpt": "Been trying to add my bank accounts but failing to do so everytime",
      "explanation": "Pertains to upstream bank account verification or linking, rather than active SIP mandate debit execution.",
      "researchImplication": "Upstream onboarding friction; does not substantiate H1 involuntary discontinuation after SIP creation."
    }
  },
  {
    "id": "IND-37525",
    "originalRow": 37525,
    "rating": 5,
    "reviewText": "This app is just revolutionary for investments. Their seamless mandate, portfolio identification and daily update of portfolio gives you an edge for daily actions. Kudos to product management team!! Job well done. Looking forward to more features.",
    "reviewDate": "2022-10-13 14:04",
    "foundHelpful": 7,
    "sourcePlatform": "Google Play Store",
    "sourceProvenance": "Imported INDMoney app review dataset",
    "sourceReference": "INDMoney Review Row #37525",
    "preliminaryKeywordSignals": "Bank mandate / NACH / e-mandate / AutoPay",
    "triagePriority": "Review \u2013 related keyword, H1 fit uncertain",
    "humanReviewStatus": "pending",
    "humanCategories": [],
    "humanEvidenceStrength": "UNASSIGNED",
    "researcherNotes": "",
    "reviewedAt": null,
    "reviewedBy": null,
    "aiSuggestion": {
      "categories": [
        "Unrelated feedback"
      ],
      "evidenceStrength": "INSUFFICIENT",
      "supportingExcerpt": "Their seamless mandate, portfolio identification and daily update of portfolio gives you an edge for daily actions",
      "explanation": "Review describes general app service, withdrawal, or unrelated payment issue without establishing SIP mandate failure.",
      "researchImplication": "Does not support H1 hypothesis."
    }
  },
  {
    "id": "IND-37528",
    "originalRow": 37528,
    "rating": 1,
    "reviewText": "It's a fraudulent app, SIPs get debited without you even knowing. Customer support is worse, reply doesn't contain sender's name and they keep on asking additional clarification.. watch twice before you click any button on the app, else it gets converted to auto pay SIP and their support will ask you to get it cancelled from the bank yourself.",
    "reviewDate": "2022-10-13 10:47",
    "foundHelpful": 11,
    "sourcePlatform": "Google Play Store",
    "sourceProvenance": "Imported INDMoney app review dataset",
    "sourceReference": "INDMoney Review Row #37528",
    "preliminaryKeywordSignals": "Bank mandate / NACH / e-mandate / AutoPay",
    "triagePriority": "High \u2013 explicit SIP + mandate/AutoPay language",
    "humanReviewStatus": "pending",
    "humanCategories": [],
    "humanEvidenceStrength": "UNASSIGNED",
    "researcherNotes": "",
    "reviewedAt": null,
    "reviewedBy": null,
    "aiSuggestion": {
      "categories": [
        "SIP instalment debit failure",
        "NACH / AutoPay issue"
      ],
      "evidenceStrength": "DIRECT",
      "supportingExcerpt": "It's a fraudulent app, SIPs get debited without you even knowing",
      "explanation": "Review explicitly describes a mutual fund SIP instalment or mandate debit failure.",
      "researchImplication": "Directly substantiates H1: user experienced unexpected payment failure during active SIP cycle."
    }
  },
  {
    "id": "IND-37531",
    "originalRow": 37531,
    "rating": 3,
    "reviewText": "Tracked & added 2 bank accounts based on SMS. And those 2 bank accounts are not mine, i added my friend's SIM card on my mobile temporarily, and his bank accounts are added in my profile. There no option to delete such bank accounts using app",
    "reviewDate": "2022-10-13 08:17",
    "foundHelpful": 0,
    "sourcePlatform": "Google Play Store",
    "sourceProvenance": "Imported INDMoney app review dataset",
    "sourceReference": "INDMoney Review Row #37531",
    "preliminaryKeywordSignals": "Bank account linking for investment",
    "triagePriority": "Review \u2013 related keyword, H1 fit uncertain",
    "humanReviewStatus": "pending",
    "humanCategories": [],
    "humanEvidenceStrength": "UNASSIGNED",
    "researcherNotes": "",
    "reviewedAt": null,
    "reviewedBy": null,
    "aiSuggestion": {
      "categories": [
        "Bank account linking problem"
      ],
      "evidenceStrength": "INSUFFICIENT",
      "supportingExcerpt": "Tracked & added 2 bank accounts based on SMS",
      "explanation": "Pertains to upstream bank account verification or linking, rather than active SIP mandate debit execution.",
      "researchImplication": "Upstream onboarding friction; does not substantiate H1 involuntary discontinuation after SIP creation."
    }
  },
  {
    "id": "IND-37652",
    "originalRow": 37652,
    "rating": 4,
    "reviewText": "Please add manual option of adding banks. It isn't capturing the bank account itself.",
    "reviewDate": "2022-10-05 18:14",
    "foundHelpful": 0,
    "sourcePlatform": "Google Play Store",
    "sourceProvenance": "Imported INDMoney app review dataset",
    "sourceReference": "INDMoney Review Row #37652",
    "preliminaryKeywordSignals": "Bank account linking for investment",
    "triagePriority": "Review \u2013 related keyword, H1 fit uncertain",
    "humanReviewStatus": "pending",
    "humanCategories": [],
    "humanEvidenceStrength": "UNASSIGNED",
    "researcherNotes": "",
    "reviewedAt": null,
    "reviewedBy": null,
    "aiSuggestion": {
      "categories": [
        "Bank account linking problem"
      ],
      "evidenceStrength": "INSUFFICIENT",
      "supportingExcerpt": "Please add manual option of adding banks",
      "explanation": "Pertains to upstream bank account verification or linking, rather than active SIP mandate debit execution.",
      "researchImplication": "Upstream onboarding friction; does not substantiate H1 involuntary discontinuation after SIP creation."
    }
  },
  {
    "id": "IND-37692",
    "originalRow": 37692,
    "rating": 1,
    "reviewText": "Even after pausing my sip instalment is deducted from my account?? How I stop deducted money from my account and extra 65 is deducted along with 1000 why??",
    "reviewDate": "2022-10-04 14:27",
    "foundHelpful": 0,
    "sourcePlatform": "Google Play Store",
    "sourceProvenance": "Imported INDMoney app review dataset",
    "sourceReference": "INDMoney Review Row #37692",
    "preliminaryKeywordSignals": "SIP instalment / SIP debit / SIP payment",
    "triagePriority": "Review \u2013 related keyword, H1 fit uncertain",
    "humanReviewStatus": "pending",
    "humanCategories": [],
    "humanEvidenceStrength": "UNASSIGNED",
    "researcherNotes": "",
    "reviewedAt": null,
    "reviewedBy": null,
    "aiSuggestion": {
      "categories": [
        "SIP instalment debit failure"
      ],
      "evidenceStrength": "DIRECT",
      "supportingExcerpt": "Even after pausing my sip instalment is deducted from my account",
      "explanation": "Review explicitly describes a mutual fund SIP instalment or mandate debit failure.",
      "researchImplication": "Directly substantiates H1: user experienced unexpected payment failure during active SIP cycle."
    }
  },
  {
    "id": "IND-37727",
    "originalRow": 37727,
    "rating": 1,
    "reviewText": "Read this Message before anyone Signup. Nothing is free in India. I joined INDmoney, the opened your savings Account automatically with SBM Bank then they also opened your account with US Stock. Then it's not finish they asking you give Access to your anyone savings account then need for verification - now they continuous showing my balances. Its not over yet- now they continuously showing to link your Gmail access for reading emails for bank accounts and credit cards.Guys trust me don't involve",
    "reviewDate": "2022-10-03 08:35",
    "foundHelpful": 3,
    "sourcePlatform": "Google Play Store",
    "sourceProvenance": "Imported INDMoney app review dataset",
    "sourceReference": "INDMoney Review Row #37727",
    "preliminaryKeywordSignals": "Bank account linking for investment",
    "triagePriority": "Review \u2013 related keyword, H1 fit uncertain",
    "humanReviewStatus": "pending",
    "humanCategories": [],
    "humanEvidenceStrength": "UNASSIGNED",
    "researcherNotes": "",
    "reviewedAt": null,
    "reviewedBy": null,
    "aiSuggestion": {
      "categories": [
        "Bank account linking problem"
      ],
      "evidenceStrength": "INSUFFICIENT",
      "supportingExcerpt": "I joined INDmoney, the opened your savings Account automatically with SBM Bank then they also opened your account with US Stock",
      "explanation": "Pertains to upstream bank account verification or linking, rather than active SIP mandate debit execution.",
      "researchImplication": "Upstream onboarding friction; does not substantiate H1 involuntary discontinuation after SIP creation."
    }
  },
  {
    "id": "IND-38846",
    "originalRow": 38846,
    "rating": 2,
    "reviewText": "It was working great till provided option to track bank account via Finvu. Since addition of this feature app has started not tracking balance via sms and shows wrong ammount. I don't want to provide my account details to Finvu so why are you forcing it. Please make it optional.",
    "reviewDate": "2022-08-30 20:34",
    "foundHelpful": 2,
    "sourcePlatform": "Google Play Store",
    "sourceProvenance": "Imported INDMoney app review dataset",
    "sourceReference": "INDMoney Review Row #38846",
    "preliminaryKeywordSignals": "Bank account linking for investment",
    "triagePriority": "Review \u2013 related keyword, H1 fit uncertain",
    "humanReviewStatus": "pending",
    "humanCategories": [],
    "humanEvidenceStrength": "UNASSIGNED",
    "researcherNotes": "",
    "reviewedAt": null,
    "reviewedBy": null,
    "aiSuggestion": {
      "categories": [
        "Bank account linking problem"
      ],
      "evidenceStrength": "INSUFFICIENT",
      "supportingExcerpt": "It was working great till provided option to track bank account via Finvu",
      "explanation": "Pertains to upstream bank account verification or linking, rather than active SIP mandate debit execution.",
      "researchImplication": "Upstream onboarding friction; does not substantiate H1 involuntary discontinuation after SIP creation."
    }
  },
  {
    "id": "IND-39044",
    "originalRow": 39044,
    "rating": 1,
    "reviewText": "Used to give rewards for spending on Amazon and Flipkart. BUT NOW STOPPED THE REWARDS. Minisave option is also not working.Mandate done but it is failing each time.",
    "reviewDate": "2022-08-25 21:40",
    "foundHelpful": 1,
    "sourcePlatform": "Google Play Store",
    "sourceProvenance": "Imported INDMoney app review dataset",
    "sourceReference": "INDMoney Review Row #39044",
    "preliminaryKeywordSignals": "Bank mandate / NACH / e-mandate / AutoPay",
    "triagePriority": "Review \u2013 related keyword, H1 fit uncertain",
    "humanReviewStatus": "pending",
    "humanCategories": [],
    "humanEvidenceStrength": "UNASSIGNED",
    "researcherNotes": "",
    "reviewedAt": null,
    "reviewedBy": null,
    "aiSuggestion": {
      "categories": [
        "Bank mandate failure"
      ],
      "evidenceStrength": "INDIRECT",
      "supportingExcerpt": "Mandate done but it is failing each time",
      "explanation": "Mentions bank mandate or AutoPay friction, but does not explicitly confirm a mutual fund SIP was affected.",
      "researchImplication": "Supports broader friction around automated recurring debits, but requires confirmation of SIP context."
    }
  },
  {
    "id": "IND-39316",
    "originalRow": 39316,
    "rating": 4,
    "reviewText": "I would have rated 5 star if not fir the mini save problem, although i have set the auto-pay for mini save its not working properly, well overall i love this app",
    "reviewDate": "2022-08-16 22:58",
    "foundHelpful": 0,
    "sourcePlatform": "Google Play Store",
    "sourceProvenance": "Imported INDMoney app review dataset",
    "sourceReference": "INDMoney Review Row #39316",
    "preliminaryKeywordSignals": "Bank mandate / NACH / e-mandate / AutoPay",
    "triagePriority": "Review \u2013 related keyword, H1 fit uncertain",
    "humanReviewStatus": "pending",
    "humanCategories": [],
    "humanEvidenceStrength": "UNASSIGNED",
    "researcherNotes": "",
    "reviewedAt": null,
    "reviewedBy": null,
    "aiSuggestion": {
      "categories": [
        "NACH / AutoPay issue"
      ],
      "evidenceStrength": "INDIRECT",
      "supportingExcerpt": "I would have rated 5 star if not fir the mini save problem, although i have set the auto-pay for mini save its not worki",
      "explanation": "Mentions bank mandate or AutoPay friction, but does not explicitly confirm a mutual fund SIP was affected.",
      "researchImplication": "Supports broader friction around automated recurring debits, but requires confirmation of SIP context."
    }
  },
  {
    "id": "IND-39364",
    "originalRow": 39364,
    "rating": 1,
    "reviewText": "Worst experience, I have added my bank account and after adding the bank account I tried to add money in US stocks but it shows that I need to verify my account. And whenever I try to verify my account it shows that it is already exists. I stucked in this loop. I want to add money. If this issue doesn't solved I need to uninstall the app.",
    "reviewDate": "2022-08-15 19:48",
    "foundHelpful": 1,
    "sourcePlatform": "Google Play Store",
    "sourceProvenance": "Imported INDMoney app review dataset",
    "sourceReference": "INDMoney Review Row #39364",
    "preliminaryKeywordSignals": "Bank account linking for investment",
    "triagePriority": "Review \u2013 related keyword, H1 fit uncertain",
    "humanReviewStatus": "pending",
    "humanCategories": [],
    "humanEvidenceStrength": "UNASSIGNED",
    "researcherNotes": "",
    "reviewedAt": null,
    "reviewedBy": null,
    "aiSuggestion": {
      "categories": [
        "Bank account linking problem"
      ],
      "evidenceStrength": "INSUFFICIENT",
      "supportingExcerpt": "Worst experience, I have added my bank account and after adding the bank account I tried to add money in US stocks but it shows that I need to verify my account",
      "explanation": "Pertains to upstream bank account verification or linking, rather than active SIP mandate debit execution.",
      "researchImplication": "Upstream onboarding friction; does not substantiate H1 involuntary discontinuation after SIP creation."
    }
  },
  {
    "id": "IND-39654",
    "originalRow": 39654,
    "rating": 1,
    "reviewText": "I have raised a service ticket on this app as I am unable to add my bank account in the app due to bug in the app. Whenever I search for my account with my mobile, this app says that it is unable to search my bank account. I have raised a service ticket with ticket no. as - 813112. It is now 17 days and this service ticket has no response or even any update from Indmoney.",
    "reviewDate": "2022-08-07 00:13",
    "foundHelpful": 2,
    "sourcePlatform": "Google Play Store",
    "sourceProvenance": "Imported INDMoney app review dataset",
    "sourceReference": "INDMoney Review Row #39654",
    "preliminaryKeywordSignals": "Bank account linking for investment",
    "triagePriority": "Review \u2013 related keyword, H1 fit uncertain",
    "humanReviewStatus": "pending",
    "humanCategories": [],
    "humanEvidenceStrength": "UNASSIGNED",
    "researcherNotes": "",
    "reviewedAt": null,
    "reviewedBy": null,
    "aiSuggestion": {
      "categories": [
        "Bank account linking problem"
      ],
      "evidenceStrength": "INSUFFICIENT",
      "supportingExcerpt": "I have raised a service ticket on this app as I am unable to add my bank account in the app due to bug in the app",
      "explanation": "Pertains to upstream bank account verification or linking, rather than active SIP mandate debit execution.",
      "researchImplication": "Upstream onboarding friction; does not substantiate H1 involuntary discontinuation after SIP creation."
    }
  },
  {
    "id": "IND-40038",
    "originalRow": 40038,
    "rating": 3,
    "reviewText": "App is good.but i faced many time problem.hw to contact with u.so i m writing my issue if possible please help.my issue is i tried my times to setup autopay sip bit it always shows pending then failed.so please help about this issue hw to solve",
    "reviewDate": "2022-07-19 21:25",
    "foundHelpful": 0,
    "sourcePlatform": "Google Play Store",
    "sourceProvenance": "Imported INDMoney app review dataset",
    "sourceReference": "INDMoney Review Row #40038",
    "preliminaryKeywordSignals": "Bank mandate / NACH / e-mandate / AutoPay; SIP instalment / SIP debit / SIP payment",
    "triagePriority": "High \u2013 explicit SIP + mandate/AutoPay language",
    "humanReviewStatus": "pending",
    "humanCategories": [],
    "humanEvidenceStrength": "UNASSIGNED",
    "researcherNotes": "",
    "reviewedAt": null,
    "reviewedBy": null,
    "aiSuggestion": {
      "categories": [
        "SIP instalment debit failure",
        "NACH / AutoPay issue",
        "SIP setup issue"
      ],
      "evidenceStrength": "DIRECT",
      "supportingExcerpt": "my issue is i tried my times to setup autopay sip bit it always shows pending then failed",
      "explanation": "Review explicitly describes a mutual fund SIP instalment or mandate debit failure.",
      "researchImplication": "Directly substantiates H1: user experienced unexpected payment failure during active SIP cycle."
    }
  },
  {
    "id": "IND-40263",
    "originalRow": 40263,
    "rating": 5,
    "reviewText": "It's a great app but can you please help me in adding my SBI Bank Account!",
    "reviewDate": "2022-07-08 16:48",
    "foundHelpful": 0,
    "sourcePlatform": "Google Play Store",
    "sourceProvenance": "Imported INDMoney app review dataset",
    "sourceReference": "INDMoney Review Row #40263",
    "preliminaryKeywordSignals": "Bank account linking for investment",
    "triagePriority": "Review \u2013 related keyword, H1 fit uncertain",
    "humanReviewStatus": "pending",
    "humanCategories": [],
    "humanEvidenceStrength": "UNASSIGNED",
    "researcherNotes": "",
    "reviewedAt": null,
    "reviewedBy": null,
    "aiSuggestion": {
      "categories": [
        "Bank account linking problem"
      ],
      "evidenceStrength": "INSUFFICIENT",
      "supportingExcerpt": "It's a great app but can you please help me in adding my SBI Bank Account",
      "explanation": "Pertains to upstream bank account verification or linking, rather than active SIP mandate debit execution.",
      "researchImplication": "Upstream onboarding friction; does not substantiate H1 involuntary discontinuation after SIP creation."
    }
  },
  {
    "id": "IND-40327",
    "originalRow": 40327,
    "rating": 1,
    "reviewText": "Not at all good experience. I waited for 2 weeks but my account wasnt activated and now i want to de link my bank account but that is also not happening. I am afraid about my money",
    "reviewDate": "2022-07-05 08:18",
    "foundHelpful": 0,
    "sourcePlatform": "Google Play Store",
    "sourceProvenance": "Imported INDMoney app review dataset",
    "sourceReference": "INDMoney Review Row #40327",
    "preliminaryKeywordSignals": "Bank account linking for investment",
    "triagePriority": "Review \u2013 related keyword, H1 fit uncertain",
    "humanReviewStatus": "pending",
    "humanCategories": [],
    "humanEvidenceStrength": "UNASSIGNED",
    "researcherNotes": "",
    "reviewedAt": null,
    "reviewedBy": null,
    "aiSuggestion": {
      "categories": [
        "Bank account linking problem"
      ],
      "evidenceStrength": "INSUFFICIENT",
      "supportingExcerpt": "I waited for 2 weeks but my account wasnt activated and now i want to de link my bank account but that is also not happening",
      "explanation": "Pertains to upstream bank account verification or linking, rather than active SIP mandate debit execution.",
      "researchImplication": "Upstream onboarding friction; does not substantiate H1 involuntary discontinuation after SIP creation."
    }
  },
  {
    "id": "IND-40501",
    "originalRow": 40501,
    "rating": 1,
    "reviewText": "I am unable to add my all saving bank account in 'Bank Balance' tab. Could you help me out in this?",
    "reviewDate": "2022-06-26 13:02",
    "foundHelpful": 0,
    "sourcePlatform": "Google Play Store",
    "sourceProvenance": "Imported INDMoney app review dataset",
    "sourceReference": "INDMoney Review Row #40501",
    "preliminaryKeywordSignals": "Bank account linking for investment",
    "triagePriority": "Review \u2013 related keyword, H1 fit uncertain",
    "humanReviewStatus": "pending",
    "humanCategories": [],
    "humanEvidenceStrength": "UNASSIGNED",
    "researcherNotes": "",
    "reviewedAt": null,
    "reviewedBy": null,
    "aiSuggestion": {
      "categories": [
        "Bank account linking problem"
      ],
      "evidenceStrength": "INSUFFICIENT",
      "supportingExcerpt": "I am unable to add my all saving bank account in 'Bank Balance' tab",
      "explanation": "Pertains to upstream bank account verification or linking, rather than active SIP mandate debit execution.",
      "researchImplication": "Upstream onboarding friction; does not substantiate H1 involuntary discontinuation after SIP creation."
    }
  },
  {
    "id": "IND-40517",
    "originalRow": 40517,
    "rating": 1,
    "reviewText": "Worst experience, I'm not able to add my account auto pay",
    "reviewDate": "2022-06-25 13:34",
    "foundHelpful": 0,
    "sourcePlatform": "Google Play Store",
    "sourceProvenance": "Imported INDMoney app review dataset",
    "sourceReference": "INDMoney Review Row #40517",
    "preliminaryKeywordSignals": "Bank mandate / NACH / e-mandate / AutoPay",
    "triagePriority": "Review \u2013 related keyword, H1 fit uncertain",
    "humanReviewStatus": "pending",
    "humanCategories": [],
    "humanEvidenceStrength": "UNASSIGNED",
    "researcherNotes": "",
    "reviewedAt": null,
    "reviewedBy": null,
    "aiSuggestion": {
      "categories": [
        "NACH / AutoPay issue"
      ],
      "evidenceStrength": "INDIRECT",
      "supportingExcerpt": "Worst experience, I'm not able to add my account auto pay",
      "explanation": "Mentions bank mandate or AutoPay friction, but does not explicitly confirm a mutual fund SIP was affected.",
      "researchImplication": "Supports broader friction around automated recurring debits, but requires confirmation of SIP context."
    }
  },
  {
    "id": "IND-40799",
    "originalRow": 40799,
    "rating": 1,
    "reviewText": "Worst experience. Not even able to add a savings Bank account. Everytime I try to add it says account already exists in our system. On reaching out to customer support on the app itself. They seem to be very inexperienced and cannot clarify what all info they need in one message to resolve the issue. Everytime I'm asked to share a screenshot with different info. It's been several days now and issue seems unresolved. Better to see some other alternatives. I'm more worried in adding money in app.",
    "reviewDate": "2022-06-13 00:04",
    "foundHelpful": 632,
    "sourcePlatform": "Google Play Store",
    "sourceProvenance": "Imported INDMoney app review dataset",
    "sourceReference": "INDMoney Review Row #40799",
    "preliminaryKeywordSignals": "Bank account linking for investment",
    "triagePriority": "Review \u2013 related keyword, H1 fit uncertain",
    "humanReviewStatus": "pending",
    "humanCategories": [],
    "humanEvidenceStrength": "UNASSIGNED",
    "researcherNotes": "",
    "reviewedAt": null,
    "reviewedBy": null,
    "aiSuggestion": {
      "categories": [
        "Bank account linking problem"
      ],
      "evidenceStrength": "INSUFFICIENT",
      "supportingExcerpt": "Not even able to add a savings Bank account",
      "explanation": "Pertains to upstream bank account verification or linking, rather than active SIP mandate debit execution.",
      "researchImplication": "Upstream onboarding friction; does not substantiate H1 involuntary discontinuation after SIP creation."
    }
  },
  {
    "id": "IND-41006",
    "originalRow": 41006,
    "rating": 1,
    "reviewText": "My bank account not link with this app",
    "reviewDate": "2022-06-04 19:38",
    "foundHelpful": 0,
    "sourcePlatform": "Google Play Store",
    "sourceProvenance": "Imported INDMoney app review dataset",
    "sourceReference": "INDMoney Review Row #41006",
    "preliminaryKeywordSignals": "Bank account linking for investment",
    "triagePriority": "Review \u2013 related keyword, H1 fit uncertain",
    "humanReviewStatus": "pending",
    "humanCategories": [],
    "humanEvidenceStrength": "UNASSIGNED",
    "researcherNotes": "",
    "reviewedAt": null,
    "reviewedBy": null,
    "aiSuggestion": {
      "categories": [
        "Bank account linking problem"
      ],
      "evidenceStrength": "INSUFFICIENT",
      "supportingExcerpt": "My bank account not link with this app",
      "explanation": "Pertains to upstream bank account verification or linking, rather than active SIP mandate debit execution.",
      "researchImplication": "Upstream onboarding friction; does not substantiate H1 involuntary discontinuation after SIP creation."
    }
  },
  {
    "id": "IND-41238",
    "originalRow": 41238,
    "rating": 4,
    "reviewText": "All is good, but should add more bank account for the balance checking option.",
    "reviewDate": "2022-05-27 10:34",
    "foundHelpful": 1,
    "sourcePlatform": "Google Play Store",
    "sourceProvenance": "Imported INDMoney app review dataset",
    "sourceReference": "INDMoney Review Row #41238",
    "preliminaryKeywordSignals": "Bank account linking for investment",
    "triagePriority": "Review \u2013 related keyword, H1 fit uncertain",
    "humanReviewStatus": "pending",
    "humanCategories": [],
    "humanEvidenceStrength": "UNASSIGNED",
    "researcherNotes": "",
    "reviewedAt": null,
    "reviewedBy": null,
    "aiSuggestion": {
      "categories": [
        "Bank account linking problem"
      ],
      "evidenceStrength": "INSUFFICIENT",
      "supportingExcerpt": "All is good, but should add more bank account for the balance checking option",
      "explanation": "Pertains to upstream bank account verification or linking, rather than active SIP mandate debit execution.",
      "researchImplication": "Upstream onboarding friction; does not substantiate H1 involuntary discontinuation after SIP creation."
    }
  },
  {
    "id": "IND-41426",
    "originalRow": 41426,
    "rating": 5,
    "reviewText": "Not able to add bank account which is linked to unregistered mobile number. Please add feature to track account with unregistered number.",
    "reviewDate": "2022-05-20 10:42",
    "foundHelpful": 0,
    "sourcePlatform": "Google Play Store",
    "sourceProvenance": "Imported INDMoney app review dataset",
    "sourceReference": "INDMoney Review Row #41426",
    "preliminaryKeywordSignals": "Bank account linking for investment",
    "triagePriority": "Review \u2013 related keyword, H1 fit uncertain",
    "humanReviewStatus": "pending",
    "humanCategories": [],
    "humanEvidenceStrength": "UNASSIGNED",
    "researcherNotes": "",
    "reviewedAt": null,
    "reviewedBy": null,
    "aiSuggestion": {
      "categories": [
        "Bank account linking problem"
      ],
      "evidenceStrength": "INSUFFICIENT",
      "supportingExcerpt": "Not able to add bank account which is linked to unregistered mobile number",
      "explanation": "Pertains to upstream bank account verification or linking, rather than active SIP mandate debit execution.",
      "researchImplication": "Upstream onboarding friction; does not substantiate H1 involuntary discontinuation after SIP creation."
    }
  },
  {
    "id": "IND-41592",
    "originalRow": 41592,
    "rating": 1,
    "reviewText": "Very much disappointed, I missed a chance to apply for LIC IPO though I secured enough money with all efforts. I got message to approve mandate but not received anything on bank portal. Instead of sending useless alerts they would have support client like me and ensured the IPO is applied. There is no proper straight way to reach support team. We are supposed to raise ticket via mail and wait till they respond. There is an option to track application which is useless, it simple says order placed",
    "reviewDate": "2022-05-14 18:38",
    "foundHelpful": 0,
    "sourcePlatform": "Google Play Store",
    "sourceProvenance": "Imported INDMoney app review dataset",
    "sourceReference": "INDMoney Review Row #41592",
    "preliminaryKeywordSignals": "Bank mandate / NACH / e-mandate / AutoPay",
    "triagePriority": "Review \u2013 related keyword, H1 fit uncertain",
    "humanReviewStatus": "pending",
    "humanCategories": [],
    "humanEvidenceStrength": "UNASSIGNED",
    "researcherNotes": "",
    "reviewedAt": null,
    "reviewedBy": null,
    "aiSuggestion": {
      "categories": [
        "Unrelated feedback"
      ],
      "evidenceStrength": "INSUFFICIENT",
      "supportingExcerpt": "I got message to approve mandate but not received anything on bank portal",
      "explanation": "Review describes general app service, withdrawal, or unrelated payment issue without establishing SIP mandate failure.",
      "researchImplication": "Does not support H1 hypothesis."
    }
  },
  {
    "id": "IND-41950",
    "originalRow": 41950,
    "rating": 1,
    "reviewText": "Couldn't add an Indian bank account",
    "reviewDate": "2022-05-05 18:10",
    "foundHelpful": 1,
    "sourcePlatform": "Google Play Store",
    "sourceProvenance": "Imported INDMoney app review dataset",
    "sourceReference": "INDMoney Review Row #41950",
    "preliminaryKeywordSignals": "Bank account linking for investment",
    "triagePriority": "Review \u2013 related keyword, H1 fit uncertain",
    "humanReviewStatus": "pending",
    "humanCategories": [],
    "humanEvidenceStrength": "UNASSIGNED",
    "researcherNotes": "",
    "reviewedAt": null,
    "reviewedBy": null,
    "aiSuggestion": {
      "categories": [
        "Bank account linking problem"
      ],
      "evidenceStrength": "INSUFFICIENT",
      "supportingExcerpt": "Couldn't add an Indian bank account",
      "explanation": "Pertains to upstream bank account verification or linking, rather than active SIP mandate debit execution.",
      "researchImplication": "Upstream onboarding friction; does not substantiate H1 involuntary discontinuation after SIP creation."
    }
  },
  {
    "id": "IND-41993",
    "originalRow": 41993,
    "rating": 1,
    "reviewText": "Can't track any bank account through sms, cant add any bank account which is not their partner bank (Finvu supports only 5 banks lol). SMS tracking also not accurate. Dont load any money into the Ind Saver bank account. They'll pretend everything is nice and suddenly you're charged withdrawal fees for withdrawing your own money.",
    "reviewDate": "2022-05-04 12:38",
    "foundHelpful": 3,
    "sourcePlatform": "Google Play Store",
    "sourceProvenance": "Imported INDMoney app review dataset",
    "sourceReference": "INDMoney Review Row #41993",
    "preliminaryKeywordSignals": "Bank account linking for investment",
    "triagePriority": "Review \u2013 related keyword, H1 fit uncertain",
    "humanReviewStatus": "pending",
    "humanCategories": [],
    "humanEvidenceStrength": "UNASSIGNED",
    "researcherNotes": "",
    "reviewedAt": null,
    "reviewedBy": null,
    "aiSuggestion": {
      "categories": [
        "Bank account linking problem",
        "Withdrawal / redemption issue"
      ],
      "evidenceStrength": "INSUFFICIENT",
      "supportingExcerpt": "Can't track any bank account through sms, cant add any bank account which is not their partner bank (Finvu supports only 5 banks lol)",
      "explanation": "Pertains to upstream bank account verification or linking, rather than active SIP mandate debit execution.",
      "researchImplication": "Upstream onboarding friction; does not substantiate H1 involuntary discontinuation after SIP creation."
    }
  },
  {
    "id": "IND-42007",
    "originalRow": 42007,
    "rating": 3,
    "reviewText": "My bank account balance showed in indmoney app is not correct. The bank account that i linked with Indmoney app is union bank of India. My bank account balance showing in indmoney app is \u20b982 but my current bank account balance is \u20b9132.11. So my bank account balance is not updated in indmoney app. Please solve this issue. Please Show the updated bank balance all time.",
    "reviewDate": "2022-05-03 21:49",
    "foundHelpful": 0,
    "sourcePlatform": "Google Play Store",
    "sourceProvenance": "Imported INDMoney app review dataset",
    "sourceReference": "INDMoney Review Row #42007",
    "preliminaryKeywordSignals": "Bank account linking for investment",
    "triagePriority": "Review \u2013 related keyword, H1 fit uncertain",
    "humanReviewStatus": "pending",
    "humanCategories": [],
    "humanEvidenceStrength": "UNASSIGNED",
    "researcherNotes": "",
    "reviewedAt": null,
    "reviewedBy": null,
    "aiSuggestion": {
      "categories": [
        "Bank account linking problem"
      ],
      "evidenceStrength": "INSUFFICIENT",
      "supportingExcerpt": "My bank account balance showed in indmoney app is not correct",
      "explanation": "Pertains to upstream bank account verification or linking, rather than active SIP mandate debit execution.",
      "researchImplication": "Upstream onboarding friction; does not substantiate H1 involuntary discontinuation after SIP creation."
    }
  },
  {
    "id": "IND-42265",
    "originalRow": 42265,
    "rating": 5,
    "reviewText": "Can you add a delete button for bank account it is not present as well as for refer and earn can you provide other stocks like google and apple or any other.",
    "reviewDate": "2022-04-26 18:46",
    "foundHelpful": 0,
    "sourcePlatform": "Google Play Store",
    "sourceProvenance": "Imported INDMoney app review dataset",
    "sourceReference": "INDMoney Review Row #42265",
    "preliminaryKeywordSignals": "Bank account linking for investment",
    "triagePriority": "Review \u2013 related keyword, H1 fit uncertain",
    "humanReviewStatus": "pending",
    "humanCategories": [],
    "humanEvidenceStrength": "UNASSIGNED",
    "researcherNotes": "",
    "reviewedAt": null,
    "reviewedBy": null,
    "aiSuggestion": {
      "categories": [
        "Bank account linking problem"
      ],
      "evidenceStrength": "INSUFFICIENT",
      "supportingExcerpt": "Can you add a delete button for bank account it is not present as well as for refer and earn can you provide other stocks like google and apple or any other",
      "explanation": "Pertains to upstream bank account verification or linking, rather than active SIP mandate debit execution.",
      "researchImplication": "Upstream onboarding friction; does not substantiate H1 involuntary discontinuation after SIP creation."
    }
  },
  {
    "id": "IND-42498",
    "originalRow": 42498,
    "rating": 4,
    "reviewText": "Great application, really helpful. Also, add more bank account tracking.",
    "reviewDate": "2022-04-20 18:54",
    "foundHelpful": 0,
    "sourcePlatform": "Google Play Store",
    "sourceProvenance": "Imported INDMoney app review dataset",
    "sourceReference": "INDMoney Review Row #42498",
    "preliminaryKeywordSignals": "Bank account linking for investment",
    "triagePriority": "Review \u2013 related keyword, H1 fit uncertain",
    "humanReviewStatus": "pending",
    "humanCategories": [],
    "humanEvidenceStrength": "UNASSIGNED",
    "researcherNotes": "",
    "reviewedAt": null,
    "reviewedBy": null,
    "aiSuggestion": {
      "categories": [
        "Bank account linking problem"
      ],
      "evidenceStrength": "INSUFFICIENT",
      "supportingExcerpt": "Also, add more bank account tracking",
      "explanation": "Pertains to upstream bank account verification or linking, rather than active SIP mandate debit execution.",
      "researchImplication": "Upstream onboarding friction; does not substantiate H1 involuntary discontinuation after SIP creation."
    }
  },
  {
    "id": "IND-42576",
    "originalRow": 42576,
    "rating": 1,
    "reviewText": "Was happy to start investing in weekly SIP but later the Standing instruction has no value with them. They are debiting the account on their own convenient date not on the actual date and there is no proper explanation for the same from the service team. In fact I doubt if there is a customer service team exist here. Whenever we raise a query, they will reply after 4-5 days with completely inappropriate answers. There is no real time customer care number. I'm quitting from this app. Thank you.",
    "reviewDate": "2022-04-18 18:52",
    "foundHelpful": 0,
    "sourcePlatform": "Google Play Store",
    "sourceProvenance": "Imported INDMoney app review dataset",
    "sourceReference": "INDMoney Review Row #42576",
    "preliminaryKeywordSignals": "Bank mandate / NACH / e-mandate / AutoPay",
    "triagePriority": "High \u2013 explicit SIP + mandate/AutoPay language",
    "humanReviewStatus": "pending",
    "humanCategories": [],
    "humanEvidenceStrength": "UNASSIGNED",
    "researcherNotes": "",
    "reviewedAt": null,
    "reviewedBy": null,
    "aiSuggestion": {
      "categories": [
        "SIP instalment debit failure",
        "SIP setup issue"
      ],
      "evidenceStrength": "DIRECT",
      "supportingExcerpt": "Was happy to start investing in weekly SIP but later the Standing instruction has no value with them",
      "explanation": "Review explicitly describes a mutual fund SIP instalment or mandate debit failure.",
      "researchImplication": "Directly substantiates H1: user experienced unexpected payment failure during active SIP cycle."
    }
  },
  {
    "id": "IND-42585",
    "originalRow": 42585,
    "rating": 1,
    "reviewText": "Don't even wanted to give a star. I did sip in Parag Parikh mutual funds through this app. I have closed my sip last month still the auto debit is working and sip of this month is debited. Very bad experience with this app.",
    "reviewDate": "2022-04-18 07:50",
    "foundHelpful": 2,
    "sourcePlatform": "Google Play Store",
    "sourceProvenance": "Imported INDMoney app review dataset",
    "sourceReference": "INDMoney Review Row #42585",
    "preliminaryKeywordSignals": "SIP instalment / SIP debit / SIP payment",
    "triagePriority": "High \u2013 explicit SIP + mandate/AutoPay language",
    "humanReviewStatus": "pending",
    "humanCategories": [],
    "humanEvidenceStrength": "UNASSIGNED",
    "researcherNotes": "",
    "reviewedAt": null,
    "reviewedBy": null,
    "aiSuggestion": {
      "categories": [
        "SIP instalment debit failure",
        "NACH / AutoPay issue"
      ],
      "evidenceStrength": "DIRECT",
      "supportingExcerpt": "I did sip in Parag Parikh mutual funds through this app",
      "explanation": "Review explicitly describes a mutual fund SIP instalment or mandate debit failure.",
      "researchImplication": "Directly substantiates H1: user experienced unexpected payment failure during active SIP cycle."
    }
  },
  {
    "id": "IND-42869",
    "originalRow": 42869,
    "rating": 1,
    "reviewText": "My withdrawal amount is not added in my bank account",
    "reviewDate": "2022-04-12 08:31",
    "foundHelpful": 0,
    "sourcePlatform": "Google Play Store",
    "sourceProvenance": "Imported INDMoney app review dataset",
    "sourceReference": "INDMoney Review Row #42869",
    "preliminaryKeywordSignals": "Bank account linking for investment",
    "triagePriority": "Review \u2013 related keyword, H1 fit uncertain",
    "humanReviewStatus": "pending",
    "humanCategories": [],
    "humanEvidenceStrength": "UNASSIGNED",
    "researcherNotes": "",
    "reviewedAt": null,
    "reviewedBy": null,
    "aiSuggestion": {
      "categories": [
        "Bank account linking problem",
        "Withdrawal / redemption issue"
      ],
      "evidenceStrength": "INSUFFICIENT",
      "supportingExcerpt": "My withdrawal amount is not added in my bank account",
      "explanation": "Pertains to upstream bank account verification or linking, rather than active SIP mandate debit execution.",
      "researchImplication": "Upstream onboarding friction; does not substantiate H1 involuntary discontinuation after SIP creation."
    }
  },
  {
    "id": "IND-42997",
    "originalRow": 42997,
    "rating": 2,
    "reviewText": "Can't add my bank account. It is seven digits and I've used it all my life but for some reason I can only add a 8 digit bank account minimum. Fix it!",
    "reviewDate": "2022-04-08 19:19",
    "foundHelpful": 0,
    "sourcePlatform": "Google Play Store",
    "sourceProvenance": "Imported INDMoney app review dataset",
    "sourceReference": "INDMoney Review Row #42997",
    "preliminaryKeywordSignals": "Bank account linking for investment",
    "triagePriority": "Review \u2013 related keyword, H1 fit uncertain",
    "humanReviewStatus": "pending",
    "humanCategories": [],
    "humanEvidenceStrength": "UNASSIGNED",
    "researcherNotes": "",
    "reviewedAt": null,
    "reviewedBy": null,
    "aiSuggestion": {
      "categories": [
        "Bank account linking problem"
      ],
      "evidenceStrength": "INSUFFICIENT",
      "supportingExcerpt": "Can't add my bank account",
      "explanation": "Pertains to upstream bank account verification or linking, rather than active SIP mandate debit execution.",
      "researchImplication": "Upstream onboarding friction; does not substantiate H1 involuntary discontinuation after SIP creation."
    }
  },
  {
    "id": "IND-43584",
    "originalRow": 43584,
    "rating": 5,
    "reviewText": "Had a problem setting up sip.error message is error in creating pdf mandate",
    "reviewDate": "2022-03-30 09:40",
    "foundHelpful": 0,
    "sourcePlatform": "Google Play Store",
    "sourceProvenance": "Imported INDMoney app review dataset",
    "sourceReference": "INDMoney Review Row #43584",
    "preliminaryKeywordSignals": "Bank mandate / NACH / e-mandate / AutoPay; SIP instalment / SIP debit / SIP payment",
    "triagePriority": "High \u2013 explicit SIP + mandate/AutoPay language",
    "humanReviewStatus": "pending",
    "humanCategories": [],
    "humanEvidenceStrength": "UNASSIGNED",
    "researcherNotes": "",
    "reviewedAt": null,
    "reviewedBy": null,
    "aiSuggestion": {
      "categories": [
        "Bank mandate failure"
      ],
      "evidenceStrength": "DIRECT",
      "supportingExcerpt": "Had a problem setting up sip",
      "explanation": "Review explicitly describes a mutual fund SIP instalment or mandate debit failure.",
      "researchImplication": "Directly substantiates H1: user experienced unexpected payment failure during active SIP cycle."
    }
  },
  {
    "id": "IND-43612",
    "originalRow": 43612,
    "rating": 4,
    "reviewText": "It would be great if ability to do STP from one AMC to another can be added. Maybe something like the money is withdrawn from one AMC and added to bank account and then it is invested in another AMC. Currently I do this manually, it will be great if this can be automated. This is needed because STP is generally done from debt fund to equity fund and in my experience I have seen that an AMC either expertise in debt or equity. It is very difficult to find an AMC that expertise in both.",
    "reviewDate": "2022-03-29 22:28",
    "foundHelpful": 11,
    "sourcePlatform": "Google Play Store",
    "sourceProvenance": "Imported INDMoney app review dataset",
    "sourceReference": "INDMoney Review Row #43612",
    "preliminaryKeywordSignals": "Bank account linking for investment",
    "triagePriority": "Review \u2013 related keyword, H1 fit uncertain",
    "humanReviewStatus": "pending",
    "humanCategories": [],
    "humanEvidenceStrength": "UNASSIGNED",
    "researcherNotes": "",
    "reviewedAt": null,
    "reviewedBy": null,
    "aiSuggestion": {
      "categories": [
        "Bank account linking problem",
        "Withdrawal / redemption issue"
      ],
      "evidenceStrength": "INSUFFICIENT",
      "supportingExcerpt": "Maybe something like the money is withdrawn from one AMC and added to bank account and then it is invested in another AMC",
      "explanation": "Pertains to upstream bank account verification or linking, rather than active SIP mandate debit execution.",
      "researchImplication": "Upstream onboarding friction; does not substantiate H1 involuntary discontinuation after SIP creation."
    }
  },
  {
    "id": "IND-44704",
    "originalRow": 44704,
    "rating": 1,
    "reviewText": "Totally useless app. Money tracking and expense tracking both features are worst. I have added two bank accounts but it tracks the savings of one of them only. Expenses are doubled in value. Worst experience. If issues aren't resolved then definitely deleting my account and going to uninstall it.",
    "reviewDate": "2022-03-09 08:35",
    "foundHelpful": 17,
    "sourcePlatform": "Google Play Store",
    "sourceProvenance": "Imported INDMoney app review dataset",
    "sourceReference": "INDMoney Review Row #44704",
    "preliminaryKeywordSignals": "Bank account linking for investment",
    "triagePriority": "Review \u2013 related keyword, H1 fit uncertain",
    "humanReviewStatus": "pending",
    "humanCategories": [],
    "humanEvidenceStrength": "UNASSIGNED",
    "researcherNotes": "",
    "reviewedAt": null,
    "reviewedBy": null,
    "aiSuggestion": {
      "categories": [
        "Bank account linking problem"
      ],
      "evidenceStrength": "INSUFFICIENT",
      "supportingExcerpt": "I have added two bank accounts but it tracks the savings of one of them only",
      "explanation": "Pertains to upstream bank account verification or linking, rather than active SIP mandate debit execution.",
      "researchImplication": "Upstream onboarding friction; does not substantiate H1 involuntary discontinuation after SIP creation."
    }
  },
  {
    "id": "IND-44899",
    "originalRow": 44899,
    "rating": 1,
    "reviewText": "Unable to add bank account to add money.. I tried to add money in to app but after entering bank details it showing name mismatch..( my name is same as app profile name) ..I tried on two bank accounts same issue ( name mismatch)...... Now I deleted my profile..( time waste app)",
    "reviewDate": "2022-03-05 01:55",
    "foundHelpful": 6,
    "sourcePlatform": "Google Play Store",
    "sourceProvenance": "Imported INDMoney app review dataset",
    "sourceReference": "INDMoney Review Row #44899",
    "preliminaryKeywordSignals": "Bank account linking for investment",
    "triagePriority": "Review \u2013 related keyword, H1 fit uncertain",
    "humanReviewStatus": "pending",
    "humanCategories": [],
    "humanEvidenceStrength": "UNASSIGNED",
    "researcherNotes": "",
    "reviewedAt": null,
    "reviewedBy": null,
    "aiSuggestion": {
      "categories": [
        "Bank account linking problem"
      ],
      "evidenceStrength": "INSUFFICIENT",
      "supportingExcerpt": "Unable to add bank account to add money",
      "explanation": "Pertains to upstream bank account verification or linking, rather than active SIP mandate debit execution.",
      "researchImplication": "Upstream onboarding friction; does not substantiate H1 involuntary discontinuation after SIP creation."
    }
  },
  {
    "id": "IND-45142",
    "originalRow": 45142,
    "rating": 1,
    "reviewText": "Useless app can't buy us stock even funding $540...so many problems facing after change mobile... First lost us stock account after raising complent account displayed but can't link sbm bank account link problem pending can't deposit ammount from sbm bank account to US stock account...and now can't buy us stock...just try to change mobile..",
    "reviewDate": "2022-02-28 21:28",
    "foundHelpful": 2,
    "sourcePlatform": "Google Play Store",
    "sourceProvenance": "Imported INDMoney app review dataset",
    "sourceReference": "INDMoney Review Row #45142",
    "preliminaryKeywordSignals": "Bank account linking for investment",
    "triagePriority": "Review \u2013 related keyword, H1 fit uncertain",
    "humanReviewStatus": "pending",
    "humanCategories": [],
    "humanEvidenceStrength": "UNASSIGNED",
    "researcherNotes": "",
    "reviewedAt": null,
    "reviewedBy": null,
    "aiSuggestion": {
      "categories": [
        "Bank account linking problem"
      ],
      "evidenceStrength": "INSUFFICIENT",
      "supportingExcerpt": "First lost us stock account after raising complent account displayed but can't link sbm bank account link problem pending can't deposit ammount from sbm bank account to US stock account",
      "explanation": "Pertains to upstream bank account verification or linking, rather than active SIP mandate debit execution.",
      "researchImplication": "Upstream onboarding friction; does not substantiate H1 involuntary discontinuation after SIP creation."
    }
  },
  {
    "id": "IND-45425",
    "originalRow": 45425,
    "rating": 1,
    "reviewText": "Really Worst app. Main problem is no customer care or support available for this app. Most of the bank accounts are not linking with this app. It will tell you that refer to a friend and earn points or shares and it will never give you anything. And of u float a query and you never going to get an answer.",
    "reviewDate": "2022-02-23 12:46",
    "foundHelpful": 46,
    "sourcePlatform": "Google Play Store",
    "sourceProvenance": "Imported INDMoney app review dataset",
    "sourceReference": "INDMoney Review Row #45425",
    "preliminaryKeywordSignals": "Bank account linking for investment",
    "triagePriority": "Review \u2013 related keyword, H1 fit uncertain",
    "humanReviewStatus": "pending",
    "humanCategories": [],
    "humanEvidenceStrength": "UNASSIGNED",
    "researcherNotes": "",
    "reviewedAt": null,
    "reviewedBy": null,
    "aiSuggestion": {
      "categories": [
        "Bank account linking problem"
      ],
      "evidenceStrength": "INSUFFICIENT",
      "supportingExcerpt": "Most of the bank accounts are not linking with this app",
      "explanation": "Pertains to upstream bank account verification or linking, rather than active SIP mandate debit execution.",
      "researchImplication": "Upstream onboarding friction; does not substantiate H1 involuntary discontinuation after SIP creation."
    }
  },
  {
    "id": "IND-45630",
    "originalRow": 45630,
    "rating": 1,
    "reviewText": "I have applied for IPO of adani Wilmar(on 1 jan 2022) and amount(\u20b914950) is deducted from my bank account through auto debit UPI app, and is showing IPO is allot to you, but it is not reflecting in my zerodha demat account portfolio. Please solve this.",
    "reviewDate": "2022-02-19 13:10",
    "foundHelpful": 1,
    "sourcePlatform": "Google Play Store",
    "sourceProvenance": "Imported INDMoney app review dataset",
    "sourceReference": "INDMoney Review Row #45630",
    "preliminaryKeywordSignals": "Bank account linking for investment",
    "triagePriority": "Review \u2013 related keyword, H1 fit uncertain",
    "humanReviewStatus": "pending",
    "humanCategories": [],
    "humanEvidenceStrength": "UNASSIGNED",
    "researcherNotes": "",
    "reviewedAt": null,
    "reviewedBy": null,
    "aiSuggestion": {
      "categories": [
        "NACH / AutoPay issue",
        "Bank account linking problem"
      ],
      "evidenceStrength": "INDIRECT",
      "supportingExcerpt": "I have applied for IPO of adani Wilmar(on 1 jan 2022) and amount(\u20b914950) is deducted from my bank account through auto debit UPI app, and is showing IPO is allot to you, but it is not reflecting in my zerodha demat account portfolio",
      "explanation": "Mentions bank mandate or AutoPay friction, but does not explicitly confirm a mutual fund SIP was affected.",
      "researchImplication": "Supports broader friction around automated recurring debits, but requires confirmation of SIP context."
    }
  },
  {
    "id": "IND-46093",
    "originalRow": 46093,
    "rating": 1,
    "reviewText": "My money is not credited yet. I added money on us bank account and after that i wanna back that money it is debited from US bank but money didn't come yet in my bank.",
    "reviewDate": "2022-02-12 15:23",
    "foundHelpful": 0,
    "sourcePlatform": "Google Play Store",
    "sourceProvenance": "Imported INDMoney app review dataset",
    "sourceReference": "INDMoney Review Row #46093",
    "preliminaryKeywordSignals": "Bank account linking for investment",
    "triagePriority": "Review \u2013 related keyword, H1 fit uncertain",
    "humanReviewStatus": "pending",
    "humanCategories": [],
    "humanEvidenceStrength": "UNASSIGNED",
    "researcherNotes": "",
    "reviewedAt": null,
    "reviewedBy": null,
    "aiSuggestion": {
      "categories": [
        "Bank account linking problem"
      ],
      "evidenceStrength": "INSUFFICIENT",
      "supportingExcerpt": "I added money on us bank account and after that i wanna back that money it is debited from US bank but money didn't come yet in my bank",
      "explanation": "Pertains to upstream bank account verification or linking, rather than active SIP mandate debit execution.",
      "researchImplication": "Upstream onboarding friction; does not substantiate H1 involuntary discontinuation after SIP creation."
    }
  },
  {
    "id": "IND-46183",
    "originalRow": 46183,
    "rating": 5,
    "reviewText": "But bank account linked problem",
    "reviewDate": "2022-02-11 07:19",
    "foundHelpful": 0,
    "sourcePlatform": "Google Play Store",
    "sourceProvenance": "Imported INDMoney app review dataset",
    "sourceReference": "INDMoney Review Row #46183",
    "preliminaryKeywordSignals": "Bank account linking for investment",
    "triagePriority": "Review \u2013 related keyword, H1 fit uncertain",
    "humanReviewStatus": "pending",
    "humanCategories": [],
    "humanEvidenceStrength": "UNASSIGNED",
    "researcherNotes": "",
    "reviewedAt": null,
    "reviewedBy": null,
    "aiSuggestion": {
      "categories": [
        "Bank account linking problem"
      ],
      "evidenceStrength": "INSUFFICIENT",
      "supportingExcerpt": "But bank account linked problem",
      "explanation": "Pertains to upstream bank account verification or linking, rather than active SIP mandate debit execution.",
      "researchImplication": "Upstream onboarding friction; does not substantiate H1 involuntary discontinuation after SIP creation."
    }
  },
  {
    "id": "IND-46316",
    "originalRow": 46316,
    "rating": 4,
    "reviewText": "You are very good but make some improvements in it like only ICICI Bank account can be linked in it, if someone does not have ICICI Bank account then how will he invest?",
    "reviewDate": "2022-02-09 15:11",
    "foundHelpful": 0,
    "sourcePlatform": "Google Play Store",
    "sourceProvenance": "Imported INDMoney app review dataset",
    "sourceReference": "INDMoney Review Row #46316",
    "preliminaryKeywordSignals": "Bank account linking for investment",
    "triagePriority": "Review \u2013 related keyword, H1 fit uncertain",
    "humanReviewStatus": "pending",
    "humanCategories": [],
    "humanEvidenceStrength": "UNASSIGNED",
    "researcherNotes": "",
    "reviewedAt": null,
    "reviewedBy": null,
    "aiSuggestion": {
      "categories": [
        "Bank account linking problem"
      ],
      "evidenceStrength": "INSUFFICIENT",
      "supportingExcerpt": "You are very good but make some improvements in it like only ICICI Bank account can be linked in it, if someone does not have ICICI Bank account then how will he invest",
      "explanation": "Pertains to upstream bank account verification or linking, rather than active SIP mandate debit execution.",
      "researchImplication": "Upstream onboarding friction; does not substantiate H1 involuntary discontinuation after SIP creation."
    }
  },
  {
    "id": "IND-46613",
    "originalRow": 46613,
    "rating": 3,
    "reviewText": "Nice app but how the hell do i add money if i dont have the bank account the app supports. Alternatives like gpay etc. Should be available to add money.",
    "reviewDate": "2022-02-04 16:34",
    "foundHelpful": 0,
    "sourcePlatform": "Google Play Store",
    "sourceProvenance": "Imported INDMoney app review dataset",
    "sourceReference": "INDMoney Review Row #46613",
    "preliminaryKeywordSignals": "Bank account linking for investment",
    "triagePriority": "Review \u2013 related keyword, H1 fit uncertain",
    "humanReviewStatus": "pending",
    "humanCategories": [],
    "humanEvidenceStrength": "UNASSIGNED",
    "researcherNotes": "",
    "reviewedAt": null,
    "reviewedBy": null,
    "aiSuggestion": {
      "categories": [
        "Bank account linking problem"
      ],
      "evidenceStrength": "INSUFFICIENT",
      "supportingExcerpt": "Nice app but how the hell do i add money if i dont have the bank account the app supports",
      "explanation": "Pertains to upstream bank account verification or linking, rather than active SIP mandate debit execution.",
      "researchImplication": "Upstream onboarding friction; does not substantiate H1 involuntary discontinuation after SIP creation."
    }
  },
  {
    "id": "IND-46721",
    "originalRow": 46721,
    "rating": 3,
    "reviewText": "Provide real time stock market updates in the home menu and most importantly give us the freedom to modify the SIP amounts after 1st instalments.",
    "reviewDate": "2022-02-02 21:41",
    "foundHelpful": 0,
    "sourcePlatform": "Google Play Store",
    "sourceProvenance": "Imported INDMoney app review dataset",
    "sourceReference": "INDMoney Review Row #46721",
    "preliminaryKeywordSignals": "SIP instalment / SIP debit / SIP payment",
    "triagePriority": "Review \u2013 related keyword, H1 fit uncertain",
    "humanReviewStatus": "pending",
    "humanCategories": [],
    "humanEvidenceStrength": "UNASSIGNED",
    "researcherNotes": "",
    "reviewedAt": null,
    "reviewedBy": null,
    "aiSuggestion": {
      "categories": [
        "SIP instalment debit failure"
      ],
      "evidenceStrength": "DIRECT",
      "supportingExcerpt": "Provide real time stock market updates in the home menu and most importantly give us the freedom to modify the SIP amounts after 1st instalments",
      "explanation": "Review explicitly describes a mutual fund SIP instalment or mandate debit failure.",
      "researchImplication": "Directly substantiates H1: user experienced unexpected payment failure during active SIP cycle."
    }
  },
  {
    "id": "IND-47053",
    "originalRow": 47053,
    "rating": 1,
    "reviewText": "Pathetic experience from installation day. Good app, poor interface. Lost the money deposited to account, debit sms received today, without any transaction being done from my end. Rewards not received for adding money, support number for SBM bank account doesn't work. Where should the customer go ??",
    "reviewDate": "2022-01-28 15:28",
    "foundHelpful": 3,
    "sourcePlatform": "Google Play Store",
    "sourceProvenance": "Imported INDMoney app review dataset",
    "sourceReference": "INDMoney Review Row #47053",
    "preliminaryKeywordSignals": "Bank account linking for investment",
    "triagePriority": "Review \u2013 related keyword, H1 fit uncertain",
    "humanReviewStatus": "pending",
    "humanCategories": [],
    "humanEvidenceStrength": "UNASSIGNED",
    "researcherNotes": "",
    "reviewedAt": null,
    "reviewedBy": null,
    "aiSuggestion": {
      "categories": [
        "Bank account linking problem"
      ],
      "evidenceStrength": "INSUFFICIENT",
      "supportingExcerpt": "Lost the money deposited to account, debit sms received today, without any transaction being done from my end",
      "explanation": "Pertains to upstream bank account verification or linking, rather than active SIP mandate debit execution.",
      "researchImplication": "Upstream onboarding friction; does not substantiate H1 involuntary discontinuation after SIP creation."
    }
  },
  {
    "id": "IND-47216",
    "originalRow": 47216,
    "rating": 2,
    "reviewText": "My bank account was not adding on it \ud83d\ude1e pls try to solve this problem quickly",
    "reviewDate": "2022-01-26 11:29",
    "foundHelpful": 0,
    "sourcePlatform": "Google Play Store",
    "sourceProvenance": "Imported INDMoney app review dataset",
    "sourceReference": "INDMoney Review Row #47216",
    "preliminaryKeywordSignals": "Bank account linking for investment",
    "triagePriority": "Review \u2013 related keyword, H1 fit uncertain",
    "humanReviewStatus": "pending",
    "humanCategories": [],
    "humanEvidenceStrength": "UNASSIGNED",
    "researcherNotes": "",
    "reviewedAt": null,
    "reviewedBy": null,
    "aiSuggestion": {
      "categories": [
        "Bank account linking problem"
      ],
      "evidenceStrength": "INSUFFICIENT",
      "supportingExcerpt": "My bank account was not adding on it \ud83d\ude1e pls try to solve this problem quickly",
      "explanation": "Pertains to upstream bank account verification or linking, rather than active SIP mandate debit execution.",
      "researchImplication": "Upstream onboarding friction; does not substantiate H1 involuntary discontinuation after SIP creation."
    }
  },
  {
    "id": "IND-47676",
    "originalRow": 47676,
    "rating": 1,
    "reviewText": "@INDmoneyApp I added money from my bank account to my @INDmoneyApp but my money was deducted from bank account and money did not come in @INDmoneyApp, I am mailing again and again but there is no solution to my problem, please Help me, thanks.",
    "reviewDate": "2022-01-18 22:12",
    "foundHelpful": 0,
    "sourcePlatform": "Google Play Store",
    "sourceProvenance": "Imported INDMoney app review dataset",
    "sourceReference": "INDMoney Review Row #47676",
    "preliminaryKeywordSignals": "Bank account linking for investment",
    "triagePriority": "Review \u2013 related keyword, H1 fit uncertain",
    "humanReviewStatus": "pending",
    "humanCategories": [],
    "humanEvidenceStrength": "UNASSIGNED",
    "researcherNotes": "",
    "reviewedAt": null,
    "reviewedBy": null,
    "aiSuggestion": {
      "categories": [
        "Bank account linking problem"
      ],
      "evidenceStrength": "INSUFFICIENT",
      "supportingExcerpt": "@INDmoneyApp I added money from my bank account to my @INDmoneyApp but my money was deducted from bank account and money did not come in @INDmoneyApp, I am mailing again and again but there is no solution to my problem, please Help me, thanks",
      "explanation": "Pertains to upstream bank account verification or linking, rather than active SIP mandate debit execution.",
      "researchImplication": "Upstream onboarding friction; does not substantiate H1 involuntary discontinuation after SIP creation."
    }
  },
  {
    "id": "IND-47971",
    "originalRow": 47971,
    "rating": 1,
    "reviewText": "Don't link ur Bank account details with it . I Just got mugged by 1.30lakh. they have to work on the secure network yet. Don't trust this app",
    "reviewDate": "2022-01-14 20:26",
    "foundHelpful": 0,
    "sourcePlatform": "Google Play Store",
    "sourceProvenance": "Imported INDMoney app review dataset",
    "sourceReference": "INDMoney Review Row #47971",
    "preliminaryKeywordSignals": "Bank account linking for investment",
    "triagePriority": "Review \u2013 related keyword, H1 fit uncertain",
    "humanReviewStatus": "pending",
    "humanCategories": [],
    "humanEvidenceStrength": "UNASSIGNED",
    "researcherNotes": "",
    "reviewedAt": null,
    "reviewedBy": null,
    "aiSuggestion": {
      "categories": [
        "Bank account linking problem"
      ],
      "evidenceStrength": "INSUFFICIENT",
      "supportingExcerpt": "Don't link ur Bank account details with it",
      "explanation": "Pertains to upstream bank account verification or linking, rather than active SIP mandate debit execution.",
      "researchImplication": "Upstream onboarding friction; does not substantiate H1 involuntary discontinuation after SIP creation."
    }
  },
  {
    "id": "IND-48063",
    "originalRow": 48063,
    "rating": 1,
    "reviewText": "Doesn't work in UAE. Can't add additional bank accounts.",
    "reviewDate": "2022-01-13 14:19",
    "foundHelpful": 0,
    "sourcePlatform": "Google Play Store",
    "sourceProvenance": "Imported INDMoney app review dataset",
    "sourceReference": "INDMoney Review Row #48063",
    "preliminaryKeywordSignals": "Bank account linking for investment",
    "triagePriority": "Review \u2013 related keyword, H1 fit uncertain",
    "humanReviewStatus": "pending",
    "humanCategories": [],
    "humanEvidenceStrength": "UNASSIGNED",
    "researcherNotes": "",
    "reviewedAt": null,
    "reviewedBy": null,
    "aiSuggestion": {
      "categories": [
        "Bank account linking problem"
      ],
      "evidenceStrength": "INSUFFICIENT",
      "supportingExcerpt": "Can't add additional bank accounts",
      "explanation": "Pertains to upstream bank account verification or linking, rather than active SIP mandate debit execution.",
      "researchImplication": "Upstream onboarding friction; does not substantiate H1 involuntary discontinuation after SIP creation."
    }
  },
  {
    "id": "IND-48321",
    "originalRow": 48321,
    "rating": 4,
    "reviewText": "Nice app and awesome idea to put all investment and liabilities on a single platform. Can we add these features also- 1. Autoscanning and update PPF investment thru SMS. It's manual now. 2. Credit card expenses and smart advisory to save hidden charges.Credit cards payment reminder. 3. Consolidated graph of all investment and liabilities on dashboard. 4. Track motor car and bike insurance also 5. Create personal budget feature. Bug: Saving bank account auto scan should not add PPF ac in SB",
    "reviewDate": "2022-01-10 11:04",
    "foundHelpful": 46,
    "sourcePlatform": "Google Play Store",
    "sourceProvenance": "Imported INDMoney app review dataset",
    "sourceReference": "INDMoney Review Row #48321",
    "preliminaryKeywordSignals": "Bank account linking for investment",
    "triagePriority": "Review \u2013 related keyword, H1 fit uncertain",
    "humanReviewStatus": "pending",
    "humanCategories": [],
    "humanEvidenceStrength": "UNASSIGNED",
    "researcherNotes": "",
    "reviewedAt": null,
    "reviewedBy": null,
    "aiSuggestion": {
      "categories": [
        "Bank account linking problem"
      ],
      "evidenceStrength": "INSUFFICIENT",
      "supportingExcerpt": "Bug: Saving bank account auto scan should not add PPF ac in SB",
      "explanation": "Pertains to upstream bank account verification or linking, rather than active SIP mandate debit execution.",
      "researchImplication": "Upstream onboarding friction; does not substantiate H1 involuntary discontinuation after SIP creation."
    }
  },
  {
    "id": "IND-48393",
    "originalRow": 48393,
    "rating": 1,
    "reviewText": "Not able to buy membership, It keeps on redirecting and then payment failed",
    "reviewDate": "2022-01-09 10:16",
    "foundHelpful": 3,
    "sourcePlatform": "Google Play Store",
    "sourceProvenance": "Imported INDMoney app review dataset",
    "sourceReference": "INDMoney Review Row #48393",
    "preliminaryKeywordSignals": "Payment failure / pending payment",
    "triagePriority": "Review \u2013 related keyword, H1 fit uncertain",
    "humanReviewStatus": "pending",
    "humanCategories": [],
    "humanEvidenceStrength": "UNASSIGNED",
    "researcherNotes": "",
    "reviewedAt": null,
    "reviewedBy": null,
    "aiSuggestion": {
      "categories": [
        "General payment issue"
      ],
      "evidenceStrength": "INSUFFICIENT",
      "supportingExcerpt": "Not able to buy membership, It keeps on redirecting and then payment failed",
      "explanation": "Review describes general app service, withdrawal, or unrelated payment issue without establishing SIP mandate failure.",
      "researchImplication": "Does not support H1 hypothesis."
    }
  },
  {
    "id": "IND-48489",
    "originalRow": 48489,
    "rating": 1,
    "reviewText": "Nice strategy to make auto payment under a paid plan. uninstalling the app",
    "reviewDate": "2022-01-07 16:29",
    "foundHelpful": 0,
    "sourcePlatform": "Google Play Store",
    "sourceProvenance": "Imported INDMoney app review dataset",
    "sourceReference": "INDMoney Review Row #48489",
    "preliminaryKeywordSignals": "Bank mandate / NACH / e-mandate / AutoPay",
    "triagePriority": "Review \u2013 related keyword, H1 fit uncertain",
    "humanReviewStatus": "pending",
    "humanCategories": [],
    "humanEvidenceStrength": "UNASSIGNED",
    "researcherNotes": "",
    "reviewedAt": null,
    "reviewedBy": null,
    "aiSuggestion": {
      "categories": [
        "NACH / AutoPay issue"
      ],
      "evidenceStrength": "INDIRECT",
      "supportingExcerpt": "Nice strategy to make auto payment under a paid plan",
      "explanation": "Mentions bank mandate or AutoPay friction, but does not explicitly confirm a mutual fund SIP was affected.",
      "researchImplication": "Supports broader friction around automated recurring debits, but requires confirmation of SIP context."
    }
  },
  {
    "id": "IND-48715",
    "originalRow": 48715,
    "rating": 1,
    "reviewText": "Very slow app even updated. I am not able to track my bank accounts and when I try to add account app said system has already bank added and options are very difficult to use regarding Bank balance tracking. If your product is not friendly with customer( slow buggy) then in spending on advertising sponsoring YouTube influencers to promote the app doesn't make any sense if the end customer is not happy I am satisfied.",
    "reviewDate": "2022-01-03 19:24",
    "foundHelpful": 4,
    "sourcePlatform": "Google Play Store",
    "sourceProvenance": "Imported INDMoney app review dataset",
    "sourceReference": "INDMoney Review Row #48715",
    "preliminaryKeywordSignals": "Bank account linking for investment",
    "triagePriority": "Review \u2013 related keyword, H1 fit uncertain",
    "humanReviewStatus": "pending",
    "humanCategories": [],
    "humanEvidenceStrength": "UNASSIGNED",
    "researcherNotes": "",
    "reviewedAt": null,
    "reviewedBy": null,
    "aiSuggestion": {
      "categories": [
        "Bank account linking problem"
      ],
      "evidenceStrength": "INSUFFICIENT",
      "supportingExcerpt": "I am not able to track my bank accounts and when I try to add account app said system has already bank added and options are very difficult to use regarding Bank balance tracking",
      "explanation": "Pertains to upstream bank account verification or linking, rather than active SIP mandate debit execution.",
      "researchImplication": "Upstream onboarding friction; does not substantiate H1 involuntary discontinuation after SIP creation."
    }
  },
  {
    "id": "IND-48877",
    "originalRow": 48877,
    "rating": 1,
    "reviewText": "Only for people who have icici and hdfc bank account. No option to add money from other banks like citi/axis. There's a paper work which i need to do and submit to bank. And it's gonna take 5-7 days. Cant wait for so long in order to buy US stocks. Would think of deleting my account.",
    "reviewDate": "2021-12-30 23:20",
    "foundHelpful": 0,
    "sourcePlatform": "Google Play Store",
    "sourceProvenance": "Imported INDMoney app review dataset",
    "sourceReference": "INDMoney Review Row #48877",
    "preliminaryKeywordSignals": "Bank account linking for investment",
    "triagePriority": "Review \u2013 related keyword, H1 fit uncertain",
    "humanReviewStatus": "pending",
    "humanCategories": [],
    "humanEvidenceStrength": "UNASSIGNED",
    "researcherNotes": "",
    "reviewedAt": null,
    "reviewedBy": null,
    "aiSuggestion": {
      "categories": [
        "Bank account linking problem"
      ],
      "evidenceStrength": "INSUFFICIENT",
      "supportingExcerpt": "Only for people who have icici and hdfc bank account",
      "explanation": "Pertains to upstream bank account verification or linking, rather than active SIP mandate debit execution.",
      "researchImplication": "Upstream onboarding friction; does not substantiate H1 involuntary discontinuation after SIP creation."
    }
  },
  {
    "id": "IND-48907",
    "originalRow": 48907,
    "rating": 1,
    "reviewText": "1.) It's not allowing us to add more than 5 Bank accounts in the app. How can it calculate my net worth if I am having my money in 6 different bank accounts? 2.) It's not able to auto-track and fetch my Indian Stocks which I had bought from Upstox, Zerodha,... 3.) It's not able to fetch / track my Crypto Currency and inturn asking me to enter each crypto currency name , buy price , date, platform name . It's not reliable to enter all the hundreds of Crypto Currencies we bought every day.",
    "reviewDate": "2021-12-30 13:29",
    "foundHelpful": 1,
    "sourcePlatform": "Google Play Store",
    "sourceProvenance": "Imported INDMoney app review dataset",
    "sourceReference": "INDMoney Review Row #48907",
    "preliminaryKeywordSignals": "Bank account linking for investment",
    "triagePriority": "Review \u2013 related keyword, H1 fit uncertain",
    "humanReviewStatus": "pending",
    "humanCategories": [],
    "humanEvidenceStrength": "UNASSIGNED",
    "researcherNotes": "",
    "reviewedAt": null,
    "reviewedBy": null,
    "aiSuggestion": {
      "categories": [
        "Bank account linking problem"
      ],
      "evidenceStrength": "INSUFFICIENT",
      "supportingExcerpt": ") It's not allowing us to add more than 5 Bank accounts in the app",
      "explanation": "Pertains to upstream bank account verification or linking, rather than active SIP mandate debit execution.",
      "researchImplication": "Upstream onboarding friction; does not substantiate H1 involuntary discontinuation after SIP creation."
    }
  },
  {
    "id": "IND-49159",
    "originalRow": 49159,
    "rating": 3,
    "reviewText": "Can't link my canara bank account from mumbai kalina plz fix it",
    "reviewDate": "2021-12-25 18:13",
    "foundHelpful": 0,
    "sourcePlatform": "Google Play Store",
    "sourceProvenance": "Imported INDMoney app review dataset",
    "sourceReference": "INDMoney Review Row #49159",
    "preliminaryKeywordSignals": "Bank account linking for investment",
    "triagePriority": "Review \u2013 related keyword, H1 fit uncertain",
    "humanReviewStatus": "pending",
    "humanCategories": [],
    "humanEvidenceStrength": "UNASSIGNED",
    "researcherNotes": "",
    "reviewedAt": null,
    "reviewedBy": null,
    "aiSuggestion": {
      "categories": [
        "Bank account linking problem"
      ],
      "evidenceStrength": "INSUFFICIENT",
      "supportingExcerpt": "Can't link my canara bank account from mumbai kalina plz fix it",
      "explanation": "Pertains to upstream bank account verification or linking, rather than active SIP mandate debit execution.",
      "researchImplication": "Upstream onboarding friction; does not substantiate H1 involuntary discontinuation after SIP creation."
    }
  },
  {
    "id": "IND-49200",
    "originalRow": 49200,
    "rating": 1,
    "reviewText": "Pathetic app... Doesn't let me upgard to gold even if have e mandate enabled.. they took money for one bank emandate approval but the emandate didn't go through. I am tired of its hanging pages. Payment gateways dont even work properly... your money will be deducted and still you will not get the service through and the processing time is never ending. This is totally mis-leading app.",
    "reviewDate": "2021-12-24 15:38",
    "foundHelpful": 125,
    "sourcePlatform": "Google Play Store",
    "sourceProvenance": "Imported INDMoney app review dataset",
    "sourceReference": "INDMoney Review Row #49200",
    "preliminaryKeywordSignals": "Bank mandate / NACH / e-mandate / AutoPay",
    "triagePriority": "Review \u2013 related keyword, H1 fit uncertain",
    "humanReviewStatus": "pending",
    "humanCategories": [],
    "humanEvidenceStrength": "UNASSIGNED",
    "researcherNotes": "",
    "reviewedAt": null,
    "reviewedBy": null,
    "aiSuggestion": {
      "categories": [
        "General payment issue"
      ],
      "evidenceStrength": "INSUFFICIENT",
      "supportingExcerpt": "Doesn't let me upgard to gold even if have e mandate enabled",
      "explanation": "Review describes general app service, withdrawal, or unrelated payment issue without establishing SIP mandate failure.",
      "researchImplication": "Does not support H1 hypothesis."
    }
  },
  {
    "id": "IND-50613",
    "originalRow": 50613,
    "rating": 1,
    "reviewText": "MY UPI COMPLETE PAYMENT . But it's show failed My 10k stuck on this",
    "reviewDate": "2021-11-20 21:57",
    "foundHelpful": 0,
    "sourcePlatform": "Google Play Store",
    "sourceProvenance": "Imported INDMoney app review dataset",
    "sourceReference": "INDMoney Review Row #50613",
    "preliminaryKeywordSignals": "Payment failure / pending payment",
    "triagePriority": "Review \u2013 related keyword, H1 fit uncertain",
    "humanReviewStatus": "pending",
    "humanCategories": [],
    "humanEvidenceStrength": "UNASSIGNED",
    "researcherNotes": "",
    "reviewedAt": null,
    "reviewedBy": null,
    "aiSuggestion": {
      "categories": [
        "General payment issue"
      ],
      "evidenceStrength": "INSUFFICIENT",
      "supportingExcerpt": "But it's show failed My 10k stuck on this",
      "explanation": "Review describes general app service, withdrawal, or unrelated payment issue without establishing SIP mandate failure.",
      "researchImplication": "Does not support H1 hypothesis."
    }
  },
  {
    "id": "IND-50777",
    "originalRow": 50777,
    "rating": 1,
    "reviewText": "This application is not trustable because our all financial details, text messages, transaction message, bank account balance credit card debit card equity mutual fund insurance policy all in application automatically linked before 100% KYC done.",
    "reviewDate": "2021-11-18 00:16",
    "foundHelpful": 0,
    "sourcePlatform": "Google Play Store",
    "sourceProvenance": "Imported INDMoney app review dataset",
    "sourceReference": "INDMoney Review Row #50777",
    "preliminaryKeywordSignals": "Bank account linking for investment",
    "triagePriority": "Review \u2013 related keyword, H1 fit uncertain",
    "humanReviewStatus": "pending",
    "humanCategories": [],
    "humanEvidenceStrength": "UNASSIGNED",
    "researcherNotes": "",
    "reviewedAt": null,
    "reviewedBy": null,
    "aiSuggestion": {
      "categories": [
        "Bank account linking problem"
      ],
      "evidenceStrength": "INSUFFICIENT",
      "supportingExcerpt": "This application is not trustable because our all financial details, text messages, transaction message, bank account balance credit card debit card equity mutual fund insurance policy all in application automatically linked before 100% KYC done",
      "explanation": "Pertains to upstream bank account verification or linking, rather than active SIP mandate debit execution.",
      "researchImplication": "Upstream onboarding friction; does not substantiate H1 involuntary discontinuation after SIP creation."
    }
  },
  {
    "id": "IND-50983",
    "originalRow": 50983,
    "rating": 5,
    "reviewText": "Sooper application. But can't able to do auto pay option till today even after mailed to helpdesk",
    "reviewDate": "2021-11-13 19:03",
    "foundHelpful": 0,
    "sourcePlatform": "Google Play Store",
    "sourceProvenance": "Imported INDMoney app review dataset",
    "sourceReference": "INDMoney Review Row #50983",
    "preliminaryKeywordSignals": "Bank mandate / NACH / e-mandate / AutoPay",
    "triagePriority": "Review \u2013 related keyword, H1 fit uncertain",
    "humanReviewStatus": "pending",
    "humanCategories": [],
    "humanEvidenceStrength": "UNASSIGNED",
    "researcherNotes": "",
    "reviewedAt": null,
    "reviewedBy": null,
    "aiSuggestion": {
      "categories": [
        "NACH / AutoPay issue"
      ],
      "evidenceStrength": "INDIRECT",
      "supportingExcerpt": "But can't able to do auto pay option till today even after mailed to helpdesk",
      "explanation": "Mentions bank mandate or AutoPay friction, but does not explicitly confirm a mutual fund SIP was affected.",
      "researchImplication": "Supports broader friction around automated recurring debits, but requires confirmation of SIP context."
    }
  },
  {
    "id": "IND-51009",
    "originalRow": 51009,
    "rating": 5,
    "reviewText": "Awesome platform... But not all bank account are eligible to add online money in this platform... Like SBI... Please make it eligible \ud83d\ude4f\ud83d\ude4f\ud83d\ude4f",
    "reviewDate": "2021-11-13 11:01",
    "foundHelpful": 0,
    "sourcePlatform": "Google Play Store",
    "sourceProvenance": "Imported INDMoney app review dataset",
    "sourceReference": "INDMoney Review Row #51009",
    "preliminaryKeywordSignals": "Bank account linking for investment",
    "triagePriority": "Review \u2013 related keyword, H1 fit uncertain",
    "humanReviewStatus": "pending",
    "humanCategories": [],
    "humanEvidenceStrength": "UNASSIGNED",
    "researcherNotes": "",
    "reviewedAt": null,
    "reviewedBy": null,
    "aiSuggestion": {
      "categories": [
        "Bank account linking problem"
      ],
      "evidenceStrength": "INSUFFICIENT",
      "supportingExcerpt": "But not all bank account are eligible to add online money in this platform",
      "explanation": "Pertains to upstream bank account verification or linking, rather than active SIP mandate debit execution.",
      "researchImplication": "Upstream onboarding friction; does not substantiate H1 involuntary discontinuation after SIP creation."
    }
  },
  {
    "id": "IND-51338",
    "originalRow": 51338,
    "rating": 4,
    "reviewText": "I have placed an SIP order for a mutual fund and the app just doesn't update the status of my transactions! And I have clarified numerous times that I'm unable to verify auto pay via tha app still they keep telling the same procedure which is so unhelpful!! Why is it so difficult to address a simple concern. Update:- Query has been resolved. Response time was quick..I was contacted immediately after raising my concern. Thanks for the prompt response!",
    "reviewDate": "2021-11-05 18:01",
    "foundHelpful": 164,
    "sourcePlatform": "Google Play Store",
    "sourceProvenance": "Imported INDMoney app review dataset",
    "sourceReference": "INDMoney Review Row #51338",
    "preliminaryKeywordSignals": "Bank mandate / NACH / e-mandate / AutoPay",
    "triagePriority": "High \u2013 explicit SIP + mandate/AutoPay language",
    "humanReviewStatus": "pending",
    "humanCategories": [],
    "humanEvidenceStrength": "UNASSIGNED",
    "researcherNotes": "",
    "reviewedAt": null,
    "reviewedBy": null,
    "aiSuggestion": {
      "categories": [
        "NACH / AutoPay issue"
      ],
      "evidenceStrength": "INDIRECT",
      "supportingExcerpt": "I have placed an SIP order for a mutual fund and the app just doesn't update the status of my transactions",
      "explanation": "Mentions bank mandate or AutoPay friction, but does not explicitly confirm a mutual fund SIP was affected.",
      "researchImplication": "Supports broader friction around automated recurring debits, but requires confirmation of SIP context."
    }
  },
  {
    "id": "IND-51705",
    "originalRow": 51705,
    "rating": 1,
    "reviewText": "Worst.. App.. Stated sip and but not deducted properly then cancelled but.. The sip not cancelled and. Bcoz.. Of this my accout is charged 500rs for 5 months.. Plz dont download",
    "reviewDate": "2021-10-27 14:00",
    "foundHelpful": 0,
    "sourcePlatform": "Google Play Store",
    "sourceProvenance": "Imported INDMoney app review dataset",
    "sourceReference": "INDMoney Review Row #51705",
    "preliminaryKeywordSignals": "SIP instalment / SIP debit / SIP payment",
    "triagePriority": "High \u2013 explicit SIP + mandate/AutoPay language",
    "humanReviewStatus": "pending",
    "humanCategories": [],
    "humanEvidenceStrength": "UNASSIGNED",
    "researcherNotes": "",
    "reviewedAt": null,
    "reviewedBy": null,
    "aiSuggestion": {
      "categories": [
        "SIP instalment debit failure"
      ],
      "evidenceStrength": "DIRECT",
      "supportingExcerpt": "Stated sip and but not deducted properly then cancelled but",
      "explanation": "Review explicitly describes a mutual fund SIP instalment or mandate debit failure.",
      "researchImplication": "Directly substantiates H1: user experienced unexpected payment failure during active SIP cycle."
    }
  },
  {
    "id": "IND-52049",
    "originalRow": 52049,
    "rating": 1,
    "reviewText": "Worst app...after issue has been reported many times till not fixed. Inaccurate data , it's has been 2 days after adding bank account, still not added Bad experience They delete review also.",
    "reviewDate": "2021-10-18 07:17",
    "foundHelpful": 7,
    "sourcePlatform": "Google Play Store",
    "sourceProvenance": "Imported INDMoney app review dataset",
    "sourceReference": "INDMoney Review Row #52049",
    "preliminaryKeywordSignals": "Bank account linking for investment",
    "triagePriority": "Review \u2013 related keyword, H1 fit uncertain",
    "humanReviewStatus": "pending",
    "humanCategories": [],
    "humanEvidenceStrength": "UNASSIGNED",
    "researcherNotes": "",
    "reviewedAt": null,
    "reviewedBy": null,
    "aiSuggestion": {
      "categories": [
        "Bank account linking problem"
      ],
      "evidenceStrength": "INSUFFICIENT",
      "supportingExcerpt": "Inaccurate data , it's has been 2 days after adding bank account, still not added Bad experience They delete review also",
      "explanation": "Pertains to upstream bank account verification or linking, rather than active SIP mandate debit execution.",
      "researchImplication": "Upstream onboarding friction; does not substantiate H1 involuntary discontinuation after SIP creation."
    }
  },
  {
    "id": "IND-52219",
    "originalRow": 52219,
    "rating": 1,
    "reviewText": "Sorry to say But Very Poor Support Service...... Wanted to trade in US stock market...... Tried to add fund, amount got transferred from my bank account but not showing in US wallet. Trying to contact support service for a week now, But no response or updates....... Very frustrating and annoying.",
    "reviewDate": "2021-10-14 10:52",
    "foundHelpful": 2,
    "sourcePlatform": "Google Play Store",
    "sourceProvenance": "Imported INDMoney app review dataset",
    "sourceReference": "INDMoney Review Row #52219",
    "preliminaryKeywordSignals": "Bank account linking for investment",
    "triagePriority": "Review \u2013 related keyword, H1 fit uncertain",
    "humanReviewStatus": "pending",
    "humanCategories": [],
    "humanEvidenceStrength": "UNASSIGNED",
    "researcherNotes": "",
    "reviewedAt": null,
    "reviewedBy": null,
    "aiSuggestion": {
      "categories": [
        "Bank account linking problem"
      ],
      "evidenceStrength": "INSUFFICIENT",
      "supportingExcerpt": "Tried to add fund, amount got transferred from my bank account but not showing in US wallet",
      "explanation": "Pertains to upstream bank account verification or linking, rather than active SIP mandate debit execution.",
      "researchImplication": "Upstream onboarding friction; does not substantiate H1 involuntary discontinuation after SIP creation."
    }
  },
  {
    "id": "IND-52320",
    "originalRow": 52320,
    "rating": 1,
    "reviewText": "I'm not able to add HDFC bank account..everytime I try to add it says User already added but it doesn't appear in banks added list ..Even if I check the banks details there is no account listed...I'm stuck with a dead app!! Now I deleted ind money account itself and added back again but my profile is not getting verified..it's been a week now",
    "reviewDate": "2021-10-11 21:02",
    "foundHelpful": 13,
    "sourcePlatform": "Google Play Store",
    "sourceProvenance": "Imported INDMoney app review dataset",
    "sourceReference": "INDMoney Review Row #52320",
    "preliminaryKeywordSignals": "Bank account linking for investment",
    "triagePriority": "Review \u2013 related keyword, H1 fit uncertain",
    "humanReviewStatus": "pending",
    "humanCategories": [],
    "humanEvidenceStrength": "UNASSIGNED",
    "researcherNotes": "",
    "reviewedAt": null,
    "reviewedBy": null,
    "aiSuggestion": {
      "categories": [
        "Bank account linking problem"
      ],
      "evidenceStrength": "INSUFFICIENT",
      "supportingExcerpt": "I'm not able to add HDFC bank account",
      "explanation": "Pertains to upstream bank account verification or linking, rather than active SIP mandate debit execution.",
      "researchImplication": "Upstream onboarding friction; does not substantiate H1 involuntary discontinuation after SIP creation."
    }
  },
  {
    "id": "IND-52341",
    "originalRow": 52341,
    "rating": 1,
    "reviewText": "Fraud, I've given only one standing instruction for SIP of 2000 rs and automatically I've been notified with 4 SIP and automatically they have shared the started date when I've not given any instruction. I'm asking for a callback instead of mail exchange but they are not doing that and asking me questions",
    "reviewDate": "2021-10-11 16:01",
    "foundHelpful": 0,
    "sourcePlatform": "Google Play Store",
    "sourceProvenance": "Imported INDMoney app review dataset",
    "sourceReference": "INDMoney Review Row #52341",
    "preliminaryKeywordSignals": "Bank mandate / NACH / e-mandate / AutoPay",
    "triagePriority": "Review \u2013 related keyword, H1 fit uncertain",
    "humanReviewStatus": "pending",
    "humanCategories": [],
    "humanEvidenceStrength": "UNASSIGNED",
    "researcherNotes": "",
    "reviewedAt": null,
    "reviewedBy": null,
    "aiSuggestion": {
      "categories": [
        "SIP setup issue"
      ],
      "evidenceStrength": "INSUFFICIENT",
      "supportingExcerpt": "Fraud, I've given only one standing instruction for SIP of 2000 rs and automatically I've been notified with 4 SIP and automatically they have shared the started date when I've not given any instruction",
      "explanation": "Review describes general app service, withdrawal, or unrelated payment issue without establishing SIP mandate failure.",
      "researchImplication": "Does not support H1 hypothesis."
    }
  },
  {
    "id": "IND-52454",
    "originalRow": 52454,
    "rating": 1,
    "reviewText": "Update as on 9th October: 'We are checking and BSE is working on it\". There is least concern about customer's issue. Most likey auto generated emails. Now I have missed my SIP's as well but they do not care. For two days I am trying to start MF SIP etc. SIP payment verification generation is failing everything I try. I have tried 20-30 times but no luck using more than 1 bank ac. Help section is also of no use. Raising a query also encounters 'something wrong happened' sort of message. 9 days and counting but no resolution yet....",
    "reviewDate": "2021-10-09 14:35",
    "foundHelpful": 130,
    "sourcePlatform": "Google Play Store",
    "sourceProvenance": "Imported INDMoney app review dataset",
    "sourceReference": "INDMoney Review Row #52454",
    "preliminaryKeywordSignals": "SIP instalment / SIP debit / SIP payment; Payment failure / pending payment",
    "triagePriority": "High \u2013 explicit SIP + mandate/AutoPay language",
    "humanReviewStatus": "pending",
    "humanCategories": [],
    "humanEvidenceStrength": "UNASSIGNED",
    "researcherNotes": "",
    "reviewedAt": null,
    "reviewedBy": null,
    "aiSuggestion": {
      "categories": [
        "SIP instalment debit failure",
        "SIP setup issue"
      ],
      "evidenceStrength": "DIRECT",
      "supportingExcerpt": "Now I have missed my SIP's as well but they do not care",
      "explanation": "Review explicitly describes a mutual fund SIP instalment or mandate debit failure.",
      "researchImplication": "Directly substantiates H1: user experienced unexpected payment failure during active SIP cycle."
    }
  },
  {
    "id": "IND-53243",
    "originalRow": 53243,
    "rating": 2,
    "reviewText": "It's been more than 3 weeks and I am still not to use the application. There is not customer service to speak to. Can't use it to link the bank account. I am few days from having it uninstalled and not recommend it.",
    "reviewDate": "2021-09-16 09:15",
    "foundHelpful": 1,
    "sourcePlatform": "Google Play Store",
    "sourceProvenance": "Imported INDMoney app review dataset",
    "sourceReference": "INDMoney Review Row #53243",
    "preliminaryKeywordSignals": "Bank account linking for investment",
    "triagePriority": "Review \u2013 related keyword, H1 fit uncertain",
    "humanReviewStatus": "pending",
    "humanCategories": [],
    "humanEvidenceStrength": "UNASSIGNED",
    "researcherNotes": "",
    "reviewedAt": null,
    "reviewedBy": null,
    "aiSuggestion": {
      "categories": [
        "Bank account linking problem"
      ],
      "evidenceStrength": "INSUFFICIENT",
      "supportingExcerpt": "Can't use it to link the bank account",
      "explanation": "Pertains to upstream bank account verification or linking, rather than active SIP mandate debit execution.",
      "researchImplication": "Upstream onboarding friction; does not substantiate H1 involuntary discontinuation after SIP creation."
    }
  },
  {
    "id": "IND-53545",
    "originalRow": 53545,
    "rating": 1,
    "reviewText": "Not at all user friendly. I tried doing some mutual fund but e mandate is not happening. I tried around 100 times for 4 different mutual funds. It ended up cancelling one after the other and unable to know the reason. I just shifted from scripbox to Indmoney as scripbox had regular mutual fund and I wanted to switch to direct mutual fund. Now I totally regret. They also don't update the saving bank amount correctly. There is a difference of 3-4k always.",
    "reviewDate": "2021-09-07 14:36",
    "foundHelpful": 19,
    "sourcePlatform": "Google Play Store",
    "sourceProvenance": "Imported INDMoney app review dataset",
    "sourceReference": "INDMoney Review Row #53545",
    "preliminaryKeywordSignals": "Bank mandate / NACH / e-mandate / AutoPay",
    "triagePriority": "Review \u2013 related keyword, H1 fit uncertain",
    "humanReviewStatus": "pending",
    "humanCategories": [],
    "humanEvidenceStrength": "UNASSIGNED",
    "researcherNotes": "",
    "reviewedAt": null,
    "reviewedBy": null,
    "aiSuggestion": {
      "categories": [
        "Bank mandate failure"
      ],
      "evidenceStrength": "INDIRECT",
      "supportingExcerpt": "I tried doing some mutual fund but e mandate is not happening",
      "explanation": "Mentions bank mandate or AutoPay friction, but does not explicitly confirm a mutual fund SIP was affected.",
      "researchImplication": "Supports broader friction around automated recurring debits, but requires confirmation of SIP context."
    }
  },
  {
    "id": "IND-53551",
    "originalRow": 53551,
    "rating": 3,
    "reviewText": "Great features but doesn't work. It should auto track if you have given the permission to read your messages. It still doesn't. Plus you can't add bank accounts that it has not detected. Invite to family doesn't work. If all the features work fine, this would definitely deserve a 5 star but now at the current condition it doesn't.",
    "reviewDate": "2021-09-07 12:27",
    "foundHelpful": 102,
    "sourcePlatform": "Google Play Store",
    "sourceProvenance": "Imported INDMoney app review dataset",
    "sourceReference": "INDMoney Review Row #53551",
    "preliminaryKeywordSignals": "Bank account linking for investment",
    "triagePriority": "Review \u2013 related keyword, H1 fit uncertain",
    "humanReviewStatus": "pending",
    "humanCategories": [],
    "humanEvidenceStrength": "UNASSIGNED",
    "researcherNotes": "",
    "reviewedAt": null,
    "reviewedBy": null,
    "aiSuggestion": {
      "categories": [
        "Bank account linking problem"
      ],
      "evidenceStrength": "INSUFFICIENT",
      "supportingExcerpt": "Plus you can't add bank accounts that it has not detected",
      "explanation": "Pertains to upstream bank account verification or linking, rather than active SIP mandate debit execution.",
      "researchImplication": "Upstream onboarding friction; does not substantiate H1 involuntary discontinuation after SIP creation."
    }
  },
  {
    "id": "IND-53591",
    "originalRow": 53591,
    "rating": 2,
    "reviewText": "Unable to add Fund from Bank account.. Always show Verity the bank account. But in Bank section Bank is already Added.",
    "reviewDate": "2021-09-06 12:52",
    "foundHelpful": 0,
    "sourcePlatform": "Google Play Store",
    "sourceProvenance": "Imported INDMoney app review dataset",
    "sourceReference": "INDMoney Review Row #53591",
    "preliminaryKeywordSignals": "Bank account linking for investment",
    "triagePriority": "Review \u2013 related keyword, H1 fit uncertain",
    "humanReviewStatus": "pending",
    "humanCategories": [],
    "humanEvidenceStrength": "UNASSIGNED",
    "researcherNotes": "",
    "reviewedAt": null,
    "reviewedBy": null,
    "aiSuggestion": {
      "categories": [
        "Bank account linking problem"
      ],
      "evidenceStrength": "INSUFFICIENT",
      "supportingExcerpt": "Unable to add Fund from Bank account",
      "explanation": "Pertains to upstream bank account verification or linking, rather than active SIP mandate debit execution.",
      "researchImplication": "Upstream onboarding friction; does not substantiate H1 involuntary discontinuation after SIP creation."
    }
  },
  {
    "id": "IND-53600",
    "originalRow": 53600,
    "rating": 5,
    "reviewText": "Good one to get an overall summary. The bank account link should be more direct.",
    "reviewDate": "2021-09-06 10:55",
    "foundHelpful": 1,
    "sourcePlatform": "Google Play Store",
    "sourceProvenance": "Imported INDMoney app review dataset",
    "sourceReference": "INDMoney Review Row #53600",
    "preliminaryKeywordSignals": "Bank account linking for investment",
    "triagePriority": "Review \u2013 related keyword, H1 fit uncertain",
    "humanReviewStatus": "pending",
    "humanCategories": [],
    "humanEvidenceStrength": "UNASSIGNED",
    "researcherNotes": "",
    "reviewedAt": null,
    "reviewedBy": null,
    "aiSuggestion": {
      "categories": [
        "Bank account linking problem"
      ],
      "evidenceStrength": "INSUFFICIENT",
      "supportingExcerpt": "The bank account link should be more direct",
      "explanation": "Pertains to upstream bank account verification or linking, rather than active SIP mandate debit execution.",
      "researchImplication": "Upstream onboarding friction; does not substantiate H1 involuntary discontinuation after SIP creation."
    }
  },
  {
    "id": "IND-53959",
    "originalRow": 53959,
    "rating": 4,
    "reviewText": "This app is very good for tracking your money. Buy there are some flaws like not updating the stocks properly, credit card statement is not updating properly, can't add or update bank account etc Hope the developer will fix this things , otherwise it is a really very good app.",
    "reviewDate": "2021-08-28 07:27",
    "foundHelpful": 26,
    "sourcePlatform": "Google Play Store",
    "sourceProvenance": "Imported INDMoney app review dataset",
    "sourceReference": "INDMoney Review Row #53959",
    "preliminaryKeywordSignals": "Bank account linking for investment",
    "triagePriority": "Review \u2013 related keyword, H1 fit uncertain",
    "humanReviewStatus": "pending",
    "humanCategories": [],
    "humanEvidenceStrength": "UNASSIGNED",
    "researcherNotes": "",
    "reviewedAt": null,
    "reviewedBy": null,
    "aiSuggestion": {
      "categories": [
        "Bank account linking problem"
      ],
      "evidenceStrength": "INSUFFICIENT",
      "supportingExcerpt": "Buy there are some flaws like not updating the stocks properly, credit card statement is not updating properly, can't add or update bank account etc Hope the developer will fix this things , otherwise it is a really very good app",
      "explanation": "Pertains to upstream bank account verification or linking, rather than active SIP mandate debit execution.",
      "researchImplication": "Upstream onboarding friction; does not substantiate H1 involuntary discontinuation after SIP creation."
    }
  },
  {
    "id": "IND-54721",
    "originalRow": 54721,
    "rating": 1,
    "reviewText": "My Bank account was linked in app without my permission!!!!!",
    "reviewDate": "2021-08-09 09:37",
    "foundHelpful": 0,
    "sourcePlatform": "Google Play Store",
    "sourceProvenance": "Imported INDMoney app review dataset",
    "sourceReference": "INDMoney Review Row #54721",
    "preliminaryKeywordSignals": "Bank account linking for investment",
    "triagePriority": "Review \u2013 related keyword, H1 fit uncertain",
    "humanReviewStatus": "pending",
    "humanCategories": [],
    "humanEvidenceStrength": "UNASSIGNED",
    "researcherNotes": "",
    "reviewedAt": null,
    "reviewedBy": null,
    "aiSuggestion": {
      "categories": [
        "Bank account linking problem"
      ],
      "evidenceStrength": "INSUFFICIENT",
      "supportingExcerpt": "My Bank account was linked in app without my permission",
      "explanation": "Pertains to upstream bank account verification or linking, rather than active SIP mandate debit execution.",
      "researchImplication": "Upstream onboarding friction; does not substantiate H1 involuntary discontinuation after SIP creation."
    }
  },
  {
    "id": "IND-54748",
    "originalRow": 54748,
    "rating": 4,
    "reviewText": "Okay types, (editing after a month of use) else everything seems pretty good, but the bank accounts sync is very slow, i don't know if there is any option that enable the app to refresh bank accounts and addition of LIC in insurance section would be great. I think before the concept of financial education erupted everyone had or have atleast on LIC policy. There should be an option to add.",
    "reviewDate": "2021-08-08 16:39",
    "foundHelpful": 194,
    "sourcePlatform": "Google Play Store",
    "sourceProvenance": "Imported INDMoney app review dataset",
    "sourceReference": "INDMoney Review Row #54748",
    "preliminaryKeywordSignals": "Bank account linking for investment",
    "triagePriority": "Review \u2013 related keyword, H1 fit uncertain",
    "humanReviewStatus": "pending",
    "humanCategories": [],
    "humanEvidenceStrength": "UNASSIGNED",
    "researcherNotes": "",
    "reviewedAt": null,
    "reviewedBy": null,
    "aiSuggestion": {
      "categories": [
        "Bank account linking problem"
      ],
      "evidenceStrength": "INSUFFICIENT",
      "supportingExcerpt": "Okay types, (editing after a month of use) else everything seems pretty good, but the bank accounts sync is very slow, i don't know if there is any option that enable the app to refresh bank accounts and addition of LIC in insurance section would be great",
      "explanation": "Pertains to upstream bank account verification or linking, rather than active SIP mandate debit execution.",
      "researchImplication": "Upstream onboarding friction; does not substantiate H1 involuntary discontinuation after SIP creation."
    }
  },
  {
    "id": "IND-54785",
    "originalRow": 54785,
    "rating": 1,
    "reviewText": "Used for 1 month PPF, EPF, Mutual Funds shows incorrect even after sending all reports.. Basically, its not doing the only thing which it is supposed to do. By linking bank account and broker any app will give me net assest in bank and stocks.. Also didnt get ind coins for linking all accounts.. Waste of time",
    "reviewDate": "2021-08-07 19:46",
    "foundHelpful": 0,
    "sourcePlatform": "Google Play Store",
    "sourceProvenance": "Imported INDMoney app review dataset",
    "sourceReference": "INDMoney Review Row #54785",
    "preliminaryKeywordSignals": "Bank account linking for investment",
    "triagePriority": "Review \u2013 related keyword, H1 fit uncertain",
    "humanReviewStatus": "pending",
    "humanCategories": [],
    "humanEvidenceStrength": "UNASSIGNED",
    "researcherNotes": "",
    "reviewedAt": null,
    "reviewedBy": null,
    "aiSuggestion": {
      "categories": [
        "Bank account linking problem"
      ],
      "evidenceStrength": "INSUFFICIENT",
      "supportingExcerpt": "By linking bank account and broker any app will give me net assest in bank and stocks",
      "explanation": "Pertains to upstream bank account verification or linking, rather than active SIP mandate debit execution.",
      "researchImplication": "Upstream onboarding friction; does not substantiate H1 involuntary discontinuation after SIP creation."
    }
  },
  {
    "id": "IND-55130",
    "originalRow": 55130,
    "rating": 2,
    "reviewText": "Overall experience was great however i can add only one bank account which will not show proper financial position. Need a fix.",
    "reviewDate": "2021-07-30 17:00",
    "foundHelpful": 0,
    "sourcePlatform": "Google Play Store",
    "sourceProvenance": "Imported INDMoney app review dataset",
    "sourceReference": "INDMoney Review Row #55130",
    "preliminaryKeywordSignals": "Bank account linking for investment",
    "triagePriority": "Review \u2013 related keyword, H1 fit uncertain",
    "humanReviewStatus": "pending",
    "humanCategories": [],
    "humanEvidenceStrength": "UNASSIGNED",
    "researcherNotes": "",
    "reviewedAt": null,
    "reviewedBy": null,
    "aiSuggestion": {
      "categories": [
        "Bank account linking problem"
      ],
      "evidenceStrength": "INSUFFICIENT",
      "supportingExcerpt": "Overall experience was great however i can add only one bank account which will not show proper financial position",
      "explanation": "Pertains to upstream bank account verification or linking, rather than active SIP mandate debit execution.",
      "researchImplication": "Upstream onboarding friction; does not substantiate H1 involuntary discontinuation after SIP creation."
    }
  },
  {
    "id": "IND-55306",
    "originalRow": 55306,
    "rating": 1,
    "reviewText": "It's a scam, they take all of your informations like bank account, credit card, debit card and your device data too. Including phone no etc...",
    "reviewDate": "2021-07-26 12:34",
    "foundHelpful": 0,
    "sourcePlatform": "Google Play Store",
    "sourceProvenance": "Imported INDMoney app review dataset",
    "sourceReference": "INDMoney Review Row #55306",
    "preliminaryKeywordSignals": "Bank account linking for investment",
    "triagePriority": "Review \u2013 related keyword, H1 fit uncertain",
    "humanReviewStatus": "pending",
    "humanCategories": [],
    "humanEvidenceStrength": "UNASSIGNED",
    "researcherNotes": "",
    "reviewedAt": null,
    "reviewedBy": null,
    "aiSuggestion": {
      "categories": [
        "Bank account linking problem"
      ],
      "evidenceStrength": "INSUFFICIENT",
      "supportingExcerpt": "It's a scam, they take all of your informations like bank account, credit card, debit card and your device data too",
      "explanation": "Pertains to upstream bank account verification or linking, rather than active SIP mandate debit execution.",
      "researchImplication": "Upstream onboarding friction; does not substantiate H1 involuntary discontinuation after SIP creation."
    }
  },
  {
    "id": "IND-55494",
    "originalRow": 55494,
    "rating": 3,
    "reviewText": "Upi transaction without bank account creating is not possible and adding funds is minimum 1000rs",
    "reviewDate": "2021-07-21 19:49",
    "foundHelpful": 0,
    "sourcePlatform": "Google Play Store",
    "sourceProvenance": "Imported INDMoney app review dataset",
    "sourceReference": "INDMoney Review Row #55494",
    "preliminaryKeywordSignals": "Bank account linking for investment",
    "triagePriority": "Review \u2013 related keyword, H1 fit uncertain",
    "humanReviewStatus": "pending",
    "humanCategories": [],
    "humanEvidenceStrength": "UNASSIGNED",
    "researcherNotes": "",
    "reviewedAt": null,
    "reviewedBy": null,
    "aiSuggestion": {
      "categories": [
        "Bank account linking problem"
      ],
      "evidenceStrength": "INSUFFICIENT",
      "supportingExcerpt": "Upi transaction without bank account creating is not possible and adding funds is minimum 1000rs",
      "explanation": "Pertains to upstream bank account verification or linking, rather than active SIP mandate debit execution.",
      "researchImplication": "Upstream onboarding friction; does not substantiate H1 involuntary discontinuation after SIP creation."
    }
  },
  {
    "id": "IND-55647",
    "originalRow": 55647,
    "rating": 3,
    "reviewText": "Unable to add sovereign gold bold from sbi bank account as well as life insurance policy",
    "reviewDate": "2021-07-17 18:20",
    "foundHelpful": 1,
    "sourcePlatform": "Google Play Store",
    "sourceProvenance": "Imported INDMoney app review dataset",
    "sourceReference": "INDMoney Review Row #55647",
    "preliminaryKeywordSignals": "Bank account linking for investment",
    "triagePriority": "Review \u2013 related keyword, H1 fit uncertain",
    "humanReviewStatus": "pending",
    "humanCategories": [],
    "humanEvidenceStrength": "UNASSIGNED",
    "researcherNotes": "",
    "reviewedAt": null,
    "reviewedBy": null,
    "aiSuggestion": {
      "categories": [
        "Bank account linking problem"
      ],
      "evidenceStrength": "INSUFFICIENT",
      "supportingExcerpt": "Unable to add sovereign gold bold from sbi bank account as well as life insurance policy",
      "explanation": "Pertains to upstream bank account verification or linking, rather than active SIP mandate debit execution.",
      "researchImplication": "Upstream onboarding friction; does not substantiate H1 involuntary discontinuation after SIP creation."
    }
  },
  {
    "id": "IND-55743",
    "originalRow": 55743,
    "rating": 2,
    "reviewText": "Upi subscrib payment method not there and asking auto mandate process of filling password is risky instead . Only having month renewal plan Make year plan also it would be better instead of auto debit mandate (risky) Good app for investment",
    "reviewDate": "2021-07-14 20:56",
    "foundHelpful": 2,
    "sourcePlatform": "Google Play Store",
    "sourceProvenance": "Imported INDMoney app review dataset",
    "sourceReference": "INDMoney Review Row #55743",
    "preliminaryKeywordSignals": "Bank mandate / NACH / e-mandate / AutoPay",
    "triagePriority": "Review \u2013 related keyword, H1 fit uncertain",
    "humanReviewStatus": "pending",
    "humanCategories": [],
    "humanEvidenceStrength": "UNASSIGNED",
    "researcherNotes": "",
    "reviewedAt": null,
    "reviewedBy": null,
    "aiSuggestion": {
      "categories": [
        "NACH / AutoPay issue"
      ],
      "evidenceStrength": "INDIRECT",
      "supportingExcerpt": "Upi subscrib payment method not there and asking auto mandate process of filling password is risky instead",
      "explanation": "Mentions bank mandate or AutoPay friction, but does not explicitly confirm a mutual fund SIP was affected.",
      "researchImplication": "Supports broader friction around automated recurring debits, but requires confirmation of SIP context."
    }
  },
  {
    "id": "IND-55834",
    "originalRow": 55834,
    "rating": 5,
    "reviewText": "Awesome Job Guys, Keep Going On... It is truly a best app to track everything on a single window. I hope more features will be coming up in the future like UPI payments, Add bank account with another mobile number, Add more stock brokers both discount and full service, Credit Card bill payment, etc.. Really impressed with the ease of interfaces design, the options available... Overall is very great and please maintain this kind of standards even in the future. Love indmoney App..",
    "reviewDate": "2021-07-11 16:28",
    "foundHelpful": 23,
    "sourcePlatform": "Google Play Store",
    "sourceProvenance": "Imported INDMoney app review dataset",
    "sourceReference": "INDMoney Review Row #55834",
    "preliminaryKeywordSignals": "Bank account linking for investment",
    "triagePriority": "Review \u2013 related keyword, H1 fit uncertain",
    "humanReviewStatus": "pending",
    "humanCategories": [],
    "humanEvidenceStrength": "UNASSIGNED",
    "researcherNotes": "",
    "reviewedAt": null,
    "reviewedBy": null,
    "aiSuggestion": {
      "categories": [
        "Bank account linking problem"
      ],
      "evidenceStrength": "INSUFFICIENT",
      "supportingExcerpt": "I hope more features will be coming up in the future like UPI payments, Add bank account with another mobile number, Add more stock brokers both discount and full service, Credit Card bill payment, etc",
      "explanation": "Pertains to upstream bank account verification or linking, rather than active SIP mandate debit execution.",
      "researchImplication": "Upstream onboarding friction; does not substantiate H1 involuntary discontinuation after SIP creation."
    }
  },
  {
    "id": "IND-56216",
    "originalRow": 56216,
    "rating": 4,
    "reviewText": "Every features are good, but bank balance are not correct Can you add another bank account to it ?,I don't see any option for that Not many policy companies present in drop down list",
    "reviewDate": "2021-06-28 10:09",
    "foundHelpful": 0,
    "sourcePlatform": "Google Play Store",
    "sourceProvenance": "Imported INDMoney app review dataset",
    "sourceReference": "INDMoney Review Row #56216",
    "preliminaryKeywordSignals": "Bank account linking for investment",
    "triagePriority": "Review \u2013 related keyword, H1 fit uncertain",
    "humanReviewStatus": "pending",
    "humanCategories": [],
    "humanEvidenceStrength": "UNASSIGNED",
    "researcherNotes": "",
    "reviewedAt": null,
    "reviewedBy": null,
    "aiSuggestion": {
      "categories": [
        "Bank account linking problem"
      ],
      "evidenceStrength": "INSUFFICIENT",
      "supportingExcerpt": "Every features are good, but bank balance are not correct Can you add another bank account to it",
      "explanation": "Pertains to upstream bank account verification or linking, rather than active SIP mandate debit execution.",
      "researchImplication": "Upstream onboarding friction; does not substantiate H1 involuntary discontinuation after SIP creation."
    }
  },
  {
    "id": "IND-56555",
    "originalRow": 56555,
    "rating": 5,
    "reviewText": "What an app!! Had a great UX and UI. I particularly liked the daily portfolio report. However, in savings account please give an option to add the balance manually as well as for my bank account sms and missed call services are not working properly.",
    "reviewDate": "2021-06-15 22:00",
    "foundHelpful": 10,
    "sourcePlatform": "Google Play Store",
    "sourceProvenance": "Imported INDMoney app review dataset",
    "sourceReference": "INDMoney Review Row #56555",
    "preliminaryKeywordSignals": "Bank account linking for investment",
    "triagePriority": "Review \u2013 related keyword, H1 fit uncertain",
    "humanReviewStatus": "pending",
    "humanCategories": [],
    "humanEvidenceStrength": "UNASSIGNED",
    "researcherNotes": "",
    "reviewedAt": null,
    "reviewedBy": null,
    "aiSuggestion": {
      "categories": [
        "Bank account linking problem"
      ],
      "evidenceStrength": "INSUFFICIENT",
      "supportingExcerpt": "However, in savings account please give an option to add the balance manually as well as for my bank account sms and missed call services are not working properly",
      "explanation": "Pertains to upstream bank account verification or linking, rather than active SIP mandate debit execution.",
      "researchImplication": "Upstream onboarding friction; does not substantiate H1 involuntary discontinuation after SIP creation."
    }
  },
  {
    "id": "IND-56694",
    "originalRow": 56694,
    "rating": 4,
    "reviewText": "Overall very good app..liked the idea of having everything at one place...just one problem that's why giving 4 stars...how do I add a savings account where I have a different ph number...there should be an option to manually add a bank account.",
    "reviewDate": "2021-06-11 11:58",
    "foundHelpful": 5,
    "sourcePlatform": "Google Play Store",
    "sourceProvenance": "Imported INDMoney app review dataset",
    "sourceReference": "INDMoney Review Row #56694",
    "preliminaryKeywordSignals": "Bank account linking for investment",
    "triagePriority": "Review \u2013 related keyword, H1 fit uncertain",
    "humanReviewStatus": "pending",
    "humanCategories": [],
    "humanEvidenceStrength": "UNASSIGNED",
    "researcherNotes": "",
    "reviewedAt": null,
    "reviewedBy": null,
    "aiSuggestion": {
      "categories": [
        "Bank account linking problem"
      ],
      "evidenceStrength": "INSUFFICIENT",
      "supportingExcerpt": "there should be an option to manually add a bank account",
      "explanation": "Pertains to upstream bank account verification or linking, rather than active SIP mandate debit execution.",
      "researchImplication": "Upstream onboarding friction; does not substantiate H1 involuntary discontinuation after SIP creation."
    }
  },
  {
    "id": "IND-57308",
    "originalRow": 57308,
    "rating": 4,
    "reviewText": "Provide an option to add a bank account and option to update the bank balance manually.",
    "reviewDate": "2021-05-24 18:52",
    "foundHelpful": 0,
    "sourcePlatform": "Google Play Store",
    "sourceProvenance": "Imported INDMoney app review dataset",
    "sourceReference": "INDMoney Review Row #57308",
    "preliminaryKeywordSignals": "Bank account linking for investment",
    "triagePriority": "Review \u2013 related keyword, H1 fit uncertain",
    "humanReviewStatus": "pending",
    "humanCategories": [],
    "humanEvidenceStrength": "UNASSIGNED",
    "researcherNotes": "",
    "reviewedAt": null,
    "reviewedBy": null,
    "aiSuggestion": {
      "categories": [
        "Bank account linking problem"
      ],
      "evidenceStrength": "INSUFFICIENT",
      "supportingExcerpt": "Provide an option to add a bank account and option to update the bank balance manually",
      "explanation": "Pertains to upstream bank account verification or linking, rather than active SIP mandate debit execution.",
      "researchImplication": "Upstream onboarding friction; does not substantiate H1 involuntary discontinuation after SIP creation."
    }
  },
  {
    "id": "IND-57343",
    "originalRow": 57343,
    "rating": 2,
    "reviewText": "I am using this app it's quite good but unable to pay/buy any mutual fund yherevis one option shows set-autopay infact that's also nit working.. So hope you need to validate to getting better... I can't see, No any answers on any reviews from this app owner/some executives.",
    "reviewDate": "2021-05-23 14:17",
    "foundHelpful": 0,
    "sourcePlatform": "Google Play Store",
    "sourceProvenance": "Imported INDMoney app review dataset",
    "sourceReference": "INDMoney Review Row #57343",
    "preliminaryKeywordSignals": "Bank mandate / NACH / e-mandate / AutoPay",
    "triagePriority": "Review \u2013 related keyword, H1 fit uncertain",
    "humanReviewStatus": "pending",
    "humanCategories": [],
    "humanEvidenceStrength": "UNASSIGNED",
    "researcherNotes": "",
    "reviewedAt": null,
    "reviewedBy": null,
    "aiSuggestion": {
      "categories": [
        "NACH / AutoPay issue"
      ],
      "evidenceStrength": "INDIRECT",
      "supportingExcerpt": "I am using this app it's quite good but unable to pay/buy any mutual fund yherevis one option shows set-autopay infact that's also nit working",
      "explanation": "Mentions bank mandate or AutoPay friction, but does not explicitly confirm a mutual fund SIP was affected.",
      "researchImplication": "Supports broader friction around automated recurring debits, but requires confirmation of SIP context."
    }
  },
  {
    "id": "IND-57459",
    "originalRow": 57459,
    "rating": 1,
    "reviewText": "Not able to Manual add Bank Account & update balance. Please add this feature.",
    "reviewDate": "2021-05-19 15:50",
    "foundHelpful": 0,
    "sourcePlatform": "Google Play Store",
    "sourceProvenance": "Imported INDMoney app review dataset",
    "sourceReference": "INDMoney Review Row #57459",
    "preliminaryKeywordSignals": "Bank account linking for investment",
    "triagePriority": "Review \u2013 related keyword, H1 fit uncertain",
    "humanReviewStatus": "pending",
    "humanCategories": [],
    "humanEvidenceStrength": "UNASSIGNED",
    "researcherNotes": "",
    "reviewedAt": null,
    "reviewedBy": null,
    "aiSuggestion": {
      "categories": [
        "Bank account linking problem"
      ],
      "evidenceStrength": "INSUFFICIENT",
      "supportingExcerpt": "Not able to Manual add Bank Account & update balance",
      "explanation": "Pertains to upstream bank account verification or linking, rather than active SIP mandate debit execution.",
      "researchImplication": "Upstream onboarding friction; does not substantiate H1 involuntary discontinuation after SIP creation."
    }
  },
  {
    "id": "IND-57750",
    "originalRow": 57750,
    "rating": 2,
    "reviewText": "Not able to add more than one bank account. Mutual funds tracking is taking ages to complete the linking. Not able to fetch my credit score, showing some error, tried multiple times.",
    "reviewDate": "2021-05-09 12:55",
    "foundHelpful": 9,
    "sourcePlatform": "Google Play Store",
    "sourceProvenance": "Imported INDMoney app review dataset",
    "sourceReference": "INDMoney Review Row #57750",
    "preliminaryKeywordSignals": "Bank account linking for investment",
    "triagePriority": "Review \u2013 related keyword, H1 fit uncertain",
    "humanReviewStatus": "pending",
    "humanCategories": [],
    "humanEvidenceStrength": "UNASSIGNED",
    "researcherNotes": "",
    "reviewedAt": null,
    "reviewedBy": null,
    "aiSuggestion": {
      "categories": [
        "Bank account linking problem"
      ],
      "evidenceStrength": "INSUFFICIENT",
      "supportingExcerpt": "Not able to add more than one bank account",
      "explanation": "Pertains to upstream bank account verification or linking, rather than active SIP mandate debit execution.",
      "researchImplication": "Upstream onboarding friction; does not substantiate H1 involuntary discontinuation after SIP creation."
    }
  },
  {
    "id": "IND-58789",
    "originalRow": 58789,
    "rating": 1,
    "reviewText": "I enabled auto-pay feauture . 399 rs got deducted two times within 3 days On March 8th and on March 10th. The app which has to track expenses itself doing these things\ud83d\ude44",
    "reviewDate": "2021-03-10 22:43",
    "foundHelpful": 1,
    "sourcePlatform": "Google Play Store",
    "sourceProvenance": "Imported INDMoney app review dataset",
    "sourceReference": "INDMoney Review Row #58789",
    "preliminaryKeywordSignals": "Bank mandate / NACH / e-mandate / AutoPay",
    "triagePriority": "Review \u2013 related keyword, H1 fit uncertain",
    "humanReviewStatus": "pending",
    "humanCategories": [],
    "humanEvidenceStrength": "UNASSIGNED",
    "researcherNotes": "",
    "reviewedAt": null,
    "reviewedBy": null,
    "aiSuggestion": {
      "categories": [
        "NACH / AutoPay issue"
      ],
      "evidenceStrength": "INDIRECT",
      "supportingExcerpt": "I enabled auto-pay feauture",
      "explanation": "Mentions bank mandate or AutoPay friction, but does not explicitly confirm a mutual fund SIP was affected.",
      "researchImplication": "Supports broader friction around automated recurring debits, but requires confirmation of SIP context."
    }
  },
  {
    "id": "IND-58981",
    "originalRow": 58981,
    "rating": 5,
    "reviewText": "Overall an awesome app. I have searched app like this for soo many days. I thought of writing app, similar to that. But fortunately one day I came to know about this app. Too good. You can track all the transaction. And the support is also good. The trend lines are amazing. Even if this app is converted to Fuly paid. It is worth paying for. Didn't use any investment advice from them. But other than it . It is awesome. kindly add option to add bank accounts or adjust balance manually",
    "reviewDate": "2021-02-23 17:21",
    "foundHelpful": 197,
    "sourcePlatform": "Google Play Store",
    "sourceProvenance": "Imported INDMoney app review dataset",
    "sourceReference": "INDMoney Review Row #58981",
    "preliminaryKeywordSignals": "Bank account linking for investment",
    "triagePriority": "Review \u2013 related keyword, H1 fit uncertain",
    "humanReviewStatus": "pending",
    "humanCategories": [],
    "humanEvidenceStrength": "UNASSIGNED",
    "researcherNotes": "",
    "reviewedAt": null,
    "reviewedBy": null,
    "aiSuggestion": {
      "categories": [
        "Bank account linking problem"
      ],
      "evidenceStrength": "INSUFFICIENT",
      "supportingExcerpt": "kindly add option to add bank accounts or adjust balance manually",
      "explanation": "Pertains to upstream bank account verification or linking, rather than active SIP mandate debit execution.",
      "researchImplication": "Upstream onboarding friction; does not substantiate H1 involuntary discontinuation after SIP creation."
    }
  },
  {
    "id": "IND-59032",
    "originalRow": 59032,
    "rating": 1,
    "reviewText": "Added my bank account for verification but it has not been verified even after 1 day..",
    "reviewDate": "2021-02-19 08:07",
    "foundHelpful": 0,
    "sourcePlatform": "Google Play Store",
    "sourceProvenance": "Imported INDMoney app review dataset",
    "sourceReference": "INDMoney Review Row #59032",
    "preliminaryKeywordSignals": "Bank account linking for investment",
    "triagePriority": "Review \u2013 related keyword, H1 fit uncertain",
    "humanReviewStatus": "pending",
    "humanCategories": [],
    "humanEvidenceStrength": "UNASSIGNED",
    "researcherNotes": "",
    "reviewedAt": null,
    "reviewedBy": null,
    "aiSuggestion": {
      "categories": [
        "Bank account linking problem"
      ],
      "evidenceStrength": "INSUFFICIENT",
      "supportingExcerpt": "Added my bank account for verification but it has not been verified even after 1 day",
      "explanation": "Pertains to upstream bank account verification or linking, rather than active SIP mandate debit execution.",
      "researchImplication": "Upstream onboarding friction; does not substantiate H1 involuntary discontinuation after SIP creation."
    }
  },
  {
    "id": "IND-59144",
    "originalRow": 59144,
    "rating": 1,
    "reviewText": "One of the worst app i never have seen. No customer support. One you started sip it will continue.. It only showes your sip has been cancelled but Sip amount will continue deducted. I have deleted my accout on this application but still is continues deducting my amount...",
    "reviewDate": "2021-02-08 20:19",
    "foundHelpful": 24,
    "sourcePlatform": "Google Play Store",
    "sourceProvenance": "Imported INDMoney app review dataset",
    "sourceReference": "INDMoney Review Row #59144",
    "preliminaryKeywordSignals": "SIP instalment / SIP debit / SIP payment",
    "triagePriority": "Review \u2013 related keyword, H1 fit uncertain",
    "humanReviewStatus": "pending",
    "humanCategories": [],
    "humanEvidenceStrength": "UNASSIGNED",
    "researcherNotes": "",
    "reviewedAt": null,
    "reviewedBy": null,
    "aiSuggestion": {
      "categories": [
        "SIP instalment debit failure",
        "SIP setup issue"
      ],
      "evidenceStrength": "DIRECT",
      "supportingExcerpt": "One you started sip it will continue",
      "explanation": "Review explicitly describes a mutual fund SIP instalment or mandate debit failure.",
      "researchImplication": "Directly substantiates H1: user experienced unexpected payment failure during active SIP cycle."
    }
  },
  {
    "id": "IND-59371",
    "originalRow": 59371,
    "rating": 1,
    "reviewText": "I am 1 week wait but not add money in my bank account please fast solve",
    "reviewDate": "2021-01-23 11:49",
    "foundHelpful": 0,
    "sourcePlatform": "Google Play Store",
    "sourceProvenance": "Imported INDMoney app review dataset",
    "sourceReference": "INDMoney Review Row #59371",
    "preliminaryKeywordSignals": "Bank account linking for investment",
    "triagePriority": "Review \u2013 related keyword, H1 fit uncertain",
    "humanReviewStatus": "pending",
    "humanCategories": [],
    "humanEvidenceStrength": "UNASSIGNED",
    "researcherNotes": "",
    "reviewedAt": null,
    "reviewedBy": null,
    "aiSuggestion": {
      "categories": [
        "Bank account linking problem"
      ],
      "evidenceStrength": "INSUFFICIENT",
      "supportingExcerpt": "I am 1 week wait but not add money in my bank account please fast solve",
      "explanation": "Pertains to upstream bank account verification or linking, rather than active SIP mandate debit execution.",
      "researchImplication": "Upstream onboarding friction; does not substantiate H1 involuntary discontinuation after SIP creation."
    }
  },
  {
    "id": "IND-59597",
    "originalRow": 59597,
    "rating": 5,
    "reviewText": "Executed my first SIP - mandate setup was quick, freedom to chose date was a surprise and Direct mutual fund plan. All in all - a clear win for investors. Highly recommended.",
    "reviewDate": "2021-01-19 16:32",
    "foundHelpful": 1,
    "sourcePlatform": "Google Play Store",
    "sourceProvenance": "Imported INDMoney app review dataset",
    "sourceReference": "INDMoney Review Row #59597",
    "preliminaryKeywordSignals": "Bank mandate / NACH / e-mandate / AutoPay; SIP instalment / SIP debit / SIP payment",
    "triagePriority": "High \u2013 explicit SIP + mandate/AutoPay language",
    "humanReviewStatus": "pending",
    "humanCategories": [],
    "humanEvidenceStrength": "UNASSIGNED",
    "researcherNotes": "",
    "reviewedAt": null,
    "reviewedBy": null,
    "aiSuggestion": {
      "categories": [
        "SIP setup issue"
      ],
      "evidenceStrength": "INSUFFICIENT",
      "supportingExcerpt": "Executed my first SIP - mandate setup was quick, freedom to chose date was a surprise and Direct mutual fund plan",
      "explanation": "Review describes general app service, withdrawal, or unrelated payment issue without establishing SIP mandate failure.",
      "researchImplication": "Does not support H1 hypothesis."
    }
  },
  {
    "id": "IND-60154",
    "originalRow": 60154,
    "rating": 1,
    "reviewText": "Invite 1 friend but when my cash pending Please check my payment",
    "reviewDate": "2021-01-14 18:25",
    "foundHelpful": 0,
    "sourcePlatform": "Google Play Store",
    "sourceProvenance": "Imported INDMoney app review dataset",
    "sourceReference": "INDMoney Review Row #60154",
    "preliminaryKeywordSignals": "Payment failure / pending payment",
    "triagePriority": "Review \u2013 related keyword, H1 fit uncertain",
    "humanReviewStatus": "pending",
    "humanCategories": [],
    "humanEvidenceStrength": "UNASSIGNED",
    "researcherNotes": "",
    "reviewedAt": null,
    "reviewedBy": null,
    "aiSuggestion": {
      "categories": [
        "General payment issue"
      ],
      "evidenceStrength": "INSUFFICIENT",
      "supportingExcerpt": "Invite 1 friend but when my cash pending Please check my payment",
      "explanation": "Review describes general app service, withdrawal, or unrelated payment issue without establishing SIP mandate failure.",
      "researchImplication": "Does not support H1 hypothesis."
    }
  },
  {
    "id": "IND-60274",
    "originalRow": 60274,
    "rating": 1,
    "reviewText": "Very bad app don't install the app because my payment not received show only pending please not install",
    "reviewDate": "2021-01-14 08:45",
    "foundHelpful": 3,
    "sourcePlatform": "Google Play Store",
    "sourceProvenance": "Imported INDMoney app review dataset",
    "sourceReference": "INDMoney Review Row #60274",
    "preliminaryKeywordSignals": "Payment failure / pending payment",
    "triagePriority": "Review \u2013 related keyword, H1 fit uncertain",
    "humanReviewStatus": "pending",
    "humanCategories": [],
    "humanEvidenceStrength": "UNASSIGNED",
    "researcherNotes": "",
    "reviewedAt": null,
    "reviewedBy": null,
    "aiSuggestion": {
      "categories": [
        "General payment issue"
      ],
      "evidenceStrength": "INSUFFICIENT",
      "supportingExcerpt": "Very bad app don't install the app because my payment not received show only pending please not install",
      "explanation": "Review describes general app service, withdrawal, or unrelated payment issue without establishing SIP mandate failure.",
      "researchImplication": "Does not support H1 hypothesis."
    }
  },
  {
    "id": "IND-60584",
    "originalRow": 60584,
    "rating": 4,
    "reviewText": "Sir in Future ,From my bank account , Account balnance can be debited?",
    "reviewDate": "2021-01-13 10:31",
    "foundHelpful": 1,
    "sourcePlatform": "Google Play Store",
    "sourceProvenance": "Imported INDMoney app review dataset",
    "sourceReference": "INDMoney Review Row #60584",
    "preliminaryKeywordSignals": "Bank account linking for investment",
    "triagePriority": "Review \u2013 related keyword, H1 fit uncertain",
    "humanReviewStatus": "pending",
    "humanCategories": [],
    "humanEvidenceStrength": "UNASSIGNED",
    "researcherNotes": "",
    "reviewedAt": null,
    "reviewedBy": null,
    "aiSuggestion": {
      "categories": [
        "Bank account linking problem"
      ],
      "evidenceStrength": "INSUFFICIENT",
      "supportingExcerpt": "Sir in Future ,From my bank account , Account balnance can be debited",
      "explanation": "Pertains to upstream bank account verification or linking, rather than active SIP mandate debit execution.",
      "researchImplication": "Upstream onboarding friction; does not substantiate H1 involuntary discontinuation after SIP creation."
    }
  },
  {
    "id": "IND-60837",
    "originalRow": 60837,
    "rating": 4,
    "reviewText": "Just started using, but it is good to have all information at one point, would like to add bank accounts also as done in my wife's account",
    "reviewDate": "2021-01-06 10:12",
    "foundHelpful": 3,
    "sourcePlatform": "Google Play Store",
    "sourceProvenance": "Imported INDMoney app review dataset",
    "sourceReference": "INDMoney Review Row #60837",
    "preliminaryKeywordSignals": "Bank account linking for investment",
    "triagePriority": "Review \u2013 related keyword, H1 fit uncertain",
    "humanReviewStatus": "pending",
    "humanCategories": [],
    "humanEvidenceStrength": "UNASSIGNED",
    "researcherNotes": "",
    "reviewedAt": null,
    "reviewedBy": null,
    "aiSuggestion": {
      "categories": [
        "Bank account linking problem"
      ],
      "evidenceStrength": "INSUFFICIENT",
      "supportingExcerpt": "Just started using, but it is good to have all information at one point, would like to add bank accounts also as done in my wife's account",
      "explanation": "Pertains to upstream bank account verification or linking, rather than active SIP mandate debit execution.",
      "researchImplication": "Upstream onboarding friction; does not substantiate H1 involuntary discontinuation after SIP creation."
    }
  },
  {
    "id": "IND-61577",
    "originalRow": 61577,
    "rating": 1,
    "reviewText": "Horrible customer support. I invested in the FD with Bajaj Finserv from INDMoney application. Even after 2 days, It is saying as \"Payment Pending:\". When I raised the concern to the support team, they said \"Cancelled cheque\" and \"Statement with IFSC/MICR\" is mandatory before investing. They have no clue of what they are doing, please refrain from investing with INDMoney. It is much better to use the trusted applications like Kuvera which provide complete customer support rather than randomly adding requirements. I transferred the money using the NEFT on the same day of investment, but now the support is clueless. Please collect all the required information before the investment as it puts the user is huge trouble, Also do let me know the status of my FD investment if you people have got some clue.",
    "reviewDate": "2020-10-26 20:09",
    "foundHelpful": 8,
    "sourcePlatform": "Google Play Store",
    "sourceProvenance": "Imported INDMoney app review dataset",
    "sourceReference": "INDMoney Review Row #61577",
    "preliminaryKeywordSignals": "Payment failure / pending payment",
    "triagePriority": "Review \u2013 related keyword, H1 fit uncertain",
    "humanReviewStatus": "pending",
    "humanCategories": [],
    "humanEvidenceStrength": "UNASSIGNED",
    "researcherNotes": "",
    "reviewedAt": null,
    "reviewedBy": null,
    "aiSuggestion": {
      "categories": [
        "General payment issue"
      ],
      "evidenceStrength": "INSUFFICIENT",
      "supportingExcerpt": "Horrible customer support",
      "explanation": "Review describes general app service, withdrawal, or unrelated payment issue without establishing SIP mandate failure.",
      "researchImplication": "Does not support H1 hypothesis."
    }
  },
  {
    "id": "IND-61764",
    "originalRow": 61764,
    "rating": 4,
    "reviewText": "This app is very good.All Can understand about multual fund.My suggession is to include Google pay facility for first SlP and One time mandate for ECS transactions.",
    "reviewDate": "2020-09-26 21:40",
    "foundHelpful": 1,
    "sourcePlatform": "Google Play Store",
    "sourceProvenance": "Imported INDMoney app review dataset",
    "sourceReference": "INDMoney Review Row #61764",
    "preliminaryKeywordSignals": "Bank mandate / NACH / e-mandate / AutoPay",
    "triagePriority": "Review \u2013 related keyword, H1 fit uncertain",
    "humanReviewStatus": "pending",
    "humanCategories": [],
    "humanEvidenceStrength": "UNASSIGNED",
    "researcherNotes": "",
    "reviewedAt": null,
    "reviewedBy": null,
    "aiSuggestion": {
      "categories": [
        "Unrelated feedback"
      ],
      "evidenceStrength": "INSUFFICIENT",
      "supportingExcerpt": "My suggession is to include Google pay facility for first SlP and One time mandate for ECS transactions",
      "explanation": "Review describes general app service, withdrawal, or unrelated payment issue without establishing SIP mandate failure.",
      "researchImplication": "Does not support H1 hypothesis."
    }
  },
  {
    "id": "IND-62037",
    "originalRow": 62037,
    "rating": 4,
    "reviewText": "Love the experience but have some issues with the subscription why do I have to sign a nach mandate for your subscription, what if I just want try the service you guys offer without the headache of cancelling it when I want to. If not for that I would most certainly have subscribed- why not just integrate Google Play Billing which is so.much more convenient",
    "reviewDate": "2020-08-19 22:48",
    "foundHelpful": 18,
    "sourcePlatform": "Google Play Store",
    "sourceProvenance": "Imported INDMoney app review dataset",
    "sourceReference": "INDMoney Review Row #62037",
    "preliminaryKeywordSignals": "Bank mandate / NACH / e-mandate / AutoPay",
    "triagePriority": "Review \u2013 related keyword, H1 fit uncertain",
    "humanReviewStatus": "pending",
    "humanCategories": [],
    "humanEvidenceStrength": "UNASSIGNED",
    "researcherNotes": "",
    "reviewedAt": null,
    "reviewedBy": null,
    "aiSuggestion": {
      "categories": [
        "Bank mandate failure",
        "NACH / AutoPay issue"
      ],
      "evidenceStrength": "INDIRECT",
      "supportingExcerpt": "Love the experience but have some issues with the subscription why do I have to sign a nach mandate for your subscription, what if I just want try the service you guys offer without the headache of cancelling it when I want to",
      "explanation": "Mentions bank mandate or AutoPay friction, but does not explicitly confirm a mutual fund SIP was affected.",
      "researchImplication": "Supports broader friction around automated recurring debits, but requires confirmation of SIP context."
    }
  },
  {
    "id": "IND-62124",
    "originalRow": 62124,
    "rating": 5,
    "reviewText": "I have already sent the problem regarding Bank account linked.. Pls do the needful.. Thank you so much for your help and support... Truly appreciate it",
    "reviewDate": "2020-08-02 22:18",
    "foundHelpful": 0,
    "sourcePlatform": "Google Play Store",
    "sourceProvenance": "Imported INDMoney app review dataset",
    "sourceReference": "INDMoney Review Row #62124",
    "preliminaryKeywordSignals": "Bank account linking for investment",
    "triagePriority": "Review \u2013 related keyword, H1 fit uncertain",
    "humanReviewStatus": "pending",
    "humanCategories": [],
    "humanEvidenceStrength": "UNASSIGNED",
    "researcherNotes": "",
    "reviewedAt": null,
    "reviewedBy": null,
    "aiSuggestion": {
      "categories": [
        "Bank account linking problem"
      ],
      "evidenceStrength": "INSUFFICIENT",
      "supportingExcerpt": "I have already sent the problem regarding Bank account linked",
      "explanation": "Pertains to upstream bank account verification or linking, rather than active SIP mandate debit execution.",
      "researchImplication": "Upstream onboarding friction; does not substantiate H1 involuntary discontinuation after SIP creation."
    }
  },
  {
    "id": "IND-62255",
    "originalRow": 62255,
    "rating": 2,
    "reviewText": "eNACH integration is broken",
    "reviewDate": "2020-06-22 20:02",
    "foundHelpful": 1,
    "sourcePlatform": "Google Play Store",
    "sourceProvenance": "Imported INDMoney app review dataset",
    "sourceReference": "INDMoney Review Row #62255",
    "preliminaryKeywordSignals": "Bank mandate / NACH / e-mandate / AutoPay",
    "triagePriority": "Review \u2013 related keyword, H1 fit uncertain",
    "humanReviewStatus": "pending",
    "humanCategories": [],
    "humanEvidenceStrength": "UNASSIGNED",
    "researcherNotes": "",
    "reviewedAt": null,
    "reviewedBy": null,
    "aiSuggestion": {
      "categories": [
        "NACH / AutoPay issue"
      ],
      "evidenceStrength": "INDIRECT",
      "supportingExcerpt": "eNACH integration is broken",
      "explanation": "Mentions bank mandate or AutoPay friction, but does not explicitly confirm a mutual fund SIP was affected.",
      "researchImplication": "Supports broader friction around automated recurring debits, but requires confirmation of SIP context."
    }
  }
];
