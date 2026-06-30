"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-6 max-w-7xl mx-auto w-full">
      {/* Kiri: Available Badge */}
      <div className="hidden md:flex items-center gap-2 bg-white/80 backdrop-blur-md border border-gray-200 px-4 py-2 rounded-full shadow-sm">
        <span className="w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse"></span>
        <span className="text-xs font-semibold tracking-wide text-gray-800 uppercase">
          Available for Hire
        </span>
      </div>

      {/* Tengah: Menu Links */}
      <div className="flex items-center gap-6 text-sm font-medium text-gray-800 bg-white/80 backdrop-blur-md px-6 py-3 rounded-full border border-gray-200 shadow-sm">
        <Link href="#work" className="hover:text-black hover:scale-105 transition-all">Work</Link>
        <Link href="#skills" className="hover:text-black hover:scale-105 transition-all">Skills</Link>
        <Link href="#journey" className="hover:text-black hover:scale-105 transition-all">Journey</Link>
        <Link href="#contact" className="hover:text-black hover:scale-105 transition-all">Contact</Link>
      </div>

      {/* Kanan: CTA Button */}
      <Link
        href="#contact"
        className="hidden md:flex items-center gap-2 bg-[#0a0a0a] text-white px-5 py-2.5 rounded-full text-sm font-medium hover:scale-105 transition-transform"
      >
        Let's Talk <ArrowUpRight className="w-4 h-4" />
      </Link>
    </nav>
  );
}
