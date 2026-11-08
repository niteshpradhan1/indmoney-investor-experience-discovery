import React, { useState } from 'react';
import {
  Search,
  Filter,
  CheckCircle2,
  Clock,
  ExternalLink,
  ShieldCheck,
  Tag,
  Star,
  XCircle,
  AlertCircle,
  Edit3,
  FileText,
  Save,
  X,
  AlertTriangle,
  RotateCcw,
  Database
} from 'lucide-react';
import { EvidenceItem, HumanReviewStatus } from '../types';

interface EvidenceLibraryProps {
  evidenceItems: EvidenceItem[];
  onUpdateStatus: (id: string, newStatus: HumanReviewStatus) => void;
  onUpdateClassification: (id: string, newTheme: string, newSegment: any, h1Relevant: boolean) => void;
  onUpdateNotes: (id: string, notes: string) => void;
  onNavigateToReviewWorkspace?: () => void;
}

export const EvidenceLibrary: React.FC<EvidenceLibraryProps> = ({
  evidenceItems,
  onUpdateStatus,
  onUpdateClassification,
  onUpdateNotes,
  onNavigateToReviewWorkspace
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSegment, setSelectedSegment] = useState<string>('All');
  const [selectedSource, setSelectedSource] = useState<string>('All');
  const [selectedStatus, setSelectedStatus] = useState<string>('All');
  const [h1Only, setH1Only] = useState(false);

  // State for Edit Classification Modal
  const [editingItem, setEditingItem] = useState<EvidenceItem | null>(null);
  const [editTheme, setEditTheme] = useState('');
  const [editSegment, setEditSegment] = useState<any>('');
  const [editH1, setEditH1] = useState(false);

  // State for Edit Notes Modal
  const [noteItem, setNoteItem] = useState<EvidenceItem | null>(null);
  const [noteText, setNoteText] = useState('');

  const filteredItems = evidenceItems.filter((item) => {
    const matchesQuery =
      item.verbatimText.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.sourceReference.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.identifiedPainPoints.some(p => p.toLowerCase().includes(searchQuery.toLowerCase())) ||
      item.assignedTheme.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesSegment = selectedSegment === 'All' || item.userSegment === selectedSegment;
    const matchesSource = selectedSource === 'All' || item.source === selectedSource;
    const matchesStatus = selectedStatus === 'All' || item.humanReviewStatus === selectedStatus;
    const matchesH1 = !h1Only || item.h1Relevant;

    return matchesQuery && matchesSegment && matchesSource && matchesStatus && matchesH1;
  });

  const openEditModal = (item: EvidenceItem) => {
    setEditingItem(item);
    setEditTheme(item.assignedTheme);
    setEditSegment(item.userSegment);
    setEditH1(item.h1Relevant);
  };

  const saveEditModal = () => {
    if (editingItem) {
      onUpdateClassification(editingItem.id, editTheme, editSegment, editH1);
      setEditingItem(null);
    }
  };

  const openNoteModal = (item: EvidenceItem) => {
    setNoteItem(item);
    setNoteText(item.humanReviewNotes || '');
  };

  const saveNoteModal = () => {
    if (noteItem) {
      onUpdateNotes(noteItem.id, noteText);
      setNoteItem(null);
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-end border-b border-slate-200 pb-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-blue-700">Phase 2 Credibility Audit</span>
            <span className="rounded-full bg-slate-100 px-2 py-0.5 text-[10px] font-bold text-slate-600">
              Human Review System
            </span>
          </div>
          <h2 className="mt-1 text-2xl font-bold tracking-tight text-slate-900">
            Evidence Library &amp; Traceability Registry
          </h2>
          <p className="mt-1 text-sm text-slate-600">
            Traceable customer voice records with original source references, review dates, platforms, and explicit human review lifecycle controls.
          </p>
        </div>

        <div className="flex items-center gap-2 text-xs text-slate-500">
          <span className="font-semibold text-slate-800">{filteredItems.length}</span> of {evidenceItems.length} records shown
        </div>
      </div>

      {/* Research Funnel & Provenance Summary */}
      <div className="rounded-xl border border-slate-200 bg-slate-50/80 p-3.5 flex flex-wrap items-center justify-between gap-3 text-xs">
        <div className="flex items-center gap-2">
          <Database size={15} className="text-blue-700 shrink-0" />
          <span className="font-semibold text-slate-800">Research Data Pipeline:</span>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <div className="flex items-center gap-1.5 rounded-lg border border-slate-200 bg-white px-2.5 py-1 text-slate-700 font-medium shadow-2xs">
            <span className="font-bold text-slate-900">62,523</span>
            <span className="text-[11px] text-slate-500">Raw Reviews</span>
            <span className="rounded bg-slate-100 px-1 py-0.2 text-[9px] font-semibold text-slate-600">Actual</span>
          </div>
          <span className="text-slate-400 font-bold">&rarr;</span>
          <div className="flex items-center gap-1.5 rounded-lg border border-blue-200 bg-blue-50/60 px-2.5 py-1 text-blue-900 font-medium shadow-2xs">
            <span className="font-bold text-blue-900">235</span>
            <span className="text-[11px] text-blue-700">Keyword Candidates</span>
            <span className="rounded bg-blue-100 px-1 py-0.2 text-[9px] font-semibold text-blue-800">Filtered</span>
          </div>
          <span className="text-slate-400 font-bold">&rarr;</span>
          <div className="flex items-center gap-1.5 rounded-lg border border-emerald-300 bg-emerald-50 px-2.5 py-1 text-emerald-950 font-medium shadow-2xs">
            <span className="font-bold text-emerald-800">{evidenceItems.length}</span>
            <span className="text-[11px] text-emerald-700">Audited Traceable Records</span>
            <span className="rounded bg-emerald-200/80 px-1 py-0.2 text-[9px] font-bold text-emerald-900">Verified</span>
          </div>
        </div>

        {onNavigateToReviewWorkspace && (
          <button
            onClick={onNavigateToReviewWorkspace}
            className="flex items-center gap-1.5 rounded-md bg-blue-700 px-3 py-1.5 text-xs font-semibold text-white hover:bg-blue-800 transition shadow-2xs"
          >
            <span>Open 235 Review Workspace</span>
            <ExternalLink size={12} />
          </button>
        )}
      </div>

      {/* Scientific Validation Boundary Banner */}
      <div className="rounded-xl border-2 border-amber-300 bg-amber-50/70 p-4 text-xs text-amber-950 shadow-2xs space-y-2.5">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-amber-200 pb-2">
          <div className="flex items-center gap-2 font-bold text-amber-900 text-sm">
            <AlertTriangle size={17} className="text-amber-700 shrink-0" />
            <span>Scientific Validation Boundary · Exploratory Research Protocol</span>
          </div>
          <span className="rounded-full bg-amber-200/90 px-2.5 py-0.5 text-[11px] font-extrabold text-amber-950 border border-amber-300">
            H1 Status: Not Validated
          </span>
        </div>
        <p className="leading-relaxed text-amber-900 text-xs">
          <strong>Customer review classification provides qualitative evidence of reported friction, not proof of causation or investor retention impact.</strong> Hypothesis H1 cannot be labeled as &ldquo;Validated&rdquo; based solely on App Store reviews, Play Store reviews, Reddit discussions, YouTube comments, or AI-generated classifications.
        </p>
        <div className="rounded-lg bg-white/90 p-3 border border-amber-200 space-y-1.5 text-[11px]">
          <div className="font-bold text-slate-900">Subsequent Validation Required Prior to Phase 4 / Solution Commitment:</div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 pt-1 text-[11px]">
            <div className="rounded border border-amber-200 bg-amber-50/50 p-2">
              <span className="font-bold text-slate-800 block">1. User Interviews</span>
              <span className="text-slate-600 text-[10px]">1:1 qualitative sessions probing post-failure mental models and anxiety.</span>
            </div>
            <div className="rounded border border-amber-200 bg-amber-50/50 p-2">
              <span className="font-bold text-slate-800 block">2. Drop-off Analysis</span>
              <span className="text-slate-600 text-[10px]">Funnel drop-off measurement following first mandate debit failure.</span>
            </div>
            <div className="rounded border border-amber-200 bg-amber-50/50 p-2">
              <span className="font-bold text-slate-800 block">3. Usability Testing</span>
              <span className="text-slate-600 text-[10px]">Behavioural task completion and comprehension on interactive prototype.</span>
            </div>
            <div className="rounded border border-amber-200 bg-amber-50/50 p-2">
              <span className="font-bold text-slate-800 block">4. Outcome Metrics</span>
              <span className="text-slate-600 text-[10px]">Empirical 72-hour instalment recovery rate lift and active retention.</span>
            </div>
          </div>
        </div>
      </div>

      {/* Human Review Protocol Disclaimer */}
      <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm text-xs leading-5 text-slate-600 flex items-start gap-3">
        <ShieldCheck size={18} className="text-blue-700 shrink-0 mt-0.5" />
        <div>
          <strong className="text-slate-900 font-semibold">Governance Protocol: </strong>
          AI-generated categories and classifications remain advisory drafts until explicitly audited by a researcher. You can <strong>Approve</strong>, <strong>Reject</strong> (e.g. for non-SIP loan records), <strong>Edit Classification</strong>, or <strong>Flag for Further Validation</strong>.
        </div>
      </div>

      {/* Filters & Search */}
      <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm space-y-3">
        <div className="flex flex-col sm:flex-row gap-3">
          <div className="relative flex-1">
            <Search size={16} className="absolute left-3 top-2.5 text-slate-400" />
            <input
              type="text"
              placeholder="Search by review text, record ID, bank name, or pain point..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full rounded-lg border border-slate-300 pl-9 pr-3 py-2 text-xs focus:border-blue-600 focus:outline-none"
            />
          </div>

          <div className="flex flex-wrap items-center gap-2">
            {/* Status Filter */}
            <select
              value={selectedStatus}
              onChange={(e) => setSelectedStatus(e.target.value)}
              className="rounded-lg border border-slate-300 bg-white px-3 py-2 text-xs text-slate-700 focus:border-blue-600 focus:outline-none"
            >
              <option value="All">All Review Statuses</option>
              <option value="approved">Approved</option>
              <option value="needs_validation">Requires Further Validation</option>
              <option value="rejected">Rejected (Out of Scope)</option>
              <option value="draft">Draft / Unreviewed</option>
            </select>

            {/* Segment Filter */}
            <select
              value={selectedSegment}
              onChange={(e) => setSelectedSegment(e.target.value)}
              className="rounded-lg border border-slate-300 bg-white px-3 py-2 text-xs text-slate-700 focus:border-blue-600 focus:outline-none"
            >
              <option value="All">All User Segments</option>
              <option value="First-time SIP (PSU Bank)">First-time SIP (PSU Bank)</option>
              <option value="First-time SIP (Private Bank)">First-time SIP (Private Bank)</option>
              <option value="Salary Mismatch">Salary Mismatch</option>
              <option value="Experienced SIP">Experienced SIP</option>
            </select>

            {/* Source Filter */}
            <select
              value={selectedSource}
              onChange={(e) => setSelectedSource(e.target.value)}
              className="rounded-lg border border-slate-300 bg-white px-3 py-2 text-xs text-slate-700 focus:border-blue-600 focus:outline-none"
            >
              <option value="All">All Sources</option>
              <option value="Google Play Store">Google Play Store</option>
              <option value="Apple App Store">Apple App Store</option>
              <option value="Reddit r/IndiaInvestments">Reddit r/IndiaInvestments</option>
              <option value="TradingQ&A">TradingQ&A</option>
              <option value="User Research Interview">User Research Interview</option>
            </select>

            <button
              onClick={() => setH1Only(!h1Only)}
              className={`flex items-center gap-1.5 rounded-lg border px-3 py-2 text-xs font-medium transition ${
                h1Only
                  ? 'border-blue-700 bg-blue-50 text-blue-800 font-semibold'
                  : 'border-slate-300 bg-white text-slate-700 hover:bg-slate-50'
              }`}
            >
              <Tag size={13} />
              <span>H1 Mandate Relevant</span>
            </button>
          </div>
        </div>
      </div>

      {/* Evidence Cards */}
      <div className="grid gap-4 md:grid-cols-2">
        {filteredItems.map((item) => {
          const isApproved = item.humanReviewStatus === 'approved';
          const isRejected = item.humanReviewStatus === 'rejected';
          const isNeedsValidation = item.humanReviewStatus === 'needs_validation';

          return (
            <div
              key={item.id}
              className={`flex flex-col justify-between rounded-xl border p-5 shadow-sm transition ${
                isRejected
                  ? 'border-slate-200 bg-slate-100/60 opacity-75'
                  : item.h1Relevant
                  ? 'border-blue-200 bg-gradient-to-br from-white to-blue-50/20'
                  : 'border-slate-200 bg-white'
              }`}
            >
              <div>
                {/* Top Reference & Metadata Bar */}
                <div className="flex items-start justify-between gap-2 border-b border-slate-100 pb-3">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-xs font-bold text-slate-500">{item.id}</span>
                      <span className="rounded-full bg-slate-100 px-2 py-0.5 text-[10px] font-bold text-slate-700">
                        {item.source}
                      </span>
                      <span className="rounded-full bg-slate-100 px-2 py-0.5 text-[10px] text-slate-600">
                        {item.platform}
                      </span>
                      {item.h1Relevant && (
                        <span className="rounded-full bg-blue-100 px-2 py-0.5 text-[10px] font-bold text-blue-800">
                          H1 Mandate
                        </span>
                      )}
                    </div>
                    <div className="text-[11px] text-slate-500 font-mono">
                      Ref: {item.sourceReference}
                    </div>
                    <div className="flex items-center gap-2 text-[11px] text-slate-500">
                      <span>Date: <strong>{item.date}</strong></span>
                      <span>•</span>
                      <span>Segment: <strong>{item.userSegment}</strong></span>
                      {item.rating && (
                        <span className="flex items-center text-amber-500 ml-1">
                          {[...Array(item.rating)].map((_, i) => (
                            <Star key={i} size={11} fill="currentColor" />
                          ))}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Review Status Badge */}
                  <div>
                    {isApproved && (
                      <span className="flex items-center gap-1 rounded-full border border-emerald-300 bg-emerald-50 px-2.5 py-1 text-[11px] font-bold text-emerald-800">
                        <CheckCircle2 size={12} className="text-emerald-600" />
                        Approved
                      </span>
                    )}
                    {isNeedsValidation && (
                      <span className="flex items-center gap-1 rounded-full border border-amber-300 bg-amber-50 px-2.5 py-1 text-[11px] font-bold text-amber-800">
                        <AlertTriangle size={12} className="text-amber-600" />
                        Needs Validation
                      </span>
                    )}
                    {isRejected && (
                      <span className="flex items-center gap-1 rounded-full border border-rose-300 bg-rose-50 px-2.5 py-1 text-[11px] font-bold text-rose-800">
                        <XCircle size={12} className="text-rose-600" />
                        Rejected
                      </span>
                    )}
                    {item.humanReviewStatus === 'draft' && (
                      <span className="flex items-center gap-1 rounded-full border border-slate-300 bg-slate-50 px-2.5 py-1 text-[11px] font-medium text-slate-600">
                        <Clock size={12} className="text-slate-400" />
                        Draft Suggestion
                      </span>
                    )}
                  </div>
                </div>

                {/* Verbatim Feedback Text */}
                <div className="mt-3">
                  <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-1">
                    Original Customer Feedback Text
                  </div>
                  <p className="text-xs leading-5 text-slate-900 bg-slate-50/80 p-3 rounded-lg border border-slate-100 font-sans">
                    &ldquo;{item.verbatimText}&rdquo;
                  </p>
                </div>

                {/* Identified Pain Points */}
                <div className="mt-3">
                  <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-1">
                    Extracted Pain Points
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {item.identifiedPainPoints.map((pain, idx) => (
                      <span
                        key={idx}
                        className="rounded bg-rose-50 border border-rose-200 px-2 py-0.5 text-[11px] font-medium text-rose-800"
                      >
                        {pain}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Theme Classification & AI Provenance */}
                <div className="mt-3 grid grid-cols-2 gap-2 text-[11px] pt-3 border-t border-slate-100">
                  <div>
                    <div className="text-slate-400 text-[10px] uppercase font-bold">Assigned Theme</div>
                    <div className="text-blue-900 font-semibold mt-0.5">{item.assignedTheme}</div>
                  </div>
                  <div>
                    <div className="text-slate-400 text-[10px] uppercase font-bold">AI Draft Category</div>
                    <div className="text-slate-600 mt-0.5">{item.aiSuggestedCategory}</div>
                  </div>
                </div>

                {/* Researcher Notes */}
                {item.humanReviewNotes && (
                  <div className="mt-3 rounded-lg bg-blue-50/50 border border-blue-100 p-2.5 text-[11px] text-blue-900">
                    <div className="flex items-center justify-between font-bold text-blue-950 mb-0.5">
                      <span className="flex items-center gap-1">
                        <FileText size={12} className="text-blue-700" />
                        Researcher Audit Note:
                      </span>
                      {item.reviewedBy && (
                        <span className="text-[10px] text-slate-500 font-normal">Audited by {item.reviewedBy}</span>
                      )}
                    </div>
                    {item.humanReviewNotes}
                  </div>
                )}
              </div>

              {/* Action Buttons for Human Review */}
              <div className="mt-4 pt-3 border-t border-slate-100 space-y-2">
                <div className="flex items-center justify-between text-[11px] text-slate-400">
                  <span>AI Heuristic Confidence: {item.confidenceScore}%</span>
                  {item.sourceUrl ? (
                    <a
                      href={item.sourceUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-blue-700 hover:underline font-medium"
                    >
                      <span>Public Source Link</span>
                      <ExternalLink size={11} />
                    </a>
                  ) : (
                    <span className="italic">Interview Protocol Record</span>
                  )}
                </div>

                {/* Interactive PM Actions */}
                <div className="flex flex-wrap items-center justify-end gap-1.5 pt-1">
                  <button
                    onClick={() => openEditModal(item)}
                    className="flex items-center gap-1 rounded border border-slate-300 bg-white px-2 py-1 text-[11px] font-medium text-slate-700 hover:bg-slate-50 transition"
                    title="Change theme classification or user segment"
                  >
                    <Edit3 size={11} />
                    <span>Edit Classification</span>
                  </button>

                  <button
                    onClick={() => openNoteModal(item)}
                    className="flex items-center gap-1 rounded border border-slate-300 bg-white px-2 py-1 text-[11px] font-medium text-slate-700 hover:bg-slate-50 transition"
                    title="Add or edit researcher notes"
                  >
                    <FileText size={11} />
                    <span>Researcher Note</span>
                  </button>

                  {item.humanReviewStatus !== 'approved' && (
                    <button
                      onClick={() => onUpdateStatus(item.id, 'approved')}
                      className="flex items-center gap-1 rounded border border-emerald-300 bg-emerald-50 px-2 py-1 text-[11px] font-bold text-emerald-800 hover:bg-emerald-100 transition"
                    >
                      <CheckCircle2 size={11} />
                      <span>Approve</span>
                    </button>
                  )}

                  {item.humanReviewStatus !== 'needs_validation' && (
                    <button
                      onClick={() => onUpdateStatus(item.id, 'needs_validation')}
                      className="flex items-center gap-1 rounded border border-amber-300 bg-amber-50 px-2 py-1 text-[11px] font-bold text-amber-800 hover:bg-amber-100 transition"
                    >
                      <AlertTriangle size={11} />
                      <span>Flag for Validation</span>
                    </button>
                  )}

                  {item.humanReviewStatus !== 'rejected' && (
                    <button
                      onClick={() => onUpdateStatus(item.id, 'rejected')}
                      className="flex items-center gap-1 rounded border border-rose-300 bg-rose-50 px-2 py-1 text-[11px] font-bold text-rose-800 hover:bg-rose-100 transition"
                    >
                      <XCircle size={11} />
                      <span>Reject</span>
                    </button>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* MODAL: Edit Classification */}
      {editingItem && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="relative w-full max-w-md rounded-2xl bg-white p-6 shadow-2xl space-y-4">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <h3 className="text-sm font-bold text-slate-900">
                Edit Classification ({editingItem.id})
              </h3>
              <button
                onClick={() => setEditingItem(null)}
                className="text-slate-400 hover:text-slate-700"
              >
                <X size={16} />
              </button>
            </div>

            <div className="space-y-3 text-xs">
              <div>
                <label className="block font-semibold text-slate-700 mb-1">Assigned Theme</label>
                <select
                  value={editTheme}
                  onChange={(e) => setEditTheme(e.target.value)}
                  className="w-full rounded-lg border border-slate-300 p-2 text-xs focus:border-blue-600 focus:outline-none"
                >
                  <option value="Autopay & Bank Mandate Execution">Autopay &amp; Bank Mandate Execution</option>
                  <option value="NAV Allotment & Settlement Lag Anxiety">NAV Allotment &amp; Settlement Lag Anxiety</option>
                  <option value="Market Volatility Anxiety & Panic Pausing">Market Volatility Anxiety &amp; Panic Pausing</option>
                  <option value="KYC & Onboarding Friction">KYC &amp; Onboarding Friction</option>
                  <option value="Cash-Flow Pressure & Salary Scheduling Mismatch">Cash-Flow Pressure &amp; Salary Scheduling Mismatch</option>
                  <option value="General App Usability & Service Quality">General App Usability &amp; Service Quality</option>
                </select>
              </div>

              <div>
                <label className="block font-semibold text-slate-700 mb-1">User Segment</label>
                <select
                  value={editSegment}
                  onChange={(e) => setEditSegment(e.target.value)}
                  className="w-full rounded-lg border border-slate-300 p-2 text-xs focus:border-blue-600 focus:outline-none"
                >
                  <option value="First-time SIP (PSU Bank)">First-time SIP (PSU Bank)</option>
                  <option value="First-time SIP (Private Bank)">First-time SIP (Private Bank)</option>
                  <option value="Salary Mismatch">Salary Mismatch</option>
                  <option value="Experienced SIP">Experienced SIP</option>
                </select>
              </div>

              <div className="flex items-center gap-2 pt-2">
                <input
                  type="checkbox"
                  id="h1_checkbox"
                  checked={editH1}
                  onChange={(e) => setEditH1(e.target.checked)}
                  className="rounded border-slate-300 text-blue-600 focus:ring-blue-500"
                />
                <label htmlFor="h1_checkbox" className="font-semibold text-slate-800">
                  Tag as relevant to H1 (Bank Mandate Recovery)
                </label>
              </div>
            </div>

            <div className="flex items-center justify-end gap-2 pt-3 border-t border-slate-100">
              <button
                onClick={() => setEditingItem(null)}
                className="rounded-lg border border-slate-300 px-3 py-1.5 text-xs text-slate-700 hover:bg-slate-50"
              >
                Cancel
              </button>
              <button
                onClick={saveEditModal}
                className="rounded-lg bg-blue-700 px-3 py-1.5 text-xs font-semibold text-white hover:bg-blue-800"
              >
                Save Classification
              </button>
            </div>
          </div>
        </div>
      )}

      {/* MODAL: Researcher Note */}
      {noteItem && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="relative w-full max-w-md rounded-2xl bg-white p-6 shadow-2xl space-y-4">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <h3 className="text-sm font-bold text-slate-900">
                Add Researcher Audit Note ({noteItem.id})
              </h3>
              <button
                onClick={() => setNoteItem(null)}
                className="text-slate-400 hover:text-slate-700"
              >
                <X size={16} />
              </button>
            </div>

            <div className="space-y-2 text-xs">
              <p className="text-slate-500">
                Document why this record supports or refutes H1, notes on data quality, or instructions for follow-up validation:
              </p>
              <textarea
                rows={4}
                value={noteText}
                onChange={(e) => setNoteText(e.target.value)}
                placeholder="Enter researcher audit note..."
                className="w-full rounded-lg border border-slate-300 p-2 text-xs focus:border-blue-600 focus:outline-none"
              />
            </div>

            <div className="flex items-center justify-end gap-2 pt-3 border-t border-slate-100">
              <button
                onClick={() => setNoteItem(null)}
                className="rounded-lg border border-slate-300 px-3 py-1.5 text-xs text-slate-700 hover:bg-slate-50"
              >
                Cancel
              </button>
              <button
                onClick={saveNoteModal}
                className="rounded-lg bg-blue-700 px-3 py-1.5 text-xs font-semibold text-white hover:bg-blue-800"
              >
                Save Note
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
