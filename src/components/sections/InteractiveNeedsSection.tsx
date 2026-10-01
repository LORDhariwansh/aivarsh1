import React from 'react';
import { AnimatedSection } from '../ui/AnimatedSection';

export const InteractiveNeedsSection = () => {
  return (
    <section className="py-24 md:py-40 bg-zinc-950 border-t border-zinc-800">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <AnimatedSection className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <h2 className="text-4xl md:text-5xl font-display font-medium tracking-tighter text-zinc-50 leading-tight mb-8">
              Live AI Analytics.
            </h2>
            <p className="text-zinc-500 text-base font-light leading-relaxed max-w-md">
              Real-time detection, occupancy monitoring, and automated alerts. We build computer vision pipelines that scale cleanly.
            </p>
          </div>

          <div className="bg-black border border-zinc-800 p-6 md:p-8 font-mono text-xs text-zinc-500">
            <div className="flex justify-between border-b border-zinc-800 pb-4 mb-6">
              <span className="text-zinc-300 tracking-widest">STREAM_STATUS</span>
              <span className="text-[#E85D04] flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-[#E85D04] animate-pulse" />
                ACTIVE
              </span>
            </div>
            <div className="space-y-4">
              {[
                { t: '10:45:01', e: 'PERSON_DETECTED', c: '0.94' },
                { t: '10:45:02', e: 'VEHICLE_TRACKED', c: '0.97' },
                { t: '10:45:03', e: 'NO_MOTION', c: '--', dim: true },
                { t: '10:45:04', e: 'PERSON_DETECTED', c: '0.89' },
              ].map(({ t, e, c, dim }) => (
                <div key={t} className={`flex justify-between items-center ${dim ? 'opacity-30' : ''}`}>
                  <span>[{t}] {e}</span>
                  <span className={dim ? '' : 'text-zinc-300'}>CONF: {c}</span>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};
