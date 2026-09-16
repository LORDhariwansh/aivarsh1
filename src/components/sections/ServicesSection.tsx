import React from 'react';
import { SERVICES } from '../../data/services';
import { AnimatedSection } from '../ui/AnimatedSection';

export const ServicesSection = () => {
  return (
    <section id="solutions" className="py-24 md:py-32 bg-ai-cloud">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        <AnimatedSection className="max-w-4xl mb-16 md:mb-24">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold tracking-tight mb-8 text-ai-graphite">
            Everything digital. One thoughtful team.
          </h2>
        </AnimatedSection>

        <div className="flex flex-col border-t border-ai-graphite/10">
          {SERVICES.map((service, index) => (
            <AnimatedSection key={service.id} delay={index * 50}>
              <div className="group border-b border-ai-graphite/10 py-10 md:py-12 flex flex-col md:flex-row md:items-center gap-8 relative overflow-hidden transition-all duration-500 hover:bg-white cursor-pointer px-4 -mx-4 rounded-xl hover:shadow-modern-sm">
                
                {/* Number */}
                <div className="text-xl md:text-2xl font-display font-bold text-ai-graphite/20 group-hover:text-ai-teal transition-colors w-16 shrink-0">
                  {String(index + 1).padStart(2, '0')}
                </div>

                {/* Content */}
                <div className="flex-grow max-w-2xl">
                  <h3 className="text-2xl md:text-3xl font-display font-bold text-ai-graphite mb-3 group-hover:translate-x-2 transition-transform duration-300">
                    {service.title}
                  </h3>
                  <p className="text-lg text-ai-graphite/60 font-medium group-hover:translate-x-2 transition-transform duration-300 delay-75">
                    {service.description}
                  </p>
                </div>

                {/* CTA */}
                <div className="shrink-0 flex items-center gap-2 text-ai-graphite font-bold opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                  Explore <span className="text-ai-teal text-xl leading-none">→</span>
                </div>

                {/* Subtle Hover Visual Preview (Abstract shape that appears on hover) */}
                <div className="absolute right-0 top-0 bottom-0 w-64 bg-gradient-to-l from-ai-teal/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>

              </div>
            </AnimatedSection>
          ))}
        </div>

      </div>
    </section>
  );
};
