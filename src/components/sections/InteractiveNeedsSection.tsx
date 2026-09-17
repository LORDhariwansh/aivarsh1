import React, { useState, useEffect } from 'react';
import { AnimatedSection } from '../ui/AnimatedSection';
import { useReducedMotion } from '../../hooks/useReducedMotion';

const detections = [
  { id: 1, type: 'PERSON', confidence: 94, zone: 'Zone A', status: 'active' },
  { id: 2, type: 'VEHICLE', confidence: 97, zone: 'Zone B', status: 'active' },
  { id: 3, type: 'PERSON', confidence: 89, zone: 'Zone A', status: 'tracking' },
  { id: 4, type: 'VEHICLE', confidence: 92, zone: 'Zone C', status: 'active' },
];

const metrics = [
  { label: 'OCCUPANCY', value: '12 / 50', status: 'normal' },
  { label: 'ACTIVE ZONES', value: '3', status: 'normal' },
  { label: 'ALERTS', value: '0', status: 'clear' },
];

export const InteractiveNeedsSection = () => {
  const reducedMotion = useReducedMotion();
  const [activeDetection, setActiveDetection] = useState(0);

  useEffect(() => {
    if (reducedMotion) return;
    const interval = setInterval(() => {
      setActiveDetection((prev) => (prev + 1) % detections.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [reducedMotion]);

  return (
    <section className="py-24 md:py-32 bg-ai-midnight relative overflow-hidden">
      {/* Subtle geometric background */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(244,240,231,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(244,240,231,0.5) 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <AnimatedSection className="mb-16">
          <p className="text-xs tracking-[0.3em] uppercase text-ai-saffron/70 mb-4 font-bold flex items-center gap-3">
            <span className="w-6 h-px bg-ai-saffron/40" />
            AI CAPABILITIES
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold tracking-tight text-ai-ivory">
            LIVE AI ANALYTICS
          </h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Detection Feed */}
          <div className="lg:col-span-7">
            <AnimatedSection delay={100}>
              <div className="bg-ai-charcoal border border-ai-ivory/5 rounded-xl overflow-hidden">
                {/* Header */}
                <div className="px-6 py-4 border-b border-ai-ivory/5 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-ai-saffron animate-pulse-dot" />
                    <span className="text-xs tracking-[0.2em] uppercase text-ai-muted font-bold">Detection Feed</span>
                  </div>
                  <span className="text-xs text-ai-muted/50 font-mono">LIVE</span>
                </div>

                {/* Detection list */}
                <div className="divide-y divide-ai-ivory/5">
                  {detections.map((det, i) => (
                    <div
                      key={det.id}
                      className={`px-6 py-4 flex items-center justify-between transition-all duration-500 ${
                        activeDetection === i ? 'bg-ai-saffron/5' : ''
                      }`}
                    >
                      <div className="flex items-center gap-4">
                        <div className={`w-1.5 h-8 rounded-full transition-colors duration-300 ${
                          activeDetection === i ? 'bg-ai-saffron' : 'bg-ai-ivory/10'
                        }`} />
                        <div>
                          <p className="text-sm font-bold text-ai-ivory">
                            {det.type} DETECTED
                          </p>
                          <p className="text-xs text-ai-muted/60">{det.zone}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <span className={`text-xs font-mono px-2 py-1 rounded ${
                          det.status === 'tracking'
                            ? 'bg-ai-saffron/10 text-ai-saffron'
                            : 'bg-ai-ivory/5 text-ai-muted/60'
                        }`}>
                          {det.status.toUpperCase()}
                        </span>
                        <span className="text-xs font-mono text-ai-muted/40">
                          {det.confidence}%
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>

          {/* Metrics Panel */}
          <div className="lg:col-span-5">
            <AnimatedSection delay={200}>
              <div className="flex flex-col gap-4">
                {metrics.map((metric) => (
                  <div
                    key={metric.label}
                    className="bg-ai-charcoal border border-ai-ivory/5 rounded-xl p-6 flex items-center justify-between"
                  >
                    <div>
                      <p className="text-xs tracking-[0.15em] uppercase text-ai-muted/50 mb-1 font-bold">
                        {metric.label}
                      </p>
                      <p className="text-2xl font-display font-bold text-ai-ivory">
                        {metric.value}
                      </p>
                    </div>
                    <div className={`w-3 h-3 rounded-full ${
                      metric.status === 'clear'
                        ? 'bg-green-500/60'
                        : 'bg-ai-saffron/60'
                    }`} />
                  </div>
                ))}

                {/* Alert panel */}
                <div className="bg-ai-charcoal border border-ai-ivory/5 rounded-xl p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-2 h-2 rounded-full bg-green-500/60" />
                    <span className="text-xs tracking-[0.15em] uppercase text-ai-muted/50 font-bold">SYSTEM STATUS</span>
                  </div>
                  <p className="text-sm text-ai-muted leading-relaxed">
                    All detection systems operational. No active alerts.
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
};
