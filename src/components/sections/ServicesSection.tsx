import React from 'react';
import { SERVICES } from '../../data/services';
import { AnimatedSection } from '../ui/AnimatedSection';

// We have 8 services. Let's create an asymmetrical layout pattern: 
// Col spans: 2, 1, 1, 2, 1, 1, 2...
// Or we can just use varied gradients to break the monotony.

export const ServicesSection = () => {
  return (
    <section id="services" className="py-32 md:py-48 bg-taste-bg border-t border-taste-border">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <AnimatedSection className="mb-20 md:mb-32">
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-display font-medium tracking-tighter text-taste-text max-w-3xl leading-[1.05]">
            Technology and design, aligned.
          </h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-taste-border bg-opacity-50 border border-taste-border">
          {SERVICES.map((service, index) => {
            // Apply bento background diversity rule
            const isFeatured = index === 0 || index === 4;
            const hasSubtleGradient = index === 3 || index === 7;
            
            return (
              <div 
                key={service.id} 
                className={`
                  p-10 md:p-12 group transition-all duration-500 relative overflow-hidden
                  ${isFeatured ? 'lg:col-span-2 bg-taste-surface' : 'bg-taste-bg hover:bg-taste-surface'}
                `}
              >
                {/* Visual diversity: subtle gradient or noise on specific cells */}
                {hasSubtleGradient && (
                  <div className="absolute inset-0 bg-gradient-to-br from-taste-accent/5 to-transparent pointer-events-none opacity-50 group-hover:opacity-100 transition-opacity duration-500" />
                )}
                
                <div className="relative z-10 flex flex-col h-full justify-between">
                  <span className="text-[10px] font-mono text-taste-muted/50 mb-12 block group-hover:text-taste-muted transition-colors">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  
                  <div>
                    <h3 className="text-xl md:text-2xl font-medium text-taste-text mb-4 tracking-tight">
                      {service.title}
                    </h3>
                    <p className="text-sm text-taste-muted leading-relaxed font-light">
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
