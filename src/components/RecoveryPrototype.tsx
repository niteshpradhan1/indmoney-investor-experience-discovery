import React, { useState } from 'react';
import {
  Smartphone,
  AlertTriangle,
  CheckCircle2,
  Calendar,
  Clock,
  ArrowRight,
  ShieldAlert,
  RotateCcw,
  CreditCard,
  Zap,
  Info,
  ChevronRight,
  RefreshCw,
  Award,
  HelpCircle,
  UserCheck,
  CheckSquare,
  XCircle,
  Layers,
  Settings,
  HelpCircle as QuestionIcon,
  Bot,
  Sparkles
} from 'lucide-react';
import {
  PrototypeStep,
  ConfirmationStatus,
  UsabilityTask,
  UsabilityObservation,
  UsabilityEvaluationChecklist
} from '../types';
import { AIExplanationAssistant } from './AIExplanationAssistant';

// ==============================================================================
// NEUTRAL USABILITY TESTING TASKS (N = 4)
// ==============================================================================

const NEUTRAL_USABILITY_TASKS: UsabilityTask[] = [
  {
    id: 'TASK-1',
    taskNumber: 1,
    title: 'Failure Awareness & Debit Status Understanding',
    scenario: 'You opened the app and noticed your regular monthly SIP instalment did not go through.',
    instruction: 'Review the failure notice and explain what happened, whether your bank account was debited, and what you should check next.',
    acceptanceCriteria: [
      'Participant identifies that payment did not complete.',
      'Participant recognizes that bank debit is unconfirmed and needs bank statement verification.',
      'Participant notes absence of manufactured bank failure codes.',
      'Participant understands platform policy guidance without false guarantees.'
    ],
    neutralPrompt: 'Looking at this screen, what does it tell you about your recent payment and your bank account balance?'
  },
  {
    id: 'TASK-2',
    taskNumber: 2,
    title: 'Comparing Recovery Options Neutrally',
    scenario: 'You want to understand what actions you can take regarding this failed instalment.',
    instruction: 'Look at the recovery choices presented on screen. Explain the difference between Option A (Instant Retry) and Option B (Future Rescheduling).',
    acceptanceCriteria: [
      'Participant distinguishes immediate payment attempt from date shifting.',
      'Participant recognizes neither option promises immediate NAV eligibility.',
      'Participant understands rescheduling may change investment timing and applicable NAV.',
      'Participant selects an option based on hypothetical cash-flow.'
    ],
    neutralPrompt: 'How would you describe the difference between these two options?'
  },
  {
    id: 'TASK-3',
    taskNumber: 3,
    title: 'Executing a Simulated Retry & Observing Pending Outcome',
    scenario: 'You choose to submit an immediate payment retry.',
    instruction: 'Submit the retry request and observe what the confirmation screen reports.',
    acceptanceCriteria: [
      'Participant understands that submitting a retry does not equal instant success.',
      'Participant recognizes "Retry Request Submitted — Payment Outcome Pending".',
      'Participant remains comfortable waiting for official bank confirmation.'
    ],
    neutralPrompt: 'What is the current status of your payment after submitting this request?'
  },
  {
    id: 'TASK-4',
    taskNumber: 4,
    title: 'Selecting a Valid Rescheduling Date',
    scenario: 'Your salary arrives on the 7th of every month, but your SIP was scheduled on the 5th.',
    instruction: 'Select an appropriate future date using the date picker and review the confirmation summary.',
    acceptanceCriteria: [
      'Participant selects a validated future date (e.g. 10th or 12th).',
      'Participant verifies selected date before confirmation.',
      'Participant understands future debits are subject to bank mandate configuration.'
    ],
    neutralPrompt: 'What will happen to your next instalment if you confirm this date change?'
  }
];

export const RecoveryPrototype: React.FC = () => {
  // Navigation / View modes
  const [activeTab, setActiveTab] = useState<'prototype' | 'evaluator' | 'traceability'>('prototype');

  // Prototype Step State Machine (5 user journey steps)
  // 'overview' -> 'failure_screen' -> 'understand_failure' -> 'recovery_options' -> 'confirmation' -> 'completion'
  const [currentStep, setCurrentStep] = useState<PrototypeStep>('overview');

  // Recovery Option selection: 'retry' (Option A) vs 'reschedule' (Option B)
  const [selectedOption, setSelectedOption] = useState<'retry' | 'reschedule'>('retry');
  
  // Validated future rescheduling dates (November 2026 context)
  const [selectedRescheduleDay, setSelectedRescheduleDay] = useState<number>(10);
  const [rescheduleMonth] = useState<string>('Nov 2026');

  // Step 4 Confirmation Status (Never automatically assumes success!)
  // Possible states: 'retry_requested' | 'payment_pending' | 'debit_unconfirmed' | 'rescheduled_pending' | 'payment_successful' | 'payment_failed'
  const [confirmationStatus, setConfirmationStatus] = useState<ConfirmationStatus>('retry_requested');

  // Usability Evaluator State
  const [selectedTask, setSelectedTask] = useState<string>('TASK-1');
  const [participantId, setParticipantId] = useState<string>('USR-84102');
  const [taskOutcome, setTaskOutcome] = useState<'passed' | 'partial' | 'failed' | 'untested'>('untested');
  
  // 5-Point Usability Evaluation Checklist
  const [evalChecklist, setEvalChecklist] = useState<UsabilityEvaluationChecklist>({
    understandsWhyFailed: false,
    understandsDebitStatus: false,
    choosesBetweenRetryAndReschedule: false,
    completesSelectedJourney: false,
    understandsFinalPaymentStatus: false,
  });

  const [confusionPoints, setConfusionPoints] = useState<string[]>([]);
  const [navigationErrors, setNavigationErrors] = useState<number>(0);
  const [researcherNotes, setResearcherNotes] = useState<string>('');
  const [recordedObservations, setRecordedObservations] = useState<UsabilityObservation[]>([]);

  // Desktop right panel tab: AI Explainer vs PM Checklist
  const [rightPanelTab, setRightPanelTab] = useState<'ai_explainer' | 'pm_checklist'>('ai_explainer');
  // Mobile frame AI Assistant modal state
  const [showMobileAIAssistant, setShowMobileAIAssistant] = useState<boolean>(false);
  // Step 4 simulated bank polling state
  const [isCheckingStatus, setIsCheckingStatus] = useState<boolean>(false);

  // Simulated status check with bank clearing
  const handleCheckBankStatus = () => {
    setIsCheckingStatus(true);
    setTimeout(() => {
      setIsCheckingStatus(false);
      setConfirmationStatus('payment_pending');
    }, 750);
  };

  // Reset prototype to initial dashboard state
  const handleResetPrototype = () => {
    setCurrentStep('overview');
    setSelectedOption('retry');
    setSelectedRescheduleDay(10);
    setConfirmationStatus('retry_requested');
  };

  // Step 1: Simulate Payment Failure
  const handleTriggerSimulatedFailure = () => {
    setCurrentStep('failure_screen');
  };

  // Step 2: Understand Failure
  const handleProceedToUnderstand = () => {
    setCurrentStep('understand_failure');
  };

  // Step 3: View Recovery Options
  const handleProceedToOptions = () => {
    setCurrentStep('recovery_options');
  };

  // Step 4: Submit Selected Recovery Action
  const handleSubmitRecoveryChoice = (choice: 'retry' | 'reschedule') => {
    setSelectedOption(choice);
    setCurrentStep('confirmation');

    if (choice === 'retry') {
      // Set to initial "retry_requested" state (NEVER automatically shows success)
      setConfirmationStatus('retry_requested');
    } else {
      setConfirmationStatus('rescheduled_pending');
    }
  };

  // Step 5: Proceed to Completion Summary
  const handleProceedToCompletion = () => {
    setCurrentStep('completion');
  };

  // Evaluator: Toggle checklist item
  const handleToggleChecklist = (key: keyof UsabilityEvaluationChecklist) => {
    setEvalChecklist((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  // Evaluator: Toggle confusion checkbox
  const handleToggleConfusion = (point: string) => {
    setConfusionPoints((prev) =>
      prev.includes(point) ? prev.filter((p) => p !== point) : [...prev, point]
    );
  };

  // Evaluator: Save Observation Record
  const handleSaveObservation = () => {
    const newRecord: UsabilityObservation = {
      id: `OBS-${Date.now().toString().slice(-4)}`,
      participantId: participantId.trim() || 'ANON-USR',
      taskId: selectedTask,
      taskOutcome,
      timeSpentSeconds: 45,
      observedConfusion: [...confusionPoints],
      navigationErrors,
      qualitativeNotes: researcherNotes.trim() || 'No explicit verbal feedback noted.',
      recordedAt: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setRecordedObservations((prev) => [newRecord, ...prev]);
    // Reset inputs
    setResearcherNotes('');
    setConfusionPoints([]);
    setNavigationErrors(0);
    setTaskOutcome('untested');
    setEvalChecklist({
      understandsWhyFailed: false,
      understandsDebitStatus: false,
      choosesBetweenRetryAndReschedule: false,
      completesSelectedJourney: false,
      understandsFinalPaymentStatus: false,
    });
  };

  return (
    <div className="space-y-6">
      {/* Top Banner with Phase 6 & Status Badges */}
      <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-end border-b border-slate-200 pb-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-blue-700">Phase 6 Prototype</span>
            <span className="rounded-full bg-blue-100 text-blue-800 px-2 py-0.5 text-[10px] font-bold">
              Evidence-to-Prototype Validation
            </span>
            <span className="rounded-full bg-amber-100 text-amber-900 px-2 py-0.5 text-[10px] font-bold border border-amber-200">
              Hypothesis H1 · NOT VALIDATED
            </span>
          </div>
          <h2 className="mt-1 text-2xl font-bold tracking-tight text-slate-900">
            SIP Recovery Assistant · Human-Centred Prototype
          </h2>
          <p className="mt-1 text-sm text-slate-600">
            A clickable research prototype exploring how first-time investors understand and recover from an incomplete SIP instalment without false guarantees.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={handleResetPrototype}
            className="flex items-center gap-1.5 rounded-lg border border-slate-300 bg-white px-3 py-1.5 text-xs font-medium text-slate-700 hover:bg-slate-50 transition shadow-sm"
          >
            <RotateCcw size={13} />
            <span>Reset Prototype</span>
          </button>
        </div>
      </div>

      {/* Safety & Simulation Disclaimer */}
      <div className="rounded-xl border border-amber-200 bg-amber-50/70 p-3.5 text-xs text-amber-950 flex flex-col sm:flex-row sm:items-center justify-between gap-2 shadow-sm">
        <div className="flex items-center gap-2.5">
          <Info size={16} className="text-amber-700 shrink-0" />
          <span>
            <strong>Illustrative Research Prototype: </strong> All investor profiles, SIP balances, and banking events are simulated for discovery research. No live bank credentials, payment gateways, or real financial transactions are connected. Causal retention impact has not been established (H1: <strong>NOT VALIDATED</strong>).
          </span>
        </div>
        <span className="rounded bg-amber-200/80 px-2.5 py-0.5 text-[10px] font-bold text-amber-900 shrink-0 uppercase tracking-wide">
          Simulated Flow
        </span>
      </div>

      {/* Top Workspace Tab Selector */}
      <div className="flex border-b border-slate-200 gap-4 text-xs font-semibold text-slate-500">
        <button
          onClick={() => setActiveTab('prototype')}
          className={`pb-2.5 flex items-center gap-2 border-b-2 transition ${
            activeTab === 'prototype'
              ? 'border-blue-700 text-blue-800 font-bold'
              : 'border-transparent hover:text-slate-800'
          }`}
        >
          <Smartphone size={15} />
          <span>1. Interactive Investor Prototype (5-Step Journey)</span>
        </button>

        <button
          onClick={() => setActiveTab('evaluator')}
          className={`pb-2.5 flex items-center gap-2 border-b-2 transition ${
            activeTab === 'evaluator'
              ? 'border-blue-700 text-blue-800 font-bold'
              : 'border-transparent hover:text-slate-800'
          }`}
        >
          <UserCheck size={15} />
          <span>2. Researcher Usability Evaluation View</span>
          <span className="rounded-full bg-slate-100 text-slate-700 px-1.5 py-0.2 text-[10px]">
            {recordedObservations.length} Logs
          </span>
        </button>

        <button
          onClick={() => setActiveTab('traceability')}
          className={`pb-2.5 flex items-center gap-2 border-b-2 transition ${
            activeTab === 'traceability'
              ? 'border-blue-700 text-blue-800 font-bold'
              : 'border-transparent hover:text-slate-800'
          }`}
        >
          <Layers size={15} />
          <span>3. Evidence-to-Feature Traceability Matrix</span>
        </button>
      </div>

      {/* TAB 1: INTERACTIVE INVESTOR PROTOTYPE */}
      {activeTab === 'prototype' && (
        <div className="grid gap-6 lg:grid-cols-[1fr_380px_1fr] items-start">
          {/* Left: Journey Steps Storyboard Navigator */}
          <div className="space-y-4">
            <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm space-y-3">
              <div className="flex items-center justify-between border-b border-slate-100 pb-2">
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  5-Step User Journey Guide
                </h3>
                <span className="text-[10px] text-blue-700 font-bold">Step Mode</span>
              </div>

              <div className="space-y-2 text-xs">
                {/* Step 0: Dashboard */}
                <button
                  onClick={() => setCurrentStep('overview')}
                  className={`w-full flex items-center justify-between rounded-lg p-2.5 text-left transition border ${
                    currentStep === 'overview'
                      ? 'border-blue-600 bg-blue-50 text-blue-900 font-semibold'
                      : 'border-slate-100 hover:bg-slate-50 text-slate-700'
                  }`}
                >
                  <div>
                    <div className="font-bold">SIP Overview (Pre-Failure)</div>
                    <div className="text-[11px] text-slate-500">Scheduled instalment, active mandate state</div>
                  </div>
                  <ChevronRight size={14} className="text-slate-400" />
                </button>

                {/* Step 1: SIP Failure Screen */}
                <button
                  onClick={() => setCurrentStep('failure_screen')}
                  className={`w-full flex items-center justify-between rounded-lg p-2.5 text-left transition border ${
                    currentStep === 'failure_screen'
                      ? 'border-rose-600 bg-rose-50 text-rose-900 font-semibold'
                      : 'border-slate-100 hover:bg-slate-50 text-slate-700'
                  }`}
                >
                  <div>
                    <div className="font-bold text-rose-700">1. SIP Failure Notice</div>
                    <div className="text-[11px] text-slate-500">Payment did not complete; unconfirmed debit status</div>
                  </div>
                  <ChevronRight size={14} className="text-slate-400" />
                </button>

                {/* Step 2: Understand Failure */}
                <button
                  onClick={() => setCurrentStep('understand_failure')}
                  className={`w-full flex items-center justify-between rounded-lg p-2.5 text-left transition border ${
                    currentStep === 'understand_failure'
                      ? 'border-blue-600 bg-blue-50 text-blue-900 font-semibold'
                      : 'border-slate-100 hover:bg-slate-50 text-slate-700'
                  }`}
                >
                  <div>
                    <div className="font-bold">2. Understand the Failure</div>
                    <div className="text-[11px] text-slate-500">Illustrative possibilities &amp; what to check next</div>
                  </div>
                  <ChevronRight size={14} className="text-slate-400" />
                </button>

                {/* Step 3: Recovery Options */}
                <button
                  onClick={() => setCurrentStep('recovery_options')}
                  className={`w-full flex items-center justify-between rounded-lg p-2.5 text-left transition border ${
                    currentStep === 'recovery_options'
                      ? 'border-blue-600 bg-blue-50 text-blue-900 font-semibold'
                      : 'border-slate-100 hover:bg-slate-50 text-slate-700'
                  }`}
                >
                  <div>
                    <div className="font-bold">3. Recovery Options</div>
                    <div className="text-[11px] text-slate-500">Option A (Retry) vs Option B (Reschedule Date)</div>
                  </div>
                  <ChevronRight size={14} className="text-slate-400" />
                </button>

                {/* Step 4: Confirmation */}
                <button
                  onClick={() => setCurrentStep('confirmation')}
                  className={`w-full flex items-center justify-between rounded-lg p-2.5 text-left transition border ${
                    currentStep === 'confirmation'
                      ? 'border-blue-600 bg-blue-50 text-blue-900 font-semibold'
                      : 'border-slate-100 hover:bg-slate-50 text-slate-700'
                  }`}
                >
                  <div>
                    <div className="font-bold">4. Request Confirmation</div>
                    <div className="text-[11px] text-slate-500">Retry Requested vs Pending (No auto-success)</div>
                  </div>
                  <ChevronRight size={14} className="text-slate-400" />
                </button>

                {/* Step 5: Completion */}
                <button
                  onClick={() => setCurrentStep('completion')}
                  className={`w-full flex items-center justify-between rounded-lg p-2.5 text-left transition border ${
                    currentStep === 'completion'
                      ? 'border-emerald-600 bg-emerald-50 text-emerald-900 font-semibold'
                      : 'border-slate-100 hover:bg-slate-50 text-slate-700'
                  }`}
                >
                  <div>
                    <div className="font-bold text-emerald-700">5. Next Steps Summary</div>
                    <div className="text-[11px] text-slate-500">Neutral policy summary &amp; return to SIP overview</div>
                  </div>
                  <ChevronRight size={14} className="text-slate-400" />
                </button>
              </div>
            </div>

            {/* Test Trigger Card */}
            <div className="rounded-xl border border-rose-200 bg-rose-50/40 p-4 space-y-2">
              <div className="text-xs font-bold uppercase tracking-wider text-rose-800 flex items-center gap-1.5">
                <AlertTriangle size={14} />
                <span>Simulate Usability Test Event</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Trigger a simulated incomplete instalment on the user&apos;s active monthly SIP (05 Nov 2026).
              </p>
              <button
                onClick={handleTriggerSimulatedFailure}
                className="w-full rounded-lg bg-rose-700 px-3 py-2 text-xs font-semibold text-white hover:bg-rose-800 transition shadow-sm mt-1"
              >
                Trigger Simulated Incomplete Payment
              </button>
            </div>
          </div>

          {/* Center: Mobile Device Viewport */}
          <div className="flex justify-center">
            <div className="w-[360px] rounded-[36px] border-4 border-slate-900 bg-slate-900 p-2 shadow-2xl">
              <div className="relative min-h-[620px] rounded-[28px] bg-white text-slate-900 overflow-hidden flex flex-col font-sans">
                {/* Mobile Top Status Bar */}
                <div className="flex items-center justify-between px-4 pt-3 pb-2 text-[11px] font-semibold text-slate-600 bg-white border-b border-slate-100">
                  <span>9:41</span>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setShowMobileAIAssistant(true)}
                      className="flex items-center gap-1 text-[10px] font-bold text-indigo-700 bg-indigo-50 hover:bg-indigo-100 px-2 py-0.5 rounded-full border border-indigo-200 transition"
                      title="Open AI Plain-Language Explainer"
                    >
                      <Bot size={11} />
                      <span>Ask AI</span>
                    </button>
                    <div className="flex items-center gap-1.5">
                      <span className="h-2 w-2 rounded-full bg-emerald-500" />
                      <span className="text-[10px]">INDmoney</span>
                    </div>
                  </div>
                </div>

                {/* STEP 0: SIP OVERVIEW DASHBOARD */}
                {currentStep === 'overview' && (
                  <div className="flex-1 p-4 space-y-4 overflow-y-auto">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-[10px] text-slate-400 uppercase font-semibold">Total SIP Portfolio (Sample)</div>
                        <div className="text-2xl font-bold text-slate-900">₹24,000</div>
                      </div>
                      <span className="rounded-full bg-emerald-100 px-2.5 py-0.5 text-[10px] font-bold text-emerald-800">
                        Active SIP
                      </span>
                    </div>

                    <div className="rounded-xl border border-slate-200 bg-slate-50/70 p-3.5 space-y-3">
                      <div className="flex items-center justify-between">
                        <div className="font-bold text-xs text-slate-900">UTI Nifty 50 Index Fund</div>
                        <span className="text-xs font-bold text-blue-900">₹2,000 / mo</span>
                      </div>

                      <div className="grid grid-cols-2 gap-2 text-[11px] text-slate-500">
                        <div>Instalment Date: <span className="font-semibold text-slate-800">05 Nov 2026</span></div>
                        <div>Mandate Status: <span className="font-semibold text-slate-800">Configured</span></div>
                      </div>

                      <div className="pt-2 border-t border-slate-200 flex items-center justify-between text-[11px]">
                        <span className="text-emerald-700 font-semibold flex items-center gap-1">
                          <CheckCircle2 size={12} />
                          4 Past Instalments Logged
                        </span>
                        <span className="text-slate-400">Monthly</span>
                      </div>
                    </div>

                    <div className="rounded-lg bg-slate-100/70 p-2.5 text-[10px] text-slate-500 text-center">
                      * Illustrative sample investor data for discovery research.
                    </div>

                    <div className="pt-2">
                      <button
                        onClick={handleTriggerSimulatedFailure}
                        className="w-full rounded-xl border-2 border-dashed border-rose-300 bg-rose-50/70 p-3 text-xs font-bold text-rose-800 hover:bg-rose-100 transition text-center"
                      >
                        ⚡ Simulate Incomplete Instalment
                      </button>
                    </div>
                  </div>
                )}

                {/* STEP 1: SIP FAILURE SCREEN */}
                {currentStep === 'failure_screen' && (
                  <div className="flex-1 p-4 space-y-3.5 overflow-y-auto">
                    <div className="rounded-xl border border-rose-300 bg-rose-50 p-4 space-y-3">
                      <div className="flex items-center gap-2 text-rose-800 font-bold text-xs uppercase">
                        <AlertTriangle size={16} />
                        <span>Payment Notice</span>
                      </div>

                      <div>
                        <div className="text-lg font-extrabold text-slate-900">Payment Did Not Complete</div>
                        <div className="text-xs text-slate-600 mt-0.5">
                          Scheduled instalment of ₹2,000 for UTI Nifty 50 Index Fund (05 Nov 2026).
                        </div>
                      </div>

                      {/* Payment Status Accuracy: Unconfirmed debit notice */}
                      <div className="rounded-lg bg-amber-50/90 p-3 text-xs text-amber-950 border border-amber-200 space-y-1">
                        <div className="font-semibold text-amber-900 flex items-center gap-1.5">
                          <Clock size={13} className="text-amber-700 shrink-0" />
                          <span>Debit Confirmation Unconfirmed</span>
                        </div>
                        <p className="text-[11px] text-amber-900/90 leading-relaxed">
                          We haven&apos;t received confirmation of whether your bank account was debited. Please check your bank statement before attempting another payment.
                        </p>
                      </div>

                      {/* Neutral Guidance without unverified claims */}
                      <div className="rounded-lg bg-white p-3 text-xs text-slate-700 border border-slate-200 space-y-1 leading-normal">
                        <div className="font-semibold text-slate-900">General Guidance:</div>
                        <p className="text-[11px] text-slate-600 leading-relaxed">
                          Bank fee policies and potential return charges depend on your individual banking institution. Any mutual fund units allotted in previous instalments remain in your folio according to AMC records.
                        </p>
                      </div>

                      {/* AI Explainer Helper Pill */}
                      <button
                        type="button"
                        onClick={() => setShowMobileAIAssistant(true)}
                        className="w-full text-center text-[11px] font-semibold text-indigo-700 bg-indigo-50 border border-indigo-200 rounded-lg py-2 px-3 flex items-center justify-center gap-1.5 hover:bg-indigo-100 transition shadow-2xs"
                      >
                        <Bot size={13} className="text-indigo-600" />
                        <span>Why is debit unconfirmed? Ask AI Assistant</span>
                      </button>
                    </div>

                    <button
                      onClick={handleProceedToUnderstand}
                      className="w-full rounded-xl bg-blue-700 py-3 text-xs font-bold text-white hover:bg-blue-800 transition shadow-sm flex items-center justify-center gap-1.5"
                    >
                      <span>Understand What Happened</span>
                      <ArrowRight size={14} />
                    </button>

                    <button
                      onClick={handleResetPrototype}
                      className="w-full text-center text-xs text-slate-400 hover:text-slate-700 py-1"
                    >
                      Return to Dashboard
                    </button>
                  </div>
                )}

                {/* STEP 2: UNDERSTAND THE FAILURE */}
                {currentStep === 'understand_failure' && (
                  <div className="flex-1 p-4 space-y-3.5 overflow-y-auto">
                    <div>
                      <span className="text-[10px] font-bold text-blue-700 uppercase">Step 2 of 5</span>
                      <h3 className="text-sm font-bold text-slate-900">Why Might a Payment Not Complete?</h3>
                      <p className="text-[11px] text-slate-500 mt-0.5">
                        These are illustrative possibilities to help you understand common payment situations:
                      </p>
                    </div>

                    {/* Illustrative Possibilities */}
                    <div className="space-y-2 text-xs">
                      <div className="rounded-lg border border-slate-200 bg-slate-50 p-2.5 space-y-1">
                        <div className="font-bold text-slate-900 flex items-center gap-1.5">
                          <span className="h-1.5 w-1.5 rounded-full bg-slate-400" />
                          <span>1. Account Balance</span>
                        </div>
                        <p className="text-[11px] text-slate-600 leading-normal">
                          The available balance in your linked account may have been lower than the instalment amount when processing was attempted.
                        </p>
                      </div>

                      <div className="rounded-lg border border-slate-200 bg-slate-50 p-2.5 space-y-1">
                        <div className="font-bold text-slate-900 flex items-center gap-1.5">
                          <span className="h-1.5 w-1.5 rounded-full bg-slate-400" />
                          <span>2. Bank Mandate Configuration</span>
                        </div>
                        <p className="text-[11px] text-slate-600 leading-normal">
                          Your bank mandate authorization may have encountered authorization or bank-side maintenance.
                        </p>
                      </div>

                      <div className="rounded-lg border border-slate-200 bg-slate-50 p-2.5 space-y-1">
                        <div className="font-bold text-slate-900 flex items-center gap-1.5">
                          <span className="h-1.5 w-1.5 rounded-full bg-slate-400" />
                          <span>3. Temporary Payment-System Problem</span>
                        </div>
                        <p className="text-[11px] text-slate-600 leading-normal">
                          Intermittent connectivity between payment clearing networks and your bank can delay confirmation.
                        </p>
                      </div>
                    </div>

                    {/* What to check next */}
                    <div className="rounded-lg border border-blue-200 bg-blue-50/60 p-2.5 text-xs text-blue-950 space-y-1.5">
                      <div className="font-bold text-[11px] text-blue-900 flex items-center gap-1">
                        <HelpCircle size={13} className="text-blue-700" />
                        <span>What You Can Check Next:</span>
                      </div>
                      <ul className="list-disc list-inside text-[11px] text-blue-900/90 space-y-0.5">
                        <li>Check your bank statement or mobile banking app for recent debits.</li>
                        <li>Check if your bank sent an SMS alert regarding this transaction.</li>
                        <li>Decide whether you want to retry payment or select a future date.</li>
                      </ul>
                    </div>

                    {/* AI Explainer Helper Pill */}
                    <button
                      type="button"
                      onClick={() => setShowMobileAIAssistant(true)}
                      className="w-full text-center text-[11px] font-semibold text-indigo-700 bg-indigo-50 border border-indigo-200 rounded-lg py-2 px-3 flex items-center justify-center gap-1.5 hover:bg-indigo-100 transition shadow-2xs"
                    >
                      <Bot size={13} className="text-indigo-600" />
                      <span>Are my mutual fund units safe? Ask AI Explainer</span>
                    </button>

                    <button
                      onClick={handleProceedToOptions}
                      className="w-full rounded-xl bg-blue-700 py-3 text-xs font-bold text-white hover:bg-blue-800 transition shadow-sm flex items-center justify-center gap-1.5 mt-2"
                    >
                      <span>Review Recovery Options</span>
                      <ArrowRight size={14} />
                    </button>
                  </div>
                )}

                {/* STEP 3: RECOVERY OPTIONS */}
                {currentStep === 'recovery_options' && (
                  <div className="flex-1 p-4 space-y-3.5 overflow-y-auto">
                    <div>
                      <span className="text-[10px] font-bold text-blue-700 uppercase">Step 3 of 5</span>
                      <h3 className="text-sm font-bold text-slate-900">Choose How You Want to Proceed</h3>
                      <p className="text-[11px] text-slate-500 mt-0.5">
                        Select an action below. Both options are explained neutrally:
                      </p>
                    </div>

                    {/* Option A: Instant Retry */}
                    <div
                      onClick={() => setSelectedOption('retry')}
                      className={`cursor-pointer rounded-xl border p-3 transition space-y-1.5 ${
                        selectedOption === 'retry'
                          ? 'border-blue-600 bg-blue-50/70 shadow-sm'
                          : 'border-slate-200 hover:border-slate-300'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold text-slate-900 flex items-center gap-1.5">
                          <Zap size={14} className="text-blue-700" />
                          Option A: Simulated Instant Retry
                        </span>
                        <input
                          type="radio"
                          name="recovery_choice"
                          checked={selectedOption === 'retry'}
                          onChange={() => setSelectedOption('retry')}
                          className="text-blue-700"
                        />
                      </div>
                      <p className="text-[11px] text-slate-600 leading-normal">
                        Submit a manual retry request for ₹2,000 using UPI or net banking.
                      </p>
                      <div className="text-[10px] text-slate-500 italic pt-0.5">
                        * Note: Submitting a retry does not guarantee processing success or NAV timing.
                      </div>
                    </div>

                    {/* Option B: Reschedule Future Date */}
                    <div
                      onClick={() => setSelectedOption('reschedule')}
                      className={`cursor-pointer rounded-xl border p-3 transition space-y-1.5 ${
                        selectedOption === 'reschedule'
                          ? 'border-blue-600 bg-blue-50/70 shadow-sm'
                          : 'border-slate-200 hover:border-slate-300'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold text-slate-900 flex items-center gap-1.5">
                          <Calendar size={14} className="text-purple-700" />
                          Option B: Select Future Rescheduling Date
                        </span>
                        <input
                          type="radio"
                          name="recovery_choice"
                          checked={selectedOption === 'reschedule'}
                          onChange={() => setSelectedOption('reschedule')}
                          className="text-purple-700"
                        />
                      </div>
                      <p className="text-[11px] text-slate-600 leading-normal">
                        Select a future date to align with your cash flow or salary deposit.
                      </p>

                      {/* Interactive Date Picker with Future-Date Validation */}
                      <div className="pt-2 border-t border-slate-200 space-y-1.5" onClick={(e) => e.stopPropagation()}>
                        <div className="flex items-center justify-between text-[11px]">
                          <label className="font-bold text-slate-700">Choose Next Debit Day ({rescheduleMonth}):</label>
                          <span className="font-semibold text-purple-800 text-[10px]">
                            Selected: {selectedRescheduleDay} {rescheduleMonth}
                          </span>
                        </div>

                        <div className="grid grid-cols-5 gap-1">
                          {[8, 10, 12, 15, 20].map((day) => (
                            <button
                              key={day}
                              type="button"
                              onClick={() => {
                                setSelectedOption('reschedule');
                                setSelectedRescheduleDay(day);
                              }}
                              className={`py-1.5 text-center rounded text-xs font-semibold border transition ${
                                selectedOption === 'reschedule' && selectedRescheduleDay === day
                                  ? 'bg-purple-700 text-white border-purple-700 shadow-sm'
                                  : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
                              }`}
                            >
                              {day}th
                            </button>
                          ))}
                        </div>
                      </div>

                      <div className="text-[10px] text-slate-500 italic pt-0.5 leading-normal">
                        * Note: Changing instalment date may alter investment timing and applicable NAV. Does not guarantee future instalment success. Subject to bank mandate configuration.
                      </div>
                    </div>

                    {/* Pre-Confirmation Display */}
                    <div className="rounded-lg bg-slate-50 border border-slate-200 p-2.5 text-xs text-slate-700 space-y-1">
                      <div className="font-bold text-[11px] text-slate-900">Selection Summary:</div>
                      <div className="text-[11px] text-slate-600">
                        {selectedOption === 'retry' ? (
                          <span>Mode: <strong>Immediate Retry Request</strong> for ₹2,000</span>
                        ) : (
                          <span>Mode: <strong>Rescheduling to {selectedRescheduleDay} {rescheduleMonth}</strong></span>
                        )}
                      </div>
                    </div>

                    {/* AI Explainer Helper Pill */}
                    <button
                      type="button"
                      onClick={() => setShowMobileAIAssistant(true)}
                      className="w-full text-center text-[11px] font-semibold text-indigo-700 bg-indigo-50 border border-indigo-200 rounded-lg py-2 px-3 flex items-center justify-center gap-1.5 hover:bg-indigo-100 transition shadow-2xs"
                    >
                      <Bot size={13} className="text-indigo-600" />
                      <span>Compare Retry vs Reschedule? Ask AI Explainer</span>
                    </button>

                    <button
                      onClick={() => handleSubmitRecoveryChoice(selectedOption)}
                      className="w-full rounded-xl bg-blue-700 py-3 text-xs font-bold text-white hover:bg-blue-800 transition shadow-sm mt-1"
                    >
                      {selectedOption === 'retry'
                        ? 'Confirm Retry Submission'
                        : `Confirm Rescheduling to ${selectedRescheduleDay} ${rescheduleMonth}`}
                    </button>
                  </div>
                )}

                {/* STEP 4: CONFIRMATION (DISTINGUISHING REQUESTED VS PENDING VS SUCCESSFUL) */}
                {currentStep === 'confirmation' && (
                  <div className="flex-1 p-4 space-y-4 overflow-y-auto">
                    <div>
                      <span className="text-[10px] font-bold text-blue-700 uppercase">Step 4 of 5</span>
                      <h3 className="text-sm font-bold text-slate-900">Request Confirmation</h3>
                      <p className="text-[11px] text-slate-500 mt-0.5">
                        Current status of your simulated request:
                      </p>
                    </div>

                    {/* RETRY FLOW CONFIRMATION */}
                    {selectedOption === 'retry' && (
                      <div className="rounded-xl border border-slate-200 bg-slate-50 p-4 space-y-3">
                        <div className="flex items-center gap-2">
                          {confirmationStatus === 'retry_requested' && (
                            <Clock size={18} className="text-blue-700 animate-pulse" />
                          )}
                          {confirmationStatus === 'payment_pending' && (
                            <RefreshCw size={18} className="text-amber-600 animate-spin" />
                          )}
                          {confirmationStatus === 'debit_unconfirmed' && (
                            <AlertTriangle size={18} className="text-amber-700" />
                          )}
                          {confirmationStatus === 'payment_successful' && (
                            <CheckCircle2 size={18} className="text-emerald-600" />
                          )}
                          {confirmationStatus === 'payment_failed' && (
                            <XCircle size={18} className="text-rose-600" />
                          )}

                          <span className="font-bold text-xs text-slate-900">
                            {confirmationStatus === 'retry_requested' && 'Retry Request Submitted — Outcome Pending'}
                            {confirmationStatus === 'payment_pending' && 'Payment Verification In Progress'}
                            {confirmationStatus === 'debit_unconfirmed' && 'Debit Unconfirmed — Check Statement'}
                            {confirmationStatus === 'payment_successful' && 'Payment Verified (Simulated Outcome)'}
                            {confirmationStatus === 'payment_failed' && 'Retry Unsuccessful (Simulated Outcome)'}
                          </span>
                        </div>

                        {/* Status Description */}
                        <div className="text-xs text-slate-600 leading-relaxed bg-white p-3 rounded-lg border border-slate-200">
                          {confirmationStatus === 'retry_requested' && (
                            <div>
                              Your retry request has been submitted to your bank. <strong>Verification is pending. Submitting a request does not mean payment has completed.</strong>
                            </div>
                          )}
                          {confirmationStatus === 'payment_pending' && (
                            <div>
                              We are awaiting an official status callback from your bank clearing system. Please allow time for processing.
                            </div>
                          )}
                          {confirmationStatus === 'debit_unconfirmed' && (
                            <div>
                              We haven&apos;t received confirmation of whether your bank account was debited. Please check your bank statement before attempting another payment.
                            </div>
                          )}
                          {confirmationStatus === 'payment_successful' && (
                            <div className="text-emerald-900">
                              Simulated bank clearance confirmed. Your instalment of ₹2,000 has been marked for mutual fund allocation.
                            </div>
                          )}
                          {confirmationStatus === 'payment_failed' && (
                            <div className="text-rose-900">
                              The bank clearing system reported that the retry could not be processed. No funds were cleared.
                            </div>
                          )}
                        </div>

                        {/* Interactive Bank Settlement Polling Check */}
                        {confirmationStatus === 'retry_requested' && (
                          <div className="pt-1">
                            <button
                              type="button"
                              onClick={handleCheckBankStatus}
                              disabled={isCheckingStatus}
                              className="w-full rounded-lg border border-blue-300 bg-blue-50 py-2.5 text-xs font-bold text-blue-800 hover:bg-blue-100 transition flex items-center justify-center gap-1.5 shadow-2xs"
                            >
                              <RefreshCw size={13} className={isCheckingStatus ? "animate-spin text-blue-700" : "text-blue-700"} />
                              <span>{isCheckingStatus ? 'Contacting Bank Clearing Network...' : 'Check Bank Settlement Status (Simulated)'}</span>
                            </button>
                            <p className="text-[10px] text-slate-500 text-center mt-1">
                              * Simulates checking NPCI / bank callback status without modifying database.
                            </p>
                          </div>
                        )}

                        <div className="text-[10px] text-slate-500 italic">
                          * Researcher controls for simulating different payment outcomes are located in the separate Researcher Evaluation view.
                        </div>
                      </div>
                    )}

                    {/* RESCHEDULE FLOW CONFIRMATION */}
                    {selectedOption === 'reschedule' && (
                      <div className="rounded-xl border border-purple-200 bg-purple-50/60 p-4 space-y-3">
                        <div className="flex items-center gap-2">
                          <CheckCircle2 size={18} className="text-purple-700" />
                          <span className="font-bold text-xs text-purple-900">Date Reschedule Request Recorded</span>
                        </div>
                        <div className="text-xs text-slate-700 leading-relaxed bg-white p-3 rounded-lg border border-purple-200 space-y-1">
                          <p>
                            Your request to adjust this instalment to the <strong>{selectedRescheduleDay} {rescheduleMonth}</strong> has been recorded.
                          </p>
                          <p className="text-[11px] text-slate-500">
                            Subject to your bank mandate configuration and clearance schedules. Applicable NAV will depend on the final order execution date.
                          </p>
                        </div>
                      </div>
                    )}

                    <button
                      onClick={handleProceedToCompletion}
                      className="w-full rounded-xl bg-blue-700 py-3 text-xs font-bold text-white hover:bg-blue-800 transition shadow-sm mt-3"
                    >
                      View Next-Step Summary
                    </button>
                  </div>
                )}

                {/* STEP 5: COMPLETION SUMMARY */}
                {currentStep === 'completion' && (
                  <div className="flex-1 p-4 space-y-4 overflow-y-auto">
                    <div className="rounded-xl border border-slate-200 bg-slate-50 p-4 text-center space-y-1">
                      <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 text-blue-700 mb-1">
                        <Award size={20} />
                      </div>
                      <h3 className="text-sm font-bold text-slate-900">Next Steps Summary</h3>
                      <p className="text-[11px] text-slate-600 font-medium">
                        {selectedOption === 'retry'
                          ? 'Retry Request Submitted — Outcome Pending'
                          : `Instalment Rescheduled to ${selectedRescheduleDay} ${rescheduleMonth}`}
                      </p>
                    </div>

                    <div className="rounded-lg border border-slate-200 bg-white p-3 space-y-2 text-xs">
                      <div className="font-bold text-slate-900 text-[11px] uppercase tracking-wide">Summary Details:</div>
                      <div className="space-y-1.5 text-[11px] text-slate-600">
                        <div className="flex justify-between border-b border-slate-100 pb-1">
                          <span>Scheme:</span>
                          <span className="font-semibold text-slate-800">UTI Nifty 50 Index Fund</span>
                        </div>
                        <div className="flex justify-between border-b border-slate-100 pb-1">
                          <span>Instalment Amount:</span>
                          <span className="font-semibold text-slate-800">₹2,000</span>
                        </div>
                        <div className="flex justify-between border-b border-slate-100 pb-1">
                          <span>Action Taken:</span>
                          <span className="font-semibold text-slate-800">
                            {selectedOption === 'retry' ? 'Simulated Instant Retry' : `Rescheduled to ${selectedRescheduleDay} ${rescheduleMonth}`}
                          </span>
                        </div>
                        <div className="flex justify-between border-b border-slate-100 pb-1">
                          <span>Payment Status:</span>
                          <span className="font-semibold text-slate-800">
                            {confirmationStatus === 'payment_successful' ? 'Verified Successful' : 'Outcome Pending Verification'}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span>Next Regular Scheduled Cycle:</span>
                          <span className="font-semibold text-slate-800">05 Dec 2026</span>
                        </div>
                      </div>
                    </div>

                    <div className="rounded-lg bg-slate-50 border border-slate-200 p-3 text-[11px] text-slate-600 leading-relaxed">
                      <strong>Policy Note: </strong> Your ongoing SIP status depends on your bank&apos;s mandate records. Please monitor your bank statements for debit confirmations.
                    </div>

                    <button
                      onClick={handleResetPrototype}
                      className="w-full rounded-xl bg-slate-900 py-3 text-xs font-bold text-white hover:bg-slate-800 transition"
                    >
                      Return to SIP Overview
                    </button>
                  </div>
                )}

                {/* IN-APP MOBILE AI ASSISTANT SHEET OVERLAY */}
                {showMobileAIAssistant && (
                  <div className="absolute inset-0 z-30 bg-slate-900/50 backdrop-blur-xs flex flex-col justify-end p-2 animate-in fade-in duration-200">
                    <div className="max-h-[580px] overflow-y-auto rounded-2xl bg-white shadow-2xl">
                      <AIExplanationAssistant
                        currentStep={currentStep}
                        selectedOption={selectedOption}
                        confirmationStatus={confirmationStatus}
                        onClose={() => setShowMobileAIAssistant(false)}
                        isCompact={true}
                      />
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Right: AI Explainer & PM Observer Panel */}
          <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm space-y-4">
            <div className="flex items-center justify-between border-b border-slate-100 pb-2.5">
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={() => setRightPanelTab('ai_explainer')}
                  className={`text-xs font-bold pb-1 transition flex items-center gap-1.5 border-b-2 ${
                    rightPanelTab === 'ai_explainer'
                      ? 'border-indigo-600 text-indigo-700'
                      : 'border-transparent text-slate-500 hover:text-slate-800'
                  }`}
                >
                  <Bot size={14} />
                  <span>AI Explainer Assistant</span>
                </button>
                <button
                  type="button"
                  onClick={() => setRightPanelTab('pm_checklist')}
                  className={`text-xs font-bold pb-1 transition flex items-center gap-1.5 border-b-2 ${
                    rightPanelTab === 'pm_checklist'
                      ? 'border-blue-600 text-blue-700'
                      : 'border-transparent text-slate-500 hover:text-slate-800'
                  }`}
                >
                  <UserCheck size={14} />
                  <span>PM Checklist</span>
                </button>
              </div>
              <span className="rounded bg-slate-100 px-2 py-0.5 text-[10px] font-mono text-slate-600">
                {participantId}
              </span>
            </div>

            {rightPanelTab === 'ai_explainer' ? (
              <AIExplanationAssistant
                currentStep={currentStep}
                selectedOption={selectedOption}
                confirmationStatus={confirmationStatus}
                isCompact={false}
              />
            ) : (
              <div className="space-y-3 text-xs leading-relaxed text-slate-600">
                <div className="rounded-lg border border-slate-100 bg-slate-50 p-2.5">
                  <div className="font-bold text-slate-900 text-[11px]">1. Unconfirmed Debit Understanding:</div>
                  <p className="text-[11px] text-slate-600 mt-0.5">
                    Does the user understand that debit status is unconfirmed, and do they plan to check their bank statement?
                  </p>
                </div>

                <div className="rounded-lg border border-slate-100 bg-slate-50 p-2.5">
                  <div className="font-bold text-slate-900 text-[11px]">2. Pending State Perception:</div>
                  <p className="text-[11px] text-slate-600 mt-0.5">
                    When Step 4 shows &ldquo;Retry Request Submitted — Outcome Pending&rdquo;, does the user recognize that payment is not yet confirmed?
                  </p>
                </div>

                <div className="rounded-lg border border-slate-100 bg-slate-50 p-2.5">
                  <div className="font-bold text-slate-900 text-[11px]">3. Rescheduling Clarity:</div>
                  <p className="text-[11px] text-slate-600 mt-0.5">
                    Does the user grasp that rescheduling alters future debit timing without making false guarantees about outcomes?
                  </p>
                </div>

                <button
                  onClick={() => setActiveTab('evaluator')}
                  className="w-full rounded-lg border border-blue-200 bg-blue-50 py-2 text-xs font-bold text-blue-800 hover:bg-blue-100 transition"
                >
                  Open Researcher Evaluator &amp; Controls →
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* TAB 2: RESEARCHER USABILITY EVALUATION & SIMULATION CONTROLS VIEW */}
      {activeTab === 'evaluator' && (
        <div className="space-y-6">
          {/* SEPARATE RESEARCHER-ONLY TESTING CONTROLS */}
          <div className="rounded-xl border border-purple-200 bg-purple-50/50 p-4 shadow-sm space-y-3">
            <div className="flex items-center justify-between border-b border-purple-200/60 pb-2">
              <div className="flex items-center gap-2">
                <Settings size={16} className="text-purple-800" />
                <h4 className="font-bold text-xs uppercase tracking-wider text-purple-900">
                  Researcher-Only Testing Controls (Not Exposed to Investors)
                </h4>
              </div>
              <span className="text-[10px] font-bold text-purple-700 bg-purple-100 px-2 py-0.5 rounded">
                Observer Console
              </span>
            </div>

            <p className="text-xs text-purple-950 leading-relaxed">
              Use these controls during moderated sessions to simulate different bank clearing responses on the active prototype. Test participant comprehension of pending, unconfirmed, failed, and successful states.
            </p>

            <div className="flex flex-wrap gap-2 pt-1">
              <button
                type="button"
                onClick={() => setConfirmationStatus('retry_requested')}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold border transition ${
                  confirmationStatus === 'retry_requested'
                    ? 'bg-blue-700 text-white border-blue-700 shadow-sm'
                    : 'bg-white text-slate-700 border-slate-300 hover:bg-slate-50'
                }`}
              >
                Simulate: Retry Requested
              </button>

              <button
                type="button"
                onClick={() => setConfirmationStatus('payment_pending')}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold border transition ${
                  confirmationStatus === 'payment_pending'
                    ? 'bg-amber-600 text-white border-amber-600 shadow-sm'
                    : 'bg-white text-slate-700 border-slate-300 hover:bg-slate-50'
                }`}
              >
                Simulate: Payment Pending
              </button>

              <button
                type="button"
                onClick={() => setConfirmationStatus('debit_unconfirmed')}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold border transition ${
                  confirmationStatus === 'debit_unconfirmed'
                    ? 'bg-amber-700 text-white border-amber-700 shadow-sm'
                    : 'bg-white text-slate-700 border-slate-300 hover:bg-slate-50'
                }`}
              >
                Simulate: Debit Unconfirmed
              </button>

              <button
                type="button"
                onClick={() => setConfirmationStatus('payment_failed')}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold border transition ${
                  confirmationStatus === 'payment_failed'
                    ? 'bg-rose-700 text-white border-rose-700 shadow-sm'
                    : 'bg-white text-slate-700 border-slate-300 hover:bg-slate-50'
                }`}
              >
                Simulate: Bank Reject / Fail
              </button>

              <button
                type="button"
                onClick={() => setConfirmationStatus('payment_successful')}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold border transition ${
                  confirmationStatus === 'payment_successful'
                    ? 'bg-emerald-700 text-white border-emerald-700 shadow-sm'
                    : 'bg-white text-slate-700 border-slate-300 hover:bg-slate-50'
                }`}
              >
                Simulate: Bank Success
              </button>
            </div>
          </div>

          <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm space-y-4">
            <div className="border-b border-slate-100 pb-3 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-blue-700">Usability Testing Protocol</span>
                <h3 className="font-bold text-base text-slate-900 mt-0.5">Researcher Evaluation Console</h3>
                <p className="text-xs text-slate-500">Record observations, 5-point checklist scores, and qualitative feedback.</p>
              </div>

              <div className="flex items-center gap-2">
                <label className="text-xs font-semibold text-slate-600">Participant ID:</label>
                <select
                  value={participantId}
                  onChange={(e) => setParticipantId(e.target.value)}
                  className="rounded-lg border border-slate-300 bg-white px-2.5 py-1 text-xs text-slate-800 font-mono"
                >
                  <option value="USR-84102">USR-84102 (HDFC First-Timer)</option>
                  <option value="USR-91244">USR-91244 (SBI Salary Lag)</option>
                  <option value="USR-55821">USR-55821 (ICICI Dropped)</option>
                  <option value="USR-77319">USR-77319 (Axis Paused)</option>
                  <option value="USR-NEW">USR-Custom Session</option>
                </select>
              </div>
            </div>

            {/* Task Selection Cards */}
            <div className="grid gap-3 sm:grid-cols-4">
              {NEUTRAL_USABILITY_TASKS.map((t) => (
                <button
                  key={t.id}
                  onClick={() => setSelectedTask(t.id)}
                  className={`p-3 rounded-xl border text-left transition ${
                    selectedTask === t.id
                      ? 'border-blue-700 bg-blue-50/70 shadow-sm'
                      : 'border-slate-200 bg-slate-50/50 hover:bg-slate-100'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold uppercase text-blue-800">Task {t.taskNumber}</span>
                    <span className="text-[10px] font-mono text-slate-400">{t.id}</span>
                  </div>
                  <div className="font-bold text-xs text-slate-900 mt-1 line-clamp-1">{t.title}</div>
                </button>
              ))}
            </div>

            {/* Selected Task Details & Evaluator Input Form */}
            {(() => {
              const task = NEUTRAL_USABILITY_TASKS.find((t) => t.id === selectedTask) || NEUTRAL_USABILITY_TASKS[0];
              return (
                <div className="grid gap-6 md:grid-cols-2 pt-2">
                  {/* Task Instructions & Acceptance Criteria */}
                  <div className="rounded-xl border border-slate-200 bg-slate-50/70 p-4 space-y-3 text-xs">
                    <div>
                      <span className="font-bold text-[10px] uppercase text-blue-700">Participant Scenario:</span>
                      <p className="text-slate-700 mt-0.5 leading-relaxed italic">&ldquo;{task.scenario}&rdquo;</p>
                    </div>

                    <div>
                      <span className="font-bold text-[10px] uppercase text-slate-700">Neutral Moderator Instruction:</span>
                      <p className="text-slate-800 mt-0.5 font-medium">&ldquo;{task.neutralPrompt}&rdquo;</p>
                    </div>

                    <div className="pt-2 border-t border-slate-200">
                      <span className="font-bold text-[10px] uppercase text-slate-700 block mb-1.5">Acceptance Criteria:</span>
                      <ul className="space-y-1 text-slate-600">
                        {task.acceptanceCriteria.map((crit, idx) => (
                          <li key={idx} className="flex items-start gap-1.5 text-[11px]">
                            <CheckSquare size={13} className="text-blue-700 shrink-0 mt-0.5" />
                            <span>{crit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Evaluator Observation Capture Form with 5-Item Checklist */}
                  <div className="rounded-xl border border-slate-200 bg-white p-4 space-y-4 text-xs">
                    <div>
                      <label className="font-bold text-slate-900 block mb-1.5">Task Outcome:</label>
                      <div className="grid grid-cols-3 gap-2">
                        <button
                          type="button"
                          onClick={() => setTaskOutcome('passed')}
                          className={`py-1.5 rounded-lg border text-xs font-semibold ${
                            taskOutcome === 'passed'
                              ? 'bg-emerald-600 text-white border-emerald-600'
                              : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
                          }`}
                        >
                          Passed (Independent)
                        </button>
                        <button
                          type="button"
                          onClick={() => setTaskOutcome('partial')}
                          className={`py-1.5 rounded-lg border text-xs font-semibold ${
                            taskOutcome === 'partial'
                              ? 'bg-amber-600 text-white border-amber-600'
                              : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
                          }`}
                        >
                          Partial (With Help)
                        </button>
                        <button
                          type="button"
                          onClick={() => setTaskOutcome('failed')}
                          className={`py-1.5 rounded-lg border text-xs font-semibold ${
                            taskOutcome === 'failed'
                              ? 'bg-rose-600 text-white border-rose-600'
                              : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
                          }`}
                        >
                          Failed / Abandoned
                        </button>
                      </div>
                    </div>

                    {/* 5-Item Evaluation Checklist */}
                    <div className="rounded-lg border border-slate-200 bg-slate-50/70 p-3 space-y-2">
                      <label className="font-bold text-slate-900 block text-[11px] uppercase tracking-wide">
                        5-Item Researcher Evaluation Checklist:
                      </label>
                      <div className="space-y-1.5">
                        <label className="flex items-center gap-2 cursor-pointer text-[11px] text-slate-700">
                          <input
                            type="checkbox"
                            checked={evalChecklist.understandsWhyFailed}
                            onChange={() => handleToggleChecklist('understandsWhyFailed')}
                            className="rounded border-slate-300 text-blue-700 focus:ring-blue-600"
                          />
                          <span>1. Understood why the instalment failed</span>
                        </label>

                        <label className="flex items-center gap-2 cursor-pointer text-[11px] text-slate-700">
                          <input
                            type="checkbox"
                            checked={evalChecklist.understandsDebitStatus}
                            onChange={() => handleToggleChecklist('understandsDebitStatus')}
                            className="rounded border-slate-300 text-blue-700 focus:ring-blue-600"
                          />
                          <span>2. Understood whether money was debited (unconfirmed status)</span>
                        </label>

                        <label className="flex items-center gap-2 cursor-pointer text-[11px] text-slate-700">
                          <input
                            type="checkbox"
                            checked={evalChecklist.choosesBetweenRetryAndReschedule}
                            onChange={() => handleToggleChecklist('choosesBetweenRetryAndReschedule')}
                            className="rounded border-slate-300 text-blue-700 focus:ring-blue-600"
                          />
                          <span>3. Understood difference between retry and date rescheduling</span>
                        </label>

                        <label className="flex items-center gap-2 cursor-pointer text-[11px] text-slate-700">
                          <input
                            type="checkbox"
                            checked={evalChecklist.completesSelectedJourney}
                            onChange={() => handleToggleChecklist('completesSelectedJourney')}
                            className="rounded border-slate-300 text-blue-700 focus:ring-blue-600"
                          />
                          <span>4. Successfully completed the selected recovery journey</span>
                        </label>

                        <label className="flex items-center gap-2 cursor-pointer text-[11px] text-slate-700">
                          <input
                            type="checkbox"
                            checked={evalChecklist.understandsFinalPaymentStatus}
                            onChange={() => handleToggleChecklist('understandsFinalPaymentStatus')}
                            className="rounded border-slate-300 text-blue-700 focus:ring-blue-600"
                          />
                          <span>5. Understood final payment status (distinguishes pending from success)</span>
                        </label>
                      </div>
                    </div>

                    {/* Observed Confusion Flags */}
                    <div>
                      <label className="font-bold text-slate-900 block mb-1.5">Observed Confusion Points:</label>
                      <div className="space-y-1.5">
                        {[
                          'Assumed money was definitely deducted',
                          'Expected immediate payment success after retry',
                          'Unsure if their bank will charge a return fee',
                          'Hesitated selecting between retry vs date rescheduling',
                          'Unclear about how rescheduling affects future debits'
                        ].map((point) => (
                          <label key={point} className="flex items-center gap-2 cursor-pointer text-[11px] text-slate-700">
                            <input
                              type="checkbox"
                              checked={confusionPoints.includes(point)}
                              onChange={() => handleToggleConfusion(point)}
                              className="rounded border-slate-300 text-blue-700 focus:ring-blue-600"
                            />
                            <span>{point}</span>
                          </label>
                        ))}
                      </div>
                    </div>

                    {/* Navigation Errors Counter */}
                    <div className="flex items-center justify-between pt-1">
                      <span className="font-bold text-slate-900">Navigation / Tap Errors:</span>
                      <div className="flex items-center gap-2">
                        <button
                          type="button"
                          onClick={() => setNavigationErrors((prev) => Math.max(0, prev - 1))}
                          className="h-6 w-6 rounded border border-slate-300 bg-slate-50 text-slate-700 flex items-center justify-center font-bold"
                        >
                          -
                        </button>
                        <span className="font-mono font-bold text-sm w-5 text-center">{navigationErrors}</span>
                        <button
                          type="button"
                          onClick={() => setNavigationErrors((prev) => prev + 1)}
                          className="h-6 w-6 rounded border border-slate-300 bg-slate-50 text-slate-700 flex items-center justify-center font-bold"
                        >
                          +
                        </button>
                      </div>
                    </div>

                    {/* Qualitative Notes */}
                    <div>
                      <label className="font-bold text-slate-900 block mb-1">Qualitative Feedback &amp; Quotes:</label>
                      <textarea
                        value={researcherNotes}
                        onChange={(e) => setResearcherNotes(e.target.value)}
                        placeholder="e.g. Participant stated: 'I appreciated that the app did not make false promises about immediate payment success...'"
                        rows={2}
                        className="w-full rounded-lg border border-slate-300 p-2 text-xs text-slate-800 focus:border-blue-600 focus:outline-none"
                      />
                    </div>

                    <button
                      type="button"
                      onClick={handleSaveObservation}
                      className="w-full rounded-lg bg-blue-700 py-2.5 text-xs font-bold text-white hover:bg-blue-800 transition"
                    >
                      Save Evaluation Observation
                    </button>
                  </div>
                </div>
              );
            })()}
          </div>

          {/* Session Observations History Table */}
          <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm space-y-3">
            <div className="flex items-center justify-between border-b border-slate-100 pb-2.5">
              <div>
                <h4 className="font-bold text-sm text-slate-900">Recorded Session Observations</h4>
                <p className="text-xs text-slate-500">Log of active evaluation trials captured during prototype testing sessions.</p>
              </div>
              <span className="text-xs text-slate-400 font-mono">{recordedObservations.length} observations</span>
            </div>

            {recordedObservations.length === 0 ? (
              <div className="text-center py-6 text-xs text-slate-400">
                No observations recorded yet. Select a task above, run a test trial, and click &ldquo;Save Evaluation Observation&rdquo;.
              </div>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs">
                  <thead className="bg-slate-50 text-slate-700 font-semibold border-b border-slate-200">
                    <tr>
                      <th className="py-2 px-3">Time</th>
                      <th className="py-2 px-3">Participant</th>
                      <th className="py-2 px-3">Task</th>
                      <th className="py-2 px-3">Outcome</th>
                      <th className="py-2 px-3">Errors</th>
                      <th className="py-2 px-3">Confusion Points</th>
                      <th className="py-2 px-3">Researcher Notes</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 text-slate-600">
                    {recordedObservations.map((obs) => (
                      <tr key={obs.id} className="hover:bg-slate-50/50">
                        <td className="py-2.5 px-3 font-mono text-[11px] text-slate-400">{obs.recordedAt}</td>
                        <td className="py-2.5 px-3 font-mono font-semibold text-slate-800">{obs.participantId}</td>
                        <td className="py-2.5 px-3 font-semibold text-blue-800">{obs.taskId}</td>
                        <td className="py-2.5 px-3">
                          <span
                            className={`rounded px-1.5 py-0.5 text-[10px] font-bold ${
                              obs.taskOutcome === 'passed'
                                ? 'bg-emerald-100 text-emerald-800'
                                : obs.taskOutcome === 'partial'
                                ? 'bg-amber-100 text-amber-800'
                                : 'bg-rose-100 text-rose-800'
                            }`}
                          >
                            {obs.taskOutcome.toUpperCase()}
                          </span>
                        </td>
                        <td className="py-2.5 px-3 font-mono text-center">{obs.navigationErrors}</td>
                        <td className="py-2.5 px-3 text-[11px]">
                          {obs.observedConfusion.length > 0 ? (
                            <ul className="list-disc list-inside">
                              {obs.observedConfusion.map((c, i) => (
                                <li key={i}>{c}</li>
                              ))}
                            </ul>
                          ) : (
                            <span className="text-slate-400">None observed</span>
                          )}
                        </td>
                        <td className="py-2.5 px-3 text-[11px] text-slate-700 max-w-[200px] truncate" title={obs.qualitativeNotes}>
                          {obs.qualitativeNotes}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>
      )}

      {/* TAB 3: EVIDENCE-TO-FEATURE TRACEABILITY MATRIX */}
      {activeTab === 'traceability' && (
        <div className="space-y-6">
          <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm space-y-4">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <div>
                <h4 className="font-bold text-sm text-slate-900">Evidence-to-Feature Traceability Matrix</h4>
                <p className="text-xs text-slate-500">Every design choice is strictly grounded in audited Phase 4 themes and Phase 5 evidence records.</p>
              </div>
              <span className="text-[11px] font-semibold text-blue-700 bg-blue-50 px-2.5 py-1 rounded-full border border-blue-200">
                6 Customer Pain Points Mapped
              </span>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead className="bg-slate-50 text-slate-700 font-semibold border-b border-slate-200">
                  <tr>
                    <th className="py-2.5 px-3">Prototype Screen &amp; Feature</th>
                    <th className="py-2.5 px-3">Target Pain Point Theme</th>
                    <th className="py-2.5 px-3">Audited Customer Evidence Records</th>
                    <th className="py-2.5 px-3">Behavioral Hypothesis Addressed</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-slate-600">
                  <tr className="hover:bg-slate-50/50">
                    <td className="py-3 px-3 font-medium text-slate-900">
                      <div className="font-bold text-blue-900">Screen 1: Debit Status Transparency</div>
                      <div className="text-[11px] text-slate-500">Unconfirmed debit alert advising bank statement check</div>
                    </td>
                    <td className="py-3 px-3">
                      <span className="rounded bg-rose-100 text-rose-800 px-1.5 py-0.5 text-[10px] font-bold">PAIN-03</span>
                      <div className="text-[11px] font-medium text-slate-700 mt-0.5">Bank Bounce &amp; Deduction Confusion</div>
                    </td>
                    <td className="py-3 px-3 font-mono text-[11px]">
                      <span className="font-semibold text-blue-700">IND-08924</span>, <span className="font-semibold text-blue-700">IND-51705</span>, <span className="font-semibold text-blue-700">IND-34882</span>
                    </td>
                    <td className="py-3 px-3 text-[11px] leading-relaxed">
                      Prevents duplicate payment attempts by clearly stating that debit status is unconfirmed until the user checks their statement.
                    </td>
                  </tr>

                  <tr className="hover:bg-slate-50/50">
                    <td className="py-3 px-3 font-medium text-slate-900">
                      <div className="font-bold text-blue-900">Screen 2: Honest Failure Possibilities</div>
                      <div className="text-[11px] text-slate-500">Illustrative possibilities without manufactured bank codes</div>
                    </td>
                    <td className="py-3 px-3">
                      <span className="rounded bg-rose-100 text-rose-800 px-1.5 py-0.5 text-[10px] font-bold">PAIN-02</span>
                      <div className="text-[11px] font-medium text-slate-700 mt-0.5">Silent Mandate Failures</div>
                    </td>
                    <td className="py-3 px-3 font-mono text-[11px]">
                      <span className="font-semibold text-blue-700">IND-25733</span>, <span className="font-semibold text-blue-700">IND-27496</span>, <span className="font-semibold text-blue-700">IND-31462</span>
                    </td>
                    <td className="py-3 px-3 text-[11px] leading-relaxed">
                      Replaces silent failure with honest potential causes and actionable checklist items for the user.
                    </td>
                  </tr>

                  <tr className="hover:bg-slate-50/50">
                    <td className="py-3 px-3 font-medium text-slate-900">
                      <div className="font-bold text-blue-900">Screen 3: Simulated Instant Retry</div>
                      <div className="text-[11px] text-slate-500">Manual payment retry pathway without false NAV claims</div>
                    </td>
                    <td className="py-3 px-3">
                      <span className="rounded bg-rose-100 text-rose-800 px-1.5 py-0.5 text-[10px] font-bold">PAIN-02 &amp; PAIN-04</span>
                      <div className="text-[11px] font-medium text-slate-700 mt-0.5">Missing Manual Retry Option</div>
                    </td>
                    <td className="py-3 px-3 font-mono text-[11px]">
                      <span className="font-semibold text-blue-700">IND-35186</span>, <span className="font-semibold text-blue-700">IND-00358</span>, <span className="text-slate-500">EVD-001</span>
                    </td>
                    <td className="py-3 px-3 text-[11px] leading-relaxed">
                      Provides a direct self-service retry pathway for missed payments without manufacturing artificial cut-off urgency.
                    </td>
                  </tr>

                  <tr className="hover:bg-slate-50/50">
                    <td className="py-3 px-3 font-medium text-slate-900">
                      <div className="font-bold text-blue-900">Screen 3: Future Date Rescheduling</div>
                      <div className="text-[11px] text-slate-500">Validated date picker with cash-flow alignment</div>
                    </td>
                    <td className="py-3 px-3">
                      <span className="rounded bg-rose-100 text-rose-800 px-1.5 py-0.5 text-[10px] font-bold">PAIN-06</span>
                      <div className="text-[11px] font-medium text-slate-700 mt-0.5">Mandate Modification Blocks</div>
                    </td>
                    <td className="py-3 px-3 font-mono text-[11px]">
                      <span className="font-semibold text-blue-700">IND-15499</span>, <span className="font-semibold text-blue-700">IND-46721</span>, <span className="text-slate-500">EVD-003</span>
                    </td>
                    <td className="py-3 px-3 text-[11px] leading-relaxed">
                      Explains that shifting instalment date alters investment timing and NAV, without making unverified mandate guarantees.
                    </td>
                  </tr>

                  <tr className="hover:bg-slate-50/50">
                    <td className="py-3 px-3 font-medium text-slate-900">
                      <div className="font-bold text-blue-900">Screen 4: Transparent Pending States</div>
                      <div className="text-[11px] text-slate-500">Outcome pending state (never assumes instant success)</div>
                    </td>
                    <td className="py-3 px-3">
                      <span className="rounded bg-rose-100 text-rose-800 px-1.5 py-0.5 text-[10px] font-bold">PAIN-04</span>
                      <div className="text-[11px] font-medium text-slate-700 mt-0.5">Ledger De-synchronization</div>
                    </td>
                    <td className="py-3 px-3 font-mono text-[11px]">
                      <span className="font-semibold text-blue-700">IND-34635</span>, <span className="font-semibold text-blue-700">IND-10308</span>, <span className="font-semibold text-blue-700">IND-35068</span>
                    </td>
                    <td className="py-3 px-3 text-[11px] leading-relaxed">
                      Eliminates false instant confirmations; teaches first-time investors realistic clearing network response windows.
                    </td>
                  </tr>

                  <tr className="hover:bg-slate-50/50">
                    <td className="py-3 px-3 font-medium text-slate-900">
                      <div className="font-bold text-blue-900">Screen 5: Neutral Policy Guidance</div>
                      <div className="text-[11px] text-slate-500">Explains ongoing mandate state without unsupported guarantees</div>
                    </td>
                    <td className="py-3 px-3">
                      <span className="rounded bg-rose-100 text-rose-800 px-1.5 py-0.5 text-[10px] font-bold">PAIN-01</span>
                      <div className="text-[11px] font-medium text-slate-700 mt-0.5">Phantom Debits Post-Pause / Cancel</div>
                    </td>
                    <td className="py-3 px-3 font-mono text-[11px]">
                      <span className="font-semibold text-blue-700">IND-19705</span>, <span className="font-semibold text-blue-700">IND-42585</span>, <span className="font-semibold text-blue-700">IND-59144</span>
                    </td>
                    <td className="py-3 px-3 text-[11px] leading-relaxed">
                      Removes misconceptions regarding bank mandate lifecycles, ensuring users know how future debits operate.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
