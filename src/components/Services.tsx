/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Home, Briefcase, Palette, Compass, Hammer, Shield, Check, ArrowRight, X, Phone } from 'lucide-react';
import { SERVICES } from '../data';
import { Service } from '../types';

const IconMap: { [key: string]: any } = {
  Home,
  Briefcase,
  Palette,
  Compass,
  Hammer,
  Shield
};

interface ServicesProps {
  onQuoteOpen: () => void;
}

export default function Services({ onQuoteOpen }: ServicesProps) {
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  return (
    <section id="services" className="py-24 bg-[#F9FAFB] text-slate-800 overflow-hidden border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest font-mono">
            Structured Competencies
          </span>
          <h2 className="text-3xl sm:text-4xl font-sans font-light uppercase tracking-tight text-slate-900 mt-1">
            Our Building & <span className="italic text-[#D4AF37] font-serif font-normal text-3xl sm:text-4xl">Design Services</span>
          </h2>
          <div className="w-16 h-0.5 bg-[#D4AF37] mx-auto mt-4" />
          <p className="text-slate-600 text-sm mt-4 leading-relaxed font-light">
            We deliver master-certified design, modern engineering construction layout, and complete interior finishes. Select a service area to inspect our detailed custom process.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((srv, index) => {
            const IconComponent = IconMap[srv.icon] || Home;
            return (
              <motion.div
                key={srv.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onClick={() => setSelectedService(srv)}
                className="group relative bg-white border border-slate-200 rounded-none overflow-hidden shadow-md hover:shadow-lg hover:shadow-[#D4AF37]/5 cursor-pointer flex flex-col justify-between transition-all duration-300"
              >
                {/* Background image overlay with slight opacity */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={srv.image}
                    alt={srv.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-slate-950/10" />
                  
                  {/* Absolute icon overlay */}
                  <div className="absolute bottom-4 left-4 p-3 bg-white border border-slate-200 rounded-none text-[#D4AF37] group-hover:bg-[#D4AF37] group-hover:text-slate-950 transition-colors duration-300 shadow-sm z-10">
                    <IconComponent className="w-5 h-5" />
                  </div>
                </div>

                {/* Content area */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div className="space-y-2.5">
                    <h3 className="text-lg font-bold text-slate-900 uppercase tracking-wide group-hover:text-[#D4AF37] transition-colors duration-300">
                      {srv.title}
                    </h3>
                    <p className="text-slate-600 text-xs leading-relaxed font-light">
                      {srv.description}
                    </p>
                  </div>

                  <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-[#D4AF37]">
                    <span className="uppercase tracking-widest font-mono group-hover:translate-x-1 duration-350">
                      Read Breakdown
                    </span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 duration-350" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Dynamic Slide-out Service Drawer Detailed Overlay */}
      <AnimatePresence>
        {selectedService && (
          <div className="fixed inset-0 z-50 flex items-center justify-end">
            {/* Backdrop black overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedService(null)}
              className="fixed inset-0 bg-black/75 backdrop-blur-sm"
            />

            {/* Side Drawer Body */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 220 }}
              className="relative w-full max-w-xl bg-white h-screen border-l border-slate-250 p-6 md:p-8 flex flex-col justify-between overflow-y-auto z-10 rounded-none shadow-2xl"
            >
              <div className="space-y-6">
                {/* Header Close Panel */}
                <div className="flex justify-between items-center border-b border-slate-100 pb-4">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#D4AF37]">
                    Specification Blueprint
                  </span>
                  <button
                    type="button"
                    onClick={() => setSelectedService(null)}
                    className="p-1 text-slate-500 hover:text-slate-900 hover:bg-slate-100 rounded-none transition-colors duration-200"
                    aria-label="Close detailed specification view"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Detail Content */}
                <div className="space-y-4">
                  <div className="h-44 rounded-none overflow-hidden border border-slate-200 relative shadow-inner">
                    <img
                      src={selectedService.image}
                      alt={selectedService.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent opacity-40" />
                  </div>

                  <h3 className="text-2xl font-light text-slate-900 tracking-tight uppercase">
                    {selectedService.title}
                  </h3>
                  
                  <p className="text-slate-605 text-xs leading-relaxed font-light">
                    {selectedService.longDescription}
                  </p>
                </div>

                {/* Checklist Breakdown */}
                <div className="space-y-3">
                  <h4 className="text-xs font-bold uppercase tracking-widest text-[#D4AF37] font-mono">
                    Guaranteed Delivery Items
                  </h4>
                  <ul className="grid grid-cols-1 gap-2">
                    {selectedService.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-xs text-slate-600 leading-normal">
                        <div className="p-0.5 bg-emerald-500/15 border border-emerald-500/35 rounded-none text-emerald-400 mt-0.5">
                          <Check className="w-3.5 h-3.5" />
                        </div>
                        <span className="font-light">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action Prompt */}
              <div className="mt-8 pt-6 border-t border-slate-150 space-y-3">
                <p className="text-[11px] text-slate-500 font-light">
                  Ready to draft a detailed scope of work for your property? Request an estimate immediately.
                </p>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => {
                      setSelectedService(null);
                      onQuoteOpen();
                    }}
                    className="w-full py-3 bg-[#D4AF37] hover:bg-[#b59228] text-slate-950 text-xs font-bold uppercase tracking-widest rounded-none transition-colors shadow-md cursor-pointer text-center"
                  >
                    Book Quote Estimator
                  </button>
                  <a
                    href="tel:+15553020980"
                    className="w-full py-3 bg-slate-50 hover:bg-slate-100 text-slate-700 border border-slate-200 text-xs font-semibold uppercase tracking-wider rounded-none text-center transition-colors flex items-center justify-center gap-2"
                  >
                    <Phone className="w-3.5 h-3.5 text-[#D4AF37]" />
                    Call Studio
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
