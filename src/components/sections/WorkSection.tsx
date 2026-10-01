import React from 'react';
import { StickyStack } from '../ui/StickyStack';

const creativeWords = ['Web.', 'Design.', 'Motion.', 'Growth.'];

export const WorkSection = () => {
  const cards = creativeWords.map((word, i) => (
    <div key={word} className="w-full max-w-7xl mx-auto px-6 md:px-12 h-full flex flex-col justify-center">
      <div className="flex justify-between items-end border-b border-taste-border pb-8">
        <span className="text-[10px] tracking-widest uppercase font-mono text-taste-muted hidden md:block">
          0{i + 1} / Creative Services
        </span>
        <h2 className="text-[15vw] md:text-[12vw] leading-none font-display font-medium tracking-tighter text-taste-text m-0">
          {word}
        </h2>
      </div>
    </div>
  ));

  return (
    <section id="work" className="bg-taste-bg">
      <StickyStack cards={cards} />
    </section>
  );
};
