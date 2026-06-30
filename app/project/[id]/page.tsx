import { PROJECTS_DATA } from "@/data/projects";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Code, ExternalLink } from "lucide-react";

export default async function ProjectDetail({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  
  // Mencari proyek berdasarkan ID dari URL
  const project = PROJECTS_DATA.find((p) => p.id === resolvedParams.id);

  if (!project) notFound();

  return (
    <main className="relative min-h-screen bg-[#FAFAFA] bg-cloud-pattern pb-32 pt-32 overflow-hidden">
      
      {/* Background Watermark Teks (Design System) */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-full text-center opacity-[0.03] pointer-events-none select-none z-0 flex justify-center overflow-hidden">
        <span className="text-[12vw] font-heading font-black tracking-widest leading-none whitespace-nowrap">
          CASE STUDY
        </span>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        
        {/* Navigation Bar Khusus Project */}
        <div className="flex items-center justify-between mb-12">
          <Link 
            href="/#work" 
            className="inline-flex items-center gap-2 bg-white/60 backdrop-blur-md border border-gray-200 px-6 py-3 rounded-full text-gray-600 hover:text-black hover:bg-white hover:shadow-sm font-medium font-sans transition-all"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Portfolio
          </Link>
          
          <span className="bg-white/60 backdrop-blur-md text-gray-600 px-5 py-2 rounded-full text-xs font-bold uppercase border border-gray-200 tracking-widest hidden md:inline-block">
            {project.category}
          </span>
        </div>
        
        {/* Header Section */}
        <div className="max-w-4xl mb-12">
          <h1 className="text-5xl md:text-7xl font-heading font-black text-gray-900 mb-6 leading-[1.1] tracking-tight">
            {project.title}
          </h1>
          
          <div className="flex flex-wrap items-center gap-2 mb-8">
            <span className="text-sm font-semibold text-gray-500 mr-2 py-1.5 font-sans uppercase tracking-widest">Tech Stack</span>
            {project.tags.map((tag) => (
              <span key={tag} className="px-4 py-1.5 bg-gray-200/60 text-gray-800 rounded-full text-xs font-semibold tracking-wide">
                {tag}
              </span>
            ))}
          </div>
        </div>
        
        {/* Featured Image (Standalone, No Card Wrapper) */}
        <div className="w-full rounded-[2.5rem] overflow-hidden shadow-2xl relative mb-20 border border-gray-200/50 bg-gray-100 flex items-center justify-center group">
            {project.imageUrl ? (
              <Image 
                src={project.imageUrl} 
                alt={project.title} 
                width={1920}
                height={1080}
                className="w-full h-auto group-hover:scale-[1.03] transition-transform duration-1000" 
                priority 
              />
            ) : (
              <span className="text-3xl font-heading font-bold text-gray-400 opacity-50 uppercase tracking-widest text-center px-4">
                {project.placeholderText}
              </span>
            )}
        </div>

        {/* Content Body Area */}
        <div className="max-w-4xl pb-10">
          <h2 className="text-2xl font-bold font-sans text-gray-900 mb-6">About the Project</h2>
          <p className="text-gray-700 font-sans leading-relaxed text-xl md:text-2xl mb-12">
            {project.fullDesc}
          </p>

          {/* Call to Action Buttons */}
          <div className="flex flex-wrap items-center gap-4 lg:gap-6 pt-6">
            {project.demoUrl && (
              <a 
                href={project.demoUrl} 
                target="_blank" 
                className="flex items-center justify-center gap-2 px-10 py-5 bg-[#0a0a0a] hover:bg-gray-800 text-white font-bold rounded-full transition-all hover:-translate-y-1 active:scale-95 shadow-xl shadow-black/20 font-sans text-lg"
              >
                <ExternalLink className="w-5 h-5" /> Visit Live Project
              </a>
            )}
            <a 
              href={project.repoUrl} 
              target="_blank" 
              className="flex items-center justify-center gap-2 px-10 py-5 border-2 border-gray-200 hover:border-gray-900 text-gray-800 font-bold rounded-full transition-all hover:-translate-y-1 active:scale-95 bg-white shadow-sm font-sans text-lg"
            >
              <Code className="w-5 h-5" /> Source Code
            </a>
          </div>
        </div>

      </div>
    </main>
  );
}
