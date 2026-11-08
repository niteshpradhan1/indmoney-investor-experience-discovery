import React, { useState } from 'react';
import {
  Smartphone,
  AlertTriangle,
  CheckCircle2,
  Calendar,
  Clock,
  ArrowRight,
  ShieldCheck,
  RotateCcw,
  CreditCard,
  Zap,
  Info,
  ChevronRight,
  RefreshCw,
  Sparkles,
  Award,
  HelpCircle,
  ClipboardList,
  UserCheck,
  FileText,
  CheckSquare,
  XCircle,
  Activity,
  Layers
} from 'lucide-react';
import {
  PrototypeStep,
  ConfirmationStatus,
  UsabilityTask,
  UsabilityObservation
} from '../types';

// ==============================================================================
// NEUTRAL USABILITY TESTING TASKS (N = 4)
// ==============================================================================

const NEUTRAL_USABILITY_TASKS: UsabilityTask[] = [
  {
    id: 'TASK-1',
    taskNumber: 1,
    title: 'Failure Awareness & Diagnostic Comprehension',
    scenario: 'You opened the app and noticed your regular monthly SIP instalment did not go through as expected.',
    instruction: 'Review the failure screen and explain in your own words what happened and what you understand about possible reasons.',
    acceptanceCriteria: [
      'Participant identifies that payment did not complete.',
      'Participant notices that no specific bank code is assumed.',
      'Participant observes illustrative possible causes without panic.',
      'Participant understands that INDMoney does not charge a penalty.'
    ],
    neutralPrompt: 'Looking at this screen, what does it tell you about your recent payment?'
  },
  {
    id: 'TASK-2',
    taskNumber: 2,
    title: 'Evaluating Recovery Options Neutrally',
    scenario: 'You want to understand what actions you can take regarding this failed instalment.',
    instruction: 'Look at the recovery choices presented on screen. Explain the difference between Option A (Instant Retry) and Option B (Future Rescheduling).',
    acceptanceCriteria: [
      'Participant distinguishes immediate payment attempt from date shifting.',
      'Participant recognizes neither option promises immediate NAV eligibility.',
      'Participant selects an option based on their own hypothetical cash-flow.'
    ],
    neutralPrompt: 'How would you describe the difference between these two options?'
  },
  {
    id: 'TASK-3',
    taskNumber: 3,
    title: 'Executing a Simulated Retry & Observing Pending State',
    scenario: 'You have chosen to try paying the instalment immediately using a digital payment method.',
    instruction: 'Submit the retry request and observe what the confirmation screen reports.',
    acceptanceCriteria: [
      'Participant understands that submitting a retry does not equal instant success.',
      'Participant recognizes "Retry Requested" vs "Payment Pending" states.',
      'Participant remains comfortable waiting for bank confirmation.'
    ],
    neutralPrompt: 'What is the current status of your payment after submitting this request?'
  },
  {
    id: 'TASK-4',
    taskNumber: 4,
    title: 'Exploring Future Date Rescheduling',
    scenario: 'You realize your salary arrives on the 7th of every month, but your SIP was scheduled for the 5th.',
    instruction: 'Select a future rescheduling date to align with your salary and review the confirmation summary.',
    acceptanceCriteria: [
      'Participant chooses an appropriate future date (e.g. 10th).',
      'Participant notices mandate is not cancelled or broken.',
      'Participant confirms understanding of next month debit schedule.'
    ],
    neutralPrompt: 'What will happen to your next month investment if you confirm this rescheduling?'
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
  const [rescheduleDate, setRescheduleDate] = useState<number>(10);

  // Step 4 Confirmation Status (Never automatically assumes success!)
  const [confirmationStatus, setConfirmationStatus] = useState<ConfirmationStatus>('retry_requested');
  const [isVerifying, setIsVerifying] = useState<boolean>(false);

  // Usability Evaluator State
  const [selectedTask, setSelectedTask] = useState<string>('TASK-1');
  const [participantId, setParticipantId] = useState<string>('USR-84102');
  const [taskOutcome, setTaskOutcome] = useState<'passed' | 'partial' | 'failed' | 'untested'>('untested');
  const [confusionPoints, setConfusionPoints] = useState<string[]>([]);
  const [navigationErrors, setNavigationErrors] = useState<number>(0);
  const [researcherNotes, setResearcherNotes] = useState<string>('');
  const [recordedObservations, setRecordedObservations] = useState<UsabilityObservation[]>([]);

  // Reset prototype to initial dashboard state
  const handleResetPrototype = () => {
    setCurrentStep('overview');
    setSelectedOption('retry');
    setConfirmationStatus('retry_requested');
    setIsVerifying(false);
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

  // Simulate manual check or simulated bank verification (User/Researcher triggered)
  const handleSimulateStatusCheck = () => {
    setIsVerifying(true);
    setTimeout(() => {
      setIsVerifying(false);
      setConfirmationStatus('payment_pending');
    }, 1500);
  };

  const handleSimulateBankSuccess = () => {
    setIsVerifying(true);
    setTimeout(() => {
      setIsVerifying(false);
      setConfirmationStatus('payment_successful');
    }, 1800);
  };

  // Step 5: Proceed to Completion Summary
  const handleProceedToCompletion = () => {
    setCurrentStep('completion');
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
            A clickable research prototype exploring how first-time investors understand and recover from a failed SIP instalment without false guarantees.
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

      {/* Safety & Scientific Boundary Disclaimer */}
      <div className="rounded-xl border border-amber-200 bg-amber-50/70 p-3.5 text-xs text-amber-950 flex flex-col sm:flex-row sm:items-center justify-between gap-2 shadow-sm">
        <div className="flex items-center gap-2.5">
          <Info size={16} className="text-amber-700 shrink-0" />
          <span>
            <strong>Research Environment Disclaimer: </strong> All accounts, failure scenarios, and retry actions are simulated. No live bank credentials, payment gateways, or real financial transactions are executed. Causal impact on retention remains under investigation (H1 status: <strong>NOT VALIDATED</strong>).
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
                    <div className="font-bold text-rose-700">1. SIP Failure Screen</div>
                    <div className="text-[11px] text-slate-500">States payment did not complete; no invented bank code</div>
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
                    <div className="text-[11px] text-slate-500">Option A (Retry) vs Option B (Reschedule) neutrally explained</div>
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
                    <div className="font-bold">4. Confirmation Status</div>
                    <div className="text-[11px] text-slate-500">Requested vs Pending vs Successful (No instant auto-success)</div>
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
                    <div className="font-bold text-emerald-700">5. Completion Summary</div>
                    <div className="text-[11px] text-slate-500">Clear next-step guidance &amp; return to SIP overview</div>
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
                Trigger a simulated failed instalment on the user&apos;s active monthly SIP to initiate the 5-step test journey.
              </p>
              <button
                onClick={handleTriggerSimulatedFailure}
                className="w-full rounded-lg bg-rose-700 px-3 py-2 text-xs font-semibold text-white hover:bg-rose-800 transition shadow-sm mt-1"
              >
                Trigger Simulated Failed Instalment
              </button>
            </div>
          </div>

          {/* Center: Mobile Device Viewport */}
          <div className="flex justify-center">
            <div className="w-[360px] rounded-[36px] border-4 border-slate-900 bg-slate-900 p-2 shadow-2xl">
              <div className="relative min-h-[620px] rounded-[28px] bg-white text-slate-900 overflow-hidden flex flex-col font-sans">
                {/* Mobile Top Status Bar */}
                <div className="flex items-center justify-between px-5 pt-3 pb-2 text-[11px] font-semibold text-slate-600 bg-white border-b border-slate-100">
                  <span>9:41</span>
                  <div className="flex items-center gap-1.5">
                    <span className="h-2 w-2 rounded-full bg-emerald-500" />
                    <span className="text-[10px]">INDmoney</span>
                  </div>
                </div>

                {/* STEP 0: SIP OVERVIEW DASHBOARD */}
                {currentStep === 'overview' && (
                  <div className="flex-1 p-4 space-y-4 overflow-y-auto">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-[11px] text-slate-400 uppercase font-semibold">Total SIP Portfolio</div>
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
                        <div>Next Debit: <span className="font-semibold text-slate-800">05 Nov 2026</span></div>
                        <div>Mandate: <span className="font-semibold text-slate-800">AutoPay (Active)</span></div>
                      </div>

                      <div className="pt-2 border-t border-slate-200 flex items-center justify-between text-[11px]">
                        <span className="text-emerald-700 font-semibold flex items-center gap-1">
                          <CheckCircle2 size={12} />
                          4 of 4 Completed
                        </span>
                        <span className="text-slate-400">Streak: 4 Mos</span>
                      </div>
                    </div>

                    <div className="pt-6">
                      <button
                        onClick={handleTriggerSimulatedFailure}
                        className="w-full rounded-xl border-2 border-dashed border-rose-300 bg-rose-50/70 p-3 text-xs font-bold text-rose-800 hover:bg-rose-100 transition text-center"
                      >
                        ⚡ Simulate Failed Instalment
                      </button>
                    </div>
                  </div>
                )}

                {/* STEP 1: SIP FAILURE SCREEN */}
                {currentStep === 'failure_screen' && (
                  <div className="flex-1 p-4 space-y-4 overflow-y-auto">
                    <div className="rounded-xl border border-rose-300 bg-rose-50 p-4 space-y-3">
                      <div className="flex items-center gap-2 text-rose-800 font-bold text-xs uppercase">
                        <AlertTriangle size={16} />
                        <span>Payment Notice</span>
                      </div>

                      <div>
                        <div className="text-lg font-extrabold text-slate-900">Payment Did Not Complete</div>
                        <div className="text-xs text-slate-600 mt-0.5">
                          Instalment of ₹2,000 for UTI Nifty 50 Index Fund could not be processed.
                        </div>
                      </div>

                      <div className="rounded-lg bg-white p-3 text-xs text-slate-700 border border-rose-200 space-y-1.5 leading-relaxed">
                        <div className="font-semibold text-slate-900">What Happened:</div>
                        <p className="text-[11px] text-slate-600">
                          The scheduled monthly payment for this instalment was not completed. No money was deducted from your bank account for this attempt.
                        </p>
                      </div>

                      {/* Zero-penalty reassurance */}
                      <div className="rounded-lg bg-emerald-50 border border-emerald-200 p-2.5 text-[11px] text-emerald-950 space-y-1">
                        <div className="font-bold flex items-center gap-1 text-emerald-900">
                          <ShieldCheck size={13} className="text-emerald-700" />
                          <span>Important Reassurance</span>
                        </div>
                        <p className="text-[11px] text-emerald-900/90 leading-normal">
                          INDMoney does not charge penalty fees for an incomplete instalment. Your existing mutual fund units remain completely safe.
                        </p>
                      </div>
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
                          The available balance in your linked account may have been lower than the instalment amount at the moment of processing.
                        </p>
                      </div>

                      <div className="rounded-lg border border-slate-200 bg-slate-50 p-2.5 space-y-1">
                        <div className="font-bold text-slate-900 flex items-center gap-1.5">
                          <span className="h-1.5 w-1.5 rounded-full bg-slate-400" />
                          <span>2. Bank Mandate Status</span>
                        </div>
                        <p className="text-[11px] text-slate-600 leading-normal">
                          Your bank mandate authorization may be undergoing maintenance, update, or may need re-confirmation.
                        </p>
                      </div>

                      <div className="rounded-lg border border-slate-200 bg-slate-50 p-2.5 space-y-1">
                        <div className="font-bold text-slate-900 flex items-center gap-1.5">
                          <span className="h-1.5 w-1.5 rounded-full bg-slate-400" />
                          <span>3. Temporary Banking Network Lag</span>
                        </div>
                        <p className="text-[11px] text-slate-600 leading-normal">
                          Intermittent connectivity between the sponsor bank and clearing networks can occasionally delay transaction completion.
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
                        <li>Check your linked account balance in your bank app.</li>
                        <li>Check if your bank sent an SMS about the transaction.</li>
                        <li>Decide whether you want to retry now or reschedule.</li>
                      </ul>
                    </div>

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
                        Two neutral paths to handle this instalment. Choose what fits your current situation:
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
                        <span className="rounded bg-blue-100 text-blue-800 text-[10px] font-bold px-1.5 py-0.5">
                          Try Now
                        </span>
                      </div>
                      <p className="text-[11px] text-slate-600 leading-normal">
                        Submit a payment request now using UPI or net banking.
                      </p>
                      <div className="text-[10px] text-slate-500 italic pt-0.5">
                        *Note: Submitting a retry does not guarantee immediate NAV eligibility or bank processing speed.
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
                          Option B: Reschedule to a Future Date
                        </span>
                        <span className="rounded bg-purple-100 text-purple-800 text-[10px] font-bold px-1.5 py-0.5">
                          Shift Date
                        </span>
                      </div>
                      <p className="text-[11px] text-slate-600 leading-normal">
                        Select a future date (e.g. following your salary credit) without cancelling your ongoing mandate.
                      </p>

                      {selectedOption === 'reschedule' && (
                        <div className="pt-2 border-t border-purple-200 space-y-1.5">
                          <label className="text-[10px] font-bold text-slate-700 block">Select Debit Day for this Month:</label>
                          <div className="grid grid-cols-3 gap-1.5">
                            {[8, 10, 15].map((day) => (
                              <button
                                key={day}
                                type="button"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  setRescheduleDate(day);
                                }}
                                className={`py-1 text-center rounded text-xs font-semibold border ${
                                  rescheduleDate === day
                                    ? 'bg-purple-700 text-white border-purple-700'
                                    : 'bg-white text-slate-700 border-slate-300 hover:bg-slate-50'
                                }`}
                              >
                                {day}th of month
                              </button>
                            ))}
                          </div>
                        </div>
                      )}

                      <div className="text-[10px] text-slate-500 italic pt-0.5">
                        *Note: Shifting the debit date does not affect your investment value or future market price.
                      </div>
                    </div>

                    <button
                      onClick={() => handleSubmitRecoveryChoice(selectedOption)}
                      className="w-full rounded-xl bg-blue-700 py-3 text-xs font-bold text-white hover:bg-blue-800 transition shadow-sm mt-2"
                    >
                      Confirm {selectedOption === 'retry' ? 'Simulated Instant Retry' : `Rescheduling to ${rescheduleDate}th`}
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
                        Verifying transaction status with simulated bank clearing network:
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
                          {confirmationStatus === 'payment_successful' && (
                            <CheckCircle2 size={18} className="text-emerald-600" />
                          )}

                          <span className="font-bold text-xs text-slate-900">
                            {confirmationStatus === 'retry_requested' && 'Retry Request Recorded'}
                            {confirmationStatus === 'payment_pending' && 'Payment Verification Pending'}
                            {confirmationStatus === 'payment_successful' && 'Payment Verified (Simulated)'}
                          </span>
                        </div>

                        {/* Status Description */}
                        <div className="text-xs text-slate-600 leading-relaxed bg-white p-3 rounded-lg border border-slate-200">
                          {confirmationStatus === 'retry_requested' && (
                            <div>
                              Your retry request has been submitted to your bank. Verification is in progress. <strong>This does not mean funds have cleared yet.</strong>
                            </div>
                          )}
                          {confirmationStatus === 'payment_pending' && (
                            <div>
                              We are awaiting an official callback confirmation from your bank clearing system. Most banks respond within 5–15 minutes.
                            </div>
                          )}
                          {confirmationStatus === 'payment_successful' && (
                            <div className="text-emerald-900">
                              Simulated bank clearance confirmed. Your instalment of ₹2,000 has been marked for mutual fund allocation.
                            </div>
                          )}
                        </div>

                        {/* Testing Controls: Allows researcher to test user tolerance for pending states */}
                        <div className="pt-2 border-t border-slate-200 space-y-2">
                          <div className="text-[10px] uppercase font-bold text-slate-400">Researcher Testing Controls:</div>
                          <div className="grid grid-cols-2 gap-2 text-xs">
                            <button
                              onClick={handleSimulateStatusCheck}
                              disabled={isVerifying}
                              className="py-1.5 px-2 rounded border border-slate-300 bg-white text-slate-700 hover:bg-slate-50 text-[11px] font-medium"
                            >
                              {isVerifying ? 'Checking...' : 'Check Status (Pending)'}
                            </button>
                            <button
                              onClick={handleSimulateBankSuccess}
                              disabled={isVerifying}
                              className="py-1.5 px-2 rounded border border-emerald-300 bg-emerald-50 text-emerald-800 hover:bg-emerald-100 text-[11px] font-medium"
                            >
                              Simulate Success
                            </button>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* RESCHEDULE FLOW CONFIRMATION */}
                    {selectedOption === 'reschedule' && (
                      <div className="rounded-xl border border-purple-200 bg-purple-50/60 p-4 space-y-3">
                        <div className="flex items-center gap-2">
                          <CheckCircle2 size={18} className="text-purple-700" />
                          <span className="font-bold text-xs text-purple-900">Date Reschedule Recorded</span>
                        </div>
                        <div className="text-xs text-slate-700 leading-relaxed bg-white p-3 rounded-lg border border-purple-200">
                          Your debit date for this instalment has been moved to the <strong>{rescheduleDate}th of this month</strong>. Your active AutoPay mandate remains untouched.
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
                    <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-4 text-center space-y-1">
                      <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-emerald-100 text-emerald-700 mb-1">
                        <Award size={20} />
                      </div>
                      <h3 className="text-sm font-bold text-slate-900">Next Steps Summary</h3>
                      <p className="text-[11px] text-emerald-800 font-medium">
                        {selectedOption === 'retry'
                          ? 'Instant Retry Request Processed'
                          : `Instalment Scheduled for ${rescheduleDate}th`}
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
                            {selectedOption === 'retry' ? 'Simulated Instant Retry' : `Rescheduled to ${rescheduleDate}th`}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span>Next Regular Debit:</span>
                          <span className="font-semibold text-slate-800">05 Dec 2026</span>
                        </div>
                      </div>
                    </div>

                    <div className="rounded-lg bg-slate-50 border border-slate-200 p-3 text-[11px] text-slate-600 leading-relaxed">
                      <strong>Future Instalments: </strong> Your recurring AutoPay mandate remains active. You can pause, modify, or check your mandate in your SIP settings anytime.
                    </div>

                    <button
                      onClick={handleResetPrototype}
                      className="w-full rounded-xl bg-slate-900 py-3 text-xs font-bold text-white hover:bg-slate-800 transition"
                    >
                      Return to SIP Overview
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Right: Evaluator Quick Notes & Observations */}
          <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm space-y-4">
            <div className="border-b border-slate-100 pb-3 flex items-center justify-between">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-blue-700">Active Test Context</span>
                <h3 className="font-bold text-slate-900 text-sm mt-0.5">PM Observer Checklist</h3>
              </div>
              <span className="rounded bg-slate-100 px-2 py-0.5 text-[10px] font-mono text-slate-600">
                {participantId}
              </span>
            </div>

            <div className="space-y-3 text-xs leading-relaxed text-slate-600">
              <div className="rounded-lg border border-slate-100 bg-slate-50 p-2.5">
                <div className="font-bold text-slate-900 text-[11px]">1. Absence of Invented Bank Codes:</div>
                <p className="text-[11px] text-slate-600 mt-0.5">
                  Does the user appreciate honest uncertainty over a fake &ldquo;Code 03&rdquo; label? Check if they seek external confirmation.
                </p>
              </div>

              <div className="rounded-lg border border-slate-100 bg-slate-50 p-2.5">
                <div className="font-bold text-slate-900 text-[11px]">2. Pending State Comfort:</div>
                <p className="text-[11px] text-slate-600 mt-0.5">
                  When Step 4 shows &ldquo;Retry Requested / Pending&rdquo;, does the user understand funds are not instantly confirmed?
                </p>
              </div>

              <div className="rounded-lg border border-slate-100 bg-slate-50 p-2.5">
                <div className="font-bold text-slate-900 text-[11px]">3. Neutral Framing:</div>
                <p className="text-[11px] text-slate-600 mt-0.5">
                  Verify that neither retry nor rescheduling was perceived as an artificial urgency tactic.
                </p>
              </div>
            </div>

            <button
              onClick={() => setActiveTab('evaluator')}
              className="w-full rounded-lg border border-blue-200 bg-blue-50 py-2 text-xs font-bold text-blue-800 hover:bg-blue-100 transition"
            >
              Open Full Researcher Evaluator View →
            </button>
          </div>
        </div>
      )}

      {/* TAB 2: RESEARCHER USABILITY EVALUATION VIEW */}
      {activeTab === 'evaluator' && (
        <div className="space-y-6">
          <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm space-y-4">
            <div className="border-b border-slate-100 pb-3 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-blue-700">Usability Testing Protocol</span>
                <h3 className="font-bold text-base text-slate-900 mt-0.5">Researcher Evaluation Console</h3>
                <p className="text-xs text-slate-500">Record observations, confusion points, and completion metrics during 1-on-1 test sessions.</p>
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

                  {/* Evaluator Observation Capture Form */}
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

                    {/* Observed Confusion Flags */}
                    <div>
                      <label className="font-bold text-slate-900 block mb-1.5">Observed Confusion Points:</label>
                      <div className="space-y-1.5">
                        {[
                          'Looked for an official bank failure code',
                          'Assumed retry would be instantly successful',
                          'Unsure if bank charges an ECS penalty',
                          'Hesitated between retry vs rescheduling',
                          'Unclear what happens to future monthly instalments'
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
                        placeholder="e.g. Participant stated: 'I was relieved there is no fine, but I wonder if my bank will charge an ECS fee...'"
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
                      <div className="font-bold text-blue-900">Screen 1: Zero-Penalty Reassurance</div>
                      <div className="text-[11px] text-slate-500">Explicit &ldquo;₹0 INDMoney Fee &amp; Zero Credit Impact&rdquo; banner</div>
                    </td>
                    <td className="py-3 px-3">
                      <span className="rounded bg-rose-100 text-rose-800 px-1.5 py-0.5 text-[10px] font-bold">PAIN-03</span>
                      <div className="text-[11px] font-medium text-slate-700 mt-0.5">Bank Bounce Fines &amp; Penalties</div>
                    </td>
                    <td className="py-3 px-3 font-mono text-[11px]">
                      <span className="font-semibold text-blue-700">IND-08924</span>, <span className="font-semibold text-blue-700">IND-51705</span>, <span className="font-semibold text-blue-700">IND-34882</span>, <span className="text-slate-500">EVD-002</span>
                    </td>
                    <td className="py-3 px-3 text-[11px] leading-relaxed">
                      De-catastrophizes user fear of punitive bank charges (₹295–₹590), preventing emotional panic and immediate app uninstallation.
                    </td>
                  </tr>

                  <tr className="hover:bg-slate-50/50">
                    <td className="py-3 px-3 font-medium text-slate-900">
                      <div className="font-bold text-blue-900">Screen 2: Honest Failure Possibilities</div>
                      <div className="text-[11px] text-slate-500">Illustrative possibilities without invented bank codes</div>
                    </td>
                    <td className="py-3 px-3">
                      <span className="rounded bg-rose-100 text-rose-800 px-1.5 py-0.5 text-[10px] font-bold">PAIN-02</span>
                      <div className="text-[11px] font-medium text-slate-700 mt-0.5">Silent Mandate Failures</div>
                    </td>
                    <td className="py-3 px-3 font-mono text-[11px]">
                      <span className="font-semibold text-blue-700">IND-25733</span>, <span className="font-semibold text-blue-700">IND-27496</span>, <span className="font-semibold text-blue-700">IND-31462</span>
                    </td>
                    <td className="py-3 px-3 text-[11px] leading-relaxed">
                      Replaces opaque silence with clear, honest potential explanations and actionable checklist items for the user.
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
                      <div className="text-[11px] text-slate-500">Shift permanent debit date without mandate cancellation</div>
                    </td>
                    <td className="py-3 px-3">
                      <span className="rounded bg-rose-100 text-rose-800 px-1.5 py-0.5 text-[10px] font-bold">PAIN-06</span>
                      <div className="text-[11px] font-medium text-slate-700 mt-0.5">Mandate Modification Blocks</div>
                    </td>
                    <td className="py-3 px-3 font-mono text-[11px]">
                      <span className="font-semibold text-blue-700">IND-15499</span>, <span className="font-semibold text-blue-700">IND-46721</span>, <span className="text-slate-500">EVD-003</span>
                    </td>
                    <td className="py-3 px-3 text-[11px] leading-relaxed">
                      Solves salary timing mismatches without forcing full mandate deletion and a 10-day NACH re-approval period.
                    </td>
                  </tr>

                  <tr className="hover:bg-slate-50/50">
                    <td className="py-3 px-3 font-medium text-slate-900">
                      <div className="font-bold text-blue-900">Screen 4: Transparent Pending States</div>
                      <div className="text-[11px] text-slate-500">Explicit &ldquo;Requested vs Pending vs Successful&rdquo; breakdown</div>
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
                      <div className="font-bold text-blue-900">Screen 5: Mandate Lifecycle Clarity</div>
                      <div className="text-[11px] text-slate-500">Explains ongoing mandate state and next month schedule</div>
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
