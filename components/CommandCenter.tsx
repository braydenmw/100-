import React, { useState } from 'react';
import {
    ArrowRight,
    CheckCircle2,
    Layers,
    Lock,
    Play,
    RefreshCw,
    Search,
    ShieldAlert,
    SlidersHorizontal,
    Users,
    Zap
} from 'lucide-react';

interface CommandCenterProps {
    onCreateNew: () => void;
}

const CommandCenter: React.FC<CommandCenterProps> = ({ onCreateNew }) => {
    const [accepted, setAccepted] = useState(false);
    const [heroImageFailed, setHeroImageFailed] = useState(false);

    const welcomeFeatures = [
        {
            icon: Search,
            title: 'Global Discovery',
            description: 'Surface opportunities, risks, and partners you wouldn’t find alone.'
        },
        {
            icon: SlidersHorizontal,
            title: 'Explainable Scoring',
            description: 'See the drivers behind every score—no black boxes.'
        },
        {
            icon: Users,
            title: 'Multi-Agent Debate',
            description: 'Five lenses challenge assumptions and reduce bias.'
        },
        {
            icon: Zap,
            title: 'From Insight to Deliverables',
            description: 'Generate reports, partner shortlists, and risk registers—ready to share.'
        },
        {
            icon: RefreshCw,
            title: 'Continuously Updating',
            description: 'Learns from outcomes and refreshes intelligence as conditions change.'
        }
    ];

    return (
        <div className="w-full min-h-screen bg-white p-4 sm:p-6 md:p-8 lg:p-10 pb-24 font-sans overflow-y-auto">
            <div className="max-w-6xl mx-auto space-y-4">
                {/* Top Section: Intro (landscape, compact) */}
                <div className="bg-white shadow-2xl border border-slate-200 rounded-lg overflow-hidden">
                    <div className="p-6 sm:p-8 lg:p-8 text-slate-900">
                        <div className="flex items-center gap-2 text-slate-900 font-bold tracking-widest text-xs uppercase mb-3">
                            <Layers size={14} /> BW (Brayden Walls) Global Advisory — <span className="text-blue-700">Next-Gen Regional Intelligence</span>
                        </div>
                        <h1 className="text-3xl md:text-4xl font-serif font-bold mb-2 leading-tight text-slate-950">
                            Architecture of an Autonomous Reasoning Partner
                        </h1>
                        <p className="text-slate-700 text-base font-medium mb-4">
                            A new paradigm for decision-making. Dynamic, rigorous, transparent, and adaptive intelligence for a complex world.
                        </p>

                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                            <div className="lg:col-span-7 space-y-4">
                                <h2 className="text-slate-950 font-bold text-lg tracking-wide">
                                    Strategic decision-making is entering a new era.
                                </h2>
                                <p className="text-slate-700 text-sm leading-relaxed">
                                    In the 21st century, decisions on economic policy, investment, and development are fraught with risk. Traditional tools—slow consulting, static reports, and siloed opinions—are no longer enough. BW Nexus AI was built to solve this.
                                </p>
                                <p className="text-slate-700 text-sm leading-relaxed">
                                    It is not a dashboard; it is an autonomous reasoning engine that functions as a digital consultant plus a high-end document factory. It transforms your mission into a live, interactive decision model, delivering in minutes what once took months.
                                </p>
                                <p className="text-slate-700 text-sm leading-relaxed">
                                    <span className="text-blue-700 font-semibold">BW Nexus AI</span> is a Strategic Intelligence & Execution Platform: a digital consultant plus a document automation factory. Your inputs become a live decision model with explicit assumptions, explainable scoring drivers, and evidence trails—then it translates the analysis into execution-ready deliverables.
                                </p>
                            </div>

                            <div className="lg:col-span-5">
                                <div className="bg-slate-50 border border-slate-200 rounded-lg overflow-hidden">
                                    <div className="p-5">
                                        <div className="text-blue-700 text-xs font-bold uppercase tracking-widest">System Visual</div>
                                        <div className="text-slate-950 font-semibold text-base mt-1">Live intake → debate → scoring → deliverables</div>
                                        <p className="text-slate-700 text-sm mt-2 leading-relaxed">
                                            An original visual of how information flows through NSIL: validation, multi-perspective reasoning, stress tests, and execution outputs.
                                        </p>
                                    </div>
                                    <div className="bg-white border-t border-slate-200">
                                        {!heroImageFailed ? (
                                            <div className="relative">
                                                <img
                                                    src="/hero/boardroom-intelligence-wall.jpg"
                                                    alt="Boardroom intelligence wall"
                                                    className="w-full h-auto block"
                                                    onError={() => setHeroImageFailed(true)}
                                                />
                                                <div className="absolute inset-0 bg-slate-950/35" />
                                                <div className="absolute inset-x-0 bottom-0 p-4">
                                                    <div className="flex flex-wrap gap-2">
                                                        <span className="text-[10px] uppercase tracking-widest font-bold bg-white/90 text-slate-950 border border-slate-200 px-2 py-1">Validation</span>
                                                        <span className="text-[10px] uppercase tracking-widest font-bold bg-white/90 text-slate-950 border border-slate-200 px-2 py-1">Multi-Agent Debate</span>
                                                        <span className="text-[10px] uppercase tracking-widest font-bold bg-white/90 text-slate-950 border border-slate-200 px-2 py-1">Stress Tests</span>
                                                        <span className="text-[10px] uppercase tracking-widest font-bold bg-blue-600/90 text-white border border-blue-500 px-2 py-1">Deliverables</span>
                                                    </div>
                                                </div>
                                            </div>
                                        ) : (
                                            <svg viewBox="0 0 640 360" className="w-full h-auto" role="img" aria-label="Intelligence network visualization">
                                                <defs>
                                                    <linearGradient id="gridFade" x1="0" y1="0" x2="0" y2="1">
                                                        <stop offset="0" stopColor="#1d4ed8" stopOpacity="0.10" />
                                                        <stop offset="1" stopColor="#1d4ed8" stopOpacity="0.02" />
                                                    </linearGradient>
                                                    <linearGradient id="lineFade" x1="0" y1="0" x2="1" y2="0">
                                                        <stop offset="0" stopColor="#1d4ed8" stopOpacity="0.15" />
                                                        <stop offset="1" stopColor="#1d4ed8" stopOpacity="0.05" />
                                                    </linearGradient>
                                                    <filter id="softGlow" x="-20%" y="-20%" width="140%" height="140%">
                                                        <feGaussianBlur stdDeviation="2" result="blur" />
                                                        <feMerge>
                                                            <feMergeNode in="blur" />
                                                            <feMergeNode in="SourceGraphic" />
                                                        </feMerge>
                                                    </filter>
                                                </defs>

                                                <rect x="0" y="0" width="640" height="360" fill="url(#gridFade)" />

                                                <g opacity="0.55">
                                                    {Array.from({ length: 12 }).map((_, i) => (
                                                        <line key={`h-${i}`} x1="0" y1={30 * i} x2="640" y2={30 * i} stroke="#0f172a" strokeOpacity="0.06" />
                                                    ))}
                                                    {Array.from({ length: 16 }).map((_, i) => (
                                                        <line key={`v-${i}`} x1={40 * i} y1="0" x2={40 * i} y2="360" stroke="#0f172a" strokeOpacity="0.06" />
                                                    ))}
                                                </g>

                                                <g stroke="url(#lineFade)" strokeWidth="2" fill="none" opacity="0.9">
                                                    <path d="M100 80 C170 70, 210 110, 260 120" />
                                                    <path d="M260 120 C320 135, 350 165, 400 190" />
                                                    <path d="M260 120 C300 95, 340 80, 420 70" />
                                                    <path d="M400 190 C460 220, 520 240, 560 260" />
                                                    <path d="M420 70 C470 95, 520 120, 560 150" />
                                                    <path d="M180 250 C240 230, 310 220, 400 190" />
                                                </g>

                                                <g filter="url(#softGlow)">
                                                    <circle cx="100" cy="80" r="10" fill="#1d4ed8" fillOpacity="0.25" stroke="#1d4ed8" strokeOpacity="0.45" />
                                                    <circle cx="260" cy="120" r="12" fill="#1d4ed8" fillOpacity="0.20" stroke="#1d4ed8" strokeOpacity="0.50" />
                                                    <circle cx="420" cy="70" r="10" fill="#1d4ed8" fillOpacity="0.18" stroke="#1d4ed8" strokeOpacity="0.45" />
                                                    <circle cx="400" cy="190" r="12" fill="#1d4ed8" fillOpacity="0.18" stroke="#1d4ed8" strokeOpacity="0.50" />
                                                    <circle cx="180" cy="250" r="10" fill="#1d4ed8" fillOpacity="0.14" stroke="#1d4ed8" strokeOpacity="0.40" />
                                                    <circle cx="560" cy="150" r="10" fill="#1d4ed8" fillOpacity="0.14" stroke="#1d4ed8" strokeOpacity="0.40" />
                                                    <circle cx="560" cy="260" r="10" fill="#1d4ed8" fillOpacity="0.14" stroke="#1d4ed8" strokeOpacity="0.40" />
                                                </g>

                                                <g fontFamily="ui-sans-serif, system-ui" fontSize="12" fill="#0f172a" opacity="0.85">
                                                    <text x="84" y="62">Input</text>
                                                    <text x="238" y="104">NSIL</text>
                                                    <text x="395" y="52">Debate</text>
                                                    <text x="374" y="176">Score</text>
                                                    <text x="528" y="132">Provenance</text>
                                                    <text x="512" y="242">Deliverables</text>
                                                </g>
                                            </svg>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="mt-6">
                            <div className="bg-slate-50 border border-slate-200 rounded-lg p-5">
                                <div className="text-blue-700 text-xs font-bold uppercase tracking-widest mb-4">
                                    What You Get
                                </div>
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                                    {welcomeFeatures.map((feature, index) => (
                                        <div key={index} className="flex items-start gap-3">
                                            <div className="bg-white border border-blue-200 p-2 rounded-md flex-shrink-0">
                                                <feature.icon size={18} className="text-blue-700" />
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
                            <h3 className="text-blue-700 text-xl font-bold">Why Traditional Analysis Fails</h3>
                            <p className="text-slate-700 text-sm leading-relaxed mt-2">
                                The old models of decision-making are broken. They are slow, biased, and fail to see the full picture.
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-5">
                                <div className="bg-slate-50 border border-slate-200 rounded-lg p-4">
                                    <div className="text-blue-700 font-extrabold text-sm">High Cost & Latency</div>
                                    <p className="text-slate-700 text-sm mt-1 leading-relaxed">
                                        A typical consulting engagement takes 3–6 months and costs millions, delivering a static slide deck that’s often obsolete on arrival. This high latency means missed opportunities and delayed responses to threats.
                                    </p>
                                </div>

                                <div className="bg-slate-50 border border-slate-200 rounded-lg p-4">
                                    <div className="text-blue-700 font-extrabold text-sm">Pervasive Human Bias</div>
                                    <p className="text-slate-700 text-sm mt-1 leading-relaxed">
                                        Even the best experts are vulnerable to confirmation bias, anchoring, and groupthink. These cognitive biases lead to catastrophic errors in judgment. Our system is designed to systematically counteract them.
                                    </p>
                                </div>

                                <div className="bg-slate-50 border border-slate-200 rounded-lg p-4">
                                    <div className="text-blue-700 font-extrabold text-sm">The “Invisible Giant”</div>
                                    <p className="text-slate-700 text-sm mt-1 leading-relaxed">
                                        Global capital overlooks the vast economic potential of regional communities due to an information and risk-perception gap. BW Nexus AI was built to solve this, making regional opportunities “visible” and “investable.”
                                    </p>
                                </div>

                                <div className="bg-slate-50 border border-slate-200 rounded-lg p-4">
                                    <div className="text-blue-700 font-extrabold text-sm">Static Tools in a Dynamic World</div>
                                    <p className="text-slate-700 text-sm mt-1 leading-relaxed">
                                        A spreadsheet or presentation is a dead artifact. It cannot react to new information or be stress-tested. Relying on such tools is like navigating a storm with a paper map. BW Nexus AI treats your plan as a living simulation.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* THE SOLUTION */}
                        <div className="mt-8 bg-white border border-slate-200 rounded-lg p-6 sm:p-8">
                            <h3 className="text-blue-700 text-xl font-bold">A Paradigm Shift in Strategic Intelligence</h3>
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-4">
                                <div className="bg-slate-50 border border-slate-200 rounded-lg p-5">
                                    <div className="text-blue-700 font-extrabold text-sm">System Overview</div>
                                    <p className="text-slate-700 text-sm mt-2 leading-relaxed">
                                        BW Nexus AI merges the analytical mind of a top-tier consulting firm with the productive power of a document automation factory. It guides you from strategic conception to execution-ready deliverables. The Analysis function builds strategic clarity, while the Execution function translates that strategy into over 200 unique document types, from legal frameworks to financial models.
                                    </p>
                                </div>

                                <div className="bg-blue-50 border border-blue-200 rounded-lg p-5">
                                    <div className="text-blue-700 font-extrabold text-sm">Ecosystem-First Modeling</div>
                                    <p className="text-slate-700 text-sm mt-2 leading-relaxed">
                                        Most tools focus on the immediate transaction—the “bee and the flower.” This is dangerously incomplete. Our proprietary SEAM™ (Stakeholder & Entity Alignment) engine models the entire ecosystem: culture, regulation, incentives, and secondary stakeholders. This ensures your strategies are not just profitable, but sustainable and resilient in the real world.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* KEY CAPABILITIES */}
                        <div className="mt-8 bg-white border border-slate-200 rounded-lg p-6 sm:p-8">
                            <div className="flex items-start justify-between gap-6 flex-col lg:flex-row">
                                <div className="flex-1">
                                    <h3 className="text-blue-700 text-xl font-bold">Key Capabilities at a Glance</h3>
                                    <p className="text-slate-700 text-sm leading-relaxed mt-2">
                                        <strong className="text-slate-950">BW Nexus AI</strong> connects <strong className="text-blue-700">Live Intake</strong> to <strong className="text-blue-700">Live Intelligence</strong>: your inputs dynamically drive real-time scoring, explainable recommendations, and structured outputs you can take to a board, partner, or regulator.
                                    </p>
                                    <p className="text-slate-700 text-sm leading-relaxed mt-2">
                                        In practical terms, this is an <strong className="text-slate-950">autonomous reasoning partner</strong> and <strong className="text-slate-950">execution factory</strong>: it validates inputs, runs adversarial multi-agent debate, stress-tests scenarios, applies the proprietary scoring engines, and generates decision-ready deliverables with provenance.
                                    </p>
                                </div>

                                <div className="w-full lg:w-[360px] bg-blue-50 border border-blue-200 rounded-lg p-4">
                                    <div className="text-blue-700 text-xs font-bold uppercase tracking-widest">Sovereign-Grade Outcome</div>
                                    <div className="text-slate-950 font-semibold text-base mt-1">De-risk decisions. Accelerate delivery.</div>
                                    <p className="text-slate-700 text-sm mt-1">
                                        Screen critical investments, model long-term impacts, and surface regional opportunities with explainable evidence trails.
                                    </p>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
                                <div className="bg-slate-50 border border-slate-200 rounded-lg p-4">
                                    <div className="text-blue-700 font-extrabold text-sm">Live Intake → Live Intelligence</div>
                                    <p className="text-slate-700 text-sm mt-1">Your mission, constraints, region, and risk appetite drive real-time scoring and structured outputs.</p>
                                </div>

                                <div className="bg-slate-50 border border-slate-200 rounded-lg p-4">
                                    <div className="text-blue-700 font-extrabold text-sm">Scorecards → Actions</div>
                                    <p className="text-slate-700 text-sm mt-1">Every score (SPI™, RROI™, IVAS™, SCF™, SEAM™) includes drivers (what raises it), pressure points (what lowers it), and levers (what to do next).</p>
                                </div>

                                <div className="bg-slate-50 border border-slate-200 rounded-lg p-4">
                                    <div className="text-blue-700 font-extrabold text-sm">Document Factory</div>
                                    <p className="text-slate-700 text-sm mt-1">Instantly auto-generate over 200 document types and 150 letter templates across 14 categories—from Letters of Intent to full Financial Models.</p>
                                </div>

                                <div className="bg-slate-50 border border-slate-200 rounded-lg p-4">
                                    <div className="text-blue-700 font-extrabold text-sm">Adversarial Confidence Score</div>
                                    <p className="text-slate-700 text-sm mt-1">Receive a battle-readiness score for your strategy, combining input validation depth, persona consensus, and counterfactual stress tests.</p>
                                </div>

                                <div className="bg-slate-50 border border-slate-200 rounded-lg p-4">
                                    <div className="text-blue-700 font-extrabold text-sm">Regional-First Intelligence</div>
                                    <p className="text-slate-700 text-sm mt-1">Unique indices like RDBI™ (Regional Default Bias), AFC™ (Activation Friction Coefficient), and FRS™ (Flywheel Readiness Score) are designed specifically to reduce blind spots and accelerate execution in non-metropolitan regions.</p>
                                </div>
                            </div>

                            <div className="mt-6 bg-white border border-slate-200 rounded-lg p-5">
                                <p className="text-slate-700 text-sm leading-relaxed">
                                    In plain terms: BW Nexus AI is an active reasoning partner. It doesn’t just present data—it debates it, stress-tests it, and turns it into execution-ready deliverables.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* NSIL — The Brain (expanded) */}
                <div className="mt-8 bg-white border border-slate-200 rounded-lg p-6 sm:p-8">
                    <h3 className="text-blue-700 text-xl font-bold mb-3">NSIL — The Brain (How the system thinks)</h3>
                    <div className="text-slate-700 text-sm leading-relaxed space-y-4">
                        <p>
                            <strong className="text-slate-950">NSIL (Nexus Strategic Intelligence Layer)</strong> is the true heart of the platform. It is what elevates the system from a sophisticated calculator to a genuine reasoning partner. It treats every plan as a <strong className="text-blue-700">living simulation</strong>, beginning a rigorous process of challenge, analysis, and refinement.
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

                                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                                    <p className="text-slate-900 font-semibold text-sm">Derivative Indices (roadmap-defined)</p>
                                    <p className="text-slate-700 text-xs mt-1">
                                        The derivative set is explicitly documented in the roadmap and is designed to be integrated into the scoring layer (e.g., via a <strong>MissingFormulasEngine</strong> feeding the <strong>ReportOrchestrator</strong>). This page showcases the full intended suite.
                                    </p>
                                    <div className="mt-2 text-slate-700 text-xs space-y-2">
                                        <div>
                                            <span className="font-semibold text-slate-900">Strategic:</span> BARNA, NVI, CRI
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

                        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
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
                    <h3 className="text-blue-700 text-xl font-bold">A World-First Capability</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                        <div className="bg-slate-50 border border-slate-200 rounded-lg p-5">
                            <div className="text-blue-700 font-extrabold text-sm">An Active Reasoning Partner</div>
                            <p className="text-slate-700 text-sm mt-2 leading-relaxed">
                                Most tools are passive dashboards. BW Nexus AI is an active reasoning partner. It doesn't just present data; it interrogates it, debates it, and transforms it into a coherent strategic argument. Its purpose is not to inform, but to advise.
                            </p>
                        </div>

                        <div className="bg-slate-50 border border-slate-200 rounded-lg p-5">
                            <div className="text-blue-700 font-extrabold text-sm">Adversarial by Design</div>
                            <p className="text-slate-700 text-sm mt-2 leading-relaxed">
                                Most software is agreeable. This system is designed to be challenging. The Skeptic persona and Counterfactual Lab actively try to break your plan to expose fragile assumptions and hidden risks before they manifest in the real world.
                            </p>
                        </div>

                        <div className="bg-slate-50 border border-slate-200 rounded-lg p-5">
                            <div className="text-blue-700 font-extrabold text-sm">Probabilistic, Not Deterministic</div>
                            <p className="text-slate-700 text-sm mt-2 leading-relaxed">
                                Most tools produce single-point forecasts—a dangerous illusion of certainty. BW Nexus AI embraces uncertainty. Through Monte Carlo simulation, every key output can be presented as a probability distribution (P10/P50/P90), so you can plan for volatility.
                            </p>
                        </div>

                        <div className="bg-slate-50 border border-slate-200 rounded-lg p-5">
                            <div className="text-blue-700 font-extrabold text-sm">The End of the "Black Box"</div>
                            <p className="text-slate-700 text-sm mt-2 leading-relaxed">
                                Every score and recommendation is accompanied by its provenance: the specific data points, logical rules, and persona arguments that led to that conclusion. You can audit the system's reasoning from start to finish.
                            </p>
                        </div>
                    </div>
                </div>

                {/* 7-Stage Process: How It Works */}
                <div className="mt-8">
                    <div className="mb-6">
                        <h3 className="text-blue-700 text-lg font-extrabold uppercase tracking-widest mb-3">How It Works: From Mandate to Deliverable</h3>
                        <div className="bg-blue-50 border-l-4 border-blue-500 rounded-md p-4 mt-2">
                            <p className="text-slate-900 text-base font-semibold leading-relaxed">Our process is built on a foundation of rigor from the start, using a 9-section comprehensive intake framework to force strategic clarity before analysis begins.</p>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                        {[
                            { num: '01', title: 'Define Your Mission', desc: 'Tell us who you are, what you want, and where you want to go. The system adapts to your needs, from early-stage founders to government ministers.' },
                            { num: '02', title: 'Set Your Parameters', desc: 'Investment, risk, timeline, sector, geography—you control every variable. We work within your boundaries, then show you what’s possible beyond them.' },
                            { num: '03', title: 'Live AI Analysis', desc: 'See your intelligence build in real time. No black box, no waiting—just transparent, cross-validated insights as they happen.' },
                            { num: '04', title: 'Global & Local Discovery', desc: 'We don’t just answer your questions—we find new opportunities, risks, and partners you might never have considered.' },
                            { num: '05', title: 'Scoring & Diagnostics', desc: 'Proprietary engines like SPI™, RROI™, and IVAS™ quantify viability, risk-adjusted return, and activation velocity, with clear drivers for every score.' },
                            { num: '06', title: 'Live Report Building', desc: 'Your strategic dossier builds as you watch. You decide what goes in, what gets expanded, and what matters most.' },
                            { num: '07', title: 'Actionable Deliverables', desc: 'Generate executive summaries, full dossiers, financial models, partner lists, and risk registers—ready to use, share, and act on with traceable provenance.' },
                            { num: '+', title: 'Continuous Intelligence', desc: 'Our AI monitors and learns 24/7. You get alerts, updates, and smarter insights—so your strategy always stays ahead.' }
                        ].map((step) => (
                            <div key={step.num} className={`bg-white border border-slate-200 rounded-lg p-6 ${step.num === '+' ? 'col-span-1' : ''} hover:bg-slate-50 transition-all`}>
                                <div className="flex items-center gap-3 mb-3">
                                    <div className={`w-14 h-14 rounded-full bg-blue-200 flex items-center justify-center text-slate-950 font-extrabold border border-blue-300 ${step.num === '+' ? 'w-12 h-12 bg-blue-100 text-blue-700 border-blue-200' : ''}`}>{step.num}</div>
                                    <h4 className="font-extrabold text-slate-950 text-base">{step.title}</h4>
                                </div>
                                <p className="text-sm text-slate-700 leading-relaxed">{step.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* FINAL CALL TO ACTION (before Terms) */}
                <div className="mt-8 bg-white border border-slate-200 rounded-lg p-6 sm:p-8">
                    <h3 className="text-blue-700 text-xl font-bold">Your Autonomous Reasoning Partner</h3>
                    <p className="text-slate-700 text-sm leading-relaxed mt-2">
                        Design strategy, stress-test viability, see the full argument, and generate deliverables you can execute. Move faster, with more rigor and transparency than any standard tool.
                    </p>
                    <p className="text-slate-700 text-sm leading-relaxed mt-2">Accept the Terms below to begin your first Intelligence Report.</p>
                </div>

                {/* Bottom Section: Terms, Compliance & Business Disclaimer - Full Width */}
                <div className="bg-white shadow-xl border border-slate-200 rounded-lg overflow-hidden">
                    <div className="p-6 sm:p-8 bg-white">
                        <h3 className="text-blue-700 font-bold uppercase tracking-widest text-xs mb-4 flex items-center gap-2">
                            <ShieldAlert size={16} className="text-blue-700" /> Terms of Engagement, Compliance & Business Disclaimer
                        </h3>

                        <div className="space-y-4 text-xs text-slate-700 bg-slate-50 p-5 rounded-sm border border-slate-200 max-h-64 overflow-y-auto">
                            <p className="font-bold text-blue-700 mb-2">Important Business Disclaimer</p>
                            <p className="leading-relaxed mb-3">Strategic Intelligence Briefs are prepared by BW Global Advisory (ABN 55 978 113 300) using our proprietary AI-Human analytical capabilities. Analysis is based on publicly available data, BWGA's AI Economic Strategy Engine (Nexus v6.0), and regional insights gathered by our advisory team. While every effort is made to ensure accuracy at the time of generation, all briefs are illustrative, intended for strategic discussion, and do not constitute financial, legal, or investment advice. Users are advised to conduct comprehensive independent due diligence before making any investment or partnership decisions.</p>

                            <p className="font-bold text-blue-700 mb-2">Service Nature & Engagement</p>
                            <p className="leading-relaxed mb-3">BW Global Advisory specializes in providing tailored, in-depth AI-Human Intelligence Reports on a commissioned basis. The analysis and insights presented are derived from publicly available information combined with the application of BWGA's proprietary AI Economic Strategy Engine. While prepared with diligence, all outputs are intended for strategic evaluation purposes only. They do not constitute formal advice, a complete market study, or a guarantee of future outcomes. We welcome discussions regarding how our services may be specifically applied to meet your strategic objectives.</p>

                            <p className="font-bold text-blue-700 mb-2">Terms of Engagement</p>
                            <div className="leading-relaxed space-y-2 text-slate-700">
                                <p>1. <strong>Acceptance & Commercial License:</strong> By accessing the BW Nexus AI platform (v6.0), you acknowledge and accept these Terms of Engagement in full. Upon completion of payment, Strategic Intelligence Reports and associated deliverables become the intellectual property of the commissioning party. BW Global Advisory (ABN 55 978 113 300) retains rights to anonymized, aggregated data solely for system improvement and research purposes.</p>
                                <p>2. <strong>Platform Architecture:</strong> This platform utilizes a Multi-Agent AI architecture with multiple independent AI systems operating in parallel. All outputs undergo cross-validation to eliminate single-source bias. No AI-generated insight is presented without verification from at least one independent analytical pathway.</p>
                                <p>3. <strong>Regional Development Focus:</strong> The Nexus OS exists exclusively to facilitate investment, partnership, and development in regional cities worldwide. It is the first and only AI system 100% dedicated to bridging global capital with the communities that sustain national economies—the places that grow food, mine resources, manufacture goods, and support the populations that keep larger cities functioning.</p>
                                <p>4. <strong>Decision Support Tool — Not Financial Advice:</strong> The Nexus OS provides probabilistic insights, data-driven analysis, and strategic recommendations. It is expressly NOT a final decision authority and does NOT constitute financial, legal, tax, or investment advice. All outputs are advisory in nature. Users must exercise independent judgment, verify all critical findings, and seek qualified professional advice before making binding commitments.</p>
                                <p>5. <strong>Due Diligence Requirement:</strong> Users acknowledge their responsibility to conduct comprehensive independent due diligence before acting on any analysis, recommendation, or insight provided by this platform. BW Global Advisory provides strategic intelligence to inform decisions—not to replace the professional judgment of qualified advisors.</p>
                                <p>6. <strong>Data Privacy & Security:</strong> Full compliance with GDPR (EU), CCPA (California), Privacy Act 1988 (Australia), and SOC 2 Type II standards. Your data is cryptographically isolated, never commingled with other clients' data, never used to train public AI models, and never shared with third parties without explicit written consent. All data protected by 256-bit AES encryption at rest and TLS 1.3 encryption in transit.</p>
                                <p>7. <strong>Historical Data & Analytical Accuracy:</strong> Analysis is informed by 200+ years of economic development patterns (1820–2025) combined with real-time data feeds from global institutions. While methodology is rigorous, investment and partnership in regional markets involves inherent uncertainty. Historical patterns inform probability assessments but do not guarantee future results. Users must independently verify all material facts.</p>
                                <p>8. <strong>Proprietary Intellectual Property:</strong> SPI™ (Success Probability Index), RROI™ (Regional Return on Investment), SEAM™ (Stakeholder & Entity Alignment Matrix), IVAS™ (Investment Validation & Assurance System), and SCF™ (Strategic Confidence Framework) are proprietary calculation engines owned exclusively by BW Global Advisory. All methodologies, algorithms, and analytical frameworks are confidential intellectual property protected under Australian and international law.</p>
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
                                <div className={`w-5 h-5 border rounded flex items-center justify-center transition-all flex-shrink-0 mt-0.5 ${accepted ? 'bg-blue-200 border-blue-300' : 'bg-white border-slate-300 group-hover:border-blue-300'}`}>
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
        </div>
    );
};

export default CommandCenter;
