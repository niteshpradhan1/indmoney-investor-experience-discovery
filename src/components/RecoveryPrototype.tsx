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
  Award
} from 'lucide-react';

type PrototypeScreen = 'dashboard' | 'failure' | 'recovery_options' | 'simulation' | 'health_tracker';

export const RecoveryPrototype: React.FC = () => {
  const [currentScreen, setCurrentScreen] = useState<PrototypeScreen>('dashboard');
  const [selectedRecoveryOption, setSelectedRecoveryOption] = useState<'upi' | 'reschedule' | 'mandate'>('upi');
  const [simulationStep, setSimulationStep] = useState<number>(1);
  const [isSimulating, setIsSimulating] = useState<boolean>(false);
  const [isRecovered, setIsRecovered] = useState<boolean>(false);

  // Trigger simulated mandate failure
  const handleTriggerFailure = () => {
    setIsRecovered(false);
    setCurrentScreen('failure');
  };

  // Run the multi-step simulated recovery
  const handleStartSimulation = (option: 'upi' | 'reschedule' | 'mandate') => {
    setSelectedRecoveryOption(option);
    setCurrentScreen('simulation');
    setIsSimulating(true);
    setSimulationStep(1);

    setTimeout(() => setSimulationStep(2), 1200);
    setTimeout(() => setSimulationStep(3), 2400);
    setTimeout(() => {
      setSimulationStep(4);
      setIsSimulating(false);
      setIsRecovered(true);
    }, 3600);
  };

  const handleReset = () => {
    setCurrentScreen('dashboard');
    setIsRecovered(false);
    setSimulationStep(1);
    setIsSimulating(false);
  };

  return (
    <div className="space-y-6">
      {/* Top Banner */}
      <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-end border-b border-slate-200 pb-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-blue-700">Interactive Prototype</span>
            <span className="rounded-full bg-blue-100 text-blue-800 px-2 py-0.5 text-[10px] font-bold">
              Hypothesis H1 Solution
            </span>
          </div>
          <h2 className="mt-1 text-2xl font-bold tracking-tight text-slate-900">
            SIP Recovery Assistant · Mobile Prototype
          </h2>
          <p className="mt-1 text-sm text-slate-600">
            A stateful 5-screen interactive concept simulating mandate failure detection, transparent explanation, and instant self-service recovery.
          </p>
        </div>

        <button
          onClick={handleReset}
          className="flex items-center gap-1.5 rounded-lg border border-slate-300 bg-white px-3 py-1.5 text-xs font-medium text-slate-700 hover:bg-slate-50 transition shadow-sm"
        >
          <RotateCcw size={13} />
          <span>Reset Prototype</span>
        </button>
      </div>

      {/* Demo Data Disclaimer */}
      <div className="rounded-xl border border-amber-200 bg-amber-50/50 p-3.5 text-xs text-amber-900 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Info size={15} className="text-amber-700 shrink-0" />
          <span>
            <strong>Demo Data Notice: </strong> All account balances, bank return codes, and UPI transactions below are illustrative simulations. No actual banking credentials or payment gateways are connected.
          </span>
        </div>
        <span className="rounded bg-amber-200/70 px-2 py-0.5 text-[10px] font-bold text-amber-900">
          Simulated Flow
        </span>
      </div>

      {/* Prototype Workspace Grid: Screen Selector + Mobile Frame + PM Explanatory Notes */}
      <div className="grid gap-6 lg:grid-cols-[1fr_390px_1fr] items-start">
        {/* Left: Screen Navigator & PM Storyboard */}
        <div className="space-y-4">
          <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
              5-Screen Interactive Storyboard
            </h3>

            <div className="space-y-2 text-xs">
              <button
                onClick={() => setCurrentScreen('dashboard')}
                className={`w-full flex items-center justify-between rounded-lg p-3 text-left transition border ${
                  currentScreen === 'dashboard'
                    ? 'border-blue-600 bg-blue-50 text-blue-900 font-semibold'
                    : 'border-slate-100 hover:bg-slate-50 text-slate-700'
                }`}
              >
                <div>
                  <div className="font-bold">Screen 1: SIP Portfolio Dashboard</div>
                  <div className="text-[11px] text-slate-500 mt-0.5">Active portfolio, instalment schedule, test trigger</div>
                </div>
                <ChevronRight size={14} className="text-slate-400" />
              </button>

              <button
                onClick={() => setCurrentScreen('failure')}
                className={`w-full flex items-center justify-between rounded-lg p-3 text-left transition border ${
                  currentScreen === 'failure'
                    ? 'border-rose-600 bg-rose-50 text-rose-900 font-semibold'
                    : 'border-slate-100 hover:bg-slate-50 text-slate-700'
                }`}
              >
                <div>
                  <div className="font-bold text-rose-700">Screen 2: Payment Failure Alert</div>
                  <div className="text-[11px] text-slate-500 mt-0.5">Bank return SMS &amp; transparent ₹0 penalty reassurance</div>
                </div>
                <ChevronRight size={14} className="text-slate-400" />
              </button>

              <button
                onClick={() => setCurrentScreen('recovery_options')}
                className={`w-full flex items-center justify-between rounded-lg p-3 text-left transition border ${
                  currentScreen === 'recovery_options'
                    ? 'border-blue-600 bg-blue-50 text-blue-900 font-semibold'
                    : 'border-slate-100 hover:bg-slate-50 text-slate-700'
                }`}
              >
                <div>
                  <div className="font-bold">Screen 3: SIP Recovery Assistant</div>
                  <div className="text-[11px] text-slate-500 mt-0.5">3 actionable paths: UPI retry / Reschedule / Re-mandate</div>
                </div>
                <ChevronRight size={14} className="text-slate-400" />
              </button>

              <button
                onClick={() => setCurrentScreen('simulation')}
                className={`w-full flex items-center justify-between rounded-lg p-3 text-left transition border ${
                  currentScreen === 'simulation'
                    ? 'border-blue-600 bg-blue-50 text-blue-900 font-semibold'
                    : 'border-slate-100 hover:bg-slate-50 text-slate-700'
                }`}
              >
                <div>
                  <div className="font-bold">Screen 4: 1-Click Simulated Resolution</div>
                  <div className="text-[11px] text-slate-500 mt-0.5">Automated UPI verification &amp; order re-submission</div>
                </div>
                <ChevronRight size={14} className="text-slate-400" />
              </button>

              <button
                onClick={() => setCurrentScreen('health_tracker')}
                className={`w-full flex items-center justify-between rounded-lg p-3 text-left transition border ${
                  currentScreen === 'health_tracker'
                    ? 'border-emerald-600 bg-emerald-50 text-emerald-900 font-semibold'
                    : 'border-slate-100 hover:bg-slate-50 text-slate-700'
                }`}
              >
                <div>
                  <div className="font-bold text-emerald-700">Screen 5: SIP Health Tracker</div>
                  <div className="text-[11px] text-slate-500 mt-0.5">Active compounding streak, recovery audit, next debit</div>
                </div>
                <ChevronRight size={14} className="text-slate-400" />
              </button>
            </div>
          </div>

          {/* Quick Simulation Trigger */}
          <div className="rounded-xl border border-rose-200 bg-rose-50/30 p-4">
            <div className="text-xs font-bold uppercase tracking-wider text-rose-800 flex items-center gap-1.5">
              <AlertTriangle size={14} />
              <span>Simulate Live Event</span>
            </div>
            <p className="mt-1 text-xs text-slate-600">
              Test how the prototype handles a sudden State Bank of India NACH mandate bounce on an active SIP.
            </p>
            <button
              onClick={handleTriggerFailure}
              className="mt-3 w-full rounded-lg bg-rose-700 px-3 py-2 text-xs font-semibold text-white hover:bg-rose-800 transition shadow-sm"
            >
              Simulate Mandate Failure on SIP #1
            </button>
          </div>
        </div>

        {/* Center: Mobile Device Frame */}
        <div className="flex justify-center">
          <div className="w-[360px] rounded-[36px] border-4 border-slate-900 bg-slate-900 p-2 shadow-2xl">
            {/* Screen Inner */}
            <div className="relative min-h-[640px] rounded-[28px] bg-white text-slate-900 overflow-hidden flex flex-col font-sans">
              {/* Mobile Top Status Bar */}
              <div className="flex items-center justify-between px-5 pt-3 pb-2 text-[11px] font-semibold text-slate-600 bg-white border-b border-slate-100">
                <span>9:41</span>
                <div className="flex items-center gap-1.5">
                  <span className="h-2 w-2 rounded-full bg-emerald-500" />
                  <span className="text-[10px]">INDmoney</span>
                </div>
              </div>

              {/* SCREEN 1: DASHBOARD */}
              {currentScreen === 'dashboard' && (
                <div className="flex-1 p-4 space-y-4 overflow-y-auto">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-[11px] text-slate-400 uppercase font-semibold">Total SIP Investment</div>
                      <div className="text-2xl font-bold text-slate-900">₹36,000</div>
                    </div>
                    <span className="rounded-full bg-emerald-100 px-2.5 py-0.5 text-[10px] font-bold text-emerald-800">
                      Active
                    </span>
                  </div>

                  {/* SIP Card */}
                  <div className="rounded-xl border border-slate-200 bg-slate-50/70 p-3.5 space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="font-bold text-xs text-slate-900">UTI Nifty 50 Index Fund</div>
                      <span className="text-xs font-bold text-blue-900">₹2,000 / mo</span>
                    </div>

                    <div className="grid grid-cols-2 gap-2 text-[11px] text-slate-500">
                      <div>Next Debit: <span className="font-semibold text-slate-800">10 Dec 2026</span></div>
                      <div>Bank: <span className="font-semibold text-slate-800">SBI (Autopay)</span></div>
                    </div>

                    <div className="pt-2 border-t border-slate-200 flex items-center justify-between text-[11px]">
                      <span className="text-emerald-700 font-semibold flex items-center gap-1">
                        <CheckCircle2 size={12} />
                        {isRecovered ? '6 of 6 Paid' : '5 of 5 Paid'}
                      </span>
                      <span className="text-slate-400">Streak: {isRecovered ? '6 Mos' : '5 Mos'}</span>
                    </div>
                  </div>

                  {/* Second SIP Card */}
                  <div className="rounded-xl border border-slate-200 bg-slate-50/70 p-3.5 space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="font-bold text-xs text-slate-900">Parag Parikh Flexi Cap Fund</div>
                      <span className="text-xs font-bold text-blue-900">₹1,000 / mo</span>
                    </div>
                    <div className="text-[11px] text-slate-500">Next Debit: 15 Dec 2026 • HDFC Bank</div>
                  </div>

                  {/* Trigger Simulator CTA inside mobile */}
                  <div className="pt-4">
                    <button
                      onClick={handleTriggerFailure}
                      className="w-full rounded-xl border-2 border-dashed border-rose-300 bg-rose-50 p-3 text-xs font-bold text-rose-800 hover:bg-rose-100 transition"
                    >
                      ⚡ Test: Simulate Mandate Debit Bounce
                    </button>
                  </div>
                </div>
              )}

              {/* SCREEN 2: PAYMENT FAILURE ALERT */}
              {currentScreen === 'failure' && (
                <div className="flex-1 p-4 space-y-4 overflow-y-auto">
                  <div className="rounded-xl border border-rose-300 bg-rose-50 p-4 space-y-3">
                    <div className="flex items-center gap-2 text-rose-800 font-bold text-xs uppercase">
                      <AlertTriangle size={16} />
                      <span>Instalment Failed</span>
                    </div>

                    <div>
                      <div className="text-base font-extrabold text-slate-900">₹2,000 SIP Debit Missed</div>
                      <div className="text-xs text-slate-600 mt-0.5">UTI Nifty 50 Index Fund • 05 Nov 2026</div>
                    </div>

                    <div className="rounded-lg bg-white p-2.5 text-xs text-slate-700 border border-rose-200 space-y-1">
                      <div><strong className="text-slate-900">Bank Code: </strong>Return Reason 03 (Insufficient Balance)</div>
                      <div className="text-[11px] text-slate-500">Reported by: State Bank of India NACH Clearing</div>
                    </div>

                    {/* Zero-Penalty Reassurance */}
                    <div className="rounded-lg bg-emerald-50 border border-emerald-200 p-2.5 text-[11px] text-emerald-900 leading-4">
                      <div className="font-bold flex items-center gap-1 text-emerald-950">
                        <ShieldCheck size={12} className="text-emerald-700" />
                        <span>INDmoney Reassurance</span>
                      </div>
                      INDmoney charges ₹0 penalty. Your existing portfolio and credit score are 100% safe.
                    </div>
                  </div>

                  <button
                    onClick={() => setCurrentScreen('recovery_options')}
                    className="w-full rounded-xl bg-blue-700 py-3 text-xs font-bold text-white hover:bg-blue-800 transition shadow-sm flex items-center justify-center gap-1.5"
                  >
                    <span>Open SIP Recovery Assistant</span>
                    <ArrowRight size={14} />
                  </button>

                  <button
                    onClick={() => setCurrentScreen('dashboard')}
                    className="w-full text-center text-xs text-slate-500 hover:text-slate-800 py-1"
                  >
                    Dismiss for now
                  </button>
                </div>
              )}

              {/* SCREEN 3: RECOVERY OPTIONS */}
              {currentScreen === 'recovery_options' && (
                <div className="flex-1 p-4 space-y-3.5 overflow-y-auto">
                  <div>
                    <span className="text-[10px] font-bold text-blue-700 uppercase">Step 1 of 2</span>
                    <h3 className="text-sm font-bold text-slate-900">Choose Recovery Method</h3>
                    <p className="text-[11px] text-slate-500">Pick the best way to keep your compounding on track:</p>
                  </div>

                  {/* Option 1: Instant UPI */}
                  <div
                    onClick={() => setSelectedRecoveryOption('upi')}
                    className={`cursor-pointer rounded-xl border p-3 transition space-y-1.5 ${
                      selectedRecoveryOption === 'upi'
                        ? 'border-blue-600 bg-blue-50/70 shadow-sm'
                        : 'border-slate-200 hover:border-slate-300'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-slate-900 flex items-center gap-1.5">
                        <Zap size={14} className="text-amber-500" />
                        Pay via UPI Now
                      </span>
                      <span className="rounded bg-emerald-100 text-emerald-800 text-[10px] font-bold px-1.5 py-0.5">
                        Fastest
                      </span>
                    </div>
                    <p className="text-[11px] text-slate-600 leading-4">
                      Pay ₹2,000 via Google Pay, PhonePe or Paytm before 3:00 PM for today&apos;s NAV.
                    </p>
                  </div>

                  {/* Option 2: Reschedule Debit Date */}
                  <div
                    onClick={() => setSelectedRecoveryOption('reschedule')}
                    className={`cursor-pointer rounded-xl border p-3 transition space-y-1.5 ${
                      selectedRecoveryOption === 'reschedule'
                        ? 'border-blue-600 bg-blue-50/70 shadow-sm'
                        : 'border-slate-200 hover:border-slate-300'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-slate-900 flex items-center gap-1.5">
                        <Calendar size={14} className="text-blue-600" />
                        Reschedule Debit Date
                      </span>
                    </div>
                    <p className="text-[11px] text-slate-600 leading-4">
                      Shift debit to the 8th or 10th to match your salary credit without cancelling your mandate.
                    </p>
                  </div>

                  {/* Option 3: Update Bank Mandate */}
                  <div
                    onClick={() => setSelectedRecoveryOption('mandate')}
                    className={`cursor-pointer rounded-xl border p-3 transition space-y-1.5 ${
                      selectedRecoveryOption === 'mandate'
                        ? 'border-blue-600 bg-blue-50/70 shadow-sm'
                        : 'border-slate-200 hover:border-slate-300'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-slate-900 flex items-center gap-1.5">
                        <CreditCard size={14} className="text-purple-600" />
                        Update Bank Mandate
                      </span>
                    </div>
                    <p className="text-[11px] text-slate-600 leading-4">
                      Switch this SIP to your HDFC or ICICI bank account for higher autopay reliability.
                    </p>
                  </div>

                  <button
                    onClick={() => handleStartSimulation(selectedRecoveryOption)}
                    className="w-full rounded-xl bg-blue-700 py-3 text-xs font-bold text-white hover:bg-blue-800 transition shadow-sm mt-3"
                  >
                    Proceed with {selectedRecoveryOption === 'upi' ? 'UPI Payment' : selectedRecoveryOption === 'reschedule' ? 'Rescheduling' : 'Bank Update'}
                  </button>
                </div>
              )}

              {/* SCREEN 4: SIMULATION PROGRESS */}
              {currentScreen === 'simulation' && (
                <div className="flex-1 p-5 flex flex-col justify-between overflow-y-auto">
                  <div className="space-y-4">
                    <div className="text-center space-y-1">
                      <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-blue-50 text-blue-700 mb-1">
                        {isSimulating ? (
                          <RefreshCw size={24} className="animate-spin" />
                        ) : (
                          <CheckCircle2 size={28} className="text-emerald-600" />
                        )}
                      </div>
                      <h3 className="text-base font-bold text-slate-900">
                        {isSimulating ? 'Processing Recovery...' : 'SIP Instalment Recovered!'}
                      </h3>
                      <p className="text-xs text-slate-500">
                        {isSimulating ? 'Simulating automated clearing transaction' : 'Allotment request submitted to exchange'}
                      </p>
                    </div>

                    {/* Stepper */}
                    <div className="rounded-xl border border-slate-200 bg-slate-50 p-3.5 space-y-2.5 text-xs">
                      <div className={`flex items-center gap-2 ${simulationStep >= 1 ? 'text-slate-900 font-semibold' : 'text-slate-400'}`}>
                        <span className={`h-4 w-4 rounded-full flex items-center justify-center text-[10px] text-white ${simulationStep >= 1 ? 'bg-blue-700' : 'bg-slate-300'}`}>1</span>
                        <span>Verifying {selectedRecoveryOption.toUpperCase()} Recovery Request</span>
                      </div>
                      <div className={`flex items-center gap-2 ${simulationStep >= 2 ? 'text-slate-900 font-semibold' : 'text-slate-400'}`}>
                        <span className={`h-4 w-4 rounded-full flex items-center justify-center text-[10px] text-white ${simulationStep >= 2 ? 'bg-blue-700' : 'bg-slate-300'}`}>2</span>
                        <span>Confirming zero penalty &amp; NAV cut-off</span>
                      </div>
                      <div className={`flex items-center gap-2 ${simulationStep >= 3 ? 'text-slate-900 font-semibold' : 'text-slate-400'}`}>
                        <span className={`h-4 w-4 rounded-full flex items-center justify-center text-[10px] text-white ${simulationStep >= 3 ? 'bg-blue-700' : 'bg-slate-300'}`}>3</span>
                        <span>Submitting order to BSE StAR MF</span>
                      </div>
                      <div className={`flex items-center gap-2 ${simulationStep >= 4 ? 'text-emerald-700 font-bold' : 'text-slate-400'}`}>
                        <span className={`h-4 w-4 rounded-full flex items-center justify-center text-[10px] text-white ${simulationStep >= 4 ? 'bg-emerald-600' : 'bg-slate-300'}`}>✓</span>
                        <span>Instalment Active &amp; Streak Preserved</span>
                      </div>
                    </div>
                  </div>

                  {!isSimulating && (
                    <button
                      onClick={() => setCurrentScreen('health_tracker')}
                      className="w-full rounded-xl bg-emerald-600 py-3 text-xs font-bold text-white hover:bg-emerald-700 transition shadow-sm"
                    >
                      View SIP Health Tracker
                    </button>
                  )}
                </div>
              )}

              {/* SCREEN 5: HEALTH TRACKER */}
              {currentScreen === 'health_tracker' && (
                <div className="flex-1 p-4 space-y-4 overflow-y-auto">
                  <div className="rounded-xl border border-emerald-200 bg-emerald-50/60 p-4 text-center space-y-1">
                    <div className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
                      <Award size={18} />
                    </div>
                    <div className="text-sm font-bold text-slate-900">SIP Health: Excellent</div>
                    <p className="text-[11px] text-emerald-800 font-medium">6-Month Compounding Streak Active</p>
                  </div>

                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <div className="rounded-lg border border-slate-200 p-2.5 bg-slate-50">
                      <div className="text-[10px] text-slate-400 uppercase font-semibold">Successful Debits</div>
                      <div className="text-base font-bold text-emerald-700 mt-0.5">6 of 6</div>
                    </div>
                    <div className="rounded-lg border border-slate-200 p-2.5 bg-slate-50">
                      <div className="text-[10px] text-slate-400 uppercase font-semibold">Pending Issues</div>
                      <div className="text-base font-bold text-slate-700 mt-0.5">0</div>
                    </div>
                  </div>

                  {/* Payment Timeline */}
                  <div className="rounded-xl border border-slate-200 p-3 space-y-2 text-xs">
                    <div className="font-bold text-slate-800 text-[11px] uppercase tracking-wide">Recent Activity</div>
                    <div className="space-y-1.5 text-[11px]">
                      <div className="flex items-center justify-between text-emerald-700">
                        <span>Today • UPI Recovery Successful</span>
                        <span className="font-bold">₹2,000</span>
                      </div>
                      <div className="flex items-center justify-between text-slate-600">
                        <span>05 Oct • Mandate Auto-Debit</span>
                        <span>₹2,000</span>
                      </div>
                      <div className="flex items-center justify-between text-slate-600">
                        <span>05 Sep • Mandate Auto-Debit</span>
                        <span>₹2,000</span>
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={() => setCurrentScreen('dashboard')}
                    className="w-full rounded-xl bg-slate-900 py-3 text-xs font-bold text-white hover:bg-slate-800 transition"
                  >
                    Back to Main SIP Dashboard
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Right: Product Management Design Rationale */}
        <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm space-y-4">
          <div className="border-b border-slate-100 pb-3">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-700">UX &amp; Behavioural Architecture</span>
            <h3 className="font-bold text-slate-900 text-sm mt-0.5">Key PM Design Decisions</h3>
          </div>

          <div className="space-y-3 text-xs leading-5 text-slate-600">
            <div>
              <div className="font-bold text-slate-900 flex items-center gap-1.5">
                <CheckCircle2 size={13} className="text-blue-700" />
                <span>1. De-catastrophising Language</span>
              </div>
              <p className="text-[11px] mt-0.5 text-slate-600">
                First-time users associate &ldquo;mandate bounce&rdquo; with legal notices and CIBIL ruin. The UI explicitly clarifies that failed mutual fund debits incur ₹0 platform fees and zero credit impact.
              </p>
            </div>

            <div>
              <div className="font-bold text-slate-900 flex items-center gap-1.5">
                <CheckCircle2 size={13} className="text-blue-700" />
                <span>2. Same-Day NAV Cut-off Visibility</span>
              </div>
              <p className="text-[11px] mt-0.5 text-slate-600">
                In India, equity fund orders submitted before 3:00 PM get same-day NAV. The recovery assistant exposes this deadline to create positive urgency without manufactured fear.
              </p>
            </div>

            <div>
              <div className="font-bold text-slate-900 flex items-center gap-1.5">
                <CheckCircle2 size={13} className="text-blue-700" />
                <span>3. Solving Root Cause via Reschedule</span>
              </div>
              <p className="text-[11px] mt-0.5 text-slate-600">
                For salary-mismatch investors (Rohan and Priya), one-time payment is insufficient. Option 2 shifts the future debit date permanently without triggering a 10-day NACH re-approval cycle.
              </p>
            </div>
          </div>

          <div className="rounded-lg bg-blue-50 border border-blue-100 p-3 text-xs text-blue-900">
            <strong>Target Metric Impact: </strong> Lifts 72-hour failed instalment recovery from 18% to &gt;65%, directly protecting the 12-month active SIP retention rate.
          </div>
        </div>
      </div>
    </div>
  );
};
