import React, { useState } from 'react';
import { AnimatedSection } from '../ui/AnimatedSection';
import { motion, AnimatePresence } from 'framer-motion';

const solutions = [
  { id: 1, title: 'AI Automation', desc: 'Intelligent workflows that eliminate repetitive manual work and scale operations without headcount.', tag: 'Automation' },
  { id: 2, title: 'Business Websites', desc: 'Fast, purposeful websites built to convert — not to impress the dev team.', tag: 'Web' },
  { id: 3, title: 'Mobile Applications', desc: 'Cross-platform apps with native performance built for your exact business workflow.', tag: 'App' },
  { id: 4, title: 'AI Video Analytics', desc: 'Real-time detection, occupancy monitoring, and automated alerting at enterprise scale.', tag: 'Vision' },
  { id: 5, title: 'Customer AI Bots', desc: 'WhatsApp and web bots that qualify leads, answer queries, and update your CRM automatically.', tag: 'AI' },
  { id: 6, title: 'SEO & Digital Growth', desc: 'Data-driven ranking improvement that puts your business in front of the right audience.', tag: 'Growth' },
];

export const SolutionsSection = () => {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section id="solutions" className="py-32 md:py-48 bg-zinc-950 border-t border-zinc-800">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <AnimatedSection className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-4">
            <h2 className="text-3xl md:text-4xl font-display font-medium tracking-tighter text-zinc-50 sticky top-28 leading-tight">
              Solutions for real business.
            </h2>
          </div>

          <div className="lg:col-span-8">
            {solutions.map((sol, i) => (
              <div
                key={sol.id}
                className="border-b border-zinc-800 first:border-t"
                onMouseEnter={() => setHovered(sol.id)}
                onMouseLeave={() => setHovered(null)}
              >
                <div className="py-8 flex items-start justify-between gap-8 group cursor-default">
                  <div className="flex items-start gap-6">
                    <span className="text-[10px] font-mono text-zinc-700 pt-1 shrink-0">{String(i + 1).padStart(2, '0')}</span>
                    <div>
                      <h3 className={`text-xl md:text-2xl font-display font-medium tracking-tight transition-colors duration-300 ${
                        hovered === sol.id ? 'text-[#E85D04]' : 'text-zinc-50'
                      }`}>
                        {sol.title}
                      </h3>
                      <AnimatePresence>
                        {hovered === sol.id && (
                          <motion.p
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                            className="text-sm text-zinc-500 font-light leading-relaxed mt-3 max-w-md overflow-hidden"
                          >
                            {sol.desc}
                          </motion.p>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-700 shrink-0 pt-1">{sol.tag}</span>
                </div>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};
