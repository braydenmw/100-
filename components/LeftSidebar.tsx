import React, { useMemo } from 'react';
import { Zap, AlertTriangle, Lightbulb, HelpCircle, ArrowRight, Loader2, CheckCircle, Sparkles, ShieldCheck, FileText, Flag } from 'lucide-react';
import { CopilotInsight } from '../types';

interface LeftSidebarProps {
  insights: CopilotInsight[];
  isLoading: boolean;
  readinessPercent?: number;
  stepStates?: Array<{ id: string; label: string; missing: number }>;
  docReadiness?: Array<{ id: string; label: string; ready: boolean }>;
  blockers?: string[];
  onContinueIntake?: () => void;
  onOpenDraft?: () => void;
}

const LeftSidebar: React.FC<LeftSidebarProps> = ({
  insights,
  isLoading,
  readinessPercent = 50,
  stepStates = [
    { id: 'identity', label: 'Identity', missing: 1 },
    { id: 'mission', label: 'Mission', missing: 1 },
    { id: 'partner', label: 'Partner', missing: 1 },
    { id: 'constraints', label: 'Constraints/Proof', missing: 2 },
  ],
  docReadiness = [
    { id: 'executive-summary', label: 'Exec Summary', ready: false },
    { id: 'entry-advisory', label: 'Entry Advisory', ready: false },
    { id: 'cultural-brief', label: 'Cultural Brief', ready: false },
    { id: 'loi', label: 'LOI', ready: false },
    { id: 'risk', label: 'Risk', ready: false },
  ],
  blockers = ['Set country and city', 'Add at least one partner persona'],
  onContinueIntake,
  onOpenDraft,
}) => {
  const getIcon = (type: string) => {
    switch (type) {
      case 'warning': return <AlertTriangle size={16} className="text-amber-600" />;
      case 'opportunity': return <Lightbulb size={16} className="text-emerald-600" />;
      case 'question': return <HelpCircle size={16} className="text-blue-600" />;
      default: return <Zap size={16} className="text-purple-600" />;
    }
  };

  const getBgColor = (type: string) => {
    switch (type) {
      case 'warning': return 'bg-amber-50 border-amber-100';
      case 'opportunity': return 'bg-emerald-50 border-emerald-100';
      case 'question': return 'bg-blue-50 border-blue-100';
      default: return 'bg-purple-50 border-purple-100';
    }
  };

  const grouped = useMemo(() => {
    return ['warning', 'opportunity', 'question'].map(type => ({
      type,
      items: insights.filter(i => i.type === type as CopilotInsight['type']),
    })).filter(group => group.items.length > 0);
  }, [insights]);

  const progressClamp = Math.min(Math.max(readinessPercent, 0), 100);

  return (
    <div className="w-88 bg-white border-r border-stone-200 flex flex-col h-[calc(100vh-64px)] overflow-hidden shrink-0 hidden xl:flex">
      <div className="p-5 border-b border-stone-100 bg-gradient-to-r from-slate-50 via-white to-amber-50/40 backdrop-blur-sm sticky top-0 z-10">
        <div className="flex items-center justify-between">
          <div className="flex flex-col">
            <div className="flex items-center gap-2 text-xs uppercase tracking-[0.14em] text-stone-500 font-semibold">
              <Sparkles size={14} className="text-amber-500" /> Control Matrix
            </div>
            <h2 className="mt-1 font-semibold text-stone-900 text-lg leading-tight">Build once, ship draft & final</h2>
            <p className="text-[12px] text-stone-500">Fill the essentials, unlock the live draft, then finalize.</p>
          </div>
          {isLoading && <Loader2 size={18} className="animate-spin text-blue-500" />}
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-5 space-y-5 bg-stone-50/40">
        <div className="p-4 rounded-2xl bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700 text-white shadow-lg">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-xs uppercase tracking-[0.18em] text-white/60">Readiness</div>
              <div className="text-3xl font-semibold mt-1">{progressClamp}%</div>
              <p className="text-[12px] text-white/70 mt-1">Complete the checkpoints to unlock the draft & final report.</p>
            </div>
            <div className="relative">
              <div className="w-16 h-16 rounded-full border-4 border-white/15 flex items-center justify-center">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-sm font-semibold">{progressClamp}%</div>
              </div>
              <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 text-[11px] text-white/70">Live draft</span>
            </div>
          </div>
          <div className="mt-3 flex flex-wrap gap-2">
            {stepStates.map(step => (
              <span key={step.id} className={`px-2 py-1 rounded-full text-[11px] border ${step.missing === 0 ? 'border-emerald-300 bg-emerald-200/20 text-emerald-50' : 'border-amber-300 bg-amber-200/20 text-amber-50'}`}>
                {step.label} {step.missing > 0 ? `• ${step.missing} missing` : '• ready'}
              </span>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 gap-3">
          <button
            onClick={onContinueIntake}
            className="w-full px-4 py-3 rounded-xl bg-white border border-stone-200 text-sm font-semibold text-stone-900 hover:border-stone-300 hover:shadow-sm transition-all flex items-center justify-between"
          >
            <span className="flex items-center gap-2"><ShieldCheck size={16} className="text-emerald-600" /> Continue Intake</span>
            <ArrowRight size={14} className="text-stone-400" />
          </button>
          <button
            onClick={onOpenDraft}
            className="w-full px-4 py-3 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 text-white text-sm font-semibold shadow-md hover:shadow-lg transition-all flex items-center justify-between"
          >
            <span className="flex items-center gap-2"><FileText size={16} /> Open Live Draft</span>
            <ArrowRight size={14} className="text-white/80" />
          </button>
        </div>

        <div className="p-4 rounded-2xl bg-white border border-stone-200 shadow-sm">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2 text-sm font-semibold text-stone-800">
              <AlertTriangle size={14} className="text-amber-500" /> Blockers to clear
            </div>
            <span className="text-[11px] text-stone-500">{blockers.length} open</span>
          </div>
          <div className="space-y-2">
            {blockers.slice(0, 3).map((b, i) => (
              <div key={i} className="flex items-start gap-2 text-[12px] text-stone-700">
                <Flag size={12} className="text-amber-500 mt-0.5" />
                <span>{b}</span>
              </div>
            ))}
            {blockers.length === 0 && <div className="text-[12px] text-emerald-700">No blockers — ready to generate.</div>}
          </div>
        </div>

        <div className="p-4 rounded-2xl bg-white border border-stone-200 shadow-sm">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2 text-sm font-semibold text-stone-800">
              <FileText size={14} className="text-blue-500" /> Document readiness
            </div>
            <span className="text-[11px] text-stone-500">Draft unlocks with 1 ready doc</span>
          </div>
          <div className="grid grid-cols-2 gap-2">
            {docReadiness.map(doc => (
              <div key={doc.id} className={`px-3 py-2 rounded-xl text-[12px] border flex items-center gap-2 ${doc.ready ? 'border-emerald-200 bg-emerald-50 text-emerald-800' : 'border-stone-200 bg-stone-50 text-stone-700'}`}>
                <CheckCircle size={12} className={doc.ready ? 'text-emerald-600' : 'text-stone-400'} />
                <span>{doc.label}</span>
              </div>
            ))}
          </div>
          {!docReadiness.some(d => d.ready) && (
            <div className="mt-2 text-[11px] text-amber-700">Add country, city, and partner to unlock.</div>
          )}
        </div>

        <div className="p-4 rounded-2xl bg-white border border-stone-200 shadow-sm">
          <div className="flex items-center gap-2 mb-3">
            <Zap size={14} className="text-purple-500" />
            <div className="text-sm font-semibold text-stone-800">Insights stream</div>
            <span className="text-[11px] text-stone-500">Live</span>
          </div>

          {insights.length === 0 && !isLoading && (
            <div className="text-center py-8 text-stone-400 text-sm border border-dashed border-stone-200 rounded-xl bg-stone-50">Enter details to generate insights...</div>
          )}

          {grouped.map(group => (
            <div key={group.type} className="space-y-2">
              <div className="text-[11px] font-semibold uppercase tracking-wide text-stone-500 flex items-center gap-2">
                {getIcon(group.type)} {group.type}
              </div>
              {group.items.map(insight => (
                <div
                  key={insight.id}
                  className={`p-4 rounded-2xl border ${getBgColor(insight.type)} shadow-sm transition-all hover:shadow-md cursor-pointer`}
                >
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex items-center gap-2">
                      {getIcon(insight.type)}
                      <span className="text-[10px] font-bold uppercase tracking-wider text-stone-600 opacity-80">{insight.type}</span>
                    </div>
                    {insight.confidence !== undefined && (
                      <div className="text-[10px] font-mono text-stone-400">{insight.confidence}%</div>
                    )}
                  </div>
                  <h3 className="font-semibold text-stone-900 text-sm mb-1 leading-snug">{insight.title}</h3>
                  <p className="text-xs text-stone-600 leading-relaxed mb-3">{insight.content}</p>
                  <div className="flex items-center text-[11px] text-blue-600 font-medium gap-1">
                    <CheckCircle size={12} />
                    Mark reviewed
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LeftSidebar;