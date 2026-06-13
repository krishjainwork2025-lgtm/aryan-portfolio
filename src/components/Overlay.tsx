"use client";

import { motion, MotionValue, useTransform } from "framer-motion";

export default function Overlay({ scrollYProgress }: { scrollYProgress: MotionValue<number> }) {
  // Section 1: "Aryan Malhi" (Center)
  const opacity1 = useTransform(scrollYProgress, [0, 0.04, 0.08, 0.1], [1, 1, 0, 0]);
  const y1 = useTransform(scrollYProgress, [0, 0.1], [0, -50]);

  // Section 2: "Helping businesses..." (Left aligned)
  const opacity2 = useTransform(scrollYProgress, [0.15, 0.25, 0.4, 0.45], [0, 1, 1, 0]);
  const y2 = useTransform(scrollYProgress, [0.15, 0.45], [50, -50]);

  // Section 3: "Accounting / Finance / Strategy" (Right aligned)
  const opacity3 = useTransform(scrollYProgress, [0.5, 0.6, 0.8, 0.85], [0, 1, 1, 0]);
  const y3 = useTransform(scrollYProgress, [0.5, 0.85], [50, -50]);

  // Scroll Indicator fades out at the very end
  const scrollOpacity = useTransform(scrollYProgress, [0, 0.9, 1], [1, 1, 0]);

  return (
    <div className="absolute inset-0 pointer-events-none max-w-7xl mx-auto w-full">
      {/* Section 1 */}
      <motion.div
        initial={{ opacity: 1 }}
        style={{ opacity: opacity1, y: y1 }}
        className="absolute inset-0 flex flex-col items-center justify-center text-center px-6"
      >
        <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-white">
          Aryan Malhi
        </h1>
        <p className="mt-4 text-xl md:text-2xl text-[#d4b895] font-medium tracking-wide">
          Accounting & Finance Graduate
        </p>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 1 }}
        style={{ opacity: scrollOpacity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center justify-center pointer-events-none"
      >
        <span className="text-white/50 text-xs tracking-[0.3em] uppercase mb-2">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white/50">
            <polyline points="6 9 12 15 18 9"></polyline>
          </svg>
        </motion.div>
      </motion.div>

      {/* Section 2 */}
      <motion.div
        initial={{ opacity: 0 }}
        style={{ opacity: opacity2, y: y2 }}
        className="absolute inset-y-0 left-0 flex flex-col justify-center px-6 md:px-20 max-w-2xl pointer-events-auto"
      >
        <h2 className="text-3xl md:text-5xl font-medium text-white leading-tight">
          Helping businesses <br/> make <br/>
          <span className="text-white/50">informed decisions.</span>
        </h2>
      </motion.div>

      {/* Section 3 */}
      <motion.div
        initial={{ opacity: 0 }}
        style={{ opacity: opacity3, y: y3 }}
        className="absolute inset-y-0 right-0 flex flex-col justify-center px-6 md:px-20 max-w-2xl pointer-events-auto items-end text-right"
      >
        <div className="flex flex-col gap-2">
          <span className="text-3xl md:text-5xl font-medium text-white">Accounting</span>
          <span className="text-3xl md:text-5xl font-medium text-[#d4b895]">Finance</span>
          <span className="text-3xl md:text-5xl font-medium text-white/50">Strategy</span>
        </div>
      </motion.div>
    </div>
  );
}
