"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const experiences = [
  {
    role: "Project Lead Intern – Employability/Accounting",
    company: "AusWISE",
    date: "Jul 2025 – Present",
    location: "Melbourne, AU",
  },
  {
    role: "Business Accountant",
    company: "AGM Accountants",
    date: "Nov 2025 – Jan 2026",
    location: "Melbourne, AU",
  },
  {
    role: "Business Accountant",
    company: "Tektonic Labs",
    date: "Jul 2025 – Nov 2025",
    location: "Melbourne, AU",
  },
  {
    role: "Accounting Intern",
    company: "Fluor Pvt. Ltd",
    date: "Dec 2024 – Feb 2025",
    location: "India",
  },
];

export default function Timeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end center"]
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section className="relative w-full bg-[#121212] py-20 px-6 lg:px-8 flex flex-col items-center z-10 overflow-hidden">
      <div className="max-w-5xl w-full" ref={containerRef}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-16 text-center flex flex-col items-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white">
            Experience
          </h2>
        </motion.div>

        <div className="relative flex flex-col pt-4">
          {/* Static Background Vertical Line */}
          <div className="absolute left-[28px] md:left-[30%] top-0 bottom-0 w-[1px] bg-white/[0.05] rounded-full z-0" />
          
          {/* Animated Scroll Progress Vertical Line */}
          <motion.div 
            style={{ height: lineHeight }}
            className="absolute left-[28px] md:left-[30%] top-0 w-[3px] bg-gradient-to-b from-[#d4b895] via-[#d4b895]/80 to-transparent -translate-x-[1px] rounded-full origin-top z-0 shadow-[0_0_15px_rgba(212,184,149,0.3)]"
          />

          <div className="space-y-8">
            {experiences.map((exp, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, delay: i * 0.1, ease: [0.21, 0.47, 0.32, 0.98] }}
                className="relative flex flex-col md:flex-row items-start group w-full z-10"
              >
                
                {/* Desktop Date (Left Side) */}
                <div className="hidden md:flex w-[30%] pr-12 justify-end pt-5">
                  <span className="text-sm md:text-base font-medium text-white/30 tracking-wider group-hover:text-[#d4b895] transition-colors duration-500">
                    {exp.date}
                  </span>
                </div>

                {/* Timeline Node (Center) */}
                <div className="absolute left-[28px] md:left-[30%] top-5 -translate-x-[10px] z-20 flex items-center justify-center">
                  <div className="w-[20px] h-[20px] rounded-full border border-white/10 bg-[#121212] flex items-center justify-center transition-all duration-500 group-hover:border-[#d4b895] group-hover:scale-110">
                    <div className="w-[6px] h-[6px] rounded-full bg-white/20 transition-all duration-500 group-hover:bg-[#d4b895] group-hover:shadow-[0_0_10px_rgba(212,184,149,1)]" />
                  </div>
                </div>
                
                {/* Mobile Date */}
                <div className="md:hidden pl-16 pb-2 pt-1">
                  <span className="text-xs font-semibold text-[#d4b895] tracking-wider uppercase">
                    {exp.date}
                  </span>
                </div>

                {/* Content Card (Right Side) */}
                <div className="w-full md:w-[70%] pl-16 md:pl-10">
                  <div className="relative w-full bg-white/[0.02] border border-white/[0.05] p-6 md:p-8 rounded-2xl flex flex-col transition-all duration-500 hover:bg-white/[0.04] hover:border-white/[0.15] hover:-translate-y-1 hover:shadow-[0_15px_30px_-15px_rgba(0,0,0,0.5)] overflow-hidden group/card">
                    
                    {/* Subtle internal gradient glow */}
                    <div className="absolute top-0 right-0 w-48 h-48 bg-[#d4b895]/10 rounded-full blur-[60px] -translate-y-1/2 translate-x-1/2 opacity-0 group-hover/card:opacity-100 transition-opacity duration-700 pointer-events-none" />
                    
                    <h3 className="text-xl md:text-2xl font-bold text-white mb-2 relative z-10 tracking-tight">
                      {exp.role}
                    </h3>
                    <div className="text-sm md:text-base text-white/50 font-medium flex flex-wrap items-center gap-2 relative z-10">
                      <span className="text-white/80">{exp.company}</span> 
                      <span className="w-1 h-1 rounded-full bg-[#d4b895]/50" /> 
                      {exp.location}
                    </div>
                  </div>
                </div>

              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
