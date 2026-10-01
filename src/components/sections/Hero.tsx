import React, { useRef } from 'react';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';

function MagneticCTA({ href, onClick, children }: { href: string; onClick: (e: React.MouseEvent) => void; children: React.ReactNode }) {
  const ref = useRef<HTMLAnchorElement>(null);
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const x = useSpring(rawX, { stiffness: 200, damping: 20, mass: 0.5 });
  const y = useSpring(rawY, { stiffness: 200, damping: 20, mass: 0.5 });

  const handleMouse = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    rawX.set((e.clientX - (left + width / 2)) * 0.25);
    rawY.set((e.clientY - (top + height / 2)) * 0.25);
  };

  const reset = () => { rawX.set(0); rawY.set(0); };

  return (
    <motion.a
      ref={ref}
      href={href}
      onClick={onClick}
      style={{ x, y }}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      className="relative w-36 h-36 flex flex-col items-center justify-center bg-zinc-50 text-black group overflow-hidden"
      whileHover={{ scale: 1.06 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: 'spring', stiffness: 300, damping: 25 }}
    >
      <motion.div
        className="absolute inset-0 bg-[#E85D04]"
        initial={{ scaleY: 0 }}
        style={{ transformOrigin: 'bottom' }}
        whileHover={{ scaleY: 1 }}
        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
      />
      <span className="relative z-10 text-[11px] font-mono uppercase tracking-[0.18em] group-hover:text-white transition-colors duration-300">
        {children}
      </span>
      <svg className="relative z-10 mt-1 group-hover:text-white transition-colors duration-300" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M7 17L17 7M17 7H7M17 7v10" />
      </svg>
    </motion.a>
  );
}

export const Hero = () => {
  const scrollTo = (href: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative min-h-[100dvh] w-full flex items-end pb-20 pt-24 overflow-hidden bg-black">
      {/* Subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage: 'linear-gradient(#FAFAFA 1px,transparent 1px),linear-gradient(90deg,#FAFAFA 1px,transparent 1px)',
          backgroundSize: '100px 100px',
        }}
      />

      {/* Thin vertical rule — Awwwards agency detail */}
      <motion.div
        className="absolute left-6 md:left-12 top-0 bottom-0 w-px bg-zinc-800"
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
        style={{ transformOrigin: 'top' }}
      />

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full relative z-10">
        {/* Eyebrow row — max 1 eyebrow on whole page */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center gap-4 mb-12"
        >
          <span className="text-[10px] font-mono tracking-[0.25em] uppercase text-zinc-500">AI • Technology • Creativity</span>
          <div className="flex-1 h-px bg-zinc-800" />
          <span className="text-[10px] font-mono text-zinc-600">est. 2024</span>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-end">
          {/* Headline — left 8 cols */}
          <div className="lg:col-span-8">
            <motion.h1
              initial={{ opacity: 0, y: 40, filter: 'blur(16px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{ duration: 1.2, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="text-[clamp(4rem,10vw,9rem)] font-display font-medium leading-[0.88] tracking-tighter text-zinc-50"
            >
              Build.<br />
              Automate.<br />
              <span className="text-zinc-500">Grow.</span>
            </motion.h1>
          </div>

          {/* Right descriptor + CTA — 4 cols */}
          <div className="lg:col-span-4 flex flex-col gap-10">
            <motion.p
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="text-base text-zinc-400 leading-relaxed font-light max-w-xs"
            >
              Intelligent digital solutions designed for real business impact — automation, web, design, and growth.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
            >
              <MagneticCTA href="#contact" onClick={scrollTo('#contact')}>Let's Talk</MagneticCTA>
            </motion.div>
          </div>
        </div>

        {/* Bottom stat bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-24 pt-8 border-t border-zinc-900 grid grid-cols-3 gap-8"
        >
          {[['AI + Design', 'Full-stack studio'], ['India-based', 'Global reach'], ['End-to-end', 'One team']].
            map(([label, sub]) => (
              <div key={label}>
                <p className="text-xs font-mono tracking-widest uppercase text-zinc-600 mb-1">{sub}</p>
                <p className="text-sm font-medium text-zinc-300">{label}</p>
              </div>
            ))}
        </motion.div>
      </div>
    </section>
  );
};
