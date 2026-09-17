import React, { useState } from 'react';
import { SITE_CONTENT } from '../../data/content';
import { AnimatedSection } from '../ui/AnimatedSection';
import { Plus, Minus } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-24 md:py-32 bg-ai-deep">
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        <AnimatedSection className="mb-16">
          <p className="text-xs tracking-[0.3em] uppercase text-ai-saffron/70 mb-4 font-bold flex items-center gap-3">
            <span className="w-6 h-px bg-ai-saffron/40" />
            FAQ
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold tracking-tight text-ai-ivory">
            Common Questions
          </h2>
        </AnimatedSection>

        <div className="flex flex-col border-t border-ai-ivory/5">
          {SITE_CONTENT.faq.questions.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <AnimatedSection key={index} delay={index * 50}>
                <div className="border-b border-ai-ivory/5 group">
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="w-full text-left py-6 md:py-8 flex items-center justify-between gap-4 focus:outline-none transition-colors"
                  >
                    <span className={`font-bold text-base md:text-lg transition-colors ${
                      isOpen ? 'text-ai-saffron' : 'text-ai-ivory group-hover:text-ai-saffron'
                    }`}>
                      {faq.q}
                    </span>
                    <span className={`shrink-0 transition-colors ${
                      isOpen ? 'text-ai-saffron' : 'text-ai-muted/30 group-hover:text-ai-saffron'
                    }`}>
                      {isOpen ? <Minus size={20} strokeWidth={2} /> : <Plus size={20} strokeWidth={2} />}
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
                        <div className="pb-6 md:pb-8 text-ai-muted text-base leading-relaxed max-w-3xl pr-8">
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
