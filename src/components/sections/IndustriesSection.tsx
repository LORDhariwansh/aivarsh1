import React, { useState } from 'react';
import { INDUSTRIES } from '../../data/services';
import { motion } from 'framer-motion';

export const IndustriesSection = () => {
  const [activeIdx, setActiveIdx] = useState<number>(0);

  return (
    <section id="industries" className="py-32 md:py-48 bg-surface border-t border-border">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="mb-16">
          <span className="text-xs font-mono tracking-widest uppercase text-accent mb-4 block font-medium">
            Sectors & Applications
          </span>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-display font-bold tracking-tight text-foreground max-w-2xl leading-[1.08]">
            Different businesses. Different challenges.
          </h2>
          <p className="mt-4 text-base md:text-lg text-muted font-light max-w-xl">
            Domain-specific systems tailored to solve concrete operational bottlenecks across industrial and growth sectors.
          </p>
        </div>

        {/* 2-column interactive selector */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.35fr] gap-10 lg:gap-16 items-start">
          
          {/* Left: Interactive Industry List */}
          <div className="flex flex-col border-t border-border divide-y divide-border">
            {INDUSTRIES.map((industry, index) => {
              const isActive = activeIdx === index;
              return (
                <button
                  key={industry.title}
                  onClick={() => setActiveIdx(index)}
                  className={`w-full py-4.5 px-3 flex items-center justify-between text-left transition-all duration-300 group cursor-pointer ${
                    isActive ? 'bg-background rounded-xl' : 'hover:bg-background/50'
                  }`}
                >
                  <div className="flex items-center gap-5">
                    <span className="text-xs font-mono text-accent font-semibold">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <span
                      className={`text-base md:text-lg font-display font-medium transition-colors duration-200 ${
                        isActive ? 'text-accent font-semibold' : 'text-foreground group-hover:text-muted'
                      }`}
                    >
                      {industry.title}
                    </span>
                  </div>
                  <div
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      isActive ? 'bg-accent scale-125' : 'bg-transparent group-hover:bg-muted/40'
                    }`}
                  />
                </button>
              );
            })}
          </div>

          {/* Right: Active Industry Card */}
          <div className="lg:sticky lg:top-36">
            <motion.div
              key={activeIdx}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] as const }}
              className="p-8 md:p-12 bg-background border border-border rounded-2xl shadow-sm"
            >
              <div className="flex items-center justify-between mb-6 pb-6 border-b border-border">
                <span className="text-xs font-mono tracking-widest uppercase text-accent font-medium">
                  Industry Focus
                </span>
                <span className="text-xs font-mono text-muted/70">
                  {String(activeIdx + 1).padStart(2, '0')} / {String(INDUSTRIES.length).padStart(2, '0')}
                </span>
              </div>

              <h3 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-6">
                {INDUSTRIES[activeIdx].title}
              </h3>

              <p className="text-xs font-mono uppercase tracking-widest text-muted mb-4 font-semibold">
                Core Applications & Workflows
              </p>

              <div className="flex flex-wrap gap-2.5 mb-8">
                {INDUSTRIES[activeIdx].items.map((item) => (
                  <span
                    key={item}
                    className="px-3.5 py-1.5 bg-surface rounded-full text-xs font-medium text-foreground border border-border shadow-2xs"
                  >
                    {item}
                  </span>
                ))}
              </div>

              <div className="pt-6 border-t border-border flex items-center justify-between">
                <p className="text-xs text-muted font-light">
                  Need a custom solution in this space?
                </p>
                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="text-xs font-mono uppercase tracking-wider text-accent font-semibold hover:text-accent-secondary inline-flex items-center gap-1"
                >
                  <span>Inquire Now</span>
                  <span>→</span>
                </a>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};
