import React from 'react';
import { SITE_CONTENT } from '../../data/content';
import { AnimatedSection } from '../ui/AnimatedSection';
import { Scan, Cpu, Link, Zap } from 'lucide-react';

const pipelineIcons = [
  <Scan size={24} strokeWidth={1.5} />,
  <Cpu size={24} strokeWidth={1.5} />,
  <Link size={24} strokeWidth={1.5} />,
  <Zap size={24} strokeWidth={1.5} />,
];

const pipelineColors = [
  { accent: 'text-ai-coral', bg: 'bg-ai-coral/10', border: 'border-ai-coral/30', dot: 'bg-ai-coral' },
  { accent: 'text-ai-violet', bg: 'bg-ai-violet/10', border: 'border-ai-violet/30', dot: 'bg-ai-violet' },
  { accent: 'text-ai-cyan', bg: 'bg-ai-cyan/10', border: 'border-ai-cyan/30', dot: 'bg-ai-cyan' },
  { accent: 'text-ai-green', bg: 'bg-ai-green/10', border: 'border-ai-green/30', dot: 'bg-ai-green' },
];

export const AIShowcaseSection = () => {
  return (
    <section className="relative z-10 py-24 md:py-32 px-6 md:px-12 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-ai-dark via-[#0d1020] to-ai-dark" />

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(118,87,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(118,87,255,0.3) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 mb-16 md:mb-24">
          <AnimatedSection variant="fade-up">
            <span className="text-ai-violet font-bold tracking-widest text-xs uppercase mb-4 block">
              How It Works
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold tracking-tight whitespace-pre-line leading-[1.1]">
              {SITE_CONTENT.aiShowcase.heading}
            </h2>
          </AnimatedSection>

          <AnimatedSection variant="fade-up" delay={200} className="flex items-end">
            <p className="text-white/50 text-base md:text-lg leading-relaxed max-w-lg">
              {SITE_CONTENT.aiShowcase.support}
            </p>
          </AnimatedSection>
        </div>

        {/* Pipeline */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SITE_CONTENT.aiShowcase.pipeline.map((item, index) => {
            const color = pipelineColors[index];
            const icon = pipelineIcons[index];

            return (
              <AnimatedSection key={item.step} variant="fade-up" delay={index * 150}>
                <div className="group relative">
                  {/* Connection line (not on last item) */}
                  {index < 3 && (
                    <div className="hidden lg:block absolute top-8 -right-3 w-6 h-px bg-gradient-to-r from-white/10 to-white/5 z-20" />
                  )}

                  <div className={`relative rounded-2xl border border-white/5 bg-white/[0.02] p-6 md:p-7 h-full transition-all duration-500 hover:border-white/10 hover:bg-white/[0.04] hover:-translate-y-1`}>
                    {/* Step indicator */}
                    <div className={`inline-flex items-center gap-2 mb-5`}>
                      <div className={`w-8 h-8 rounded-lg ${color.bg} ${color.accent} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                        {icon}
                      </div>
                      <span className={`text-[10px] font-bold tracking-[0.2em] ${color.accent} uppercase`}>
                        {item.step}
                      </span>
                    </div>

                    {/* Label */}
                    <h3 className="text-lg md:text-xl font-display font-bold mb-3 tracking-tight">
                      {item.label}
                    </h3>

                    {/* Detail */}
                    <p className="text-white/40 text-sm leading-relaxed">
                      {item.detail}
                    </p>

                    {/* Bottom accent line */}
                    <div className={`absolute bottom-0 left-6 right-6 h-px ${color.bg} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                  </div>
                </div>
              </AnimatedSection>
            );
          })}
        </div>

        {/* AI Interface Aesthetic — Scanning Line */}
        <AnimatedSection variant="fade-in" delay={600}>
          <div className="mt-16 md:mt-24 rounded-2xl border border-white/5 bg-white/[0.02] p-8 md:p-12 relative overflow-hidden">
            {/* Scanning line animation */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-ai-cyan/50 to-transparent animate-shimmer" style={{ backgroundSize: '200% 100%' }} />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
              <div className="text-center">
                <div className="text-ai-cyan font-display font-bold text-lg md:text-xl mb-2">DETECT</div>
                <p className="text-white/30 text-xs tracking-widest uppercase">Identify problems & opportunities</p>
              </div>
              <div className="text-center">
                <div className="text-ai-violet font-display font-bold text-lg md:text-xl mb-2">PROCESS</div>
                <p className="text-white/30 text-xs tracking-widest uppercase">Build intelligent workflows</p>
              </div>
              <div className="text-center">
                <div className="text-ai-green font-display font-bold text-lg md:text-xl mb-2">DELIVER</div>
                <p className="text-white/30 text-xs tracking-widest uppercase">Automated outcomes at scale</p>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};
