import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/ui/Navbar';
import { Footer } from './components/ui/Footer';
import { SmoothScroll } from './components/ui/SmoothScroll';
import { Home } from './pages/Home';
import { PrivacyPolicy } from './pages/PrivacyPolicy';
import { ErrorBoundary } from './ErrorBoundary';

function App() {
  return (
    <ErrorBoundary>
      <Router>
        <SmoothScroll>
          <div className="relative w-full bg-background text-foreground font-sans grain min-h-screen">
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            </Routes>
            <Footer />
          </div>
        </SmoothScroll>
      </Router>
    </ErrorBoundary>
  );
}

export default App;
