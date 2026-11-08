import React from 'react';
import {
  PieChart,
  ShieldCheck,
  AlertCircle,
  CheckCircle2,
  Clock,
  ArrowRight,
  Sparkles,
  Quote,
  AlertTriangle
} from 'lucide-react';
import { ThemeItem, NavSection } from '../types';

interface ThemesInsightsProps {
  themes: ThemeItem[];
  onToggleApproval: (id: string) => void;
  onNavigateToH1: () => void;
}

export const ThemesInsights: React.FC<ThemesInsightsProps> = ({
  themes,
  onToggleApproval,
  onNavigateToH1
}) => {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-end border-b border-slate-200 pb-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-blue-700">Themes &amp; Insights</span>
            <span className="rounded-full bg-slate-100 px-2 py-0.5 text-[10px] font-bold text-slate-600">
              Target Deadline: 9 Nov 2026
            </span>
          </div>
          <h2 className="mt-1 text-2xl font-bold tracking-tight text-slate-900">
            Categorised Friction &amp; Behavioural Barriers
          </h2>
          <p className="mt-1 text-sm text-slate-600">
            NLP clustering synthesises raw feedback into recurring barriers. Every theme requires human verification and PM sign-off before informing product bets.
          </p>
        </div>

        <div className="flex items-center gap-2 rounded-lg bg-emerald-50 border border-emerald-200 px-3 py-1.5 text-xs text-emerald-800 font-medium">
          <ShieldCheck size={14} className="text-emerald-600" />
          <span>Human-Audited Themes</span>
        </div>
      </div>

      {/* AI Assistance Policy Notice */}
      <div className="rounded-xl border border-blue-200 bg-blue-50/50 p-4 text-xs leading-5 text-blue-900 flex items-start gap-3">
        <Sparkles size={18} className="text-blue-700 shrink-0 mt-0.5" />
        <div>
          <strong className="font-semibold text-blue-950">AI Policy: </strong>
          LLM embeddings and keyword co-occurrence group raw customer comments into preliminary clusters. Product Managers review cluster coherence, establish severity levels, and separate general complaints from SIP-specific friction.
        </div>
      </div>

      {/* Theme Cards List */}
      <div className="space-y-4">
        {themes.map((theme) => {
          const isH1 = theme.id === 'TH-01';
          const isApproved = theme.humanReviewStatus === 'approved';

          return (
            <div
              key={theme.id}
              className={`rounded-xl border p-5 shadow-sm transition ${
                isH1
                  ? 'border-2 border-blue-600/40 bg-gradient-to-br from-white to-blue-50/30'
                  : 'border-slate-200 bg-white'
              }`}
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 pb-4">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs font-bold text-slate-400">{theme.id}</span>
                    <span className="rounded-full bg-slate-100 px-2 py-0.5 text-[10px] font-bold text-slate-600">
                      Rank #{theme.frequencyRank}
                    </span>
                    <span
                      className={`rounded-full px-2.5 py-0.5 text-[10px] font-semibold ${
                        theme.severityLevel === 'Critical'
                          ? 'bg-rose-100 text-rose-800'
                          : theme.severityLevel === 'High'
                          ? 'bg-amber-100 text-amber-800'
                          : 'bg-slate-100 text-slate-700'
                      }`}
                    >
                      {theme.severityLevel} Severity
                    </span>
                    {isH1 && (
                      <span className="rounded-full bg-blue-700 text-white px-2.5 py-0.5 text-[10px] font-semibold">
                        Selected for H1 Workspace
                      </span>
                    )}
                  </div>
                  <h3 className="text-lg font-bold text-slate-900">{theme.title}</h3>
                </div>

                <div className="flex items-center gap-3">
                  <div className="text-right">
                    <div className="text-xs font-bold text-slate-900">
                      {theme.sampleCount} cluster mentions
                    </div>
                    <div className="text-[11px] text-slate-500">
                      ({theme.verifiedSampleCount} verified SIP-specific)
                    </div>
                  </div>

                  <button
                    onClick={() => onToggleApproval(theme.id)}
                    className={`flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-semibold transition ${
                      isApproved
                        ? 'border border-emerald-300 bg-emerald-50 text-emerald-800 hover:bg-emerald-100'
                        : 'border border-amber-300 bg-amber-50 text-amber-800 hover:bg-amber-100'
                    }`}
                  >
                    {isApproved ? (
                      <>
                        <CheckCircle2 size={13} className="text-emerald-600" />
                        <span>Approved</span>
                      </>
                    ) : (
                      <>
                        <Clock size={13} className="text-amber-600" />
                        <span>Needs Validation</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* Description */}
              <p className="mt-3 text-xs leading-5 text-slate-600">{theme.description}</p>

              {/* Representative Quotes */}
              <div className="mt-4 space-y-2">
                <div className="text-[10px] font-semibold uppercase tracking-wider text-slate-400">
                  Sample Verbatim Evidence
                </div>
                <div className="grid gap-2 sm:grid-cols-2">
                  {theme.keyQuotes.map((quote, qIdx) => (
                    <div
                      key={qIdx}
                      className="rounded-lg bg-slate-50 border border-slate-100 p-2.5 text-xs text-slate-700 italic flex items-start gap-2"
                    >
                      <Quote size={13} className="text-slate-400 shrink-0 mt-0.5" />
                      <span>&ldquo;{quote}&rdquo;</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action / Next Step */}
              <div className="mt-4 pt-3 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
                <div>
                  <span className="font-semibold text-slate-700">Recommended PM Action: </span>
                  <span className="text-slate-600">{theme.suggestedAction}</span>
                </div>

                {isH1 ? (
                  <button
                    onClick={onNavigateToH1}
                    className="flex items-center gap-1 font-semibold text-blue-700 hover:text-blue-900 transition shrink-0"
                  >
                    <span>View H1 Workspace</span>
                    <ArrowRight size={13} />
                  </button>
                ) : (
                  <span className="text-slate-400 italic text-[11px]">Logged in Product Backlog</span>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
