"use client";

import { motion } from "framer-motion";

const row1 = [
  "Xero Certified Advisor (Level 1)",
  "Responsible Service of Alcohol (RSA)",
  "Food Safety Certificate",
  "Working With Children Check (WWCC)",
];

const row2 = [
  "Melbourne Plus – Leadership",
  "Melbourne Plus – Innovation",
  "Melbourne Plus – Community Engagement",
  "Barista Certificate",
];

export default function Certifications() {
  const row1Duplicated = [...row1, ...row1, ...row1, ...row1];
  const row2Duplicated = [...row2, ...row2, ...row2, ...row2];

  return (
    <section className="w-full bg-[#121212] py-16 z-10 relative overflow-hidden border-t border-white/[0.05]">
      <div className="flex flex-col items-center mb-8">
        <motion.h3 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-bold text-white text-center"
        >
          Certifications
        </motion.h3>
      </div>

      <div className="relative w-full flex flex-col gap-6">
        
        {/* Row 1: Left to Right */}
        <div className="w-full overflow-hidden flex">
          <motion.div
            className="flex gap-6 whitespace-nowrap w-max"
            animate={{ x: ["-25%", "0%"] }}
            transition={{ repeat: Infinity, ease: "linear", duration: 30 }}
          >
            {row1Duplicated.map((cert, i) => (
              <div
                key={i}
                className="px-8 py-5 rounded-2xl border border-white/10 bg-white/[0.02] text-white/80 text-sm md:text-base font-medium transition-colors hover:bg-white/10 hover:border-[#d4b895]/50 hover:text-white"
              >
                {cert}
              </div>
            ))}
          </motion.div>
        </div>

        {/* Row 2: Right to Left */}
        <div className="w-full overflow-hidden flex">
          <motion.div
            className="flex gap-6 whitespace-nowrap w-max"
            animate={{ x: ["0%", "-25%"] }}
            transition={{ repeat: Infinity, ease: "linear", duration: 25 }}
          >
            {row2Duplicated.map((cert, i) => (
              <div
                key={i}
                className="px-8 py-5 rounded-2xl border border-white/10 bg-white/[0.02] text-white/80 text-sm md:text-base font-medium transition-colors hover:bg-white/10 hover:border-[#d4b895]/50 hover:text-white"
              >
                {cert}
              </div>
            ))}
          </motion.div>
        </div>

        {/* Gradients to fade edges */}
        <div className="absolute inset-y-0 left-0 w-24 md:w-64 bg-gradient-to-r from-[#121212] to-transparent pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-24 md:w-64 bg-gradient-to-l from-[#121212] to-transparent pointer-events-none" />

      </div>
    </section>
  );
}
