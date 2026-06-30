"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  const GithubIcon = ({ className }: { className?: string }) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
  );

  const LinkedinIcon = ({ className }: { className?: string }) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
  );

  const InstagramIcon = ({ className }: { className?: string }) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
  );

  const socialLinks = [
    { name: 'GitHub', icon: GithubIcon, url: 'https://github.com/MRKOsius' },
    { name: 'LinkedIn', icon: LinkedinIcon, url: 'https://linkedin.com/in/ar-rayyan-ramadhani' },
    { name: 'Instagram', icon: InstagramIcon, url: '#' }
  ];

  return (
    <section className="relative w-full h-[90vh] min-h-[700px] flex items-end justify-center mt-20 bg-cloud-pattern">

      {/* Teks Nama Besar (Background) */}
      <div className="absolute top-[20%] md:top-[30%] left-1/2 -translate-x-1/2 w-full text-center z-0 whitespace-nowrap flex flex-col md:flex-row items-center justify-center gap-0 md:gap-4 leading-tight">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-[14vw] md:text-[10vw] font-heading font-bold uppercase tracking-tight text-outline select-none leading-none"
        >
          AR-RAYYAN
        </motion.h1>
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-[14vw] md:text-[10vw] font-heading font-black uppercase tracking-tight text-[#0a0a0a] select-none leading-none -mt-4 md:mt-0"
        >
          RAMADHANI
        </motion.h1>
      </div>

      {/* Foto Profil Berdiri (Tanpa Frame agar menyatu) */}
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="relative z-10 w-[280px] md:w-[450px] h-[350px] md:h-[550px]"
      >
        <Image
          src="/assets/rayyan.webp"
          alt="Ar-rayyan Ramadhani"
          fill
          sizes="(max-width: 768px) 280px, 450px"
          priority
          className="object-contain object-bottom drop-shadow-2xl"
        />
      </motion.div>

      {/* Teks Deskripsi Kiri Bawah & Socmed Kanan Bawah */}
      <div className="absolute bottom-6 md:bottom-10 left-0 w-full flex flex-col md:flex-row justify-between items-center md:items-end z-20 pointer-events-none px-6 md:px-0 gap-6 md:gap-0">

        {/* Kiri: Deskripsi Profesi */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="max-w-sm pointer-events-auto text-center md:text-left flex flex-col items-center md:items-start"
        >
          <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-2 md:mb-3 block">
            Frontend Developer
          </h2>
          <p className="text-xs md:text-base text-gray-600 mb-4 md:mb-6 font-sans">
            S1 Teknik Informatika. Merancang pengalaman digital yang mulus, skalabel, dan efisien dengan teknologi modern.
          </p>
          <Link
            href="#journey"
            className="inline-flex items-center justify-center rounded-full bg-[#0a0a0a] px-5 py-2.5 text-xs md:text-sm md:px-6 md:py-3 font-medium text-white transition-transform hover:scale-105 active:scale-95"
          >
            Lihat Perjalanan <ArrowUpRight className="w-4 h-4 ml-2" />
          </Link>
        </motion.div>

        {/* Kanan: Social Links (Pill Stacked) */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="flex flex-row md:flex-col gap-2 md:gap-3 pointer-events-auto flex-wrap justify-center"
        >
          {socialLinks.map((social) => {
            const Icon = social.icon;
            return (
              <a
                key={social.name}
                href={social.url}
                target={social.url !== '#' ? "_blank" : undefined}
                rel={social.url !== '#' ? "noopener noreferrer" : undefined}
                className="flex items-center justify-center gap-2 md:gap-4 px-4 py-2 border border-gray-300 rounded-full hover:border-gray-900 transition-colors bg-white/80 backdrop-blur-sm shadow-sm font-medium text-gray-700 w-auto md:w-40 group"
              >
                <Icon className="w-4 h-4 md:w-5 md:h-5 text-gray-500 group-hover:text-black transition-colors shrink-0" />
                <span className="text-xs md:text-sm group-hover:text-black transition-colors hidden md:block">{social.name}</span>
              </a>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}
