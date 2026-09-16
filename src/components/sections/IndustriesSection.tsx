import React from 'react';
import { INDUSTRIES } from '../../data/services';
import { SITE_CONTENT } from '../../data/content';
import { AnimatedSection } from '../ui/AnimatedSection';

export const IndustriesSection = () => {
  return (
    <section id="industries" className="py-24 md:py-32 bg-white border-t border-ai-border/50">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        <AnimatedSection className="max-w-2xl mb-20 md:mb-24">
          <span className="text-ai-gold text-xs font-semibold tracking-[0.2em] uppercase mb-6 block flex items-center gap-3">
            <span className="w-6 h-px bg-ai-gold"></span>
            {SITE_CONTENT.industries.label}
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-medium tracking-tight mb-6 text-ai-forest text-balance">
            {SITE_CONTENT.industries.heading}
          </h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16 mb-24">
          {INDUSTRIES.map((industry, index) => (
            <AnimatedSection key={industry.title} delay={index * 75}>
              <div className="group relative">
                <div className="text-ai-gold font-display text-lg mb-4 opacity-70">
                  {String(index + 1).padStart(2, '0')}
                </div>
                
                <h3 className="text-sm font-bold tracking-widest uppercase mb-6 text-ai-forest pb-4 border-b border-ai-border/40 group-hover:border-ai-gold transition-colors">
                  {industry.title}
                </h3>
                
                <ul className="flex flex-col gap-3">
                  {industry.items.map((item) => (
                    <li key={item} className="text-ai-forest/60 text-sm flex items-start font-light">
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection className="text-center pt-16 border-t border-ai-border/30">
          <p className="text-ai-forest/60 text-sm mb-4 font-light">{SITE_CONTENT.industries.footer}</p>
          <a href="#contact" className="inline-block text-ai-forest font-medium hover:text-ai-gold transition-colors pb-1 border-b border-ai-forest/20 hover:border-ai-gold">
            {SITE_CONTENT.industries.footerCta}
          </a>
        </AnimatedSection>

      </div>
    </section>
  );
};
