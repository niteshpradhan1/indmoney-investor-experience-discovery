'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowLeft, ExternalLink, ShieldAlert, Sparkles, Layers, CheckCircle2 } from 'lucide-react';
import { RecoveryPrototype } from '@/components/RecoveryPrototype';

export default function PrototypePage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans antialiased">
      {/* Top Banner: Deliverable & Validation Boundary */}
      <div className="bg-slate-900 text-white px-4 py-2 text-xs border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="rounded bg-indigo-500/20 text-indigo-300 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider border border-indigo-500/30">
              NextLeap PM Deliverable #2
            </span>
            <span className="font-semibold text-slate-200">
              Deployed AI-Native MVP: SIP Recovery Assistant
            </span>
          </div>

          <div className="flex items-center gap-3 text-[11px]">
            <span className="rounded bg-rose-500/20 text-rose-300 px-2 py-0.5 text-[10px] font-bold border border-rose-500/30">
              H1: NOT VALIDATED
            </span>
            <span className="text-slate-400">Target Submission: 9 November 2026</span>
            <Link
              href="/"
              className="text-indigo-300 hover:text-white flex items-center gap-1 font-semibold transition"
            >
              <ArrowLeft size={13} />
              <span>Back to AI Discovery Engine</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Page Header */}
      <header className="bg-white border-b border-slate-200 px-4 py-5 shadow-xs">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs text-slate-500 mb-1">
              <Link href="/" className="hover:text-blue-700 transition">
                INDMoney Discovery Engine
              </Link>
              <span>/</span>
              <span className="text-slate-800 font-semibold">SIP Recovery Assistant MVP</span>
            </div>
            <h1 className="text-2xl font-black text-slate-900 tracking-tight flex items-center gap-2.5">
              <span>SIP Recovery Assistant</span>
              <span className="rounded-full bg-blue-100 text-blue-800 text-xs font-bold px-2.5 py-0.5 border border-blue-200">
                Interactive MVP
              </span>
            </h1>
            <p className="text-xs text-slate-600 mt-1 max-w-3xl leading-relaxed">
              Human-centred prototype exploring how first-time SIP investors understand and recover from incomplete monthly instalment debits. Features a verified plain-language AI explainer assistant grounded in SEBI/NPCI clearing guidelines.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2 self-start md:self-auto">
            <Link
              href="/api/health"
              target="_blank"
              className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-semibold text-slate-700 hover:bg-slate-100 transition flex items-center gap-1.5 shadow-2xs"
            >
              <span>Production Health API</span>
              <ExternalLink size={12} />
            </Link>
            <Link
              href="/?section=h1_workspace"
              className="rounded-lg bg-blue-700 px-3.5 py-1.5 text-xs font-bold text-white hover:bg-blue-800 transition shadow-2xs flex items-center gap-1.5"
            >
              <Layers size={13} />
              <span>View H1 Research Foundation</span>
            </Link>
          </div>
        </div>
      </header>

      {/* Main Prototype Viewport Container */}
      <main className="max-w-7xl mx-auto px-4 py-6">
        <RecoveryPrototype />
      </main>

      {/* Scientific Validation Footer Note */}
      <footer className="border-t border-slate-200 bg-white py-6 px-4 text-xs text-slate-500">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          <div className="space-y-1">
            <p className="font-semibold text-slate-700">
              INDMoney First-Time SIP Investor Retention Discovery • NextLeap PM Graduation Project
            </p>
            <p className="text-[11px] text-slate-500">
              Scientific Boundary: Hypothesis H1 (Bank Mandate Debit Failure Recovery) remains strictly <span className="font-bold text-rose-700">NOT VALIDATED</span>. This prototype tests usability and qualitative comprehension; causal retention impact has not been measured.
            </p>
          </div>
          <div className="text-[11px] text-slate-400">
            Deployed on Vercel Edge / Serverless • Next.js 15
          </div>
        </div>
      </footer>
    </div>
  );
}
