import React, { useState } from 'react';
import {
  HelpCircle,
  CheckCircle2,
  FileText,
  Download,
  Sparkles,
  Quote,
  ArrowRight,
  ShieldCheck,
  CheckSquare,
  MessageSquare,
  Tag,
  Copy,
  Check
} from 'lucide-react';
import { DISCOVERY_QA_DATA, DiscoveryQAItem } from '../data/discoveryQaData';

export const DiscoverySurvey: React.FC = () => {
  const [selectedQuestionId, setSelectedQuestionId] = useState<string>('Q1');
  const [selectedAnswers, setSelectedAnswers] = useState<Record<string, string>>({});
  const [notes, setNotes] = useState<Record<string, string>>({});
  const [copied, setCopied] = useState<boolean>(false);
  const [filterTop6Only, setFilterTop6Only] = useState<boolean>(true);

  const displayQuestions = filterTop6Only
    ? DISCOVERY_QA_DATA.filter((q) => q.is_top_6)
    : DISCOVERY_QA_DATA;

  const currentQ = DISCOVERY_QA_DATA.find((q) => q.id === selectedQuestionId) || DISCOVERY_QA_DATA[0];

  const handleSelectAnswer = (qId: string, option: string) => {
    setSelectedAnswers((prev) => ({ ...prev, [qId]: option }));
  };

  const handleNoteChange = (qId: string, val: string) => {
    setNotes((prev) => ({ ...prev, [qId]: val }));
  };

  const handleCopySummary = () => {
    let summaryText = '=== INDMoney Discovery Survey Responses ===\n\n';
    DISCOVERY_QA_DATA.forEach((q) => {
      const ans = selectedAnswers[q.id];
      if (ans) {
        summaryText += `${q.id}: ${q.question}\nSelected: ${ans}\n`;
        if (notes[q.id]) {
          summaryText += `Notes: ${notes[q.id]}\n`;
        }
        summaryText += '\n';
      }
    });

    navigator.clipboard.writeText(summaryText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const totalAnswered = Object.keys(selectedAnswers).length;

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-end border-b border-slate-200 pb-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-blue-700">Empirical Research</span>
            <span className="rounded-full bg-blue-100 text-blue-800 px-2 py-0.5 text-[10px] font-bold">
              10 Discovery Questions (Top 6 Options)
            </span>
          </div>
          <h2 className="mt-1 text-2xl font-bold tracking-tight text-slate-900">
            Investor Discovery Survey &amp; Q&amp;A
          </h2>
          <p className="mt-1 text-sm text-slate-600">
            Field-tested discovery questions from the research workbook with empirical answer syntheses and top 5–6 multiple choice options.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => setFilterTop6Only(!filterTop6Only)}
            className={`flex items-center gap-1.5 rounded-lg border px-3 py-1.5 text-xs font-semibold transition ${
              filterTop6Only
                ? 'border-blue-700 bg-blue-50 text-blue-900'
                : 'border-slate-300 bg-white text-slate-700 hover:bg-slate-50'
            }`}
          >
            <span>Top 6 Priority Questions Only</span>
          </button>

          <button
            onClick={handleCopySummary}
            className="flex items-center gap-1.5 rounded-lg bg-blue-700 px-3.5 py-1.5 text-xs font-semibold text-white hover:bg-blue-800 transition shadow-sm"
          >
            {copied ? <Check size={14} /> : <Copy size={14} />}
            <span>{copied ? 'Copied Survey' : 'Copy Responses'}</span>
          </button>
        </div>
      </div>

      {/* Progress Card */}
      <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm flex items-center justify-between text-xs">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-50 text-blue-700 font-bold">
            {totalAnswered}/10
          </div>
          <div>
            <div className="font-bold text-slate-900">Survey Progress</div>
            <div className="text-slate-500">{totalAnswered} of 10 questions answered</div>
          </div>
        </div>

        <div className="w-48 bg-slate-100 rounded-full h-2.5 overflow-hidden">
          <div
            className="bg-blue-700 h-2.5 rounded-full transition-all duration-300"
            style={{ width: `${(totalAnswered / 10) * 100}%` }}
          />
        </div>
      </div>

      {/* Main Grid: Left Question List & Right Survey Workspace */}
      <div className="grid gap-6 lg:grid-cols-[280px_1fr]">
        {/* Left: Questions List */}
        <div className="rounded-xl border border-slate-200 bg-white p-3 space-y-1.5 shadow-sm h-fit">
          <div className="px-3 py-2 text-[10px] font-bold uppercase tracking-wider text-slate-400">
            Discovery Questions
          </div>

          {displayQuestions.map((q) => {
            const isSelected = selectedQuestionId === q.id;
            const hasAnswer = Boolean(selectedAnswers[q.id]);

            return (
              <button
                key={q.id}
                onClick={() => setSelectedQuestionId(q.id)}
                className={`w-full flex items-start gap-2.5 rounded-lg p-2.5 text-left text-xs transition border ${
                  isSelected
                    ? 'border-blue-600 bg-blue-50 text-blue-900 font-semibold shadow-sm'
                    : 'border-transparent hover:bg-slate-50 text-slate-700'
                }`}
              >
                <span className={`h-5 w-5 rounded-full flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5 ${
                  hasAnswer
                    ? 'bg-emerald-600 text-white'
                    : isSelected
                    ? 'bg-blue-700 text-white'
                    : 'bg-slate-200 text-slate-600'
                }`}>
                  {hasAnswer ? '✓' : q.id.replace('Q', '')}
                </span>

                <div className="line-clamp-2 leading-relaxed">
                  {q.question}
                </div>
              </button>
            );
          })}
        </div>

        {/* Right: Question Workspace & Survey Options */}
        <div className="space-y-6">
          <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm space-y-5">
            {/* Question Details */}
            <div className="border-b border-slate-100 pb-4 space-y-2">
              <div className="flex items-center gap-2">
                <span className="font-mono text-xs font-bold text-blue-700 bg-blue-50 px-2 py-0.5 rounded">
                  {currentQ.id}
                </span>
                <span className="rounded bg-slate-100 px-2 py-0.5 text-[10px] font-semibold text-slate-600">
                  {currentQ.primary_theme}
                </span>
                {currentQ.is_top_6 && (
                  <span className="rounded bg-emerald-100 text-emerald-800 text-[10px] font-bold px-2 py-0.5">
                    Top 6 Priority
                  </span>
                )}
              </div>

              <h3 className="text-base font-bold text-slate-900 leading-snug">
                {currentQ.question}
              </h3>

              <div className="text-xs text-slate-500">
                <strong className="text-slate-700">PM Purpose: </strong>
                {currentQ.purpose}
              </div>
            </div>

            {/* Top 5–6 Survey Options */}
            <div className="space-y-3">
              <div className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Top 5–6 Survey Options (Select one):
              </div>

              <div className="grid gap-2.5">
                {currentQ.survey_options.map((option, idx) => {
                  const isChecked = selectedAnswers[currentQ.id] === option;

                  return (
                    <div
                      key={idx}
                      onClick={() => handleSelectAnswer(currentQ.id, option)}
                      className={`cursor-pointer rounded-xl border p-3.5 transition text-xs flex items-start gap-3 ${
                        isChecked
                          ? 'border-blue-600 bg-blue-50/70 text-blue-950 font-semibold shadow-sm'
                          : 'border-slate-200 hover:border-slate-300 hover:bg-slate-50 text-slate-700'
                      }`}
                    >
                      <div className={`h-4 w-4 rounded-full border flex items-center justify-center shrink-0 mt-0.5 ${
                        isChecked ? 'border-blue-700 bg-blue-700' : 'border-slate-400 bg-white'
                      }`}>
                        {isChecked && <div className="h-1.5 w-1.5 rounded-full bg-white" />}
                      </div>
                      <span className="leading-5">{option}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Empirical Findings & Synthesis */}
            <div className="rounded-xl border border-slate-200 bg-slate-50/60 p-4 space-y-3 text-xs leading-5">
              <div className="flex items-center gap-1.5 font-bold text-slate-900">
                <Sparkles size={14} className="text-blue-700" />
                <span>Empirical Findings (Synthesised from Candidate Reviews)</span>
              </div>
              <p className="text-slate-700">{currentQ.answer_synthesis}</p>

              <ul className="space-y-1.5 text-slate-600 pl-4 list-disc">
                {currentQ.empirical_findings.map((f, fIdx) => (
                  <li key={fIdx}>{f}</li>
                ))}
              </ul>
            </div>

            {/* Verbatim Quotes */}
            <div className="space-y-2">
              <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                Verbatim Evidence Quotes
              </div>
              <div className="grid gap-2 sm:grid-cols-2">
                {currentQ.evidence_quotes.map((q, qIdx) => (
                  <div key={qIdx} className="rounded-lg bg-white border border-slate-200 p-3 text-xs space-y-1">
                    <p className="italic text-slate-800 leading-relaxed">&ldquo;{q.quote}&rdquo;</p>
                    <div className="text-[10px] text-slate-400 flex items-center justify-between pt-1 border-t border-slate-100">
                      <span>{q.source}</span>
                      <span className="text-slate-600 font-medium">{q.context}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Researcher Notes */}
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-slate-700">Researcher Interview Notes for {currentQ.id}:</label>
              <textarea
                rows={2}
                value={notes[currentQ.id] || ''}
                onChange={(e) => handleNoteChange(currentQ.id, e.target.value)}
                placeholder="Add observational notes from participant interview or survey administration..."
                className="w-full rounded-lg border border-slate-300 p-2 text-xs focus:border-blue-600 focus:outline-none"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
