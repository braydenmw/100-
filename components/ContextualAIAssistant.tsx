import React from 'react';
import { 
  Sparkles, Brain, Database, Map, AlertTriangle, TrendingUp, 
  FileText, Scale, Target, DollarSign 
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface AIFeature {
  id: string;
  title: string;
  description: string;
  icon: React.ElementType;
  badge?: string;
  action: () => void;
}

interface ContextualAIAssistantProps {
  activeStep: string;
  onLaunchFeature: (featureId: string) => void;
  organizationName?: string;
  country?: string;
  city?: string;
}

// Map steps to relevant AI features
const STEP_FEATURES: Record<string, AIFeature[]> = {
  identity: [
    {
      id: 'cultural-intelligence',
      title: 'Cultural Intelligence',
      description: 'Business norms, etiquette, and negotiation tactics by country',
      icon: Map,
      badge: 'PREMIUM',
      action: () => {},
    },
    {
      id: 'competitive-map',
      title: 'Competitive Landscape',
      description: 'Visual analysis of competitors and white space',
      icon: Target,
      badge: 'HIGH VALUE',
      action: () => {},
    },
  ],
  mandate: [
    {
      id: 'deep-reasoning',
      title: 'Deep Reasoning Engine',
      description: 'Multi-step scenario analysis with cause-effect tracing',
      icon: Brain,
      badge: 'PREMIUM',
      action: () => {},
    },
    {
      id: 'intelligence-library',
      title: 'Intelligence Library',
      description: 'Learn from 100+ historical deals and proven patterns',
      icon: Database,
      badge: 'HIGH VALUE',
      action: () => {},
    },
  ],
  market: [
    {
      id: 'alternative-locations',
      title: 'Alternative Locations',
      description: 'Suggests backup markets if primary choice is risky',
      icon: Map,
      badge: 'NEW',
      action: () => {},
    },
    {
      id: 'competitive-map',
      title: 'Market Analysis',
      description: 'Understand competitive positioning and opportunities',
      icon: Target,
      action: () => {},
    },
  ],
  'partner-personas': [
    {
      id: 'intelligence-library',
      title: 'Partnership Intelligence',
      description: '5+ years of reference deals for partner insights',
      icon: Database,
      badge: 'HIGH VALUE',
      action: () => {},
    },
    {
      id: 'deep-reasoning',
      title: 'Partner Fit Analysis',
      description: 'Analyze compatibility and hidden dependencies',
      icon: Brain,
      action: () => {},
    },
  ],
  financial: [
    {
      id: 'scenario-planning',
      title: 'Scenario Planning',
      description: 'Monte Carlo simulation for best/worst/likely outcomes',
      icon: TrendingUp,
      badge: 'PREMIUM',
      action: () => {},
    },
    {
      id: 'benchmark-comparison',
      title: 'Financial Benchmarking',
      description: 'Compare your deal to 100+ historical transactions',
      icon: DollarSign,
      action: () => {},
    },
  ],
  risks: [
    {
      id: 'risk-scoring',
      title: 'Real-Time Risk Scoring',
      description: 'Live risk scores (1-10) with country heat maps',
      icon: AlertTriangle,
      badge: 'HIGH VALUE',
      action: () => {},
    },
    {
      id: 'ethics-panel',
      title: 'ESG & Ethics Analyzer',
      description: 'Compliance checking, human rights, environmental impact',
      icon: Scale,
      badge: 'NEW',
      action: () => {},
    },
  ],
  capabilities: [
    {
      id: 'intelligence-library',
      title: 'Capability Reference',
      description: 'See how others built similar capabilities',
      icon: Database,
      action: () => {},
    },
  ],
  execution: [
    {
      id: 'scenario-planning',
      title: 'Timeline Scenarios',
      description: 'Stress test your timeline assumptions',
      icon: TrendingUp,
      action: () => {},
    },
  ],
  governance: [
    {
      id: 'document-suite',
      title: 'Governance Documents',
      description: 'Generate 20+ document types (MOUs, LOIs, NDAs)',
      icon: FileText,
      badge: 'PREMIUM',
      action: () => {},
    },
    {
      id: 'intelligence-library',
      title: 'Governance Best Practices',
      description: 'Learn from proven governance structures',
      icon: Database,
      action: () => {},
    },
  ],
};

const ContextualAIAssistant: React.FC<ContextualAIAssistantProps> = ({
  activeStep,
  onLaunchFeature,
  organizationName,
  country,
  city,
}) => {
  const features = STEP_FEATURES[activeStep] || [];

  if (features.length === 0) return null;

  const getBadgeStyle = (badge?: string) => {
    switch (badge) {
      case 'HIGH VALUE':
        return 'bg-emerald-500 text-white';
      case 'PREMIUM':
        return 'bg-purple-500 text-white';
      case 'NEW':
        return 'bg-blue-500 text-white';
      default:
        return 'bg-stone-300 text-stone-700';
    }
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 20 }}
        className="fixed right-6 top-24 w-80 bg-white border border-blue-200 rounded-xl shadow-lg overflow-hidden z-40"
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-4 border-b border-blue-100">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center">
              <Sparkles size={16} className="text-white" />
            </div>
            <div>
              <div className="text-xs font-bold text-blue-900 uppercase tracking-wide">
                AI Assistant
              </div>
              <div className="text-xs text-blue-600">
                Tools for this step
              </div>
            </div>
          </div>
        </div>

        {/* Context Info */}
        {(organizationName || country || city) && (
          <div className="px-4 py-3 bg-blue-50 border-b border-blue-100">
            <div className="text-[10px] uppercase tracking-wider text-blue-700 font-semibold mb-1">
              Working On:
            </div>
            <div className="text-xs text-blue-900 font-medium">
              {organizationName && <div>{organizationName}</div>}
              {(country || city) && (
                <div className="text-blue-600">
                  {city && city}{country && `, ${country}`}
                </div>
              )}
            </div>
          </div>
        )}

        {/* Feature Cards */}
        <div className="p-4 space-y-3 max-h-[400px] overflow-y-auto">
          {features.map((feature) => (
            <motion.button
              key={feature.id}
              onClick={() => onLaunchFeature(feature.id)}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full text-left p-3 rounded-lg border border-stone-200 hover:border-blue-300 hover:bg-blue-50 transition-all group"
            >
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center shrink-0 group-hover:shadow-lg transition-shadow">
                  <feature.icon size={18} className="text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-sm font-bold text-stone-900 group-hover:text-blue-700">
                      {feature.title}
                    </span>
                    {feature.badge && (
                      <span
                        className={`text-[9px] font-bold px-1.5 py-0.5 rounded uppercase tracking-wider ${getBadgeStyle(
                          feature.badge
                        )}`}
                      >
                        {feature.badge}
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-stone-600 leading-snug">
                    {feature.description}
                  </p>
                </div>
              </div>
            </motion.button>
          ))}
        </div>

        {/* Footer */}
        <div className="px-4 py-3 bg-stone-50 border-t border-stone-200">
          <div className="text-[10px] text-stone-500 text-center">
            AI-powered insights to strengthen your {activeStep} strategy
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ContextualAIAssistant;
