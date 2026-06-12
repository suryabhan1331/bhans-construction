/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Filter, Calendar, MapPin, Building, ChevronLeft, ChevronRight, X, Sparkles, MoveRight } from 'lucide-react';
import { PROJECTS, IMAGES } from '../data';
import { Project } from '../types';

type CategoryFilter = 'all' | 'construction' | 'interior' | 'commercial' | 'residential';

interface PortfolioProps {
  onQuoteOpen: () => void;
}

export default function Portfolio({ onQuoteOpen }: PortfolioProps) {
  const [filter, setFilter] = useState<CategoryFilter>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Filter logic
  const filteredProjects = PROJECTS.filter((proj) => {
    if (filter === 'all') return true;
    return proj.category === filter;
  });

  const categories: { value: CategoryFilter; label: string }[] = [
    { value: 'all', label: 'All Projects' },
    { value: 'construction', label: 'Construction' },
    { value: 'interior', label: 'Interior Design' },
    { value: 'commercial', label: 'Commercial' },
    { value: 'residential', label: 'Residential' },
  ];

  return (
    <section id="projects" className="py-24 bg-white text-slate-800 overflow-hidden border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-2">
            <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest font-mono">
              Elite Showcase
            </span>
            <h2 className="text-3xl sm:text-4xl font-sans font-light uppercase tracking-tight text-slate-900 mb-2">
              Signature <span className="italic text-[#D4AF37] font-serif font-normal">Real Estate Projects</span>
            </h2>
          </div>
          
          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat.value}
                type="button"
                onClick={() => setFilter(cat.value)}
                className={`px-4 py-2 text-xs font-bold uppercase tracking-widest rounded-none border transition-all duration-300 cursor-pointer ${
                  filter === cat.value
                    ? 'bg-[#D4AF37] text-black border-transparent font-bold shadow-md'
                    : 'bg-slate-50 text-slate-600 border-slate-200 hover:text-slate-900 hover:border-[#D4AF37]/50'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Cards Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((proj, idx) => (
              <motion.div
                key={proj.id}
                layout
                initial={{ opacity: 0, scale: 0.92, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.92, y: 15 }}
                transition={{ duration: 0.4 }}
                onClick={() => setSelectedProject(proj)}
                className="group relative bg-white border border-slate-200 rounded-none overflow-hidden cursor-pointer shadow-md hover:shadow-lg hover:shadow-[#D4AF37]/5 transition-all duration-300"
              >
                {/* Product Thumbnail image frame */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={proj.image}
                    alt={proj.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 select-none"
                  />
                  <div className="absolute inset-0 bg-slate-950/15 transition-opacity duration-300" />
                  
                  {/* Category Pill Tag */}
                  <span className="absolute top-4 left-4 px-2.5 py-1 text-[10px] uppercase font-bold tracking-widest bg-white text-[#D4AF37] rounded-none border border-slate-200 shadow-sm select-none">
                    {proj.categoryLabel}
                  </span>
                </div>

                {/* Card Content details */}
                <div className="p-6">
                  <div className="flex items-center gap-2 text-[10px] text-slate-500 font-serif mb-2 select-none uppercase tracking-widest">
                    <MapPin className="w-3.5 h-3.5 text-[#D4AF37]" />
                    <span>{proj.location}</span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 tracking-tight uppercase group-hover:text-[#D4AF37] transition-colors duration-200">
                    {proj.title}
                  </h3>
                  
                  <p className="text-slate-605 text-xs mt-2 line-clamp-2 leading-relaxed font-light">
                    {proj.description}
                  </p>

                  <div className="mt-4 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-[#D4AF37]">
                    <span className="uppercase tracking-widest font-mono">
                      Specs & Gallery
                    </span>
                    <MoveRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Deluxe Interactive Project Detail Dialog (includes visual specs list, meta elements, custom CTAs) */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6">
            {/* Backdrop black overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="fixed inset-0 bg-black/85 backdrop-blur-sm"
            />

            {/* Modal Body Card */}
            <motion.div
              initial={{ scale: 0.93, opacity: 0, y: 30 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.93, opacity: 0, y: 30 }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="relative w-full max-w-4xl bg-white border border-slate-200 rounded-none shadow-2xl overflow-hidden z-10 flex flex-col md:flex-row max-h-[90vh]"
            >
              {/* Top gold line */}
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-[#D4AF37] z-20" />

              {/* Close Button */}
              <button
                type="button"
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 z-20 p-2 text-slate-550 hover:text-slate-900 bg-white/95 hover:bg-slate-100 border border-slate-200 rounded-none transition-colors duration-200 shadow"
                aria-label="Close project view"
              >
                <X className="w-4 h-4" />
              </button>

              {/* Column 1: Image Showcase */}
              <div className="md:w-1/2 relative bg-slate-950 flex items-center justify-center h-64 md:h-auto min-h-[300px]">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover select-none"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-4 left-4 py-1.5 px-3 bg-white/90 border border-slate-200 rounded-none backdrop-blur text-xs text-[#D4AF37] font-mono select-none">
                  {selectedProject.categoryLabel} Project Sequence
                </div>
              </div>

              {/* Column 2: Specific Metadata details */}
              <div className="md:w-1/2 p-6 md:p-8 flex flex-col justify-between overflow-y-auto">
                <div className="space-y-6">
                  <div>
                    <span className="inline-flex items-center gap-1.5 text-[10px] font-bold text-[#D4AF37] bg-[#D4AF37]/10 border border-[#D4AF37]/20 px-2.5 py-1 rounded-none mb-3">
                      <Sparkles className="w-3.5 h-3.5" /> Project Blueprint Verified
                    </span>
                    <h3 className="text-2xl font-light tracking-tight text-slate-955 uppercase font-sans">
                      {selectedProject.title}
                    </h3>
                    <p className="text-slate-600 text-xs mt-2 leading-relaxed font-light">
                      {selectedProject.description}
                    </p>
                  </div>

                  {/* Metadata Specs Matrix */}
                  <div className="grid grid-cols-2 gap-4 py-4 border-t border-b border-slate-200">
                    <div className="space-y-0.5">
                      <p className="text-[10px] text-slate-500 font-mono tracking-wider uppercase">CLIENT</p>
                      <p className="text-xs font-semibold text-slate-800">{selectedProject.client}</p>
                    </div>
                    <div className="space-y-0.5">
                      <p className="text-[10px] text-slate-500 font-mono tracking-wider uppercase">LOCATION</p>
                      <p className="text-xs font-semibold text-slate-800">{selectedProject.location}</p>
                    </div>
                    <div className="space-y-0.5">
                      <p className="text-[10px] text-slate-500 font-mono tracking-wider uppercase">FINISHED IN</p>
                      <p className="text-xs font-semibold text-[#D4AF37] font-mono">{selectedProject.year}</p>
                    </div>
                    <div className="space-y-0.5">
                      <p className="text-[10px] text-slate-500 font-mono tracking-wider uppercase">TOTAL PLOT AREA</p>
                      <p className="text-xs font-semibold text-slate-800">{selectedProject.area}</p>
                    </div>
                  </div>

                  {/* Bullet Spec Highlights */}
                  <div className="space-y-3">
                    <h4 className="text-xs font-bold uppercase tracking-widest text-[#D4AF37] font-mono">
                      Engineering Specifications
                    </h4>
                    <ul className="space-y-2.5">
                      {selectedProject.details.map((dt, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-xs text-slate-600 leading-relaxed font-light">
                          <div className="p-0.5 bg-[#D4AF37]/15 rounded-none mt-0.5 text-[#D4AF37]">
                            <ChevronRight className="w-3 h-3 stroke-[3]" />
                          </div>
                          <span>{dt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-8 pt-5 border-t border-slate-200 flex flex-col sm:flex-row gap-3">
                  <button
                    type="button"
                    onClick={() => {
                      setSelectedProject(null);
                      onQuoteOpen();
                    }}
                    className="flex-1 py-3 bg-[#D4AF37] hover:bg-[#b59228] text-slate-950 text-xs font-bold uppercase tracking-widest rounded-none transition-colors cursor-pointer text-center shadow-md hover:shadow-lg"
                  >
                    Inquire For Similar Build
                  </button>
                  <button
                    type="button"
                    onClick={() => setSelectedProject(null)}
                    className="py-3 px-5 bg-slate-50 hover:bg-slate-100 text-slate-700 text-xs font-medium uppercase tracking-wider rounded-none border border-slate-200 text-center transition-colors cursor-pointer"
                  >
                    Close
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
