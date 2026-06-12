/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion } from 'motion/react';
import { Target, Eye, Gem, Award, Users, HardHat, CircleDot } from 'lucide-react';
import { IMAGES } from '../data';

export default function About() {
  const [activeTab, setActiveTab] = useState<'mission' | 'vision' | 'value'>('mission');

  const tabs = {
    mission: {
      title: 'Our Mission',
      icon: <Target className="w-5 h-5 text-[#D4AF37]" />,
      desc: 'To construct elite residential and commercial spaces that blend unyielding safety, futuristic energy efficiency, and fine artistic luxury, ensuring each client experiences transparent, stress-free construction lifecycle.',
    },
    vision: {
      title: 'Our Vision',
      icon: <Eye className="w-5 h-5 text-[#D4AF37]" />,
      desc: 'To set the absolute global benchmark in luxury real estate design and construction, pioneering custom smart-living environments and setting carbon-neutral building trends of breathtaking spatial form.',
    },
    value: {
      title: 'Core Integrity',
      icon: <Gem className="w-5 h-5 text-[#D4AF37]" />,
      desc: 'No safety corners cut. Complete pricing breakdowns with zero hidden fees. Pure architectural honesty and structural resilience using only premium architectural materials.',
    },
  };

  const guarantees = [
    {
      icon: <HardHat className="w-6 h-6 text-[#D4AF37]" />,
      title: 'Seismic Safety Design',
      desc: 'All structures include heavy steel cantilever validation fitting top regional climate and ground load scales.'
    },
    {
      icon: <Users className="w-6 h-6 text-[#D4AF37]" />,
      title: 'Client-Centered Focus',
      desc: 'Our executives deliver weekly photographic progress logs, giving clients full remote control over fine micro-details.'
    },
    {
      icon: <Award className="w-6 h-6 text-[#D4AF37]" />,
      title: 'End-to-End Delivery',
      desc: 'We manage full zoning permissions, structural concrete execution, and ultra-high-end interior design in-house.'
    }
  ];

  return (
    <section id="about" className="py-24 bg-white text-slate-800 border-b border-slate-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-4">
          <div className="space-y-2">
            <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest font-mono">
              About Bhan's Construction
            </span>
            <h2 className="text-3xl sm:text-4xl font-sans font-light uppercase tracking-tight text-slate-950">
              Pioneering Tomorrow's <br />
              <span className="italic text-[#D4AF37] font-serif font-normal">Architectural Aesthetics</span>
            </h2>
          </div>
          <div className="max-w-md">
            <p className="text-slate-600 text-sm leading-relaxed font-light">
              Founded in 2008, Bhan's Construction has evolved from a boutique concrete engineering firm into a premier turnkey construction and luxury interior styling provider.
            </p>
          </div>
        </div>

        {/* Dual-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Column 1: Image Frame Collage */}
          <div className="lg:col-span-5 relative">
            <div className="relative z-10 rounded-none overflow-hidden border border-slate-200 shadow-2xl skew-y-1 hover:skew-y-0 transition-transform duration-500">
              <img
                src={IMAGES.architecture}
                alt="Architectural Blueprint planning desk"
                referrerPolicy="no-referrer"
                className="w-full h-auto object-cover aspect-[4/3] transform hover:scale-105 transition-transform duration-700 select-none"
              />
              <div className="absolute inset-0 bg-slate-950/5" />
            </div>

            {/* floating experience tag */}
            <div className="absolute -bottom-6 -right-6 z-20 bg-gradient-to-br from-[#D4AF37] to-[#b59228] text-slate-950 p-5 rounded-none shadow-xl flex items-center gap-3">
              <span className="text-4xl font-extrabold font-mono tracking-tighter">18</span>
              <div className="flex flex-col">
                <span className="text-xs font-bold uppercase tracking-wider font-mono leading-none">Years of</span>
                <span className="text-[10px] font-sans font-medium uppercase tracking-widest leading-normal">Excellence</span>
              </div>
            </div>

            {/* decorative back accent circles */}
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-[#D4AF37]/5 blur-2xl rounded-full -z-10" />
          </div>

          {/* Column 2: Detailed Copy & Tab Panel */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-4">
              <h3 className="text-xl md:text-2xl font-medium tracking-tight text-slate-900 font-sans uppercase">
                The Bhan Legacy of Precision
              </h3>
              <p className="text-slate-650 text-sm leading-relaxed font-light">
                We believe that premium buildings are not simply stacks of timber and stone, but modern sacred structures where your life and business flourish. That is why we integrate visionary spatial architecture, robust micro-engineering, and bespoke high-end materials to craft structures that retain extreme structural value for generations.
              </p>
            </div>

            {/* Interactive Tab Box Selector */}
            <div className="bg-slate-50 border border-slate-200 rounded-none p-5 shadow-sm">
              <div className="flex border-b border-slate-200 pb-3 gap-2 flex-wrap">
                {(Object.keys(tabs) as Array<keyof typeof tabs>).map((tabKey) => (
                  <button
                    key={tabKey}
                    type="button"
                    onClick={() => setActiveTab(tabKey)}
                    className={`flex items-center gap-2 px-4 py-2 text-xs font-semibold uppercase tracking-wider rounded-none transition-all duration-300 cursor-pointer ${
                      activeTab === tabKey
                        ? 'bg-[#D4AF37] text-slate-950 font-bold shadow'
                        : 'text-slate-500 hover:text-slate-900 hover:bg-slate-100'
                    }`}
                  >
                    {tabs[tabKey].icon}
                    <span>{tabs[tabKey].title}</span>
                  </button>
                ))}
              </div>

              <div className="mt-4">
                <p className="text-slate-650 text-sm leading-relaxed font-light">
                  {tabs[activeTab].desc}
                </p>
              </div>
            </div>

            {/* Micro Highlights of Why Bhan's */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-center gap-2.5">
                <CircleDot className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <span className="text-sm font-light text-slate-700 font-sans">100% On-Time Project Delivery Offer</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CircleDot className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <span className="text-sm font-light text-slate-700 font-sans">Full Licensed Structural Insurances</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CircleDot className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <span className="text-sm font-light text-slate-700 font-sans">Sustainable Eco-Materials Priority</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CircleDot className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <span className="text-sm font-light text-slate-700 font-sans">Direct Chief Architect Communication</span>
              </div>
            </div>
          </div>
        </div>

        {/* Why Choose Bhan's Triple-Card Highlights Section */}
        <div className="mt-20 border-t border-slate-200 pt-16">
          <div className="text-center mb-10">
            <h4 className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest font-mono mb-2">
              Unrivaled Standards
            </h4>
            <h3 className="text-2xl font-light tracking-tight uppercase text-slate-900">
              Why Discerning Investors Choose Us
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {guarantees.map((g, index) => (
              <div
                key={index}
                className="p-6 bg-slate-50 border border-slate-200 rounded-none hover:border-[#D4AF37]/40 transition-colors duration-300 group shadow-sm hover:shadow"
              >
                <div className="p-3 bg-white border border-slate-200 rounded-none w-fit text-[#D4AF37] mb-4 group-hover:bg-[#D4AF37]/10 transition-colors duration-300 shadow-sm">
                  {g.icon}
                </div>
                <h4 className="text-base font-bold text-slate-900 mb-2 uppercase tracking-wide">
                  {g.title}
                </h4>
                <p className="text-slate-600 text-xs leading-relaxed font-light">
                  {g.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
