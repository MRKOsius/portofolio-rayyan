"use client";

import { motion } from "framer-motion";

import { JOURNEY_DATA } from "@/data/journey";

export default function Journey() {
  return (
    <section id="journey" className="py-24 relative">
      <div className="bg-[#0a0a0a] rounded-[2.5rem] p-8 md:p-16 lg:p-20 text-white min-h-[500px] border border-gray-800 shadow-2xl relative overflow-hidden">
        
        {/* Dekorasi tipis di background */}
        <div className="absolute top-0 left-0 w-full text-center opacity-[0.03] pointer-events-none select-none overflow-hidden">
          <span className="text-[15vw] font-heading font-black leading-none whitespace-nowrap">
            EXPERIENCE
          </span>
        </div>

        {/* Header Experience */}
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between mb-16 gap-6">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-gray-200">
            /JOURNEY
          </h2>
          <p className="text-gray-400 font-sans text-sm tracking-widest uppercase">
            Fresh Graduate S1 Teknik Informatika
          </p>
        </div>

        {/* List Perjalanan (Timeline) */}
        <div className="relative z-10 flex flex-col w-full border-t border-gray-800">
          {JOURNEY_DATA.map((item, idx) => (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              key={idx} 
              className="group flex flex-col md:flex-row justify-between items-start md:items-center py-8 border-b border-gray-800 hover:bg-white/5 transition-colors px-4 -mx-4 rounded-xl cursor-default"
            >
              <div className="flex flex-col mb-4 md:mb-0">
                <h3 className="text-2xl font-sans font-medium text-white mb-2 group-hover:text-gray-200 transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-500 font-sans">{item.role}</p>
              </div>
              
              <div className="text-gray-400 font-sans tabular-nums whitespace-nowrap">
                {item.period}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
