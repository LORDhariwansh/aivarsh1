import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    id: 1,
    name: 'SmartFlow Autonomous Routing',
    category: 'AI Workflow Automation',
    tag: 'Prototype Concept',
    desc: 'Intelligent multi-channel lead ingestion, semantic qualification, and CRM dispatch — cutting response time from hours to seconds.',
    deliverables: ['Cloud Webhook Pipeline', 'WhatsApp Business API', 'CRM Integration'],
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop',
  },
  {
    id: 2,
    name: 'Industrial Vision Safety Guard',
    category: 'Computer Vision & Analytics',
    tag: 'Prototype Concept',
    desc: 'Edge-deployed video analytics for manufacturing facilities — real-time PPE helmet/vest verification and perimeter intrusion alerting.',
    deliverables: ['YOLO Edge Model', 'RTSP Stream Ingestion', 'Incident Audit Dashboard'],
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2670&auto=format&fit=crop',
  },
  {
    id: 3,
    name: 'BuildCorp Enterprise Platform',
    category: 'Custom Web Software',
    tag: 'Prototype Concept',
    desc: 'Scalable cloud portal for multi-site operations: contractor tracking, inventory reconciliation, and automated milestone invoicing.',
    deliverables: ['React & Node Architecture', 'Role-Based Access', 'Automated Reporting'],
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2670&auto=format&fit=crop',
  },
  {
    id: 4,
    name: 'TechNova Studio & Visual Identity',
    category: 'Branding & Creative Design',
    tag: 'Prototype Concept',
    desc: 'Comprehensive visual design system, technical typography guidelines, and digital motion graphics for a modern B2B venture.',
    deliverables: ['Brand Guidelines', 'Component System', 'Motion Graphics Video'],
    image: 'https://images.unsplash.com/photo-1600132806370-bf17e65e942f?q=80&w=2584&auto=format&fit=crop',
  },
];

export const WorkSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const items = gsap.utils.toArray<HTMLElement>('.work-card');

      items.forEach((item) => {
        gsap.fromTo(
          item,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: item,
              start: 'top 85%',
            },
          }
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="work" className="py-32 md:py-48 bg-background border-t border-border" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-20">
          <div>
            <span className="text-xs font-mono tracking-widest uppercase text-accent mb-4 block font-medium">
              Featured Case Studies
            </span>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-display font-bold tracking-tight text-foreground max-w-2xl leading-[1.08]">
              Built for real-world challenges.
            </h2>
          </div>
          <p className="text-sm md:text-base text-muted font-light max-w-md">
            A selection of engineered systems, custom platforms, and digital experiences solving tangible business problems.
          </p>
        </div>

        {/* Editorial Project Showcases */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
          {projects.map((project) => (
            <div key={project.id} className="work-card group flex flex-col justify-between">
              <div>
                {/* Visual Image Showcase */}
                <div className="w-full aspect-[16/10] overflow-hidden rounded-2xl bg-surface border border-border relative mb-7 shadow-sm group-hover:shadow-md transition-shadow duration-300">
                  <img
                    src={project.image}
                    alt={project.name}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-[1.2s] ease-out"
                  />
                  <div className="absolute top-4 right-4 z-10">
                    <span className="text-[10px] font-mono tracking-wider uppercase px-3 py-1 rounded-full bg-surface/90 backdrop-blur-md border border-border text-foreground font-medium shadow-xs">
                      {project.tag}
                    </span>
                  </div>
                </div>

                {/* Metadata & Title */}
                <span className="text-xs font-mono text-accent uppercase tracking-widest block mb-2 font-medium">
                  {project.category}
                </span>
                <h3 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-3 group-hover:text-accent transition-colors duration-200">
                  {project.name}
                </h3>
                <p className="text-sm md:text-base text-muted font-light leading-relaxed mb-6">
                  {project.desc}
                </p>

                {/* Deliverables tags */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.deliverables.map((d) => (
                    <span key={d} className="text-xs font-mono px-2.5 py-1 rounded-md bg-surface border border-border text-muted">
                      {d}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action link */}
              <div className="pt-4 border-t border-border/60">
                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-foreground font-semibold group-hover:text-accent transition-colors"
                >
                  <span>Discuss Similar Project</span>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-1 transition-transform">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
