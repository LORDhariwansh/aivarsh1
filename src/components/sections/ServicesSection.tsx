import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const services = [
  {
    id: 'ai-automation',
    number: '01',
    title: 'AI Automation',
    tagline: 'Make repetitive work disappear.',
    description: 'Connect internal tools, automate multi-step business processes, and deploy custom conversational AI assistants that reduce manual overhead.',
    capabilities: ['Workflow Automation', 'Custom AI Chatbots', 'API Integrations', 'Autonomous Ingestion'],
    badge: 'Operations',
    accentColor: '#8B5CF6',
  },
  {
    id: 'video-analytics',
    number: '02',
    title: 'AI Video Analytics',
    tagline: 'Actionable visual intelligence.',
    description: 'Transform live camera feeds into real-time operational insights through computer vision: PPE detection, intrusion alarms, people counting, and safety audit logging.',
    capabilities: ['PPE Compliance Tracking', 'Perimeter Alarms', 'Fire & Smoke Detection', 'Occupancy Analytics'],
    badge: 'Computer Vision',
    accentColor: '#A78BFA',
  },
  {
    id: 'software-dev',
    number: '03',
    title: 'Software Development',
    tagline: 'Engineered for operational durability.',
    description: 'Build robust web applications, mobile tools, and internal business platforms engineered around your specific data models and user requirements.',
    capabilities: ['Custom Enterprise Apps', 'Android & Mobile', 'Cloud APIs & Microservices', 'Internal Tooling'],
    badge: 'Engineering',
    accentColor: '#8B5CF6',
  },
  {
    id: 'web-dev',
    number: '04',
    title: 'Web Development',
    tagline: 'Speed, clarity, and conversion.',
    description: 'Craft world-class marketing sites and high-performance web products that balance aesthetic elegance, search rankings, and qualified enquiry conversion.',
    capabilities: ['React & Next.js Builds', 'Editorial Design Systems', 'Accessible Responsive UX', 'Conversion Optimization'],
    badge: 'Digital Presence',
    accentColor: '#A78BFA',
  },
  {
    id: 'creative-video',
    number: '05',
    title: 'Creative Design & Video',
    tagline: 'Visual distinction that commands respect.',
    description: 'Produce cohesive brand identities, 3D graphics, motion design, and high-impact corporate video production that elevate brand credibility.',
    capabilities: ['Visual Identity & Guidelines', 'Motion Graphics', 'Video Production', 'Product Storytelling'],
    badge: 'Studio',
    accentColor: '#8B5CF6',
  },
  {
    id: 'seo-growth',
    number: '06',
    title: 'SEO & Digital Growth',
    tagline: 'Compounding organic discovery.',
    description: 'Strengthen search visibility, technical architecture, and local/national digital footprint to connect your business with high-intent enterprise buyers.',
    capabilities: ['Technical Site Audits', 'High-Intent Search Strategy', 'Local SEO & Geo-Targeting', 'Content Architecture'],
    badge: 'Growth',
    accentColor: '#A78BFA',
  },
];

export const ServicesSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeService = services[activeIndex];

  return (
    <section id="services" className="py-32 md:py-48 bg-background border-t border-border">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="mb-20">
          <span className="text-xs font-mono tracking-widest uppercase text-accent mb-4 block">
            What We Build
          </span>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-display font-bold tracking-tight text-foreground max-w-3xl leading-[1.08]">
            Technology that makes a difference.
          </h2>
          <p className="mt-5 text-base md:text-lg text-muted font-light max-w-2xl leading-relaxed">
            From intelligent workflow automations to computer vision and custom web software, we turn complex business challenges into practical, scalable solutions.
          </p>
        </div>

        {/* Editorial Layout: Left interactive list + Right sticky preview card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left: 6 Service Rows (7 cols) */}
          <div className="lg:col-span-7 flex flex-col border-t border-border divide-y divide-border">
            {services.map((svc, idx) => {
              const isActive = activeIndex === idx;
              return (
                <div
                  key={svc.id}
                  onMouseEnter={() => setActiveIndex(idx)}
                  onClick={() => setActiveIndex(idx)}
                  className={`group relative py-8 md:py-10 transition-all duration-300 cursor-pointer ${
                    isActive ? 'bg-surface/50 pl-4 pr-2 rounded-xl' : 'hover:bg-surface/30'
                  }`}
                >
                  {/* Saffron underline indicator */}
                  <div
                    className={`absolute left-0 bottom-0 h-[2px] transition-all duration-500 ease-out ${
                      isActive ? 'w-full bg-accent' : 'w-0 group-hover:w-16 bg-accent/40'
                    }`}
                  />

                  <div className="flex items-start justify-between gap-6">
                    <div className="flex items-start gap-6">
                      <span className="text-xs font-mono text-accent pt-1 shrink-0 font-semibold">
                        {svc.number}
                      </span>
                      <div>
                        <div className="flex items-center gap-3 mb-1.5">
                          <h3
                            className={`text-2xl md:text-3xl font-display font-semibold transition-colors duration-200 ${
                              isActive ? 'text-accent' : 'text-foreground group-hover:text-foreground/80'
                            }`}
                          >
                            {svc.title}
                          </h3>
                        </div>
                        <p className="text-sm md:text-base text-muted font-light leading-relaxed max-w-xl">
                          {svc.description}
                        </p>
                      </div>
                    </div>

                    <div
                      className={`shrink-0 mt-1 transition-transform duration-300 ${
                        isActive ? 'text-accent translate-x-1' : 'text-muted/40 group-hover:text-muted'
                      }`}
                    >
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>

                  {/* Capabilities tags on mobile expansion */}
                  <div className="mt-4 pl-12 flex flex-wrap gap-2 lg:hidden">
                    {svc.capabilities.map((c) => (
                      <span key={c} className="text-[11px] font-mono bg-surface border border-border px-2.5 py-1 rounded-full text-muted">
                        {c}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right: Sticky Visual Showcase Card (5 cols) */}
          <div className="hidden lg:block lg:col-span-5 sticky top-32">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeService.id}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] as const }}
                className="bg-surface border border-border rounded-2xl p-8 md:p-10 shadow-lg shadow-black/5 flex flex-col justify-between min-h-[460px]"
              >
                <div>
                  <div className="flex items-center justify-between pb-6 mb-6 border-b border-border">
                    <span className="text-xs font-mono uppercase tracking-widest text-accent font-medium">
                      {activeService.badge}
                    </span>
                    <span className="text-xs font-mono text-muted/60">
                      SERVICE {activeService.number} / 06
                    </span>
                  </div>

                  <h4 className="text-2xl font-display font-bold text-foreground mb-2">
                    {activeService.title}
                  </h4>
                  <p className="text-sm font-sans font-medium text-accent-secondary mb-6">
                    "{activeService.tagline}"
                  </p>
                  <p className="text-sm text-muted font-light leading-relaxed mb-8">
                    {activeService.description}
                  </p>

                  <div>
                    <p className="text-xs font-mono tracking-widest uppercase text-muted mb-3 font-medium">
                      Key Deliverables
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {activeService.capabilities.map((cap) => (
                        <span
                          key={cap}
                          className="px-3 py-1.5 rounded-full bg-background border border-border text-xs font-medium text-foreground"
                        >
                          {cap}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="pt-8 border-t border-border mt-8 flex items-center justify-between">
                  <span className="text-xs font-mono text-muted">Have a project in this domain?</span>
                  <a
                    href="#contact"
                    onClick={(e) => {
                      e.preventDefault();
                      document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-accent font-semibold hover:text-accent-secondary transition-colors"
                  >
                    <span>Discuss Solution</span>
                    <span>→</span>
                  </a>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
};
