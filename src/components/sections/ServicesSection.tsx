import React from 'react';
import { SERVICES } from '../../data/services';
import { HorizontalPan } from '../ui/HorizontalPan';

export const ServicesSection = () => {
  return (
    <section id="services" className="bg-black border-t border-zinc-800 relative">
      <div className="absolute top-8 left-6 md:left-12 z-10 pointer-events-none">
        <p className="text-[10px] font-mono tracking-[0.2em] uppercase text-zinc-600">Services Portfolio</p>
      </div>

      <HorizontalPan>
        <div className="flex gap-px h-full pt-24 pb-0 pl-6 md:pl-12 items-center">
          {SERVICES.map((service, index) => (
            <div
              key={service.id}
              className="w-[80vw] md:w-[55vw] lg:w-[38vw] h-[70vh] shrink-0 border border-zinc-800 bg-zinc-950 p-10 md:p-14 flex flex-col justify-between group hover:bg-zinc-900 transition-colors duration-500 relative overflow-hidden"
            >
              <div className="flex justify-between items-start">
                <span className="text-[10px] font-mono text-zinc-700">{String(index + 1).padStart(2, '0')}</span>
                <svg
                  className="text-zinc-700 group-hover:text-[#E85D04] transition-colors duration-500 -rotate-45 group-hover:rotate-0 transition-transform"
                  width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
                >
                  <path d="M7 17L17 7M17 7H7M17 7v10" />
                </svg>
              </div>

              <div>
                <h3 className="text-2xl md:text-4xl font-display font-medium text-zinc-50 mb-5 tracking-tight leading-none">
                  {service.title}
                </h3>
                <p className="text-sm text-zinc-500 leading-relaxed font-light max-w-xs">
                  {service.description}
                </p>
              </div>

              {/* Saffron bottom border reveal on hover */}
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#E85D04] group-hover:w-full transition-all duration-700" />
            </div>
          ))}
          <div className="w-[6vw] shrink-0" />
        </div>
      </HorizontalPan>
    </section>
  );
};
