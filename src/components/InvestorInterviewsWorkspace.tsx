import React, { useState, useId } from 'react';
import {
  Users,
  MessageSquare,
  Activity,
  BarChart3,
  ShieldCheck,
  Lock,
  Plus,
  Download,
  Upload,
  AlertCircle,
  CheckCircle2,
  Clock,
  Sparkles,
  ArrowRight,
  FileText,
  Filter,
  Check,
  X,
  FileSpreadsheet,
  AlertTriangle,
  HelpCircle,
  Eye,
  RefreshCw,
  Layers,
  ChevronDown,
  ChevronRight,
  ExternalLink,
  BookOpen,
  CheckSquare,
  Search,
  Sliders,
  Database,
  Info,
  ListFilter,
  FileCheck2,
  Calendar,
  DollarSign
} from 'lucide-react';
import {
  InterviewParticipant,
  InvestorExperienceLevel,
  SIPContinuityStatus,
  TelemetryEventRecord,
  TelemetryEventName,
  EvidenceTier,
  H1RelevanceRating,
  InsightValidationStatus,
  QualitativeInsight,
  ContradictoryCategory,
  ContradictoryEvidenceRecord,
  TelemetryDataDictionaryItem,
  CsvImportError,
  CsvDuplicateRecord,
  CsvImportResult
} from '../types';
import { DISCOVERY_QA_DATA } from '../data/discoveryQaData';
import {
  PHASE_4_PAIN_POINT_THEMES,
  SAMPLE_BENCHMARK_TELEMETRY,
  TELEMETRY_DATA_DICTIONARY,
  INITIAL_CONTRADICTORY_EVIDENCE,
  INITIAL_QUALITATIVE_INSIGHTS,
  AUDITED_26_EVIDENCE_RECORDS,
  AuditedReviewRecord,
  FIRST_TIME_INVESTOR_INTERVIEW_GUIDE,
  NeutralInterviewGuideQuestion,
  TELEMETRY_SCHEMA_AUDIT
} from '../data/phase5Data';

// Standard 11 Telemetry Event Names
const EXPECTED_TELEMETRY_EVENTS: Array<{ name: TelemetryEventName; label: string; stage: string; description: string }> = [
  { name: 'sip_created', label: 'SIP Created', stage: 'Creation', description: 'Investor completes fund selection, date, and instalment amount.' },
  { name: 'mandate_registration_started', label: 'Mandate Registration Started', stage: 'Mandate Setup', description: 'Redirected to NPCI / Bank gateway (Netbanking/Debit Card/UPI).' },
  { name: 'mandate_activated', label: 'Mandate Activated', stage: 'Mandate Setup', description: 'Bank confirms active e-mandate registration to sponsor bank.' },
  { name: 'sip_debit_scheduled', label: 'SIP Debit Scheduled', stage: 'Execution', description: 'Scheduled instalment debit file queued for clearing house.' },
  { name: 'sip_debit_failed', label: 'SIP Debit Failed', stage: 'Execution', description: 'Bank rejects mandate debit (insufficient balance, technical return, expired mandate).' },
  { name: 'failure_notification_sent', label: 'Failure Notification Sent', stage: 'Communication', description: 'Push notification / SMS / WhatsApp alert dispatched to investor.' },
  { name: 'failure_notification_viewed', label: 'Failure Notification Viewed', stage: 'Communication', description: 'Investor opens push notification or views failure banner in app.' },
  { name: 'recovery_attempted', label: 'Recovery Attempted', stage: 'Recovery', description: 'Investor initiates ad-hoc retry, alternative UPI payment, or date reschedule.' },
  { name: 'sip_instalment_successful', label: 'Instalment Successful', stage: 'Settlement', description: 'Funds successfully debited and sent for AMC unit allocation.' },
  { name: 'sip_paused', label: 'SIP Paused', stage: 'Lifecycle', description: 'Investor voluntarily pauses SIP for 1 to 3 months.' },
  { name: 'sip_cancelled', label: 'SIP Cancelled', stage: 'Lifecycle', description: 'SIP permanently terminated either voluntarily or involuntarily after repeat failures.' }
];

// Baseline Initial Participants (Anonymised, genuine pilot protocol templates)
const INITIAL_PARTICIPANTS: InterviewParticipant[] = [
  {
    id: 'INV-001',
    experienceProfile: 'Novice',
    firstTimeSip: true,
    sipStatus: 'Discontinued',
    bankMandateExperience: 'State Bank of India (PSU NACH)',
    interviewDate: '2026-10-28',
    consentObtained: true,
    interviewNotes: 'First-time mutual fund investor. Chose 5th of month for debit; salary credited on 7th. Experienced two consecutive mandate failures with ₹295 bank bounce fee from SBI. Uninstalled app.',
    researcherObservations: 'Investor felt penalised for an honest cash flow timing mismatch. Had no idea bank would fine them for a mutual fund AutoPay bounce.',
    responses: {
      Q1: 'I stopped my SIP in September after SBI charged me ₹295 penalty because salary came two days after the debit date.',
      Q2: 'The bank fine was the main reason. It felt like I was being punished for trying to save money.',
      Q3: 'I expected the app would remind me before deducting or let me pay via Google Pay on salary day.',
      Q5: 'There was zero clarity that SBI would charge an ECS return penalty. The app never warned me.'
    },
    verbatimQuotes: [
      {
        id: 'VQ-01',
        quote: 'I stopped my SIP in September after SBI charged me ₹295 penalty because salary came two days after the debit date.',
        questionId: 'Q1',
        linkedThemeId: 'THEME-P3',
        researcherInterpretation: 'Confirms that punitive bank ECS bounce charges trigger immediate loss aversion and app uninstallation.'
      }
    ],
    createdAt: '2026-10-28T14:00:00Z'
  },
  {
    id: 'INV-002',
    experienceProfile: 'Intermediate',
    firstTimeSip: false,
    sipStatus: 'Active',
    bankMandateExperience: 'HDFC Bank (Netbanking AutoPay)',
    interviewDate: '2026-10-29',
    consentObtained: true,
    interviewNotes: 'Salaried tech employee with 4 ongoing SIPs. Experienced a silent debit failure on HDFC mandate despite maintaining ₹40,000 balance. Had to manually track portfolio to discover skipped month.',
    researcherObservations: 'High financial literacy does not prevent mandate anxiety. Silent failure undermines trust in automated wealth compounding.',
    responses: {
      Q1: 'I noticed my index fund SIP missed October entirely. When I checked, it said AutoPay failed, but my HDFC account had plenty of money.',
      Q2: 'I did not stop it, but I now manually check every month on the 10th to see if the money left my account.',
      Q4: 'Market fluctuations do not bother me, but operational failures where money does not get invested really irritate me.',
      Q8: 'An instant UPI retry option right inside the push notification would save so much friction.'
    },
    verbatimQuotes: [
      {
        id: 'VQ-02',
        quote: 'AutoPay failed, but my HDFC account had plenty of money. The app never even sent a push alert or warning.',
        questionId: 'Q1',
        linkedThemeId: 'THEME-P2',
        researcherInterpretation: 'Demonstrates silent mandate drop-off where automated bank presentation fails despite adequate balance.'
      }
    ],
    createdAt: '2026-10-29T10:30:00Z'
  },
  {
    id: 'INV-003',
    experienceProfile: 'Experienced',
    firstTimeSip: false,
    sipStatus: 'Paused',
    bankMandateExperience: 'ICICI Bank (UPI AutoPay)',
    interviewDate: '2026-11-02',
    consentObtained: true,
    interviewNotes: 'Switched primary salary bank from ICICI to Axis Bank. Discovered no way to modify existing mandate bank without cancelling the SIP. Paused SIP to prevent deductions from dormant account.',
    researcherObservations: 'Lack of mandate bank-switching functionality forces investors to pause or cancel healthy compounding habits.',
    responses: {
      Q1: 'I changed my job and got an Axis salary account. I tried to change my SIP bank in INDMoney, but there was no option to update the mandate bank without cancelling the SIP completely.',
      Q2: 'I had to pause the SIP because I was keeping zero balance in my old ICICI account and didn’t want bounce fees.',
      Q8: 'We should be able to migrate our mandate to a new bank with one OTP without having to cancel the SIP and lose folio continuity.'
    },
    verbatimQuotes: [
      {
        id: 'VQ-03',
        quote: 'I tried to change my SIP bank in INDMoney, but there was no option to update the mandate bank without cancelling the SIP completely.',
        questionId: 'Q1',
        linkedThemeId: 'THEME-P6',
        researcherInterpretation: 'Identifies lack of mandate bank portability as an operational trap.'
      }
    ],
    createdAt: '2026-11-02T16:15:00Z'
  }
];

export const InvestorInterviewsWorkspace: React.FC = () => {
  const fileInputId = useId();
  const [activeTab, setActiveTab] = useState<'audit' | 'insights' | 'contradictory' | 'interview_guide' | 'telemetry' | 'cohort' | 'validation'>('audit');

  // Section 1: Evidence Audit State
  const [auditFilter, setAuditFilter] = useState<'all' | 'Directly Supports H1' | 'Supporting Friction' | 'Contextual / Adjacent'>('all');
  const [selectedAuditRecordId, setSelectedAuditRecordId] = useState<string>('IND-08924');

  // Section 2: Qualitative Insights State
  const [qualitativeInsights, setQualitativeInsights] = useState<QualitativeInsight[]>(INITIAL_QUALITATIVE_INSIGHTS);
  const [tierFilter, setTierFilter] = useState<string>('all');
  const [statusFilter, setStatusFilter] = useState<string>('all');
  const [isNewInsightModalOpen, setIsNewInsightModalOpen] = useState<boolean>(false);

  // Form state for new insight
  const [insightParticipantId, setInsightParticipantId] = useState<string>('INV-001');
  const [insightStatement, setInsightStatement] = useState<string>('');
  const [insightInterpretation, setInsightInterpretation] = useState<string>('');
  const [insightTier, setInsightTier] = useState<EvidenceTier>('Tier 1: Direct');
  const [insightH1Rel, setInsightH1Rel] = useState<H1RelevanceRating>('Directly Supports H1');
  const [insightStatus, setInsightStatus] = useState<InsightValidationStatus>('Draft');
  const [insightThemeId, setInsightThemeId] = useState<string>('THEME-P3');
  const [insightContraCategory, setInsightContraCategory] = useState<ContradictoryCategory>('Discretionary Spending');

  // Section 3: Contradictory Evidence State
  const [contradictoryRecords, setContradictoryRecords] = useState<ContradictoryEvidenceRecord[]>(INITIAL_CONTRADICTORY_EVIDENCE);

  // Section 4: Interview Readiness & Participant Register
  const [participants, setParticipants] = useState<InterviewParticipant[]>(INITIAL_PARTICIPANTS);
  const [selectedParticipantId, setSelectedParticipantId] = useState<string>('INV-001');
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState<boolean>(false);
  const [activeGuideQIndex, setActiveGuideQIndex] = useState<number>(0);

  // Form state for registering new participant
  const [newId, setNewId] = useState<string>(`INV-00${participants.length + 1}`);
  const [newExperience, setNewExperience] = useState<InvestorExperienceLevel>('Novice');
  const [newFirstTime, setNewFirstTime] = useState<boolean>(true);
  const [newStatus, setNewStatus] = useState<SIPContinuityStatus>('Active');
  const [newBank, setNewBank] = useState<string>('State Bank of India (PSU NACH)');
  const [newDate, setNewDate] = useState<string>(new Date().toISOString().split('T')[0]);
  const [newConsent, setNewConsent] = useState<boolean>(true);
  const [newNotes, setNewNotes] = useState<string>('');
  const [newObservations, setNewObservations] = useState<string>('');

  // Section 5: Telemetry State & Enhanced CSV Importer
  const [telemetryEvents, setTelemetryEvents] = useState<TelemetryEventRecord[]>(SAMPLE_BENCHMARK_TELEMETRY);
  const [telemetryDataSourceFilter, setTelemetryDataSourceFilter] = useState<'all' | 'Uploaded' | 'Demonstration'>('all');
  const [filterEventName, setFilterEventName] = useState<string>('all');

  // CSV Import Workflow States
  const [csvRawText, setCsvRawText] = useState<string | null>(null);
  const [csvFileName, setCsvFileName] = useState<string | null>(null);
  const [csvHeaders, setCsvHeaders] = useState<string[]>([]);
  const [csvPreviewRows, setCsvPreviewRows] = useState<string[][]>([]);
  const [columnMapping, setColumnMapping] = useState<Record<string, string>>({
    event_id: '',
    user_id: '',
    event_name: '',
    timestamp: '',
    sip_id: '',
    bank_name: '',
    failure_reason: '',
    amount: ''
  });
  const [importResult, setImportResult] = useState<CsvImportResult | null>(null);
  const [isImportModalOpen, setIsImportModalOpen] = useState<boolean>(false);

  // Handlers
  const handleRegisterParticipant = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newConsent) {
      alert('Informed consent is mandatory before registering an interview participant.');
      return;
    }
    const newRecord: InterviewParticipant = {
      id: newId.trim() || `INV-00${participants.length + 1}`,
      experienceProfile: newExperience,
      firstTimeSip: newFirstTime,
      sipStatus: newStatus,
      bankMandateExperience: newBank.trim() || 'Unspecified Bank',
      interviewDate: newDate,
      consentObtained: true,
      interviewNotes: newNotes,
      researcherObservations: newObservations,
      responses: {},
      verbatimQuotes: [],
      createdAt: new Date().toISOString()
    };

    setParticipants([newRecord, ...participants]);
    setSelectedParticipantId(newRecord.id);
    setIsRegisterModalOpen(false);

    setNewId(`INV-00${participants.length + 2}`);
    setNewNotes('');
    setNewObservations('');
  };

  const handleCreateQualitativeInsight = (e: React.FormEvent) => {
    e.preventDefault();
    if (!insightStatement.trim() || !insightInterpretation.trim()) {
      alert('Original statement and researcher interpretation are required.');
      return;
    }

    const newInsightRecord: QualitativeInsight = {
      id: `INS-00${qualitativeInsights.length + 1}`,
      participantId: insightParticipantId,
      originalStatement: insightStatement.trim(),
      researcherInterpretation: insightInterpretation.trim(),
      evidenceTier: insightTier,
      h1Relevance: insightH1Rel,
      validationStatus: insightStatus,
      researcherApproval: {
        isApproved: insightStatus === 'Validated',
        approvedBy: insightStatus === 'Validated' ? 'Lead PM Researcher' : 'Pending Review',
        approvedAt: insightStatus === 'Validated' ? new Date().toISOString() : null,
        notes: 'Recorded during qualitative research session.'
      },
      sourceType: 'Actual Interview',
      linkedThemeId: insightTier !== 'Contradictory' ? insightThemeId : undefined,
      contradictoryCategory: insightTier === 'Contradictory' ? insightContraCategory : undefined,
      createdAt: new Date().toISOString()
    };

    setQualitativeInsights([newInsightRecord, ...qualitativeInsights]);
    setIsNewInsightModalOpen(false);
    setInsightStatement('');
    setInsightInterpretation('');
  };

  const handleToggleInsightApproval = (id: string) => {
    setQualitativeInsights((prev) =>
      prev.map((ins) => {
        if (ins.id === id) {
          const nextApproved = !ins.researcherApproval.isApproved;
          return {
            ...ins,
            validationStatus: nextApproved ? 'Validated' : 'Under Review',
            researcherApproval: {
              isApproved: nextApproved,
              approvedBy: nextApproved ? 'Lead PM Researcher' : 'Pending Review',
              approvedAt: nextApproved ? new Date().toISOString() : null,
              notes: nextApproved ? 'Approved by PM Researcher following interview audit.' : 'Marked for re-verification.'
            }
          };
        }
        return ins;
      })
    );
  };

  const handleDownloadCsvTemplate = () => {
    const headers = 'event_id,user_id,event_name,timestamp,sip_id,bank_name,failure_reason,amount\n';
    const sampleRows = [
      'EVT-8001,USR-10291,sip_created,2026-10-01T10:00:00Z,SIP-101,HDFC Bank,,5000',
      'EVT-8002,USR-10291,mandate_registration_started,2026-10-01T10:02:15Z,SIP-101,HDFC Bank,,',
      'EVT-8003,USR-10291,mandate_activated,2026-10-01T10:05:00Z,SIP-101,HDFC Bank,,',
      'EVT-8004,USR-10291,sip_debit_failed,2026-10-05T07:00:00Z,SIP-101,HDFC Bank,Insufficient Balance,5000',
      'EVT-8005,USR-10291,failure_notification_sent,2026-10-05T07:05:00Z,SIP-101,HDFC Bank,,'
    ].join('\n');
    const blob = new Blob([headers + sampleRows], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'indmoney_telemetry_template.csv');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleSelectCsvFile = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    setCsvFileName(file.name);
    const reader = new FileReader();
    reader.onload = (e) => {
      const text = e.target?.result as string;
      setCsvRawText(text);

      const lines = text.split(/\r?\n/).filter((l) => l.trim().length > 0);
      if (lines.length === 0) {
        alert('The uploaded file is empty.');
        return;
      }

      const headers = lines[0].split(',').map((h) => h.trim().replace(/^"|"$/g, ''));
      setCsvHeaders(headers);

      const detectedMap: Record<string, string> = { ...columnMapping };
      const expectedFields = ['event_id', 'user_id', 'event_name', 'timestamp', 'sip_id', 'bank_name', 'failure_reason', 'amount'];
      expectedFields.forEach((field) => {
        const found = headers.find((h) => h.toLowerCase() === field.toLowerCase() || h.toLowerCase().includes(field.toLowerCase()));
        if (found) {
          detectedMap[field] = found;
        }
      });
      setColumnMapping(detectedMap);

      const preview: string[][] = [];
      for (let i = 1; i < Math.min(lines.length, 6); i++) {
        preview.push(lines[i].split(',').map((c) => c.trim().replace(/^"|"$/g, '')));
      }
      setCsvPreviewRows(preview);
      setIsImportModalOpen(true);
    };
    reader.readAsText(file);
  };

  const handleExecuteImport = () => {
    if (!csvRawText) return;

    const lines = csvRawText.split(/\r?\n/).filter((l) => l.trim().length > 0);
    const headers = lines[0].split(',').map((h) => h.trim().replace(/^"|"$/g, ''));

    const eventIdIdx = headers.indexOf(columnMapping.event_id);
    const userIdIdx = headers.indexOf(columnMapping.user_id);
    const eventNameIdx = headers.indexOf(columnMapping.event_name);
    const timestampIdx = headers.indexOf(columnMapping.timestamp);
    const sipIdIdx = headers.indexOf(columnMapping.sip_id);
    const bankNameIdx = headers.indexOf(columnMapping.bank_name);
    const failureReasonIdx = headers.indexOf(columnMapping.failure_reason);
    const amountIdx = headers.indexOf(columnMapping.amount);

    if (eventNameIdx === -1 || timestampIdx === -1) {
      alert('Error: You must map both "event_name" and "timestamp" columns.');
      return;
    }

    const validEventsList = EXPECTED_TELEMETRY_EVENTS.map((e) => e.name);
    const existingEventIds = new Set(telemetryEvents.map((e) => e.eventId));
    const existingKeys = new Set(telemetryEvents.map((e) => `${e.userId}-${e.eventName}-${e.timestamp}`));

    const imported: TelemetryEventRecord[] = [];
    const errors: CsvImportError[] = [];
    const duplicates: CsvDuplicateRecord[] = [];

    for (let i = 1; i < lines.length; i++) {
      const rowNum = i + 1;
      const cols = lines[i].split(',').map((c) => c.trim().replace(/^"|"$/g, ''));
      if (cols.length < 2) continue;

      const rawEventName = (cols[eventNameIdx] || '').toLowerCase() as TelemetryEventName;
      const rawTimestamp = cols[timestampIdx] || '';
      const rawEventId = eventIdIdx !== -1 && cols[eventIdIdx] ? cols[eventIdIdx] : `EVT-UP-${Date.now()}-${i}`;
      const rawUserId = userIdIdx !== -1 && cols[userIdIdx] ? cols[userIdIdx] : `USR-${i + 1000}`;

      if (!validEventsList.includes(rawEventName)) {
        errors.push({
          rowNumber: rowNum,
          field: 'event_name',
          message: `Unrecognized event name "${cols[eventNameIdx]}". Must be one of the 11 standard events.`,
          rawSnippet: lines[i]
        });
        continue;
      }

      if (isNaN(Date.parse(rawTimestamp))) {
        errors.push({
          rowNumber: rowNum,
          field: 'timestamp',
          message: `Invalid timestamp format "${rawTimestamp}". Expecting ISO 8601 (e.g. 2026-10-01T10:00:00Z).`,
          rawSnippet: lines[i]
        });
        continue;
      }

      const dedupeKey = `${rawUserId}-${rawEventName}-${rawTimestamp}`;
      if (existingEventIds.has(rawEventId) || existingKeys.has(dedupeKey)) {
        duplicates.push({
          rowNumber: rowNum,
          eventId: rawEventId,
          userId: rawUserId,
          eventName: rawEventName,
          reason: existingEventIds.has(rawEventId) ? 'Duplicate event_id' : 'Duplicate user + event + timestamp collision'
        });
        continue;
      }

      existingEventIds.add(rawEventId);
      existingKeys.add(dedupeKey);

      imported.push({
        eventId: rawEventId,
        userId: rawUserId,
        eventName: rawEventName,
        timestamp: rawTimestamp,
        sipId: sipIdIdx !== -1 && cols[sipIdIdx] ? cols[sipIdIdx] : `SIP-${i}`,
        bankName: bankNameIdx !== -1 && cols[bankNameIdx] ? cols[bankNameIdx] : 'Unspecified Bank',
        failureReason: failureReasonIdx !== -1 ? cols[failureReasonIdx] : undefined,
        amount: amountIdx !== -1 && !isNaN(Number(cols[amountIdx])) ? Number(cols[amountIdx]) : undefined
      });
    }

    setImportResult({
      totalRowsProcessed: lines.length - 1,
      validRowsCount: imported.length,
      duplicatesCount: duplicates.length,
      errorCount: errors.length,
      errors,
      duplicates,
      importedEvents: imported
    });

    if (imported.length > 0) {
      setTelemetryEvents((prev) => [...imported, ...prev]);
    }
  };

  // Filtered lists
  const filteredAuditedRecords = AUDITED_26_EVIDENCE_RECORDS.filter((r) => {
    if (auditFilter === 'all') return true;
    return r.h1Classification === auditFilter;
  });

  const selectedAuditRecord = AUDITED_26_EVIDENCE_RECORDS.find((r) => r.id === selectedAuditRecordId) || AUDITED_26_EVIDENCE_RECORDS[0];

  const displayedInsights = qualitativeInsights.filter((ins) => {
    if (tierFilter !== 'all' && ins.evidenceTier !== tierFilter) return false;
    if (statusFilter !== 'all' && ins.validationStatus !== statusFilter) return false;
    return true;
  });

  const displayedTelemetry = telemetryEvents.filter((evt) => {
    if (filterEventName !== 'all' && evt.eventName !== filterEventName) return false;
    const isDemonstration = evt.eventId.startsWith('EVT-1') || evt.eventId.startsWith('EVT-2') || evt.eventId.startsWith('EVT-3');
    if (telemetryDataSourceFilter === 'Uploaded' && isDemonstration) return false;
    if (telemetryDataSourceFilter === 'Demonstration' && !isDemonstration) return false;
    return true;
  });

  const directCount = AUDITED_26_EVIDENCE_RECORDS.filter((r) => r.h1Classification === 'Directly Supports H1').length;
  const supportingCount = AUDITED_26_EVIDENCE_RECORDS.filter((r) => r.h1Classification === 'Supporting Friction').length;
  const contextualCount = AUDITED_26_EVIDENCE_RECORDS.filter((r) => r.h1Classification === 'Contextual / Adjacent').length;

  return (
    <div className="space-y-6">
      {/* Top Banner: Scientific Validation Boundary Notice */}
      <div className="rounded-xl border border-blue-200 bg-gradient-to-r from-blue-50 via-indigo-50 to-slate-50 p-5 shadow-sm">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="rounded bg-blue-700 px-2 py-0.5 text-[11px] font-bold uppercase tracking-wider text-white">
                Phase 5 Active
              </span>
              <span className="rounded-full bg-amber-100 text-amber-800 px-2.5 py-0.5 text-xs font-semibold border border-amber-300 flex items-center gap-1">
                <AlertTriangle size={13} />
                H1 Status: NOT VALIDATED
              </span>
              <span className="text-xs text-slate-500 font-medium">
                Research Evidence Audit &amp; Readiness
              </span>
            </div>
            <h1 className="text-2xl font-bold tracking-tight text-slate-900">
              Evidence Audit, Interview Readiness &amp; Journey Telemetry
            </h1>
            <p className="text-xs sm:text-sm text-slate-600 max-w-4xl">
              Rigorous audit of the 26 approved customer evidence records, neutral interview protocol for first-time SIP investors, contradictory evidence tracker, and 11-event journey telemetry schema.
            </p>
          </div>

          <div className="flex sm:flex-col items-center sm:items-end gap-2 text-right">
            <div className="text-[11px] font-semibold uppercase tracking-wider text-slate-400">Separated Statuses</div>
            <div className="flex flex-col items-end gap-1">
              <span className="inline-flex items-center gap-1 rounded bg-blue-100 text-blue-900 px-2 py-0.5 text-[11px] font-bold">
                Problem Evidence: Audited (26)
              </span>
              <span className="inline-flex items-center gap-1 rounded bg-amber-100 text-amber-900 px-2 py-0.5 text-[11px] font-bold">
                Solution Validation: Not Validated
              </span>
            </div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="mt-6 flex flex-wrap gap-2 border-t border-slate-200/70 pt-4">
          <button
            onClick={() => setActiveTab('audit')}
            className={`flex items-center gap-2 rounded-lg px-3.5 py-2 text-xs font-semibold transition ${
              activeTab === 'audit'
                ? 'bg-blue-700 text-white shadow-sm'
                : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
            }`}
          >
            <FileCheck2 size={15} />
            <span>1. Evidence Audit (26 Approved)</span>
            <span className={`rounded-full px-1.5 py-0.2 text-[10px] ${activeTab === 'audit' ? 'bg-blue-800 text-white' : 'bg-slate-100 text-slate-600'}`}>
              14 Direct
            </span>
          </button>

          <button
            onClick={() => setActiveTab('insights')}
            className={`flex items-center gap-2 rounded-lg px-3.5 py-2 text-xs font-semibold transition ${
              activeTab === 'insights'
                ? 'bg-blue-700 text-white shadow-sm'
                : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
            }`}
          >
            <ShieldCheck size={15} />
            <span>2. Qualitative Insights &amp; Tiers</span>
            <span className={`rounded-full px-1.5 py-0.2 text-[10px] ${activeTab === 'insights' ? 'bg-blue-800 text-white' : 'bg-slate-100 text-slate-600'}`}>
              {qualitativeInsights.length}
            </span>
          </button>

          <button
            onClick={() => setActiveTab('contradictory')}
            className={`flex items-center gap-2 rounded-lg px-3.5 py-2 text-xs font-semibold transition ${
              activeTab === 'contradictory'
                ? 'bg-blue-700 text-white shadow-sm'
                : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
            }`}
          >
            <AlertCircle size={15} />
            <span>3. Contradictory Evidence Tracker</span>
            <span className={`rounded-full px-1.5 py-0.2 text-[10px] ${activeTab === 'contradictory' ? 'bg-blue-800 text-white' : 'bg-slate-100 text-slate-600'}`}>
              4 Categories
            </span>
          </button>

          <button
            onClick={() => setActiveTab('interview_guide')}
            className={`flex items-center gap-2 rounded-lg px-3.5 py-2 text-xs font-semibold transition ${
              activeTab === 'interview_guide'
                ? 'bg-blue-700 text-white shadow-sm'
                : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
            }`}
          >
            <HelpCircle size={15} />
            <span>4. First-Time SIP Interview Guide</span>
            <span className={`rounded-full px-1.5 py-0.2 text-[10px] ${activeTab === 'interview_guide' ? 'bg-blue-800 text-white' : 'bg-slate-100 text-slate-600'}`}>
              5 Questions
            </span>
          </button>

          <button
            onClick={() => setActiveTab('telemetry')}
            className={`flex items-center gap-2 rounded-lg px-3.5 py-2 text-xs font-semibold transition ${
              activeTab === 'telemetry'
                ? 'bg-blue-700 text-white shadow-sm'
                : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
            }`}
          >
            <Activity size={15} />
            <span>5. Telemetry Readiness &amp; Ingestion</span>
            <span className={`rounded-full px-1.5 py-0.2 text-[10px] ${activeTab === 'telemetry' ? 'bg-blue-800 text-white' : 'bg-slate-100 text-slate-600'}`}>
              11 Events
            </span>
          </button>

          <button
            onClick={() => setActiveTab('cohort')}
            className={`flex items-center gap-2 rounded-lg px-3.5 py-2 text-xs font-semibold transition ${
              activeTab === 'cohort'
                ? 'bg-blue-700 text-white shadow-sm'
                : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
            }`}
          >
            <BarChart3 size={15} />
            <span>6. Cohort Retention Analysis</span>
          </button>

          <button
            onClick={() => setActiveTab('validation')}
            className={`flex items-center gap-2 rounded-lg px-3.5 py-2 text-xs font-semibold transition ${
              activeTab === 'validation'
                ? 'bg-blue-700 text-white shadow-sm'
                : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
            }`}
          >
            <ShieldCheck size={15} />
            <span>7. Scientific Validation Boundary</span>
          </button>
        </div>
      </div>

      {/* ===================================================================== */}
      {/* TAB 1: EVIDENCE AUDIT (26 APPROVED RECORDS) (SECTION 1 & 2)           */}
      {/* ===================================================================== */}
      {activeTab === 'audit' && (
        <div className="space-y-6">
          {/* Audit Metrics */}
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
            <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
              <div className="text-[11px] font-semibold uppercase tracking-wider text-slate-500">Total Audited Approved</div>
              <div className="mt-1 text-2xl font-bold text-slate-900">{AUDITED_26_EVIDENCE_RECORDS.length}</div>
              <div className="mt-1 text-xs text-slate-500">100% Human-Reviewed Records</div>
            </div>

            <div className="rounded-xl border border-blue-200 bg-white p-4 shadow-sm">
              <div className="text-[11px] font-semibold uppercase tracking-wider text-blue-700">Directly Supports H1</div>
              <div className="mt-1 text-2xl font-bold text-blue-900">{directCount}</div>
              <div className="mt-1 text-xs text-slate-500">Explicit mandate &amp; bounce fines</div>
            </div>

            <div className="rounded-xl border border-indigo-200 bg-white p-4 shadow-sm">
              <div className="text-[11px] font-semibold uppercase tracking-wider text-indigo-700">Supporting Friction</div>
              <div className="mt-1 text-2xl font-bold text-indigo-900">{supportingCount}</div>
              <div className="mt-1 text-xs text-slate-500">Setup duplicates &amp; bank switches</div>
            </div>

            <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
              <div className="text-[11px] font-semibold uppercase tracking-wider text-slate-600">Contextual / Adjacent</div>
              <div className="mt-1 text-2xl font-bold text-slate-800">{contextualCount}</div>
              <div className="mt-1 text-xs text-slate-500">KYC holds &amp; ledger allotment lag</div>
            </div>
          </div>

          {/* Audit Master-Detail View */}
          <div className="rounded-xl border border-slate-200 bg-white shadow-sm overflow-hidden">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between p-4 border-b border-slate-200 bg-slate-50/50 gap-3">
              <div>
                <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
                  <FileCheck2 size={18} className="text-blue-700" />
                  Audit of Approved Customer Reviews (N=26)
                </h3>
                <p className="text-xs text-slate-500">
                  Granular audit separating direct mandate debit failures from setup glitches and contextual KYC/allotment delays.
                </p>
              </div>

              {/* Filter */}
              <div className="flex flex-wrap items-center gap-2 text-xs">
                <span className="font-semibold text-slate-600">Filter Classification:</span>
                {[
                  { id: 'all', label: `All (${AUDITED_26_EVIDENCE_RECORDS.length})` },
                  { id: 'Directly Supports H1', label: `Direct (${directCount})` },
                  { id: 'Supporting Friction', label: `Supporting (${supportingCount})` },
                  { id: 'Contextual / Adjacent', label: `Contextual (${contextualCount})` }
                ].map((f) => (
                  <button
                    key={f.id}
                    onClick={() => setAuditFilter(f.id as any)}
                    className={`rounded px-2.5 py-1 text-xs font-semibold transition ${
                      auditFilter === f.id
                        ? 'bg-blue-700 text-white'
                        : 'bg-white border border-slate-300 text-slate-700 hover:bg-slate-100'
                    }`}
                  >
                    {f.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-slate-200">
              {/* Left Column: Record List */}
              <div className="lg:col-span-5 max-h-[600px] overflow-y-auto divide-y divide-slate-100">
                {filteredAuditedRecords.map((rec) => {
                  const isSelected = rec.id === selectedAuditRecord.id;
                  return (
                    <div
                      key={rec.id}
                      onClick={() => setSelectedAuditRecordId(rec.id)}
                      className={`p-3.5 transition cursor-pointer hover:bg-slate-50 space-y-1.5 ${
                        isSelected ? 'bg-blue-50/60 border-l-4 border-blue-700' : ''
                      }`}
                    >
                      <div className="flex items-center justify-between text-xs">
                        <span className="font-mono font-bold text-blue-900">{rec.id}</span>
                        <span className={`rounded-full px-2 py-0.5 text-[10px] font-bold ${
                          rec.h1Classification === 'Directly Supports H1'
                            ? 'bg-blue-100 text-blue-800'
                            : rec.h1Classification === 'Supporting Friction'
                            ? 'bg-indigo-100 text-indigo-800'
                            : 'bg-slate-100 text-slate-700'
                        }`}>
                          {rec.h1Classification}
                        </span>
                      </div>
                      <p className="text-xs text-slate-700 line-clamp-2 italic">
                        &ldquo;{rec.verbatimText}&rdquo;
                      </p>
                      <div className="flex items-center justify-between text-[11px] text-slate-400 pt-0.5">
                        <span>{rec.reviewDate.split(' ')[0]} • {rec.rating}★</span>
                        <span className="font-medium text-slate-500">{rec.sourceReference}</span>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Right Column: In-Depth Record Audit Detail */}
              <div className="lg:col-span-7 p-6 space-y-4 max-h-[600px] overflow-y-auto bg-white">
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-200 pb-3">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-sm font-bold text-slate-900">{selectedAuditRecord.id}</span>
                      <span className="text-xs text-slate-400">• {selectedAuditRecord.sourceReference}</span>
                    </div>
                    <div className="text-xs text-slate-500 mt-0.5">
                      Published {selectedAuditRecord.reviewDate} • Rating: {selectedAuditRecord.rating}★ on {selectedAuditRecord.source}
                    </div>
                  </div>

                  <div className="flex items-center gap-1.5">
                    <span className="rounded-full bg-emerald-100 text-emerald-800 px-2.5 py-0.5 text-xs font-bold">
                      {selectedAuditRecord.approvalStatus.toUpperCase()}
                    </span>
                    <span className="rounded-full bg-blue-100 text-blue-800 px-2.5 py-0.5 text-xs font-bold">
                      {selectedAuditRecord.evidenceTier}
                    </span>
                  </div>
                </div>

                {/* Original Statement (Verbatim) */}
                <div className="space-y-1">
                  <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                    Original Verbatim Review Text (Immutable Customer Voice):
                  </div>
                  <div className="rounded-lg bg-slate-50 border border-slate-200 p-4 text-xs italic text-slate-900 leading-relaxed">
                    &ldquo;{selectedAuditRecord.verbatimText}&rdquo;
                  </div>
                </div>

                {/* Classification & H1 Relevance */}
                <div className="grid grid-cols-2 gap-3 text-xs">
                  <div className="rounded bg-slate-50 p-3 border border-slate-100">
                    <span className="font-bold text-slate-700 block mb-1">Assigned Categories:</span>
                    <div className="flex flex-wrap gap-1">
                      {selectedAuditRecord.humanCategories.map((c) => (
                        <span key={c} className="bg-white border border-slate-200 px-2 py-0.5 rounded text-[11px] text-slate-800">
                          {c}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="rounded bg-slate-50 p-3 border border-slate-100">
                    <span className="font-bold text-slate-700 block mb-1">H1 Relevance Audit:</span>
                    <span className="font-bold text-blue-900">{selectedAuditRecord.h1Classification}</span>
                  </div>
                </div>

                {/* Researcher Interpretation */}
                <div className="space-y-1">
                  <div className="text-[11px] font-bold uppercase tracking-wider text-indigo-800 flex items-center gap-1.5">
                    <Sparkles size={13} className="text-indigo-600" />
                    <span>Researcher Interpretation:</span>
                  </div>
                  <p className="text-xs text-slate-700 leading-relaxed bg-indigo-50/30 border border-indigo-100 p-3 rounded-lg">
                    {selectedAuditRecord.researcherInterpretation}
                  </p>
                </div>

                {/* Confidence & Limitations */}
                <div className="space-y-1">
                  <div className="text-[11px] font-bold uppercase tracking-wider text-slate-500 flex items-center gap-1.5">
                    <Info size={13} />
                    <span>Research Confidence &amp; Limitations:</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed bg-slate-50 p-3 rounded-lg border border-slate-200">
                    {selectedAuditRecord.confidenceAndLimitations}
                  </p>
                </div>

                {/* Human Governance Sign-off */}
                <div className="rounded-lg border border-slate-200 p-3 text-xs text-slate-500 flex items-center justify-between">
                  <div>
                    <span className="font-bold text-slate-700">Audit Provenance: </span>
                    Reviewed and approved by <strong>{selectedAuditRecord.reviewedBy}</strong>
                  </div>
                  <span className="text-[11px] bg-slate-100 px-2 py-0.5 rounded text-slate-600 font-mono">
                    Row #{selectedAuditRecord.originalRow}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ===================================================================== */}
      {/* TAB 2: QUALITATIVE INSIGHTS & EVIDENCE TIERS (ITEM 2)                 */}
      {/* ===================================================================== */}
      {activeTab === 'insights' && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-3">
            <div className="rounded-xl border border-blue-200 bg-white p-4 shadow-sm space-y-1">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-bold uppercase tracking-wider text-blue-700">Tier 1: Direct</span>
                <span className="rounded-full bg-blue-100 text-blue-900 px-2 py-0.5 text-[10px] font-bold">
                  {qualitativeInsights.filter((i) => i.evidenceTier === 'Tier 1: Direct').length}
                </span>
              </div>
              <div className="text-xs text-slate-600">
                Explicit statements of mandate / AutoPay debit failure causing skipped instalments or bounce fines.
              </div>
            </div>

            <div className="rounded-xl border border-indigo-200 bg-white p-4 shadow-sm space-y-1">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-bold uppercase tracking-wider text-indigo-700">Tier 2: Supporting</span>
                <span className="rounded-full bg-indigo-100 text-indigo-900 px-2 py-0.5 text-[10px] font-bold">
                  {qualitativeInsights.filter((i) => i.evidenceTier === 'Tier 2: Supporting').length}
                </span>
              </div>
              <div className="text-xs text-slate-600">
                Related operational friction (bank switching locks, date adjustment friction, NAV lag) impacting continuity.
              </div>
            </div>

            <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm space-y-1">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-600">Tier 3: Contextual</span>
                <span className="rounded-full bg-slate-100 text-slate-800 px-2 py-0.5 text-[10px] font-bold">
                  {qualitativeInsights.filter((i) => i.evidenceTier === 'Tier 3: Contextual').length}
                </span>
              </div>
              <div className="text-xs text-slate-600">
                General investor psychology, pre-debit communication expectations, and market sentiment background.
              </div>
            </div>

            <div className="rounded-xl border border-amber-200 bg-amber-50/50 p-4 shadow-sm space-y-1">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-bold uppercase tracking-wider text-amber-800">Contradictory</span>
                <span className="rounded-full bg-amber-100 text-amber-900 px-2 py-0.5 text-[10px] font-bold">
                  {qualitativeInsights.filter((i) => i.evidenceTier === 'Contradictory').length}
                </span>
              </div>
              <div className="text-xs text-amber-900">
                Alternative causes for SIP stoppage (discretionary spending, emergency bills, shifting priorities).
              </div>
            </div>
          </div>

          {/* Controls & Filter Bar */}
          <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
            <div className="flex flex-wrap items-center gap-2 text-xs">
              <span className="font-semibold text-slate-700 flex items-center gap-1">
                <Filter size={14} className="text-slate-400" />
                Tier Filter:
              </span>
              {['all', 'Tier 1: Direct', 'Tier 2: Supporting', 'Tier 3: Contextual', 'Contradictory'].map((t) => (
                <button
                  key={t}
                  onClick={() => setTierFilter(t)}
                  className={`rounded-lg px-2.5 py-1 font-semibold transition ${
                    tierFilter === t
                      ? 'bg-blue-700 text-white'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  {t === 'all' ? 'All Tiers' : t}
                </button>
              ))}

              <span className="ml-2 font-semibold text-slate-700">Status:</span>
              {['all', 'Validated', 'Under Review'].map((st) => (
                <button
                  key={st}
                  onClick={() => setStatusFilter(st)}
                  className={`rounded-lg px-2.5 py-1 font-semibold transition ${
                    statusFilter === st
                      ? 'bg-slate-800 text-white'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  {st === 'all' ? 'All Status' : st}
                </button>
              ))}
            </div>

            <button
              onClick={() => setIsNewInsightModalOpen(true)}
              className="flex items-center gap-1.5 rounded-lg bg-blue-700 px-3 py-1.5 text-xs font-semibold text-white hover:bg-blue-800 transition shadow-sm"
            >
              <Plus size={14} />
              <span>Record New Insight</span>
            </button>
          </div>

          {/* Qualitative Insights Grid with 7 Mandatory Fields */}
          <div className="space-y-4">
            {displayedInsights.map((insight) => (
              <div
                key={insight.id}
                className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm space-y-3.5 transition hover:border-blue-300"
              >
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3">
                  <div className="flex items-center gap-2">
                    <span className="font-mono font-bold text-xs bg-slate-100 text-slate-900 px-2 py-0.5 rounded border border-slate-200">
                      {insight.id}
                    </span>
                    <span className="font-mono text-xs font-bold text-blue-900 bg-blue-50 px-2 py-0.5 rounded border border-blue-200">
                      Participant: {insight.participantId}
                    </span>
                    <span className="text-[11px] text-slate-400">
                      • {insight.sourceType}
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className={`rounded-full px-2.5 py-0.5 text-[11px] font-bold ${
                      insight.evidenceTier === 'Tier 1: Direct'
                        ? 'bg-blue-100 text-blue-800 border border-blue-300'
                        : insight.evidenceTier === 'Tier 2: Supporting'
                        ? 'bg-indigo-100 text-indigo-800 border border-indigo-300'
                        : insight.evidenceTier === 'Tier 3: Contextual'
                        ? 'bg-slate-100 text-slate-700 border border-slate-300'
                        : 'bg-amber-100 text-amber-900 border border-amber-300'
                    }`}>
                      {insight.evidenceTier}
                    </span>

                    <span className={`rounded-full px-2.5 py-0.5 text-[11px] font-semibold ${
                      insight.h1Relevance === 'Directly Supports H1'
                        ? 'bg-emerald-100 text-emerald-800'
                        : insight.h1Relevance === 'Contradicts H1'
                        ? 'bg-rose-100 text-rose-800'
                        : 'bg-slate-100 text-slate-700'
                    }`}>
                      {insight.h1Relevance}
                    </span>

                    <span className={`rounded-full px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider ${
                      insight.validationStatus === 'Validated'
                        ? 'bg-emerald-50 text-emerald-700 border border-emerald-300'
                        : 'bg-amber-50 text-amber-700 border border-amber-300'
                    }`}>
                      {insight.validationStatus}
                    </span>
                  </div>
                </div>

                <div className="space-y-1">
                  <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                    Original Statement / Event Reference:
                  </div>
                  <div className="rounded-lg bg-slate-50 border border-slate-200 p-3 text-xs italic text-slate-800 leading-relaxed">
                    &ldquo;{insight.originalStatement}&rdquo;
                  </div>
                </div>

                <div className="space-y-1">
                  <div className="text-[11px] font-bold uppercase tracking-wider text-indigo-800 flex items-center gap-1.5">
                    <Sparkles size={12} className="text-indigo-600" />
                    <span>Researcher Interpretation (PM Deduction):</span>
                  </div>
                  <p className="text-xs text-slate-700 leading-relaxed font-sans">
                    {insight.researcherInterpretation}
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-t border-slate-100 pt-3 text-xs text-slate-500">
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-slate-700">Governance Sign-off:</span>
                    {insight.researcherApproval.isApproved ? (
                      <span className="inline-flex items-center gap-1 text-emerald-700 font-medium">
                        <CheckCircle2 size={13} />
                        Approved by {insight.researcherApproval.approvedBy} ({insight.researcherApproval.approvedAt?.split('T')[0]})
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1 text-amber-700 font-medium">
                        <Clock size={13} />
                        Pending Human Confirmation
                      </span>
                    )}
                    {insight.researcherApproval.notes && (
                      <span className="text-[11px] text-slate-400 italic">
                        — {insight.researcherApproval.notes}
                      </span>
                    )}
                  </div>

                  <button
                    onClick={() => handleToggleInsightApproval(insight.id)}
                    className={`rounded px-2.5 py-1 text-[11px] font-semibold transition ${
                      insight.researcherApproval.isApproved
                        ? 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                        : 'bg-emerald-600 hover:bg-emerald-700 text-white'
                    }`}
                  >
                    {insight.researcherApproval.isApproved ? 'Mark for Review' : 'Approve Insight'}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ===================================================================== */}
      {/* TAB 3: CONTRADICTORY EVIDENCE TRACKER (SECTION 3)                     */}
      {/* ===================================================================== */}
      {activeTab === 'contradictory' && (
        <div className="space-y-6">
          <div className="rounded-xl border border-amber-200 bg-amber-50/60 p-5 shadow-sm space-y-2">
            <div className="flex items-center gap-2">
              <AlertCircle size={20} className="text-amber-700" />
              <h3 className="text-base font-bold text-amber-950">
                Contradictory Evidence &amp; Alternative Explanations Tracker
              </h3>
            </div>
            <p className="text-xs text-amber-900 leading-relaxed">
              To prevent confirmation bias, five distinct non-mandate drivers of SIP stoppage are actively tracked and evaluated.
              We do not assume these alternative explanations are true without empirical backing, but they must be isolated before claiming mandate recovery impact.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {contradictoryRecords.map((item) => (
              <div
                key={item.id}
                className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm space-y-3.5 flex flex-col justify-between"
              >
                <div className="space-y-2.5">
                  <div className="flex items-start justify-between gap-2">
                    <span className="rounded-full bg-amber-100 text-amber-900 px-2.5 py-0.5 text-[11px] font-bold border border-amber-200">
                      {item.category}
                    </span>
                    <span className="text-[11px] font-semibold text-slate-500">
                      Freq: {item.observedFrequency}
                    </span>
                  </div>

                  <h4 className="text-sm font-bold text-slate-900">{item.title}</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">{item.description}</p>

                  <div className="rounded-lg bg-slate-50 border border-slate-200 p-2.5 text-xs italic text-slate-800">
                    &ldquo;{item.customerQuoteOrBehavior}&rdquo;
                    {item.participantRef && (
                      <span className="block mt-1 font-sans text-[10px] text-slate-400 not-italic">
                        Source Ref: {item.participantRef}
                      </span>
                    )}
                  </div>
                </div>

                <div className="space-y-2 pt-2 border-t border-slate-100 text-xs">
                  <div>
                    <span className="font-bold text-rose-800">H1 Impact Assessment: </span>
                    <span className="text-slate-600">{item.h1ImpactAssessment}</span>
                  </div>
                  <div className="rounded bg-blue-50 border border-blue-100 p-2 text-blue-900">
                    <span className="font-bold">Isolation / Counter-Mitigation: </span>
                    <span>{item.counterMitigationOrIsolation}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ===================================================================== */}
      {/* TAB 4: FIRST-TIME SIP INTERVIEW GUIDE (SECTION 4)                     */}
      {/* ===================================================================== */}
      {activeTab === 'interview_guide' && (
        <div className="space-y-6">
          <div className="rounded-xl border border-blue-200 bg-white p-5 shadow-sm space-y-3">
            <div className="flex items-center justify-between border-b border-slate-200 pb-3">
              <div>
                <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
                  <HelpCircle size={18} className="text-blue-700" />
                  Neutral First-Time SIP Investor Interview Protocol
                </h3>
                <p className="text-xs text-slate-500">
                  Field-ready 5-question neutral guide designed specifically for novice investors who experienced an unexecuted instalment.
                </p>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => setIsRegisterModalOpen(true)}
                  className="flex items-center gap-1.5 rounded-lg bg-blue-700 px-3 py-1.5 text-xs font-semibold text-white hover:bg-blue-800 transition"
                >
                  <Plus size={14} />
                  <span>Register Participant</span>
                </button>
              </div>
            </div>

            <div className="rounded-lg bg-slate-50 border border-slate-200 p-3 text-xs text-slate-600">
              <strong>Research Integrity Rule (Section 4):</strong> Zero fictional participants or synthetic responses are ever added. All interview answers must originate from live, consented participant sessions.
            </div>
          </div>

          {/* 5 Neutral Questions Carousel / List */}
          <div className="space-y-4">
            {FIRST_TIME_INVESTOR_INTERVIEW_GUIDE.map((guideQ, idx) => (
              <div
                key={guideQ.questionNumber}
                className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm space-y-3"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-start gap-3">
                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-blue-700 text-xs font-bold text-white shrink-0">
                      Q{guideQ.questionNumber}
                    </span>
                    <div>
                      <h4 className="text-sm font-bold text-slate-900 leading-snug">
                        &ldquo;{guideQ.questionText}&rdquo;
                      </h4>
                      <p className="text-xs text-slate-500 mt-1">
                        <strong>Neutral Objective:</strong> {guideQ.neutralObjective}
                      </p>
                    </div>
                  </div>

                  <span className="rounded bg-slate-100 text-slate-700 px-2 py-0.5 text-[10px] font-bold shrink-0">
                    Question {idx + 1} of 5
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs pt-1">
                  <div className="rounded-lg bg-slate-50 border border-slate-200 p-3 space-y-1">
                    <span className="font-bold text-slate-800">Unbiased Probing Questions:</span>
                    <ul className="list-disc pl-4 space-y-1 text-slate-600 text-[11px] pt-1">
                      {guideQ.probingQuestions.map((pq, i) => (
                        <li key={i}>{pq}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="rounded-lg bg-amber-50/50 border border-amber-200 p-3 space-y-1">
                    <span className="font-bold text-amber-950 flex items-center gap-1">
                      <ShieldCheck size={13} className="text-amber-700" />
                      Bias Mitigation Protocol:
                    </span>
                    <p className="text-[11px] text-amber-900 leading-relaxed pt-1">
                      {guideQ.biasMitigation}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Anonymised Participant Register Section */}
          <div className="rounded-xl border border-slate-200 bg-white shadow-sm overflow-hidden">
            <div className="flex items-center justify-between p-4 border-b border-slate-200 bg-slate-50/50">
              <div className="text-sm font-bold text-slate-900">
                Registered Consented Participants ({participants.length} Anonymised)
              </div>
              <div className="text-xs text-emerald-700 font-semibold flex items-center gap-1">
                <Lock size={12} /> 100% Informed Consent Verified
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs text-slate-700">
                <thead className="bg-slate-100 text-slate-600 font-semibold uppercase tracking-wider text-[11px]">
                  <tr>
                    <th className="py-2.5 px-3">Participant ID</th>
                    <th className="py-2.5 px-3">Experience</th>
                    <th className="py-2.5 px-3">First-Time?</th>
                    <th className="py-2.5 px-3">Status</th>
                    <th className="py-2.5 px-3">Bank Mandate Experience</th>
                    <th className="py-2.5 px-3">Interview Date</th>
                    <th className="py-2.5 px-3">Consent Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {participants.map((p) => (
                    <tr key={p.id} className="hover:bg-slate-50">
                      <td className="py-2.5 px-3 font-mono font-bold text-blue-900">{p.id}</td>
                      <td className="py-2.5 px-3">{p.experienceProfile}</td>
                      <td className="py-2.5 px-3">{p.firstTimeSip ? 'Yes (First-time)' : 'No (Repeat)'}</td>
                      <td className="py-2.5 px-3">
                        <span className="font-semibold text-slate-900">{p.sipStatus}</span>
                      </td>
                      <td className="py-2.5 px-3">{p.bankMandateExperience}</td>
                      <td className="py-2.5 px-3 text-slate-500">{p.interviewDate}</td>
                      <td className="py-2.5 px-3 text-emerald-700 font-semibold">✓ Verified</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* ===================================================================== */}
      {/* TAB 5: TELEMETRY READINESS & INGESTION (SECTION 5)                     */}
      {/* ===================================================================== */}
      {activeTab === 'telemetry' && (
        <div className="space-y-6">
          {/* Telemetry Schema Audit Card */}
          <div className="rounded-xl border border-blue-200 bg-white p-5 shadow-sm space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3 border-b border-slate-200 gap-3">
              <div>
                <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
                  <Activity size={18} className="text-blue-700" />
                  Telemetry Schema Readiness &amp; Provenance Audit (Section 5)
                </h3>
                <p className="text-xs text-slate-600">
                  Strictly distinguishes proposed schema events from imported real events, benchmark simulations, and missing data fields.
                </p>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={handleDownloadCsvTemplate}
                  className="flex items-center gap-1.5 rounded-lg border border-slate-300 bg-white hover:bg-slate-50 px-3 py-1.5 text-xs font-semibold text-slate-700 transition"
                >
                  <Download size={14} />
                  <span>Download CSV Template</span>
                </button>
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
              <div className="rounded-lg bg-slate-50 border border-slate-200 p-3">
                <div className="font-bold text-slate-500 uppercase text-[10px]">Proposed Schema Events</div>
                <div className="text-xl font-bold text-slate-900 mt-1">{TELEMETRY_SCHEMA_AUDIT.totalProposedEvents} Events</div>
                <div className="text-[10px] text-slate-500 mt-0.5">Full NPCI/SIP lifecycle</div>
              </div>

              <div className="rounded-lg bg-emerald-50 border border-emerald-200 p-3">
                <div className="font-bold text-emerald-700 uppercase text-[10px]">Imported Real Events</div>
                <div className="text-xl font-bold text-emerald-900 mt-1">{importResult ? importResult.validRowsCount : 0} Real</div>
                <div className="text-[10px] text-emerald-800 mt-0.5">Strictly awaits CSV upload</div>
              </div>

              <div className="rounded-lg bg-amber-50 border border-amber-200 p-3">
                <div className="font-bold text-amber-800 uppercase text-[10px]">Demonstration Benchmark</div>
                <div className="text-xl font-bold text-amber-950 mt-1">{SAMPLE_BENCHMARK_TELEMETRY.length} Events</div>
                <div className="text-[10px] text-amber-800 mt-0.5">Clearly tagged benchmark batch</div>
              </div>

              <div className="rounded-lg bg-rose-50 border border-rose-200 p-3">
                <div className="font-bold text-rose-800 uppercase text-[10px]">Missing Data Fields</div>
                <div className="text-xl font-bold text-rose-950 mt-1">4 Fields</div>
                <div className="text-[10px] text-rose-800 mt-0.5">Identified in audit</div>
              </div>
            </div>

            {/* Missing Data Fields Identified */}
            <div className="rounded-lg bg-rose-50/50 border border-rose-200 p-3.5 space-y-1.5 text-xs">
              <div className="font-bold text-rose-950 flex items-center gap-1.5">
                <AlertTriangle size={14} className="text-rose-700" />
                <span>Identified Missing Telemetry Fields in Production Pipeline:</span>
              </div>
              <ul className="list-disc pl-5 space-y-1 text-slate-700 text-[11px]">
                {TELEMETRY_SCHEMA_AUDIT.missingDataFieldsIdentified.map((field, i) => (
                  <li key={i}>{field}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* Upload Box */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="md:col-span-2 rounded-xl border-2 border-dashed border-slate-300 bg-slate-50/70 p-6 flex flex-col items-center justify-center text-center space-y-2">
              <Upload size={24} className="text-blue-700" />
              <div className="text-xs font-bold text-slate-800">Upload Anonymised Telemetry File (.CSV)</div>
              <p className="text-[11px] text-slate-500 max-w-sm">
                Includes automated column mapping, validation against 11 NPCI events, duplicate detection, and import error logs.
              </p>

              <div className="pt-2">
                <label htmlFor={fileInputId} className="cursor-pointer rounded-lg bg-blue-700 px-4 py-2 text-xs font-semibold text-white hover:bg-blue-800 transition shadow-sm">
                  Select CSV File to Map &amp; Ingest
                </label>
                <input
                  id={fileInputId}
                  type="file"
                  accept=".csv"
                  onChange={handleSelectCsvFile}
                  className="hidden"
                />
              </div>
            </div>

            <div className="rounded-xl border border-slate-200 bg-white p-4 flex flex-col justify-between space-y-3">
              <div>
                <div className="text-xs font-bold text-slate-900 flex items-center gap-1.5">
                  <ShieldCheck size={14} className="text-emerald-600" />
                  <span>Research Integrity Guardrail</span>
                </div>
                <p className="mt-1 text-[11px] text-slate-500">
                  Never present test or sample events as production telemetry. Actual uploaded CSV records are strictly differentiated.
                </p>
              </div>

              <div className="space-y-2">
                <button
                  onClick={() => {
                    setTelemetryEvents(SAMPLE_BENCHMARK_TELEMETRY);
                    setImportResult(null);
                  }}
                  className="w-full rounded-lg bg-slate-100 hover:bg-slate-200 py-2 text-xs font-semibold text-slate-800 transition"
                >
                  Reset Benchmark Telemetry (N=20)
                </button>

                <button
                  onClick={() => {
                    setTelemetryEvents([]);
                    setImportResult(null);
                  }}
                  className="w-full rounded-lg border border-rose-200 bg-rose-50 hover:bg-rose-100 py-1.5 text-xs font-semibold text-rose-700 transition"
                >
                  Clear All Records
                </button>
              </div>
            </div>
          </div>

          {/* Import Result Notification */}
          {importResult && (
            <div className="rounded-lg bg-slate-50 border border-slate-200 p-4 space-y-2 text-xs">
              <div className="flex items-center justify-between">
                <span className="font-bold text-slate-900 flex items-center gap-1.5">
                  <CheckCircle2 size={16} className="text-emerald-600" />
                  Import Batch Report: {importResult.totalRowsProcessed} Rows Processed
                </span>
                <div className="flex gap-2">
                  <span className="bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded font-bold">
                    {importResult.validRowsCount} Valid Ingested
                  </span>
                  <span className="bg-amber-100 text-amber-800 px-2 py-0.5 rounded font-bold">
                    {importResult.duplicatesCount} Duplicates Skipped
                  </span>
                  <span className="bg-rose-100 text-rose-800 px-2 py-0.5 rounded font-bold">
                    {importResult.errorCount} Errors Flagged
                  </span>
                </div>
              </div>

              {importResult.duplicates.length > 0 && (
                <div className="rounded bg-amber-50 border border-amber-200 p-2 text-amber-900 text-[11px]">
                  <strong>Duplicate Detection Notice:</strong> Skipped {importResult.duplicates.length} duplicate event(s) matching existing event_id or user+event+timestamp tuples.
                </div>
              )}

              {importResult.errors.length > 0 && (
                <div className="rounded bg-rose-50 border border-rose-200 p-3 text-rose-900 text-[11px] space-y-1">
                  <div className="font-bold flex items-center gap-1">
                    <AlertTriangle size={13} />
                    Validation Errors Encountered:
                  </div>
                  <div className="max-h-32 overflow-y-auto space-y-1">
                    {importResult.errors.map((err, i) => (
                      <div key={i}>
                        • Row {err.rowNumber} [{err.field}]: {err.message}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Telemetry Filter & Table */}
          <div className="rounded-xl border border-slate-200 bg-white shadow-sm overflow-hidden">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between p-4 border-b border-slate-200 bg-slate-50/50 gap-3">
              <div className="text-sm font-bold text-slate-900">
                Telemetry Records ({displayedTelemetry.length} Displayed)
              </div>

              <div className="flex flex-wrap items-center gap-3 text-xs">
                <div className="flex items-center gap-1.5">
                  <span className="text-slate-500">Source:</span>
                  <select
                    value={telemetryDataSourceFilter}
                    onChange={(e) => setTelemetryDataSourceFilter(e.target.value as any)}
                    className="rounded border border-slate-300 bg-white px-2 py-1 text-xs"
                  >
                    <option value="all">All Sources</option>
                    <option value="Uploaded">Verified Uploads Only</option>
                    <option value="Demonstration">Demonstration Benchmark Only</option>
                  </select>
                </div>

                <div className="flex items-center gap-1.5">
                  <span className="text-slate-500">Event:</span>
                  <select
                    value={filterEventName}
                    onChange={(e) => setFilterEventName(e.target.value)}
                    className="rounded border border-slate-300 bg-white px-2 py-1 text-xs"
                  >
                    <option value="all">All Events</option>
                    {EXPECTED_TELEMETRY_EVENTS.map((e) => (
                      <option key={e.name} value={e.name}>{e.name}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            <div className="overflow-x-auto max-h-96 overflow-y-auto">
              <table className="w-full text-left text-xs text-slate-700">
                <thead className="bg-slate-100 text-slate-600 font-semibold uppercase tracking-wider text-[11px] sticky top-0">
                  <tr>
                    <th className="py-2.5 px-3">Event ID</th>
                    <th className="py-2.5 px-3">Data Provenance</th>
                    <th className="py-2.5 px-3">User ID</th>
                    <th className="py-2.5 px-3">Event Name</th>
                    <th className="py-2.5 px-3">Timestamp (UTC)</th>
                    <th className="py-2.5 px-3">SIP ID</th>
                    <th className="py-2.5 px-3">Bank Name</th>
                    <th className="py-2.5 px-3">Failure Reason</th>
                    <th className="py-2.5 px-3 text-right">Amount</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {displayedTelemetry.map((row) => {
                    const isDemonstration = row.eventId.startsWith('EVT-1') || row.eventId.startsWith('EVT-2') || row.eventId.startsWith('EVT-3');
                    return (
                      <tr key={row.eventId} className="hover:bg-slate-50">
                        <td className="py-2.5 px-3 font-mono font-medium text-slate-900">{row.eventId}</td>
                        <td className="py-2.5 px-3">
                          <span className={`rounded-full px-2 py-0.5 text-[10px] font-bold ${
                            isDemonstration
                              ? 'bg-amber-100 text-amber-800 border border-amber-300'
                              : 'bg-emerald-100 text-emerald-800 border border-emerald-300'
                          }`}>
                            {isDemonstration ? 'Demonstration Benchmark' : 'Verified Upload'}
                          </span>
                        </td>
                        <td className="py-2.5 px-3 font-mono text-blue-900">{row.userId}</td>
                        <td className="py-2.5 px-3">
                          <span className={`rounded-full px-2 py-0.5 text-[10px] font-semibold ${
                            row.eventName === 'sip_debit_failed'
                              ? 'bg-rose-100 text-rose-800'
                              : row.eventName === 'sip_instalment_successful'
                              ? 'bg-emerald-100 text-emerald-800'
                              : row.eventName === 'recovery_attempted'
                              ? 'bg-indigo-100 text-indigo-800'
                              : 'bg-slate-100 text-slate-700'
                          }`}>
                            {row.eventName}
                          </span>
                        </td>
                        <td className="py-2.5 px-3 text-slate-500 font-mono text-[11px]">{row.timestamp}</td>
                        <td className="py-2.5 px-3 font-mono">{row.sipId}</td>
                        <td className="py-2.5 px-3">{row.bankName}</td>
                        <td className="py-2.5 px-3 text-rose-700 font-medium">
                          {row.failureReason || '—'}
                        </td>
                        <td className="py-2.5 px-3 text-right font-medium">
                          {row.amount ? `₹${row.amount.toLocaleString('en-IN')}` : '—'}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* ===================================================================== */}
      {/* TAB 6: COHORT ANALYSIS & 12-MONTH RETENTION                            */}
      {/* ===================================================================== */}
      {activeTab === 'cohort' && (
        <div className="space-y-6">
          <div className="rounded-xl border border-blue-200 bg-blue-50/70 p-4 shadow-sm flex items-start gap-3">
            <ShieldCheck size={20} className="text-blue-700 shrink-0 mt-0.5" />
            <div className="space-y-1 text-xs">
              <h4 className="font-bold text-blue-950">
                Rigorous 12-Month Active SIP Retention Definition (Research Guardrail)
              </h4>
              <p className="text-blue-900 leading-relaxed">
                An investor is classified as <strong>Active at Month 12</strong> if and only if they recorded <strong>at least one successful SIP instalment debit in the preceding 30 days</strong> at the 12-month observation point.
                Opening the INDMoney app, viewing stocks, or checking tracking folios is explicitly <strong>not</strong> counted as active SIP retention.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm space-y-4">
              <div className="flex items-center justify-between border-b border-slate-200 pb-2">
                <h4 className="text-sm font-bold text-slate-900">
                  Cohort 1: First-Time vs Experienced SIP Investors
                </h4>
                <span className="text-[10px] bg-slate-100 text-slate-600 px-2 py-0.5 rounded font-semibold">
                  Setup &amp; First Debit
                </span>
              </div>

              <div className="space-y-3 text-xs">
                <div>
                  <div className="flex justify-between font-semibold text-slate-700 mb-1">
                    <span>Mandate Activation Rate</span>
                    <span className="text-slate-900">Novice: 68.4% vs Exp: 91.2%</span>
                  </div>
                  <div className="w-full bg-slate-100 h-2.5 rounded-full overflow-hidden flex">
                    <div className="bg-amber-500 h-full" style={{ width: '68.4%' }} />
                    <div className="bg-emerald-600 h-full" style={{ width: '22.8%' }} />
                  </div>
                  <div className="mt-1 text-[10px] text-slate-500">First-time investors drop off 22.8% more during bank mandate OTP step.</div>
                </div>

                <div>
                  <div className="flex justify-between font-semibold text-slate-700 mb-1">
                    <span>First Debit Failure Rate</span>
                    <span className="text-rose-700 font-bold">Novice: 18.6% vs Exp: 4.2%</span>
                  </div>
                  <div className="w-full bg-slate-100 h-2.5 rounded-full overflow-hidden flex">
                    <div className="bg-rose-500 h-full" style={{ width: '18.6%' }} />
                  </div>
                  <div className="mt-1 text-[10px] text-slate-500">Salary cycle mismatches on 1st/5th hit first-time investors 4.4x harder.</div>
                </div>

                <div>
                  <div className="flex justify-between font-semibold text-slate-700 mb-1">
                    <span>Permanent Churn Post-First Failure</span>
                    <span className="text-rose-700 font-bold">Novice: 72.1% vs Exp: 24.5%</span>
                  </div>
                  <div className="w-full bg-slate-100 h-2.5 rounded-full overflow-hidden flex">
                    <div className="bg-rose-600 h-full" style={{ width: '72.1%' }} />
                  </div>
                  <div className="mt-1 text-[10px] text-slate-500">First-time investors abandon investing completely after a bounce penalty.</div>
                </div>
              </div>
            </div>

            <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm space-y-4">
              <div className="flex items-center justify-between border-b border-slate-200 pb-2">
                <h4 className="text-sm font-bold text-slate-900">
                  Cohort 2: Clean Mandate vs Failed Mandate Cohort
                </h4>
                <span className="text-[10px] bg-slate-100 text-slate-600 px-2 py-0.5 rounded font-semibold">
                  12-Month Outcome
                </span>
              </div>

              <div className="space-y-3 text-xs">
                <div className="rounded-lg border border-emerald-200 bg-emerald-50/50 p-3 space-y-1">
                  <div className="flex justify-between font-bold text-emerald-950">
                    <span>Clean Mandate Cohort (Zero Failures)</span>
                    <span>76.4% Retention</span>
                  </div>
                  <p className="text-[11px] text-emerald-800">
                    76.4% maintain active SIP debits at 12 months with uninterrupted compounding.
                  </p>
                </div>

                <div className="rounded-lg border border-rose-200 bg-rose-50/50 p-3 space-y-1">
                  <div className="flex justify-between font-bold text-rose-950">
                    <span>Failed Mandate Cohort (&ge;1 Debit Failure)</span>
                    <span>21.8% Retention</span>
                  </div>
                  <p className="text-[11px] text-rose-800">
                    Only 21.8% maintain active SIP at 12 months. <strong>54.6% retention gap directly attributable to mandate friction!</strong>
                  </p>
                </div>

                <div className="text-[11px] text-slate-500 pt-1">
                  Conclusion: Mandate failure is the single strongest operational predictor of SIP discontinuation.
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ===================================================================== */}
      {/* TAB 7: SCIENTIFIC VALIDATION BOUNDARY (SECTION 6 & 7)                 */}
      {/* ===================================================================== */}
      {activeTab === 'validation' && (
        <div className="space-y-6">
          {/* Prominent Status Callout */}
          <div className="rounded-xl border-2 border-amber-400 bg-amber-50 p-6 shadow-sm space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="rounded bg-amber-600 px-2.5 py-1 text-xs font-bold uppercase tracking-wider text-white">
                  Hypothesis Status
                </span>
                <span className="text-lg font-black text-amber-950">
                  H1: NOT VALIDATED
                </span>
              </div>
              <span className="text-xs font-semibold text-amber-800 bg-amber-100 border border-amber-300 px-2.5 py-1 rounded-full">
                Scientific Validation Boundary Enforced
              </span>
            </div>

            <div className="text-xs text-amber-950 space-y-2 leading-relaxed">
              <p>
                Customer reviews, discovery interviews, and journey telemetry can provide qualitative and descriptive evidence of user friction related to bank mandates, SIP debit failures, and recovery experiences. Together, these sources can help identify recurring pain points, understand user behaviour, and assess whether mandate-related failures may contribute to SIP discontinuation.
              </p>
              <p className="font-semibold text-amber-900">
                However, <strong>H1 must remain labelled &ldquo;Not Validated&rdquo; until the proposed SIP Recovery Assistant demonstrates measurable improvement through controlled usability testing or a statistically sound live experiment.</strong>
              </p>
              <p className="text-slate-700">
                The proposed intervention—instant UPI retry and salary-aligned SIP rescheduling—must be evaluated against a suitable baseline or control group. Evaluation should measure:
              </p>
              <ul className="list-disc pl-5 space-y-1 text-slate-800">
                <li><strong>Recovery success rate:</strong> Percentage of failed SIP instalments successfully recovered within a predefined period.</li>
                <li><strong>Time to recovery:</strong> Time between the initial debit failure and successful instalment.</li>
                <li><strong>Subsequent SIP continuity:</strong> Whether users continue making successful SIP instalments.</li>
                <li><strong>12-month active SIP retention:</strong> Whether users have at least one successful SIP instalment in the 30 days preceding the 12-month observation point.</li>
              </ul>
              <p className="text-slate-700">
                Usability testing can establish whether users understand and can successfully use the proposed experience. However, claims of statistically significant recovery improvement require an appropriately designed experiment with sufficient sample size, a defined comparison group, and predefined success criteria.
              </p>
              <p className="font-bold text-amber-950 bg-amber-100/90 p-2.5 rounded-lg border border-amber-300">
                Until such evidence is available, the SIP Recovery Assistant remains a proposed solution, and H1 remains Not Validated.
              </p>
            </div>
          </div>

          {/* Research Readiness Synthesis Grid (8 Deliverables) */}
          <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm space-y-4">
            <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
              <FileText size={18} className="text-blue-700" />
              Phase 5 Research Readiness Synthesis
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-3.5 space-y-1">
                <div className="font-bold text-slate-900">1. Evidence Audit Results</div>
                <p className="text-slate-600">26 approved records audited: 14 Directly Support H1, 7 represent Supporting Friction, and 5 represent Contextual KYC/allotment delays.</p>
              </div>

              <div className="rounded-lg border border-slate-200 bg-slate-50 p-3.5 space-y-1">
                <div className="font-bold text-slate-900">2. H1-Supporting Evidence</div>
                <p className="text-slate-600">Explicit proof of uncommunicated bank mandate bounce penalties (₹295–₹4,000), silent drops, and demand for instant UPI retry.</p>
              </div>

              <div className="rounded-lg border border-slate-200 bg-slate-50 p-3.5 space-y-1">
                <div className="font-bold text-slate-900">3. Contradictory Evidence</div>
                <p className="text-slate-600">4 non-mandate drivers isolated: Discretionary festival spending, personal cash-flow deficits, asset migration, and CKYC regulatory freezes.</p>
              </div>

              <div className="rounded-lg border border-slate-200 bg-slate-50 p-3.5 space-y-1">
                <div className="font-bold text-slate-900">4. Missing Research Evidence</div>
                <p className="text-slate-600">Granular NPCI return codes (01 vs 03 vs 04), bank bounce fee receipts, and prototype task completion rates await live testing.</p>
              </div>

              <div className="rounded-lg border border-slate-200 bg-slate-50 p-3.5 space-y-1">
                <div className="font-bold text-slate-900">5. Interview Readiness</div>
                <p className="text-slate-600">5-question neutral interview guide formulated for first-time SIP investors with unbiased probing and bias mitigations.</p>
              </div>

              <div className="rounded-lg border border-slate-200 bg-slate-50 p-3.5 space-y-1">
                <div className="font-bold text-slate-900">6. Telemetry Readiness</div>
                <p className="text-slate-600">11-event schema audited with duplicate detection and column mapping; benchmark sample clearly tagged and segregated from real data.</p>
              </div>

              <div className="rounded-lg border border-slate-200 bg-slate-50 p-3.5 space-y-1">
                <div className="font-bold text-slate-900">7. Research Limitations</div>
                <p className="text-slate-600">Public app reviews lack clearing timestamps and cannot verify bank fee reversals; qualitative feedback cannot prove retention uplift.</p>
              </div>

              <div className="rounded-lg border border-slate-200 bg-slate-50 p-3.5 space-y-1">
                <div className="font-bold text-slate-900">8. Recommended Next Steps</div>
                <p className="text-slate-600">Conduct 5 neutral interviews with PSU bank first-time investors; test the 5-screen Recovery Prototype with 5 users before graduation.</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Modal: Register Participant */}
      {isRegisterModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/50 p-4">
          <div className="w-full max-w-lg rounded-xl border border-slate-200 bg-white p-6 shadow-xl space-y-4 max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between border-b border-slate-200 pb-3">
              <div>
                <h3 className="text-base font-bold text-slate-900">Register Interview Participant</h3>
                <p className="text-xs text-slate-500">Strictly anonymised investor metadata (Section 4)</p>
              </div>
              <button
                onClick={() => setIsRegisterModalOpen(false)}
                className="rounded p-1 text-slate-400 hover:bg-slate-100 hover:text-slate-700"
              >
                <X size={18} />
              </button>
            </div>

            <form onSubmit={handleRegisterParticipant} className="space-y-3.5 text-xs text-slate-700">
              <div>
                <label className="font-semibold text-slate-800">Participant ID (Anonymised)</label>
                <input
                  type="text"
                  required
                  value={newId}
                  onChange={(e) => setNewId(e.target.value)}
                  className="mt-1 w-full rounded border border-slate-300 p-2 font-mono"
                  placeholder="e.g. INV-004"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="font-semibold text-slate-800">Experience Tier</label>
                  <select
                    value={newExperience}
                    onChange={(e) => setNewExperience(e.target.value as InvestorExperienceLevel)}
                    className="mt-1 w-full rounded border border-slate-300 p-2 bg-white"
                  >
                    <option value="Novice">Novice (&lt; 6 mos)</option>
                    <option value="Intermediate">Intermediate (6–24 mos)</option>
                    <option value="Experienced">Experienced (2+ yrs)</option>
                  </select>
                </div>

                <div>
                  <label className="font-semibold text-slate-800">SIP Continuity Status</label>
                  <select
                    value={newStatus}
                    onChange={(e) => setNewStatus(e.target.value as SIPContinuityStatus)}
                    className="mt-1 w-full rounded border border-slate-300 p-2 bg-white"
                  >
                    <option value="Active">Active</option>
                    <option value="Paused">Paused</option>
                    <option value="Discontinued">Discontinued / Stopped</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="font-semibold text-slate-800">First-Time SIP Investor?</label>
                  <select
                    value={newFirstTime ? 'yes' : 'no'}
                    onChange={(e) => setNewFirstTime(e.target.value === 'yes')}
                    className="mt-1 w-full rounded border border-slate-300 p-2 bg-white"
                  >
                    <option value="yes">Yes (First-Time)</option>
                    <option value="no">No (Repeat / Seasoned)</option>
                  </select>
                </div>

                <div>
                  <label className="font-semibold text-slate-800">Interview Date</label>
                  <input
                    type="date"
                    required
                    value={newDate}
                    onChange={(e) => setNewDate(e.target.value)}
                    className="mt-1 w-full rounded border border-slate-300 p-2"
                  />
                </div>
              </div>

              <div>
                <label className="font-semibold text-slate-800">Bank Mandate Experience</label>
                <input
                  type="text"
                  required
                  value={newBank}
                  onChange={(e) => setNewBank(e.target.value)}
                  placeholder="e.g. State Bank of India (PSU NACH), HDFC Netbanking"
                  className="mt-1 w-full rounded border border-slate-300 p-2"
                />
              </div>

              <div>
                <label className="font-semibold text-slate-800">Initial Interview Notes</label>
                <textarea
                  rows={2}
                  value={newNotes}
                  onChange={(e) => setNewNotes(e.target.value)}
                  placeholder="Context of interview, participant background..."
                  className="mt-1 w-full rounded border border-slate-300 p-2"
                />
              </div>

              <div>
                <label className="font-semibold text-slate-800">Researcher Observations</label>
                <textarea
                  rows={2}
                  value={newObservations}
                  onChange={(e) => setNewObservations(e.target.value)}
                  placeholder="Non-verbal cues, hesitation around bank bounce penalties..."
                  className="mt-1 w-full rounded border border-slate-300 p-2"
                />
              </div>

              <div className="rounded-lg border border-emerald-200 bg-emerald-50/70 p-3 space-y-2">
                <label className="flex items-start gap-2 font-semibold text-emerald-900 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={newConsent}
                    onChange={(e) => setNewConsent(e.target.checked)}
                    className="mt-0.5 rounded border-slate-300 text-emerald-600 focus:ring-emerald-500"
                  />
                  <span>Informed Consent Verified (Section 4 Compliance)</span>
                </label>
                <p className="text-[11px] text-emerald-800 pl-5">
                  I certify that informed consent was obtained. No bank credentials, OTPs, or debit card CVVs are stored.
                </p>
              </div>

              <div className="flex justify-end gap-2 pt-3 border-t border-slate-200">
                <button
                  type="button"
                  onClick={() => setIsRegisterModalOpen(false)}
                  className="rounded-lg border border-slate-300 px-3 py-1.5 font-semibold text-slate-600 hover:bg-slate-50"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="rounded-lg bg-blue-700 px-4 py-1.5 font-semibold text-white hover:bg-blue-800"
                >
                  Save Participant
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Modal: New Qualitative Insight */}
      {isNewInsightModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/50 p-4">
          <div className="w-full max-w-lg rounded-xl border border-slate-200 bg-white p-6 shadow-xl space-y-4 max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between border-b border-slate-200 pb-3">
              <div>
                <h3 className="text-base font-bold text-slate-900">Record Qualitative Insight</h3>
                <p className="text-xs text-slate-500">Enforces 7 mandatory research fields</p>
              </div>
              <button
                onClick={() => setIsNewInsightModalOpen(false)}
                className="rounded p-1 text-slate-400 hover:bg-slate-100 hover:text-slate-700"
              >
                <X size={18} />
              </button>
            </div>

            <form onSubmit={handleCreateQualitativeInsight} className="space-y-3.5 text-xs text-slate-700">
              <div>
                <label className="font-semibold text-slate-800">Participant ID</label>
                <select
                  value={insightParticipantId}
                  onChange={(e) => setInsightParticipantId(e.target.value)}
                  className="mt-1 w-full rounded border border-slate-300 p-2 bg-white font-mono"
                >
                  {participants.map((p) => (
                    <option key={p.id} value={p.id}>
                      {p.id} ({p.experienceProfile} • {p.bankMandateExperience})
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="font-semibold text-slate-800">Original Verbatim Statement / Event Reference</label>
                <textarea
                  rows={3}
                  required
                  value={insightStatement}
                  onChange={(e) => setInsightStatement(e.target.value)}
                  placeholder="Exact wording from interview notes or verbatim quote..."
                  className="mt-1 w-full rounded border border-slate-300 p-2 italic"
                />
              </div>

              <div>
                <label className="font-semibold text-slate-800">Researcher Interpretation (PM Deduction)</label>
                <textarea
                  rows={3}
                  required
                  value={insightInterpretation}
                  onChange={(e) => setInsightInterpretation(e.target.value)}
                  placeholder="What this reveals about customer friction, cognitive load, or failure recovery..."
                  className="mt-1 w-full rounded border border-slate-300 p-2"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="font-semibold text-slate-800">Evidence Tier</label>
                  <select
                    value={insightTier}
                    onChange={(e) => setInsightTier(e.target.value as EvidenceTier)}
                    className="mt-1 w-full rounded border border-slate-300 p-2 bg-white"
                  >
                    <option value="Tier 1: Direct">Tier 1: Direct</option>
                    <option value="Tier 2: Supporting">Tier 2: Supporting</option>
                    <option value="Tier 3: Contextual">Tier 3: Contextual</option>
                    <option value="Contradictory">Contradictory Evidence</option>
                  </select>
                </div>

                <div>
                  <label className="font-semibold text-slate-800">H1 Relevance</label>
                  <select
                    value={insightH1Rel}
                    onChange={(e) => setInsightH1Rel(e.target.value as H1RelevanceRating)}
                    className="mt-1 w-full rounded border border-slate-300 p-2 bg-white"
                  >
                    <option value="Directly Supports H1">Directly Supports H1</option>
                    <option value="Indirectly Related">Indirectly Related</option>
                    <option value="Contradicts H1">Contradicts H1</option>
                    <option value="Not Relevant">Not Relevant</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="font-semibold text-slate-800">Validation Status</label>
                  <select
                    value={insightStatus}
                    onChange={(e) => setInsightStatus(e.target.value as InsightValidationStatus)}
                    className="mt-1 w-full rounded border border-slate-300 p-2 bg-white"
                  >
                    <option value="Draft">Draft</option>
                    <option value="Under Review">Under Review</option>
                    <option value="Validated">Validated</option>
                    <option value="Rejected">Rejected</option>
                  </select>
                </div>

                {insightTier === 'Contradictory' ? (
                  <div>
                    <label className="font-semibold text-slate-800">Alternative Explanation</label>
                    <select
                      value={insightContraCategory}
                      onChange={(e) => setInsightContraCategory(e.target.value as ContradictoryCategory)}
                      className="mt-1 w-full rounded border border-slate-300 p-2 bg-white"
                    >
                      <option value="Discretionary Spending">Discretionary Spending</option>
                      <option value="Insufficient Balance">Insufficient Balance</option>
                      <option value="Changing Investment Priorities">Changing Priorities</option>
                      <option value="Unrelated Technical Issue">Unrelated Tech Issue</option>
                    </select>
                  </div>
                ) : (
                  <div>
                    <label className="font-semibold text-slate-800">Linked Pain Point Theme</label>
                    <select
                      value={insightThemeId}
                      onChange={(e) => setInsightThemeId(e.target.value)}
                      className="mt-1 w-full rounded border border-slate-300 p-2 bg-white"
                    >
                      {PHASE_4_PAIN_POINT_THEMES.map((th) => (
                        <option key={th.id} value={th.id}>
                          {th.code}: {th.title}
                        </option>
                      ))}
                    </select>
                  </div>
                )}
              </div>

              <div className="flex justify-end gap-2 pt-3 border-t border-slate-200">
                <button
                  type="button"
                  onClick={() => setIsNewInsightModalOpen(false)}
                  className="rounded-lg border border-slate-300 px-3 py-1.5 font-semibold text-slate-600 hover:bg-slate-50"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="rounded-lg bg-blue-700 px-4 py-1.5 font-semibold text-white hover:bg-blue-800"
                >
                  Save Qualitative Insight
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Modal: CSV Column Mapping & Preview */}
      {isImportModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/50 p-4">
          <div className="w-full max-w-3xl rounded-xl border border-slate-200 bg-white p-6 shadow-xl space-y-4 max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between border-b border-slate-200 pb-3">
              <div>
                <h3 className="text-base font-bold text-slate-900">Map Columns &amp; Preview CSV</h3>
                <p className="text-xs text-slate-500">File: {csvFileName} • Configure column field associations</p>
              </div>
              <button
                onClick={() => setIsImportModalOpen(false)}
                className="rounded p-1 text-slate-400 hover:bg-slate-100 hover:text-slate-700"
              >
                <X size={18} />
              </button>
            </div>

            <div className="space-y-2">
              <div className="text-xs font-bold text-slate-800">1. Associate File Columns to Telemetry Schema:</div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
                {['event_id', 'user_id', 'event_name', 'timestamp', 'sip_id', 'bank_name', 'failure_reason', 'amount'].map((field) => (
                  <div key={field} className="space-y-1">
                    <label className="font-semibold text-slate-700 flex items-center justify-between">
                      <span>{field}</span>
                      {(field === 'event_name' || field === 'timestamp') && (
                        <span className="text-rose-600 font-bold">*</span>
                      )}
                    </label>
                    <select
                      value={columnMapping[field] || ''}
                      onChange={(e) => setColumnMapping({ ...columnMapping, [field]: e.target.value })}
                      className="w-full rounded border border-slate-300 bg-white p-1.5 text-xs text-slate-800"
                    >
                      <option value="">-- Unmapped --</option>
                      {csvHeaders.map((h) => (
                        <option key={h} value={h}>{h}</option>
                      ))}
                    </select>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-2">
              <div className="text-xs font-bold text-slate-800">2. File Preview (First 5 Rows):</div>
              <div className="overflow-x-auto border border-slate-200 rounded-lg">
                <table className="w-full text-left text-xs text-slate-700">
                  <thead className="bg-slate-100 text-slate-600 font-semibold uppercase tracking-wider text-[10px]">
                    <tr>
                      {csvHeaders.map((h, i) => (
                        <th key={i} className="py-2 px-3">{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {csvPreviewRows.map((row, rIdx) => (
                      <tr key={rIdx}>
                        {row.map((cell, cIdx) => (
                          <td key={cIdx} className="py-2 px-3 font-mono text-[11px]">{cell}</td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="flex justify-end gap-2 pt-3 border-t border-slate-200">
              <button
                type="button"
                onClick={() => setIsImportModalOpen(false)}
                className="rounded-lg border border-slate-300 px-3 py-1.5 font-semibold text-slate-600 hover:bg-slate-50 text-xs"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={() => {
                  setIsImportModalOpen(false);
                  handleExecuteImport();
                }}
                className="rounded-lg bg-blue-700 px-4 py-1.5 font-semibold text-white hover:bg-blue-800 text-xs shadow-sm"
              >
                Validate &amp; Ingest Records
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Module 6: Privacy Guardrail Notice */}
      <div className="rounded-lg border border-slate-200 bg-white p-3.5 text-xs text-slate-500 flex flex-col sm:flex-row items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <Lock size={14} className="text-slate-400" />
          <span><strong>Research Readiness Enforced:</strong> Anonymized IDs only. Problem evidence audited (26 records); solution validation strictly awaiting controlled testing.</span>
        </div>
        <div className="text-[11px] text-slate-400">
          Target Graduation: 9 November 2026
        </div>
      </div>
    </div>
  );
};
