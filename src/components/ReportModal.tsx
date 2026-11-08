import React from 'react';
import { X, Printer, Award, ShieldCheck, CheckCircle2, AlertTriangle, Calendar } from 'lucide-react';
import { H1_DETAILS, PERSONAS, GRADUATION_MILESTONES } from '../data/h1WorkspaceData';
import { INITIAL_OPPORTUNITIES } from '../data/opportunitiesData';
import { INITIAL_THEMES } from '../data/themesData';

interface ReportModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ReportModal: React.FC<ReportModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-sm flex justify-center p-4 sm:p-6">
      <div className="relative w-full max-w-4xl rounded-2xl bg-white shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
        {/* Modal Top Bar */}
        <div className="flex items-center justify-between border-b border-slate-200 px-6 py-4 bg-slate-50 print:hidden">
          <div className="flex items-center gap-2">
            <Award className="text-blue-700" size={20} />
            <span className="font-bold text-slate-900 text-sm">
              NextLeap PM Graduation Report — Final Project Submission
            </span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 rounded-lg bg-blue-700 px-4 py-1.5 text-xs font-semibold text-white hover:bg-blue-800 transition"
            >
              <Printer size={14} />
              <span>Print / Save as PDF</span>
            </button>
            <button
              onClick={onClose}
              className="rounded-lg p-1 text-slate-400 hover:bg-slate-200 hover:text-slate-700 transition"
            >
              <X size={18} />
            </button>
          </div>
        </div>

        {/* Printable Report Content */}
        <div className="p-8 overflow-y-auto space-y-8 font-sans text-slate-900 print:p-0">
          {/* Cover Header */}
          <div className="border-b-2 border-slate-900 pb-6">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-widest text-blue-700">
                INDMoney · NextLeap Product Management Graduation Project
              </span>
              <span className="text-xs text-slate-500 font-bold flex items-center gap-1">
                <Calendar size={12} className="text-blue-700" />
                Target Deadline: 9 November 2026
              </span>
            </div>
            <h1 className="mt-3 text-3xl font-extrabold text-slate-900 tracking-tight">
              SIP Discovery Intelligence &amp; H1 Recovery Assistant
            </h1>
            <p className="mt-2 text-sm text-slate-600 max-w-2xl leading-relaxed">
              An evidence-driven discovery engine and recovery workflow designed to reduce involuntary discontinuation and increase 12-month mutual fund SIP retention among first-time Indian investors.
            </p>
          </div>

          {/* Section 1: Executive Summary & Metric Definition */}
          <div className="space-y-3">
            <h2 className="text-base font-bold uppercase tracking-wider text-slate-900 border-b border-slate-200 pb-1.5">
              1. Business Context &amp; 12-Month Retention Metric
            </h2>
            <div className="grid gap-4 sm:grid-cols-2 text-xs leading-6 text-slate-700">
              <div className="rounded-lg bg-slate-50 p-4 border border-slate-200">
                <strong className="text-slate-900 block mb-1">Strategic Objective:</strong>
                Increase the percentage of first-time mutual fund investors who still have an active SIP 12 months after starting their first investment.
              </div>
              <div className="rounded-lg bg-slate-50 p-4 border border-slate-200">
                <strong className="text-slate-900 block mb-1">Metric Definition:</strong>
                <div>• Denominator: Investors who started their first SIP 12 months prior.</div>
                <div>• Numerator: Investors with &ge;1 successful instalment in the last 30 days.</div>
                <div>• Retention Rate = Numerator / Denominator &times; 100.</div>
                <div className="text-slate-500 text-[10px] mt-1">*Baseline retention figures reflect illustrative market benchmarks until internal production telemetry is connected.</div>
              </div>
            </div>

            {/* Research Data Funnel & Provenance Audit */}
            <div className="rounded-lg border border-slate-200 bg-slate-50 p-3.5 text-xs text-slate-700 space-y-2">
              <div className="font-bold text-slate-900 flex items-center justify-between">
                <span>Research Data Funnel &amp; Metric Provenance (Phase 2 Audit):</span>
                <span className="text-[10px] font-semibold text-blue-700 bg-blue-50 border border-blue-200 px-2 py-0.5 rounded">
                  Target Deadline: 9 Nov 2026
                </span>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                <div className="bg-white p-2 rounded border border-slate-200">
                  <div className="text-[10px] text-slate-500 font-semibold uppercase">Raw Review Corpus</div>
                  <div className="text-sm font-bold text-slate-900">62,523 Reviews</div>
                  <div className="text-[9px] text-slate-500">Actual (Play Store/App Store)</div>
                </div>
                <div className="bg-white p-2 rounded border border-slate-200">
                  <div className="text-[10px] text-slate-500 font-semibold uppercase">Keyword Candidates</div>
                  <div className="text-sm font-bold text-blue-900">235 Reviews</div>
                  <div className="text-[9px] text-blue-700">Filtered (SIP &amp; Mandate terms)</div>
                </div>
                <div className="bg-white p-2 rounded border border-slate-200">
                  <div className="text-[10px] text-slate-500 font-semibold uppercase">Audited Records</div>
                  <div className="text-sm font-bold text-emerald-800">8 Deep-Dive Items</div>
                  <div className="text-[9px] text-emerald-700">Actual (Traceable URLs &amp; Dates)</div>
                </div>
                <div className="bg-white p-2 rounded border border-slate-200">
                  <div className="text-[10px] text-slate-500 font-semibold uppercase">Categorised Themes</div>
                  <div className="text-sm font-bold text-slate-900">5 Themes</div>
                  <div className="text-[9px] text-slate-500">100% Researcher Audited</div>
                </div>
                <div className="bg-white p-2 rounded border border-slate-200">
                  <div className="text-[10px] text-slate-500 font-semibold uppercase">Ranked Bets</div>
                  <div className="text-sm font-bold text-slate-900">5 Opportunities</div>
                  <div className="text-[9px] text-slate-500">Prioritised Opportunity Model</div>
                </div>
                <div className="bg-white p-2 rounded border border-amber-200 bg-amber-50/50">
                  <div className="text-[10px] text-amber-800 font-semibold uppercase">Preliminary H1 Score</div>
                  <div className="text-sm font-bold text-amber-900">95.7 / 100</div>
                  <div className="text-[9px] text-amber-800">Imported Score (Not Validated)</div>
                </div>
              </div>
            </div>
          </div>

          {/* Section 2: Opportunity Prioritization & Selection of H1 */}
          <div className="space-y-3">
            <h2 className="text-base font-bold uppercase tracking-wider text-slate-900 border-b border-slate-200 pb-1.5">
              2. Opportunity Scoring &amp; Selection of Hypothesis H1
            </h2>
            <p className="text-xs text-slate-600 leading-relaxed">
              From exploratory customer review clustering, <strong>H1 / OPP-01: Bank Mandate Debit Failures</strong> emerged as the single highest-impact opportunity with an <em>Imported Preliminary Score of 95.7 / 100</em>.
            </p>

            <table className="w-full text-left text-xs border border-slate-200 rounded-lg overflow-hidden">
              <thead className="bg-slate-100 text-slate-700 text-[11px] uppercase">
                <tr>
                  <th className="p-2.5">Opportunity</th>
                  <th className="p-2.5">Target Segment</th>
                  <th className="p-2.5 text-center">Severity</th>
                  <th className="p-2.5 text-center">Preliminary Score</th>
                  <th className="p-2.5 text-center">Selection Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                {INITIAL_OPPORTUNITIES.map((opp) => (
                  <tr key={opp.id} className={opp.isSelectedForGraduation ? 'bg-blue-50/50 font-semibold' : ''}>
                    <td className="p-2.5">{opp.code}: {opp.title}</td>
                    <td className="p-2.5 text-slate-600">{opp.targetSegment}</td>
                    <td className="p-2.5 text-center text-rose-700">{opp.severityScore}/5.0</td>
                    <td className="p-2.5 text-center font-bold text-blue-900">{opp.overallScore} / 100</td>
                    <td className="p-2.5 text-center">
                      <span className={`px-2 py-0.5 rounded text-[10px] ${opp.isSelectedForGraduation ? 'bg-blue-700 text-white font-bold' : 'bg-slate-100 text-slate-600'}`}>
                        {opp.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Section 3: Target Personas */}
          <div className="space-y-3">
            <h2 className="text-base font-bold uppercase tracking-wider text-slate-900 border-b border-slate-200 pb-1.5">
              3. Target User Personas
            </h2>
            <div className="grid gap-4 sm:grid-cols-2 text-xs">
              {PERSONAS.map((p) => (
                <div key={p.id} className="rounded-lg border border-slate-200 p-4 space-y-2">
                  <div className="font-bold text-slate-900 text-sm">{p.name} ({p.role}, {p.age}y, {p.city})</div>
                  <div className="text-slate-500 font-medium">Bank: {p.bankType} • SIP: {p.sipAmount}</div>
                  <p className="italic text-slate-600 bg-slate-50 p-2 rounded border border-slate-100">&ldquo;{p.quote}&rdquo;</p>
                  <div className="text-rose-700 font-medium">Critical Friction: {p.behaviourAfterFailure}</div>
                  <div className="text-[10px] text-slate-400">Source: {p.evidenceSourceRef}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Section 4: H1 Solution — SIP Recovery Assistant */}
          <div className="space-y-3">
            <h2 className="text-base font-bold uppercase tracking-wider text-slate-900 border-b border-slate-200 pb-1.5">
              4. Proposed Solution: SIP Recovery Assistant (5-Screen Architecture)
            </h2>
            <div className="grid gap-3 sm:grid-cols-3 text-xs">
              <div className="rounded-lg border border-slate-200 p-3 bg-slate-50">
                <div className="font-bold text-blue-900 mb-1">Option 1: Instant UPI Retry</div>
                <p className="text-slate-600 leading-relaxed">Allows investors to clear the missed instalment via UPI within 72 hours, securing same-day NAV if paid before 3:00 PM.</p>
              </div>
              <div className="rounded-lg border border-slate-200 p-3 bg-slate-50">
                <div className="font-bold text-blue-900 mb-1">Option 2: Reschedule Debit Date</div>
                <p className="text-slate-600 leading-relaxed">Shifts future debit dates (e.g. 5th to 10th) to align with salary disbursement without cancelling and re-registering NACH mandates.</p>
              </div>
              <div className="rounded-lg border border-slate-200 p-3 bg-slate-50">
                <div className="font-bold text-blue-900 mb-1">Option 3: Mandate Re-linking</div>
                <p className="text-slate-600 leading-relaxed">Allows users to transition recurring debits to an alternate bank account with higher autopay success rates.</p>
              </div>
            </div>
          </div>

          {/* Section 5: A/B Experimentation & Metrics Framework */}
          <div className="space-y-3">
            <h2 className="text-base font-bold uppercase tracking-wider text-slate-900 border-b border-slate-200 pb-1.5">
              5. A/B Experiment Plan &amp; Metrics
            </h2>
            <div className="rounded-lg border border-slate-200 p-4 text-xs space-y-2 leading-relaxed">
              <div><strong>Design: </strong>2-Arm Randomized Controlled Trial (10,000 first-time SIP investors with mandate failures).</div>
              <div><strong>Control (50%): </strong>Static failure notification ("Your SIP debit failed") leading to unassisted history screen.</div>
              <div><strong>Variant B (50%): </strong>Empathetic notification with ₹0 penalty reassurance leading to SIP Recovery Assistant.</div>
              <div><strong>Primary Metric: </strong>72-Hour Failed Instalment Recovery Rate (Hypothesised target lift: ~18% benchmark &rarr; &gt;65% target).</div>
              <div><strong>Guardrails: </strong>Repeat failure rate (&lt;20%) and user opt-out complaints (&lt;1.5%).</div>
            </div>
          </div>

          {/* Section 6: Research Credibility & Identified Gaps */}
          <div className="space-y-3 border-t border-slate-200 pt-4 text-xs text-slate-500">
            <div className="flex items-center gap-2 font-bold text-slate-700">
              <ShieldCheck size={14} className="text-emerald-600" />
              <span>Research Credibility Protocol &amp; Remaining Gaps</span>
            </div>
            <p>
              This graduation project adheres to rigorous research governance. Public reviews and forum discussions provide valuable qualitative insights regarding user anxiety, fear of bounce penalties, and desire for instant UPI recovery. However, public data cannot verify internal bank gateway timeout ratios or actual historical retention rates. All baseline statistics are explicitly labeled as model assumptions and illustrative benchmarks pending production telemetry access.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
