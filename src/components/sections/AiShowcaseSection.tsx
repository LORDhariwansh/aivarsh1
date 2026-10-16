import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface NodeData {
  id: string;
  label: string;
  number: string;
  subtitle: string;
  description: string;
  metrics: string;
  examples: string[];
  color: string;
}

const NODES: NodeData[] = [
  {
    id: 'input',
    label: 'Input Ingestion',
    number: '01',
    subtitle: 'Multi-channel raw signals',
    description: 'Captures unstructured business data from WhatsApp messages, ERP webhooks, documents, customer support emails, and live IP video camera RTSP streams.',
    metrics: 'Supports 10+ data formats • Sub-5ms intake',
    examples: ['WhatsApp audio & text', 'RTSP video feeds', 'Inbound invoices & PDFs', 'Webhooks'],
    color: '#8B5CF6',
  },
  {
    id: 'processing',
    label: 'AI Processing',
    number: '02',
    subtitle: 'Computer vision & semantic parsing',
    description: 'Neural models process spatial and textual context simultaneously. Computer vision detects safety violations and object tracking; LLMs categorize intent and sentiment.',
    metrics: '99.2% classification accuracy • Edge-optimized',
    examples: ['YOLOv11 object tracking', 'Entity extraction', 'Sentiment analysis', 'OCR processing'],
    color: '#A78BFA',
  },
  {
    id: 'decision',
    label: 'Intelligent Decision',
    number: '03',
    subtitle: 'Contextual policy routing',
    description: 'Combines machine learning probabilities with deterministic business rules to validate compliance, calculate lead score, or verify anomaly severity thresholds.',
    metrics: 'Deterministic safety rules • Zero hallucination',
    examples: ['Confidence thresholding', 'Priority scoring', 'Approval routing', 'Anomaly grading'],
    color: '#8B5CF6',
  },
  {
    id: 'action',
    label: 'Automated Action',
    number: '04',
    subtitle: 'Immediate downstream execution',
    description: 'Executes programmatic operations without human delay: dispatches WhatsApp notifications, raises factory alarm alerts, creates CRM records, or triggers payment APIs.',
    metrics: '<200ms latency to action • 100% audit log',
    examples: ['CRM auto-population', 'WhatsApp client response', 'Facility buzzer trigger', 'Slack team alert'],
    color: '#A78BFA',
  },
  {
    id: 'insight',
    label: 'Compounding Insight',
    number: '05',
    subtitle: 'Telemetry & business intelligence',
    description: 'Aggregates structured event timelines into management dashboards, uncovering operational bottlenecks, safety trends, and continuous feedback loop optimizations.',
    metrics: 'Executive reporting • Continuous learning',
    examples: ['Weekly safety audit graphs', 'Lead conversion velocity', 'Throughput metrics', 'Drift detection'],
    color: '#8B5CF6',
  },
];

export const AiShowcaseSection = () => {
  const [selectedNodeId, setSelectedNodeId] = useState<string>('processing');
  const activeNode = NODES.find((n) => n.id === selectedNodeId) || NODES[1];

  return (
    <section id="showcase" className="py-32 md:py-48 bg-surface border-t border-border relative overflow-hidden">
      {/* Background ambient radial glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] pointer-events-none rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(139, 92, 246, 0.12) 0%, rgba(109, 40, 217, 0.04) 50%, transparent 70%)',
        }}
      />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-xs font-mono tracking-widest uppercase text-accent mb-4 block font-medium">
            Workflow Architecture
          </span>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-display font-bold tracking-tight text-foreground leading-[1.08]">
            Intelligence, made tangible.
          </h2>
          <p className="mt-5 text-base md:text-lg text-muted font-light leading-relaxed max-w-2xl mx-auto">
            Interact with the five stages of an AI VARSH intelligent system. Click any node to inspect how raw inputs become high-impact business outcomes.
          </p>
        </div>

        {/* Interactive Node Flow Diagram */}
        <div className="mb-14">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 md:gap-4">
            {NODES.map((node) => {
              const isSelected = selectedNodeId === node.id;
              return (
                <button
                  key={node.id}
                  onClick={() => setSelectedNodeId(node.id)}
                  className={`p-5 rounded-2xl border text-left transition-all duration-300 relative cursor-pointer ${
                    isSelected
                      ? 'bg-background border-accent shadow-md shadow-accent/10 -translate-y-1'
                      : 'bg-background/50 border-border hover:bg-background/80 hover:border-accent/40'
                  }`}
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-mono text-accent font-semibold">{node.number}</span>
                    <span
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        isSelected ? 'bg-accent scale-125' : 'bg-muted/30'
                      }`}
                    />
                  </div>
                  <h4 className="text-sm md:text-base font-display font-semibold text-foreground mb-1">
                    {node.label}
                  </h4>
                  <p className="text-xs text-muted font-light line-clamp-1">
                    {node.subtitle}
                  </p>
                </button>
              );
            })}
          </div>
        </div>

        {/* Detailed Active Node Inspector Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeNode.id}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] as const }}
            className="p-8 md:p-12 bg-background border border-border rounded-2xl shadow-sm"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              
              <div className="lg:col-span-7 flex flex-col">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-xs font-mono px-2.5 py-1 rounded-full bg-accent-soft text-foreground font-semibold">
                    STAGE {activeNode.number} OF 05
                  </span>
                  <span className="text-xs font-mono text-muted">
                    {activeNode.metrics}
                  </span>
                </div>

                <h3 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-3">
                  {activeNode.label}
                </h3>
                <p className="text-sm font-sans font-medium text-accent-secondary mb-4">
                  {activeNode.subtitle}
                </p>
                <p className="text-base text-muted font-light leading-relaxed mb-6">
                  {activeNode.description}
                </p>
              </div>

              <div className="lg:col-span-5 bg-surface p-6 rounded-xl border border-border flex flex-col justify-between">
                <div>
                  <p className="text-xs font-mono tracking-widest uppercase text-muted mb-4 font-semibold">
                    Real-World Implementation
                  </p>
                  <ul className="space-y-2.5">
                    {activeNode.examples.map((ex) => (
                      <li key={ex} className="flex items-center gap-2.5 text-xs md:text-sm text-foreground">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                        <span>{ex}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8 pt-4 border-t border-border flex items-center justify-between">
                  <span className="text-xs font-mono text-muted">Connected pipeline</span>
                  <span className="text-xs font-mono text-emerald-600 font-semibold flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    ONLINE & VERIFIED
                  </span>
                </div>
              </div>

            </div>
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
};
