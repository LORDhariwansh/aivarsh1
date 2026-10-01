import React from 'react';
import { SERVICES } from '../../data/services';
import { AnimatedSection } from '../ui/AnimatedSection';

export const ServicesSection = () => {
  return (
    <section id="services" className="py-24 md:py-32 bg-taste-bg border-t border-taste-border">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <AnimatedSection className="mb-20 md:mb-32">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-medium tracking-tighter text-taste-text max-w-3xl">
            Technology and design, aligned.
          </h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-taste-border bg-opacity-50 border border-taste-border">
          {SERVICES.map((service, index) => (
            <div key={service.id} className="bg-taste-bg p-8 md:p-10 group hover:bg-taste-surface transition-colors duration-500">
              <span className="text-xs font-mono text-taste-muted mb-8 block">
                {String(index + 1).padStart(2, '0')}
              </span>
              <h3 className="text-lg font-medium text-taste-text mb-4 tracking-tight">
                {service.title}
              </h3>
              <p className="text-sm text-taste-muted leading-relaxed font-light">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
