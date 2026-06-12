/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Sparkles, Sliders, ShieldCheck } from 'lucide-react';
import { IMAGES } from '../data';

interface HeroProps {
  onQuoteOpen: () => void;
}

export default function Hero({ onQuoteOpen }: HeroProps) {
  const handleScrollToProjects = (e: React.MouseEvent) => {
    e.preventDefault();
    const projectsSection = document.querySelector('#projects');
    if (projectsSection) {
      const offsetTop = (projectsSection as HTMLElement).offsetTop - 85;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-[#FAFAFA] overflow-hidden pt-20"
    >
      {/* Absolute image background with elegant linear gradients overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={IMAGES.heroBg}
          alt="Bhan's Luxury Villa Architecture"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center transform scale-102 select-none"
        />
        {/* Layered luxury brand gradients */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/80 to-white/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-white/85" />
        {/* Abstract design geometry in the corner */}
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-br from-[#D4AF37]/10 to-transparent blur-3xl rounded-full pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Main Hero Copy Box */}
          <div className="lg:col-span-8 text-left space-y-6">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-white/90 border border-[#D4AF37]/40 rounded-full shadow-sm"
            >
              <Sparkles className="w-4 h-4 text-[#D4AF37]" />
              <span className="text-xs font-semibold text-slate-800 uppercase tracking-widest font-mono">
                Award Winner • Structural Masterpieces
              </span>
            </motion.div>

            <div className="space-y-4">
              <span className="text-[#D4AF37] text-xs font-bold tracking-[0.3em] uppercase block">Est. 2012</span>
              <motion.h1
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-sans font-light text-slate-900 tracking-tight leading-[1.1] uppercase"
              >
                Building <br />
                <span className="text-[#D4AF37] italic font-serif normal-case">
                  Dreams
                </span>{" "}
                Into Reality
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="max-w-2xl text-base sm:text-lg md:text-xl text-slate-700 leading-relaxed font-sans font-light font-medium"
              >
                Excellence in construction and bespoke interior design for luxury real estate across the globe. We craft premium spaces combining structural safety, bold geometric planning, and master-level luxury styling.
              </motion.p>
            </div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 pt-4"
            >
              <button
                type="button"
                id="hero-get-quote-btn"
                onClick={onQuoteOpen}
                className="px-8 py-4 bg-[#D4AF37] hover:bg-[#b59228] text-slate-950 font-bold uppercase tracking-widest rounded-none transition-all duration-300 shadow-md hover:shadow-lg hover:shadow-[#D4AF37]/25 flex items-center justify-center gap-2 cursor-pointer text-sm"
              >
                Get Quote
                <ArrowRight className="w-4 h-4" />
              </button>
              <a
                href="#projects"
                onClick={handleScrollToProjects}
                className="px-8 py-4 bg-transparent hover:bg-slate-55 text-slate-800 hover:text-[#D4AF37] font-bold uppercase tracking-widest rounded-none border border-slate-300 hover:border-[#D4AF37]/60 transition-all duration-300 flex items-center justify-center gap-2 text-sm"
              >
                Our Projects
              </a>
            </motion.div>
          </div>

          {/* Side Brand Card detailing corporate features */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="lg:col-span-4 hidden lg:block"
          >
            <div className="p-6 bg-white/95 border border-slate-250 rounded-none backdrop-blur-md shadow-2xl relative group">
              {/* Gold light leak effect on hover */}
              <div className="absolute inset-0 bg-[#D4AF37]/5 rounded-none opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <h3 className="text-lg font-bold text-slate-900 mb-4 uppercase tracking-widest border-b border-slate-100 pb-2 font-sans font-medium text-sm">
                Core Standard
              </h3>
              
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="p-1.5 bg-[#D4AF37]/10 border border-[#D4AF37]/30 rounded-none text-[#D4AF37] shrink-0 mt-0.5">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-slate-900">Full-Liability Protection</h4>
                    <p className="text-xs text-slate-600 mt-0.5 font-light">Comprehensive insurance shielding investments at every milestone.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="p-1.5 bg-[#D4AF37]/10 border border-[#D4AF37]/30 rounded-none text-[#D4AF37] shrink-0 mt-0.5">
                    <Sliders className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-slate-900">3D Walkthrough Previews</h4>
                    <p className="text-xs text-slate-600 mt-0.5 font-light">Walk inside photorealistic designs before we pour a single gram of concrete.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="p-1.5 bg-[#D4AF37]/10 border border-[#D4AF37]/30 rounded-none text-[#D4AF37] shrink-0 mt-0.5">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-slate-900">Direct Project Feed</h4>
                    <p className="text-xs text-slate-600 mt-0.5 font-light">Weekly architectural summaries and client dashboards detailing progress.</p>
                  </div>
                </li>
              </ul>
              <div className="mt-5 text-center">
                <p className="text-[10px] text-[#D4AF37] uppercase tracking-widest font-mono">
                  Bhan's Quality Pledge
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Slide-Down Mouse Indicator */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-1 select-none pointer-events-none">
        <span className="text-[9px] text-slate-500 font-mono tracking-widest uppercase">
          Explore Section
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
          className="w-1.5 h-3.5 bg-[#D4AF37] rounded-full"
        />
      </div>
    </section>
  );
}
