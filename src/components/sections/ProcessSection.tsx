import React from 'react';
import { SITE_CONTENT } from '../../data/content';
import { AnimatedSection } from '../ui/AnimatedSection';

export const ProcessSection = () => {
  return (
    <section id="process" className="py-32 md:py-48 bg-zinc-950 border-t border-zinc-800">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <AnimatedSection className="mb-24">
          <h2 className="text-5xl md:text-7xl font-display font-medium tracking-tighter text-zinc-50">
            Methodology
          </h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-zinc-800">
          {SITE_CONTENT.process.steps.map((step, index) => (
            <AnimatedSection key={step.num} delay={index * 80}>
              <div className="bg-zinc-950 p-10 md:p-12 h-full group hover:bg-zinc-900 transition-colors duration-500">
                <span className="block text-[10px] font-mono tracking-[0.2em] text-zinc-700 mb-8">{step.num}</span>
                <h3 className="text-xl font-display font-medium text-zinc-50 mb-4 tracking-tight">{step.title}</h3>
                <p className="text-sm text-zinc-500 leading-relaxed font-light">{step.desc}</p>
                <div className="mt-8 h-px w-0 bg-[#E85D04] group-hover:w-full transition-all duration-700" />
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};
