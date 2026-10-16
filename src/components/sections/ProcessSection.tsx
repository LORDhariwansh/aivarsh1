import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const steps = [
  {
    num: '01',
    title: 'Discover',
    tagline: 'Understand the business reality.',
    desc: 'We examine your existing processes, team workflows, software stack, and operational bottlenecks. We identify the real opportunity before prescribing any technology.',
    deliverable: 'Scope Definition & Technical Blueprint',
  },
  {
    num: '02',
    title: 'Design',
    tagline: 'Architect the right solution.',
    desc: 'We map out database schemas, user experience flows, computer vision inference logic, and API choreography. Clean, intuitive, and built without legacy debt.',
    deliverable: 'Interactive Wireframes & Architecture Plan',
  },
  {
    num: '03',
    title: 'Build',
    tagline: 'Engineer with precision.',
    desc: 'We develop custom applications, train or fine-tune vision models, connect automated pipelines, and craft high-performance frontend interfaces with strict typing and unit tests.',
    deliverable: 'Production Software & Automated Workflows',
  },
  {
    num: '04',
    title: 'Validate',
    tagline: 'Verify in real conditions.',
    desc: 'We rigorously stress-test the deployment in real operational environments: evaluating video stream latencies, edge-case handling, and user feedback before sign-off.',
    deliverable: 'QA Audit Report & Acceptance Sign-Off',
  },
  {
    num: '05',
    title: 'Deploy & Improve',
    tagline: 'Launch and compound growth.',
    desc: 'We assist with seamless rollout, staff onboarding, monitoring infrastructure, and continuous iterative optimizations to ensure your digital investment scales.',
    deliverable: 'Live Production Launch & Ongoing Support',
  },
];

export const ProcessSection = () => {
  const [activeStep, setActiveStep] = useState(0);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    stepRefs.current.forEach((el, idx) => {
      if (!el) return;
      const obs = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveStep(idx);
            }
          });
        },
        { rootMargin: '-35% 0px -35% 0px', threshold: 0 }
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((obs) => obs.disconnect());
  }, []);

  return (
    <section id="process" className="bg-surface py-32 md:py-48 border-t border-border relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-12 lg:gap-20">
          
          {/* Left sticky panel */}
          <div className="lg:pr-8">
            <div className="lg:sticky lg:top-36">
              <span className="text-xs font-mono tracking-widest uppercase text-accent mb-4 block font-medium">
                Our Methodology
              </span>
              <h2 className="text-3xl md:text-5xl font-display font-bold tracking-tight text-foreground leading-[1.08] mb-6">
                From your idea to a working solution.
              </h2>
              <p className="text-base text-muted font-light leading-relaxed mb-10 max-w-md">
                No unnecessary complexity. No technology for technology's sake. Just a structured, transparent path to practical business outcomes.
              </p>

              {/* Progress step indicators (Desktop) */}
              <div className="hidden lg:flex flex-col gap-3.5 border-l border-border pl-6">
                {steps.map((step, idx) => (
                  <button
                    key={step.num}
                    onClick={() => {
                      stepRefs.current[idx]?.scrollIntoView({ behavior: 'smooth', block: 'center' });
                    }}
                    className="flex items-center gap-4 group text-left cursor-pointer py-1"
                  >
                    <span
                      className={`text-xs font-mono transition-all duration-300 font-medium ${
                        activeStep === idx
                          ? 'text-accent scale-105'
                          : 'text-muted/60 group-hover:text-muted'
                      }`}
                    >
                      {step.num}
                    </span>
                    <span
                      className={`text-sm font-sans transition-colors duration-200 ${
                        activeStep === idx
                          ? 'text-foreground font-semibold'
                          : 'text-muted group-hover:text-foreground'
                      }`}
                    >
                      {step.title}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right scrolling steps */}
          <div className="flex flex-col gap-8 md:gap-10">
            {steps.map((step, idx) => (
              <motion.div
                key={step.num}
                ref={(el) => { stepRefs.current[idx] = el; }}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-10%' }}
                transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] as const }}
                className={`p-8 md:p-10 rounded-2xl border transition-all duration-400 ${
                  activeStep === idx
                    ? 'bg-background border-accent/50 shadow-md shadow-accent/5'
                    : 'bg-background/40 border-border hover:bg-background/80'
                }`}
              >
                <div className="flex items-baseline justify-between gap-4 mb-4 pb-4 border-b border-border/70">
                  <span className="text-2xl md:text-3xl font-mono text-accent font-semibold">
                    {step.num}
                  </span>
                  <span className="text-xs font-mono text-muted/70 uppercase tracking-wider">
                    {step.deliverable}
                  </span>
                </div>

                <h3 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-1">
                  {step.title}
                </h3>
                <p className="text-sm font-sans font-medium text-accent-secondary mb-4">
                  "{step.tagline}"
                </p>
                <p className="text-base text-muted font-light leading-relaxed max-w-xl">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};
