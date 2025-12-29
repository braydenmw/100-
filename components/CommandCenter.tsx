import React, { useState } from 'react';
import type { EcosystemPulse } from '../services/EventBus';
import {
    ArrowRight,
    CheckCircle2,
    Lock,
    Play,
    ShieldAlert,
    SlidersHorizontal,
    Users,
    Zap,
    X,
    Brain
} from 'lucide-react';

interface CommandCenterProps {
    onCreateNew: () => void;
    ecosystemPulse?: EcosystemPulse;
}

// ============================================================================
// FORMULA REFERENCE PAPER MODAL (Word-style)
// ============================================================================
const FormulaDeepDiveModal: React.FC<{ isOpen: boolean; onClose: () => void }> = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60">
            <div className="bg-white rounded-lg shadow-2xl w-full max-w-5xl max-h-[90vh] overflow-hidden flex flex-col">
                <div className="bg-white border-b border-slate-200 px-6 py-4 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="p-2 bg-slate-50 border border-slate-200 rounded">
                            <Brain className="w-5 h-5 text-slate-900" />
                        </div>
                        <div>
                            <div className="text-slate-950 font-bold text-lg">BW Nexus AI — Intelligence Reference Paper</div>
                            <div className="text-slate-600 text-xs">NSIL + BW Brain + the 21-formula suite (5 primary engines + 16 derivative indices)</div>
                        </div>
                    </div>
                    <button onClick={onClose} className="p-2 rounded hover:bg-slate-100">
                        <X className="w-5 h-5 text-slate-700" />
                    </button>
                </div>

                <div className="flex-1 overflow-y-auto px-6 py-6">
                    <div className="max-w-5xl mx-auto">
                        <div className="text-slate-950 font-bold text-2xl leading-tight">Reference & Explanation Paper</div>
                        <div className="text-slate-600 text-sm mt-2 leading-relaxed">
                            This document explains how BW Nexus AI thinks (NSIL), what the BW Brain is, how the 21-formula suite works (5 primary engines + 16 derivative indices),
                            and how the new optimized algorithm layer enables <strong>1–3 second</strong> reasoning.
                        </div>

                        <div className="mt-4 bg-slate-50 border border-slate-200 rounded-lg p-4">
                            <div className="text-slate-950 font-bold text-sm">Quick orientation</div>
                            <div className="text-slate-700 text-sm mt-1 leading-relaxed">
                                Think of BW Nexus AI as a repeatable advisory workflow: <strong>validate → debate → score → synthesize → deliver</strong>. The formulas produce explainable scores;
                                the algorithm suite makes the same reasoning run fast, consistently, and with memory.
                            </div>
                        </div>

                        <div className="mt-6 grid grid-cols-1 lg:grid-cols-12 gap-6">
                            <div className="lg:col-span-4">
                                <div className="bg-white border border-slate-200 rounded-lg p-4 sticky top-4">
                                    <div className="text-slate-950 font-bold text-sm">Contents</div>
                                    <ul className="mt-3 space-y-2 text-sm">
                                        <li><a className="text-slate-950 hover:underline" href="#ref-agentic">0) Agentic AI status</a></li>
                                        <li><a className="text-slate-950 hover:underline" href="#ref-nsil">1) What NSIL is</a></li>
                                        <li><a className="text-slate-950 hover:underline" href="#ref-brain">2) The BW Brain</a></li>
                                        <li><a className="text-slate-950 hover:underline" href="#ref-algorithms">3) Optimized algorithm layer (1–3s)</a></li>
                                        <li><a className="text-slate-950 hover:underline" href="#ref-primary">4) The 5 primary engines</a></li>
                                        <li><a className="text-slate-950 hover:underline" href="#ref-derivatives">5) The 16 derivative indices</a></li>
                                        <li><a className="text-slate-950 hover:underline" href="#ref-reportbuild">6) How reports are built</a></li>
                                    </ul>
                                </div>
                            </div>

                            <div className="lg:col-span-8">
                                <div className="space-y-4">
                                    <details open className="bg-white border border-slate-200 rounded-lg p-4">
                                        <summary id="ref-agentic" className="cursor-pointer select-none text-slate-950 font-bold text-lg">
                                            0) Agentic AI status (implemented, transparent)
                                        </summary>
                                        <div className="text-slate-700 text-sm mt-2 leading-relaxed">
                                            BW Nexus AI operates as a proactive, agentic digital worker. The optimized algorithm suite is <strong>implemented</strong> and orchestrated by the <em>OptimizedAgenticBrain</em>, enabling full reasoning loops in <strong>1–3 seconds</strong>. Outputs are <strong>not a black box</strong>: every claim is verified, traceable, and delivered with provenance.
                                        </div>
                                        <ul className="list-disc list-inside text-slate-700 text-sm mt-2 space-y-1">
                                            <li>Autonomous loop: validate → debate → score → synthesize → deliver.</li>
                                            <li>Early-stopping multi-persona debate + contradiction checks.</li>
                                            <li>Memory retrieval with relevance ranking improves case recall.</li>
                                            <li>Parallel formula graph executes the 21-formula suite efficiently.</li>
                                        </ul>
                                        <div className="text-slate-700 text-xs mt-3 leading-relaxed">
                                            For a narrative walkthrough, see “The Agentic Brain: How It Works” in the main page section below.
                                        </div>
                                    </details>
                                    <details open className="bg-white border border-slate-200 rounded-lg p-4">
                                        <summary id="ref-nsil" className="cursor-pointer select-none text-slate-950 font-bold text-lg">
                                            1) What NSIL is (in one page)
                                        </summary>
                                        <div className="text-slate-700 text-sm mt-2 leading-relaxed">
                                            NSIL (Nexus Strategic Intelligence Layer) is the reasoning layer that wraps around the scoring engines. It does four things:
                                            (1) validates inputs, (2) runs adversarial multi-agent debate, (3) applies mathematical scoring, and (4) produces structured outputs
                                            with evidence trails and confidence levels. The goal is not “information” — it is “advice that survives scrutiny.”
                                        </div>
                                    </details>

                                    <details open className="bg-white border border-slate-200 rounded-lg p-4">
                                        <summary id="ref-brain" className="cursor-pointer select-none text-slate-950 font-bold text-lg">
                                            2) The BW Brain (how it thinks)
                                        </summary>
                                        <div className="text-slate-700 text-sm mt-2 leading-relaxed">
                                            The BW Brain is a neuro-symbolic architecture: it combines pattern recognition (neural) with explainable reasoning (symbolic).
                                            Every conclusion can be traced to drivers, pressure points, debate arguments, and formula outputs.
                                        </div>
                                        <div className="text-slate-700 text-sm mt-3 leading-relaxed">
                                            A built-in 5-persona debate reduces bias and forces real trade-offs into the open:
                                        </div>
                                        <ul className="list-disc list-inside text-slate-700 text-sm mt-2 space-y-1">
                                            <li><strong>Skeptic</strong>: hunts deal-killers, false certainty, and hidden downside.</li>
                                            <li><strong>Advocate</strong>: finds upside, synergies, and value levers.</li>
                                            <li><strong>Regulator</strong>: checks compliance pathways, sanctions risk, and ethical constraints.</li>
                                            <li><strong>Accountant</strong>: validates cash flow logic, margins, and economic durability.</li>
                                            <li><strong>Operator</strong>: tests execution feasibility: team, supply chains, infrastructure.</li>
                                        </ul>
                                    </details>

                                    <details open className="bg-slate-50 border border-slate-200 rounded-lg p-4">
                                        <summary id="ref-algorithms" className="cursor-pointer select-none text-slate-950 font-bold text-lg">
                                            3) Optimized algorithm layer (the “fast-thinking” brain)
                                        </summary>
                                        <div className="text-slate-700 text-sm mt-2 leading-relaxed">
                                            The 21 formulas define the scoring logic. The optimized algorithm layer is <strong>fully implemented</strong> and makes the workflow fast and scalable — targeting <strong>1–3 seconds</strong> for a full reasoning pass.
                                            It adds memory retrieval, contradiction checks, parallel scheduling, and early-stopping debate, all orchestrated by the <em>OptimizedAgenticBrain</em>.
                                        </div>
                                        <div className="mt-3 bg-white border border-slate-200 rounded p-3">
                                            <div className="text-slate-950 font-bold text-xs uppercase tracking-widest">Algorithm suite (implemented)</div>
                                            <ul className="list-disc list-inside text-slate-700 text-sm mt-2 space-y-1">
                                                <li><strong>VectorMemoryIndex</strong>: fast similarity search of prior cases (ANN/LSH + cosine).</li>
                                                <li><strong>SATContradictionSolver</strong>: flags conflicting intake constraints before scoring.</li>
                                                <li><strong>BayesianDebateEngine</strong>: persona debate with Bayesian updating + early stopping on consensus.</li>
                                                <li><strong>DAGScheduler</strong>: executes the 21-formula graph in parallel with memoization.</li>
                                                <li><strong>LazyEvalEngine</strong>: computes derivative indices only when needed.</li>
                                                <li><strong>DecisionTreeSynthesizer</strong>: selects the best report template and section plan.</li>
                                                <li><strong>GradientRankingEngine</strong>: learning-to-rank for relevance (improves memory retrieval quality).</li>
                                                <li><strong>OptimizedAgenticBrain</strong>: orchestrates everything into an executive brief + insights.</li>
                                            </ul>
                                        </div>
                                        <div className="mt-3 text-slate-700 text-sm leading-relaxed">
                                            Practical effect: faster iteration, clearer contradictions, better retrieval of relevant prior cases, and more consistent report structure. Outputs are <strong>transparent</strong> and <strong>auditable</strong> — not a black box.
                                        </div>
                                    </details>

                                    <details open className="bg-white border border-slate-200 rounded-lg p-4">
                                        <summary id="ref-primary" className="cursor-pointer select-none text-slate-950 font-bold text-lg">
                                            4) The 5 primary engines (the core formulas)
                                        </summary>
                                        <div className="text-slate-700 text-sm mt-2 leading-relaxed">
                                            These engines generate the first layer of hard math. They are the backbone of scoring, scenario stress-testing, and confidence.
                                        </div>

                                        <div className="mt-4 space-y-4">
                                            <div>
                                                <div className="text-slate-950 font-bold">SPI™ — Success Probability Index</div>
                                                <div className="text-slate-700 text-sm mt-1 leading-relaxed">
                                                    Estimates probability of success based on weighted factors (market readiness, partner fit, regulatory clarity, execution feasibility, and risk alignment).
                                                    Output is a 0–100 score with drivers and pressure points.
                                                </div>
                                            </div>
                                            <div>
                                                <div className="text-slate-950 font-bold">RROI™ — Regional Return on Investment</div>
                                                <div className="text-slate-700 text-sm mt-1 leading-relaxed">
                                                    Projects regional ROI with local multipliers (cost structure, incentives, infrastructure, growth trajectory).
                                                    Output is a risk-adjusted return range rather than a single-point guess.
                                                </div>
                                            </div>
                                            <div>
                                                <div className="text-slate-950 font-bold">SEAM™ — Stakeholder & Entity Alignment</div>
                                                <div className="text-slate-700 text-sm mt-1 leading-relaxed">
                                                    Maps the ecosystem (stakeholders, incentives, conflicts, influence). Flags alignment breakdowns early — where most “good on paper” deals fail later.
                                                </div>
                                            </div>
                                            <div>
                                                <div className="text-slate-950 font-bold">IVAS™ — Investment Validation Assessment</div>
                                                <div className="text-slate-700 text-sm mt-1 leading-relaxed">
                                                    Stress-tests time-to-activation and friction using scenario ranges (e.g., P10 / P50 / P90 timelines). Converts “we think we can do it fast” into a measurable activation profile.
                                                </div>
                                            </div>
                                            <div>
                                                <div className="text-slate-950 font-bold">SCF™ — Strategic Cash Flow / Confidence Framework</div>
                                                <div className="text-slate-700 text-sm mt-1 leading-relaxed">
                                                    Converts readiness + capture + timeline + debate consensus into an overall confidence-grade. This is the “board answer”: proceed, pause, or re-structure — with reasons.
                                                </div>
                                            </div>
                                        </div>
                                    </details>

                                    <details open className="bg-white border border-slate-200 rounded-lg p-4">
                                        <summary id="ref-derivatives" className="cursor-pointer select-none text-slate-950 font-bold text-lg">
                                            5) The 16 derivative indices (specialist formulas)
                                        </summary>
                                        <div className="text-slate-700 text-sm mt-2 leading-relaxed">
                                            These indices extend the primary engines with specialist domain scores. They help explain <em>why</em> a plan is strong/weak and what to fix.
                                        </div>

                                        <div className="mt-4">
                                            <div className="text-slate-950 font-bold">Strategic indices</div>
                                            <ul className="list-disc list-inside text-slate-700 text-sm mt-2 space-y-1">
                                                <li><strong>BARNA</strong> — Barriers Analysis: entry barrier strength (regulatory, competitive, capital, market access, cultural).</li>
                                                <li><strong>NVI</strong> — Network Value Index: value of partner networks and ecosystem connectivity.</li>
                                                <li><strong>CRI</strong> — Country Risk Index: country-level risk across political/economic/operational dimensions.</li>
                                                <li><strong>FRS</strong> — Flywheel Readiness Score: likelihood of compounding growth loops once activated.</li>
                                            </ul>
                                        </div>

                                        <div className="mt-4">
                                            <div className="text-slate-950 font-bold">Operational indices</div>
                                            <ul className="list-disc list-inside text-slate-700 text-sm mt-2 space-y-1">
                                                <li><strong>CAP</strong> — Capability Assessment Profile: organizational readiness to execute and adapt.</li>
                                                <li><strong>AGI</strong> — Activation Gradient Index: activation velocity and gating factors.</li>
                                                <li><strong>VCI</strong> — Value Creation Index: synergy and value-creation potential.</li>
                                                <li><strong>ATI</strong> — Asset Transfer Index: complexity/risk of transferring assets, IP, or operations.</li>
                                                <li><strong>ESI</strong> — Ecosystem Strength Index: strength of suppliers, talent, infrastructure, services.</li>
                                                <li><strong>ISI</strong> — Integration Speed Index: expected integration speed post-deal/post-entry.</li>
                                                <li><strong>OSI</strong> — Operational Synergy Index: operational synergy potential from combination.</li>
                                                <li><strong>TCO</strong> — Total Cost of Ownership: lifecycle costs (including hidden and exit costs).</li>
                                            </ul>
                                        </div>

                                        <div className="mt-4">
                                            <div className="text-slate-950 font-bold">Risk indices</div>
                                            <ul className="list-disc list-inside text-slate-700 text-sm mt-2 space-y-1">
                                                <li><strong>PRI</strong> — Political Risk Index: regime stability, policy consistency, expropriation/sovereign risks.</li>
                                                <li><strong>RNI</strong> — Regulatory Navigation Index: regulatory complexity and compliance effort.</li>
                                                <li><strong>SRA</strong> — Strategic Risk Assessment: market/execution/competitive/timing risk profile.</li>
                                                <li><strong>IDV</strong> — Investment Default Variance: variance from expected outcomes (projection fragility).</li>
                                            </ul>
                                        </div>

                                        <div className="mt-4 bg-slate-50 border border-slate-200 rounded p-4">
                                            <div className="text-slate-950 font-bold text-sm">Note on “21”</div>
                                            <div className="text-slate-700 text-sm mt-1 leading-relaxed">
                                                BW Nexus AI refers to the 21-formula suite as the 5 primary engines + 16 derivative indices shown above.
                                                In some modes, additional diagnostics may be computed for deeper analysis — but the “21” is the baseline scoring suite.
                                            </div>
                                        </div>
                                    </details>

                                    <details open className="bg-white border border-slate-200 rounded-lg p-4">
                                        <summary id="ref-reportbuild" className="cursor-pointer select-none text-slate-950 font-bold text-lg">
                                            6) How these formulas build your reports
                                        </summary>
                                        <ol className="list-decimal list-inside text-slate-700 text-sm mt-2 space-y-1">
                                            <li><strong>Intake</strong>: mission, constraints, region, partners, risk appetite are structured.</li>
                                            <li><strong>Validation</strong>: contradictions and missing constraints are flagged early.</li>
                                            <li><strong>Memory</strong>: similar prior cases are retrieved and ranked for relevance.</li>
                                            <li><strong>Debate</strong>: 5 personas argue for/against, attaching evidence and decision points.</li>
                                            <li><strong>Scoring</strong>: the 21-formula suite produces quantified scores, grades, drivers, and pressure points.</li>
                                            <li><strong>Synthesis</strong>: templates and sections are selected, then narratives are assembled for the chosen audience.</li>
                                            <li><strong>Deliverables</strong>: outputs are generated as decision-ready documents with traceable rationale.</li>
                                        </ol>
                                    </details>

                                    <div className="mt-4 text-xs text-slate-500">
                                        © 2025 BW Global Advisory. This reference paper describes proprietary methods and is provided for explanation and user orientation.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bg-white border-t border-slate-200 px-6 py-3 flex items-center justify-end">
                    <button onClick={onClose} className="px-5 py-2 bg-blue-700 text-white text-sm font-bold rounded hover:bg-blue-800">
                        Close
                    </button>
                </div>
            </div>
        </div>
    );
};

const CommandCenter: React.FC<CommandCenterProps> = ({ onCreateNew, ecosystemPulse }) => {
    const [accepted, setAccepted] = useState(false);
    const [showFormulaModal, setShowFormulaModal] = useState(false);

    const welcomeFeatures = [
        {
            icon: Zap,
            title: 'Fast-Thinking Agentic Brain (1–3 Seconds)',
            description: 'Optimized NSIL execution: contradiction checks, memory retrieval, parallel formula scheduling, and early-stopping debate.'
        },
        {
            icon: ShieldAlert,
            title: 'Incorruptible Verification',
            description: 'Every claim is cross-referenced and fact-checked. The system cannot fabricate data - it verifies or dispels.'
        },
        {
            icon: Users,
            title: 'Adversarial 5-Persona Debate',
            description: 'Skeptic, Advocate, Regulator, Accountant, Operator debate your strategy to eliminate bias and blind spots.'
        },
        {
            icon: SlidersHorizontal,
            title: '21-Formula Scoring Engine',
            description: 'SPI, RROI, SEAM, IVAS, SCF + 16 indices produce explainable, auditable scores with drivers.'
        },
        {
            icon: Brain,
            title: 'Memory-Augmented Learning',
            description: 'Vector-based case memory + relevance ranking: the system recalls similar prior cases and improves future recommendations.'
        }
    ];

    return (
        <div className="w-full min-h-screen bg-white p-4 sm:p-6 md:p-8 lg:p-10 pb-24 font-sans overflow-y-auto">
            <div className="max-w-6xl mx-auto space-y-4">
                {/* Top Section: Intro (landscape, compact) */}
                <div className="bg-white shadow-2xl border border-slate-200 rounded-lg overflow-hidden">
                    <div className="p-6 sm:p-8 lg:p-8 text-slate-900">
                        {/* 1. Introduction: The Problem + Right-Side Feature */}
                        <div className="mb-8">
                            <div className="flex flex-col lg:flex-row gap-6">
                                {/* Left: headline + issues */}
                                <div className="flex-1">
                                    <h1 className="text-3xl md:text-4xl font-serif font-bold mb-2 leading-tight text-black">
                                        BW Nexus AI — Proactive Agentic Intelligence OS
                                    </h1>
                                    <div className="text-black font-bold text-base mb-2">A new era for regional development intelligence</div>
                                    <p className="text-slate-800 text-base mb-4">
                                        Around the world, regional governments and businesses face predictable barriers: fragmented data, slow consulting cycles, and a lack of investor-grade tools. Most systems are built for big cities or generic use—not for the unique challenges of regional growth. There has never been a 100% dedicated system to help those seeking investment, partnership, and sustainable development in regional economies. That changes now.
                                    </p>
                                    <div className="mt-4">
                                        <h2 className="text-xl font-bold text-black mb-2">Current Issues Facing Regional Development</h2>
                                        <ul className="list-disc list-inside text-slate-800 text-base space-y-1">
                                            <li>Fragmented and slow data collection; no real-time intelligence.</li>
                                            <li>Invisible context and misaligned stakeholders across public/private actors.</li>
                                            <li>Consulting cycles too slow, expensive, and non-repeatable for regions.</li>
                                            <li>No investor-grade narrative or proof chain that survives scrutiny.</li>
                                            <li>Static documents that don’t execute or adapt to decision feedback.</li>
                                            <li>Lack of a common “language” bridging local realities with capital.</li>
                                        </ul>
                                    </div>
                                </div>

                                {/* Right: feature statement card */}
                                <div className="w-full lg:w-[360px] flex flex-col gap-4">
                                    {/* Entire Meadow Philosophy (summary + divider) */}
                                    <div className="rounded-lg shadow-sm bg-white border border-slate-200">
                                        <div className="h-1 w-full rounded-t bg-blue-500 mb-2" />
                                        <div className="px-4 pt-2 pb-3">
                                            <div className="text-slate-950 font-bold text-xs uppercase tracking-widest mb-1">Entire Meadow Philosophy</div>
                                            <div className="text-slate-900 font-semibold text-sm mb-1">Ecosystem-First Modeling</div>
                                            <p className="text-slate-700 text-xs leading-relaxed">
                                                Most tools focus on the "bee and the flower"—the immediate transaction. Nexus AI models the <span className="font-semibold">entire meadow</span>: the full ecosystem, context, and all stakeholders. Success depends on alignment with culture, regulation, and incentives—not just the deal itself.
                                            </p>
                                            <button className="mt-2 text-xs text-blue-700 underline hover:text-blue-900" onClick={() => alert('Full philosophy: A foundational principle of the BW Nexus AI platform is its "Entire Meadow" philosophy. Most analytical tools focus narrowly on the "bee and the flower"—the immediate transaction between two parties. This transactional view is dangerously incomplete, as it ignores the broader ecosystem in which the deal must survive and thrive. A partnership may look perfect on paper, but if it is misaligned with the cultural context, the regulatory environment, or the incentives of secondary stakeholders, it is destined to fail.')}>Read more</button>
                                        </div>
                                    </div>
                                    {/* Self-Learning Ecosystem Intelligence (feature + divider) */}
                                    <div className="rounded-lg shadow-sm bg-white border border-slate-200">
                                        <div className="h-1 w-full rounded-t bg-green-500 mb-2" />
                                        <div className="px-4 pt-2 pb-3">
                                            <div className="flex items-center gap-2 mb-2">
                                                <div className="p-2 bg-slate-50 border border-slate-200 rounded">
                                                    <Brain className="w-4 h-4 text-green-700" />
                                                </div>
                                                <div className="text-green-900 text-xs font-bold uppercase tracking-widest">Self-Learning</div>
                                            </div>
                                            <div className="text-slate-950 font-bold text-base">Self‑Learning Ecosystem Intelligence</div>
                                            <ul className="list-disc list-inside text-slate-700 text-xs mt-2 space-y-1">
                                                <li>Outcome-driven recalibration with ecosystem-wide visibility</li>
                                                <li>All modules see the meadow—alignment, bottlenecks, opportunities</li>
                                                <li>Adaptive suggestions that evolve in real time</li>
                                            </ul>
                                        </div>
                                    </div>
                                    {/* Ecosystem Pulse (live data + divider) */}
                                    <div className="rounded-lg shadow-sm bg-white border border-slate-200">
                                        <div className="h-1 w-full rounded-t bg-yellow-400 mb-2" />
                                        <div className="px-4 pt-2 pb-3">
                                            <div className="flex items-center gap-2 mb-2">
                                                <span className="inline-block w-2 h-2 rounded-full bg-yellow-400 animate-pulse" />
                                                <div className="text-yellow-900 text-xs font-bold uppercase tracking-widest">Ecosystem Pulse</div>
                                            </div>
                                            {ecosystemPulse ? (
                                                <div className="space-y-2">
                                                    <div>
                                                        <div className="flex items-center justify-between text-xs text-slate-700">
                                                            <span>Alignment</span>
                                                            <span className="font-bold text-slate-900">{Math.round(ecosystemPulse.alignment)}%</span>
                                                        </div>
                                                        <div className="w-full h-2 bg-slate-100 rounded">
                                                            <div
                                                                className="h-2 bg-yellow-400 rounded"
                                                                style={{ width: `${Math.min(100, Math.max(0, Math.round(ecosystemPulse.alignment)))}%` }}
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                                                        <div>
                                                            <div className="text-slate-900 font-semibold text-xs">Top Bottlenecks</div>
                                                            <ul className="text-[11px] text-slate-700 mt-1 space-y-1">
                                                                {(ecosystemPulse.bottlenecks || []).slice(0, 3).map((b, i) => (
                                                                    <li key={i}>• {b}</li>
                                                                ))}
                                                            </ul>
                                                        </div>
                                                        <div>
                                                            <div className="text-slate-900 font-semibold text-xs">Top Opportunities</div>
                                                            <ul className="text-[11px] text-slate-700 mt-1 space-y-1">
                                                                {(ecosystemPulse.opportunities || []).slice(0, 3).map((o, i) => (
                                                                    <li key={i}>• {o}</li>
                                                                ))}
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            ) : (
                                                <div className="mt-2 text-[11px] text-slate-600">Pulse appears here once your agentic run completes.</div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* 2. Who is BWGA? */}
                        <div className="mb-8">
                            <h2 className="text-xl font-bold text-black mb-2">Who is BW Global Advisory?</h2>
                            <p className="text-slate-800 text-base mb-3">
                                BW Global Advisory (BWGA) is an independent Australian initiative, founded and solely developed by <strong>Brayden Walls</strong>. It was born not from established institutional frameworks, but from a simple, profound observation made during more than a year of immersive, on‑the‑ground work in regional Philippines: there is a persistent <strong>Global Understanding Gap</strong> that obscures genuine opportunity in regional economies.
                            </p>
                            <p className="text-slate-800 text-base mb-3">
                                This gap—fueled by information asymmetries, outdated perceptions, and the lack of sophisticated, unbiased, forward‑looking intelligence—systematically hinders equitable development and national prosperity in countless regional cities worldwide. While global capital and opportunity exist, and regional assets abound, a crucial piece of intelligent, proactive, ethically grounded facilitation has been missing. BWGA was created to fill that gap.
                            </p>

                            <div className="mt-4 bg-slate-50 border border-slate-200 rounded-lg p-4">
                                <div className="text-black font-bold text-sm">Mission Statement</div>
                                <p className="text-slate-800 text-sm mt-1 leading-relaxed">
                                    To bridge the Global Understanding Gap by providing AI‑enhanced intelligence that illuminates regional economic potential, facilitates symbiotic partnerships, and ensures community‑centered development outcomes.
                                </p>
                            </div>

                            <div className="mt-3 bg-slate-50 border border-slate-200 rounded-lg p-4">
                                <div className="text-black font-bold text-sm">Vision Statement</div>
                                <p className="text-slate-800 text-sm mt-1 leading-relaxed">
                                    A world where every regional economy’s true potential is recognized, understood, and developed through intelligent partnerships that create lasting prosperity for local communities.
                                </p>
                            </div>

                            <div className="mt-4 bg-white border border-slate-200 rounded-lg p-4">
                                <div className="text-black font-bold text-sm">Ethical AI‑Human Symbiosis</div>
                                <p className="text-slate-800 text-sm mt-1 leading-relaxed">
                                    We operate on the principle of <strong>Ethical AI‑Human Symbiosis</strong>. Artificial Intelligence is a powerful amplifier of human strategic insight, but human expertise remains indispensable for contextualization, ethical oversight, validation, and the trust necessary for impactful collaboration. Nexus AI is designed to <strong>augment, not replace</strong>, human judgment.
                                </p>
                            </div>

                            <div className="mt-4">
                                <h3 className="text-black text-base font-bold mb-2">The Problem: The Global Understanding Gap</h3>
                                <p className="text-slate-800 text-base mb-2">The core problem is not a lack of capital, but a lack of clarity. This systemic gap is fueled by:</p>
                                <ul className="list-disc list-inside text-slate-800 text-base space-y-1">
                                    <li><strong>Poor Information Access</strong>: critical regional data is fragmented, unreliable, or non‑existent online.</li>
                                    <li><strong>Outdated Perceptions</strong>: decisions are made from decade‑old headlines rather than present realities.</li>
                                    <li><strong>Prohibitive Cost of Entry</strong>: traditional due diligence is too slow and expensive for many regional markets.</li>
                                    <li><strong>Internal Bottlenecks</strong>: local and national complexities obscure genuine opportunities and pathways.</li>
                                </ul>
                            </div>

                            <div className="mt-4 bg-white border border-slate-200 rounded-lg p-4">
                                <div className="text-black font-bold text-sm">Objective First Look</div>
                                <p className="text-slate-800 text-sm mt-1 leading-relaxed">
                                    Our mission is simple: to be the most trusted and cost‑effective <strong>first step</strong> in global opportunity discovery. We provide the initial layer of data‑driven, AI‑enhanced intelligence that gives organizations the confidence to engage, invest, and build sustainable partnerships in regions that need them most. We are the tool that makes the overlooked, visible.
                                </p>
                            </div>
                        </div>

                        {/* 3. What is BW Nexus AI? */}
                        <div className="mb-8">
                            <h2 className="text-xl font-bold text-black mb-2">What is BW Nexus AI — Proactive Agentic Intelligence OS?</h2>
                            <p className="text-slate-800 text-base mb-2">
                                BW Nexus AI is the world’s first agentic intelligence system built 100% for regional development. It was developed to fill a critical gap: there was no system that could help regional governments and businesses “speak the language” of investors, bridge the data gap, and deliver actionable, auditable intelligence in real time.
                            </p>
                            <p className="text-slate-800 text-base mb-2">
                                Unlike dashboards or passive assistants, BW Nexus AI is a proactive digital worker. It doesn’t wait for instructions—it actively hunts for information, cross-references trusted sources, and delivers verified, traceable outputs in seconds. Every claim is fact-checked. Every output is architecturally incorruptible.
                            </p>
                            <p className="text-slate-800 text-base">
                                This system was built because, despite all the world’s information, no one had joined the dots for regional development. BW Nexus AI is the first to do so—giving both sides (public and private) a common language and a new way to see opportunity.
                            </p>
                        </div>

                        {/* 4. What the System Produces & How */}
                        <div className="mb-8">
                            <h2 className="text-xl font-bold text-black mb-2">What does the system produce—and how?</h2>
                            <p className="text-slate-800 text-base mb-2">
                                The system produces a complete, investor-grade report pack: fact-checked scorecards, debate outcomes, risk registers, partner alignment, and actionable next steps. Here’s how it works:
                            </p>
                            <ol className="list-decimal list-inside text-slate-800 text-base mb-2 ml-6">
                                <li>Define your mandate: mission, region, constraints, risk appetite, and goals.</li>
                                <li>The agent executes: validates contradictions, recalls similar cases, runs 21 formulas in parallel, debates via 5 personas, and assembles decision-ready deliverables.</li>
                                <li>You receive: a verified, auditable report pack—ready for investors, partners, boards, and regulators.</li>
                            </ol>
                            <p className="text-slate-800 text-base">
                                The entire workflow is agentic: discover → verify → debate → score → deliver. Every step is fact-checked and traceable.
                            </p>
                        </div>

                        {/* 5. The Brain: What Makes This Different */}
                        <div className="mb-8">
                            <h2 className="text-xl font-bold text-black mb-2">What makes this different?</h2>
                            <p className="text-slate-800 text-base mb-2">
                                The “brain” of BW Nexus AI was built from scratch: a neuro-symbolic architecture that combines pattern recognition, explainable reasoning, and adversarial debate. It features a 5-persona debate engine, memory-augmented learning, and a 21-formula scoring suite—none of which existed in this form before.
                            </p>
                            <p className="text-slate-800 text-base mb-2">
                                Why, with all the world’s information, hadn’t anyone joined these dots? Because no one had built a system solely for regional development—until now. BW Nexus AI is not a black box. Every output is traceable, every argument is auditable, and every recommendation is grounded in real evidence.
                            </p>
                            <p className="text-slate-800 text-base">
                                This is a new category: a proactive agentic intelligence OS, not a dashboard or template engine. It’s the first of its kind—and it’s here to change how regional opportunity is seen, measured, and delivered.
                            </p>
                            <div className="mt-3">
                                <h3 className="text-black text-base font-bold mb-2">Why this has never been done before</h3>
                                <ul className="list-disc list-inside text-slate-800 text-base space-y-1">
                                    <li>100% regional focus: built for the realities of non-metro economies.</li>
                                    <li>Repeatable advisory OS: validate → debate → score → deliver with provenance.</li>
                                    <li>Neuro-symbolic + adversarial debate + memory + 21 formulas in one system.</li>
                                    <li>Fast-thinking execution: full reasoning loop in 1–3 seconds.</li>
                                    <li>Architecturally incorruptible output: verified claims, auditable decisions—no black box.</li>
                                </ul>
                            </div>
                        </div>

                        {/* 6. Closing Statement */}
                        <div className="mb-8">
                            <h2 className="text-xl font-bold text-black mb-2">Ready to see what’s possible?</h2>
                            <p className="text-slate-800 text-base">
                                BW Nexus AI is more than a tool—it’s a new way to unlock regional potential. Start your journey, define your mandate, and let the system show you what’s possible. Every claim is fact-checked. Every output is audit-ready. The future of regional intelligence starts here.
                            </p>
                        </div>

                        <div className="mt-6">
                            <div className="bg-slate-50 border border-slate-200 rounded-lg p-5">
                                <div className="text-black text-xs font-bold uppercase tracking-widest mb-4">
                                    What You Receive
                                </div>
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                                    {welcomeFeatures.map((feature, index) => (
                                        <div key={index} className="flex items-start gap-3">
                                            <div className="bg-white border border-slate-200 p-2 rounded-md flex-shrink-0">
                                                <feature.icon size={18} className="text-slate-900" />
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-slate-900 text-sm leading-snug">{feature.title}</h4>
                                                <p className="text-slate-600 text-xs mt-1 leading-relaxed">{feature.description}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* THE PROBLEM */}
                        <div className="mt-6 pt-6 border-t border-slate-200">
                            <h3 className="text-black text-xl font-bold">Why Reactive AI Fails - And Why Proactive Agentic AI Succeeds</h3>
                            <p className="text-slate-700 text-sm leading-relaxed mt-2">
                                Regional development and cross-border expansion fail for predictable reasons: fragmented data, invisible context, misaligned stakeholders, slow consulting cycles, and documents that don’t match what investors actually need.
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-5">
                                <div className="bg-slate-50 border border-slate-200 rounded-lg p-4">
                                    <div className="text-black font-extrabold text-sm">Reactive AI Waits</div>
                                    <p className="text-slate-700 text-sm mt-1 leading-relaxed">
                                        Traditional systems wait for you to find and input data. BW Nexus AI proactively hunts for information, retrieves it in seconds, and acts without waiting.
                                    </p>
                                </div>

                                <div className="bg-slate-50 border border-slate-200 rounded-lg p-4">
                                    <div className="text-black font-extrabold text-sm">Reactive AI Fabricates</div>
                                    <p className="text-slate-700 text-sm mt-1 leading-relaxed">
                                        LLMs hallucinate. BW Nexus AI is incorruptible: every claim is cross-referenced against trusted sources. It cannot lie - it verifies or dispels.
                                    </p>
                                </div>

                                <div className="bg-slate-50 border border-slate-200 rounded-lg p-4">
                                    <div className="text-black font-extrabold text-sm">Reactive AI Forgets</div>
                                    <p className="text-slate-700 text-sm mt-1 leading-relaxed">
                                        Regional cities can be economically strong yet “uninvestable” on paper because they lack an investor-grade narrative, proof chain, and the right deliverable formats.
                                    </p>
                                </div>

                                <div className="bg-slate-50 border border-slate-200 rounded-lg p-4">
                                    <div className="text-black font-extrabold text-sm">Static Documents Don’t Execute</div>
                                    <p className="text-slate-700 text-sm mt-1 leading-relaxed">
                                        A spreadsheet can’t debate assumptions, model stakeholder alignment, or produce a traceable case. BW Nexus AI treats your plan as a living simulation with quantified scores and decision points.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* THE SOLUTION */}
                        <div className="mt-8 bg-white border border-slate-200 rounded-lg p-6 sm:p-8">
                            <h3 className="text-black text-xl font-bold">What the System Produces</h3>
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-4">
                                <div className="bg-slate-50 border border-slate-200 rounded-lg p-5">
                                    <div className="text-black font-extrabold text-sm">Autonomous Execution</div>
                                    <p className="text-slate-700 text-sm mt-2 leading-relaxed">
                                        You’re not buying a report template. You’re buying a repeatable workflow: define a mandate, run NSIL validation + debate + scoring, then generate consistent, investor-ready outputs on demand.
                                    </p>
                                </div>

                                <div className="bg-slate-50 border border-slate-200 rounded-lg p-5">
                                    <div className="text-black font-extrabold text-sm">Verified, Incorruptible Output</div>
                                    <p className="text-slate-700 text-sm mt-2 leading-relaxed">
                                        Most tools model the immediate transaction. BW Nexus AI models the “entire meadow”: stakeholders, incentives, conflicts, and pathways that determine whether an investment is viable in the real world.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* KEY CAPABILITIES */}
                        <div className="mt-8 bg-white border border-slate-200 rounded-lg p-6 sm:p-8">
                            <div className="flex items-start justify-between gap-6 flex-col lg:flex-row">
                                <div className="flex-1">
                                    <h3 className="text-black text-xl font-bold">How It Works</h3>
                                    <p className="text-slate-700 text-sm leading-relaxed mt-2">
                                        <strong className="text-black">BW Nexus AI</strong> connects <strong className="text-black">structured intake</strong> to <strong className="text-black">decision-ready intelligence</strong>: your inputs become scores, evidence trails, debate outcomes, and deliverables you can take to investors, partners, boards, and regulators.
                                    </p>
                                    <p className="text-slate-700 text-sm leading-relaxed mt-2">
                                        In practical terms, it’s an <strong className="text-slate-950">autonomous reasoning partner</strong>: validate → debate → score → synthesize → deliver — so you see the full argument, not fake certainty.
                                    </p>
                                </div>

                                <div className="w-full lg:w-[360px] bg-slate-50 border border-slate-200 rounded-lg p-4">
                                    <div className="text-black text-xs font-bold uppercase tracking-widest">Incorruptible Intelligence</div>
                                    <div className="text-slate-950 font-semibold text-base mt-1">Verified. Traceable. Audit-Ready.</div>
                                    <p className="text-slate-700 text-sm mt-1">
                                        The system cannot lie. Every output is cross-referenced, fact-checked, and delivered with full provenance — ready for investors, boards, and regulators.
                                    </p>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
                                <div className="bg-slate-50 border border-slate-200 rounded-lg p-4">
                                    <div className="text-black font-extrabold text-sm">Structured Intake Framework</div>
                                    <p className="text-slate-700 text-sm mt-1">Capture the mandate once (mission, constraints, region, risk appetite), then reuse it across analyses and deliverables.</p>
                                </div>

                                <div className="bg-slate-50 border border-slate-200 rounded-lg p-4">
                                    <div className="text-black font-extrabold text-sm">NSIL Scorecards → Next Actions</div>
                                    <p className="text-slate-700 text-sm mt-1">SPI™, RROI™, IVAS™, SCF™, and SEAM™ output drivers, pressure points, and levers—so the result is actionable, not abstract.</p>
                                </div>

                                <div className="bg-slate-50 border border-slate-200 rounded-lg p-4">
                                    <div className="text-black font-extrabold text-sm">Deliverables Pack Generator</div>
                                    <p className="text-slate-700 text-sm mt-1">Turn analysis into shareable outputs: executive summaries, full dossiers, partner briefs, and risk registers (with consistent structure).</p>
                                </div>

                                <div className="bg-slate-50 border border-slate-200 rounded-lg p-4">
                                    <div className="text-black font-extrabold text-sm">Adversarial Confidence</div>
                                    <p className="text-slate-700 text-sm mt-1">Confidence is earned via validation depth, persona debate, and stress-tested scenarios—so you know what’s strong and what’s fragile.</p>
                                </div>

                                <div className="bg-slate-50 border border-slate-200 rounded-lg p-4">
                                    <div className="text-black font-extrabold text-sm">Built for Regional Development</div>
                                    <p className="text-slate-700 text-sm mt-1">Purpose-built to make regional opportunities visible and investable, with ecosystem modeling and execution feasibility built into the reasoning loop.</p>
                                </div>
                            </div>

                            <div className="mt-6 bg-white border border-slate-200 rounded-lg p-5">
                                <p className="text-slate-700 text-sm leading-relaxed">
                                    In plain terms: the system converts complexity into an auditable argument—scores, drivers, risks, and concrete next actions—ready to share.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* NSIL — The Brain (expanded) */}
                <div className="mt-8 bg-white border border-slate-200 rounded-lg p-6 sm:p-8">
                    <h3 className="text-black text-xl font-bold mb-3">The Agentic Brain: How It Works</h3>
                    <div className="text-slate-700 text-sm leading-relaxed space-y-4">
                        <p>
                            <strong className="text-slate-950">NSIL (Nexus Strategic Intelligence Layer)</strong> is the heart of the platform. It turns “user input” into a structured strategic case using a repeatable sequence: validate → debate → score → synthesize → deliver.
                        </p>

                        <div className="bg-slate-50 border border-slate-200 rounded-lg p-4">
                            <p className="text-slate-900 font-semibold">The Five-Layer Autonomous Reasoning Stack</p>
                            <p className="text-slate-700 text-xs mt-1">
                                NSIL mimics a team of experts through thin, orchestrated reasoning shells that wrap around the core mathematical engines. This preserves explainability while enabling sophisticated adversarial analysis.
                            </p>
                            <ul className="list-disc list-inside text-slate-700 text-xs space-y-2 mt-2">
                                <li><strong>The Adversarial Input Shield:</strong> before analysis, the shield cross-references your claims against external data (World Bank, OFAC) to prevent “garbage in, garbage out.”</li>
                                <li><strong>The Multi-Perspective Reasoning Engine:</strong> spawns five AI personas to debate your plan, systematically eliminating cognitive bias.</li>
                                <li><strong>The Counterfactual Lab:</strong> simulates alternative realities to answer “what if?” questions, stress-testing your strategy’s robustness.</li>
                                <li><strong>The Scoring Engines:</strong> runs the proprietary mathematical formulas on validated, debated data to produce hard quantitative scores.</li>
                                <li><strong>The Learning Loop:</strong> tracks real-world outcomes to continuously recalibrate its models, growing smarter with every decision.</li>
                            </ul>
                        </div>

                        <div className="bg-white border border-slate-200 rounded-lg p-4">
                            <p className="text-slate-900 font-semibold">The scoring layer: 21 proprietary mathematical formulas</p>
                            <p className="text-slate-700 text-sm mt-1">
                                NSIL is the framework that operationalizes this formula suite into auditable outputs. The platform is described as a 21-formula system: 5 primary engines plus 16 derivative indices.
                            </p>

                            <div className="mt-3 grid grid-cols-1 lg:grid-cols-2 gap-3">
                                <div className="bg-slate-50 border border-slate-200 rounded-lg p-4">
                                    <p className="text-slate-900 font-semibold text-sm">Primary Engines (implemented)</p>
                                    <ul className="list-disc list-inside text-slate-700 text-xs space-y-1 mt-2">
                                        <li><strong>SPI™</strong> — Success Probability Index</li>
                                        <li><strong>RROI™</strong> — Regional Return on Investment</li>
                                        <li><strong>SEAM™</strong> — Stakeholder & Entity Alignment Matrix</li>
                                        <li><strong>IVAS™</strong> — Investment Validation & Assurance System</li>
                                        <li><strong>SCF™</strong> — Strategic Confidence Framework</li>
                                    </ul>
                                </div>

                                <div className="bg-slate-50 border border-slate-200 rounded-lg p-4">
                                    <p className="text-slate-900 font-semibold text-sm">Derivative Indices (the 16-index suite)</p>
                                    <p className="text-slate-700 text-xs mt-1">
                                        These indices extend the primary engines with specialist diagnostics. They explain <em>why</em> a plan is strong or weak, and what to fix.
                                    </p>
                                    <div className="mt-2 text-slate-700 text-xs space-y-2">
                                        <div>
                                            <span className="font-semibold text-slate-900">Strategic:</span> BARNA, NVI, CRI, FRS
                                        </div>
                                        <div>
                                            <span className="font-semibold text-slate-900">Operational:</span> CAP, AGI, VCI, ATI, ESI, ISI, OSI, TCO
                                        </div>
                                        <div>
                                            <span className="font-semibold text-slate-900">Risk:</span> PRI, RNI, SRA, IDV
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-slate-50 border border-slate-200 rounded-lg p-4">
                            <div className="flex items-start justify-between gap-4">
                                <div className="flex-1">
                                    <p className="text-slate-900 font-semibold">The Multi-Perspective Debate</p>
                                    <p className="text-slate-700 text-sm mt-1">When you submit a strategy, NSIL spawns five personas who evaluate it in parallel:</p>
                                    <ul className="list-disc list-inside text-slate-700 text-xs space-y-2 mt-2">
                                        <li><strong>Skeptic:</strong> finds deal-killers, over-optimism, and hidden downside.</li>
                                        <li><strong>Advocate:</strong> finds upside potential, synergies, and value levers.</li>
                                        <li><strong>Regulator:</strong> checks legal pathways, sanctions risks, and ethical constraints.</li>
                                        <li><strong>Accountant:</strong> validates cash flow, margins, and economic durability.</li>
                                        <li><strong>Operator:</strong> tests execution feasibility: team, supply chains, and infrastructure.</li>
                                    </ul>
                                </div>
                                <button 
                                    onClick={() => setShowFormulaModal(true)}
                                    className="flex-shrink-0 px-4 py-2 bg-blue-700 text-white text-xs font-bold rounded-lg hover:bg-blue-800 transition-colors flex items-center gap-2"
                                >
                                    <Brain className="w-4 h-4" />
                                    <span>Explore All 21 Formulas</span>
                                </button>
                            </div>
                        </div>

                        <div className="bg-slate-50 border border-slate-200 rounded-lg p-4">
                            <p className="text-slate-900 font-semibold">How outputs are born</p>
                            <p className="text-slate-700 text-sm mt-1">
                                Personas vote and attach evidence. NSIL synthesizes agreements into high-confidence recommendations and preserves disagreements as explicit decision points. You see the full argument, not fake certainty.
                            </p>
                        </div>
                    </div>
                </div>

                {/* WHAT MAKES IT UNIQUE */}
                <div className="mt-8 bg-white border border-slate-200 rounded-lg p-6 sm:p-8">
                    <h3 className="text-black text-xl font-bold">Why Proactive Agentic AI Is Different</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                        <div className="bg-slate-50 border border-slate-200 rounded-lg p-5">
                            <div className="text-black font-extrabold text-sm">Proactive, Not Reactive</div>
                            <p className="text-slate-700 text-sm mt-2 leading-relaxed">
                                Traditional AI waits for you to find and input data. BW Nexus AI autonomously discovers, retrieves, and processes information in seconds - no manual research, no delays.
                            </p>
                        </div>

                        <div className="bg-slate-50 border border-slate-200 rounded-lg p-5">
                            <div className="text-black font-extrabold text-sm">Incorruptible Verification</div>
                            <p className="text-slate-700 text-sm mt-2 leading-relaxed">
                                The system cannot fabricate data. Every claim is cross-referenced against trusted sources. It either verifies information or explicitly dispels/flags uncertainty.
                            </p>
                        </div>

                        <div className="bg-slate-50 border border-slate-200 rounded-lg p-5">
                            <div className="text-black font-extrabold text-sm">Memory-Augmented Intelligence</div>
                            <p className="text-slate-700 text-sm mt-2 leading-relaxed">
                                The agent remembers every case it analyzes. It pulls lessons from past analyses to improve current recommendations - getting smarter with every run.
                            </p>
                        </div>

                        <div className="bg-slate-50 border border-slate-200 rounded-lg p-5">
                            <div className="text-black font-extrabold text-sm">No “Black Box” Outputs</div>
                            <p className="text-slate-700 text-sm mt-2 leading-relaxed">
                                Every output is traceable: what sources were used, which arguments mattered, and which assumptions drove the scores. No black boxes.
                            </p>
                        </div>
                    </div>
                </div>

                {/* 7-Stage Process: How It Works */}
                <div className="mt-8">
                    <div className="mb-6">
                        <h3 className="text-black text-lg font-extrabold uppercase tracking-widest mb-3">Agentic Workflow: You Define → Agent Executes → You Receive</h3>
                        <div className="bg-slate-50 border-l-4 border-slate-400 rounded-md p-4 mt-2">
                            <p className="text-slate-900 text-base font-semibold leading-relaxed">The agent works autonomously: once you define the mandate, it discovers data, cross-references sources, runs adversarial debate, computes scores, and assembles verified deliverables — all in seconds. Every step is fact-checked and traceable.</p>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                        {[
                            { num: '01', title: 'You Define the Mandate', desc: 'State mission, target region(s), constraints, and risk appetite. The agent takes it from here.' },
                            { num: '02', title: 'Agent Discovers Data', desc: 'The agent proactively hunts for information from trusted sources — no manual research, no waiting.' },
                            { num: '03', title: 'Agent Cross-References', desc: 'Every claim is fact-checked against multiple sources. The system cannot fabricate — it verifies or dispels.' },
                            { num: '04', title: 'Agent Runs Adversarial Debate', desc: '5 personas (Skeptic, Advocate, Regulator, Accountant, Operator) debate to eliminate bias and blind spots.' },
                            { num: '05', title: 'Agent Scores via 21 Formulas', desc: 'SPI™, RROI™, SEAM™, IVAS™, SCF™ + 16 indices produce explainable, auditable scores with drivers.' },
                            { num: '06', title: 'Agent Assembles Report Pack', desc: 'Verified intelligence is structured into executive summary, dossier, scenarios, and decision points.' },
                            { num: '07', title: 'You Receive Deliverables', desc: 'Board-ready outputs: briefs, risk registers, partner notes, LOI letters, and implementation narratives.' },
                            { num: '+', title: 'Agent Learns & Remembers', desc: 'Every case is stored in memory. The agent applies lessons learned to future analyses automatically.' }
                        ].map((step) => (
                            <div key={step.num} className={`bg-white border border-slate-200 rounded-lg p-6 ${step.num === '+' ? 'col-span-1' : ''} hover:bg-slate-50 transition-all`}>
                                <div className="flex items-center gap-3 mb-3">
                                    <div className={`w-14 h-14 rounded-full bg-slate-200 flex items-center justify-center text-slate-950 font-extrabold border border-slate-300 ${step.num === '+' ? 'w-12 h-12 bg-slate-100 text-slate-900 border-slate-200' : ''}`}>{step.num}</div>
                                    <h4 className="font-extrabold text-slate-950 text-base">{step.title}</h4>
                                </div>
                                <p className="text-sm text-slate-700 leading-relaxed">{step.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* FINAL CALL TO ACTION (before Terms) */}
                <div className="mt-8 bg-slate-50 border border-slate-200 rounded-lg p-6 sm:p-8">
                    <h3 className="text-black text-xl font-bold">Launch the Agentic Workflow</h3>
                    <p className="text-slate-700 text-sm leading-relaxed mt-2">
                        Once you define the mandate, the agent takes over: it autonomously discovers data, cross-references sources, runs adversarial debate, computes 21 formula scores, and assembles verified deliverables — all in seconds. You receive a complete report pack with letters of intent, risk registers, and implementation narratives.
                    </p>
                    <p className="text-slate-700 text-sm leading-relaxed mt-2 font-semibold">Every claim is fact-checked. Every score is explainable. Every output is audit-ready. The system cannot lie.</p>
                    <p className="text-slate-700 text-sm leading-relaxed mt-2">To proceed, review the Terms of Engagement below and confirm acceptance.</p>
                </div>

                {/* Bottom Section: Terms, Compliance & Business Disclaimer - Full Width */}
                <div className="bg-white shadow-xl border border-slate-200 rounded-lg overflow-hidden">
                    <div className="p-6 sm:p-8 bg-white">
                        <h3 className="text-slate-950 font-bold uppercase tracking-widest text-xs mb-4 flex items-center gap-2">
                            <ShieldAlert size={16} className="text-slate-950" /> Terms of Engagement, Compliance & Business Disclaimer
                        </h3>

                        <div className="space-y-4 text-xs text-slate-700 bg-slate-50 p-5 rounded-sm border border-slate-200 max-h-64 overflow-y-auto">
                            <p className="font-bold text-slate-950 mb-2">Important Business Disclaimer</p>
                            <p className="leading-relaxed mb-3">Strategic Intelligence Briefs are prepared by BW Global Advisory (ABN 55 978 113 300) using our proprietary AI-Human analytical capabilities. Analysis is based on publicly available data, BWGA's AI Economic Strategy Engine (Nexus v6.0), and regional insights gathered by our advisory team. While every effort is made to ensure accuracy at the time of generation, all briefs are illustrative, intended for strategic discussion, and do not constitute financial, legal, or investment advice. Users are advised to conduct comprehensive independent due diligence before making any investment or partnership decisions.</p>

                            <p className="font-bold text-slate-950 mb-2">Service Nature & Engagement</p>
                            <p className="leading-relaxed mb-3">BW Global Advisory specializes in providing tailored, in-depth AI-Human Intelligence Reports on a commissioned basis. The analysis and insights presented are derived from publicly available information combined with the application of BWGA's proprietary AI Economic Strategy Engine. While prepared with diligence, all outputs are intended for strategic evaluation purposes only. They do not constitute formal advice, a complete market study, or a guarantee of future outcomes. We welcome discussions regarding how our services may be specifically applied to meet your strategic objectives.</p>

                            <p className="font-bold text-slate-950 mb-2">Terms of Engagement</p>
                            <div className="leading-relaxed space-y-2 text-slate-700">
                                <p>1. <strong>Acceptance & Commercial License:</strong> By accessing the BW Nexus AI platform (v6.0), you acknowledge and accept these Terms of Engagement in full. Upon completion of payment, Strategic Intelligence Reports and associated deliverables become the intellectual property of the commissioning party. BW Global Advisory (ABN 55 978 113 300) retains rights to anonymized, aggregated data solely for system improvement and research purposes.</p>
                                <p>2. <strong>Platform Architecture:</strong> This platform utilizes a Multi-Agent AI architecture with multiple independent AI systems operating in parallel. All outputs undergo cross-validation to eliminate single-source bias. No AI-generated insight is presented without verification from at least one independent analytical pathway.</p>
                                <p>3. <strong>Regional Development Focus:</strong> The Nexus OS exists exclusively to facilitate investment, partnership, and development in regional cities worldwide. It is the first and only AI system 100% dedicated to bridging global capital with the communities that sustain national economies—the places that grow food, mine resources, manufacture goods, and support the populations that keep larger cities functioning.</p>
                                <p>4. <strong>Decision Support Tool — Not Financial Advice:</strong> The Nexus OS provides probabilistic insights, data-driven analysis, and strategic recommendations. It is expressly NOT a final decision authority and does NOT constitute financial, legal, tax, or investment advice. All outputs are advisory in nature. Users must exercise independent judgment, verify all critical findings, and seek qualified professional advice before making binding commitments.</p>
                                <p>5. <strong>Due Diligence Requirement:</strong> Users acknowledge their responsibility to conduct comprehensive independent due diligence before acting on any analysis, recommendation, or insight provided by this platform. BW Global Advisory provides strategic intelligence to inform decisions—not to replace the professional judgment of qualified advisors.</p>
                                <p>6. <strong>Data Privacy & Security:</strong> Full compliance with GDPR (EU), CCPA (California), Privacy Act 1988 (Australia), and SOC 2 Type II standards. Your data is cryptographically isolated, never commingled with other clients' data, never used to train public AI models, and never shared with third parties without explicit written consent. All data protected by 256-bit AES encryption at rest and TLS 1.3 encryption in transit.</p>
                                <p>7. <strong>Historical Data & Analytical Accuracy:</strong> Analysis is informed by 200+ years of economic development patterns (1820–2025) combined with real-time data feeds from global institutions. While methodology is rigorous, investment and partnership in regional markets involves inherent uncertainty. Historical patterns inform probability assessments but do not guarantee future results. Users must independently verify all material facts.</p>
                                <p>8. <strong>Proprietary Intellectual Property:</strong> All system architecture, algorithms, formulas, workflows, user interfaces, and the unique “agentic” methodology—including but not limited to SPI™ (Success Probability Index), RROI™ (Regional Return on Investment), SEAM™ (Stakeholder & Entity Alignment Matrix), IVAS™ (Investment Validation & Assurance System), SCF™ (Strategic Confidence Framework), and the entire BW Nexus AI platform—are the exclusive and proprietary intellectual property of BW Global Advisory. This includes all code, logic, data structures, reasoning engines, debate frameworks, memory systems, and report generation processes. All methodologies, algorithms, and analytical frameworks are confidential and protected under Australian and international copyright, trade secret, and patent law.</p>
                                <p><strong>No License or Transfer:</strong> Use of this system does not grant any license, right, or interest in the underlying intellectual property, except for the limited right to use the platform as intended. Any attempt to copy, reverse engineer, decompile, create derivative works, or otherwise misappropriate any part of the system is strictly prohibited.</p>
                                <p><strong>Global IP Protection:</strong> BW Global Advisory will pursue all available legal remedies—including injunctive relief and damages—against any party, anywhere in the world, who attempts to copy, reproduce, reverse engineer, or otherwise infringe upon the proprietary technology, concepts, or workflows of the BW Nexus AI system. All rights reserved worldwide.</p>
                                <p>9. <strong>Community Investment Program:</strong> 10% of all report fees are reinvested into community-identified development initiatives within analyzed regions. This includes education programs, local health initiatives, skills training, and small-scale livelihood support. Annual impact reports documenting all community investments are published and available upon request.</p>
                                <p>10. <strong>Ethical AI Guardrails:</strong> All AI agents operate within strict ethical constraints. The system will not: generate analysis promoting exploitation of vulnerable communities; facilitate circumvention of legitimate regulations; produce recommendations that would predictably cause significant harm to local populations; or discriminate based on protected characteristics. Environmental impact is factored into all regional assessments.</p>
                                <p>11. <strong>Report Validity & Standard Deliverables:</strong> Strategic Intelligence Reports are considered current for 90 days from date of generation. Standard package includes: Executive Summary, Full Strategic Dossier, Financial Model (Excel), Validated Partner Shortlist with profiles, Comprehensive Risk Register, Multi-Scenario Analysis, and Implementation Roadmap. Standard turnaround is 48 hours; expedited delivery available upon request. Updates may be commissioned at reduced rates.</p>
                                <p>12. <strong>Limitation of Liability:</strong> To the maximum extent permitted by applicable law, BW Global Advisory, its directors, employees, and agents shall not be liable for any direct, indirect, incidental, special, consequential, or punitive damages arising from use of the platform or reliance on its outputs. In all circumstances, total aggregate liability shall not exceed fees actually paid for the specific report or service in question.</p>
                                <p>13. <strong>Indemnification:</strong> Users agree to indemnify and hold harmless BW Global Advisory from any claims, damages, losses, or expenses arising from: (a) misuse of the platform; (b) reliance on outputs without independent verification; (c) failure to obtain appropriate professional advice; or (d) violation of these Terms of Engagement.</p>
                                <p>14. <strong>Governing Law & Dispute Resolution:</strong> These Terms of Engagement are governed by the laws of Australia. Any disputes shall be resolved through binding arbitration in Sydney, Australia, under the rules of the International Chamber of Commerce (ICC), unless otherwise agreed in writing by both parties.</p>
                                <p>15. <strong>Modifications & Severability:</strong> BW Global Advisory reserves the right to modify these terms with 30 days advance notice for material changes. Continued use after notification constitutes acceptance. If any provision is found unenforceable, remaining provisions continue in full force and effect.</p>
                                <p className="font-semibold mt-3 text-slate-900">Terms Version 6.0 | Effective December 2025 | BW Global Advisory (ABN 55 978 113 300) | Sydney, Australia</p>
                            </div>

                            <p className="text-slate-600 text-[10px] italic mt-4 pt-2 border-t border-slate-200">
                                Terms Version 6.0 | Effective December 2025 | BW Global Advisory (ABN 55 978 113 300) | Sydney, Australia
                            </p>
                        </div>

                        <div className="mt-6 pt-6 border-t border-slate-200">
                            <label className="flex items-start gap-3 cursor-pointer select-none group mb-6">
                                <div className={`w-5 h-5 border rounded flex items-center justify-center transition-all flex-shrink-0 mt-0.5 ${accepted ? 'bg-slate-200 border-slate-300' : 'bg-white border-slate-300 group-hover:border-slate-400'}`}>
                                    {accepted && <CheckCircle2 className="w-3.5 h-3.5 text-slate-950" />}
                                </div>
                                <input type="checkbox" className="hidden" checked={accepted} onChange={e => setAccepted(e.target.checked)} />
                                <span className="text-sm text-slate-700">I have read, understood, and accept the Terms of Engagement, Business Disclaimer, and Compliance Requirements. I acknowledge this is a decision-support tool and does not constitute financial, legal, or investment advice. All final decisions remain my responsibility.</span>
                            </label>

                            <div className="flex flex-col sm:flex-row gap-4">
                                <button
                                    onClick={onCreateNew}
                                    disabled={!accepted}
                                    className="flex-1 bg-blue-600 text-white py-4 px-8 rounded-sm font-bold text-sm uppercase tracking-wide flex items-center justify-center gap-3 hover:bg-blue-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-lg group"
                                >
                                    {!accepted ? <Lock size={18} /> : <Play size={18} />}
                                    <span>Begin Intelligence Report</span>
                                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="text-center py-4 bg-white rounded-b-lg border border-slate-200">
                    <p className="text-xs text-slate-700">© 2025 BW Global Advisory (ABN 55 978 113 300). All Rights Reserved.</p>
                    <p className="text-xs text-slate-600 mt-1">Nexus Intelligence OS v6.0 | Sydney, Australia | Bridging Global Capital with Regional Communities</p>
                </div>
            </div>
            
            {/* Formula Deep Dive Modal */}
            <FormulaDeepDiveModal 
                isOpen={showFormulaModal} 
                onClose={() => setShowFormulaModal(false)} 
            />
        </div>
    );
};

export default CommandCenter;





















