/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { AnimatePresence } from 'motion/react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Stats from './components/Stats';
import Testimonials from './components/Testimonials';
import Team from './components/Team';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';
import QuoteModal from './components/QuoteModal';
import Loader from './components/Loader';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);

  useEffect(() => {
    // Elegant load animation on initial website entry
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  const handleOpenQuote = () => setIsQuoteOpen(true);
  const handleCloseQuote = () => setIsQuoteOpen(false);

  return (
    <div className="bg-[#F9FAFB] text-slate-800 min-h-screen relative font-sans antialiased selection:bg-[#D4AF37] selection:text-white">
      {/* Absolute Loading Animation Overlay */}
      <AnimatePresence>
        {isLoading && <Loader />}
      </AnimatePresence>

      {/* Main Website Structure */}
      {!isLoading && (
        <div className="flex flex-col min-h-screen">
          <Navbar onQuoteOpen={handleOpenQuote} />
          
          <main className="flex-grow">
            <Hero onQuoteOpen={handleOpenQuote} />
            <About />
            <Services onQuoteOpen={handleOpenQuote} />
            <Portfolio onQuoteOpen={handleOpenQuote} />
            <Stats />
            <Testimonials />
            <Team />
            <Contact />
          </main>

          <Footer />

          {/* Interactive Core Overlays */}
          <BackToTop />
          <QuoteModal isOpen={isQuoteOpen} onClose={handleCloseQuote} />
        </div>
      )}
    </div>
  );
}

