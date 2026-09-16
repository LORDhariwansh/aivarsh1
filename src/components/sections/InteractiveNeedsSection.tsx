import React, { useState } from 'react';
import { SITE_CONTENT } from '../../data/content';
import { AnimatedSection } from '../ui/AnimatedSection';
import { ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const InteractiveNeedsSection = () => {
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const selectedOption = SITE_CONTENT.interactiveNeeds.options[selectedIndex];

  return (
    <section className="py-24 md:py-32 bg-ai-cloud border-y border-ai-graphite/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        <AnimatedSection className="mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold tracking-tight text-ai-graphite">
            What are you trying to solve?
          </h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8">
          
          {/* Left: Options List */}
          <div className="lg:col-span-5 flex flex-col gap-2">
            {SITE_CONTENT.interactiveNeeds.options.map((option, index) => {
              const isSelected = selectedIndex === index;
              return (
                <button
                  key={option.label}
                  onClick={() => setSelectedIndex(index)}
                  className={`text-left px-6 py-5 transition-all duration-300 border-l-2 flex items-center justify-between group ${
                    isSelected 
                      ? 'border-ai-teal bg-white shadow-modern-sm text-ai-graphite rounded-r-lg' 
                      : 'border-transparent text-ai-graphite/50 hover:bg-white/50 hover:text-ai-graphite rounded-r-lg'
                  }`}
                >
                  <span className={`font-bold transition-all ${isSelected ? 'text-lg' : 'text-base'}`}>
                    {option.label}
                  </span>
                  {isSelected && (
                    <span className="w-2 h-2 rounded-full bg-ai-teal"></span>
                  )}
                </button>
              );
            })}
          </div>

          {/* Right: Dynamic Content */}
          <div className="lg:col-span-6 lg:col-start-7 lg:pt-12">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedIndex}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="bg-white rounded-xl border border-ai-graphite/5 p-10 md:p-14 shadow-modern"
              >
                <p className="text-xl md:text-2xl text-ai-graphite leading-relaxed mb-12 font-medium">
                  {selectedOption.detail}
                </p>
                
                <a 
                  href="#contact"
                  className="inline-flex items-center gap-3 bg-ai-graphite text-white px-8 py-4 rounded-lg font-bold hover:bg-ai-teal transition-colors group"
                >
                  {selectedOption.cta.replace(' →', '')}
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </a>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
};
