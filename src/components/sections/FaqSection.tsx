import React, { useState } from 'react';
import { SITE_CONTENT } from '../../data/content';
import { AnimatedSection } from '../ui/AnimatedSection';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

export const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-32 md:py-48 bg-zinc-950 border-t border-zinc-800">
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        <AnimatedSection className="mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-medium tracking-tighter text-zinc-50">FAQ</h2>
        </AnimatedSection>

        <div className="border-t border-zinc-800">
          {SITE_CONTENT.faq.questions.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <AnimatedSection key={index} delay={index * 40}>
                <div className="border-b border-zinc-800">
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="w-full text-left py-7 flex items-center justify-between gap-6 group"
                  >
                    <div className="flex items-center gap-6">
                      <span className="text-[10px] font-mono text-zinc-700 shrink-0">{String(index + 1).padStart(2, '0')}</span>
                      <span className={`text-lg font-medium transition-colors duration-200 ${
                        isOpen ? 'text-[#E85D04]' : 'text-zinc-50 group-hover:text-zinc-300'
                      }`}>
                        {faq.q}
                      </span>
                    </div>
                    <span className="shrink-0 text-zinc-600">
                      {isOpen
                        ? <Minus size={16} strokeWidth={1.5} />
                        : <Plus size={16} strokeWidth={1.5} />}
                    </span>
                  </button>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden"
                      >
                        <p className="pb-8 pl-14 text-sm text-zinc-500 font-light leading-relaxed max-w-2xl">
                          {faq.a}
                        </p>
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
