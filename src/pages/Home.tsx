import React from 'react';
import { Hero } from '../components/sections/Hero';
import { AboutSection } from '../components/sections/AboutSection';
import { ServicesSection } from '../components/sections/ServicesSection';
import { WorkSection } from '../components/sections/WorkSection';
import { ProcessSection } from '../components/sections/ProcessSection';
import { WhySection } from '../components/sections/WhySection';
import { WebAppSection } from '../components/sections/WebAppSection';
import { TrustSection } from '../components/sections/TrustSection';
import { FinalSection } from '../components/sections/FinalSection';

export const Home = () => {
  return (
    <main className="relative w-full z-0 flex flex-col bg-ivory text-charcoal">
      <Hero />
      <AboutSection />
      <ServicesSection />
      <WorkSection />
      <ProcessSection />
      <WhySection />
      <WebAppSection />
      <TrustSection />
      <FinalSection />
    </main>
  );
};
