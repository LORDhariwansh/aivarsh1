import React from 'react';
import { SITE_CONTENT } from '../../data/content';
import { AnimatedSection } from '../ui/AnimatedSection';

export const TrustSection = () => {
  return (
    <section className="py-24 md:py-32 bg-white border-y border-ai-border/50">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        <AnimatedSection className="max-w-4xl mb-20 md:mb-32">
          <p className="text-ai-gold text-xs font-semibold tracking-[0.2em] uppercase mb-8 flex items-center gap-3">
            <span className="w-6 h-px bg-ai-gold"></span>
            {SITE_CONTENT.trust.smallText}
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-medium tracking-tight mb-8 text-ai-forest text-balance">
            {SITE_CONTENT.trust.heading}
          </h2>
          <p className="text-lg md:text-xl text-ai-forest/70 leading-relaxed max-w-2xl font-light">
            {SITE_CONTENT.trust.paragraph}
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-10">
          {SITE_CONTENT.trust.principles.map((principle, index) => (
            <AnimatedSection key={principle.title} delay={index * 150}>
              <div className="border-t border-ai-border/40 pt-8 relative group">
                {/* Subtle gold line on hover */}
                <div className="absolute top-[-1px] left-0 w-0 h-px bg-ai-gold transition-all duration-500 group-hover:w-full"></div>
                
                <h3 className="text-xl font-display font-bold mb-4 text-ai-forest tracking-tight">
                  {principle.title}
                </h3>
                <p className="text-ai-forest/60 leading-relaxed text-sm md:text-base font-light pr-4">
                  {principle.desc}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>

      </div>
    </section>
  );
};
