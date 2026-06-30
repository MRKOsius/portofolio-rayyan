"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Copy, CheckCircle2, MessageCircle, X } from "lucide-react";

export default function Contact() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const GithubIcon = ({ className }: { className?: string }) => (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" /><path d="M9 18c-4.51 2-5-2-7-2" /></svg>
    );

    const LinkedinIcon = ({ className }: { className?: string }) => (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg>
    );

    const InstagramIcon = ({ className }: { className?: string }) => (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg>
    );

    const socialLinks = [
        { name: 'GitHub', icon: GithubIcon, url: 'https://github.com/MRKOsius' },
        { name: 'LinkedIn', icon: LinkedinIcon, url: 'https://linkedin.com/in/ar-rayyan-ramadhani' },
        { name: 'Instagram', icon: InstagramIcon, url: '#' }
    ];

    return (
        <section id="contact" className="py-32 relative flex flex-col justify-center items-center text-center px-4">

            {/* Badge Available */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-md border border-gray-200 px-4 py-2 rounded-full shadow-sm mb-10"
            >
                <span className="w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse"></span>
                <span className="text-xs font-semibold tracking-wide text-gray-800 uppercase">
                    Available for New Project
                </span>
            </motion.div>

            {/* Huge Heading */}
            <motion.h2
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-[8vw] md:text-[6vw] font-heading font-bold text-[#0a0a0a] leading-tight max-w-5xl tracking-tight"
            >
                HAVE A PROJECT IN MIND?
            </motion.h2>

            {/* Subtitle */}
            <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-lg md:text-xl text-gray-600 mt-6 max-w-2xl font-sans"
            >
                Mari buat sesuatu yang jelas dan berdampak. Saya siap berkolaborasi untuk merancang pengalaman digital yang inovatif.
            </motion.p>

            {/* CTA Button Pembuka Modal */}
            <motion.button
                onClick={() => setIsModalOpen(true)}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="mt-12 inline-flex items-center justify-center rounded-full bg-[#0a0a0a] px-10 py-5 text-white hover:scale-105 active:scale-95 transition-transform font-medium shadow-xl shadow-black/10 cursor-pointer"
            >
                Contact Me <ArrowUpRight className="w-5 h-5 ml-2" />
            </motion.button>

            {/* Horizontal Social Links */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: true }}
                className="mt-24 flex flex-wrap justify-center gap-4 border-t border-gray-200 pt-10 px-4 w-full"
            >
                <a href="#" className="flex items-center gap-3 px-6 py-3 bg-black text-white rounded-full hover:scale-105 transition-transform text-sm font-medium shadow-sm">
                    <div className="w-5 h-5 rounded-full bg-white text-black flex items-center justify-center text-[10px] font-bold">AR</div>
                    Ar-rayyan Ramadhani
                </a>

                {socialLinks.map((social) => {
                    const Icon = social.icon;
                    return (
                        <a 
                            key={social.name} 
                            href={social.url} 
                            target={social.url !== '#' ? "_blank" : undefined} 
                            rel={social.url !== '#' ? "noopener noreferrer" : undefined}
                            aria-label={social.name}
                            className="flex items-center gap-3 px-6 py-3 bg-white text-gray-800 rounded-full hover:scale-105 transition-transform text-sm font-medium border border-gray-200 shadow-sm group"
                        >
                            <Icon className="w-5 h-5 text-gray-600 group-hover:text-black transition-colors" />
                            <span className="hidden md:inline">{social.name}</span>
                        </a>
                    );
                })}
            </motion.div>

            {/* Modal Overlay & Card */}
            <AnimatePresence>
                {isModalOpen && (
                    <motion.div
                        initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
                        animate={{ opacity: 1, backdropFilter: "blur(8px)" }}
                        exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
                        className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4"
                        onClick={() => setIsModalOpen(false)}
                    >
                        <motion.div
                            initial={{ scale: 0.95, y: 20, opacity: 0 }}
                            animate={{ scale: 1, y: 0, opacity: 1 }}
                            exit={{ scale: 0.95, y: 20, opacity: 0 }}
                            transition={{ type: "spring", duration: 0.5 }}
                            onClick={(e) => e.stopPropagation()}
                            className="relative w-full max-w-lg bg-white rounded-3xl p-8 shadow-2xl border border-gray-100 flex flex-col items-start text-left"
                        >
                            <button
                                onClick={() => setIsModalOpen(false)}
                                aria-label="Tutup Modal"
                                className="absolute top-6 right-6 p-2 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors"
                            >
                                <X className="w-5 h-5 text-gray-600" />
                            </button>

                            <h3 className="text-3xl font-heading font-bold text-gray-900 mb-2">Let's Talk</h3>
                            <p className="text-gray-500 font-sans mb-8 leading-relaxed">
                                Tertarik bekerja sama atau hanya ingin menyapa? Hubungi saya secara langsung melalui opsi di bawah.
                            </p>

                            <div className="flex flex-col w-full gap-4">
                                {/* Opsi Email */}
                                <div className="flex flex-col gap-2">
                                    <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">Email Pribadi</span>
                                    <a
                                        href="https://mail.google.com/mail/?view=cm&fs=1&to=ramadhaniarrayyan@gmail.com"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="group flex items-center justify-between p-4 rounded-2xl border border-gray-200 hover:border-gray-800 hover:bg-gray-50 transition-all w-full text-left"
                                    >
                                        <div className="flex items-center gap-3">
                                            <span className="font-sans font-medium text-gray-900 truncate">
                                                ramadhaniarrayyan@gmail.com
                                            </span>
                                        </div>
                                        <ArrowUpRight className="w-5 h-5 text-gray-400 group-hover:text-black shrink-0 transition-colors" />
                                    </a>
                                </div>

                                {/* Opsi WhatsApp */}
                                <div className="flex flex-col gap-2 mt-4 pt-4 border-t border-gray-100">
                                    <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">Kirim Pesan WhatsApp</span>
                                    <form 
                                        className="flex flex-col w-full gap-3 mt-1"
                                        onSubmit={(e) => {
                                            e.preventDefault();
                                            const formData = new FormData(e.currentTarget);
                                            const name = formData.get("name");
                                            const message = formData.get("message");
                                            const text = `Halo Rayyan, perkenalkan saya ${name}. \n\n${message}`;
                                            window.open(`https://wa.me/6285378369945?text=${encodeURIComponent(text)}`, '_blank');
                                        }}
                                    >
                                        <input 
                                            type="text" 
                                            name="name" 
                                            required
                                            placeholder="Nama Anda" 
                                            className="p-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-black transition-all text-sm text-gray-900 w-full"
                                        />
                                        
                                        <textarea 
                                            name="message" 
                                            required
                                            rows={3}
                                            placeholder="Tuliskan tujuan / tawaran Anda di sini..." 
                                            className="p-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-black transition-all resize-none text-sm text-gray-900 w-full"
                                        ></textarea>

                                        <button 
                                            type="submit"
                                            className="w-full flex items-center justify-center p-3 rounded-xl bg-[#0a0a0a] text-white hover:bg-gray-800 transition-colors font-medium cursor-pointer group hover:scale-[1.02] active:scale-[0.98] duration-200 shadow-lg shadow-black/10"
                                        >
                                            Kirim via WhatsApp <MessageCircle className="w-[18px] h-[18px] ml-2 text-green-400 group-hover:scale-110 transition-transform" />
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

        </section>
    );
}
