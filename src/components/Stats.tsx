/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Sparkles } from 'lucide-react';
import { STATS } from '../data';

const CounterAnim = ({ endValue, duration = 1500 }: { endValue: number; duration?: number }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let isMounted = true;
    let startTimestamp: number | null = null;
    
    const step = (timestamp: number) => {
      if (!isMounted) return;
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      setCount(Math.floor(progress * endValue));
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    
    window.requestAnimationFrame(step);

    return () => {
      isMounted = false;
    };
  }, [endValue, duration]);

  return <span>{count}</span>;
};

export default function Stats() {
  return (
    <section className="relative py-20 bg-white text-slate-800 border-b border-slate-100 overflow-hidden">
      {/* Decorative vector background */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/40 to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(#D4AF37_0.7px,transparent_0.7px)] [background-size:24px_24px] opacity-5 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="inline-flex items-center gap-1 px-3 py-1 bg-[#D4AF37]/10 border border-[#D4AF37]/30 rounded-none text-[10px] font-bold text-[#D4AF37] font-mono uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5" /> Empirical Statistics
          </span>
          <h3 className="text-xl font-light tracking-tight uppercase font-sans mt-3 text-slate-900">
            Our Solid Track Record
          </h3>
          <p className="text-xs text-slate-600 mt-2 leading-relaxed font-light">
            Every digit stands for rigorous craftsmanship, high safety clearances, and flawless completions of premium spaces.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {STATS.map((stat, idx) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="p-6 bg-slate-50 border border-slate-200 rounded-none flex flex-col justify-between text-center group hover:border-[#D4AF37]/35 transition-colors duration-450 shadow-sm hover:shadow relative overflow-hidden"
            >
              {/* Back ambient glare */}
              <div className="absolute -bottom-10 -right-10 w-24 h-24 bg-[#D4AF37]/5 blur-2xl rounded-none group-hover:bg-[#D4AF37]/10 transition-colors pointer-events-none" />

              <div className="space-y-1.5">
                {/* Value Counter Text with Suffix */}
                <div className="text-4xl md:text-5xl font-extrabold text-[#D4AF37] tracking-tight font-mono select-none">
                  <CounterAnim endValue={stat.value} />
                  <span>{stat.suffix}</span>
                </div>

                {/* Stat label */}
                <h4 className="text-sm font-semibold text-slate-900 uppercase tracking-wider font-sans">
                  {stat.label}
                </h4>
              </div>

              {/* Description */}
              <p className="text-slate-600 text-[11px] leading-relaxed mt-4 border-t border-slate-200 pt-3 font-light">
                {stat.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
