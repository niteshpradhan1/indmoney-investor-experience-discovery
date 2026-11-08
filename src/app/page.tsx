'use client';

import React, { useState } from 'react';
import { Header } from '../components/Header';
import { Navigation } from '../components/Navigation';
import { OverviewSection } from '../components/OverviewSection';
import { EvidenceReviewWorkspace } from '../components/EvidenceReviewWorkspace';
import { EvidenceLibrary } from '../components/EvidenceLibrary';
import { ThemesInsights } from '../components/ThemesInsights';
import { OpportunityMatrix } from '../components/OpportunityMatrix';
import { H1Workspace } from '../components/H1Workspace';
import { RecoveryPrototype } from '../components/RecoveryPrototype';
import { InvestorInterviewsWorkspace } from '../components/InvestorInterviewsWorkspace';
import { DecisionLog } from '../components/DecisionLog';
import { ReportModal } from '../components/ReportModal';

import { INITIAL_EVIDENCE_ITEMS } from '../data/evidenceData';
import { INITIAL_THEMES } from '../data/themesData';
import { INITIAL_OPPORTUNITIES } from '../data/opportunitiesData';
import { NavSection, EvidenceItem, ThemeItem, HumanReviewStatus } from '../types';

export default function Home() {
  const [activeSection, setActiveSection] = useState<NavSection>('overview');
  const [evidenceItems, setEvidenceItems] = useState<EvidenceItem[]>(INITIAL_EVIDENCE_ITEMS);
  const [themes, setThemes] = useState<ThemeItem[]>(INITIAL_THEMES);
  const [isReportOpen, setIsReportOpen] = useState<boolean>(false);

  // Update Review Status on an evidence item
  const handleUpdateStatus = (id: string, newStatus: HumanReviewStatus) => {
    setEvidenceItems((prev) =>
      prev.map((item) =>
        item.id === id
          ? {
              ...item,
              humanReviewStatus: newStatus,
              reviewedBy: 'Lead PM Researcher',
            }
          : item
      )
    );
  };

  // Update Classification (theme, segment, h1 relevance)
  const handleUpdateClassification = (
    id: string,
    newTheme: string,
    newSegment: any,
    h1Relevant: boolean
  ) => {
    setEvidenceItems((prev) =>
      prev.map((item) =>
        item.id === id
          ? {
              ...item,
              assignedTheme: newTheme,
              userSegment: newSegment,
              h1Relevant,
              reviewedBy: 'Lead PM Researcher',
            }
          : item
      )
    );
  };

  // Add / Edit Researcher Notes
  const handleUpdateNotes = (id: string, notes: string) => {
    setEvidenceItems((prev) =>
      prev.map((item) =>
        item.id === id
          ? {
              ...item,
              humanReviewNotes: notes,
              reviewedBy: 'Lead PM Researcher',
            }
          : item
      )
    );
  };

  // Toggle Human Review status on a theme
  const handleToggleThemeApproval = (id: string) => {
    setThemes((prev) =>
      prev.map((t) =>
        t.id === id
          ? {
              ...t,
              humanReviewStatus:
                t.humanReviewStatus === 'approved' ? 'needs_validation' : 'approved',
            }
          : t
      )
    );
  };

  const getSectionTitle = (section: NavSection): string => {
    switch (section) {
      case 'overview':
        return 'Overview';
      case 'review_workspace':
        return 'Evidence Review Workspace & Candidate Classification';
      case 'evidence':
        return 'Evidence Library & Traceability Registry';
      case 'themes':
        return 'Themes & Insights';
      case 'opportunities':
        return 'Opportunity Prioritisation';
      case 'h1_workspace':
        return 'H1 Project Workspace';
      case 'prototype':
        return 'SIP Recovery Assistant · Evidence-to-Prototype Validation (Phase 6)';
      case 'survey':
        return 'Investor Interviews & Behavioural Journey Telemetry (Phase 5)';
      case 'decision_log':
        return 'Decision Log & Governance';
      default:
        return 'Discovery Engine';
    }
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-900 flex flex-col font-sans">
      {/* Sticky Header with PDF action and Human-Review Badge */}
      <Header
        onPrint={() => setIsReportOpen(true)}
        activeSectionTitle={getSectionTitle(activeSection)}
      />

      {/* Main Workspace Body */}
      <div className="mx-auto grid max-w-7xl w-full gap-6 px-4 sm:px-6 lg:px-8 py-8 lg:grid-cols-[240px_1fr] flex-1">
        {/* Left Sidebar Navigation */}
        <Navigation
          activeSection={activeSection}
          onSelectSection={(sec) => setActiveSection(sec)}
          evidenceCount={evidenceItems.length}
          themeCount={themes.length}
          opportunityCount={INITIAL_OPPORTUNITIES.length}
        />

        {/* Right Dynamic Content Pane */}
        <main className="space-y-6">
          {activeSection === 'overview' && (
            <OverviewSection
              onNavigate={(sec) => setActiveSection(sec)}
              evidenceCount={evidenceItems.length}
              themeCount={themes.length}
              opportunityCount={INITIAL_OPPORTUNITIES.length}
            />
          )}

          {activeSection === 'review_workspace' && (
            <EvidenceReviewWorkspace
              onNavigateToEvidenceLibrary={() => setActiveSection('evidence')}
              onNavigateToH1Workspace={() => setActiveSection('h1_workspace')}
            />
          )}

          {activeSection === 'evidence' && (
            <EvidenceLibrary
              evidenceItems={evidenceItems}
              onUpdateStatus={handleUpdateStatus}
              onUpdateClassification={handleUpdateClassification}
              onUpdateNotes={handleUpdateNotes}
              onNavigateToReviewWorkspace={() => setActiveSection('review_workspace')}
            />
          )}

          {activeSection === 'themes' && (
            <ThemesInsights
              themes={themes}
              onToggleApproval={handleToggleThemeApproval}
              onNavigateToH1={() => setActiveSection('h1_workspace')}
            />
          )}

          {activeSection === 'opportunities' && (
            <OpportunityMatrix
              opportunities={INITIAL_OPPORTUNITIES}
              onNavigate={(sec) => setActiveSection(sec)}
            />
          )}

          {activeSection === 'h1_workspace' && (
            <H1Workspace
              onNavigateToPrototype={() => setActiveSection('prototype')}
              onNavigateToEvidence={() => setActiveSection('evidence')}
            />
          )}

          {activeSection === 'prototype' && (
            <RecoveryPrototype />
          )}

          {activeSection === 'survey' && (
            <InvestorInterviewsWorkspace />
          )}

          {activeSection === 'decision_log' && (
            <DecisionLog onPrintReport={() => setIsReportOpen(true)} />
          )}
        </main>
      </div>

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-white py-4 text-xs text-slate-500">
        <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-2">
          <div>
            INDMoney Investor Experience Discovery • NextLeap PM Graduation Project (Target Deadline: 9 November 2026)
          </div>
          <div className="flex items-center gap-3 text-slate-400">
            <span>Phase 2 Research Credibility Audit Complete</span>
            <span>•</span>
            <span>Human-Assisted Research Architecture</span>
          </div>
        </div>
      </footer>

      {/* Printable Report Modal */}
      <ReportModal
        isOpen={isReportOpen}
        onClose={() => setIsReportOpen(false)}
      />
    </div>
  );
}
