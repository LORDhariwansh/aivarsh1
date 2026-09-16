import React, { useState } from 'react';
import { SITE_CONTENT } from '../../data/content';
import { AnimatedSection } from '../ui/AnimatedSection';
import { ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const InteractiveNeedsSection = () => {
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const selectedOption = SITE_CONTENT.interactiveNeeds.options[selectedIndex];

  return (
    <section className="py-24 md:py-32 bg-ai-card border-t border-ai-border">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        <AnimatedSection className="mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold tracking-tight">
            {SITE_CONTENT.interactiveNeeds.heading}
          </h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
          
          {/* Left: Options List */}
          <div className="lg:col-span-5 flex flex-col gap-3">
            {SITE_CONTENT.interactiveNeeds.options.map((option, index) => {
              const isSelected = selectedIndex === index;
              return (
                <button
                  key={option.label}
                  onClick={() => setSelectedIndex(index)}
                  className={`text-left px-6 py-4 rounded-lg transition-all duration-300 border ${
                    isSelected 
                      ? 'bg-ai-bg border-ai-border shadow-sm text-ai-text font-medium' 
                      : 'border-transparent text-ai-muted hover:bg-ai-hover hover:text-ai-text'
                  }`}
                >
                  {option.label}
                </button>
              );
            })}
          </div>

          {/* Right: Dynamic Content */}
          <div className="lg:col-span-6 lg:col-start-7 lg:pt-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedIndex}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="bg-ai-bg rounded-xl border border-ai-border p-8 md:p-12 shadow-sm"
              >
                <h3 className="text-2xl md:text-3xl font-display font-bold mb-6">
                  {selectedOption.label}
                </h3>
                <p className="text-lg text-ai-muted leading-relaxed mb-10">
                  {selectedOption.detail}
                </p>
                
                <a 
                  href="#contact"
                  className="inline-flex items-center gap-2 bg-ai-text text-white px-6 py-3 rounded-lg font-medium hover:bg-black transition-colors"
                >
                  {selectedOption.cta.replace(' →', '')}
                  <ArrowRight size={18} />
                </a>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
};
