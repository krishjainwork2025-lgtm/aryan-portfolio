"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Phone } from "lucide-react";

const LinkedinIcon = ({ className }: { className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="24" 
    height="24" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export default function Footer() {
  return (
    <footer className="w-full bg-[#121212] pt-32 pb-10 px-6 lg:px-8 z-10 relative overflow-hidden">
      
      {/* Background massive glow */}
      <div className="absolute bottom-0 left-1/2 w-[800px] h-[400px] bg-[#d4b895]/5 rounded-full blur-[120px] -translate-x-1/2 translate-y-1/2 pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10 flex flex-col items-center text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-8xl font-bold text-white mb-20 tracking-tighter"
        >
          Let's <span className="text-[#d4b895]">Connect.</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 w-full max-w-4xl mb-24">
          
          {/* Location */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex flex-col items-center gap-4 group"
          >
            <div className="w-14 h-14 rounded-full bg-white/5 flex items-center justify-center border border-white/10 transition-colors duration-500 group-hover:bg-[#d4b895]/10 group-hover:border-[#d4b895]/50 group-hover:shadow-[0_0_20px_rgba(212,184,149,0.3)]">
              <MapPin className="w-6 h-6 text-white/50 group-hover:text-[#d4b895] transition-colors duration-500" />
            </div>
            <span className="text-white/70 font-medium">Melbourne, VIC</span>
          </motion.div>

          {/* Email */}
          <motion.a 
            href="mailto:aryanmalhi29@gmail.com"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-col items-center gap-4 group"
          >
            <div className="w-14 h-14 rounded-full bg-white/5 flex items-center justify-center border border-white/10 transition-colors duration-500 group-hover:bg-[#d4b895]/10 group-hover:border-[#d4b895]/50 group-hover:shadow-[0_0_20px_rgba(212,184,149,0.3)]">
              <Mail className="w-6 h-6 text-white/50 group-hover:text-[#d4b895] transition-colors duration-500" />
            </div>
            <span className="text-white/70 font-medium transition-colors group-hover:text-white">aryanmalhi29@gmail.com</span>
          </motion.a>

          {/* Phone */}
          <motion.a 
            href="tel:0430524979"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex flex-col items-center gap-4 group"
          >
            <div className="w-14 h-14 rounded-full bg-white/5 flex items-center justify-center border border-white/10 transition-colors duration-500 group-hover:bg-[#d4b895]/10 group-hover:border-[#d4b895]/50 group-hover:shadow-[0_0_20px_rgba(212,184,149,0.3)]">
              <Phone className="w-6 h-6 text-white/50 group-hover:text-[#d4b895] transition-colors duration-500" />
            </div>
            <span className="text-white/70 font-medium transition-colors group-hover:text-white">0430 524 979</span>
          </motion.a>

          {/* LinkedIn */}
          <motion.a 
            href="https://www.linkedin.com/in/aryan-malhi-42864a253"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="flex flex-col items-center gap-4 group"
          >
            <div className="w-14 h-14 rounded-full bg-white/5 flex items-center justify-center border border-white/10 transition-colors duration-500 group-hover:bg-[#d4b895]/10 group-hover:border-[#d4b895]/50 group-hover:shadow-[0_0_20px_rgba(212,184,149,0.3)]">
              <LinkedinIcon className="w-6 h-6 text-white/50 group-hover:text-[#d4b895] transition-colors duration-500" />
            </div>
            <span className="text-white/70 font-medium transition-colors group-hover:text-white">LinkedIn</span>
          </motion.a>

        </div>

        <div className="w-full flex flex-col md:flex-row items-center justify-between border-t border-white/10 pt-8 text-sm text-white/30">
          <p>© {new Date().getFullYear()} Aryan Malhi. All rights reserved.</p>
          <p className="mt-2 md:mt-0">Designed & Built with passion.</p>
        </div>
      </div>
    </footer>
  );
}
