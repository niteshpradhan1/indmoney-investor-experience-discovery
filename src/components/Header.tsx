import React from 'react';
import { ShieldCheck, Printer, Sparkles } from 'lucide-react';

interface HeaderProps {
  onPrint: () => void;
  activeSectionTitle: string;
}

export const Header: React.FC<HeaderProps> = ({ onPrint, activeSectionTitle }) => {
  return (
    <header className="sticky top-0 z-30 border-b border-slate-200 bg-white/95 backdrop-blur shadow-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3.5">
        <div className="flex items-center gap-4">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-700 text-white shadow-sm font-bold text-lg">
            IND
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-semibold uppercase tracking-[.18em] text-blue-700">
                INDMoney · Product Research
              </span>
            </div>
            <h1 className="mt-0.5 text-base font-semibold text-slate-900 flex items-center gap-2">
              Investor Experience Discovery
              <span className="text-slate-400 font-normal">/</span>
              <span className="text-blue-800 font-medium text-sm">{activeSectionTitle}</span>
            </h1>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="hidden sm:flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-800">
            <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
            Human-Reviewed Workspace
          </div>

          <div className="hidden md:flex items-center gap-1.5 rounded-lg border border-slate-200 bg-slate-50 px-2.5 py-1 text-xs text-slate-600">
            <Sparkles size={13} className="text-blue-600" />
            <span>AI: Advisory Only</span>
          </div>

          <button
            onClick={onPrint}
            className="flex items-center gap-1.5 rounded-lg border border-slate-300 bg-white px-3 py-1.5 text-xs font-medium text-slate-700 hover:bg-slate-50 transition shadow-sm"
            title="Generate printable view or PDF report"
          >
            <Printer size={14} className="text-slate-600" />
            <span>Export Report / PDF</span>
          </button>
        </div>
      </div>
    </header>
  );
};
