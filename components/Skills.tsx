"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, X } from "lucide-react";

import { SKILLS_DATA } from "@/data/skills";

export default function Skills() {
  const [activeAccordion, setActiveAccordion] = useState<string | null>("frontend");

  const toggleAccordion = (id: string) => {
    setActiveAccordion((prev) => (prev === id ? null : id));
  };

  return (
    <section id="skills" className="py-24 relative">
      <h2 className="text-3xl font-heading font-medium mb-12 text-[#0a0a0a]">
        /SKILLS
      </h2>

      <div className="flex flex-col border-t border-gray-300">
        {SKILLS_DATA.map((category) => {
          const isActive = activeAccordion === category.id;

          return (
            <div key={category.id} className="border-b border-gray-300">
              {/* Header Accordion */}
              <button
                onClick={() => toggleAccordion(category.id)}
                className={`w-full text-left py-6 px-4 flex items-center justify-between transition-colors ${isActive ? "hidden" : "hover:bg-gray-100"
                  }`}
              >
                <span className="text-3xl md:text-5xl font-heading font-normal text-gray-800">
                  {category.title}
                </span>
                <ArrowUpRight className="w-8 h-8 text-gray-400" />
              </button>

              {/* Isi Accordion (Expanded) */}
              <AnimatePresence>
                {isActive && (
                  <motion.div
                    initial={{ height: 0, opacity: 0, filter: "blur(4px)" }}
                    animate={{ height: "auto", opacity: 1, filter: "blur(0px)" }}
                    exit={{ height: 0, opacity: 0, filter: "blur(4px)" }}
                    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    className="overflow-hidden"
                  >
                    <motion.div
                      initial={{ y: 40, opacity: 0, scale: 0.98 }}
                      animate={{ y: 0, opacity: 1, scale: 1 }}
                      exit={{ y: 20, opacity: 0, scale: 0.98 }}
                      transition={{ duration: 0.5, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
                      className="bg-[#0a0a0a] text-white p-8 md:p-12 mt-2 mb-10 rounded-[2.5rem] relative flex flex-col md:flex-row gap-8 items-start justify-between shadow-2xl border border-gray-800"
                    >
                      <div className="max-w-xl">
                        <h3 className="text-3xl md:text-5xl font-heading font-medium mb-4">
                          {category.title}
                        </h3>
                        <p className="text-gray-400 text-lg mb-8 font-sans">
                          {category.desc}
                        </p>
                      </div>

                      {/* Kotak Badges */}
                      <div className="bg-[#1a1a1a] rounded-3xl p-6 border border-gray-800 w-full md:w-auto relative overflow-hidden group">

                        <h4 className="text-sm text-gray-500 uppercase tracking-widest mb-4">
                          Stack Utama
                        </h4>

                        <div className="flex flex-wrap gap-2">
                          {category.skills.map((skill, index) => (
                            <motion.span
                              key={skill}
                              initial={{ opacity: 0, x: -15 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.4, delay: 0.2 + (index * 0.07), ease: "easeOut" }}
                              className="px-4 py-2 border border-gray-700 bg-black hover:bg-gray-800 hover:border-gray-500 transition-colors rounded-full text-sm font-medium cursor-default shadow-sm"
                            >
                              {skill}
                            </motion.span>
                          ))}
                        </div>
                      </div>

                      <button
                        onClick={() => toggleAccordion(category.id)}
                        className="absolute top-8 right-8 text-gray-500 hover:text-white transition-colors"
                      >
                        <X className="w-8 h-8" />
                      </button>
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </section>
  );
}
