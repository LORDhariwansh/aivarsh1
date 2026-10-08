import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { useReducedMotion } from 'framer-motion';

const steps = [
  { num: '01', title: 'Discover', desc: 'We learn about your business, goals, and the problem you are actually trying to solve.' },
  { num: '02', title: 'Design', desc: 'We engineer the architecture, wireframes, and visual concepts for the solution.' },
  { num: '03', title: 'Build', desc: 'We develop, test, and refine the technology until it works perfectly.' },
  { num: '04', title: 'Launch', desc: 'We deploy the solution and ensure a smooth transition for your team.' },
  { num: '05', title: 'Grow', desc: 'We maintain, optimize, and scale the system as your business evolves.' },
];

export const ProcessSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();

  useEffect(() => {
    if (reduce) return;
    
    const ctx = gsap.context(() => {
      const stepEls = gsap.utils.toArray<HTMLElement>('.process-step');
      
      // Pin the section and scrub through the steps
      gsap.to(trackRef.current, {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: `+=${stepEls.length * 100}%`,
          pin: true,
          scrub: true,
          onUpdate: (self) => {
            const progress = self.progress;
            const activeIdx = Math.min(
              Math.floor(progress * stepEls.length),
              stepEls.length - 1
            );
            
            stepEls.forEach((el, i) => {
              if (i === activeIdx) {
                gsap.to(el, { opacity: 1, scale: 1, duration: 0.3 });
                el.classList.add('active-step');
              } else {
                gsap.to(el, { opacity: 0.2, scale: 0.95, duration: 0.3 });
                el.classList.remove('active-step');
              }
            });
          }
        }
      });
      
    }, containerRef);

    return () => ctx.revert();
  }, [reduce]);

  return (
    <section id="process" className="bg-charcoal text-ivory relative" ref={containerRef}>
      <div className="h-[100dvh] flex flex-col md:flex-row" ref={trackRef}>
        
        {/* Left side title */}
        <div className="w-full md:w-1/3 p-6 md:p-12 lg:p-24 flex flex-col justify-center border-b md:border-b-0 md:border-r border-ivory/10">
          <p className="text-sm font-mono text-saffron uppercase tracking-widest mb-4">How We Work</p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-medium tracking-tight">
            Our Process
          </h2>
        </div>

        {/* Right side steps */}
        <div className="w-full md:w-2/3 h-full flex items-center justify-center relative px-6 py-12 md:p-24">
          <div className="relative w-full max-w-2xl h-[400px] flex items-center">
            {steps.map((step, i) => (
              <div 
                key={step.num}
                className="process-step absolute top-1/2 left-0 w-full -translate-y-1/2 opacity-20 scale-95 origin-left"
                style={{ opacity: i === 0 ? 1 : 0.2, transform: i === 0 ? 'scale(1) translateY(-50%)' : 'scale(0.95) translateY(-50%)' }}
              >
                <div className="flex items-baseline gap-6 mb-6">
                  <span className="text-2xl md:text-4xl font-mono text-saffron">{step.num} —</span>
                  <h3 className="text-4xl md:text-5xl lg:text-6xl font-display font-medium">
                    {step.title}
                  </h3>
                </div>
                <p className="text-lg md:text-2xl text-muted-light font-light max-w-lg leading-relaxed ml-[5.5rem] md:ml-[7.5rem]">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
