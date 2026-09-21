import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import AiBackground from './components/AiBackground';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Education from './components/Education';
import Projects from './components/Projects';
import Services from './components/Services';
import Blogs from './components/Blogs';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="relative min-h-screen bg-[#0d0205] text-slate-100 selection:bg-slate-200 selection:text-maroon-950">
      {/* Top Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-slate-200 via-slate-400 to-rose-700 origin-left z-[100] shadow-[0_0_10px_rgba(226,232,240,0.5)]"
        style={{ scaleX }}
      />

      {/* Dynamic AI Canvas & Glow Background */}
      <AiBackground />

      {/* Main App Layout */}
      <div className="relative z-10">
        <Navbar />
        
        <main>
          <Hero />
          <About />
          <Experience />
          <Education />
          <Projects />
          <Services />
          <Blogs />
          <Contact />
        </main>

        <Footer />
      </div>
    </div>
  );
}

export default App;
