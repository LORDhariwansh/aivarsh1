import React, { useState } from 'react';
import { SITE_CONTENT } from '../../data/content';
import { AnimatedSection } from '../ui/AnimatedSection';
import { Plus, Minus } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-24 md:py-40 bg-taste-surface border-t border-taste-border">
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        <AnimatedSection className="mb-16">
          <h2 className="text-2xl font-display font-medium tracking-tight text-taste-text">
            FAQ
          </h2>
        </AnimatedSection>

        <div className="flex flex-col border-t border-taste-border">
          {SITE_CONTENT.faq.questions.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <AnimatedSection key={index} delay={index * 50}>
                <div className="border-b border-taste-border group">
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="w-full text-left py-6 flex items-center justify-between gap-4 focus:outline-none"
                  >
                    <span className={`font-medium text-lg transition-colors ${
                      isOpen ? 'text-taste-muted' : 'text-taste-text group-hover:text-taste-muted'
                    }`}>
                      {faq.q}
                    </span>
                    <span className={`shrink-0 transition-colors ${
                      isOpen ? 'text-taste-muted' : 'text-taste-muted/30 group-hover:text-taste-muted'
                    }`}>
                      {isOpen ? <Minus size={16} strokeWidth={1.5} /> : <Plus size={16} strokeWidth={1.5} />}
                    </span>
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: 'easeOut' }}
                      >
                        <div className="pb-8 text-taste-muted text-base font-light leading-relaxed max-w-3xl pr-8">
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
