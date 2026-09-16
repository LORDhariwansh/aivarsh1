import React from 'react';
import { AnimatedSection } from '../ui/AnimatedSection';

export const WebAppSection = () => {
  return (
    <section className="py-24 md:py-32 bg-white border-y border-ai-graphite/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-center">
          
          {/* Left: Content */}
          <div className="lg:pr-12 relative z-10">
            <AnimatedSection>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold tracking-tight mb-8 text-ai-graphite text-balance leading-[1.1]">
                Digital products people actually enjoy using.
              </h2>
              
              <div className="flex flex-wrap gap-3 mt-12">
                {['Fast', 'Responsive', 'Scalable', 'User-focused'].map((label, index) => (
                  <span 
                    key={label}
                    className="px-4 py-2 bg-ai-cloud border border-ai-graphite/10 rounded-full text-sm font-bold text-ai-graphite/70"
                  >
                    {label}
                  </span>
                ))}
              </div>
            </AnimatedSection>
          </div>

          {/* Right: Interactive Split Screen Mockup */}
          <div className="relative z-10 h-[400px] sm:h-[500px]">
            <AnimatedSection delay={200} className="w-full h-full relative">
              {/* Desktop Mockup */}
              <div className="absolute top-0 right-0 w-[90%] h-[85%] bg-ai-cloud rounded-xl border border-ai-graphite/10 shadow-modern overflow-hidden transition-transform duration-500 hover:-translate-y-2">
                {/* Browser Header */}
                <div className="h-8 bg-white border-b border-ai-graphite/5 flex items-center px-4 gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-ai-graphite/20"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-ai-graphite/20"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-ai-graphite/20"></div>
                </div>
                {/* Mockup Body */}
                <div className="p-6">
                  <div className="w-1/3 h-6 bg-ai-graphite/10 rounded mb-6"></div>
                  <div className="w-full h-32 bg-white rounded-lg border border-ai-graphite/5 mb-4"></div>
                  <div className="grid grid-cols-3 gap-4">
                    <div className="h-20 bg-ai-teal/10 rounded-lg"></div>
                    <div className="h-20 bg-white border border-ai-graphite/5 rounded-lg"></div>
                    <div className="h-20 bg-white border border-ai-graphite/5 rounded-lg"></div>
                  </div>
                </div>
              </div>

              {/* Mobile Mockup */}
              <div className="absolute bottom-0 left-0 w-[35%] h-[75%] bg-white rounded-[2rem] border-4 border-ai-graphite shadow-modern overflow-hidden transition-transform duration-500 hover:-translate-y-4">
                {/* Notch */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-4 bg-ai-graphite rounded-b-xl"></div>
                {/* Mobile Body */}
                <div className="p-4 pt-8 h-full bg-ai-cloud flex flex-col gap-3">
                  <div className="w-full h-24 bg-white rounded-xl shadow-sm border border-ai-graphite/5"></div>
                  <div className="flex gap-2">
                    <div className="w-1/2 h-20 bg-ai-teal rounded-xl shadow-sm"></div>
                    <div className="w-1/2 h-20 bg-ai-graphite rounded-xl shadow-sm"></div>
                  </div>
                  <div className="w-full h-16 bg-white rounded-xl shadow-sm border border-ai-graphite/5 mt-auto"></div>
                </div>
              </div>
            </AnimatedSection>
          </div>

        </div>
      </div>
    </section>
  );
};
