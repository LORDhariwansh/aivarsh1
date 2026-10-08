import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';

const servicesList = [
  { 
    title: 'AI Automation', 
    desc: 'Intelligent workflows that reduce repetitive work and improve business efficiency.' 
  },
  { 
    title: 'AI Solutions', 
    desc: 'Practical AI systems designed around real business problems.' 
  },
  { 
    title: 'Software Development', 
    desc: 'Scalable software and applications built for modern businesses.' 
  },
  { 
    title: 'Web Development', 
    desc: 'Fast, responsive and conversion-focused digital experiences.' 
  },
  { 
    title: 'UI/UX Design', 
    desc: 'Simple, thoughtful interfaces designed around users.' 
  },
  { 
    title: 'Creative & Motion', 
    desc: 'Visual identity, graphic design, video editing and motion experiences.' 
  },
  { 
    title: 'SEO & Digital Growth', 
    desc: 'Search visibility and digital strategies designed for sustainable growth.' 
  }
];

export const ServicesSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const rows = gsap.utils.toArray<HTMLElement>('.service-row');
      rows.forEach((row, i) => {
        gsap.fromTo(row, 
          { opacity: 0, y: 50 },
          { 
            opacity: 1, 
            y: 0, 
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: row,
              start: "top 85%",
            }
          }
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="services" className="py-32 md:py-48 bg-ivory border-t border-border" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        <div className="mb-20">
          <h2 className="text-3xl md:text-5xl font-display font-medium tracking-tight text-charcoal">
            What We Build
          </h2>
        </div>

        <div className="flex flex-col border-t border-border">
          {servicesList.map((srv, idx) => (
            <div 
              key={idx} 
              className="service-row group relative flex flex-col md:flex-row md:items-center justify-between py-10 md:py-14 border-b border-border hover:bg-white transition-colors duration-500 cursor-default"
            >
              {/* Animated Expansion background - alternative to hover:bg-white if we want a line */}
              <div className="absolute left-0 bottom-0 w-0 h-0.5 bg-saffron group-hover:w-full transition-all duration-700 ease-out z-10" />
              
              <div className="flex items-start md:items-center gap-8 md:gap-12 z-20 w-full md:w-1/2">
                <span className="text-sm font-mono text-muted/50 pt-2 md:pt-0 shrink-0">
                  {String(idx + 1).padStart(2, '0')}
                </span>
                <h3 className="text-2xl md:text-4xl font-display font-medium text-charcoal group-hover:translate-x-3 group-hover:text-saffron transition-all duration-500">
                  {srv.title}
                </h3>
              </div>
              
              <div className="mt-6 md:mt-0 z-20 w-full md:w-1/2 flex justify-between items-end md:items-center pl-14 md:pl-0">
                <p className="text-base text-muted font-light leading-relaxed max-w-md">
                  {srv.desc}
                </p>
                
                <div className="shrink-0 text-muted/30 group-hover:text-saffron group-hover:translate-x-2 transition-all duration-500">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
};
