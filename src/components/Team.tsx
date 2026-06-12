/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Linkedin, Twitter, Instagram, Sparkles, CircleDot } from 'lucide-react';
import { TEAM } from '../data';

export default function Team() {
  return (
    <section id="team" className="py-24 bg-white text-slate-800 overflow-hidden border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest font-mono">
            Vetted Leadership
          </span>
          <h2 className="text-3xl sm:text-4xl font-sans font-light uppercase tracking-tight text-slate-900 mt-1">
            Our Executive <span className="italic text-[#D4AF37] font-serif font-normal text-3xl sm:text-4xl">Design & Engineering Team</span>
          </h2>
          <div className="w-16 h-0.5 bg-[#D4AF37] mx-auto mt-4" />
          <p className="text-slate-605 text-sm mt-4 leading-relaxed font-light">
            Our company is guided by four accredited core planners who directly orchestrate the structural draft and material finishes of every contract.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {TEAM.map((member, idx) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-slate-50 border border-slate-200 rounded-none overflow-hidden group shadow-md flex flex-col justify-between"
            >
              {/* Photo Frame Container */}
              <div className="relative h-80 overflow-hidden bg-black">
                <img
                  src={member.image}
                  alt={member.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-104 select-none"
                />

                {/* dark overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-50 transition-opacity duration-300 pointer-events-none" />

                {/* Hover biography panel overlay */}
                <div className="absolute inset-0 bg-white/95 p-5 flex flex-col justify-between opacity-0 group-hover:opacity-100 transition-all duration-400 border border-slate-200 rounded-none shadow">
                  <div className="space-y-3">
                    <div className="flex items-center gap-1 text-[10px] text-[#D4AF37] font-bold tracking-wider font-mono uppercase">
                      <Sparkles className="w-3.5 h-3.5" /> Core Biography
                    </div>
                    <p className="text-slate-605 text-xs leading-relaxed font-light font-medium">
                      {member.bio}
                    </p>
                  </div>

                  <div className="space-y-2 border-t border-slate-100 pt-3">
                    <p className="text-[10px] text-slate-500 font-mono tracking-widest uppercase mb-1">CONNECT SPECIALIST</p>
                    <div className="flex gap-2">
                      {member.socials.linkedin && (
                        <a
                          href={member.socials.linkedin}
                          className="p-2 bg-slate-50 border border-slate-200 text-slate-600 hover:text-[#D4AF37] hover:border-[#D4AF37]/40 rounded-none transition-colors focus:outline-none shadow-sm"
                          aria-label={`${member.name} Linkedin Link`}
                        >
                          <Linkedin className="w-4 h-4" />
                        </a>
                      )}
                      {member.socials.twitter && (
                        <a
                          href={member.socials.twitter}
                          className="p-2 bg-slate-50 border border-slate-200 text-slate-600 hover:text-[#D4AF37] hover:border-[#D4AF37]/40 rounded-none transition-colors focus:outline-none shadow-sm"
                          aria-label={`${member.name} Twitter Link`}
                        >
                          <Twitter className="w-4 h-4" />
                        </a>
                      )}
                      {member.socials.instagram && (
                        <a
                          href={member.socials.instagram}
                          className="p-2 bg-slate-50 border border-slate-200 text-slate-600 hover:text-[#D4AF37] hover:border-[#D4AF37]/40 rounded-none transition-colors focus:outline-none shadow-sm"
                          aria-label={`${member.name} Instagram Link`}
                        >
                          <Instagram className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>

                {/* Experience floating badge */}
                <div className="absolute top-4 right-4 px-2 py-1 bg-white/95 border border-slate-200 text-[10px] text-slate-800 font-mono select-none rounded-none shadow">
                  <span className="text-[#D4AF37] font-bold">{member.experience}</span> exp
                </div>
              </div>

              {/* Text Information card footer */}
              <div className="p-5 space-y-2.5">
                <div>
                  <h3 className="text-base font-bold text-slate-900 uppercase tracking-wide group-hover:text-[#D4AF37] transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-xs text-[#D4AF37] font-medium tracking-wide uppercase mt-0.5">
                    {member.role}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-150 flex items-center gap-2 text-[10px] text-slate-550 font-light leading-snug">
                  <CircleDot className="w-3 h-3 text-slate-400 shrink-0" />
                  <span>{member.specialty}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
