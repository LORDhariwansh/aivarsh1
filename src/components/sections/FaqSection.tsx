import React, { useState } from 'react';
import { SITE_CONTENT } from '../../data/content';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

export const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-32 md:py-48 bg-surface border-t border-border">
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        <div className="mb-14">
          <span className="text-xs font-mono tracking-widest uppercase text-accent mb-4 block font-medium">
            Common Questions
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-bold tracking-tight text-foreground">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-sm md:text-base text-muted font-light">
            Clear answers about capabilities, custom integrations, deployment models, and how we start projects.
          </p>
        </div>

        <div className="border-t border-border divide-y divide-border">
          {SITE_CONTENT.faq.questions.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={index} className="transition-colors">
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  aria-expanded={isOpen}
                  className="w-full text-left py-6 md:py-7 flex items-center justify-between gap-6 group cursor-pointer"
                >
                  <div className="flex items-center gap-6">
                    <span className="text-xs font-mono text-accent shrink-0 font-semibold">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <span
                      className={`text-base md:text-lg font-display font-medium transition-colors duration-200 ${
                        isOpen ? 'text-accent' : 'text-foreground group-hover:text-accent'
                      }`}
                    >
                      {faq.q}
                    </span>
                  </div>
                  <span className="shrink-0 text-muted group-hover:text-accent transition-colors">
                    {isOpen ? (
                      <Minus size={18} strokeWidth={1.5} />
                    ) : (
                      <Plus size={18} strokeWidth={1.5} />
                    )}
                  </span>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] as const }}
                      className="overflow-hidden"
                    >
                      <p className="pb-7 pl-12 text-sm md:text-base text-muted font-light leading-relaxed max-w-2xl">
                        {faq.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
