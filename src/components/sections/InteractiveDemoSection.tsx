import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const InteractiveDemoSection = () => {
  const [activeTab, setActiveTab] = useState<'automation' | 'vision' | 'software'>('automation');

  // Automation demo state
  const [activeStep, setActiveStep] = useState(0);
  useEffect(() => {
    if (activeTab !== 'automation') return;
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % 4);
    }, 2800);
    return () => clearInterval(interval);
  }, [activeTab]);

  // Video analytics simulation state
  const [detectedCount, setDetectedCount] = useState(3);
  const [ppeCompliant, setPpeCompliant] = useState(true);
  useEffect(() => {
    if (activeTab !== 'vision') return;
    const interval = setInterval(() => {
      setDetectedCount((prev) => (prev === 3 ? 4 : 3));
      setPpeCompliant((prev) => !prev);
    }, 3200);
    return () => clearInterval(interval);
  }, [activeTab]);

  return (
    <section id="demonstrations" className="py-32 md:py-48 bg-bg-elevated border-t border-border-subtle relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div>
            <span className="text-xs font-mono tracking-widest uppercase text-saffron mb-4 block">
              Interactive Demonstrations
            </span>
            <h2 className="text-3xl md:text-5xl font-display font-bold tracking-tight text-text-primary max-w-2xl">
              Engineered systems in action.
            </h2>
          </div>
          <p className="text-sm text-text-muted font-light max-w-md">
            Explore live interactive prototypes representing the core capabilities and architecture delivered by AI VARSH.
          </p>
        </div>

        {/* Tab switcher */}
        <div className="flex flex-wrap items-center gap-3 mb-10 pb-4 border-b border-border-subtle">
          <button
            onClick={() => setActiveTab('automation')}
            className={`px-5 py-2.5 rounded-full text-xs font-mono tracking-wider uppercase transition-all duration-300 cursor-pointer ${
              activeTab === 'automation'
                ? 'bg-saffron text-bg font-semibold shadow-lg shadow-saffron/20'
                : 'bg-bg-card text-text-muted hover:text-text-primary border border-border-subtle'
            }`}
          >
            01. Workflow Automation
          </button>
          <button
            onClick={() => setActiveTab('vision')}
            className={`px-5 py-2.5 rounded-full text-xs font-mono tracking-wider uppercase transition-all duration-300 cursor-pointer ${
              activeTab === 'vision'
                ? 'bg-saffron text-bg font-semibold shadow-lg shadow-saffron/20'
                : 'bg-bg-card text-text-muted hover:text-text-primary border border-border-subtle'
            }`}
          >
            02. AI Video Analytics (Simulated)
          </button>
          <button
            onClick={() => setActiveTab('software')}
            className={`px-5 py-2.5 rounded-full text-xs font-mono tracking-wider uppercase transition-all duration-300 cursor-pointer ${
              activeTab === 'software'
                ? 'bg-saffron text-bg font-semibold shadow-lg shadow-saffron/20'
                : 'bg-bg-card text-text-muted hover:text-text-primary border border-border-subtle'
            }`}
          >
            03. Custom Web Software
          </button>
        </div>

        {/* Demo Content Container */}
        <div className="bg-bg-card border border-border-subtle rounded-2xl p-6 md:p-10 shadow-2xl shadow-black/50 min-h-[460px] flex flex-col justify-center">
          <AnimatePresence mode="wait">
            
            {/* DEMO 1: WORKFLOW AUTOMATION */}
            {activeTab === 'automation' && (
              <motion.div
                key="automation"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.4 }}
                className="w-full flex flex-col gap-10"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-border-subtle">
                  <div>
                    <h3 className="text-xl font-display font-semibold text-text-primary">
                      Autonomous Lead Ingestion & CRM Routing
                    </h3>
                    <p className="text-xs text-text-muted font-light mt-1">
                      Live event pipeline: Inbound webhook to semantic intelligence and team notification.
                    </p>
                  </div>
                  <div className="flex items-center gap-2 self-start sm:self-auto px-3 py-1 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-emerald-400 text-xs font-mono">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span>PIPELINE ACTIVE</span>
                  </div>
                </div>

                {/* Visual pipeline steps */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 relative">
                  {[
                    {
                      step: '01. Inbound Event',
                      label: 'WhatsApp / Web Enquiry',
                      detail: 'Customer requests quote with payload specifications',
                    },
                    {
                      step: '02. Intent Analysis',
                      label: 'Semantic AI Model',
                      detail: 'Classifies urgency, category, and budget intent',
                    },
                    {
                      step: '03. Sync & Update',
                      label: 'CRM & Database Sync',
                      detail: 'Generates lead record & attributes lead score',
                    },
                    {
                      step: '04. Instant Response',
                      label: 'Automated Dispatch',
                      detail: 'Sends tailored brochure & alerts account manager',
                    },
                  ].map((item, idx) => {
                    const isCurrent = activeStep === idx;
                    const isPassed = activeStep > idx;
                    return (
                      <div
                        key={item.step}
                        className={`p-5 rounded-xl border transition-all duration-400 relative ${
                          isCurrent
                            ? 'bg-bg-elevated border-saffron shadow-lg shadow-saffron/10 scale-[1.02]'
                            : isPassed
                            ? 'bg-bg-elevated/40 border-border-subtle opacity-75'
                            : 'bg-bg border-border-subtle/50 opacity-40'
                        }`}
                      >
                        <div className="flex items-center justify-between mb-3">
                          <span className="text-[11px] font-mono text-saffron uppercase">
                            {item.step}
                          </span>
                          {isCurrent && (
                            <span className="w-1.5 h-1.5 rounded-full bg-saffron animate-ping" />
                          )}
                        </div>
                        <h4 className="text-sm font-semibold text-text-primary mb-2">
                          {item.label}
                        </h4>
                        <p className="text-xs text-text-muted font-light leading-relaxed">
                          {item.detail}
                        </p>
                      </div>
                    );
                  })}
                </div>

                {/* Pipeline Console Log */}
                <div className="bg-bg border border-border-subtle rounded-xl p-4 font-mono text-xs text-text-dim flex flex-col gap-1.5">
                  <div className="flex items-center gap-2 text-text-muted">
                    <span className="text-saffron">●</span>
                    <span className="text-text-primary">Pipeline Status:</span>
                    <span>
                      {activeStep === 0 && 'Received payload from webhook endpoint (200 OK)'}
                      {activeStep === 1 && 'AI intent parser score: 0.94 (Enterprise inquiry)'}
                      {activeStep === 2 && 'Firestore lead entry updated: #lead_8924'}
                      {activeStep === 3 && 'WhatsApp dispatch confirmed via Cloud API'}
                    </span>
                  </div>
                </div>
              </motion.div>
            )}

            {/* DEMO 2: AI VIDEO ANALYTICS */}
            {activeTab === 'vision' && (
              <motion.div
                key="vision"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.4 }}
                className="w-full flex flex-col gap-6"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-border-subtle">
                  <div>
                    <h3 className="text-xl font-display font-semibold text-text-primary">
                      Facility Computer Vision — PPE & Perimeter Intelligence
                    </h3>
                    <p className="text-xs text-text-muted font-light mt-1">
                      Simulated industrial stream monitoring safety gear compliance and spatial occupancy.
                    </p>
                  </div>
                  <span className="text-xs font-mono text-text-dim uppercase tracking-widest border border-border-subtle px-3 py-1 rounded-full self-start sm:self-auto">
                    Simulated Sandbox
                  </span>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-[1.8fr_1fr] gap-6">
                  {/* Simulated Camera Viewport */}
                  <div className="relative aspect-video bg-bg rounded-xl border border-border-subtle overflow-hidden flex flex-col justify-between p-4">
                    {/* Top bar info */}
                    <div className="flex items-center justify-between z-10">
                      <div className="flex items-center gap-2 px-2.5 py-1 rounded bg-black/70 text-xs font-mono text-text-primary">
                        <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                        <span>CAM-04 [INDUSTRIAL BAY]</span>
                      </div>
                      <span className="text-[11px] font-mono text-text-muted bg-black/70 px-2.5 py-1 rounded">
                        1080p • 30 FPS
                      </span>
                    </div>

                    {/* Simulated visual elements / bounding boxes */}
                    <div className="absolute inset-0 flex items-center justify-around pointer-events-none p-12">
                      {/* Box 1 */}
                      <div className="border border-emerald-400 bg-emerald-500/10 rounded p-2 text-[10px] font-mono text-emerald-300 flex flex-col justify-between h-40 w-28">
                        <span>PERSON [98%]</span>
                        <span className="bg-emerald-950/80 px-1 py-0.5 rounded text-[9px]">HELMET: YES</span>
                      </div>
                      {/* Box 2 */}
                      <div className={`border rounded p-2 text-[10px] font-mono flex flex-col justify-between h-44 w-32 transition-colors duration-500 ${
                        ppeCompliant
                          ? 'border-emerald-400 bg-emerald-500/10 text-emerald-300'
                          : 'border-saffron bg-saffron/15 text-saffron'
                      }`}>
                        <span>PERSON [96%]</span>
                        <span className={`px-1 py-0.5 rounded text-[9px] ${
                          ppeCompliant ? 'bg-emerald-950/80' : 'bg-amber-950/90 text-saffron'
                        }`}>
                          {ppeCompliant ? 'HELMET: YES' : 'HELMET: MISSING'}
                        </span>
                      </div>
                      {/* Box 3 */}
                      <div className="border border-emerald-400 bg-emerald-500/10 rounded p-2 text-[10px] font-mono text-emerald-300 flex flex-col justify-between h-36 w-24">
                        <span>PERSON [94%]</span>
                        <span className="bg-emerald-950/80 px-1 py-0.5 rounded text-[9px]">VEST: YES</span>
                      </div>
                    </div>

                    {/* Bottom telemetry overlay */}
                    <div className="flex items-center justify-between text-[11px] font-mono text-text-dim bg-black/70 p-2 rounded z-10">
                      <span>INFERENCE LATENCY: 24ms</span>
                      <span>MODEL: YOLOv11-EDGE</span>
                    </div>
                  </div>

                  {/* Real-time telemetry panel */}
                  <div className="flex flex-col gap-4">
                    <div className="p-4 bg-bg rounded-xl border border-border-subtle">
                      <p className="text-xs font-mono uppercase text-text-dim mb-1">Occupancy Count</p>
                      <p className="text-2xl font-display font-bold text-text-primary">{detectedCount} Persons</p>
                    </div>

                    <div className="p-4 bg-bg rounded-xl border border-border-subtle">
                      <p className="text-xs font-mono uppercase text-text-dim mb-1">Safety Status</p>
                      <div className="flex items-center gap-2 mt-1">
                        <span className={`w-2.5 h-2.5 rounded-full ${ppeCompliant ? 'bg-emerald-400' : 'bg-saffron'}`} />
                        <span className={`text-sm font-semibold ${ppeCompliant ? 'text-emerald-400' : 'text-saffron'}`}>
                          {ppeCompliant ? '100% PPE COMPLIANT' : 'SAFETY WARNING: MISSING HELMET'}
                        </span>
                      </div>
                    </div>

                    <div className="p-4 bg-bg rounded-xl border border-border-subtle">
                      <p className="text-xs font-mono uppercase text-text-dim mb-2">Detection Capabilities</p>
                      <ul className="text-xs text-text-muted space-y-1.5 font-light">
                        <li>• PPE (Helmet, Vest, Gloves) Detection</li>
                        <li>• Intrusion & Zone Cross Alarms</li>
                        <li>• Fire & Smoke Early Warning</li>
                        <li>• Automated Audit Logging</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {/* DEMO 3: CUSTOM SOFTWARE ARCHITECTURE */}
            {activeTab === 'software' && (
              <motion.div
                key="software"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.4 }}
                className="w-full flex flex-col gap-6"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-border-subtle">
                  <div>
                    <h3 className="text-xl font-display font-semibold text-text-primary">
                      Fullstack Web & Mobile Architecture
                    </h3>
                    <p className="text-xs text-text-muted font-light mt-1">
                      Production software built for sub-second responses, offline resilience, and modern security standards.
                    </p>
                  </div>
                  <span className="text-xs font-mono text-saffron uppercase tracking-widest border border-saffron/30 px-3 py-1 rounded-full self-start sm:self-auto">
                    Fullstack Suite
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                  <div className="p-6 bg-bg rounded-xl border border-border-subtle flex flex-col justify-between">
                    <div>
                      <div className="w-8 h-8 rounded-lg bg-saffron/10 text-saffron flex items-center justify-center font-mono text-xs font-bold mb-4">
                        UI
                      </div>
                      <h4 className="text-base font-semibold text-text-primary mb-2">
                        Frontend & Mobile App
                      </h4>
                      <p className="text-xs text-text-muted font-light leading-relaxed">
                        React, React Native, Vite, Tailwind CSS. Fluid animations, accessible layouts, and zero-layout-shift design.
                      </p>
                    </div>
                    <div className="mt-6 pt-4 border-t border-border-subtle text-[11px] font-mono text-emerald-400">
                      99+ Lighthouse Target
                    </div>
                  </div>

                  <div className="p-6 bg-bg rounded-xl border border-border-subtle flex flex-col justify-between">
                    <div>
                      <div className="w-8 h-8 rounded-lg bg-saffron/10 text-saffron flex items-center justify-center font-mono text-xs font-bold mb-4">
                        API
                      </div>
                      <h4 className="text-base font-semibold text-text-primary mb-2">
                        Scalable Backend & APIs
                      </h4>
                      <p className="text-xs text-text-muted font-light leading-relaxed">
                        Node.js, Python FastAPI, PostgreSQL, Redis, Firebase Firestore. High-concurrency architectures with secure JWT / OAuth.
                      </p>
                    </div>
                    <div className="mt-6 pt-4 border-t border-border-subtle text-[11px] font-mono text-emerald-400">
                      Sub-50ms Response Latency
                    </div>
                  </div>

                  <div className="p-6 bg-bg rounded-xl border border-border-subtle flex flex-col justify-between">
                    <div>
                      <div className="w-8 h-8 rounded-lg bg-saffron/10 text-saffron flex items-center justify-center font-mono text-xs font-bold mb-4">
                        OPS
                      </div>
                      <h4 className="text-base font-semibold text-text-primary mb-2">
                        Cloud & Continuous Delivery
                      </h4>
                      <p className="text-xs text-text-muted font-light leading-relaxed">
                        Docker, automated CI/CD pipelines, automated testing, and zero-downtime rolling deployments.
                      </p>
                    </div>
                    <div className="mt-6 pt-4 border-t border-border-subtle text-[11px] font-mono text-emerald-400">
                      99.9% Uptime Architecture
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

          </AnimatePresence>
        </div>

      </div>
    </section>
  );
};
