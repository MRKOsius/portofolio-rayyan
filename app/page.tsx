import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Journey from '@/components/Journey';
import Contact from '@/components/Contact';

export default function Home() {
  return (
    <main className="min-h-screen bg-cloud-pattern relative overflow-hidden bg-[#fafafa]">
      <Navbar />
      <div className="max-w-7xl mx-auto px-6">
        <Hero />
        <Projects />
        <Skills />
        <Journey />
        <Contact />
      </div>
    </main>
  );
}
