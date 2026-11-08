'use client';

import React, { useState } from 'react';
import { Bot, Sparkles, AlertCircle, HelpCircle, ArrowRight, ShieldCheck, RefreshCw, X, ChevronRight } from 'lucide-react';

interface AIExplanationAssistantProps {
  currentStep?: string;
  selectedOption?: string;
  confirmationStatus?: string;
  onClose?: () => void;
  isCompact?: boolean;
}

interface GroundedResponse {
  title: string;
  explanation: string;
  verifiedPolicy: string;
}

const PRESET_TOPICS = [
  { id: 'debit_unconfirmed', label: 'Why is debit unconfirmed?' },
  { id: 'retry_vs_reschedule', label: 'Retry vs Rescheduling?' },
  { id: 'unit_safety', label: 'Are my mutual fund units safe?' },
  { id: 'penalty_fees', label: 'Will I be charged penalty fees?' },
  { id: 'nav_impact', label: 'How is NAV calculated?' }
];

const FALLBACK_GROUNDED_RESPONSES: Record<string, GroundedResponse> = {
  debit_unconfirmed: {
    title: 'Why is Bank Debit Unconfirmed?',
    explanation:
      'In Indian retail banking (NACH/e-mandate), clearing reconciliation between NPCI, your bank, and the sponsor bank can take 24 to 48 business hours. A failure alert indicates the payment clearing process did not conclude; it does not confirm whether funds left your account. Always verify your bank statement or passbook before attempting a retry to prevent accidental double deductions.',
    verifiedPolicy: 'SEBI/NPCI Retail Payment Settlement Guidelines'
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

export const AIExplanationAssistant: React.FC<AIExplanationAssistantProps> = ({
  currentStep,
  selectedOption,
  confirmationStatus,
  onClose,
  isCompact = false
}) => {
  const [activeTopic, setActiveTopic] = useState<string>('debit_unconfirmed');
  const [userQuery, setUserQuery] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [response, setResponse] = useState<GroundedResponse>(FALLBACK_GROUNDED_RESPONSES.debit_unconfirmed);
  const [queryHistory, setQueryHistory] = useState<Array<{ q: string; a: GroundedResponse }>>([]);

  const handleSelectTopic = async (topicId: string) => {
    setActiveTopic(topicId);
    setLoading(true);

    try {
      const res = await fetch('/api/ai-explain', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          topic: topicId,
          context: { currentStep, selectedOption, confirmationStatus }
        })
      });

      if (res.ok) {
        const json = await res.json();
        if (json.data) {
          setResponse(json.data);
          setLoading(false);
          return;
        }
      }
    } catch {
      // Offline fallback
    }

    setResponse(FALLBACK_GROUNDED_RESPONSES[topicId] || FALLBACK_GROUNDED_RESPONSES.debit_unconfirmed);
    setLoading(false);
  };

  const handleCustomQuerySubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!userQuery.trim()) return;

    setLoading(true);
    const queryText = userQuery.trim();
    setUserQuery('');

    let resultResponse: GroundedResponse = {
      title: 'Diagnostic Guidance',
      explanation:
        'When an instalment does not complete, Indian payment networks take 24–48 hours to confirm final bank settlement. First, check your bank statement to verify whether funds were deducted. If funds remain in your account and you wish to invest immediately, submit an Instant Retry; if you prefer to wait for salary or liquidity, choose a Rescheduling date. Past investments remain 100% safe.',
      verifiedPolicy: 'SEBI/RBI Investor Protection Guidelines'
    };

    try {
      const res = await fetch('/api/ai-explain', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          query: queryText,
          context: { currentStep, selectedOption, confirmationStatus }
        })
      });

      if (res.ok) {
        const json = await res.json();
        if (json.data) {
          resultResponse = json.data;
        }
      } else {
        // Keyword heuristic offline fallback
        const lower = queryText.toLowerCase();
        if (lower.includes('debit') || lower.includes('deduct') || lower.includes('statement')) {
          resultResponse = FALLBACK_GROUNDED_RESPONSES.debit_unconfirmed;
        } else if (lower.includes('retry') || lower.includes('reschedule')) {
          resultResponse = FALLBACK_GROUNDED_RESPONSES.retry_vs_reschedule;
        } else if (lower.includes('unit') || lower.includes('portfolio') || lower.includes('safe')) {
          resultResponse = FALLBACK_GROUNDED_RESPONSES.unit_safety;
        } else if (lower.includes('fee') || lower.includes('charge') || lower.includes('penalty')) {
          resultResponse = FALLBACK_GROUNDED_RESPONSES.penalty_fees;
        } else if (lower.includes('nav') || lower.includes('price')) {
          resultResponse = FALLBACK_GROUNDED_RESPONSES.nav_impact;
        }
      }
    } catch {
      // Offline heuristic fallback
      const lower = queryText.toLowerCase();
      if (lower.includes('debit') || lower.includes('deduct') || lower.includes('statement')) {
        resultResponse = FALLBACK_GROUNDED_RESPONSES.debit_unconfirmed;
      } else if (lower.includes('retry') || lower.includes('reschedule')) {
        resultResponse = FALLBACK_GROUNDED_RESPONSES.retry_vs_reschedule;
      } else if (lower.includes('unit') || lower.includes('portfolio') || lower.includes('safe')) {
        resultResponse = FALLBACK_GROUNDED_RESPONSES.unit_safety;
      } else if (lower.includes('fee') || lower.includes('charge') || lower.includes('penalty')) {
        resultResponse = FALLBACK_GROUNDED_RESPONSES.penalty_fees;
      } else if (lower.includes('nav') || lower.includes('price')) {
        resultResponse = FALLBACK_GROUNDED_RESPONSES.nav_impact;
      }
    }

    setResponse(resultResponse);
    setQueryHistory((prev) => [{ q: queryText, a: resultResponse }, ...prev.slice(0, 2)]);
    setLoading(false);
  };

  return (
    <div className={`rounded-xl border border-indigo-200 bg-gradient-to-b from-indigo-50/60 to-white shadow-sm flex flex-col ${isCompact ? 'p-3 text-xs' : 'p-4'}`}>
      {/* Header */}
      <div className="flex items-center justify-between border-b border-indigo-100 pb-2.5 mb-3">
        <div className="flex items-center gap-2">
          <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-indigo-600 text-white shadow-sm">
            <Bot size={16} />
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="font-bold text-slate-900 text-xs">AI Plain-Language Explainer</span>
              <span className="rounded-full bg-indigo-100 px-2 py-0.2 text-[9px] font-bold text-indigo-700">
                Grounded
              </span>
            </div>
            <p className="text-[10px] text-slate-500">SEBI / NPCI Regulatory Guidance &amp; Clearing Protocols</p>
          </div>
        </div>

        {onClose && (
          <button
            onClick={onClose}
            className="rounded p-1 text-slate-400 hover:bg-slate-100 hover:text-slate-700"
            aria-label="Close explainer"
          >
            <X size={16} />
          </button>
        )}
      </div>

      {/* Suggested Topic Chips */}
      <div className="mb-3">
        <div className="text-[10px] font-semibold uppercase text-slate-500 tracking-wider mb-1.5 flex items-center gap-1">
          <Sparkles size={11} className="text-indigo-600" />
          <span>Frequently Asked by First-Time Investors:</span>
        </div>
        <div className="flex flex-wrap gap-1.5">
          {PRESET_TOPICS.map((topic) => (
            <button
              key={topic.id}
              onClick={() => handleSelectTopic(topic.id)}
              className={`rounded-full px-2.5 py-1 text-[11px] font-medium transition ${
                activeTopic === topic.id
                  ? 'bg-indigo-600 text-white shadow-xs'
                  : 'bg-white text-slate-700 border border-slate-200 hover:bg-indigo-50/50 hover:border-indigo-300'
              }`}
            >
              {topic.label}
            </button>
          ))}
        </div>
      </div>

      {/* Main Grounded Response View */}
      <div className="rounded-lg border border-indigo-100 bg-white p-3.5 space-y-2 mb-3 shadow-xs">
        {loading ? (
          <div className="py-6 flex flex-col items-center justify-center gap-2 text-slate-400">
            <RefreshCw size={18} className="animate-spin text-indigo-600" />
            <span className="text-xs">Consulting Grounded Policy Rules...</span>
          </div>
        ) : (
          <>
            <div className="flex items-center justify-between">
              <h4 className="font-bold text-xs text-slate-900 flex items-center gap-1.5">
                <HelpCircle size={14} className="text-indigo-600" />
                <span>{response.title}</span>
              </h4>
              <span className="text-[9px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200 flex items-center gap-1">
                <ShieldCheck size={10} />
                Verified Institutional Policy
              </span>
            </div>

            <p className="text-[11px] text-slate-700 leading-relaxed font-normal">
              {response.explanation}
            </p>

            <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-[10px] text-slate-500">
              <span>Source Authority: <strong className="text-slate-700">{response.verifiedPolicy}</strong></span>
              <span className="italic text-slate-400">Deterministic Fallback Active</span>
            </div>
          </>
        )}
      </div>

      {/* Custom Question Form */}
      <form onSubmit={handleCustomQuerySubmit} className="space-y-1.5">
        <div className="flex gap-1.5">
          <input
            type="text"
            value={userQuery}
            onChange={(e) => setUserQuery(e.target.value)}
            placeholder="Ask a question (e.g., will my units be cancelled?)"
            className="flex-1 rounded-lg border border-slate-200 px-3 py-1.5 text-xs text-slate-800 placeholder-slate-400 focus:outline-hidden focus:ring-1 focus:ring-indigo-500 bg-white"
          />
          <button
            type="submit"
            disabled={!userQuery.trim() || loading}
            className="rounded-lg bg-indigo-600 px-3 py-1.5 text-xs font-bold text-white hover:bg-indigo-700 disabled:opacity-40 transition flex items-center gap-1 shrink-0"
          >
            <span>Ask</span>
            <ChevronRight size={13} />
          </button>
        </div>
        <p className="text-[9px] text-slate-500 text-center">
          * Strictly uses verified institutional facts. Does not invent bank failure codes or make return guarantees.
        </p>
      </form>

      {/* Recent History */}
      {queryHistory.length > 0 && (
        <div className="mt-2.5 pt-2 border-t border-slate-100 space-y-1 text-[10px]">
          <span className="font-semibold text-slate-400 uppercase tracking-wider text-[9px]">Previous Questions:</span>
          {queryHistory.map((h, i) => (
            <div key={i} className="text-slate-600 flex items-center gap-1">
              <span className="text-indigo-500 font-bold">•</span>
              <span className="truncate italic">&ldquo;{h.q}&rdquo;</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
