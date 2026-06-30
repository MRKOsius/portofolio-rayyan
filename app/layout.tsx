import type { Metadata } from "next";
import { Inter, Oswald } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

const oswald = Oswald({ subsets: ['latin'], variable: '--font-oswald' });

export const metadata: Metadata = {
  title: 'Ar-rayyan Ramadhani | Frontend Developer',
  description: 'Portofolio of Ar-rayyan Ramadhani, a Frontend Developer specialized in React, Next.js, and Python',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className="scroll-smooth" data-scroll-behavior="smooth">
      <body className={`${inter.variable} ${oswald.variable} font-sans bg-[#fafafa] text-gray-900 antialiased`}>
        {children}
      </body>
    </html>
  );
}
