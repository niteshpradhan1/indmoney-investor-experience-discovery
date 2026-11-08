import React from 'react';
import {
  BookOpen,
  CircleDot,
  Lightbulb,
  ShieldCheck,
  ArrowUpRight,
  Wallet,
  FileText,
  Search,
  CheckCircle2,
  AlertTriangle,
  Smartphone,
  ExternalLink,
  Calendar,
  Database,
  Filter,
  Layers,
  Info
} from 'lucide-react';
import { NavSection } from '../types';

interface OverviewSectionProps {
  onNavigate: (section: NavSection) => void;
  evidenceCount: number;
  themeCount: number;
  opportunityCount: number;
}

export const OverviewSection: React.FC<OverviewSectionProps> = ({
  onNavigate,
  evidenceCount,
  themeCount,
  opportunityCount
}) => {
  const stats = [
    {
      label: 'Original Reviews Ingested',
      value: '62,523',
      badge: 'Actual Raw Corpus',
      badgeClass: 'bg-slate-100 text-slate-700 border-slate-200',
      note: 'Play Store & App Store dataset (May 2021 – Sep 2026)',
      icon: Database
    },
    {
      label: 'Keyword-Screened Candidates',
      value: '235',
      badge: 'Filtered Subset',
      badgeClass: 'bg-blue-50 text-blue-700 border-blue-200',
      note: 'Filtered via SIP, Mandate, Autopay & Failure terms',
      icon: Filter
    },
    {
      label: 'Audited Evidence Records',
      value: evidenceCount.toString(),
      badge: 'Actual Audited Evidence',
      badgeClass: 'bg-emerald-50 text-emerald-700 border-emerald-200',
      note: 'Verified with original URLs, dates & researcher reviews',
      icon: BookOpen
    },
    {
      label: 'Human-Reviewed Themes',
      value: themeCount.toString(),
      badge: 'Human Reviewed',
      badgeClass: 'bg-emerald-50 text-emerald-700 border-emerald-200',
      note: '100% researcher audited classifications',
      icon: CircleDot
    },
    {
      label: 'Ranked Opportunities',
      value: opportunityCount.toString(),
      badge: 'Prioritised Pipeline',
      badgeClass: 'bg-purple-50 text-purple-700 border-purple-200',
      note: 'Multi-factor weighted scoring model',
      icon: Lightbulb
    },
    {
      label: 'H1 Opportunity Score',
      value: '95.7 / 100',
      badge: 'Imported Preliminary',
      badgeClass: 'bg-amber-50 text-amber-800 border-amber-300',
      note: 'Mandate Failure Recovery (Unvalidated Hypothesis)',
      icon: ShieldCheck
    },
  ];

  const discoverySteps = [
    { num: 1, label: 'Collect Feedback', desc: 'Ingest 62,523 reviews from Google Play Store & iOS App Store' },
    { num: 2, label: 'Screen Candidates', desc: 'Filter 235 candidate reviews matching SIP, NACH & mandate failure' },
    { num: 3, label: 'Audit Customer Voice', desc: 'Verify 8 deep-dive records with original URLs, dates & verbatim text' },
    { num: 4, label: 'Human Review Insights', desc: 'Classify into 5 themes; approve, reject, or flag items for further validation' },
    { num: 5, label: 'Evaluate Business Impact', desc: 'Hypothesise connection to 12-month active SIP retention denominator' },
    { num: 6, label: 'Opportunity Scoring', desc: 'Rank opportunities via transparent formula (Frequency, Severity, Retention, Quality)' },
    { num: 7, label: 'Select H1 Hypothesis', desc: 'H1: Bank Mandate Debit Failure Recovery (Imported score: 95.7)' },
    { num: 8, label: 'Prototype & Experiment', desc: '5-screen mobile SIP Recovery Assistant prototype & A/B experiment design' },
  ];

  const auditClassifications = [
    {
      metric: '62,523 Reviews',
      classification: 'Actual Data (Raw Corpus)',
      badgeClass: 'bg-slate-100 text-slate-800 border-slate-300',
      description: 'Ingested raw customer review corpus across Google Play Store and App Store from May 2021 to September 2026.',
      actionableState: 'Static raw baseline dataset'
    },
    {
      metric: '235 Candidate Reviews',
      classification: 'Imported (Filtered Subset)',
      badgeClass: 'bg-blue-100 text-blue-800 border-blue-300',
      description: 'Keyword-filtered subset matching "SIP", "mandate", "autopay", "NACH", "failed debit", "penalty", "SBI", and "bounce".',
      actionableState: 'Input candidate batch'
    },
    {
      metric: '8 Audited Evidence Items',
      classification: 'Actual (Audited Evidence)',
      badgeClass: 'bg-emerald-100 text-emerald-800 border-emerald-300',
      description: 'Deep-dive verbatim records with traceable URLs, verified dates, and lead PM review notes in the Evidence Library.',
      actionableState: '100% human-verified and editable'
    },
    {
      metric: '5 Research Themes',
      classification: 'Human-Reviewed Insight',
      badgeClass: 'bg-emerald-100 text-emerald-800 border-emerald-300',
      description: 'Recurring friction categories audited by researcher. AI drafts require human approval before inclusion.',
      actionableState: 'Fully researcher-governed'
    },
    {
      metric: '5 Ranked Opportunities',
      classification: 'Prioritised Strategic Pipeline',
      badgeClass: 'bg-purple-100 text-purple-800 border-purple-300',
      description: 'Pipeline of product hypotheses ranked by multi-factor weighted scoring formula.',
      actionableState: 'Prioritised for discovery'
    },
    {
      metric: 'H1 Score: 95.7 / 100',
      classification: 'Imported Preliminary Score',
      badgeClass: 'bg-amber-100 text-amber-800 border-amber-300',
      description: 'Preliminary weighted scoring output for H1 (Bank Mandate Debit Failures). Preserved as preliminary baseline.',
      actionableState: 'Unvalidated research hypothesis'
    },
    {
      metric: '₹295 Bank Return Charge',
      classification: 'Illustrative Benchmark',
      badgeClass: 'bg-slate-100 text-slate-700 border-slate-300',
      description: 'Illustrative representative bank NACH bounce charge (varies by bank from ₹250 to ₹500 + GST). Not an INDMoney charge.',
      actionableState: 'Benchmark context (varies by bank)'
    },
    {
      metric: '~18% to >65% Recovery Rate',
      classification: 'Hypothesised Experiment Target',
      badgeClass: 'bg-amber-100 text-amber-900 border-amber-300',
      description: 'Baseline hypothesis (~18% 72h recovery) vs. prototype target (>65%). Requires live production A/B experiment validation.',
      actionableState: 'Pending live A/B trial'
    }
  ];

  return (
    <div className="space-y-6">
      {/* Top Banner */}
      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end border-b border-slate-200 pb-5">
        <div>
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-blue-700">
            <span>NextLeap PM Graduation Project</span>
            <span>•</span>
            <span className="flex items-center gap-1 text-slate-700 font-bold">
              <Calendar size={12} className="text-blue-700" />
              Target Deadline: 9 November 2026
            </span>
          </div>
          <h2 className="mt-1 text-2xl font-bold tracking-tight text-slate-900">
            Understand investor friction. Decide with evidence.
          </h2>
          <p className="mt-1.5 max-w-2xl text-sm leading-6 text-slate-600">
            A human-centred discovery engine examining why first-time Indian mutual fund investors pause, miss, or discontinue SIPs, with dedicated discovery for Hypothesis H1.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <button
            onClick={() => onNavigate('review_workspace')}
            className="flex items-center gap-1.5 rounded-lg border border-blue-300 bg-blue-50 px-3.5 py-2 text-xs font-semibold text-blue-900 hover:bg-blue-100 transition shadow-sm"
          >
            <Filter size={14} className="text-blue-700" />
            <span>Review 235 Candidates</span>
          </button>
          <button
            onClick={() => onNavigate('evidence')}
            className="flex items-center gap-1.5 rounded-lg border border-slate-300 bg-white px-3.5 py-2 text-xs font-medium text-slate-700 hover:bg-slate-50 transition shadow-sm"
          >
            <Search size={14} />
            <span>Audited Evidence (8)</span>
          </button>
          <button
            onClick={() => onNavigate('prototype')}
            className="flex items-center gap-1.5 rounded-lg bg-blue-700 px-4 py-2 text-xs font-medium text-white hover:bg-blue-800 transition shadow-sm"
          >
            <Smartphone size={14} />
            <span>Launch H1 Prototype</span>
          </button>
        </div>
      </div>

      {/* Stats Grid: 6 Verified Metrics with Provenance Labels */}
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {stats.map(({ label, value, badge, badgeClass, note, icon: Icon }) => (
          <div key={label} className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm hover:border-slate-300 transition flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between text-xs font-medium text-slate-500">
                <span className="font-semibold text-slate-700">{label}</span>
                <Icon size={16} className="text-blue-700" />
              </div>
              <div className="mt-2 text-2xl font-extrabold text-slate-900">{value}</div>
            </div>
            <div className="mt-3 pt-2.5 border-t border-slate-100 flex items-center justify-between gap-2">
              <span className={`rounded-full border px-2 py-0.5 text-[10px] font-semibold whitespace-nowrap ${badgeClass}`}>
                {badge}
              </span>
              <span className="text-[11px] text-slate-500 truncate" title={note}>
                {note}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Main Focus: Selected Opportunity H1 Banner */}
      <div className="rounded-xl border-2 border-blue-600/30 bg-gradient-to-br from-blue-50/50 via-white to-indigo-50/30 p-6 shadow-sm">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-blue-100 pb-4">
          <div>
            <div className="flex items-center gap-2">
              <span className="rounded-full bg-blue-700 px-2.5 py-0.5 text-xs font-semibold text-white">
                Selected for Graduation Project
              </span>
              <span className="rounded-full border border-amber-300 bg-amber-50 px-2.5 py-0.5 text-xs font-semibold text-amber-800 flex items-center gap-1">
                <AlertTriangle size={12} />
                Unvalidated Research Hypothesis
              </span>
            </div>
            <h3 className="mt-2 text-xl font-bold text-slate-900">
              H1 / OPP-01: Bank Mandate Debit Failures
            </h3>
            <p className="mt-1 text-sm text-slate-600 max-w-3xl">
              Hypothesis: First-time SIP investors frequently discontinue their investments following bank mandate debit rejections because error messaging is opaque, penalties are feared, and no clear in-app recovery path exists.
            </p>
          </div>

          <div className="rounded-xl bg-white border border-blue-200 p-4 shadow-sm text-right min-w-[200px]">
            <div className="text-[10px] uppercase tracking-wider font-bold text-slate-400">Imported Preliminary Score</div>
            <div className="mt-1 text-3xl font-extrabold text-blue-800">95.7 <span className="text-sm font-medium text-slate-400">/ 100</span></div>
            <div className="text-[11px] text-slate-500 font-medium mt-0.5">Rank #1 • Multi-Factor Formula</div>
          </div>
        </div>

        <div className="mt-4 grid gap-4 md:grid-cols-3">
          <div className="rounded-lg bg-white/80 border border-slate-200 p-3.5">
            <div className="text-xs font-semibold text-slate-500 uppercase tracking-wide">Target Users</div>
            <div className="mt-1 text-sm font-medium text-slate-800">First-time SIP investors (PSU bank accounts &amp; salary mismatches)</div>
          </div>
          <div className="rounded-lg bg-white/80 border border-slate-200 p-3.5">
            <div className="text-xs font-semibold text-slate-500 uppercase tracking-wide">Primary Friction</div>
            <div className="mt-1 text-sm font-medium text-slate-800">Opaque bank failure codes, zero instant retry, fear of bounce charges</div>
          </div>
          <div className="rounded-lg bg-white/80 border border-slate-200 p-3.5">
            <div className="text-xs font-semibold text-slate-500 uppercase tracking-wide">A/B Target (Hypothesised)</div>
            <div className="mt-1 text-sm font-medium text-slate-800">Lift 72h recovery from ~18% (benchmark) to &gt;65% (target)</div>
          </div>
        </div>

        <div className="mt-5 flex flex-wrap items-center gap-3">
          <button
            onClick={() => onNavigate('h1_workspace')}
            className="flex items-center gap-2 rounded-lg bg-blue-700 px-4 py-2.5 text-xs font-semibold text-white hover:bg-blue-800 transition shadow-sm"
          >
            <span>Open Dedicated H1 Workspace</span>
            <ArrowUpRight size={14} />
          </button>
          <button
            onClick={() => onNavigate('review_workspace')}
            className="flex items-center gap-1.5 rounded-lg border border-blue-300 bg-white px-4 py-2.5 text-xs font-semibold text-blue-900 hover:bg-blue-50 transition shadow-sm"
          >
            <Filter size={14} className="text-blue-700" />
            <span>Review 235 Candidates</span>
          </button>
          <button
            onClick={() => onNavigate('prototype')}
            className="flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-xs font-semibold text-slate-800 hover:bg-slate-50 transition shadow-sm"
          >
            <Smartphone size={14} />
            <span>Launch SIP Recovery Assistant (5 Screens)</span>
          </button>
          <button
            onClick={() => onNavigate('evidence')}
            className="rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-xs font-medium text-slate-700 hover:bg-slate-50 transition"
          >
            Audit Evidence Registry (8)
          </button>
        </div>
      </div>

      {/* Task 4: Research Metric Integrity & Data Classification Audit */}
      <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 pb-3">
          <div className="flex items-center gap-2">
            <ShieldCheck size={18} className="text-blue-700" />
            <h3 className="font-bold text-slate-900">Research Metric Integrity &amp; Provenance Audit</h3>
          </div>
          <span className="text-[11px] font-semibold text-slate-500 bg-slate-100 px-2.5 py-1 rounded-full">
            Data Provenance Protocol: Actual vs Imported vs Illustrative
          </span>
        </div>

        <p className="text-xs text-slate-600 leading-relaxed">
          To maintain strict academic and professional research credibility, all values in this discovery dashboard are explicitly classified.
          No metrics are fabricated; unverified hypotheses and external benchmarks remain clearly distinguished from verified customer research.
        </p>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs border border-slate-200 rounded-lg overflow-hidden">
            <thead className="bg-slate-50 text-slate-700 text-[11px] uppercase font-semibold">
              <tr>
                <th className="p-2.5 border-b border-slate-200">Metric / Value</th>
                <th className="p-2.5 border-b border-slate-200">Data Tier Classification</th>
                <th className="p-2.5 border-b border-slate-200">Source Description &amp; Provenance</th>
                <th className="p-2.5 border-b border-slate-200">Research Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {auditClassifications.map((row, idx) => (
                <tr key={idx} className="hover:bg-slate-50/70 transition">
                  <td className="p-2.5 font-bold text-slate-900 whitespace-nowrap">{row.metric}</td>
                  <td className="p-2.5 whitespace-nowrap">
                    <span className={`inline-flex items-center rounded-full border px-2 py-0.5 text-[10px] font-semibold ${row.badgeClass}`}>
                      {row.classification}
                    </span>
                  </td>
                  <td className="p-2.5 text-slate-600 max-w-md">{row.description}</td>
                  <td className="p-2.5 font-medium text-slate-700 whitespace-nowrap">{row.actionableState}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* 2-Column Section: 8-Step Process & Research Guardrails */}
      <div className="grid gap-6 xl:grid-cols-[1.3fr_.7fr]">
        {/* 8-Step Discovery Process */}
        <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
          <div className="flex items-center justify-between border-b border-slate-100 pb-3">
            <div>
              <h3 className="font-bold text-slate-900">8-Step PM Research Methodology</h3>
              <p className="text-xs text-slate-500 mt-0.5">End-to-end framework applied in this discovery engine</p>
            </div>
            <span className="text-xs font-medium text-blue-700 bg-blue-50 px-2.5 py-1 rounded-full">
              Phase 2 Active
            </span>
          </div>

          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            {discoverySteps.map((step) => (
              <div
                key={step.num}
                className={`rounded-lg border p-3 text-xs transition ${
                  step.num === 7 || step.num === 8
                    ? 'border-blue-300 bg-blue-50/50'
                    : 'border-slate-100 bg-slate-50/50'
                }`}
              >
                <div className="flex items-center gap-2">
                  <span className={`flex h-5 w-5 items-center justify-center rounded-full text-[10px] font-bold ${
                    step.num === 7 || step.num === 8 ? 'bg-blue-700 text-white' : 'bg-slate-200 text-slate-700'
                  }`}>
                    {step.num}
                  </span>
                  <span className="font-semibold text-slate-900">{step.label}</span>
                </div>
                <p className="mt-1 text-slate-600 pl-7 text-[11px] leading-4">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Research Guardrails */}
        <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
          <div className="flex items-center gap-2 border-b border-slate-100 pb-3">
            <ShieldCheck size={18} className="text-blue-700" />
            <h3 className="font-bold text-slate-900">Research Credibility Guardrails</h3>
          </div>

          <ul className="mt-4 space-y-3 text-xs leading-5 text-slate-600">
            <li className="flex items-start gap-2">
              <CheckCircle2 size={14} className="text-emerald-600 mt-0.5 shrink-0" />
              <span><strong>Separation of Datasets:</strong> 62,523 raw reviews and 235 keyword-screened candidates are kept strictly distinct from the 8 audited deep-dive records.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 size={14} className="text-emerald-600 mt-0.5 shrink-0" />
              <span><strong>Explicit Provenance:</strong> Every evidence item contains direct links or record IDs from Google Play, Reddit, or interviews.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 size={14} className="text-emerald-600 mt-0.5 shrink-0" />
              <span><strong>Metric Integrity:</strong> Unsupported metrics are clearly labeled as illustrative benchmarks or experiment targets.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 size={14} className="text-emerald-600 mt-0.5 shrink-0" />
              <span><strong>Human Review Lifecycle:</strong> AI suggestions remain draft until explicitly Approved, Rejected, or Flagged by researchers.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 size={14} className="text-emerald-600 mt-0.5 shrink-0" />
              <span><strong>Illustrative Demo Safety:</strong> All payment screens in the SIP Recovery prototype are simulated. No real banking credentials are used.</span>
            </li>
          </ul>

          <div className="mt-5 border-t border-slate-100 pt-3 flex items-center justify-between text-[11px] text-slate-500">
            <span className="flex items-center gap-1">
              <FileText size={13} className="text-slate-400" />
              NextLeap Submission: 9 Nov 2026
            </span>
            <button
              onClick={() => onNavigate('decision_log')}
              className="text-blue-700 hover:underline font-medium"
            >
              View Decision Log &rarr;
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
