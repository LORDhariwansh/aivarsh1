import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ArrowUpRight, Activity, Cpu } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const, delay },
  }),
};

export const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [targetPos, setTargetPos] = useState({ x: 0, y: 0 });

  // Ensure autoplay kicks in reliably on all browsers
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {
        // Autoplay policy fallback
      });
    }
  }, []);

  // Smooth damped cursor tracking for subtle cinematic parallax
  useEffect(() => {
    const handlePointerMove = (e: PointerEvent) => {
      if (!heroRef.current) return;
      const rect = heroRef.current.getBoundingClientRect();
      const normX = Math.max(-1, Math.min(1, ((e.clientX - rect.left) / rect.width) * 2 - 1));
      const normY = Math.max(-1, Math.min(1, ((e.clientY - rect.top) / rect.height) * 2 - 1));
      setTargetPos({ x: normX, y: normY });
    };

    window.addEventListener('pointermove', handlePointerMove, { passive: true });
    return () => window.removeEventListener('pointermove', handlePointerMove);
  }, []);

  useEffect(() => {
    let animId: number;
    const lerp = () => {
      setMousePos((prev) => ({
        x: prev.x + (targetPos.x - prev.x) * 0.045,
        y: prev.y + (targetPos.y - prev.y) * 0.045,
      }));
      animId = requestAnimationFrame(lerp);
    };
    animId = requestAnimationFrame(lerp);
    return () => cancelAnimationFrame(animId);
  }, [targetPos]);

  return (
    <section
      ref={heroRef}
      id="hero"
      className="hero relative min-h-[100vh] min-h-[100svh] w-full flex flex-col justify-between pt-28 sm:pt-36 pb-6 sm:pb-10 overflow-hidden bg-[#08080C] text-[#F8F7FF] isolate"
    >
      {/* 1. Full-Viewport Edge-to-Edge Background Video */}
      <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none select-none z-0">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="hero__video absolute inset-0 w-full h-full object-cover object-center max-w-none max-h-none pointer-events-none"
          style={{
            transform: `scale(1.05) translate3d(${mousePos.x * 12}px, ${mousePos.y * 8}px, 0)`,
            transition: 'transform 0.15s cubic-bezier(0.16, 1, 0.3, 1)',
          }}
        >
          <source src="/1016.mp4" type="video/mp4" />
          <source src="/hero-sculpture.mp4" type="video/mp4" />
        </video>

        {/* Hero Overlay Layer for legibility & smooth theme blending */}
        <div
          className="hero__overlay absolute inset-0 pointer-events-none z-[1]"
          style={{
            background:
              'radial-gradient(circle at 50% 50%, rgba(8, 8, 12, 0.45) 0%, rgba(8, 8, 12, 0.85) 100%)',
          }}
        />

        {/* Seamless bottom fade into next section */}
        <div
          className="absolute inset-x-0 bottom-0 h-40 pointer-events-none z-[1]"
          style={{
            background:
              'linear-gradient(to bottom, transparent 0%, rgba(8, 8, 12, 0.7) 60%, #08080C 100%)',
          }}
        />
      </div>

      {/* 2. Subtle Atmospheric Background Gradients & Glows */}
      {/* Upper-Left Soft Violet Radial Glow */}
      <div
        className="absolute top-0 left-0 w-[600px] h-[600px] rounded-full blur-[120px] pointer-events-none opacity-40 z-[2]"
        style={{
          background: 'radial-gradient(circle at 20% 20%, rgba(139, 92, 246, 0.35) 0%, rgba(109, 40, 217, 0.15) 40%, transparent 70%)',
        }}
      />

      {/* Center Subtle Violet Atmospheric Core */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] rounded-full blur-[140px] pointer-events-none opacity-25 z-[2]"
        style={{
          background: 'radial-gradient(circle, rgba(167, 139, 250, 0.25) 0%, rgba(139, 92, 246, 0.1) 50%, transparent 80%)',
        }}
      />

      {/* Sparse Delicate Starlight Particles */}
      <div className="absolute inset-0 pointer-events-none z-[2] opacity-40">
        <div className="absolute top-[18%] left-[12%] w-1 h-1 rounded-full bg-violet-300 animate-pulse" />
        <div className="absolute top-[28%] right-[16%] w-1 h-1 rounded-full bg-white opacity-80" />
        <div className="absolute top-[42%] left-[24%] w-1.5 h-1.5 rounded-full bg-violet-400 opacity-60 animate-pulse" style={{ animationDuration: '3s' }} />
        <div className="absolute top-[35%] right-[32%] w-1 h-1 rounded-full bg-white/70" />
        <div className="absolute top-[22%] left-[45%] w-1 h-1 rounded-full bg-violet-200/50" />
        <div className="absolute top-[50%] right-[10%] w-1 h-1 rounded-full bg-violet-300 animate-pulse" style={{ animationDuration: '4s' }} />
      </div>

      {/* 3. Main Upper-Middle Headline & CTAs */}
      <div className="max-w-4xl mx-auto px-6 text-center relative z-20 flex flex-col items-center my-auto pt-4 sm:pt-8">
        {/* Subtle Eyebrow Badge */}
        <motion.div
          custom={0.1}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="mb-5 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.08] backdrop-blur-md shadow-[0_2px_12px_rgba(0,0,0,0.5)]"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-violet-400 animate-pulse" />
          <span className="text-[11px] font-mono tracking-widest uppercase text-lavender font-medium">
            NEXT-GEN AI SOLUTIONS
          </span>
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          custom={0.2}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="text-[clamp(2.8rem,6vw,5.4rem)] font-display font-extrabold leading-[1.05] tracking-tight text-balance bg-gradient-to-b from-white via-[#FAF8FF] to-[#C4B5FD] bg-clip-text text-transparent"
        >
          Intelligence, Made<br />Extraordinary.
        </motion.h1>

        {/* Supporting Copy */}
        <motion.p
          custom={0.35}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="mt-5 text-base md:text-lg text-text-secondary font-light leading-relaxed max-w-lg text-balance"
        >
          AI automation, intelligent video analytics, and digital experiences built for what's next.
        </motion.p>

        {/* Action CTAs */}
        <motion.div
          custom={0.5}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="mt-8 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
        >
          {/* Primary White Pill CTA */}
          <a
            href="#services"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#services')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="group inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-white text-[#08080C] font-semibold rounded-full text-sm tracking-wide shadow-[0_4px_24px_rgba(255,255,255,0.2)] hover:shadow-[0_8px_32px_rgba(255,255,255,0.35)] hover:-translate-y-0.5 transition-all duration-200"
          >
            <span>Explore Our Solutions</span>
            <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform duration-200" />
          </a>

          {/* Secondary Ghost CTA */}
          <a
            href="#about"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="inline-flex items-center justify-center px-7 py-3.5 rounded-full text-sm font-medium text-text-secondary hover:text-white border border-white/15 hover:border-violet-400/40 hover:bg-white/[0.04] transition-all duration-200"
          >
            Discover AI VARSH
          </a>
        </motion.div>
      </div>

      {/* 4. Floating Glassmorphism Cards Layered Above the Background Video */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 md:px-12 w-full mt-auto pt-8 pb-4 sm:pb-8 pointer-events-none">
        <div className="w-full flex flex-col sm:flex-row items-stretch sm:items-end justify-between gap-4">
          
          {/* Left Card: AI Video Analytics */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.4, ease: [0.16, 1, 0.3, 1] as const }}
            className="w-full sm:w-[280px] lg:w-[320px] pointer-events-auto"
          >
            <a
              href="#services"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#services')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="group block p-5 lg:p-6 rounded-2xl lg:rounded-3xl bg-[#0C0B16]/65 backdrop-blur-xl border border-white/[0.08] hover:border-violet-500/35 shadow-glass-card hover:shadow-violet-glow transition-all duration-300 relative overflow-hidden"
            >
              {/* Subtle Violet Top Gradient Sheen */}
              <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-violet-400/30 to-transparent" />

              <div className="flex items-start justify-between">
                <div>
                  <span className="text-[10px] font-mono tracking-widest uppercase text-lavender/90 font-medium block">
                    AI VIDEO ANALYTICS
                  </span>
                  <h3 className="mt-2 text-base lg:text-lg font-bold font-sans text-white leading-snug">
                    See beyond<br />the ordinary
                  </h3>
                </div>
                <div className="w-7 h-7 rounded-full bg-white/[0.06] border border-white/10 flex items-center justify-center text-text-secondary group-hover:text-white group-hover:bg-violet-600/40 group-hover:border-violet-400/50 transition-all duration-200">
                  <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </div>

              {/* Minimal Waveform / Line Graphic */}
              <div className="mt-5 flex items-center justify-between gap-1 h-6 px-1">
                <Activity size={16} className="text-violet-400 shrink-0 mr-1" />
                <svg className="w-full h-5 stroke-violet-400/70 fill-none" viewBox="0 0 160 20" preserveAspectRatio="none">
                  <path
                    d="M0,10 Q20,3 40,10 T80,10 T120,5 T140,16 T160,10"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
            </a>
          </motion.div>

          {/* Right Card: Intelligent Automation */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.55, ease: [0.16, 1, 0.3, 1] as const }}
            className="w-full sm:w-[280px] lg:w-[320px] pointer-events-auto"
          >
            <a
              href="#services"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#services')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="group block p-5 lg:p-6 rounded-2xl lg:rounded-3xl bg-[#0C0B16]/65 backdrop-blur-xl border border-white/[0.08] hover:border-violet-500/35 shadow-glass-card hover:shadow-violet-glow transition-all duration-300 relative overflow-hidden"
            >
              {/* Subtle Violet Top Gradient Sheen */}
              <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-violet-400/30 to-transparent" />

              <div className="flex items-start justify-between">
                <div>
                  <span className="text-[10px] font-mono tracking-widest uppercase text-lavender/90 font-medium block">
                    INTELLIGENT AUTOMATION
                  </span>
                  <h3 className="mt-2 text-base lg:text-lg font-bold font-sans text-white leading-snug">
                    Work smarter.<br />Scale faster.
                  </h3>
                </div>
                <div className="w-7 h-7 rounded-full bg-white/[0.06] border border-white/10 flex items-center justify-center text-text-secondary group-hover:text-white group-hover:bg-violet-600/40 group-hover:border-violet-400/50 transition-all duration-200">
                  <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </div>

              {/* Progress-style Animated Workflow Graphic */}
              <div className="mt-5 flex items-center gap-2">
                <Cpu size={16} className="text-violet-400 shrink-0" />
                <div className="flex-1 flex items-center gap-1.5">
                  <div className="flex-1 h-1.5 rounded-full bg-violet-500" />
                  <div className="flex-1 h-1.5 rounded-full bg-violet-500/70" />
                  <div className="flex-1 h-1.5 rounded-full bg-violet-500/30" />
                  <div className="w-2 h-2 rounded-full bg-lavender animate-pulse" />
                </div>
              </div>
            </a>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
