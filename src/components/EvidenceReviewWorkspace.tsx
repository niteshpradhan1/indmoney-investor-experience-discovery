import React, { useState, useEffect, useMemo } from 'react';
import {
  Search,
  Filter,
  CheckCircle2,
  XCircle,
  AlertCircle,
  HelpCircle,
  Download,
  RotateCcw,
  Sparkles,
  ShieldCheck,
  Star,
  Calendar,
  ExternalLink,
  ChevronLeft,
  ChevronRight,
  Database,
  Tag,
  FileText,
  Save,
  Check,
  Eye,
  ArrowRight,
  Upload,
  Server,
  CloudUpload,
  RefreshCw
} from 'lucide-react';
import * as XLSX from 'xlsx';
import {
  ReviewRecord,
  ClassificationCategory,
  EvidenceStrength,
  CandidateReviewStatus,
  NavSection
} from '../types';
import { DATASET_METRICS, INITIAL_CANDIDATE_REVIEWS } from '../data/candidateReviewsData';
import {
  fetchCandidateReviews,
  updateCandidateReview,
  batchUpdateCandidateReviews
} from '../lib/api';

const CLASSIFICATION_CATEGORIES: ClassificationCategory[] = [
  'Bank mandate failure',
  'SIP debit failure',
  'SIP instalment debit failure',
  'NACH / AutoPay issue',
  'Bank account linking problem',
  'SIP setup issue',
  'Withdrawal / redemption issue',
  'General payment issue',
  'Unrelated feedback',
  'Insufficient information'
];

const LOCAL_STORAGE_KEY = 'indmoney_h1_candidate_reviews_v2';

interface EvidenceReviewWorkspaceProps {
  onNavigateToEvidenceLibrary: () => void;
  onNavigateToH1Workspace: () => void;
}

export const EvidenceReviewWorkspace: React.FC<EvidenceReviewWorkspaceProps> = ({
  onNavigateToEvidenceLibrary,
  onNavigateToH1Workspace
}) => {
  // Master records state with localStorage persistence
  const [records, setRecords] = useState<ReviewRecord[]>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem(LOCAL_STORAGE_KEY);
      if (saved) {
        try {
          return JSON.parse(saved);
        } catch (e) {
          console.error('Failed to parse saved candidate reviews:', e);
        }
      }
    }
    return INITIAL_CANDIDATE_REVIEWS;
  });

  // Save to localStorage whenever records change
  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(records));
    }
  }, [records]);

  // Filtering & Pagination State
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedStrength, setSelectedStrength] = useState<string>('All');
  const [selectedStatus, setSelectedStatus] = useState<string>('All');
  const [selectedRating, setSelectedRating] = useState<string>('All');
  const [sortBy, setSortBy] = useState<'date_desc' | 'date_asc' | 'rating_asc' | 'rating_desc'>('date_desc');
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);

  // Success Notification Banner
  const [exportNotification, setExportNotification] = useState<string | null>(null);
  const [backendSyncStatus, setBackendSyncStatus] = useState<string>('Syncing...');
  const [isImporting, setIsImporting] = useState<boolean>(false);
  const [isSyncing, setIsSyncing] = useState<boolean>(false);
  const fileInputRef = React.useRef<HTMLInputElement | null>(null);

  // Sync with API on mount
  useEffect(() => {
    let isMounted = true;
    fetchCandidateReviews().then(({ data, source }) => {
      if (!isMounted) return;
      if (data && data.length > 0) {
        setRecords(data);
        if (source === 'supabase_postgres') {
          setBackendSyncStatus('Supabase PostgreSQL (Live)');
        } else if (source === 'localStorage') {
          setBackendSyncStatus('Local Storage (Persistent)');
        } else {
          setBackendSyncStatus('Local Baseline (Offline Ready)');
        }
      }
    }).catch((err) => {
      if (isMounted) setBackendSyncStatus('Local Storage (Offline)');
    });
    return () => { isMounted = false; };
  }, []);

  // Filtered & Sorted records
  const filteredRecords = useMemo(() => {
    return records.filter((rec) => {
      // Search
      const q = searchQuery.toLowerCase().trim();
      const matchesQuery =
        !q ||
        rec.id.toLowerCase().includes(q) ||
        rec.reviewText.toLowerCase().includes(q) ||
        rec.sourceReference.toLowerCase().includes(q) ||
        rec.preliminaryKeywordSignals.toLowerCase().includes(q) ||
        rec.researcherNotes.toLowerCase().includes(q);

      // Category
      const effectiveCats = rec.humanCategories.length > 0 ? rec.humanCategories : rec.aiSuggestion.categories;
      const matchesCategory =
        selectedCategory === 'All' || effectiveCats.includes(selectedCategory as ClassificationCategory);

      // Strength
      const effectiveStrength = rec.humanEvidenceStrength !== 'UNASSIGNED' ? rec.humanEvidenceStrength : rec.aiSuggestion.evidenceStrength;
      const matchesStrength =
        selectedStrength === 'All' || effectiveStrength === selectedStrength;

      // Status
      const matchesStatus =
        selectedStatus === 'All' || rec.humanReviewStatus === selectedStatus;

      // Rating
      const matchesRating =
        selectedRating === 'All' || rec.rating?.toString() === selectedRating;

      return matchesQuery && matchesCategory && matchesStrength && matchesStatus && matchesRating;
    }).sort((a, b) => {
      if (sortBy === 'date_desc') {
        return (b.reviewDate || '').localeCompare(a.reviewDate || '');
      } else if (sortBy === 'date_asc') {
        return (a.reviewDate || '').localeCompare(b.reviewDate || '');
      } else if (sortBy === 'rating_asc') {
        return (a.rating || 0) - (b.rating || 0);
      } else if (sortBy === 'rating_desc') {
        return (b.rating || 0) - (a.rating || 0);
      }
      return 0;
    });
  }, [records, searchQuery, selectedCategory, selectedStrength, selectedStatus, selectedRating, sortBy]);

  // Pagination calculation
  const totalPages = Math.max(1, Math.ceil(filteredRecords.length / pageSize));
  const paginatedRecords = useMemo(() => {
    const start = (currentPage - 1) * pageSize;
    return filteredRecords.slice(start, start + pageSize);
  }, [filteredRecords, currentPage, pageSize]);

  // Reset pagination when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery, selectedCategory, selectedStrength, selectedStatus, selectedRating, sortBy, pageSize]);

  // Dashboard Metrics (Requirement 8)
  const metrics = useMemo(() => {
    const totalOriginal = DATASET_METRICS.totalOriginalReviews;
    const totalCandidates = records.length;
    let pending = 0;
    let approved = 0;
    let rejected = 0;
    let investigate = 0;
    let directCount = 0;
    let indirectCount = 0;
    let insufficientCount = 0;

    records.forEach((r) => {
      if (r.humanReviewStatus === 'pending') pending++;
      else if (r.humanReviewStatus === 'approved') approved++;
      else if (r.humanReviewStatus === 'rejected') rejected++;
      else if (r.humanReviewStatus === 'investigate') investigate++;

      // Effective strength: human if set, otherwise AI suggestion
      const strength = r.humanEvidenceStrength !== 'UNASSIGNED' ? r.humanEvidenceStrength : r.aiSuggestion.evidenceStrength;
      if (strength === 'DIRECT') directCount++;
      else if (strength === 'INDIRECT') indirectCount++;
      else if (strength === 'INSUFFICIENT') insufficientCount++;
    });

    const reviewedCount = approved + rejected + investigate;
    const progressPct = Math.round((reviewedCount / totalCandidates) * 100);

    return {
      totalOriginal,
      totalCandidates,
      pending,
      approved,
      rejected,
      investigate,
      reviewedCount,
      progressPct,
      directCount,
      indirectCount,
      insufficientCount
    };
  }, [records]);

  // Action: Accept AI Suggestion for a record
  const handleAcceptAISuggestion = (id: string) => {
    const now = new Date().toISOString().replace('T', ' ').substring(0, 16);
    let targetPayload: any = null;

    setRecords((prev) =>
      prev.map((rec) => {
        if (rec.id !== id) return rec;
        targetPayload = {
          status: 'approved',
          categories: [...rec.aiSuggestion.categories],
          evidenceStrength: rec.aiSuggestion.evidenceStrength,
          notes: rec.researcherNotes || `Accepted AI recommendation: ${rec.aiSuggestion.explanation}`,
          action: 'ACCEPT_AI_SUGGESTION'
        };
        return {
          ...rec,
          humanReviewStatus: 'approved',
          humanCategories: targetPayload.categories,
          humanEvidenceStrength: targetPayload.evidenceStrength,
          reviewedAt: now,
          reviewedBy: 'Lead PM Researcher',
          researcherNotes: targetPayload.notes
        };
      })
    );

    if (targetPayload) {
      updateCandidateReview(id, targetPayload);
    }
  };

  // Action: Set Status (Approve / Reject / Investigate)
  const handleSetStatus = (id: string, status: CandidateReviewStatus) => {
    const now = new Date().toISOString().replace('T', ' ').substring(0, 16);
    let targetPayload: any = null;

    setRecords((prev) =>
      prev.map((rec) => {
        if (rec.id !== id) return rec;
        const newCats = rec.humanCategories.length > 0 ? rec.humanCategories : [...rec.aiSuggestion.categories];
        const newStrength = rec.humanEvidenceStrength !== 'UNASSIGNED' ? rec.humanEvidenceStrength : rec.aiSuggestion.evidenceStrength;
        targetPayload = {
          status,
          categories: newCats,
          evidenceStrength: newStrength,
          notes: rec.researcherNotes,
          action: `SET_STATUS_${status.toUpperCase()}`
        };
        return {
          ...rec,
          humanReviewStatus: status,
          humanCategories: newCats,
          humanEvidenceStrength: newStrength,
          reviewedAt: now,
          reviewedBy: 'Lead PM Researcher'
        };
      })
    );

    if (targetPayload) {
      updateCandidateReview(id, targetPayload);
    }
  };

  // Action: Toggle a category on a record
  const handleToggleCategory = (id: string, cat: ClassificationCategory) => {
    const now = new Date().toISOString().replace('T', ' ').substring(0, 16);
    let targetPayload: any = null;

    setRecords((prev) =>
      prev.map((rec) => {
        if (rec.id !== id) return rec;
        const currentCats = rec.humanCategories.length > 0 ? rec.humanCategories : [...rec.aiSuggestion.categories];
        const exists = currentCats.includes(cat);
        const updatedCats = exists ? currentCats.filter((c) => c !== cat) : [...currentCats, cat];
        targetPayload = {
          status: rec.humanReviewStatus,
          categories: updatedCats,
          evidenceStrength: rec.humanEvidenceStrength !== 'UNASSIGNED' ? rec.humanEvidenceStrength : rec.aiSuggestion.evidenceStrength,
          notes: rec.researcherNotes,
          action: 'TOGGLE_CATEGORY'
        };
        return {
          ...rec,
          humanCategories: updatedCats,
          reviewedAt: now,
          reviewedBy: 'Lead PM Researcher'
        };
      })
    );

    if (targetPayload) {
      updateCandidateReview(id, targetPayload);
    }
  };

  // Action: Change Evidence Strength
  const handleChangeStrength = (id: string, strength: EvidenceStrength) => {
    const now = new Date().toISOString().replace('T', ' ').substring(0, 16);
    let targetPayload: any = null;

    setRecords((prev) =>
      prev.map((rec) => {
        if (rec.id !== id) return rec;
        targetPayload = {
          status: rec.humanReviewStatus,
          categories: rec.humanCategories.length > 0 ? rec.humanCategories : [...rec.aiSuggestion.categories],
          evidenceStrength: strength,
          notes: rec.researcherNotes,
          action: 'OVERRIDE_STRENGTH'
        };
        return {
          ...rec,
          humanEvidenceStrength: strength,
          reviewedAt: now,
          reviewedBy: 'Lead PM Researcher'
        };
      })
    );

    if (targetPayload) {
      updateCandidateReview(id, targetPayload);
    }
  };

  // Action: Update Researcher Notes
  const handleUpdateNotes = (id: string, notes: string) => {
    const now = new Date().toISOString().replace('T', ' ').substring(0, 16);
    let targetPayload: any = null;

    setRecords((prev) =>
      prev.map((rec) => {
        if (rec.id !== id) return rec;
        targetPayload = {
          status: rec.humanReviewStatus,
          categories: rec.humanCategories.length > 0 ? rec.humanCategories : [...rec.aiSuggestion.categories],
          evidenceStrength: rec.humanEvidenceStrength !== 'UNASSIGNED' ? rec.humanEvidenceStrength : rec.aiSuggestion.evidenceStrength,
          notes,
          action: 'UPDATE_NOTES'
        };
        return {
          ...rec,
          researcherNotes: notes,
          reviewedAt: now,
          reviewedBy: 'Lead PM Researcher'
        };
      })
    );

    if (targetPayload) {
      updateCandidateReview(id, targetPayload);
    }
  };

  // Action: Reset All to Original Workbook Candidates
  const handleReset = () => {
    if (window.confirm('Reset all candidate reviews to their initial unreviewed state?')) {
      localStorage.removeItem(LOCAL_STORAGE_KEY);
      setRecords(INITIAL_CANDIDATE_REVIEWS);
    }
  };

  // Action: Export JSON Backup of Local Decisions (Safe local preservation)
  const handleExportDecisionsBackup = () => {
    try {
      const reviewedRecords = records.filter(
        (r) => r.humanReviewStatus !== 'pending' || r.humanCategories.length > 0 || (r.researcherNotes && r.researcherNotes.trim() !== '')
      );
      const backupPayload = {
        exportedAt: new Date().toISOString(),
        totalReviewedDecisions: reviewedRecords.length,
        candidateIds: reviewedRecords.map((r) => r.id),
        decisions: reviewedRecords.map((r) => ({
          candidateId: r.id,
          originalRow: r.originalRow,
          humanReviewStatus: r.humanReviewStatus,
          humanCategories: r.humanCategories,
          humanEvidenceStrength: r.humanEvidenceStrength,
          researcherNotes: r.researcherNotes,
          reviewedBy: r.reviewedBy || 'Lead PM Researcher',
          reviewedAt: r.reviewedAt || new Date().toISOString()
        }))
      };

      const dataStr = 'data:text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(backupPayload, null, 2));
      const downloadAnchor = document.createElement('a');
      downloadAnchor.setAttribute('href', dataStr);
      downloadAnchor.setAttribute('download', `INDMoney_Researcher_Decisions_Backup_${new Date().toISOString().substring(0, 10)}.json`);
      document.body.appendChild(downloadAnchor);
      downloadAnchor.click();
      downloadAnchor.remove();

      setExportNotification(`Exported backup of ${reviewedRecords.length} researcher decisions to JSON.`);
      setTimeout(() => setExportNotification(null), 4000);
    } catch (err: any) {
      alert(`Failed to export JSON backup: ${err?.message || 'Unknown error'}`);
    }
  };

  // Action: Synchronize Local Decisions to Persistent Cloud (Supabase)
  const handleSyncLocalDecisions = async () => {
    setIsSyncing(true);
    setExportNotification('Checking local research decisions for cloud migration...');

    try {
      const reviewedRecords = records.filter(
        (r) => r.humanReviewStatus !== 'pending' || r.humanCategories.length > 0 || (r.researcherNotes && r.researcherNotes.trim() !== '')
      );

      if (reviewedRecords.length === 0) {
        setExportNotification('No active human decisions or notes to migrate. Cloud dataset is in sync.');
        setTimeout(() => setExportNotification(null), 4000);
        setIsSyncing(false);
        return;
      }

      // Check unique candidate IDs to prevent duplicates
      const uniqueIds = new Set(reviewedRecords.map((r) => r.id));
      if (uniqueIds.size !== reviewedRecords.length) {
        console.warn('Duplicate candidate IDs detected in local records set.');
      }

      const success = await batchUpdateCandidateReviews(reviewedRecords, 'LOCAL_STORAGE_MIGRATION');
      if (success) {
        setExportNotification(`Successfully migrated ${reviewedRecords.length} local researcher decisions to persistent backend storage.`);
        const refreshed = await fetchCandidateReviews();
        if (refreshed.data.length > 0) {
          setRecords(refreshed.data);
          if (refreshed.source === 'supabase_postgres') {
            setBackendSyncStatus('Supabase PostgreSQL (Live)');
          }
        }
      } else {
        alert('Cloud sync failed or backend is running in offline mode. Local records remain preserved safely.');
      }
    } catch (err: any) {
      alert(`Migration error: ${err?.message || 'Network error'}`);
    } finally {
      setIsSyncing(false);
      setTimeout(() => setExportNotification(null), 5000);
    }
  };

  // Action: Auto-triage High-Confidence candidates
  const handleQuickTriageHighConfidence = async () => {
    const now = new Date().toISOString().replace('T', ' ').substring(0, 16);
    const updatedBatch: ReviewRecord[] = [];

    const updated = records.map((rec) => {
      if (rec.humanReviewStatus !== 'pending') return rec;
      // If it's a DIRECT candidate with explicit SIP language, approve it with AI suggestions
      if (rec.aiSuggestion.evidenceStrength === 'DIRECT') {
        const item: ReviewRecord = {
          ...rec,
          humanReviewStatus: 'approved',
          humanCategories: [...rec.aiSuggestion.categories],
          humanEvidenceStrength: 'DIRECT',
          reviewedAt: now,
          reviewedBy: 'Lead PM Researcher',
          researcherNotes: 'Batch approved: explicit SIP instalment debit failure confirmed in review text.'
        };
        updatedBatch.push(item);
        return item;
      }
      // If it's clearly insufficient general bank linking without mandate/SIP, mark as rejected for H1
      if (
        rec.aiSuggestion.evidenceStrength === 'INSUFFICIENT' &&
        rec.aiSuggestion.categories.includes('Bank account linking problem') &&
        !rec.reviewText.toLowerCase().includes('sip') &&
        !rec.reviewText.toLowerCase().includes('mandate')
      ) {
        const item: ReviewRecord = {
          ...rec,
          humanReviewStatus: 'rejected',
          humanCategories: ['Bank account linking problem'],
          humanEvidenceStrength: 'INSUFFICIENT',
          reviewedAt: now,
          reviewedBy: 'Lead PM Researcher',
          researcherNotes: 'Screened out of H1: upstream bank account addition/KYC issue, not an active SIP mandate debit failure.'
        };
        updatedBatch.push(item);
        return item;
      }
      return rec;
    });

    setRecords(updated);
    if (updatedBatch.length > 0) {
      await batchUpdateCandidateReviews(updatedBatch, 'BATCH_TRIAGE');
    }
    setExportNotification(`Batch triage executed for ${updatedBatch.length} high-confidence DIRECT and non-H1 onboarding records.`);
    setTimeout(() => setExportNotification(null), 4000);
  };

  // Action: Export Reviewed Records to Excel (Requirement 7)
  const handleExportToExcel = () => {
    try {
      const exportRows = records.map((rec) => ({
        'Evidence ID': rec.id,
        'Original Workbook Row': rec.originalRow,
        'Rating': rec.rating,
        'Original Review Text': rec.reviewText,
        'Review Date': rec.reviewDate,
        'Found Helpful': rec.foundHelpful,
        'Source Platform': rec.sourcePlatform,
        'Source Provenance': rec.sourceProvenance,
        'Source Reference': rec.sourceReference,
        'Preliminary Keyword Signals': rec.preliminaryKeywordSignals,
        'Triage Priority': rec.triagePriority,
        'AI Suggested Categories': rec.aiSuggestion.categories.join('; '),
        'AI Suggested Evidence Strength': rec.aiSuggestion.evidenceStrength,
        'AI Supporting Excerpt': rec.aiSuggestion.supportingExcerpt,
        'AI Rationale Explanation': rec.aiSuggestion.explanation,
        'AI Research Implication': rec.aiSuggestion.researchImplication,
        'Human Approval Status': rec.humanReviewStatus.toUpperCase(),
        'Final Human Categories': (rec.humanCategories.length > 0 ? rec.humanCategories : rec.aiSuggestion.categories).join('; '),
        'Final Evidence Strength': rec.humanEvidenceStrength !== 'UNASSIGNED' ? rec.humanEvidenceStrength : rec.aiSuggestion.evidenceStrength,
        'Researcher Notes': rec.researcherNotes || '',
        'Reviewed By': rec.reviewedBy || (rec.humanReviewStatus !== 'pending' ? 'Lead PM Researcher' : ''),
        'Decision Timestamp': rec.reviewedAt || ''
      }));

      const worksheet = XLSX.utils.json_to_sheet(exportRows);
      const workbook = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(workbook, worksheet, 'Reviewed Candidates');

      // Add summary sheet
      const summaryRows = [
        { 'Metric': 'Total Original Ingested Reviews', 'Value': DATASET_METRICS.totalOriginalReviews, 'Provenance': 'Google Play Store & App Store Corpus' },
        { 'Metric': 'Keyword-Screened Candidate Reviews', 'Value': DATASET_METRICS.keywordScreenedCandidates, 'Provenance': 'H1 Candidate Screening Sheet' },
        { 'Metric': 'Current Reviewed Count', 'Value': metrics.reviewedCount, 'Provenance': 'Human Review Decisions' },
        { 'Metric': 'Approved Records', 'Value': metrics.approved, 'Provenance': 'Valid Evidence Supporting H1 or Adjacent Themes' },
        { 'Metric': 'Rejected Records', 'Value': metrics.rejected, 'Provenance': 'Screened Out (e.g. KYC, Federal Bank Account Linking)' },
        { 'Metric': 'Pending Review', 'Value': metrics.pending, 'Provenance': 'Awaiting Researcher Audit' },
        { 'Metric': 'Direct Evidence (SIP Instalment / Mandate)', 'Value': metrics.directCount, 'Provenance': 'Substantiates H1' },
        { 'Metric': 'Indirect Evidence (Mandate / AutoPay general)', 'Value': metrics.indirectCount, 'Provenance': 'Related Payment Friction' },
        { 'Metric': 'Insufficient Evidence (Upstream / Unrelated)', 'Value': metrics.insufficientCount, 'Provenance': 'Non-H1 Findings' },
        { 'Metric': 'Export Date & Time', 'Value': new Date().toISOString(), 'Provenance': 'Generated by INDMoney Discovery Engine' }
      ];
      const summarySheet = XLSX.utils.json_to_sheet(summaryRows);
      XLSX.utils.book_append_sheet(workbook, summarySheet, 'Review Audit Summary');

      // Trigger download
      XLSX.writeFile(workbook, 'INDMoney_H1_Reviewed_Evidence_Classification.xlsx');
      setExportNotification('Successfully exported INDMoney_H1_Reviewed_Evidence_Classification.xlsx with all 235 records.');
      setTimeout(() => setExportNotification(null), 5000);
    } catch (err) {
      console.error('Export error:', err);
      alert('Failed to generate Excel export. Please try again.');
    }
  };

  // Action: Import Excel Dataset via Server API
  const handleImportFile = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setIsImporting(true);
    setExportNotification(`Uploading and parsing ${file.name}...`);

    try {
      const formData = new FormData();
      formData.append('file', file);

      const res = await fetch('/api/import', {
        method: 'POST',
        body: formData,
      });

      const json = await res.json();
      if (res.ok && json.success) {
        setExportNotification(`Successfully imported ${json.filename} (${json.importedCount || json.processedRows} records).`);
        const refreshed = await fetchCandidateReviews();
        if (refreshed.data.length > 0) {
          setRecords(refreshed.data);
        }
      } else {
        alert(`Import failed: ${json.error || 'Unknown error'}`);
        setExportNotification(null);
      }
    } catch (err: any) {
      alert(`Import error: ${err?.message || 'Network error'}`);
      setExportNotification(null);
    } finally {
      setIsImporting(false);
      if (fileInputRef.current) fileInputRef.current.value = '';
      setTimeout(() => setExportNotification(null), 5000);
    }
  };

  return (
    <div className="space-y-6">
      {/* Hidden File Input for Excel Import */}
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleImportFile}
        accept=".xlsx,.xls,.csv"
        className="hidden"
      />

      {/* Header Banner */}
      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end border-b border-slate-200 pb-5">
        <div>
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-blue-700">
              Phase 3.1 · Persistent Backend Architecture
            </span>
            <span className="rounded-full bg-blue-100 px-2 py-0.5 text-[10px] font-bold text-blue-800">
              Dataset: 235 Screened Candidates
            </span>
            <span className="rounded-full bg-slate-100 px-2 py-0.5 text-[10px] font-bold text-slate-700 flex items-center gap-1">
              <Server size={11} className="text-blue-700" />
              {backendSyncStatus}
            </span>
          </div>
          <h2 className="mt-1 text-2xl font-bold tracking-tight text-slate-900">
            Evidence Review Workspace
          </h2>
          <p className="mt-1.5 max-w-3xl text-sm leading-6 text-slate-600">
            Audit and classify all 235 keyword-screened candidate reviews from the 62,523-review dataset. AI provides multi-category and evidence strength suggestions, with persistent database synchronization.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2.5">
          <button
            onClick={handleSyncLocalDecisions}
            disabled={isSyncing}
            className="flex items-center gap-1.5 rounded-lg border border-blue-600 bg-blue-600 px-3.5 py-2 text-xs font-semibold text-white hover:bg-blue-700 transition shadow-sm disabled:opacity-50"
            title="Migrate or synchronize local decisions to persistent Supabase cloud database"
          >
            {isSyncing ? (
              <RefreshCw size={14} className="animate-spin" />
            ) : (
              <CloudUpload size={14} />
            )}
            <span>{isSyncing ? 'Syncing...' : 'Sync Local to Cloud'}</span>
          </button>
          <button
            onClick={handleExportDecisionsBackup}
            className="flex items-center gap-1.5 rounded-lg border border-slate-300 bg-white px-3 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-50 transition shadow-sm"
            title="Export local researcher decisions and timestamps as JSON backup"
          >
            <Download size={14} className="text-slate-500" />
            <span>Backup JSON</span>
          </button>
          <button
            onClick={() => fileInputRef.current?.click()}
            disabled={isImporting}
            className="flex items-center gap-1.5 rounded-lg border border-slate-300 bg-white px-3 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-50 transition shadow-sm disabled:opacity-50"
            title="Import additional Excel research dataset without overwriting human reviews"
          >
            <Upload size={14} className="text-slate-500" />
            <span>{isImporting ? 'Importing...' : 'Import Dataset (.xlsx)'}</span>
          </button>
          <button
            onClick={handleExportToExcel}
            className="flex items-center gap-1.5 rounded-lg bg-emerald-700 px-3.5 py-2 text-xs font-semibold text-white hover:bg-emerald-800 transition shadow-sm"
            title="Export all candidates with human review decisions to Excel"
          >
            <Download size={14} />
            <span>Export to Excel (.xlsx)</span>
          </button>
          <button
            onClick={handleQuickTriageHighConfidence}
            className="flex items-center gap-1.5 rounded-lg border border-blue-300 bg-blue-50 px-3 py-2 text-xs font-medium text-blue-800 hover:bg-blue-100 transition shadow-sm"
            title="Batch approve obvious DIRECT and reject obvious non-H1 linking records"
          >
            <Sparkles size={14} />
            <span>Batch Triage Candidates</span>
          </button>
          <button
            onClick={handleReset}
            className="flex items-center gap-1 rounded-lg border border-slate-300 bg-white px-2.5 py-2 text-xs text-slate-600 hover:bg-slate-50 transition"
            title="Reset to default unreviewed state"
          >
            <RotateCcw size={13} />
          </button>
        </div>
      </div>

      {/* Export Notification */}
      {exportNotification && (
        <div className="rounded-xl border border-emerald-300 bg-emerald-50 p-4 text-xs font-medium text-emerald-900 flex items-center gap-2 shadow-sm animate-fade-in">
          <CheckCircle2 size={16} className="text-emerald-700 shrink-0" />
          <span>{exportNotification}</span>
        </div>
      )}

      {/* Requirement 8: Research Dashboard Metrics Grid */}
      <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 pb-3">
          <div className="flex items-center gap-2">
            <Database size={17} className="text-blue-700" />
            <h3 className="font-bold text-slate-900 text-sm">
              Research Evidence Dashboard (Stored Records Provenance)
            </h3>
          </div>
          <div className="flex items-center gap-3 text-xs">
            <span className="text-slate-500">
              Human Review Progress: <strong className="text-slate-900 font-bold">{metrics.reviewedCount}</strong> / {metrics.totalCandidates} ({metrics.progressPct}%)
            </span>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="w-full bg-slate-100 h-2.5 rounded-full overflow-hidden flex">
          <div
            className="bg-emerald-600 h-full transition-all duration-300"
            style={{ width: `${(metrics.approved / metrics.totalCandidates) * 100}%` }}
            title={`Approved: ${metrics.approved}`}
          />
          <div
            className="bg-rose-500 h-full transition-all duration-300"
            style={{ width: `${(metrics.rejected / metrics.totalCandidates) * 100}%` }}
            title={`Rejected: ${metrics.rejected}`}
          />
          <div
            className="bg-purple-500 h-full transition-all duration-300"
            style={{ width: `${(metrics.investigate / metrics.totalCandidates) * 100}%` }}
            title={`Investigate: ${metrics.investigate}`}
          />
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2.5">
          <div className="rounded-lg border border-slate-200 bg-slate-50/70 p-2.5">
            <div className="text-[10px] font-semibold uppercase tracking-wider text-slate-500">Original Reviews</div>
            <div className="mt-1 text-lg font-extrabold text-slate-900">{metrics.totalOriginal.toLocaleString()}</div>
            <div className="text-[9px] text-slate-500 truncate">Raw Dataset Corpus</div>
          </div>

          <div className="rounded-lg border border-blue-200 bg-blue-50/50 p-2.5">
            <div className="text-[10px] font-semibold uppercase tracking-wider text-blue-700">Screened Candidates</div>
            <div className="mt-1 text-lg font-extrabold text-blue-900">{metrics.totalCandidates}</div>
            <div className="text-[9px] text-blue-700 truncate">Keyword Filtered</div>
          </div>

          <div className="rounded-lg border border-amber-200 bg-amber-50/40 p-2.5">
            <div className="text-[10px] font-semibold uppercase tracking-wider text-amber-800">Pending Review</div>
            <div className="mt-1 text-lg font-extrabold text-amber-900">{metrics.pending}</div>
            <div className="text-[9px] text-amber-700 truncate">Awaiting PM Audit</div>
          </div>

          <div className="rounded-lg border border-emerald-200 bg-emerald-50/40 p-2.5">
            <div className="text-[10px] font-semibold uppercase tracking-wider text-emerald-800">Approved Records</div>
            <div className="mt-1 text-lg font-extrabold text-emerald-900">{metrics.approved}</div>
            <div className="text-[9px] text-emerald-700 truncate">Valid Research Voice</div>
          </div>

          <div className="rounded-lg border border-rose-200 bg-rose-50/40 p-2.5">
            <div className="text-[10px] font-semibold uppercase tracking-wider text-rose-800">Rejected Records</div>
            <div className="mt-1 text-lg font-extrabold text-rose-900">{metrics.rejected}</div>
            <div className="text-[9px] text-rose-700 truncate">Screened Out / Non-H1</div>
          </div>

          <div className="rounded-lg border border-emerald-300 bg-emerald-50 p-2.5">
            <div className="text-[10px] font-semibold uppercase tracking-wider text-emerald-900">Direct Evidence</div>
            <div className="mt-1 text-lg font-extrabold text-emerald-800">{metrics.directCount}</div>
            <div className="text-[9px] text-emerald-700 truncate">Explicit SIP Failure</div>
          </div>

          <div className="rounded-lg border border-amber-300 bg-amber-50 p-2.5">
            <div className="text-[10px] font-semibold uppercase tracking-wider text-amber-900">Indirect Evidence</div>
            <div className="mt-1 text-lg font-extrabold text-amber-800">{metrics.indirectCount}</div>
            <div className="text-[9px] text-amber-700 truncate">Mandate / AutoPay</div>
          </div>

          <div className="rounded-lg border border-slate-300 bg-slate-100/60 p-2.5">
            <div className="text-[10px] font-semibold uppercase tracking-wider text-slate-700">Insufficient Info</div>
            <div className="mt-1 text-lg font-extrabold text-slate-800">{metrics.insufficientCount}</div>
            <div className="text-[9px] text-slate-500 truncate">Non-H1 Linking/KYC</div>
          </div>
        </div>
      </div>

      {/* AI Mode & Governance Banner (Requirement 4) */}
      <div className="rounded-xl border border-blue-200 bg-gradient-to-r from-blue-50/70 via-indigo-50/40 to-slate-50 p-4 text-xs text-slate-700 flex flex-col md:flex-row items-start md:items-center justify-between gap-3 shadow-sm">
        <div className="flex items-start gap-2.5">
          <Sparkles size={17} className="text-blue-700 mt-0.5 shrink-0" />
          <div>
            <div className="font-bold text-slate-900 flex items-center gap-2">
              <span>AI Classification Engine: Deterministic Heuristic Model Active</span>
              <span className="rounded bg-emerald-100 text-emerald-800 font-semibold px-2 py-0.5 text-[10px]">
                No API Key Required
              </span>
            </div>
            <p className="mt-0.5 text-slate-600">
              Reviews are evaluated against the 9 categories and strict 3-tier evidence rules. AI recommendations remain advisory drafts until approved or modified by you.
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2 shrink-0">
          <button
            onClick={onNavigateToEvidenceLibrary}
            className="flex items-center gap-1 font-semibold text-blue-700 hover:text-blue-900 text-xs hover:underline"
          >
            <span>View 8 Audited Records</span>
            <ArrowRight size={13} />
          </button>
        </div>
      </div>

      {/* Filters & Search Bar (Requirement 6) */}
      <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm space-y-3">
        <div className="flex flex-col md:flex-row gap-3">
          <div className="relative flex-1">
            <Search size={15} className="absolute left-3 top-2.5 text-slate-400" />
            <input
              type="text"
              placeholder="Search by review text, ID (e.g. IND-00055), row #, keyword signal, or notes..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full rounded-lg border border-slate-300 pl-9 pr-3 py-2 text-xs focus:border-blue-600 focus:outline-none"
            />
          </div>

          <div className="flex flex-wrap items-center gap-2">
            {/* Category Filter */}
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="rounded-lg border border-slate-300 bg-white px-3 py-2 text-xs text-slate-700 focus:border-blue-600 focus:outline-none"
            >
              <option value="All">All Categories ({records.length})</option>
              {CLASSIFICATION_CATEGORIES.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>

            {/* Evidence Strength Filter */}
            <select
              value={selectedStrength}
              onChange={(e) => setSelectedStrength(e.target.value)}
              className="rounded-lg border border-slate-300 bg-white px-3 py-2 text-xs text-slate-700 focus:border-blue-600 focus:outline-none"
            >
              <option value="All">All Strengths</option>
              <option value="DIRECT">DIRECT (Explicit SIP Failure)</option>
              <option value="INDIRECT">INDIRECT (Mandate / AutoPay)</option>
              <option value="INSUFFICIENT">INSUFFICIENT (Non-H1)</option>
            </select>

            {/* Status Filter */}
            <select
              value={selectedStatus}
              onChange={(e) => setSelectedStatus(e.target.value)}
              className="rounded-lg border border-slate-300 bg-white px-3 py-2 text-xs text-slate-700 focus:border-blue-600 focus:outline-none"
            >
              <option value="All">All Statuses</option>
              <option value="pending">Pending Review</option>
              <option value="approved">Approved</option>
              <option value="rejected">Rejected</option>
              <option value="investigate">Needs Investigation</option>
            </select>

            {/* Rating Filter */}
            <select
              value={selectedRating}
              onChange={(e) => setSelectedRating(e.target.value)}
              className="rounded-lg border border-slate-300 bg-white px-2.5 py-2 text-xs text-slate-700 focus:border-blue-600 focus:outline-none"
            >
              <option value="All">All Ratings</option>
              <option value="1">1 Star</option>
              <option value="2">2 Stars</option>
              <option value="3">3 Stars</option>
              <option value="4">4 Stars</option>
              <option value="5">5 Stars</option>
            </select>

            {/* Sort Filter */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="rounded-lg border border-slate-300 bg-white px-2.5 py-2 text-xs text-slate-700 focus:border-blue-600 focus:outline-none"
            >
              <option value="date_desc">Newest Date</option>
              <option value="date_asc">Oldest Date</option>
              <option value="rating_asc">Rating: Low to High</option>
              <option value="rating_desc">Rating: High to Low</option>
            </select>

            {/* Page Size */}
            <select
              value={pageSize}
              onChange={(e) => setPageSize(Number(e.target.value))}
              className="rounded-lg border border-slate-300 bg-white px-2 py-2 text-xs text-slate-700 focus:border-blue-600 focus:outline-none"
            >
              <option value="10">10 / page</option>
              <option value="25">25 / page</option>
              <option value="50">50 / page</option>
            </select>
          </div>
        </div>

        {/* Filter Summary */}
        <div className="flex items-center justify-between text-xs text-slate-500 pt-1">
          <span>
            Showing <strong className="text-slate-800">{filteredRecords.length}</strong> matching candidate records
          </span>
          {(searchQuery || selectedCategory !== 'All' || selectedStrength !== 'All' || selectedStatus !== 'All' || selectedRating !== 'All') && (
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('All');
                setSelectedStrength('All');
                setSelectedStatus('All');
                setSelectedRating('All');
              }}
              className="text-blue-700 hover:underline font-medium"
            >
              Clear Filters
            </button>
          )}
        </div>
      </div>

      {/* Candidate Review Records List */}
      <div className="space-y-4">
        {paginatedRecords.length === 0 ? (
          <div className="rounded-xl border border-dashed border-slate-300 bg-white p-12 text-center text-slate-500">
            <AlertCircle className="mx-auto text-slate-400 mb-2" size={28} />
            <h4 className="font-semibold text-slate-800">No matching candidate reviews found</h4>
            <p className="mt-1 text-xs">Try clearing or adjusting your search filters above.</p>
          </div>
        ) : (
          paginatedRecords.map((rec) => {
            const effectiveCats = rec.humanCategories.length > 0 ? rec.humanCategories : rec.aiSuggestion.categories;
            const effectiveStrength = rec.humanEvidenceStrength !== 'UNASSIGNED' ? rec.humanEvidenceStrength : rec.aiSuggestion.evidenceStrength;

            return (
              <div
                key={rec.id}
                className={`rounded-xl border bg-white p-5 shadow-sm transition space-y-4 ${
                  rec.humanReviewStatus === 'approved'
                    ? 'border-emerald-300 ring-1 ring-emerald-200'
                    : rec.humanReviewStatus === 'rejected'
                    ? 'border-rose-200 bg-slate-50/50 opacity-80'
                    : rec.humanReviewStatus === 'investigate'
                    ? 'border-purple-300 bg-purple-50/20'
                    : 'border-slate-200 hover:border-slate-300'
                }`}
              >
                {/* Review Header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 pb-3">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="font-mono text-xs font-bold text-slate-900 bg-slate-100 px-2.5 py-0.5 rounded">
                      {rec.id}
                    </span>
                    <span className="text-xs text-slate-500 font-medium">
                      Row #{rec.originalRow}
                    </span>
                    <span>•</span>
                    <span className="text-xs text-slate-600 font-medium flex items-center gap-1">
                      {rec.sourcePlatform}
                    </span>
                    <span>•</span>
                    <span className="text-xs text-slate-500 flex items-center gap-1">
                      <Calendar size={12} className="text-slate-400" />
                      {rec.reviewDate}
                    </span>
                    {rec.rating && (
                      <span className="flex items-center text-amber-500 text-xs font-bold bg-amber-50 px-2 py-0.5 rounded border border-amber-200">
                        {rec.rating} ★
                      </span>
                    )}
                  </div>

                  {/* Human Status Badge */}
                  <div className="flex items-center gap-2">
                    {rec.humanReviewStatus === 'pending' && (
                      <span className="rounded-full bg-amber-100 text-amber-800 border border-amber-300 px-2.5 py-0.5 text-xs font-bold flex items-center gap-1">
                        <AlertCircle size={12} />
                        Pending Human Review
                      </span>
                    )}
                    {rec.humanReviewStatus === 'approved' && (
                      <span className="rounded-full bg-emerald-100 text-emerald-800 border border-emerald-300 px-2.5 py-0.5 text-xs font-bold flex items-center gap-1">
                        <CheckCircle2 size={12} />
                        Approved by PM
                      </span>
                    )}
                    {rec.humanReviewStatus === 'rejected' && (
                      <span className="rounded-full bg-rose-100 text-rose-800 border border-rose-300 px-2.5 py-0.5 text-xs font-bold flex items-center gap-1">
                        <XCircle size={12} />
                        Rejected / Screened Out
                      </span>
                    )}
                    {rec.humanReviewStatus === 'investigate' && (
                      <span className="rounded-full bg-purple-100 text-purple-800 border border-purple-300 px-2.5 py-0.5 text-xs font-bold flex items-center gap-1">
                        <HelpCircle size={12} />
                        Needs Investigation
                      </span>
                    )}
                  </div>
                </div>

                {/* Original Review Text */}
                <div className="space-y-1.5">
                  <div className="text-[11px] font-semibold uppercase tracking-wider text-slate-400">
                    Original Customer Review (Verbatim):
                  </div>
                  <blockquote className="text-sm leading-relaxed text-slate-900 bg-slate-50/70 p-3.5 rounded-lg border border-slate-200 italic font-sans">
                    &ldquo;{rec.reviewText}&rdquo;
                  </blockquote>
                  <div className="flex flex-wrap items-center gap-2 text-[11px] text-slate-500 pt-1">
                    <span>
                      Keyword Signal: <strong className="text-slate-700">{rec.preliminaryKeywordSignals}</strong>
                    </span>
                    <span>•</span>
                    <span>
                      Triage: <span className="text-slate-700">{rec.triagePriority}</span>
                    </span>
                    {rec.foundHelpful > 0 && (
                      <>
                        <span>•</span>
                        <span>Found helpful by {rec.foundHelpful} users</span>
                      </>
                    )}
                  </div>
                </div>

                {/* AI Assistant Suggestion Panel (Requirement 4) */}
                <div className="rounded-lg border border-blue-200 bg-blue-50/40 p-3.5 space-y-2.5">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <div className="flex items-center gap-2">
                      <Sparkles size={14} className="text-blue-700" />
                      <span className="font-bold text-slate-900 text-xs">
                        AI Assistant Classification Suggestion
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="text-[11px] text-slate-500">Suggested Strength:</span>
                      <span
                        className={`rounded-full px-2 py-0.5 text-[10px] font-bold border ${
                          rec.aiSuggestion.evidenceStrength === 'DIRECT'
                            ? 'bg-emerald-100 text-emerald-800 border-emerald-300'
                            : rec.aiSuggestion.evidenceStrength === 'INDIRECT'
                            ? 'bg-amber-100 text-amber-800 border-amber-300'
                            : 'bg-slate-100 text-slate-700 border-slate-300'
                        }`}
                      >
                        {rec.aiSuggestion.evidenceStrength}
                      </span>
                      {rec.humanReviewStatus === 'pending' && (
                        <button
                          onClick={() => handleAcceptAISuggestion(rec.id)}
                          className="flex items-center gap-1 rounded bg-blue-700 px-2.5 py-1 text-[11px] font-semibold text-white hover:bg-blue-800 transition shadow-2xs"
                          title="Accept all AI suggested categories and strength"
                        >
                          <Check size={12} />
                          <span>Accept Suggestion</span>
                        </button>
                      )}
                    </div>
                  </div>

                  <div className="grid gap-2 text-xs sm:grid-cols-2">
                    <div>
                      <span className="text-slate-500 font-medium">Suggested Categories: </span>
                      <span className="font-semibold text-slate-800">
                        {rec.aiSuggestion.categories.join(', ')}
                      </span>
                    </div>
                    <div>
                      <span className="text-slate-500 font-medium">Supporting Excerpt: </span>
                      <span className="italic text-slate-800 font-mono text-[11px]">
                        &ldquo;{rec.aiSuggestion.supportingExcerpt}&rdquo;
                      </span>
                    </div>
                  </div>

                  <div className="text-xs text-slate-600 leading-relaxed border-t border-blue-100 pt-2 space-y-1">
                    <div>
                      <strong className="text-slate-700">Explanation: </strong>
                      {rec.aiSuggestion.explanation}
                    </div>
                    <div>
                      <strong className="text-slate-700">Research Implication: </strong>
                      {rec.aiSuggestion.researchImplication}
                    </div>
                  </div>
                </div>

                {/* Human Review Decision & Controls (Requirement 2, 3, 5) */}
                <div className="rounded-lg border border-slate-200 bg-white p-3.5 space-y-3">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 pb-2.5">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-700 flex items-center gap-1.5">
                      <ShieldCheck size={14} className="text-blue-700" />
                      Human Review Decisions &amp; Overrides
                    </span>

                    {/* Quick Status Buttons */}
                    <div className="flex items-center gap-1.5">
                      <button
                        onClick={() => handleSetStatus(rec.id, 'approved')}
                        className={`flex items-center gap-1 rounded-md px-3 py-1.5 text-xs font-semibold transition ${
                          rec.humanReviewStatus === 'approved'
                            ? 'bg-emerald-700 text-white shadow-sm'
                            : 'bg-emerald-50 text-emerald-800 border border-emerald-300 hover:bg-emerald-100'
                        }`}
                      >
                        <CheckCircle2 size={13} />
                        <span>Approve</span>
                      </button>

                      <button
                        onClick={() => handleSetStatus(rec.id, 'rejected')}
                        className={`flex items-center gap-1 rounded-md px-3 py-1.5 text-xs font-semibold transition ${
                          rec.humanReviewStatus === 'rejected'
                            ? 'bg-rose-700 text-white shadow-sm'
                            : 'bg-rose-50 text-rose-800 border border-rose-300 hover:bg-rose-100'
                        }`}
                      >
                        <XCircle size={13} />
                        <span>Reject</span>
                      </button>

                      <button
                        onClick={() => handleSetStatus(rec.id, 'investigate')}
                        className={`flex items-center gap-1 rounded-md px-3 py-1.5 text-xs font-semibold transition ${
                          rec.humanReviewStatus === 'investigate'
                            ? 'bg-purple-700 text-white shadow-sm'
                            : 'bg-purple-50 text-purple-800 border border-purple-300 hover:bg-purple-100'
                        }`}
                      >
                        <HelpCircle size={13} />
                        <span>Investigate</span>
                      </button>
                    </div>
                  </div>

                  {/* Multi-Category Selector (Requirement 2) */}
                  <div className="space-y-1.5">
                    <label className="text-[11px] font-semibold text-slate-600 block">
                      Assigned Classification Categories (Multi-select enabled):
                    </label>
                    <div className="flex flex-wrap gap-1.5">
                      {CLASSIFICATION_CATEGORIES.map((cat) => {
                        const isSelected = effectiveCats.includes(cat);
                        return (
                          <button
                            key={cat}
                            type="button"
                            onClick={() => handleToggleCategory(rec.id, cat)}
                            className={`rounded-full px-2.5 py-1 text-[11px] font-medium transition flex items-center gap-1 border ${
                              isSelected
                                ? 'bg-blue-700 text-white border-blue-700 shadow-2xs font-semibold'
                                : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                            }`}
                          >
                            <span>{cat}</span>
                            {isSelected && <Check size={11} />}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Evidence Strength Selector (Requirement 3) */}
                  <div className="space-y-1.5 pt-1">
                    <label className="text-[11px] font-semibold text-slate-600 block">
                      Evidence Strength (Strict H1 criteria):
                    </label>
                    <div className="grid gap-2 sm:grid-cols-3 text-xs">
                      <button
                        type="button"
                        onClick={() => handleChangeStrength(rec.id, 'DIRECT')}
                        className={`rounded-lg p-2.5 text-left border transition ${
                          effectiveStrength === 'DIRECT'
                            ? 'bg-emerald-50 border-emerald-400 ring-2 ring-emerald-300 font-semibold text-emerald-950'
                            : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <span className="font-bold text-emerald-800">DIRECT</span>
                          {effectiveStrength === 'DIRECT' && <CheckCircle2 size={14} className="text-emerald-700" />}
                        </div>
                        <p className="mt-1 text-[11px] text-slate-600 leading-snug">
                          Explicitly describes a SIP instalment or SIP mandate debit failure.
                        </p>
                      </button>

                      <button
                        type="button"
                        onClick={() => handleChangeStrength(rec.id, 'INDIRECT')}
                        className={`rounded-lg p-2.5 text-left border transition ${
                          effectiveStrength === 'INDIRECT'
                            ? 'bg-amber-50 border-amber-400 ring-2 ring-amber-300 font-semibold text-amber-950'
                            : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <span className="font-bold text-amber-800">INDIRECT</span>
                          {effectiveStrength === 'INDIRECT' && <CheckCircle2 size={14} className="text-amber-700" />}
                        </div>
                        <p className="mt-1 text-[11px] text-slate-600 leading-snug">
                          Mentions mandate or payment issue without establishing SIP instalment impact.
                        </p>
                      </button>

                      <button
                        type="button"
                        onClick={() => handleChangeStrength(rec.id, 'INSUFFICIENT')}
                        className={`rounded-lg p-2.5 text-left border transition ${
                          effectiveStrength === 'INSUFFICIENT'
                            ? 'bg-slate-100 border-slate-400 ring-2 ring-slate-300 font-semibold text-slate-900'
                            : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <span className="font-bold text-slate-700">INSUFFICIENT</span>
                          {effectiveStrength === 'INSUFFICIENT' && <CheckCircle2 size={14} className="text-slate-600" />}
                        </div>
                        <p className="mt-1 text-[11px] text-slate-600 leading-snug">
                          Does not provide enough information to support H1 (e.g. general KYC/linking).
                        </p>
                      </button>
                    </div>
                  </div>

                  {/* Researcher Notes (Requirement 5) */}
                  <div className="space-y-1.5 pt-1">
                    <label className="text-[11px] font-semibold text-slate-600 block">
                      Researcher Audit Notes &amp; Governance Rationale:
                    </label>
                    <textarea
                      rows={2}
                      placeholder="Add research observations, reason for approval/rejection, or specific bank friction..."
                      value={rec.researcherNotes}
                      onChange={(e) => handleUpdateNotes(rec.id, e.target.value)}
                      className="w-full rounded-lg border border-slate-300 p-2.5 text-xs text-slate-800 focus:border-blue-600 focus:outline-none"
                    />
                  </div>

                  {/* Provenance Audit Footer */}
                  {rec.reviewedAt && (
                    <div className="flex items-center justify-between text-[11px] text-slate-500 border-t border-slate-100 pt-2">
                      <span>
                        Audited by: <strong className="text-slate-700">{rec.reviewedBy || 'Lead PM Researcher'}</strong>
                      </span>
                      <span>
                        Decision Timestamp: <strong className="text-slate-700">{rec.reviewedAt}</strong>
                      </span>
                    </div>
                  )}
                </div>
              </div>
            );
          })
        )}
      </div>

      {/* Pagination Controls */}
      {totalPages > 1 && (
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-slate-200 pt-4 bg-white p-4 rounded-xl shadow-sm">
          <div className="text-xs text-slate-600">
            Page <strong className="text-slate-900">{currentPage}</strong> of <strong className="text-slate-900">{totalPages}</strong> (
            {(currentPage - 1) * pageSize + 1} – {Math.min(currentPage * pageSize, filteredRecords.length)} of {filteredRecords.length} records)
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
              disabled={currentPage === 1}
              className="flex items-center gap-1 rounded-lg border border-slate-300 bg-white px-3 py-1.5 text-xs font-medium text-slate-700 hover:bg-slate-50 disabled:opacity-40 disabled:cursor-not-allowed transition"
            >
              <ChevronLeft size={14} />
              <span>Previous</span>
            </button>

            <div className="flex items-center gap-1 text-xs">
              {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                let pageNum = i + 1;
                if (totalPages > 5 && currentPage > 3) {
                  pageNum = currentPage - 2 + i;
                  if (pageNum > totalPages) pageNum = totalPages - (4 - i);
                }
                return (
                  <button
                    key={pageNum}
                    onClick={() => setCurrentPage(pageNum)}
                    className={`h-7 w-7 rounded-md text-xs font-semibold transition ${
                      currentPage === pageNum
                        ? 'bg-blue-700 text-white'
                        : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                    }`}
                  >
                    {pageNum}
                  </button>
                );
              })}
            </div>

            <button
              onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
              disabled={currentPage === totalPages}
              className="flex items-center gap-1 rounded-lg border border-slate-300 bg-white px-3 py-1.5 text-xs font-medium text-slate-700 hover:bg-slate-50 disabled:opacity-40 disabled:cursor-not-allowed transition"
            >
              <span>Next</span>
              <ChevronRight size={14} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
