import React from 'react';
import { INDUSTRIES } from '../../data/services';
import { SITE_CONTENT } from '../../data/content';
import { AnimatedSection } from '../ui/AnimatedSection';

export const IndustriesSection = () => {
  return (
    <section id="industries" className="py-24 md:py-32 bg-ai-card border-t border-ai-border">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        <AnimatedSection className="max-w-2xl mb-16 md:mb-24">
          <span className="text-xs font-bold tracking-widest uppercase text-ai-muted mb-6 block">
            {SITE_CONTENT.industries.label}
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-bold tracking-tight mb-6 text-balance">
            {SITE_CONTENT.industries.heading}
          </h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16 md:mb-24">
          {INDUSTRIES.map((industry, index) => (
            <AnimatedSection key={industry.title} delay={index * 50}>
              <div className="h-full border border-ai-border bg-ai-bg rounded-xl p-8 hover:shadow-soft transition-all duration-300">
                <h3 className="text-sm font-bold tracking-widest uppercase mb-6 text-ai-text">
                  {industry.title}
                </h3>
                <ul className="flex flex-col gap-3">
                  {industry.items.map((item) => (
                    <li key={item} className="text-ai-muted text-sm flex items-start gap-2">
                      <span className="text-ai-border mt-0.5">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection className="text-center pt-12 border-t border-ai-border">
          <p className="text-ai-muted text-sm mb-4">{SITE_CONTENT.industries.footer}</p>
          <a href="#contact" className="inline-block text-ai-text font-medium hover:text-ai-accent transition-colors">
            {SITE_CONTENT.industries.footerCta}
          </a>
        </AnimatedSection>

      </div>
    </section>
  );
};
