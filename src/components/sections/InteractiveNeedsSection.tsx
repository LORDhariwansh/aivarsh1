import React from 'react';
import { AnimatedSection } from '../ui/AnimatedSection';

export const InteractiveNeedsSection = () => {
  return (
    <section className="py-24 md:py-40 bg-taste-bg border-t border-taste-border">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <AnimatedSection className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-5xl font-display font-medium tracking-tight text-taste-text leading-tight mb-8">
              Live AI Analytics.
            </h2>
            <p className="text-taste-muted text-base font-light leading-relaxed mb-8 max-w-md">
              Real-time processing for enterprise detection, occupancy monitoring, and automated alerts. We build computer vision pipelines that run efficiently at scale.
            </p>
          </div>

          <div className="bg-taste-surface border border-taste-border p-8 font-mono text-xs text-taste-muted">
            <div className="flex justify-between border-b border-taste-border pb-4 mb-4">
              <span className="text-taste-text">STREAM_STATUS</span>
              <span className="text-taste-accent">ACTIVE</span>
            </div>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span>[10:45:01] PERSON_DETECTED</span>
                <span>CONF: 0.94</span>
              </div>
              <div className="flex justify-between">
                <span>[10:45:02] VEHICLE_TRACKED</span>
                <span>CONF: 0.97</span>
              </div>
              <div className="flex justify-between opacity-50">
                <span>[10:45:03] NO_MOTION</span>
                <span>--</span>
              </div>
              <div className="flex justify-between">
                <span>[10:45:04] PERSON_DETECTED</span>
                <span>CONF: 0.89</span>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};
