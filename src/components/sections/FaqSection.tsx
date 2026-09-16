import React, { useState } from 'react';
import { SITE_CONTENT } from '../../data/content';
import { AnimatedSection } from '../ui/AnimatedSection';
import { Plus, Minus } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-24 md:py-32 bg-ai-bg border-t border-ai-border">
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        
        <AnimatedSection className="mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold tracking-tight mb-6">
            Frequently Asked Questions
          </h2>
        </AnimatedSection>

        <div className="flex flex-col gap-4">
          {SITE_CONTENT.faq.questions.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <AnimatedSection key={index} delay={index * 50}>
                <div className="bg-ai-card border border-ai-border rounded-xl overflow-hidden">
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 focus:outline-none hover:bg-ai-hover transition-colors"
                  >
                    <span className="font-medium text-ai-text">{faq.q}</span>
                    <span className="text-ai-muted shrink-0">
                      {isOpen ? <Minus size={18} /> : <Plus size={18} />}
                    </span>
                  </button>
                  
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="px-6 pb-6 text-ai-muted text-sm leading-relaxed border-t border-ai-border pt-4">
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
