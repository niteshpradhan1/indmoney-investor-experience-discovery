import React from 'react';
import {
  Lightbulb,
  ArrowUpRight,
  ShieldCheck,
  AlertTriangle,
  Award,
  Smartphone,
  CheckCircle2,
  TrendingUp,
  BarChart2,
  Calculator
} from 'lucide-react';
import { OpportunityItem, NavSection } from '../types';

interface OpportunityMatrixProps {
  opportunities: OpportunityItem[];
  onNavigate: (section: NavSection) => void;
}

export const OpportunityMatrix: React.FC<OpportunityMatrixProps> = ({
  opportunities,
  onNavigate
}) => {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-end border-b border-slate-200 pb-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-blue-700">Opportunity Prioritisation</span>
            <span className="rounded-full bg-slate-100 px-2 py-0.5 text-[10px] font-bold text-slate-600">
              Target Deadline: 9 Nov 2026
            </span>
          </div>
          <h2 className="mt-1 text-2xl font-bold tracking-tight text-slate-900">
            Opportunity Prioritisation &amp; Scoring Provenance
          </h2>
          <p className="mt-1 text-sm text-slate-600">
            Multi-factor scoring framework evaluating candidate bets on frequency, user friction severity, connection to 12-month retention, and evidence quality.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <span className="rounded-full bg-blue-100 text-blue-800 px-3 py-1 text-xs font-semibold">
            H1 Selected · Score 95.7
          </span>
        </div>
      </div>

      {/* Scoring Methodology Box with Mathematical Transparency */}
      <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm text-xs leading-5 text-slate-600 space-y-3">
        <div className="flex items-center gap-2 font-bold text-slate-900 text-sm">
          <Calculator size={16} className="text-blue-700" />
          <span>Preliminary Opportunity Scoring Methodology</span>
        </div>
        <p>
          The opportunity score for H1 was imported as a preliminary ranking score from the exploratory research model. The multi-factor formula weights 5 dimensions on a 1.0 to 5.0 scale:
        </p>

        <div className="rounded-lg bg-slate-50 border border-slate-200 p-3.5 font-mono text-slate-800 space-y-1 text-[11px]">
          <div>Score = 20 &times; [ (0.20 &times; Frequency) + (0.25 &times; Severity) + (0.25 &times; Retention Link) + (0.20 &times; Evidence Quality) + (0.10 &times; Target Segment Relevance) ]</div>
          <div className="text-blue-900 font-bold pt-1">H1 Calculation: 20 &times; [ (0.20 &times; 4.8) + (0.25 &times; 4.9) + (0.25 &times; 4.8) + (0.20 &times; 4.6) + (0.10 &times; 4.5) ] = 20 &times; 4.785 = 95.7 / 100.</div>
        </div>

        <p className="text-[11px] text-amber-800 font-medium bg-amber-50 border border-amber-200 p-2.5 rounded-lg flex items-center gap-1.5">
          <AlertTriangle size={13} className="shrink-0 text-amber-700" />
          <span><strong>Research Guardrail: </strong>This 95.7 score is an imported model output reflecting qualitative priority. It is not an empirically verified retention lift metric. Scores are preserved without automatic fabrication.</span>
        </p>
      </div>

      {/* Selected Opportunity Spotlight */}
      {opportunities.filter(o => o.isSelectedForGraduation).map((h1) => (
        <div
          key={h1.id}
          className="rounded-xl border-2 border-blue-600/40 bg-gradient-to-br from-blue-50/40 via-white to-indigo-50/30 p-6 shadow-sm"
        >
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 border-b border-blue-100 pb-4">
            <div>
              <div className="flex items-center gap-2">
                <span className="rounded-full bg-blue-700 px-3 py-0.5 text-xs font-bold text-white flex items-center gap-1.5">
                  <Award size={13} />
                  Selected for Graduation Project
                </span>
                <span className="rounded-full border border-amber-300 bg-amber-50 px-2.5 py-0.5 text-xs font-semibold text-amber-800 flex items-center gap-1">
                  <AlertTriangle size={12} />
                  Not Validated
                </span>
                <span className="font-mono text-xs font-bold text-blue-900">{h1.code}</span>
              </div>
              <h3 className="mt-2 text-xl font-bold text-slate-900">{h1.title}</h3>
              <p className="mt-1 text-sm text-slate-600 max-w-3xl leading-6">
                <strong>Hypothesis: </strong>{h1.hypothesis}
              </p>
            </div>

            <div className="rounded-xl bg-white border border-blue-200 p-4 shadow-sm text-right min-w-[220px]">
              <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Imported Preliminary Score</div>
              <div className="mt-1 text-3xl font-extrabold text-blue-800">{h1.overallScore} <span className="text-sm font-medium text-slate-400">/ 100</span></div>
              <div className="text-[11px] text-slate-500 mt-0.5">Rank #1 across 5 opportunities</div>
            </div>
          </div>

          {/* Dimension Scores */}
          <div className="mt-4 grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
            <div className="rounded-lg bg-white border border-slate-200 p-3">
              <div className="text-slate-400 font-medium">Frequency Weight (20%)</div>
              <div className="text-sm font-bold text-slate-900 mt-0.5">{h1.frequencyScore} / 5.0</div>
              <div className="text-[10px] text-slate-500">52 keyword cluster mentions</div>
            </div>
            <div className="rounded-lg bg-white border border-slate-200 p-3">
              <div className="text-slate-400 font-medium">User Severity Weight (25%)</div>
              <div className="text-sm font-bold text-rose-700 mt-0.5">{h1.severityScore} / 5.0</div>
              <div className="text-[10px] text-slate-500">Bank penalty anxiety</div>
            </div>
            <div className="rounded-lg bg-white border border-slate-200 p-3">
              <div className="text-slate-400 font-medium">Retention Link (25%)</div>
              <div className="text-sm font-bold text-blue-700 mt-0.5">{h1.retentionLinkScore} / 5.0</div>
              <div className="text-[10px] text-slate-500">Direct involuntary churn</div>
            </div>
            <div className="rounded-lg bg-white border border-slate-200 p-3">
              <div className="text-slate-400 font-medium">Evidence Quality (20%)</div>
              <div className="text-sm font-bold text-emerald-700 mt-0.5">{h1.evidenceQualityScore} / 5.0</div>
              <div className="text-[10px] text-slate-500">Multi-source verified</div>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="mt-5 flex flex-wrap items-center gap-3">
            <button
              onClick={() => onNavigate('h1_workspace')}
              className="flex items-center gap-1.5 rounded-lg bg-blue-700 px-4 py-2.5 text-xs font-semibold text-white hover:bg-blue-800 transition shadow-sm"
            >
              <span>View H1 Project Workspace</span>
              <ArrowUpRight size={14} />
            </button>
            <button
              onClick={() => onNavigate('prototype')}
              className="flex items-center gap-1.5 rounded-lg border border-blue-300 bg-white px-4 py-2.5 text-xs font-semibold text-blue-800 hover:bg-blue-50 transition shadow-sm"
            >
              <Smartphone size={14} />
              <span>Launch Recovery Prototype (5 Screens)</span>
            </button>
            <button
              onClick={() => onNavigate('evidence')}
              className="rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-xs font-medium text-slate-700 hover:bg-slate-50 transition"
            >
              Trace Supporting Evidence
            </button>
          </div>
        </div>
      ))}

      {/* Full Prioritisation Pipeline Table */}
      <div className="rounded-xl border border-slate-200 bg-white shadow-sm overflow-hidden">
        <div className="border-b border-slate-200 px-6 py-4 flex items-center justify-between">
          <h3 className="font-bold text-slate-900 text-sm">Full Opportunity Evaluation Pipeline</h3>
          <span className="text-xs text-slate-500">5 Candidate Bets Evaluated</span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-slate-50 border-b border-slate-200 text-slate-500 uppercase tracking-wider text-[10px]">
              <tr>
                <th className="py-3 px-4">Code</th>
                <th className="py-3 px-4">Opportunity Title</th>
                <th className="py-3 px-4">Evidence Mentions</th>
                <th className="py-3 px-4 text-center">Severity</th>
                <th className="py-3 px-4 text-center">Retention Link</th>
                <th className="py-3 px-4 text-right">Preliminary Score</th>
                <th className="py-3 px-4 text-center">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {opportunities.map((opp) => (
                <tr
                  key={opp.id}
                  className={`hover:bg-slate-50/70 transition ${
                    opp.isSelectedForGraduation ? 'bg-blue-50/30 font-medium' : ''
                  }`}
                >
                  <td className="py-3.5 px-4 font-mono font-bold text-slate-700">{opp.code}</td>
                  <td className="py-3.5 px-4">
                    <div className="font-semibold text-slate-900">{opp.title}</div>
                    <div className="text-[11px] text-slate-500 mt-0.5 line-clamp-1">{opp.hypothesis}</div>
                  </td>
                  <td className="py-3.5 px-4 text-slate-700">{opp.evidenceCount} mentions</td>
                  <td className="py-3.5 px-4 text-center font-semibold text-rose-700">{opp.severityScore} / 5</td>
                  <td className="py-3.5 px-4 text-center font-semibold text-blue-700">{opp.retentionLinkScore} / 5</td>
                  <td className="py-3.5 px-4 text-right">
                    <span className="font-bold text-slate-900 text-sm">{opp.overallScore}</span>
                    <span className="text-slate-400 text-[10px]"> / 100</span>
                  </td>
                  <td className="py-3.5 px-4 text-center">
                    <span
                      className={`rounded-full px-2.5 py-0.5 text-[10px] font-semibold ${
                        opp.isSelectedForGraduation
                          ? 'bg-blue-700 text-white'
                          : opp.status === 'Backlog'
                          ? 'bg-slate-100 text-slate-700'
                          : 'bg-amber-100 text-amber-800'
                      }`}
                    >
                      {opp.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
