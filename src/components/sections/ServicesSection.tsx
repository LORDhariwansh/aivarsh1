import React from 'react';
import { SERVICES } from '../../data/services';
import { HorizontalPan } from '../ui/HorizontalPan';

export const ServicesSection = () => {
  return (
    <section id="services" className="bg-taste-bg border-t border-taste-border relative">
      <div className="absolute top-12 left-6 md:left-12 z-10">
        <h2 className="text-[10px] tracking-[0.2em] uppercase font-mono text-taste-muted">
          Services Portfolio
        </h2>
      </div>

      <HorizontalPan>
        <div className="flex gap-0 h-full py-32 px-6 md:px-12 items-center">
          {SERVICES.map((service, index) => {
            const hasSubtleGradient = index % 2 === 1;
            
            return (
              <div 
                key={service.id} 
                className="w-[85vw] md:w-[60vw] lg:w-[40vw] h-[60vh] shrink-0 border border-taste-border bg-taste-surface p-10 md:p-16 flex flex-col justify-between group relative overflow-hidden"
              >
                {hasSubtleGradient && (
                  <div className="absolute inset-0 bg-gradient-to-br from-taste-accent/10 to-transparent pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                )}
                
                <span className="text-[10px] font-mono text-taste-muted mb-12 block relative z-10">
                  {String(index + 1).padStart(2, '0')}
                </span>
                
                <div className="relative z-10">
                  <h3 className="text-3xl md:text-5xl font-display font-medium text-taste-text mb-6 tracking-tight leading-none group-hover:text-taste-accent transition-colors duration-500">
                    {service.title}
                  </h3>
                  <p className="text-base md:text-lg text-taste-muted leading-relaxed font-light max-w-sm">
                    {service.description}
                  </p>
                </div>
              </div>
            );
          })}
          
          <div className="w-[10vw] shrink-0" /> {/* End padding spacer */}
        </div>
      </HorizontalPan>
    </section>
  );
};
