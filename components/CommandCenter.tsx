


import React, { useState } from 'react';
import { ReportParameters } from '../types';
import { 
    Play, CheckCircle2, ShieldAlert, 
    Globe, Lock, ArrowRight, FileText, Cpu, Target, Layers
} from 'lucide-react';

interface CommandCenterProps {
    savedReports: ReportParameters[];
    onCreateNew: () => void;
    onLoadReport: (report: ReportParameters) => void;
    onOpenInstant: () => void;
    onOpenSimulator: () => void;
}

const CommandCenter: React.FC<CommandCenterProps> = ({
    savedReports,
    onCreateNew,
    onLoadReport,
    onOpenSimulator
}) => {
    const [accepted, setAccepted] = useState(false);

    return (
        <div className="w-full min-h-screen bg-stone-100 p-4 sm:p-6 md:p-8 lg:p-12 pb-8 font-sans overflow-y-auto">
            <div className="max-w-7xl mx-auto bg-white shadow-2xl border border-stone-200 rounded-lg overflow-hidden flex flex-col lg:flex-row mb-8">
                
                {/* Left Panel: Introduction & Process */}
                <div className="lg:w-7/12 bg-bw-navy p-8 sm:p-10 lg:p-12 text-white flex flex-col relative overflow-hidden">
                    <div className="relative z-10 mb-auto">
                        <div className="flex items-center gap-2 text-bw-gold font-bold tracking-widest text-xs uppercase mb-6">
                            <Layers size={14} /> Nexus Intelligence OS v4.2
                        </div>
                        
                        <h1 className="text-4xl md:text-5xl font-serif font-bold mb-8 leading-tight text-white">
                            Nexus Control Matrix
                        </h1>
                        
                        <div className="text-gray-300 text-sm leading-relaxed mb-12 border-l-2 border-bw-gold pl-6 max-w-xl space-y-4">
                            <p>
                                The Nexus OS is a deterministic engine designed to translate the specific "blind spots" of regional expansion into the language of global capital. By defining your entity profile and strategic intent, you activate a suite of analytical modules that feed into a 7-stage report builder.
                            </p>
                            <p>
                                Each module—from the Partnership Compatibility Engine to the Multi-Scenario Planner—contributes intelligence layers that combine into a comprehensive Strategic Dossier. This output includes Success Probability Scoring, a validated Partner Shortlist, and a playbook for navigating regional complexity.
                            </p>
                        </div>
                    </div>

                    <div className="relative z-10 space-y-10">
                        {/* Step 01 */}
                        <div className="flex gap-5 group">
                            <div className="flex-shrink-0 w-12 h-12 rounded-full border border-bw-gold/30 bg-bw-gold/10 flex items-center justify-center text-bw-gold font-bold text-lg group-hover:bg-bw-gold group-hover:text-bw-navy transition-all duration-300">
                                01
                            </div>
                            <div>
                                <h4 className="font-bold text-white text-base mb-1 flex items-center gap-2">
                                    Input Context <Target size={14} className="text-bw-gold" />
                                </h4>
                                <p className="text-xs text-gray-400 leading-relaxed max-w-md">
                                    <strong className="text-white">What it is:</strong> This is the foundational data-gathering phase. You will be guided through the "Primary Steps" (Identity, Mandate, Market, Risk) to build a comprehensive profile of your strategic goals. <br/><strong className="text-white mt-2 block">What you get:</strong> A complete, data-rich draft of your Strategic Roadmap that populates in real-time, serving as the single source of truth for all subsequent analysis.
                                </p>
                            </div>
                        </div>

                        {/* Step 02 */}
                        <div className="flex gap-5 group">
                            <div className="flex-shrink-0 w-12 h-12 rounded-full border border-bw-gold/30 bg-bw-gold/10 flex items-center justify-center text-bw-gold font-bold text-lg group-hover:bg-bw-gold group-hover:text-bw-navy transition-all duration-300">
                                02
                            </div>
                            <div>
                                <h4 className="font-bold text-white text-base mb-1 flex items-center gap-2">
                                    Analytical Processing <Cpu size={14} className="text-bw-gold" />
                                </h4>
                                <p className="text-xs text-gray-400 leading-relaxed max-w-md">
                                    <strong className="text-white">What it is:</strong> The interactive analysis phase where you leverage the system's core intelligence. Here you can stress-test your strategy and uncover hidden insights using a suite of powerful analytical tools. <br/><strong className="text-white mt-2 block">What you get:</strong> Deeper, actionable insights by modeling financial outcomes with the "ROI Diagnostic", exploring possibilities with the "Scenario Planner", or scoring potential partners with the "Compatibility Engine".
                                </p>
                            </div>
                        </div>

                        {/* Step 03 */}
                        <div className="flex gap-5 group">
                            <div className="flex-shrink-0 w-12 h-12 rounded-full border border-bw-gold/30 bg-bw-gold/10 flex items-center justify-center text-bw-gold font-bold text-lg group-hover:bg-bw-gold group-hover:text-bw-navy transition-all duration-300">
                                03
                            </div>
                            <div>
                                <h4 className="font-bold text-white text-base mb-1 flex items-center gap-2">
                                    Report Generation <FileText size={14} className="text-bw-gold" />
                                </h4>
                                <p className="text-xs text-gray-400 leading-relaxed max-w-md">
                                    <strong className="text-white">What it is:</strong> The final output stage where you transition from the live draft to generating a suite of official, stakeholder-ready documents. <br/><strong className="text-white mt-2 block">What you get:</strong> After accepting the finalized draft, you unlock a comprehensive menu to generate tangible artifacts like a Full Strategic Dossier, Financial Models, and formal Letters of Intent, all tailored to specific audiences.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Panel: Terms & Actions */}
                <div className="lg:w-5/12 p-6 sm:p-8 lg:p-10 flex flex-col bg-stone-50 border-l border-stone-200">
                    <div className="flex-1">
                        <h3 className="text-bw-navy font-bold uppercase tracking-widest text-xs mb-6 flex items-center gap-2">
                            <ShieldAlert size={16} className="text-bw-gold" /> Terms of Engagement & Compliance
                        </h3>

                        <div className="space-y-4 text-xs text-stone-600 bg-white p-6 rounded-sm border border-stone-200 h-80 overflow-y-auto shadow-inner">
                            <p><strong className="text-stone-900 block mb-1">1. Intelligence Layer, Not a CRM:</strong> The Nexus OS is an "Early-Stage Intelligence Layer" designed to operate upstream of your CRM, ERP, or Investment Committee. It provides the initial "Go/No-Go" signals and strategic frameworks for regional engagement.</p>
                            <p><strong className="text-stone-900 block mb-1">2. Decision Support, Not Authority:</strong> The system provides probabilistic insights and data-driven recommendations. Users, especially at 'Novice' levels, should verify critical outputs with 'Expert' domain holders. Final strategic decisions remain your sole responsibility.</p>
                            <p><strong className="text-stone-900 block mb-1">3. Data Sovereignty & Isolation:</strong> The system adheres to strict GDPR and local data sovereignty protocols. Your custom operational data and strategic intents are cryptographically isolated and are never used to train public models.</p>
                            <p><strong className="text-stone-900 block mb-1">4. Financial & Operational Simulations:</strong> All financial models (ROI, IRR, etc.) are simulations based on the data you provide and historical benchmarks. They are not to be construed as financial advice. The accuracy of these models scales dynamically with the granularity of your inputs.</p>
                            <p><strong className="text-stone-900 block mb-1">5. Predictive Limits:</strong> Our proprietary dataset spans ~1925-2025, enabling the identification of long-wave economic cycles and historical failure patterns. However, unforeseen "black swan" events can impact predictive accuracy.</p>
                            <p><strong className="text-stone-900 block mb-1">6. AI Agent Validation:</strong> Semi-autonomous AI agents construct intelligence dossiers within strict ethical and logical guardrails. It is the user's responsibility to validate critical data points before making final commitments.</p>
                            <p><strong className="text-stone-900 block mb-1">7. No Guarantees & User Responsibility:</strong> While great effort has been made to ensure the accuracy of the data and analyses, this system is a decision-support tool, not a final say. The onus is on the user to verify all information before making financial or strategic commitments. We welcome feedback to help build a better service.</p>
                            <p><strong className="text-stone-900 block mb-1">8. Logical Integrity Protocol:</strong> The Neuro-Symbolic core enforces logical consistency. The system will flag or halt processes if user inputs fundamentally contradict established economic principles or fail data integrity checks.</p>
                        </div>
                    </div>

                    <div className="mt-8 border-t border-stone-200 pt-8">
                        <label className="flex items-center gap-3 cursor-pointer mb-8 select-none group">
                            <div className={`w-5 h-5 border rounded flex items-center justify-center transition-all ${accepted ? 'bg-bw-navy border-bw-navy' : 'bg-white border-stone-300 group-hover:border-bw-navy'}`}>
                                {accepted && <CheckCircle2 className="w-3.5 h-3.5 text-white" />}
                            </div>
                            <input type="checkbox" className="hidden" checked={accepted} onChange={e => setAccepted(e.target.checked)} />
                            <span className="text-sm font-bold text-stone-700">I have read and accept the terms of engagement.</span>
                        </label>

                        <div className="flex flex-col gap-3">
                            <button 
                                onClick={onCreateNew}
                                disabled={!accepted}
                                className="w-full bg-bw-navy text-white py-4 px-6 rounded-sm font-bold text-sm uppercase tracking-wide flex items-center justify-between gap-2 hover:bg-bw-gold hover:text-bw-navy transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-lg group"
                            >
                                <span className="flex items-center gap-3">{!accepted ? <Lock size={16} /> : <Play size={16} />} Initiate New Mission</span>
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </button>
                            
                            <button 
                                onClick={onOpenSimulator}
                                className="w-full bg-white text-stone-600 border border-stone-300 py-3 px-6 rounded-sm font-bold text-xs uppercase tracking-wide flex items-center justify-center gap-2 hover:bg-stone-100 hover:text-stone-900 transition-all"
                            >
                                <Globe size={14} />
                                View System Monitor
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CommandCenter;
