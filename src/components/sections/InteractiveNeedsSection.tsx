import React from 'react';
import { AnimatedSection } from '../ui/AnimatedSection';

export const InteractiveNeedsSection = () => {
  return (
    <section className="py-24 md:py-40 bg-taste-bg border-t border-taste-border">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <AnimatedSection className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-display font-medium tracking-tighter text-taste-text leading-[1.05] mb-8">
              Live AI Analytics.
            </h2>
            <p className="text-taste-muted text-lg font-light leading-relaxed max-w-md">
              Real-time processing for enterprise detection, occupancy monitoring, and automated alerts. We build computer vision pipelines that run efficiently at scale.
            </p>
          </div>

          <div className="bg-taste-surface border border-taste-border p-6 md:p-8 font-mono text-xs text-taste-muted shadow-2xl relative overflow-hidden group">
            {/* Subtle radar scanline effect */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-taste-accent/5 to-transparent h-full w-full opacity-50 -translate-y-full group-hover:translate-y-full transition-transform duration-[3s] ease-linear repeat-infinite" />
            
            <div className="flex justify-between border-b border-taste-border pb-4 mb-6 relative z-10">
              <span className="text-taste-text tracking-widest">STREAM_STATUS</span>
              <span className="text-taste-accent flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-taste-accent animate-pulse" />
                ACTIVE
              </span>
            </div>
            
            <div className="space-y-4 relative z-10">
              <div className="flex justify-between items-center">
                <span>[10:45:01] PERSON_DETECTED</span>
                <span className="text-taste-text">CONF: 0.94</span>
              </div>
              <div className="flex justify-between items-center">
                <span>[10:45:02] VEHICLE_TRACKED</span>
                <span className="text-taste-text">CONF: 0.97</span>
              </div>
              <div className="flex justify-between items-center opacity-50">
                <span>[10:45:03] NO_MOTION</span>
                <span>--</span>
              </div>
              <div className="flex justify-between items-center">
                <span>[10:45:04] PERSON_DETECTED</span>
                <span className="text-taste-text">CONF: 0.89</span>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};
