import React from 'react';
import { SITE_CONTENT } from '../../data/content';
import { AnimatedSection } from '../ui/AnimatedSection';

export const ProcessSection = () => {
  return (
    <section id="process" className="py-24 md:py-40 bg-taste-bg border-t border-taste-border">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <AnimatedSection className="mb-24">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-medium tracking-tighter text-taste-text">
            Methodology
          </h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-y-16 gap-x-8">
          {SITE_CONTENT.process.steps.map((step, index) => (
            <AnimatedSection key={step.num} delay={index * 100}>
              <div className="border-t border-taste-border pt-6">
                <span className="text-xs font-mono text-taste-muted block mb-4">
                  {step.num}
                </span>
                <h3 className="text-lg font-medium mb-3 text-taste-text tracking-tight">
                  {step.title}
                </h3>
                <p className="text-sm text-taste-muted leading-relaxed font-light">
                  {step.desc}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};
