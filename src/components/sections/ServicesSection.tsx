import React from 'react';
import { SERVICES } from '../../data/services';
import { SITE_CONTENT } from '../../data/content';
import { AnimatedSection } from '../ui/AnimatedSection';
import { Globe, Bot, TrendingUp, ArrowRight } from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  coral: <Globe size={28} strokeWidth={1.5} />,
  violet: <Bot size={28} strokeWidth={1.5} />,
  green: <TrendingUp size={28} strokeWidth={1.5} />,
};

const colorMap: Record<string, { text: string; border: string; bg: string; glow: string }> = {
  coral: {
    text: 'text-ai-coral',
    border: 'border-ai-coral/20 hover:border-ai-coral/40',
    bg: 'bg-ai-coral/5',
    glow: 'group-hover:shadow-ai-coral/10',
  },
  violet: {
    text: 'text-ai-violet',
    border: 'border-ai-violet/20 hover:border-ai-violet/40',
    bg: 'bg-ai-violet/5',
    glow: 'group-hover:shadow-ai-violet/10',
  },
  green: {
    text: 'text-ai-green',
    border: 'border-ai-green/20 hover:border-ai-green/40',
    bg: 'bg-ai-green/5',
    glow: 'group-hover:shadow-ai-green/10',
  },
};

export const ServicesSection = () => {
  const serviceEntries = Object.entries(SERVICES);

  return (
    <section id="services" className="relative z-10 bg-ai-dark py-24 md:py-32 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <AnimatedSection variant="fade-up" className="mb-16 md:mb-20">
          <span className="text-ai-cyan font-bold tracking-widest text-xs uppercase mb-4 block">
            What We Do
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold tracking-tight mb-6">
            {SITE_CONTENT.services.heading}
          </h2>
          <p className="text-white/50 text-base md:text-lg max-w-2xl leading-relaxed">
            {SITE_CONTENT.services.support}
          </p>
        </AnimatedSection>

        {/* Service Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
          {serviceEntries.map(([key, service], index) => {
            const colors = colorMap[service.color];
            const icon = iconMap[service.color];

            return (
              <AnimatedSection
                key={key}
                variant="fade-up"
                delay={index * 150}
              >
                <div
                  className={`group relative h-full rounded-2xl border ${colors.border} bg-white/[0.02] p-7 md:p-8 transition-all duration-500 hover:-translate-y-1 hover:shadow-xl ${colors.glow} hover:bg-white/[0.04]`}
                >
                  {/* Subtle gradient on hover */}
                  <div className={`absolute inset-0 rounded-2xl ${colors.bg} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                  <div className="relative z-10">
                    {/* Icon */}
                    <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl ${colors.bg} ${colors.text} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      {icon}
                    </div>

                    {/* Category Label */}
                    <div className={`${colors.text} font-bold tracking-widest text-xs mb-3`}>
                      {String(index + 1).padStart(2, '0')} — {service.subtitle.toUpperCase()}
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl md:text-3xl font-display font-bold mb-4 tracking-tight">
                      {service.title}
                    </h3>

                    {/* Description */}
                    <p className="text-white/50 text-sm leading-relaxed mb-8">
                      {service.description}
                    </p>

                    {/* Service Tags */}
                    <div className="flex flex-wrap gap-2 mb-8">
                      {service.items.map((item) => (
                        <span
                          key={item}
                          className={`px-3 py-1.5 text-xs font-semibold rounded-lg border ${colors.border} ${colors.text} bg-transparent transition-colors duration-300`}
                        >
                          {item}
                        </span>
                      ))}
                    </div>

                    {/* CTA */}
                    <a
                      href="#contact"
                      className={`inline-flex items-center gap-2 ${colors.text} text-sm font-bold group/cta`}
                    >
                      Learn More
                      <ArrowRight size={14} className="group-hover/cta:translate-x-1 transition-transform duration-300" />
                    </a>
                  </div>
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
};
