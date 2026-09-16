import React from 'react';
import { SITE_CONTENT } from '../../data/content';
import { AnimatedSection } from '../ui/AnimatedSection';

export const WhySection = () => {
  return (
    <section className="py-24 md:py-32 bg-ai-ivory border-t border-ai-border/50">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        <AnimatedSection className="max-w-3xl mb-20 md:mb-24">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-medium tracking-tight mb-6 text-ai-forest text-balance">
            {SITE_CONTENT.whyUs.heading}
          </h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {SITE_CONTENT.whyUs.blocks.map((block, index) => (
            <AnimatedSection key={block.title} delay={index * 100}>
              <div className="border-t border-ai-forest pt-6 relative group">
                <div className="absolute top-[-1px] left-0 w-0 h-px bg-ai-gold transition-all duration-500 group-hover:w-full"></div>
                <h3 className="text-sm font-bold tracking-[0.1em] uppercase mb-4 text-ai-forest">
                  {block.title}
                </h3>
                <p className="text-ai-forest/70 text-sm leading-relaxed font-light">
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
