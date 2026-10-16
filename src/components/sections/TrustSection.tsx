import React from 'react';
import { motion } from 'framer-motion';

const stripItems = [
  'AI AUTOMATION',
  'VIDEO INTELLIGENCE',
  'SOFTWARE',
  'DIGITAL EXPERIENCES',
  'COMPUTER VISION',
  'WORKFLOW AUTOMATION',
];

const principles = [
  {
    num: '01',
    title: 'Understand',
    desc: 'We learn your operations, team workflows, and the real bottlenecks before writing a line of code.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 8v4l3 3" />
      </svg>
    ),
  },
  {
    num: '02',
    title: 'Simplify',
    desc: 'We eliminate technical clutter. Sophisticated systems should feel intuitive and dependable to your team.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 6h16M4 12h10M4 18h16" />
      </svg>
    ),
  },
  {
    num: '03',
    title: 'Build & Scale',
    desc: 'We engineer durable software, automation pipelines, and creative assets designed to compound growth.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="7" height="7" rx="1" />
        <rect x="14" y="3" width="7" height="7" rx="1" />
        <rect x="14" y="14" width="7" height="7" rx="1" />
        <rect x="3" y="14" width="7" height="7" rx="1" />
      </svg>
    ),
  },
];

export const TrustSection = () => {
  return (
    <section className="py-20 md:py-28 bg-surface border-y border-border relative overflow-hidden">
      {/* Restrained Moving Strip */}
      <div className="w-full overflow-hidden mb-16 pb-6 border-b border-border/60">
        <div className="flex whitespace-nowrap gap-10 items-center justify-around text-xs font-mono uppercase tracking-[0.25em] text-muted/70">
          {[...stripItems, ...stripItems].map((item, idx) => (
            <div key={idx} className="flex items-center gap-10">
              <span className="hover:text-foreground transition-colors cursor-default">{item}</span>
              <span className="text-accent/60">✦</span>
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-10%' }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] as const }}
            className="text-xs font-mono tracking-widest uppercase text-accent mb-4 block"
          >
            Core Philosophy
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-10%' }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] as const }}
            className="text-[clamp(1.9rem,3.8vw,3.2rem)] font-display font-bold tracking-tight text-foreground leading-[1.12]"
          >
            We start with the business — not the technology.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-10%' }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] as const }}
            className="mt-5 text-base md:text-lg text-muted font-light leading-relaxed max-w-2xl mx-auto"
          >
            Every business encounters distinct challenges. We assess your operational reality first, then design technology that makes an immediate, measurable difference.
          </motion.p>
        </div>

        {/* 3 Capability Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {principles.map((p, idx) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-10%' }}
              transition={{ duration: 0.65, delay: idx * 0.12, ease: [0.16, 1, 0.3, 1] as const }}
              className="bg-background/60 border border-border rounded-2xl p-8 hover:border-accent/40 hover:bg-background transition-all duration-300 group shadow-sm hover:shadow-md hover:shadow-black/5"
            >
              <div className="flex items-center justify-between mb-6">
                <span className="text-xs font-mono text-muted/60 font-semibold">{p.num}</span>
                <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-surface border border-border text-accent group-hover:bg-accent-soft group-hover:text-accent-secondary transition-colors duration-300 shadow-xs">
                  {p.icon}
                </div>
              </div>
              <h3 className="text-xl font-display font-semibold text-foreground mb-3">
                {p.title}
              </h3>
              <p className="text-sm md:text-base text-muted font-light leading-relaxed">
                {p.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
