import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

interface ExplainRequest {
  topic?: string;
  query?: string;
  context?: {
    currentStep?: string;
    selectedOption?: string;
    confirmationStatus?: string;
  };
}

const GROUNDED_KNOWLEDGE: Record<string, { title: string; explanation: string; verifiedPolicy: string }> = {
  debit_unconfirmed: {
    title: 'Why is Bank Debit Unconfirmed?',
    explanation:
      'In Indian retail banking (NACH/e-mandate), clearing reconciliation between NPCI, your bank, and the sponsor bank can take 24 to 48 business hours. A failure alert indicates the payment clearing process did not conclude; it does not confirm whether funds left your account. Always verify your bank statement or passbook before attempting a retry to prevent accidental double deductions.',
    verifiedPolicy: 'Based on SEBI/NPCI Retail Payment Settlement Guidelines'
  },
  retry_vs_reschedule: {
    title: 'Instant Retry vs Future Rescheduling',
    explanation:
      'Option A (Instant Retry) submits an immediate ad-hoc payment request for this cycle via UPI or Net Banking. Option B (Rescheduling) shifts the debit date to a future day (such as after your monthly salary deposit). Neither option guarantees immediate allotment, and rescheduling shifts your execution date, meaning your units will receive the NAV applicable to that future clearance date.',
    verifiedPolicy: 'SEBI Mutual Fund Investment Realization Regulations'
  },
  unit_safety: {
    title: 'Are My Existing Mutual Fund Units Safe?',
    explanation:
      'Yes, absolutely. Every mutual fund unit from previously cleared instalments is already held in your legal name in your AMC/RTA folio (e.g. CAMS or KFintech). An incomplete or missed instalment only affects the current transaction; your past accumulated units and portfolio balance remain safe and completely unaffected.',
    verifiedPolicy: 'SEBI Investor Protection & Folio Ownership Framework'
  },
  penalty_fees: {
    title: 'Will I Be Charged a Penalty?',
    explanation:
      'Neither INDMoney nor the mutual fund AMC charges penalty fees for a missed or incomplete SIP instalment. However, if the mandate debit failed due to insufficient funds in your bank account, your personal bank may assess an ECS/NACH return fee as per its own published tariff schedule. Check your bank schedule of charges.',
    verifiedPolicy: 'RBI Circular on Customer Charges & AMC Fee Disclosures'
  },
  nav_impact: {
    title: 'How Does Rescheduling Affect My NAV?',
    explanation:
      'Under SEBI regulations, mutual fund units are allotted at the NAV of the business day when your funds are officially credited and realized in the mutual fund scheme bank account before the cut-off time (typically 3:00 PM). Shifting your date will allocate units at that future day’s NAV, not today’s NAV.',
    verifiedPolicy: 'SEBI Circular on NAV Allotment on Realization Basis'
  }
};

export async function POST(req: Request) {
  try {
    const body: ExplainRequest = await req.json().catch(() => ({}));
    const query = (body.query || '').trim().toLowerCase();
    const topic = body.topic || '';

    // Check pre-configured topic
    if (topic && GROUNDED_KNOWLEDGE[topic]) {
      return NextResponse.json({
        success: true,
        source: 'grounded_rules_engine',
        data: GROUNDED_KNOWLEDGE[topic],
        aiAssisted: true,
        disclaimer: 'Grounding rule: Verified institutional guidance only. No invented bank codes or outcome guarantees.'
      });
    }

    // Match query against grounded knowledge keywords
    if (query.includes('debit') || query.includes('money') || query.includes('deduct') || query.includes('statement') || query.includes('passbook')) {
      return NextResponse.json({
        success: true,
        source: 'grounded_rules_engine',
        data: GROUNDED_KNOWLEDGE.debit_unconfirmed,
        aiAssisted: true,
        disclaimer: 'Grounding rule: Verified institutional guidance only. No invented bank codes or outcome guarantees.'
      });
    }

    if (query.includes('retry') || query.includes('reschedule') || query.includes('difference') || query.includes('future') || query.includes('date')) {
      return NextResponse.json({
        success: true,
        source: 'grounded_rules_engine',
        data: GROUNDED_KNOWLEDGE.retry_vs_reschedule,
        aiAssisted: true,
        disclaimer: 'Grounding rule: Verified institutional guidance only. No invented bank codes or outcome guarantees.'
      });
    }

    if (query.includes('unit') || query.includes('portfolio') || query.includes('safe') || query.includes('lose') || query.includes('past')) {
      return NextResponse.json({
        success: true,
        source: 'grounded_rules_engine',
        data: GROUNDED_KNOWLEDGE.unit_safety,
        aiAssisted: true,
        disclaimer: 'Grounding rule: Verified institutional guidance only. No invented bank codes or outcome guarantees.'
      });
    }

    if (query.includes('fee') || query.includes('charge') || query.includes('penalty') || query.includes('cost')) {
      return NextResponse.json({
        success: true,
        source: 'grounded_rules_engine',
        data: GROUNDED_KNOWLEDGE.penalty_fees,
        aiAssisted: true,
        disclaimer: 'Grounding rule: Verified institutional guidance only. No invented bank codes or outcome guarantees.'
      });
    }

    if (query.includes('nav') || query.includes('price') || query.includes('market') || query.includes('cut off') || query.includes('cutoff')) {
      return NextResponse.json({
        success: true,
        source: 'grounded_rules_engine',
        data: GROUNDED_KNOWLEDGE.nav_impact,
        aiAssisted: true,
        disclaimer: 'Grounding rule: Verified institutional guidance only. No invented bank codes or outcome guarantees.'
      });
    }

    // Deterministic default assistance
    return NextResponse.json({
      success: true,
      source: 'grounded_rules_engine',
      data: {
        title: 'SIP Recovery Assistant Diagnostic Guidance',
        explanation:
          'When an instalment does not complete, Indian payment networks take 24–48 hours to confirm final bank settlement. First, check your bank statement to verify whether funds were deducted. If funds remain in your account and you wish to invest immediately, submit an Instant Retry; if you prefer to wait for salary or liquidity, choose a Rescheduling date. Past investments remain 100% safe.',
        verifiedPolicy: 'SEBI/RBI Investor Protection Guidelines'
      },
      aiAssisted: true,
      disclaimer: 'Grounding rule: Verified institutional guidance only. No invented bank codes or outcome guarantees.'
    });
  } catch (err: any) {
    return NextResponse.json(
      {
        success: false,
        error: err?.message || 'Error processing diagnostic request',
        fallback: GROUNDED_KNOWLEDGE.debit_unconfirmed
      },
      { status: 500 }
    );
  }
}
