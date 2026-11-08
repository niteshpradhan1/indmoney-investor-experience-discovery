import React from 'react';
import {
  LayoutDashboard,
  BookOpen,
  PieChart,
  Lightbulb,
  Briefcase,
  Smartphone,
  ClipboardList,
  ShieldCheck,
  Calendar,
  HelpCircle,
  CheckSquare
} from 'lucide-react';
import { NavSection } from '../types';

interface NavigationProps {
  activeSection: NavSection;
  onSelectSection: (section: NavSection) => void;
  evidenceCount: number;
  themeCount: number;
  opportunityCount: number;
  candidateCount?: number;
}

export const Navigation: React.FC<NavigationProps> = ({
  activeSection,
  onSelectSection,
  evidenceCount,
  themeCount,
  opportunityCount,
  candidateCount = 235
}) => {
  const navItems: { id: NavSection; label: string; icon: React.FC<{ size?: number; className?: string }>; badge?: string | number; highlight?: boolean }[] = [
    { id: 'overview', label: 'Overview', icon: LayoutDashboard },
    { id: 'review_workspace', label: 'Evidence Review', icon: CheckSquare, badge: `${candidateCount} Candidates`, highlight: true },
    { id: 'evidence', label: 'Evidence Library', icon: BookOpen, badge: `${evidenceCount} Audited` },
    { id: 'themes', label: 'Themes & Insights', icon: PieChart, badge: themeCount },
    { id: 'opportunities', label: 'Opportunities', icon: Lightbulb, badge: opportunityCount },
    { id: 'h1_workspace', label: 'H1 Project Workspace', icon: Briefcase, badge: 'Selected', highlight: true },
    { id: 'prototype', label: 'SIP Recovery Prototype', icon: Smartphone, badge: '5 Screens', highlight: true },
    { id: 'survey', label: 'Interviews & Telemetry', icon: HelpCircle, badge: 'Phase 5', highlight: true },
    { id: 'decision_log', label: 'Decision Log', icon: ClipboardList }
  ];

  return (
    <aside className="rounded-xl border border-slate-200 bg-white p-3 shadow-sm h-fit">
      <div className="mb-3 px-3 py-2 text-[11px] font-semibold uppercase tracking-wider text-slate-400">
        Research Workspace
      </div>

      <nav className="space-y-1">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeSection === item.id;

          return (
            <button
              key={item.id}
              onClick={() => onSelectSection(item.id)}
              className={`w-full flex items-center justify-between rounded-lg px-3 py-2.5 text-sm font-medium transition text-left ${
                isActive
                  ? 'bg-blue-50 text-blue-900 font-semibold border-l-4 border-blue-700'
                  : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
              }`}
            >
              <div className="flex items-center gap-2.5">
                <Icon
                  size={17}
                  className={isActive ? 'text-blue-700' : 'text-slate-400'}
                />
                <span>{item.label}</span>
              </div>

              {item.badge && (
                <span
                  className={`rounded-full px-2 py-0.5 text-[10px] font-semibold ${
                    item.highlight
                      ? 'bg-blue-100 text-blue-800'
                      : isActive
                      ? 'bg-blue-200/60 text-blue-900'
                      : 'bg-slate-100 text-slate-600'
                  }`}
                >
                  {item.badge}
                </span>
              )}
            </button>
          );
        })}
      </nav>

      <div className="mt-6 rounded-lg border border-slate-100 bg-slate-50 p-3 text-xs leading-5 text-slate-500">
        <div className="flex items-center gap-1.5 font-semibold text-slate-700 mb-1">
          <ShieldCheck size={14} className="text-emerald-600" />
          <span>Research Guardrail</span>
        </div>
        AI generates candidate themes and drafts. Every insight, hypothesis, and recommendation is reviewed and validated by human PMs.
      </div>

      <div className="mt-4 pt-3 border-t border-slate-100 px-2 text-[11px] text-slate-400 flex items-center justify-between">
        <span className="flex items-center gap-1">
          <Calendar size={11} className="text-blue-700" />
          Target: 9 Nov 2026
        </span>
        <span className="text-emerald-700 font-bold">Phase 2 Audit</span>
      </div>
    </aside>
  );
};
