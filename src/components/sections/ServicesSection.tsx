import React from 'react';
import { SERVICES } from '../../data/services';
import { AnimatedSection } from '../ui/AnimatedSection';
import { ArrowRight } from 'lucide-react';

export const ServicesSection = () => {
  return (
    <section id="services" className="py-24 md:py-32 bg-ai-deep relative overflow-hidden">
      {/* Subtle geometric accent */}
      <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-ai-saffron/[0.02] rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <AnimatedSection className="max-w-3xl mb-16 md:mb-20">
          <p className="text-xs tracking-[0.3em] uppercase text-ai-saffron/70 mb-4 font-bold flex items-center gap-3">
            <span className="w-6 h-px bg-ai-saffron/40" />
            WHAT WE BUILD
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold tracking-tight text-ai-ivory leading-tight">
            Technology, creativity and automation designed around real business needs.
          </h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {SERVICES.map((service, index) => (
            <AnimatedSection key={service.id} delay={index * 60}>
              <div className="group bg-ai-charcoal border border-ai-ivory/5 rounded-xl p-6 md:p-8 h-full flex flex-col hover:-translate-y-1.5 hover:border-ai-ivory/10 hover:shadow-glow-soft transition-all duration-400 cursor-default relative overflow-hidden">
                {/* Saffron indicator on hover */}
                <div className="absolute top-0 left-0 w-0 h-0.5 bg-ai-saffron group-hover:w-full transition-all duration-500" />

                <div className="flex items-center justify-between mb-5">
                  <span className="text-xs font-mono text-ai-saffron/60 font-bold">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <ArrowRight
                    size={16}
                    className="text-ai-muted/30 group-hover:text-ai-saffron group-hover:translate-x-1 transition-all duration-300"
                  />
                </div>

                <h3 className="text-base font-display font-bold text-ai-ivory mb-3 tracking-tight group-hover:text-ai-saffron transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-sm text-ai-muted/70 leading-relaxed flex-grow">
                  {service.description}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};
