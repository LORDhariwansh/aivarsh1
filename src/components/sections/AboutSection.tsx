import React from 'react';
import { motion } from 'framer-motion';

const capabilityPillars = [
  { title: 'AI & Automation', desc: 'Workflows & assistants that eliminate manual drag' },
  { title: 'Computer Vision', desc: 'Edge analytics for industrial & facility safety' },
  { title: 'Fullstack Software', desc: 'Custom web, mobile & cloud enterprise portals' },
  { title: 'Creative & SEO', desc: 'Distinctive brand identity & compounding organic reach' },
];

export const AboutSection = () => {
  return (
    <section id="about" className="py-32 md:py-48 bg-surface border-t border-border">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Left: Headline */}
          <div>
            <motion.span
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-10%' }}
              transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] as const }}
              className="text-xs font-mono tracking-widest uppercase text-accent mb-6 block font-medium"
            >
              About AI VARSH
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-10%' }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] as const }}
              className="text-4xl md:text-5xl lg:text-6xl font-display font-bold tracking-tight leading-[1.08] text-foreground"
            >
              Technology should <span className="text-muted font-normal">not only work.</span>
              <br />
              It should create <span className="text-accent underline decoration-accent/30 underline-offset-8">possibilities.</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: '-10%' }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-8 text-xs font-mono text-muted tracking-wider uppercase"
            >
              Raipur, Chhattisgarh • Serving Businesses Across India
            </motion.p>
          </div>

          {/* Right: Narrative + Capability Pillars */}
          <div>
            <motion.p
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-10%' }}
              transition={{ duration: 0.75, delay: 0.15, ease: [0.16, 1, 0.3, 1] as const }}
              className="text-base md:text-lg text-muted font-light leading-relaxed mb-10"
            >
              AI VARSH was built around a singular premise: businesses should not need to navigate technical chaos to benefit from modern engineering.
              <br /><br />
              We unite intelligent workflow automation, computer vision analytics, reliable web software, and creative digital storytelling under one roof — delivering systems tailored to real commercial needs.
            </motion.p>

            {/* 4 Pillars Grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-10%' }}
              transition={{ duration: 0.75, delay: 0.3, ease: [0.16, 1, 0.3, 1] as const }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4"
            >
              {capabilityPillars.map((cap) => (
                <div key={cap.title} className="p-5 bg-background border border-border rounded-xl">
                  <p className="text-base font-display font-semibold text-foreground mb-1.5">{cap.title}</p>
                  <p className="text-xs text-muted font-light leading-relaxed">{cap.desc}</p>
                </div>
              ))}
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: '-10%' }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="mt-8 text-xs font-mono text-muted/70 italic"
            >
              "Understand first. Build thoughtfully. Keep improving."
            </motion.p>
          </div>

        </div>
      </div>
    </section>
  );
};
