import React from 'react';
import { SERVICES } from '../../data/services';
import { SITE_CONTENT } from '../../data/content';
import { AnimatedSection } from '../ui/AnimatedSection';

export const ServicesSection = () => {
  return (
    <section id="solutions" className="py-24 md:py-32 bg-ai-ivory">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        <AnimatedSection className="max-w-3xl mb-16 md:mb-24">
          <span className="text-ai-gold text-xs font-semibold tracking-[0.2em] uppercase mb-6 block">
            {SITE_CONTENT.servicesIntro.label}
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-medium tracking-tight mb-8 text-ai-forest">
            {SITE_CONTENT.servicesIntro.heading}
          </h2>
          <p className="text-lg md:text-xl text-ai-forest/70 leading-relaxed font-light">
            {SITE_CONTENT.servicesIntro.description}
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => (
            <AnimatedSection key={service.id} delay={index * 100}>
              <div className="group h-full bg-ai-ivory border border-ai-border/40 p-10 hover:bg-ai-forest transition-colors duration-500 flex flex-col">
                
                {/* Champagne Gold Icon/Detail */}
                <div className="w-8 h-8 rounded-full border border-ai-gold flex items-center justify-center mb-8 group-hover:border-ai-gold/50 transition-colors">
                  <div className="w-2 h-2 rounded-full bg-ai-gold"></div>
                </div>

                <h3 className="text-xl font-display font-bold mb-4 tracking-tight text-ai-forest group-hover:text-ai-ivory transition-colors">
                  {service.title}
                </h3>
                <p className="text-ai-forest/80 font-medium text-sm mb-4 group-hover:text-ai-ivory/80 transition-colors">
                  {service.subtitle}
                </p>
                <p className="text-ai-forest/60 text-sm leading-relaxed mb-10 font-light group-hover:text-ai-ivory/60 transition-colors">
                  {service.description}
                </p>
                
                <div className="mt-auto">
                  <a href="#contact" className="text-sm font-medium text-ai-forest group-hover:text-ai-gold transition-colors flex items-center gap-2">
                    {service.cta.replace(' →', '')}
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
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
