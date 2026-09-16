import { Navbar } from './components/ui/Navbar';
import { Footer } from './components/ui/Footer';
import { Hero } from './components/sections/Hero';
import { ServicesSection } from './components/sections/ServicesSection';
import { AIShowcaseSection } from './components/sections/AIShowcaseSection';
import { CapabilitiesSection } from './components/sections/CapabilitiesSection';
import { ProcessSection } from './components/sections/ProcessSection';
import { AboutSection } from './components/sections/AboutSection';
import { FinalSection } from './components/sections/FinalSection';
import { ErrorBoundary } from './ErrorBoundary';

function App() {
  return (
    <ErrorBoundary>
      <div className="relative w-full text-ai-base">
        <Navbar />

        <main className="relative w-full z-0 flex flex-col">
          <Hero />
          <ServicesSection />
          <AIShowcaseSection />
          <CapabilitiesSection />
          <ProcessSection />
          <AboutSection />
          <FinalSection />
        </main>

        <Footer />
      </div>
    </ErrorBoundary>
  );
}

export default App;
