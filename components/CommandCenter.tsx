


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
            <div className="max-w-7xl mx-auto space-y-6">
                
                {/* Top Section: Nexus Control Matrix - Full Width */}
                <div className="bg-white shadow-2xl border border-stone-200 rounded-lg overflow-hidden">
                    <div className="bg-bw-navy p-8 sm:p-10 lg:p-12 text-white">
                        <div className="flex items-center gap-2 text-bw-gold font-bold tracking-widest text-xs uppercase mb-4">
                            <Layers size={14} /> Nexus Intelligence OS v6.0 — Live Regional Intelligence Platform
                        </div>
                        
                        <h1 className="text-3xl md:text-4xl font-serif font-bold mb-2 leading-tight text-white">
                            Welcome to the Nexus Control Matrix
                        </h1>
                        
                        <p className="text-bw-gold text-sm font-medium mb-6 italic">
                            The world's first live AI platform 100% dedicated to regional city investment, partnership, and development intelligence.
                        </p>
                        
                        <div className="text-gray-300 text-sm leading-relaxed mb-8 border-l-2 border-bw-gold pl-6 max-w-5xl space-y-4">
                            <p>
                                <strong className="text-white">This is not consulting. This is live intelligence.</strong> Forget weeks of waiting. Forget months of research. Forget expensive reports that arrive outdated. The Nexus OS works in real-time—building your strategic intelligence live, before your eyes, in seconds and minutes, not hours or months. You watch it happen. You control it. You own it.
                            </p>
                            <p>
                                <strong className="text-white">See what a regional city truly is—not what others want you to believe.</strong> Every regional city has a story that outsiders never hear. Local politics, hidden opportunities, infrastructure realities, community dynamics, untapped potential, genuine risks. This system cuts through perception to deliver truth. Whether you're an investor from Singapore, a development agency in Geneva, or a local entrepreneur in Tamworth—you get the same unfiltered, verified intelligence. Clarity. Confidence. Immediately.
                            </p>
                            <p>
                                <strong className="text-white">The world's first personal consultant that focuses entirely on you.</strong> You define the regions. You set the questions. You build the report—live. The system doesn't tell you what others want you to hear; it finds what you need to know. And it doesn't stop at your brief. It searches globally to discover opportunities you haven't considered—including ones in your own backyard you never knew existed.
                            </p>
                            <p>
                                <strong className="text-white">One person or a $100 billion corporation—the system treats you the same.</strong> Whether you're an individual exploring a sea-change, a family business expanding regionally, a council seeking investment, or a multinational corporation deploying capital—Nexus focuses only on you. Your goals. Your risk tolerance. Your timeline. Your success.
                            </p>
                            <p>
                                <strong className="text-white">These regional cities power nations.</strong> They grow the food. Mine the resources. Manufacture the goods. Support the communities that keep metropolitan centres running. Yet they've been systematically overlooked by traditional investment channels for a century. This platform exists to change that—permanently.
                            </p>
                            <p>
                                <strong className="text-white">Massive output. Immediate delivery.</strong> Strategic Dossiers. Investment Briefs. Partner Compatibility Reports. Risk Registers. Letters of Intent. Policy Analysis. Stakeholder Mapping. Financial Models. Implementation Roadmaps. Scenario Planning. Community Impact Assessments. Regulatory Guidance. All generated live. All verified through Multi-Agent AI cross-validation. All informed by 200+ years of economic development patterns.
                            </p>
                            <p>
                                <strong className="text-white">You take control.</strong> This is your platform. Your intelligence. Your future. Stop waiting for others to tell you what's possible. Start discovering it yourself—right now, in real-time, with the most focused regional intelligence system ever built.
                            </p>
                        </div>

                        {/* 7-Stage Process */}
                        <div className="mb-6">
                            <p className="text-bw-gold text-xs font-bold uppercase tracking-widest mb-4">The 7-Stage Live Intelligence Process</p>
                        </div>
                        
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                            {/* Step 01 */}
                            <div className="bg-white/5 border border-white/10 rounded-lg p-4 hover:bg-white/10 transition-all">
                                <div className="flex items-center gap-3 mb-2">
                                    <div className="w-8 h-8 rounded-full bg-bw-gold/20 flex items-center justify-center text-bw-gold font-bold text-xs">01</div>
                                    <h4 className="font-bold text-white text-sm">Define Your Mission</h4>
                                </div>
                                <p className="text-xs text-gray-400 leading-relaxed">
                                    Tell the system who you are, what you're seeking, and where you want to explore. Individual investor, corporate entity, government body, NGO—the system adapts to you.
                                </p>
                            </div>

                            {/* Step 02 */}
                            <div className="bg-white/5 border border-white/10 rounded-lg p-4 hover:bg-white/10 transition-all">
                                <div className="flex items-center gap-3 mb-2">
                                    <div className="w-8 h-8 rounded-full bg-bw-gold/20 flex items-center justify-center text-bw-gold font-bold text-xs">02</div>
                                    <h4 className="font-bold text-white text-sm">Set Your Parameters</h4>
                                </div>
                                <p className="text-xs text-gray-400 leading-relaxed">
                                    Investment size, risk appetite, timeline, sector focus, geographic preferences. You control every variable. The system works within your boundaries—then shows you what's beyond them.
                                </p>
                            </div>

                            {/* Step 03 */}
                            <div className="bg-white/5 border border-white/10 rounded-lg p-4 hover:bg-white/10 transition-all">
                                <div className="flex items-center gap-3 mb-2">
                                    <div className="w-8 h-8 rounded-full bg-bw-gold/20 flex items-center justify-center text-bw-gold font-bold text-xs">03</div>
                                    <h4 className="font-bold text-white text-sm">Live AI Analysis</h4>
                                </div>
                                <p className="text-xs text-gray-400 leading-relaxed">
                                    Watch in real-time as Multi-Agent AI systems cross-validate findings. No black box. No waiting. See the intelligence being built, verified, and refined before your eyes.
                                </p>
                            </div>

                            {/* Step 04 */}
                            <div className="bg-white/5 border border-white/10 rounded-lg p-4 hover:bg-white/10 transition-all">
                                <div className="flex items-center gap-3 mb-2">
                                    <div className="w-8 h-8 rounded-full bg-bw-gold/20 flex items-center justify-center text-bw-gold font-bold text-xs">04</div>
                                    <h4 className="font-bold text-white text-sm">Global Discovery</h4>
                                </div>
                                <p className="text-xs text-gray-400 leading-relaxed">
                                    The system doesn't just answer your questions—it searches globally for opportunities you haven't considered. Hidden gems. Unexpected matches. Even opportunities in your own region you never knew existed.
                                </p>
                            </div>

                            {/* Step 05 */}
                            <div className="bg-white/5 border border-white/10 rounded-lg p-4 hover:bg-white/10 transition-all">
                                <div className="flex items-center gap-3 mb-2">
                                    <div className="w-8 h-8 rounded-full bg-bw-gold/20 flex items-center justify-center text-bw-gold font-bold text-xs">05</div>
                                    <h4 className="font-bold text-white text-sm">Proprietary Scoring</h4>
                                </div>
                                <p className="text-xs text-gray-400 leading-relaxed">
                                    Five engines—SPI™, RROI™, SEAM™, IVAS™, SCF™—process 200+ years of economic patterns against live data. Success probability. Risk-adjusted returns. Partner compatibility. All quantified.
                                </p>
                            </div>

                            {/* Step 06 */}
                            <div className="bg-white/5 border border-white/10 rounded-lg p-4 hover:bg-white/10 transition-all">
                                <div className="flex items-center gap-3 mb-2">
                                    <div className="w-8 h-8 rounded-full bg-bw-gold/20 flex items-center justify-center text-bw-gold font-bold text-xs">06</div>
                                    <h4 className="font-bold text-white text-sm">Live Report Building</h4>
                                </div>
                                <p className="text-xs text-gray-400 leading-relaxed">
                                    Your Strategic Dossier builds in real-time. Sections populate as intelligence is verified. Modify. Expand. Focus. You're in control of what goes in and how deep it goes.
                                </p>
                            </div>

                            {/* Step 07 */}
                            <div className="bg-white/5 border border-white/10 rounded-lg p-4 hover:bg-white/10 transition-all">
                                <div className="flex items-center gap-3 mb-2">
                                    <div className="w-8 h-8 rounded-full bg-bw-gold/20 flex items-center justify-center text-bw-gold font-bold text-xs">07</div>
                                    <h4 className="font-bold text-white text-sm">Complete Deliverables</h4>
                                </div>
                                <p className="text-xs text-gray-400 leading-relaxed">
                                    Executive Summary. Full Dossier. Financial Models. Partner Shortlists. Risk Registers. Letters of Intent. Policy Briefs. Implementation Roadmaps. Download, share, act.
                                </p>
                            </div>

                            {/* Bonus */}
                            <div className="bg-bw-gold/10 border border-bw-gold/30 rounded-lg p-4">
                                <div className="flex items-center gap-3 mb-2">
                                    <div className="w-8 h-8 rounded-full bg-bw-gold flex items-center justify-center text-bw-navy font-bold text-xs">+</div>
                                    <h4 className="font-bold text-bw-gold text-sm">Ongoing Intelligence</h4>
                                </div>
                                <p className="text-xs text-gray-300 leading-relaxed">
                                    Your mission doesn't end at delivery. Reactive monitoring continues. Alerts when opportunities emerge. Updates when conditions change. Your intelligence stays live.
                                </p>
                            </div>
                        </div>

                        {/* Key Differentiators */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 pt-6 border-t border-white/10">
                            <div className="text-center">
                                <p className="text-bw-gold text-2xl font-bold">Live</p>
                                <p className="text-gray-400 text-xs">Real-Time Intelligence</p>
                            </div>
                            <div className="text-center">
                                <p className="text-bw-gold text-2xl font-bold">200+</p>
                                <p className="text-gray-400 text-xs">Years of Patterns</p>
                            </div>
                            <div className="text-center">
                                <p className="text-bw-gold text-2xl font-bold">35+</p>
                                <p className="text-gray-400 text-xs">Regional Cities</p>
                            </div>
                            <div className="text-center">
                                <p className="text-bw-gold text-2xl font-bold">10%</p>
                                <p className="text-gray-400 text-xs">Reinvested in Communities</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Section: Terms, Compliance & Business Disclaimer - Full Width */}
                <div className="bg-white shadow-xl border border-stone-200 rounded-lg overflow-hidden">
                    <div className="p-6 sm:p-8 bg-stone-50">
                        <h3 className="text-bw-navy font-bold uppercase tracking-widest text-xs mb-4 flex items-center gap-2">
                            <ShieldAlert size={16} className="text-bw-gold" /> Terms of Engagement, Compliance & Business Disclaimer
                        </h3>

                        <div className="space-y-4 text-xs text-stone-600 bg-white p-5 rounded-sm border border-stone-200 max-h-64 overflow-y-auto shadow-inner">
                            
                            {/* Business Disclaimer */}
                            <div className="bg-amber-50 border border-amber-200 rounded p-3 mb-4">
                                <p className="text-amber-900 font-bold text-xs uppercase tracking-wide mb-2">Important Business Disclaimer</p>
                                <p className="text-amber-800 text-xs leading-relaxed">
                                    Strategic Intelligence Briefs are prepared by BW Global Advisory (ABN 55 978 113 300) using our proprietary AI-Human analytical capabilities. Analysis is based on publicly available data, BWGA's AI Economic Strategy Engine (Nexus v6.0), and regional insights gathered by our advisory team. While every effort is made to ensure accuracy at the time of generation, all briefs are illustrative, intended for strategic discussion, and <strong>do not constitute financial, legal, or investment advice</strong>. Users are advised to conduct comprehensive independent due diligence before making any investment or partnership decisions.
                                </p>
                            </div>

                            {/* Service Nature Notice */}
                            <div className="bg-blue-50 border border-blue-200 rounded p-3 mb-4">
                                <p className="text-blue-900 font-bold text-xs uppercase tracking-wide mb-2">Service Nature & Engagement</p>
                                <p className="text-blue-800 text-xs leading-relaxed">
                                    BW Global Advisory specializes in providing tailored, in-depth AI-Human Intelligence Reports on a commissioned basis. The analysis and insights presented are derived from publicly available information combined with the application of BWGA's proprietary AI Economic Strategy Engine. While prepared with diligence, all outputs are intended for strategic evaluation purposes only. They do not constitute formal advice, a complete market study, or a guarantee of future outcomes. We welcome discussions regarding how our services may be specifically applied to meet your strategic objectives.
                                </p>
                            </div>

                            {/* Terms of Engagement */}
                            <p className="text-stone-500 text-[10px] uppercase tracking-wider font-bold border-b border-stone-200 pb-1 mb-2">Terms of Engagement</p>
                            
                            <p><strong className="text-stone-900">1. Acceptance & Commercial License:</strong> By accessing the BW Nexus AI platform (v6.0), you acknowledge and accept these Terms of Engagement in full. Upon completion of payment, Strategic Intelligence Reports and associated deliverables become the intellectual property of the commissioning party. BW Global Advisory (ABN 55 978 113 300) retains rights to anonymized, aggregated data solely for system improvement and research purposes.</p>
                            
                            <p><strong className="text-stone-900">2. Platform Architecture:</strong> This platform utilizes a Multi-Agent AI architecture with multiple independent AI systems operating in parallel. All outputs undergo cross-validation to eliminate single-source bias. No AI-generated insight is presented without verification from at least one independent analytical pathway.</p>
                            
                            <p><strong className="text-stone-900">3. Regional Development Focus:</strong> The Nexus OS exists exclusively to facilitate investment, partnership, and development in regional cities worldwide. It is the first and only AI system 100% dedicated to bridging global capital with the communities that sustain national economies—the places that grow food, mine resources, manufacture goods, and support the populations that keep larger cities functioning.</p>
                            
                            <p><strong className="text-stone-900">4. Decision Support Tool — Not Financial Advice:</strong> The Nexus OS provides probabilistic insights, data-driven analysis, and strategic recommendations. It is expressly NOT a final decision authority and does NOT constitute financial, legal, tax, or investment advice. All outputs are advisory in nature. Users must exercise independent judgment, verify all critical findings, and seek qualified professional advice before making binding commitments.</p>
                            
                            <p><strong className="text-stone-900">5. Due Diligence Requirement:</strong> Users acknowledge their responsibility to conduct comprehensive independent due diligence before acting on any analysis, recommendation, or insight provided by this platform. BW Global Advisory provides strategic intelligence to inform decisions—not to replace the professional judgment of qualified advisors.</p>
                            
                            <p><strong className="text-stone-900">6. Data Privacy & Security:</strong> Full compliance with GDPR (EU), CCPA (California), Privacy Act 1988 (Australia), and SOC 2 Type II standards. Your data is cryptographically isolated, never commingled with other clients' data, never used to train public AI models, and never shared with third parties without explicit written consent. All data protected by 256-bit AES encryption at rest and TLS 1.3 encryption in transit.</p>
                            
                            <p><strong className="text-stone-900">7. Historical Data & Analytical Accuracy:</strong> Analysis is informed by 200+ years of economic development patterns (1820–2025) combined with real-time data feeds from global institutions. While methodology is rigorous, investment and partnership in regional markets involves inherent uncertainty. Historical patterns inform probability assessments but do not guarantee future results. Users must independently verify all material facts.</p>
                            
                            <p><strong className="text-stone-900">8. Proprietary Intellectual Property:</strong> SPI™ (Success Probability Index), RROI™ (Regional Return on Investment), SEAM™ (Stakeholder & Entity Alignment Matrix), IVAS™ (Investment Validation & Assurance System), and SCF™ (Strategic Confidence Framework) are proprietary calculation engines owned exclusively by BW Global Advisory. All methodologies, algorithms, and analytical frameworks are confidential intellectual property protected under Australian and international law.</p>
                            
                            <p><strong className="text-stone-900">9. Community Investment Program:</strong> 10% of all report fees are reinvested into community-identified development initiatives within analyzed regions. This includes education programs, local health initiatives, skills training, and small-scale livelihood support. Annual impact reports documenting all community investments are published and available upon request.</p>
                            
                            <p><strong className="text-stone-900">10. Ethical AI Guardrails:</strong> All AI agents operate within strict ethical constraints. The system will not: generate analysis promoting exploitation of vulnerable communities; facilitate circumvention of legitimate regulations; produce recommendations that would predictably cause significant harm to local populations; or discriminate based on protected characteristics. Environmental impact is factored into all regional assessments.</p>
                            
                            <p><strong className="text-stone-900">11. Report Validity & Standard Deliverables:</strong> Strategic Intelligence Reports are considered current for 90 days from date of generation. Standard package includes: Executive Summary, Full Strategic Dossier, Financial Model (Excel), Validated Partner Shortlist with profiles, Comprehensive Risk Register, Multi-Scenario Analysis, and Implementation Roadmap. Standard turnaround is 48 hours; expedited delivery available upon request. Updates may be commissioned at reduced rates.</p>
                            
                            <p><strong className="text-stone-900">12. Limitation of Liability:</strong> To the maximum extent permitted by applicable law, BW Global Advisory, its directors, employees, and agents shall not be liable for any direct, indirect, incidental, special, consequential, or punitive damages arising from use of the platform or reliance on its outputs. In all circumstances, total aggregate liability shall not exceed fees actually paid for the specific report or service in question.</p>
                            
                            <p><strong className="text-stone-900">13. Indemnification:</strong> Users agree to indemnify and hold harmless BW Global Advisory from any claims, damages, losses, or expenses arising from: (a) misuse of the platform; (b) reliance on outputs without independent verification; (c) failure to obtain appropriate professional advice; or (d) violation of these Terms of Engagement.</p>
                            
                            <p><strong className="text-stone-900">14. Governing Law & Dispute Resolution:</strong> These Terms of Engagement are governed by the laws of Australia. Any disputes shall be resolved through binding arbitration in Sydney, Australia, under the rules of the International Chamber of Commerce (ICC), unless otherwise agreed in writing by both parties.</p>
                            
                            <p><strong className="text-stone-900">15. Modifications & Severability:</strong> BW Global Advisory reserves the right to modify these terms with 30 days advance notice for material changes. Continued use after notification constitutes acceptance. If any provision is found unenforceable, remaining provisions continue in full force and effect.</p>
                            
                            <p className="text-stone-400 text-[10px] italic mt-4 pt-2 border-t border-stone-100">
                                Terms Version 6.0 | Effective December 2025 | BW Global Advisory (ABN 55 978 113 300) | Sydney, Australia
                            </p>
                        </div>

                        <div className="mt-6 pt-6 border-t border-stone-200">
                            <label className="flex items-start gap-3 cursor-pointer select-none group mb-6">
                                <div className={`w-5 h-5 border rounded flex items-center justify-center transition-all flex-shrink-0 mt-0.5 ${accepted ? 'bg-bw-navy border-bw-navy' : 'bg-white border-stone-300 group-hover:border-bw-navy'}`}>
                                    {accepted && <CheckCircle2 className="w-3.5 h-3.5 text-white" />}
                                </div>
                                <input type="checkbox" className="hidden" checked={accepted} onChange={e => setAccepted(e.target.checked)} />
                                <span className="text-sm text-stone-700">I have read, understood, and accept the Terms of Engagement, Business Disclaimer, and Compliance Requirements. I acknowledge this is a decision-support tool and does not constitute financial, legal, or investment advice. All final decisions remain my responsibility.</span>
                            </label>

                            <div className="flex flex-col sm:flex-row gap-4">
                                <button 
                                    onClick={onCreateNew}
                                    disabled={!accepted}
                                    className="flex-1 bg-bw-navy text-white py-4 px-8 rounded-sm font-bold text-sm uppercase tracking-wide flex items-center justify-center gap-3 hover:bg-bw-gold hover:text-bw-navy transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-lg group"
                                >
                                    {!accepted ? <Lock size={18} /> : <Play size={18} />} 
                                    <span>Begin Intelligence Report</span>
                                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Footer */}
                <div className="text-center py-4">
                    <p className="text-xs text-stone-500">
                        © 2025 BW Global Advisory (ABN 55 978 113 300). All Rights Reserved.
                    </p>
                    <p className="text-xs text-stone-400 mt-1">
                        Nexus Intelligence OS v6.0 | Sydney, Australia | Bridging Global Capital with Regional Communities
                    </p>
                </div>
            </div>
        </div>
    );
};

export default CommandCenter;
