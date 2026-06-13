"use client";

import { motion } from "framer-motion";

const tools = [
  { name: "Microsoft Excel", level: "ADVANCED", progress: 95 },
  { name: "Xero", level: "CERTIFIED", progress: 90 },
  { name: "Microsoft 365", level: "ADVANCED", progress: 85 },
  { name: "SAP", level: "INTERMEDIATE", progress: 65 },
  { name: "MYOB", level: "INTERMEDIATE", progress: 65 },
  { name: "POS/EFTPOS Systems", level: "INTERMEDIATE", progress: 60 },
];

const extraCurriculars = [
  {
    role: "Semi-Finalist, BCom Case Competition",
    org: "University of Melbourne | 2025",
    desc: "Developed and presented strategic business recommendations in a competitive case analysis environment",
  },
  {
    role: "FBE Peer Mentor",
    org: "University of Melbourne | 2024 – Present",
    desc: "Mentor 50+ first-year students through academic transition and campus orientation, providing one-on-one academic and career support",
  },
  {
    role: "Welfare Associate",
    org: "University of Melbourne Student Union | 2024 – Present",
    desc: "Coordinate student welfare initiatives and bi-weekly brunch programs serving 400+ students weekly",
  },
  {
    role: "Good Shepherd Financial Inclusion Initiative",
    org: "2025",
    desc: "Helped reduce financial access barriers for 60+ international students through financial literacy and support initiatives",
  },
];

export default function InfoGrid() {
  return (
    <section className="w-full bg-[#121212] py-20 px-6 lg:px-8 z-10 relative">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
        {/* LEFT COLUMN */}
        <div className="space-y-8 flex flex-col">
          {/* Education */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="bg-white/[0.02] border border-white/[0.05] p-8 md:p-10 rounded-2xl flex flex-col hover:bg-white/[0.04] transition-colors"
          >
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
              Education
            </h3>
            <h4 className="text-xl md:text-2xl font-bold text-white/90 mb-2">
              Bachelor of Commerce
            </h4>
            <p className="text-[#d4b895] font-medium mb-1">
              Accounting & Finance
            </p>
            <p className="text-white/40 text-sm">The University of Melbourne</p>
          </motion.div>

          {/* Tools */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-white/[0.02] border border-white/[0.05] p-8 md:p-10 rounded-2xl flex flex-col hover:bg-white/[0.04] transition-colors flex-grow"
          >
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-10">
              Tools & Software
            </h3>

            <div className="flex flex-col gap-6">
              {tools.map((tool, i) => (
                <div key={i} className="group cursor-default">
                  <div className="flex justify-between items-end mb-3">
                    <span className="text-white/90 font-medium text-lg transition-colors group-hover:text-white">{tool.name}</span>
                    <span className="text-white/30 text-xs font-semibold tracking-widest uppercase transition-colors group-hover:text-white/50">{tool.level}</span>
                  </div>
                  <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: `${tool.progress}%` }}
                      viewport={{ once: true, margin: "-50px" }}
                      transition={{ duration: 1, delay: i * 0.1, ease: "easeOut" }}
                      className="h-full bg-[#d4b895] rounded-full opacity-80 group-hover:opacity-100 transition-opacity"
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* RIGHT COLUMN */}
        <div className="space-y-8 flex flex-col">
          {/* Extra-Curriculars */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white/[0.02] border border-white/[0.05] p-8 md:p-10 rounded-2xl flex flex-col hover:bg-white/[0.04] transition-colors h-full"
          >
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-8">
              Extra-Curriculars
            </h3>

            <div className="space-y-10 flex-grow">
              {extraCurriculars.map((item, i) => (
                <div key={i} className="relative pl-6 before:absolute before:left-0 before:top-2 before:w-1.5 before:h-1.5 before:bg-[#d4b895]/50 before:rounded-full group hover:-translate-y-1 transition-transform duration-300">
                  <h4 className="text-lg font-bold text-white mb-1 group-hover:text-[#d4b895] transition-colors">
                    {item.role}
                  </h4>
                  <p className="text-sm font-medium text-white/70 mb-3">
                    {item.org}
                  </p>
                  <p className="text-sm text-white/40 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
