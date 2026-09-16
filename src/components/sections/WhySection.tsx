import React from 'react';
import { SITE_CONTENT } from '../../data/content';
import { AnimatedSection } from '../ui/AnimatedSection';

export const WhySection = () => {
  return (
    <section className="py-24 md:py-32 bg-ai-bg border-t border-ai-border">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        <AnimatedSection className="max-w-2xl mb-16 md:mb-24">
          <h2 className="text-3xl md:text-5xl font-display font-bold tracking-tight mb-6 text-balance">
            {SITE_CONTENT.whyUs.heading}
          </h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {SITE_CONTENT.whyUs.blocks.map((block, index) => (
            <AnimatedSection key={block.title} delay={index * 100}>
              <div className="border-t-2 border-ai-text pt-6">
                <h3 className="text-sm font-bold tracking-widest uppercase mb-4 text-ai-text">
                  {block.title}
                </h3>
                <p className="text-ai-muted text-sm leading-relaxed">
                  {block.desc}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>

      </div>
    </section>
  );
};
