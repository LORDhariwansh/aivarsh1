import React from 'react';
import { SERVICES } from '../../data/services';
import { SITE_CONTENT } from '../../data/content';
import { AnimatedSection } from '../ui/AnimatedSection';

export const ServicesSection = () => {
  return (
    <section id="solutions" className="py-24 md:py-32 bg-ai-bg">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        <AnimatedSection className="max-w-2xl mb-16 md:mb-24">
          <span className="text-xs font-bold tracking-widest uppercase text-ai-muted mb-6 block">
            {SITE_CONTENT.servicesIntro.label}
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-bold tracking-tight mb-6">
            {SITE_CONTENT.servicesIntro.heading}
          </h2>
          <p className="text-lg text-ai-muted leading-relaxed">
            {SITE_CONTENT.servicesIntro.description}
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => (
            <AnimatedSection key={service.id} delay={index * 50}>
              <div className="group h-full bg-ai-card rounded-xl border border-ai-border p-8 hover:shadow-soft transition-all duration-300 hover:border-ai-accent/30">
                <h3 className="text-xl font-display font-bold mb-3 tracking-tight">
                  {service.title}
                </h3>
                <p className="text-ai-text font-medium text-sm mb-4">
                  {service.subtitle}
                </p>
                <p className="text-ai-muted text-sm leading-relaxed mb-8">
                  {service.description}
                </p>
                
                <div className="mt-auto">
                  <a href="#contact" className="text-sm font-medium text-ai-accent group-hover:text-black transition-colors flex items-center gap-1">
                    {service.cta}
                  </a>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

      </div>
    </section>
  );
};
