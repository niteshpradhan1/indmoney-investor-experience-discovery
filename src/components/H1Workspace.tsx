import React, { useState } from 'react';
import {
  AlertTriangle,
  Zap,
  Users,
  ArrowRight,
  BarChart2,
  Target,
  Flag,
  ShieldCheck,
  CheckCircle2,
  Clock,
  Sparkles,
  Smartphone,
  Quote,
  HelpCircle,
  FileText,
  ExternalLink,
  Layers,
  Award
} from 'lucide-react';
import { H1_DETAILS, PERSONAS, CURRENT_JOURNEY, PROPOSED_JOURNEY, GRADUATION_MILESTONES } from '../data/h1WorkspaceData';

interface H1WorkspaceProps {
  onNavigateToPrototype: () => void;
  onNavigateToEvidence: () => void;
}

type H1SectionId =
  | 'A' // Observed customer evidence
  | 'B' // Repeated customer complaints
  | 'C' // Research assumptions
  | 'D' // Unanswered questions
  | 'E' // Business impact hypothesis
  | 'F' // Validation status
  | 'G'; // Product opportunities

export const H1Workspace: React.FC<H1WorkspaceProps> = ({
  onNavigateToPrototype,
  onNavigateToEvidence
}) => {
  const [activeSection, setActiveSection] = useState<H1SectionId>('A');

  const sections: { id: H1SectionId; code: string; label: string; icon: React.FC<{ size?: number; className?: string }> }[] = [
    { id: 'A', code: 'A', label: 'Observed Customer Evidence', icon: Quote },
    { id: 'B', code: 'B', label: 'Repeated Customer Complaints', icon: AlertTriangle },
    { id: 'C', code: 'C', label: 'Research Assumptions', icon: Layers },
    { id: 'D', code: 'D', label: 'Unanswered Questions', icon: HelpCircle },
    { id: 'E', code: 'E', label: 'Business Impact Hypothesis', icon: BarChart2 },
    { id: 'F', code: 'F', label: 'Validation Status', icon: ShieldCheck },
    { id: 'G', code: 'G', label: 'Product Opportunities', icon: Zap },
  ];

  return (
    <div className="space-y-6">
      {/* Workspace Header */}
      <div className="rounded-xl border border-blue-200 bg-white p-6 shadow-sm">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 border-b border-slate-100 pb-5">
          <div>
            <div className="flex items-center gap-2">
              <span className="rounded-full bg-blue-700 px-3 py-0.5 text-xs font-bold text-white">
                NextLeap PM Graduation Workspace
              </span>
              <span className="rounded-full border border-amber-300 bg-amber-50 px-2.5 py-0.5 text-xs font-semibold text-amber-800 flex items-center gap-1">
                <AlertTriangle size={12} />
                Unvalidated Research Hypothesis
              </span>
              <span className="rounded-full bg-slate-100 px-2.5 py-0.5 text-xs font-medium text-slate-600">
                Target: {H1_DETAILS.targetDeadline}
              </span>
            </div>
            <h2 className="mt-2 text-2xl font-bold text-slate-900">
              H1: Bank Mandate Debit Failure Recovery
            </h2>
            <p className="mt-1 text-sm text-slate-600 max-w-3xl">
              Focus: Investigating involuntary SIP drop-offs following bank mandate debits, separating observed customer voice from speculative metrics, and designing assisted recovery.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={onNavigateToEvidence}
              className="rounded-lg border border-slate-300 bg-white px-3 py-2 text-xs font-medium text-slate-700 hover:bg-slate-50 transition shadow-sm"
            >
              Trace All Evidence
            </button>
            <button
              onClick={onNavigateToPrototype}
              className="flex items-center gap-1.5 rounded-lg bg-blue-700 px-4 py-2 text-xs font-semibold text-white hover:bg-blue-800 transition shadow-sm"
            >
              <Smartphone size={14} />
              <span>Launch Prototype (5 Screens)</span>
            </button>
          </div>
        </div>

        {/* 7 Required Sections Tab Navigation (A to G) */}
        <div className="mt-4 flex flex-wrap gap-1 border-b border-slate-200">
          {sections.map((sec) => {
            const Icon = sec.icon;
            const isActive = activeSection === sec.id;

            return (
              <button
                key={sec.id}
                onClick={() => setActiveSection(sec.id)}
                className={`flex items-center gap-1.5 px-3.5 py-2.5 text-xs font-semibold border-b-2 transition -mb-px ${
                  isActive
                    ? 'border-blue-700 text-blue-900 bg-blue-50/50'
                    : 'border-transparent text-slate-500 hover:text-slate-800 hover:border-slate-300'
                }`}
              >
                <span className={`h-4 w-4 rounded-full flex items-center justify-center text-[10px] font-bold ${
                  isActive ? 'bg-blue-700 text-white' : 'bg-slate-200 text-slate-600'
                }`}>
                  {sec.code}
                </span>
                <span className="hidden sm:inline">{sec.label}</span>
              </button>
            );
          })}
        </div>

        {/* SECTION A: Observed Customer Evidence */}
        {activeSection === 'A' && (
          <div className="mt-6 space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wide">
                  Section A · Observed Customer Evidence (Traceable Records)
                </h3>
                <p className="text-xs text-slate-500">
                  Direct customer voice extracted from public stores and verified research records.
                </p>
              </div>
              <span className="text-xs font-semibold text-blue-700 bg-blue-50 px-2.5 py-1 rounded-full">
                4 Verified Audit Samples
              </span>
            </div>

            <div className="grid gap-3 md:grid-cols-2">
              {H1_DETAILS.observedCustomerEvidence.map((obs) => (
                <div key={obs.id} className="rounded-xl border border-slate-200 bg-slate-50/50 p-4 space-y-3">
                  <div className="flex items-center justify-between border-b border-slate-200/60 pb-2 text-[11px]">
                    <span className="font-mono font-bold text-slate-500">{obs.reviewRef}</span>
                    <span className="text-slate-400">{obs.source} • {obs.date}</span>
                  </div>

                  <p className="text-xs italic text-slate-800 leading-relaxed bg-white p-3 rounded-lg border border-slate-100">
                    &ldquo;{obs.verbatim}&rdquo;
                  </p>

                  <div className="text-xs text-slate-700">
                    <strong className="text-slate-900">Observation: </strong>
                    {obs.observation}
                  </div>

                  <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-[10px] text-emerald-800 font-medium">
                    <span className="flex items-center gap-1">
                      <CheckCircle2 size={11} className="text-emerald-600" />
                      {obs.traceability}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* SECTION B: Repeated Customer Complaints */}
        {activeSection === 'B' && (
          <div className="mt-6 space-y-4">
            <div>
              <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wide">
                Section B · Repeated Customer Complaints &amp; Failure Modes
              </h3>
              <p className="text-xs text-slate-500">
                Synthesised patterns of friction recurring across multiple reviews.
              </p>
            </div>

            <div className="space-y-3">
              {H1_DETAILS.repeatedCustomerComplaints.map((comp, idx) => (
                <div key={idx} className="rounded-xl border border-slate-200 bg-white p-4 space-y-2">
                  <div className="flex items-center justify-between">
                    <h4 className="font-bold text-slate-900 text-xs">{comp.category}</h4>
                    <span className="rounded bg-slate-100 px-2 py-0.5 text-[10px] font-semibold text-slate-600">
                      {comp.frequencyInCluster}
                    </span>
                  </div>
                  <p className="text-xs text-slate-600 leading-5">{comp.description}</p>
                  <div className="rounded bg-rose-50 border border-rose-100 p-2 text-[11px] text-rose-900">
                    <strong>User Impact: </strong>{comp.userImpact}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* SECTION C: Research Assumptions */}
        {activeSection === 'C' && (
          <div className="mt-6 space-y-4">
            <div>
              <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wide">
                Section C · Research Assumptions (Explicitly Documented)
              </h3>
              <p className="text-xs text-slate-500">
                Separating observed customer feedback from deductive product hypotheses.
              </p>
            </div>

            <div className="space-y-3">
              {H1_DETAILS.researchAssumptions.map((asm) => (
                <div key={asm.id} className="rounded-xl border border-blue-200 bg-blue-50/30 p-4 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-bold text-blue-900">{asm.id}</span>
                    <span className="rounded-full bg-blue-100 px-2.5 py-0.5 text-[10px] font-bold text-blue-800">
                      {asm.confidence}
                    </span>
                  </div>
                  <h4 className="text-xs font-bold text-slate-900 leading-5">{asm.assumption}</h4>
                  <div className="pt-2 border-t border-blue-100 text-xs text-slate-600">
                    <strong className="text-slate-800">Evidence Basis: </strong>
                    {asm.evidenceBasis}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* SECTION D: Unanswered Questions & Research Gaps */}
        {activeSection === 'D' && (
          <div className="mt-6 space-y-4">
            <div>
              <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wide">
                Section D · Unanswered Questions &amp; Critical Research Gaps
              </h3>
              <p className="text-xs text-slate-500">
                Acknowledging limitations: public reviews cannot independently establish backend banking ratios.
              </p>
            </div>

            <div className="space-y-3">
              {H1_DETAILS.unansweredQuestions.map((gap) => (
                <div key={gap.id} className="rounded-xl border border-amber-200 bg-amber-50/40 p-4 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-bold text-amber-900">{gap.id}</span>
                    <span className="rounded-full border border-amber-300 bg-white px-2 py-0.5 text-[10px] font-bold text-amber-800">
                      Research Gap
                    </span>
                  </div>
                  <h4 className="text-xs font-bold text-slate-900">{gap.question}</h4>
                  <div className="grid gap-2 sm:grid-cols-2 text-xs pt-2 border-t border-amber-100">
                    <div>
                      <span className="font-semibold text-amber-950">Why Unanswered: </span>
                      <span className="text-slate-600">{gap.whyUnanswered}</span>
                    </div>
                    <div>
                      <span className="font-semibold text-emerald-950">Next Analytical Step: </span>
                      <span className="text-slate-600">{gap.proposedNextStep}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* SECTION E: Business Impact Hypothesis */}
        {activeSection === 'E' && (
          <div className="mt-6 space-y-6">
            <div className="rounded-xl border border-blue-200 bg-blue-50/40 p-5 space-y-3">
              <span className="text-xs font-bold uppercase tracking-wide text-blue-700">Section E · Business Impact Hypothesis</span>
              <h3 className="text-base font-bold text-slate-900">{H1_DETAILS.businessImpactHypothesis.headline}</h3>
              <blockquote className="text-xs leading-6 text-slate-800 bg-white p-3 rounded-lg border border-blue-100 italic">
                &ldquo;{H1_DETAILS.businessImpactHypothesis.statement}&rdquo;
              </blockquote>

              <div className="rounded-lg bg-slate-900 text-white p-3 text-xs space-y-1 font-mono">
                <div className="text-slate-400 text-[10px] uppercase">12-Month Active SIP Retention Metric:</div>
                <div className="text-blue-200">{H1_DETAILS.businessImpactHypothesis.metricFormula}</div>
              </div>

              <div className="rounded-lg bg-emerald-50 border border-emerald-200 p-3 text-xs text-emerald-900">
                <strong>Experiment Cohort Target: </strong>
                {H1_DETAILS.businessImpactHypothesis.hypothesisedCohortTarget}
              </div>
            </div>

            {/* Target Personas */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                Target User Personas Influencing Retention
              </h4>
              <div className="grid gap-4 sm:grid-cols-2">
                {PERSONAS.map((p) => (
                  <div key={p.id} className="rounded-xl border border-slate-200 bg-white p-4 text-xs space-y-2">
                    <div className="flex items-center justify-between border-b border-slate-100 pb-2">
                      <span className="font-bold text-slate-900">{p.name} ({p.role})</span>
                      <span className="text-blue-900 font-bold">{p.sipAmount}</span>
                    </div>
                    <div className="text-slate-500">Bank: {p.bankType} • {p.city}</div>
                    <p className="italic text-slate-700 bg-slate-50 p-2 rounded">&ldquo;{p.quote}&rdquo;</p>
                    <div className="text-rose-700 font-medium">Churn Behavior: {p.behaviourAfterFailure}</div>
                    <div className="text-[10px] text-slate-400 pt-1 border-t border-slate-100">
                      Provenance: {p.evidenceSourceRef}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* SECTION F: Validation Status */}
        {activeSection === 'F' && (
          <div className="mt-6 space-y-6">
            {/* Scientific Validation Boundary Alert */}
            <div className="rounded-xl border-2 border-amber-400 bg-amber-50/60 p-5 space-y-3.5 shadow-xs">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-amber-200 pb-3">
                <span className="text-xs font-bold uppercase tracking-wider text-amber-950 flex items-center gap-1.5">
                  <AlertTriangle size={15} className="text-amber-700" />
                  Section F · Scientific Validation Boundary &amp; Hypothesis Status
                </span>
                <span className="rounded-full bg-amber-200 px-3 py-1 text-xs font-extrabold text-amber-950 border border-amber-300">
                  Status: Not Validated
                </span>
              </div>

              <div className="text-xs leading-relaxed text-amber-950 space-y-2">
                <p>
                  <strong>Core Methodological Constraint:</strong> Customer review classification provides qualitative evidence of reported friction, not proof of causation or investor retention impact.
                </p>
                <p className="text-slate-700">
                  Hypothesis H1 cannot be labeled as &ldquo;Validated&rdquo; based solely on App Store reviews, Play Store reviews, Reddit discussions, YouTube comments, or AI-generated classifications. The status of H1 remains strictly <strong>&ldquo;Not Validated&rdquo;</strong> until experimental and telemetry evidence is obtained.
                </p>
              </div>

              <div className="rounded-lg bg-white border border-amber-200 p-4 space-y-2 text-xs">
                <div className="font-bold text-slate-900">Mandatory Requirements for Subsequent Empirical Validation:</div>
                <div className="grid gap-2 sm:grid-cols-2 pt-1">
                  <div className="rounded border border-slate-200 bg-slate-50 p-2.5">
                    <div className="font-bold text-slate-800">1. Investor User Interviews</div>
                    <div className="text-[11px] text-slate-600 mt-0.5">1:1 qualitative interviews exploring post-debit emotional states, penalty anxiety, and cancellation triggers.</div>
                  </div>
                  <div className="rounded border border-slate-200 bg-slate-50 p-2.5">
                    <div className="font-bold text-slate-800">2. Journey &amp; Drop-off Analysis</div>
                    <div className="text-[11px] text-slate-600 mt-0.5">Quantitative funnel telemetry measuring actual drop-off rates from failure notification to re-attempt.</div>
                  </div>
                  <div className="rounded border border-slate-200 bg-slate-50 p-2.5">
                    <div className="font-bold text-slate-800">3. Prototype Usability Testing</div>
                    <div className="text-[11px] text-slate-600 mt-0.5">Moderated task-based usability trials evaluating time-to-recovery and cognitive clarity on the 5-screen prototype.</div>
                  </div>
                  <div className="rounded border border-slate-200 bg-slate-50 p-2.5">
                    <div className="font-bold text-slate-800">4. Measured Recovery Outcomes</div>
                    <div className="text-[11px] text-slate-600 mt-0.5">Statistically significant lift in 72-hour instalment recovery and 12-month active SIP retention.</div>
                  </div>
                </div>
              </div>

              <div className="rounded-lg bg-amber-100/70 p-3 text-xs text-amber-950 font-medium">
                <strong>Experimental Gating: </strong>{H1_DETAILS.validationStatus.experimentalGating}
              </div>
            </div>

            {/* 4-Way Research Data Separation Matrix */}
            <div className="rounded-xl border border-slate-200 bg-white p-5 space-y-3 text-xs shadow-sm">
              <h4 className="font-bold text-slate-900 text-sm">Research Data Distinction Matrix</h4>
              <p className="text-slate-500 text-[11px]">
                To maintain research integrity, four distinct categories of knowledge are tracked independently:
              </p>
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4 pt-1">
                <div className="rounded-lg border border-slate-200 bg-slate-50 p-3 space-y-1">
                  <span className="font-bold text-slate-900 block text-xs">A. Observed Customer Statements</span>
                  <p className="text-[11px] text-slate-600 leading-snug">Verbatim quotes from Google Play and App Store reviews describing debits, bounce fees, and silence.</p>
                  <span className="inline-block rounded bg-slate-200 px-1.5 py-0.5 text-[9px] font-semibold text-slate-700 mt-1">Empirical Qualitative Voice</span>
                </div>
                <div className="rounded-lg border border-blue-200 bg-blue-50/50 p-3 space-y-1">
                  <span className="font-bold text-blue-900 block text-xs">B. Researcher Interpretations</span>
                  <p className="text-[11px] text-slate-600 leading-snug">PM qualitative deductions, persona pain mappings, and hypothesis formulation connecting friction to drop-off.</p>
                  <span className="inline-block rounded bg-blue-100 px-1.5 py-0.5 text-[9px] font-semibold text-blue-800 mt-1">PM Synthesis &amp; Hypotheses</span>
                </div>
                <div className="rounded-lg border border-indigo-200 bg-indigo-50/40 p-3 space-y-1">
                  <span className="font-bold text-indigo-900 block text-xs">C. AI-Assisted Suggestions</span>
                  <p className="text-[11px] text-slate-600 leading-snug">Heuristic classification drafts and excerpt extractions; non-authoritative until confirmed by a human.</p>
                  <span className="inline-block rounded bg-indigo-100 px-1.5 py-0.5 text-[9px] font-semibold text-indigo-800 mt-1">Advisory Machine Drafts</span>
                </div>
                <div className="rounded-lg border border-emerald-200 bg-emerald-50/50 p-3 space-y-1">
                  <span className="font-bold text-emerald-950 block text-xs">D. Measured Experimental Outcomes</span>
                  <p className="text-[11px] text-slate-600 leading-snug">Empirical results from upcoming usability sessions, cohort telemetry, and randomized A/B experimentation.</p>
                  <span className="inline-block rounded bg-emerald-200 px-1.5 py-0.5 text-[9px] font-bold text-emerald-900 mt-1">Causal Validation Standard</span>
                </div>
              </div>
            </div>

            {/* Experiment A/B Spec */}
            <div className="rounded-xl border border-slate-200 bg-white p-5 space-y-3 text-xs">
              <h4 className="font-bold text-slate-900 text-sm">30-Day A/B Experiment Specification</h4>
              <div className="grid gap-3 sm:grid-cols-2">
                <div className="rounded-lg border border-slate-200 bg-slate-50 p-3">
                  <div className="font-bold text-slate-600 uppercase text-[10px]">Control Group (5,000 Users)</div>
                  <p className="mt-1 text-slate-700 leading-relaxed">{H1_DETAILS.experimentPlan.controlGroup}</p>
                </div>
                <div className="rounded-lg border border-blue-200 bg-blue-50/50 p-3">
                  <div className="font-bold text-blue-800 uppercase text-[10px]">Variant B Treatment (5,000 Users)</div>
                  <p className="mt-1 text-slate-800 leading-relaxed font-medium">{H1_DETAILS.experimentPlan.treatmentGroup}</p>
                </div>
              </div>
              <div className="text-[11px] text-slate-500 pt-2 border-t border-slate-100">
                Sample: 10,000 first-time SIP investors experiencing a mandate debit return across 30 days. MDE: +15.0% lift in recovery.
              </div>
            </div>
          </div>
        )}

        {/* SECTION G: Product Opportunities */}
        {activeSection === 'G' && (
          <div className="mt-6 space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wide">
                  Section G · Traceable Product Opportunities
                </h3>
                <p className="text-xs text-slate-500">
                  Solution interventions directly addressing observed friction points.
                </p>
              </div>

              <button
                onClick={onNavigateToPrototype}
                className="flex items-center gap-1 text-xs font-bold text-blue-700 hover:underline"
              >
                <span>Launch Interactive Prototype</span>
                <ArrowRight size={13} />
              </button>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {H1_DETAILS.productOpportunities.map((prd) => (
                <div key={prd.id} className="rounded-xl border border-slate-200 bg-white p-4 space-y-2.5">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-bold text-slate-400">{prd.id}</span>
                    <div className="flex items-center gap-1.5">
                      <span className="rounded bg-slate-100 px-2 py-0.5 text-[10px] font-semibold text-slate-700">
                        Feasibility: {prd.feasibility}
                      </span>
                      <span className="rounded bg-blue-100 px-2 py-0.5 text-[10px] font-bold text-blue-800">
                        Impact: {prd.impact}
                      </span>
                    </div>
                  </div>

                  <h4 className="font-bold text-slate-900 text-xs">{prd.title}</h4>
                  <p className="text-xs text-slate-600 leading-5">{prd.description}</p>

                  <div className="pt-2 border-t border-slate-100 text-[11px] text-emerald-800 font-medium">
                    Evidence Link: {prd.evidenceBacking}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
