import { Navbar } from './components/ui/Navbar';
import { Footer } from './components/ui/Footer';
import { Hero } from './components/sections/Hero';
import { TrustSection } from './components/sections/TrustSection';
import { ServicesSection } from './components/sections/ServicesSection';
import { InteractiveNeedsSection } from './components/sections/InteractiveNeedsSection';
import { StorySection } from './components/sections/StorySection';
import { WorkSection } from './components/sections/WorkSection';
import { IndustriesSection } from './components/sections/IndustriesSection';
import { WhySection } from './components/sections/WhySection';
import { ProcessSection } from './components/sections/ProcessSection';
import { LocalSection } from './components/sections/LocalSection';
import { AboutSection } from './components/sections/AboutSection';
import { FaqSection } from './components/sections/FaqSection';
import { FinalSection } from './components/sections/FinalSection';
import { ErrorBoundary } from './ErrorBoundary';

function App() {
  return (
    <ErrorBoundary>
      <div className="relative w-full text-ai-text bg-ai-bg selection:bg-ai-text selection:text-white">
        <Navbar />

        <main className="relative w-full z-0 flex flex-col pt-8">
          <Hero />
          <TrustSection />
          <ServicesSection />
          <InteractiveNeedsSection />
          <StorySection />
          <WorkSection />
          <IndustriesSection />
          <WhySection />
          <ProcessSection />
          <LocalSection />
          <AboutSection />
          <FaqSection />
          <FinalSection />
        </main>

        <Footer />
      </div>
    </ErrorBoundary>
  );
}

export default App;
