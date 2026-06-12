/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { TESTIMONIALS } from '../data';

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const prevSlide = () => {
    setActiveIndex((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setActiveIndex((prev) => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1));
  };

  const activeTest = TESTIMONIALS[activeIndex];

  return (
    <section id="testimonials" className="py-24 bg-[#F9FAFB] text-slate-800 overflow-hidden border-b border-slate-100 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        
        {/* Section Title */}
        <div className="space-y-2 mb-12">
          <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest font-mono">
            Client Accolades
          </span>
          <h2 className="text-3xl sm:text-4xl font-sans font-light uppercase tracking-tight text-slate-900">
            Trusted By <span className="italic text-[#D4AF37] font-serif font-normal text-3xl sm:text-4xl">Discerning Owners</span>
          </h2>
          <div className="w-12 h-0.5 bg-[#D4AF37] mx-auto mt-2" />
        </div>

        {/* Carousel Container */}
        <div className="bg-white border border-slate-200 rounded-none p-8 md:p-12 shadow-xl relative">
          
          {/* Quote Mark background */}
          <div className="absolute top-6 left-6 text-slate-100 pointer-events-none select-none">
            <Quote className="w-24 h-24 transform -rotate-12" />
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeTest.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.35 }}
              className="space-y-6"
            >
              {/* Rating stars */}
              <div className="flex justify-center gap-1">
                {Array.from({ length: activeTest.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#D4AF37] text-[#D4AF37] stroke-1" />
                ))}
              </div>

              {/* Review Text */}
              <p className="text-lg md:text-xl text-slate-700 font-sans italic leading-relaxed font-light max-w-3xl mx-auto">
                "{activeTest.comment}"
              </p>

              {/* Client Profile details */}
              <div className="flex flex-col items-center gap-2 pt-6 border-t border-slate-100 max-w-xs mx-auto">
                <div className="w-16 h-16 rounded-full overflow-hidden border border-[#D4AF37] shadow-md select-none">
                  <img
                    src={activeTest.image}
                    alt={activeTest.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider">{activeTest.name}</h4>
                  <p className="text-xs text-slate-500 uppercase mt-0.5 tracking-widest font-mono font-medium">
                    {activeTest.role} <span className="text-[#D4AF37] lowercase">at</span> <span className="text-slate-600">{activeTest.company}</span>
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Left/Right controls */}
          <div className="absolute top-1/2 -translate-y-1/2 left-2 md:-left-6">
            <button
              onClick={prevSlide}
              className="p-2.5 bg-white text-slate-500 hover:text-[#D4AF37] hover:bg-slate-50 border border-slate-200 rounded-none transition-all focus:outline-none cursor-pointer shadow-sm"
              aria-label="Previous review"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
          </div>
          <div className="absolute top-1/2 -translate-y-1/2 right-2 md:-right-6">
            <button
              onClick={nextSlide}
              className="p-2.5 bg-white text-slate-500 hover:text-[#D4AF37] hover:bg-slate-50 border border-slate-200 rounded-none transition-all focus:outline-none cursor-pointer shadow-sm"
              aria-label="Next review"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Carousel Indicator dots */}
        <div className="flex justify-center gap-2 mt-6 select-none">
          {TESTIMONIALS.map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveIndex(i)}
              className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                activeIndex === i ? 'bg-[#D4AF37]' : 'bg-slate-200 hover:bg-slate-300'
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
