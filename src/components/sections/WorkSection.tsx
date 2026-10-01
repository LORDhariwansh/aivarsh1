import React from 'react';
import { StickyStack } from '../ui/StickyStack';

const slides = [
  { word: 'Web.', sub: 'Websites that work and convert' },
  { word: 'Design.', sub: 'Visual identity that commands attention' },
  { word: 'Motion.', sub: 'Video and animation that tells your story' },
  { word: 'Growth.', sub: 'SEO and digital strategy that compounds' },
];

export const WorkSection = () => {
  const cards = slides.map((s) => (
    <div className="w-full max-w-7xl mx-auto px-6 md:px-12 flex flex-col justify-end pb-32 h-full">
      <p className="text-[10px] font-mono tracking-widest uppercase text-zinc-600 mb-6">{s.sub}</p>
      <h2 className="text-[clamp(5rem,14vw,14rem)] font-display font-medium tracking-tighter text-zinc-50 leading-none">
        {s.word}
      </h2>
    </div>
  ));

  return (
    <section id="work" className="bg-black border-t border-zinc-800">
      <StickyStack cards={cards} />
    </section>
  );
};
