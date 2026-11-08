import React, { useState } from 'react';
import {
  ClipboardList,
  CheckCircle2,
  Calendar,
  User,
  Tag,
  FileText,
  Printer,
  Sparkles,
  ShieldCheck,
  Award
} from 'lucide-react';
import { INITIAL_DECISION_LOG } from '../data/decisionLogData';
import { DecisionLogEntry } from '../types';

interface DecisionLogProps {
  onPrintReport: () => void;
}

export const DecisionLog: React.FC<DecisionLogProps> = ({ onPrintReport }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Hypothesis', 'Design', 'AI Governance', 'Scope', 'Analytics'];

  const filteredEntries = selectedCategory === 'All'
    ? INITIAL_DECISION_LOG
    : INITIAL_DECISION_LOG.filter(e => e.category === selectedCategory);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-end border-b border-slate-200 pb-4">
        <div>
          <span className="text-xs font-semibold uppercase tracking-wider text-blue-700">Audit &amp; Governance</span>
          <h2 className="mt-1 text-2xl font-bold tracking-tight text-slate-900">
            Product Decision Log &amp; Research Provenance
          </h2>
          <p className="mt-1 text-sm text-slate-600">
            A permanent chronological record of product hypotheses, governance approvals, and design rationales for the NextLeap Graduation Project.
          </p>
        </div>

        <button
          onClick={onPrintReport}
          className="flex items-center gap-1.5 rounded-lg bg-blue-700 px-4 py-2 text-xs font-semibold text-white hover:bg-blue-800 transition shadow-sm"
        >
          <Printer size={14} />
          <span>Generate Graduation Report PDF</span>
        </button>
      </div>

      {/* Category Filter */}
      <div className="flex flex-wrap gap-2 border-b border-slate-100 pb-3">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`rounded-lg px-3 py-1.5 text-xs font-medium transition ${
              selectedCategory === cat
                ? 'bg-blue-700 text-white font-semibold'
                : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-50'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Decision Entries Timeline */}
      <div className="space-y-4">
        {filteredEntries.map((entry) => (
          <div
            key={entry.id}
            className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm space-y-3 hover:border-slate-300 transition"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 pb-3">
              <div className="flex items-center gap-2">
                <span className="font-mono text-xs font-bold text-slate-400">{entry.id}</span>
                <span className="rounded-full bg-slate-100 px-2.5 py-0.5 text-[10px] font-semibold text-slate-700">
                  {entry.category}
                </span>
                <span className="rounded-full bg-emerald-100 px-2.5 py-0.5 text-[10px] font-semibold text-emerald-800 flex items-center gap-1">
                  <CheckCircle2 size={11} />
                  {entry.status}
                </span>
              </div>

              <div className="flex items-center gap-3 text-xs text-slate-500">
                <span className="flex items-center gap-1">
                  <Calendar size={13} className="text-slate-400" />
                  {entry.date}
                </span>
                <span>•</span>
                <span className="flex items-center gap-1 font-medium text-slate-700">
                  <User size={13} className="text-slate-400" />
                  {entry.stakeholder}
                </span>
              </div>
            </div>

            <h3 className="text-base font-bold text-slate-900">{entry.decision}</h3>

            <div className="rounded-lg bg-slate-50 p-3 text-xs leading-5 text-slate-700 border border-slate-100">
              <strong className="text-slate-900 font-semibold">Context &amp; Strategic Rationale: </strong>
              {entry.contextAndRationale}
            </div>
          </div>
        ))}
      </div>

      {/* Graduation Project Summary Box */}
      <div className="rounded-xl border border-blue-200 bg-gradient-to-br from-blue-50/50 via-white to-indigo-50/30 p-6 shadow-sm space-y-4">
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-700">
          <Award size={16} />
          <span>NextLeap Graduation Project Executive Brief</span>
        </div>

        <h3 className="text-lg font-bold text-slate-900">
          INDMoney: SIP Discovery Intelligence &amp; H1 Recovery Assistant
        </h3>

        <div className="grid gap-4 md:grid-cols-2 text-xs text-slate-700 leading-5">
          <div>
            <strong className="text-slate-900">Business Objective: </strong>
            Increase the percentage of first-time mutual fund investors who maintain an active SIP 12 months after starting their first investment.
          </div>
          <div>
            <strong className="text-slate-900">Selected Hypothesis: </strong>
            H1: Bank Mandate Debit Failures (Score 95.7/100). Mitigating involuntary churn through assisted recovery.
          </div>
        </div>

        <div className="pt-2 border-t border-blue-100 flex items-center justify-between text-xs">
          <span className="text-slate-500">Author: PM Graduation Lead • NextLeap Cohort 2026</span>
          <button
            onClick={onPrintReport}
            className="text-blue-700 font-bold hover:underline flex items-center gap-1"
          >
            <span>Open Full Printable Executive PDF</span>
            &rarr;
          </button>
        </div>
      </div>
    </div>
  );
};
