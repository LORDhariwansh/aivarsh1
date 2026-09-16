import React, { useState } from 'react';
import { SITE_CONTENT } from '../../data/content';
import { AnimatedSection } from '../ui/AnimatedSection';
import { Plus, Minus } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-24 md:py-32 bg-ai-cloud border-t border-ai-graphite/5">
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        
        <AnimatedSection className="mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold tracking-tight mb-6 text-ai-graphite">
            Frequently Asked Questions
          </h2>
        </AnimatedSection>

        <div className="flex flex-col border-t border-ai-graphite/10">
          {SITE_CONTENT.faq.questions.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <AnimatedSection key={index} delay={index * 50}>
                <div className="border-b border-ai-graphite/10 group">
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="w-full text-left py-8 flex items-center justify-between gap-4 focus:outline-none transition-colors"
                  >
                    <span className={`font-bold text-lg md:text-xl transition-colors ${isOpen ? 'text-ai-teal' : 'text-ai-graphite group-hover:text-ai-teal'}`}>
                      {faq.q}
                    </span>
                    <span className={`shrink-0 transition-colors ${isOpen ? 'text-ai-teal' : 'text-ai-graphite/40 group-hover:text-ai-teal'}`}>
                      {isOpen ? <Minus size={24} strokeWidth={2} /> : <Plus size={24} strokeWidth={2} />}
                    </span>
                  </button>
                  
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                      >
                        <div className="pb-8 text-ai-graphite/70 text-base md:text-lg leading-relaxed font-medium max-w-3xl pr-8">
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </AnimatedSection>
            );
          })}
        </div>

      </div>
    </section>
  );
};
