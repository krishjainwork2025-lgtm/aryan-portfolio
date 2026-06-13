"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, X } from "lucide-react";
import Image from "next/image";

const projects = [
  {
    id: "agm",
    title: "AGM Accountants",
    category: "Business Accountant",
    content: (
      <div className="space-y-5 text-sm md:text-base">
        <div>
          <p className="opacity-60">Scope: 4+ SME business accounts | 100+ transactions/month</p>
        </div>
        
        <div>
          <h5 className="text-lg font-bold mb-1">Overview</h5>
          <p className="opacity-70 leading-relaxed">
            Managed full-cycle bookkeeping and bank reconciliations across multiple SME business accounts, ensuring accuracy, compliance, and timely reporting.
          </p>
        </div>

        <div>
          <h5 className="text-lg font-bold mb-2">Key Contributions</h5>
          <ul className="list-disc list-outside ml-5 space-y-2 opacity-70 leading-relaxed marker:text-[#d4b895]">
            <li>Processed 100+ transactions per month across 4+ accounts with a 99%+ accuracy rate</li>
            <li>Prepared and reviewed monthly financial statements and management reports</li>
            <li>Supported GST/BAS compliance and accounts payable/receivable processing, reducing outstanding creditor balances by 20%</li>
            <li>Identified and resolved discrepancies in financial data, ensuring clean audit trails</li>
          </ul>
        </div>

        <div>
          <h5 className="text-lg font-bold mb-1">Outcome</h5>
          <p className="opacity-70 leading-relaxed">
            Ensured accurate financial reporting and strengthened compliance processes for decision-making.
          </p>
        </div>
      </div>
    ),
    logo: "/logos/6.png"
  },
  {
    id: "auswise",
    title: "AusWISE",
    category: "Project Lead Intern",
    content: (
      <div className="space-y-5 text-sm md:text-base">
        <div>
          <p className="opacity-60">Scope: 5+ events | 100+ attendees per event | Team of 8</p>
        </div>
        
        <div>
          <h5 className="text-lg font-bold mb-1">Overview</h5>
          <p className="opacity-70 leading-relaxed">
            Led end-to-end logistics and operational coordination for employability and accounting-focused events.
          </p>
        </div>

        <div>
          <h5 className="text-lg font-bold mb-2">Key Contributions</h5>
          <ul className="list-disc list-outside ml-5 space-y-2 opacity-70 leading-relaxed marker:text-[#d4b895]">
            <li>Managed scheduling, stakeholder communications, and planning documentation across a team of 8</li>
            <li>Served as primary liaison between internal teams and 3 external partner organisations to ensure on-time delivery</li>
            <li>Maintained project trackers covering 15+ active workstreams, reducing reporting turnaround time by 30%</li>
          </ul>
        </div>

        <div>
          <h5 className="text-lg font-bold mb-1">Outcome</h5>
          <p className="opacity-70 leading-relaxed">
            Enabled seamless execution of large-scale events through structured coordination and improved operational efficiency.
          </p>
        </div>
      </div>
    ),
    logo: "/logos/3.png",
    images: ["/logos/3.png", "/projects/auswise/1000032939.jpg", "/projects/auswise/1000037303.png", "/projects/auswise/Screenshot 2026-06-13 at 1.57.54 pm.png"]
  },
  {
    id: "caanz",
    title: "Chartered Accountants ANZ",
    category: "Professional Development",
    content: (
      <div className="space-y-5 text-sm md:text-base">
        <div>
          <p className="opacity-60">Scope: 11 tracks | 3-year dataset (2017–2019) | 1.1B+ YouTube views analysed</p>
        </div>
        
        <div>
          <h5 className="text-lg font-bold mb-1">Overview</h5>
          <p className="opacity-70 leading-relaxed">
            Performed streaming revenue analysis and financial forecasting as part of a Chartered Accountants ANZ job simulation, using Excel-based modelling.
          </p>
        </div>

        <div>
          <h5 className="text-lg font-bold mb-2">Key Contributions</h5>
          <ul className="list-disc list-outside ml-5 space-y-2 opacity-70 leading-relaxed marker:text-[#d4b895]">
            <li>Processed YouTube view data across 11 tracks to calculate total album revenue of $3.58M–$7.74M and a 20% platform cut ranging up to $1.55M</li>
            <li>Calculated year-on-year growth rates of 37.4% and 57.2%, analysing a cumulative 1.1B+ views to identify revenue acceleration trends</li>
            <li>Developed a 3-year financial forecast using growth-rate modelling in Excel, projecting views to grow from 1.6B to 3.5B</li>
          </ul>
        </div>

        <div>
          <h5 className="text-lg font-bold mb-1">Outcome</h5>
          <p className="opacity-70 leading-relaxed">
            Delivered data-driven revenue insights and forecasting models to support strategic financial analysis.
          </p>
        </div>
      </div>
    ),
    logo: "/logos/4.png",
    images: ["/logos/4.png", "/projects/caanz/1.png"]
  },
  {
    id: "tektonic",
    title: "Tektonic Labs",
    category: "Business Accountant",
    content: (
      <div className="space-y-5 text-sm md:text-base">
        <div>
          <p className="opacity-60">Scope: 30+ SME clients | turnovers up to $5M</p>
        </div>
        
        <div>
          <h5 className="text-lg font-bold mb-1">Overview</h5>
          <p className="opacity-70 leading-relaxed">
            Executed bank reconciliations and supported month-end close activities across multiple SME clients.
          </p>
        </div>

        <div>
          <h5 className="text-lg font-bold mb-2">Key Contributions</h5>
          <ul className="list-disc list-outside ml-5 space-y-2 opacity-70 leading-relaxed marker:text-[#d4b895]">
            <li>Maintained 100% accuracy in bank reconciliations for 30+ SME clients with annual turnovers up to $5M</li>
            <li>Assisted with journal entries, reconciliation reviews, and bookkeeping adjustments for on-time financial reporting</li>
            <li>Supported GST/BAS compliance, flagging and resolving 10+ data discrepancies prior to client submission</li>
          </ul>
        </div>

        <div>
          <h5 className="text-lg font-bold mb-1">Outcome</h5>
          <p className="opacity-70 leading-relaxed">
            Ensured accurate and timely financial reporting while maintaining high compliance standards.
          </p>
        </div>
      </div>
    ),
    logo: "/logos/5.png"
  }
];

export default function Projects() {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  // Prevent background scrolling when modal is open
  useEffect(() => {
    setActiveImageIndex(0); // Reset index when modal opens/closes
    if (selectedId) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [selectedId]);

  return (
    <section className={`relative w-full bg-[#121212] py-32 px-6 lg:px-8 flex flex-col items-center ${selectedId ? "z-50" : "z-10"}`}>
      <div className="max-w-5xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6">
            Projects
          </h2>
          <p className="text-lg text-white/50 max-w-2xl">
            A collection of my selected projects in the accounting & finance sector.
          </p>
        </motion.div>

        {/* 2x2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
          {projects.map((project) => (
            <motion.div
              layoutId={`card-${project.id}`}
              key={project.id}
              onClick={() => setSelectedId(project.id)}
              className="group relative overflow-hidden rounded-3xl cursor-pointer aspect-square md:aspect-[4/3] flex flex-col items-center justify-center bg-[#161616]"
              whileHover={{ scale: 0.98 }}
              transition={{ duration: 0.4 }}
            >
              {/* Full Background Image */}
              <motion.div layoutId={`logo-${project.id}`} className="absolute inset-0 w-full h-full z-0 transition-transform duration-700 group-hover:scale-105">
                <Image 
                  src={project.logo} 
                  alt={project.title} 
                  fill 
                  className="object-cover" 
                  priority
                />
              </motion.div>

              {/* Hover Text Reveal */}
              <div className="absolute inset-0 p-6 lg:p-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end">
                <div className="flex justify-between items-end">
                  <div>
                    <p className="text-xs font-semibold text-white/80 tracking-widest uppercase mb-1">{project.category}</p>
                    <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-md">
                    <ArrowUpRight className="w-5 h-5 text-white" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Expandable Modal */}
      <AnimatePresence>
        {selectedId && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedId(null)}
              className="fixed inset-0 bg-[#121212]/90 z-40 backdrop-blur-md cursor-pointer"
            />
            
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-10 pointer-events-none">
              {projects.filter(p => p.id === selectedId).map(project => (
                <motion.div
                  layoutId={`card-${project.id}`}
                  key="modal"
                  className="w-full max-w-5xl max-h-[90vh] overflow-hidden rounded-[2rem] bg-[#161616] pointer-events-auto shadow-2xl flex flex-col md:flex-row relative"
                >
                  <button 
                    onClick={() => setSelectedId(null)}
                    className="absolute top-6 right-6 z-50 w-12 h-12 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center transition-colors text-white"
                  >
                    <X className="w-6 h-6" />
                  </button>

                  {/* Modal Logo Side (Full Image Carousel with Buttons) */}
                  <div className="w-full md:w-1/2 min-h-[300px] md:min-h-[500px] relative overflow-hidden rounded-t-[2rem] md:rounded-l-[2rem] md:rounded-tr-none bg-white/5 flex items-center justify-center">
                    {project.images && project.images.length > 0 ? (
                      <>
                        <AnimatePresence mode="wait">
                          <motion.div
                            key={activeImageIndex}
                            layoutId={activeImageIndex === 0 ? `logo-${project.id}` : undefined}
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            transition={{ duration: 0.3 }}
                            className="absolute inset-0 w-full h-full p-8 md:p-12"
                          >
                            <Image 
                              src={project.images[activeImageIndex]} 
                              alt={`${project.title} - Image ${activeImageIndex + 1}`} 
                              fill 
                              className="object-contain" 
                              priority 
                            />
                          </motion.div>
                        </AnimatePresence>
                        
                        {/* Navigation Controls */}
                        {project.images.length > 1 && (
                          <div className="absolute inset-x-0 bottom-6 flex justify-center items-center gap-6 z-20">
                            <button
                              onClick={() => setActiveImageIndex(prev => prev > 0 ? prev - 1 : project.images!.length - 1)}
                              className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md flex items-center justify-center text-white transition-colors"
                            >
                              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>
                            </button>
                            
                            <div className="flex gap-2 bg-black/40 backdrop-blur-md px-3 py-1.5 rounded-full">
                              {project.images.map((_, idx) => (
                                <div key={idx} className={`w-2 h-2 rounded-full transition-colors ${idx === activeImageIndex ? "bg-[#d4b895]" : "bg-white/30"}`} />
                              ))}
                            </div>

                            <button
                              onClick={() => setActiveImageIndex(prev => prev < project.images!.length - 1 ? prev + 1 : 0)}
                              className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md flex items-center justify-center text-white transition-colors"
                            >
                              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
                            </button>
                          </div>
                        )}
                      </>
                    ) : (
                      <motion.div layoutId={`logo-${project.id}`} className="absolute inset-0 w-full h-full p-8 md:p-12">
                        <Image 
                          src={project.logo} 
                          alt={project.title} 
                          fill 
                          className="object-contain" 
                          priority
                        />
                      </motion.div>
                    )}
                  </div>
                  
                  {/* Modal Text Side */}
                  <div className="w-full md:w-1/2 p-10 md:p-16 overflow-y-auto text-white bg-[#161616]">
                    <motion.p 
                      initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
                      className="text-sm font-semibold tracking-widest uppercase mb-3 text-[#d4b895]"
                    >
                      {project.category}
                    </motion.p>
                    <motion.h3 
                      initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
                      className="text-4xl md:text-5xl font-bold mb-6"
                    >
                      {project.title}
                    </motion.h3>
                    <motion.div 
                      initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}
                      className="w-12 h-1 bg-[#d4b895] opacity-50 mb-6 rounded-full" 
                    />
                    <motion.div 
                      initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}
                      className="text-base md:text-lg opacity-90 leading-relaxed"
                    >
                      {project.content}
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}
