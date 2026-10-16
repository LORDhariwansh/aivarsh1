import React from 'react';
import { Hero } from '../components/sections/Hero';
import { TrustSection } from '../components/sections/TrustSection';
import { ServicesSection } from '../components/sections/ServicesSection';
import { AiShowcaseSection } from '../components/sections/AiShowcaseSection';
import { ProcessSection } from '../components/sections/ProcessSection';
import { WorkSection } from '../components/sections/WorkSection';
import { AboutSection } from '../components/sections/AboutSection';
import { IndustriesSection } from '../components/sections/IndustriesSection';
import { WhySection } from '../components/sections/WhySection';
import { WebAppSection } from '../components/sections/WebAppSection';
import { FaqSection } from '../components/sections/FaqSection';
import { FinalSection } from '../components/sections/FinalSection';

export const Home = () => {
  return (
    <main className="relative w-full z-0 flex flex-col bg-background text-foreground">
      <Hero />
      <TrustSection />
      <ServicesSection />
      <AiShowcaseSection />
      <ProcessSection />
      <WorkSection />
      <AboutSection />
      <IndustriesSection />
      <WhySection />
      <WebAppSection />
      <FaqSection />
      <FinalSection />
    </main>
  );
};
