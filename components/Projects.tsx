"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { Project, PROJECTS_DATA } from "@/data/projects";

export default function Projects() {
  const [activeTab, setActiveTab] = useState<"All" | "Real Project" | "Exploration">("All");

  const filteredProjects = PROJECTS_DATA.filter((project) => 
    activeTab === "All" || project.category === activeTab
  );

  return (
    <section id="work" className="py-24 relative min-h-screen">
      
      {/* Background Watermark Teks */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-full text-center opacity-[0.03] pointer-events-none select-none z-0">
        <span className="text-[18vw] font-heading font-black tracking-widest leading-none">
          PORTFOLIO
        </span>
      </div>

      <div className="relative z-10">
        <h2 className="text-4xl md:text-5xl text-center font-heading font-bold mb-16 text-[#0a0a0a]">
          /SELECTED WORK
        </h2>

        {/* Filter / Kategori */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-6">
          <div className="flex items-center gap-6 font-sans font-medium text-gray-500">
            {["All", "Real Project", "Exploration"].map((tab) => (
              <button 
                key={tab}
                onClick={() => setActiveTab(tab as any)}
                className={`transition-colors cursor-pointer ${activeTab === tab ? "text-black border-b-2 border-black" : "hover:text-black"}`}
              >
                {tab}
              </button>
            ))}
          </div>
          <button 
            onClick={() => alert("Halaman Arsip Portofolio Belum Ditambahkan!")}
            className="flex items-center gap-2 border border-gray-300 rounded-full px-6 py-2 hover:bg-gray-100 active:scale-95 transition-all bg-white shadow-sm font-medium text-sm"
          >
            View All Work <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>

        {/* Grid Project Cards */}
        <AnimatePresence mode="wait">
          <motion.div 
            key={activeTab}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full"
          >
            {filteredProjects.map((project) => (
              <Link
                href={`/project/${project.id}`}
                key={project.id}
                className="group bg-white p-6 rounded-3xl border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300 w-full block"
              >
                <div className="w-full h-64 bg-gray-100 rounded-2xl mb-6 relative overflow-hidden group-hover:scale-[1.02] transition-transform duration-500 border border-gray-200 flex items-center justify-center">
                  <div className="absolute top-4 left-4 bg-white px-3 py-1 rounded-md text-xs font-bold text-gray-800 shadow-sm z-10 border border-gray-200 uppercase">
                    {project.category}
                  </div>
                  
                  {project.imageUrl ? (
                    <Image 
                      src={project.imageUrl} 
                      alt={project.title} 
                      fill 
                      className="object-cover" 
                      sizes="(max-width: 768px) 100vw, 50vw" 
                      priority
                    />
                  ) : (
                    <span className="text-gray-400 font-sans font-medium">{project.placeholderText}</span>
                  )}
                  
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center z-20">
                      <div className="bg-white p-3 rounded-full shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-transform">
                          <ArrowUpRight className="w-6 h-6 text-black" />
                      </div>
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-3 font-sans leading-snug group-hover:text-black">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-6 line-clamp-2">
                  {project.desc}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map(tag => (
                    <span key={tag} className="px-4 py-1.5 border border-gray-200 rounded-full text-xs font-semibold text-gray-600">
                      {tag}
                    </span>
                  ))}
                </div>
              </Link>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
