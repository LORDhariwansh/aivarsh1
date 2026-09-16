import React, { useState } from 'react';
import { SITE_CONTENT } from '../../data/content';
import { AnimatedSection } from '../ui/AnimatedSection';
import { Plus, Minus } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-24 md:py-32 bg-ai-ivory border-t border-ai-border/50">
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        
        <AnimatedSection className="mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-medium tracking-tight mb-6 text-ai-forest">
            Frequently Asked Questions
          </h2>
        </AnimatedSection>

        <div className="flex flex-col border-t border-ai-border/40">
          {SITE_CONTENT.faq.questions.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <AnimatedSection key={index} delay={index * 50}>
                <div className="border-b border-ai-border/40 group">
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="w-full text-left py-8 flex items-center justify-between gap-4 focus:outline-none transition-colors"
                  >
                    <span className={`font-medium text-lg transition-colors ${isOpen ? 'text-ai-gold' : 'text-ai-forest group-hover:text-ai-gold'}`}>
                      {faq.q}
                    </span>
                    <span className={`shrink-0 transition-colors ${isOpen ? 'text-ai-gold' : 'text-ai-forest/40 group-hover:text-ai-gold'}`}>
                      {isOpen ? <Minus size={20} strokeWidth={1.5} /> : <Plus size={20} strokeWidth={1.5} />}
                    </span>
                  </button>
                  
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: "easeOut" }}
                      >
                        <div className="pb-8 text-ai-forest/70 text-base leading-relaxed font-light max-w-3xl pr-8">
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
