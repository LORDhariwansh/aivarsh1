import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export const StorySection = () => {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const scale = useTransform(scrollYProgress, [0, 0.4], [0.75, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.4], [0, 1]);
  const blur = useTransform(scrollYProgress, [0, 0.4], [24, 0]);
  const filterVal = useTransform(blur, (v) => `blur(${v}px)`);

  return (
    <section ref={ref} id="about" className="py-32 md:py-64 bg-black border-t border-zinc-800 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <motion.div style={{ scale, opacity, filter: filterVal }}>
          <h2 className="text-[clamp(3rem,9vw,8rem)] font-display font-medium tracking-tighter text-zinc-50 leading-[0.9] mb-16">
            We build things<br />
            that actually<br />
            <span className="text-zinc-600">do something.</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 max-w-3xl">
            <p className="text-lg text-zinc-400 leading-relaxed font-light">
              AI-VARSH combines engineering, automation, and design to solve real business problems — no unnecessary complexity, no bloated frameworks.
            </p>
            <div>
              <p className="text-[10px] font-mono tracking-widest uppercase text-zinc-700 mb-4">Location</p>
              <p className="text-sm text-zinc-400">Based in Chhattisgarh, India.</p>
              <p className="text-sm text-zinc-600 mt-2">Working globally.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
