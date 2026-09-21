import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight, Sparkles, Send } from 'lucide-react';

const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Education', href: '#education' },
  { name: 'Projects', href: '#projects' },
  { name: 'Services', href: '#services' },
  { name: 'Blogs', href: '#blogs' },
  { name: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      // Determine active section
      const sections = navItems.map((item) => item.href.replace('#', ''));
      const scrollPos = window.scrollY + 250;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'py-3 bg-[#130307]/90 backdrop-blur-xl border-b border-slate-400/20 shadow-[0_10px_30px_rgba(0,0,0,0.6)]'
          : 'py-6 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo with User Portrait */}
        <a
          href="#home"
          className="group flex items-center gap-3 relative focus:outline-none"
        >
          <div className="relative w-11 h-11 rounded-full bg-gradient-to-tr from-maroon-700 via-slate-200 to-slate-400 p-[2px] shadow-lg shadow-maroon-950/60 group-hover:scale-110 transition-all duration-300">
            <div className="w-full h-full rounded-full overflow-hidden bg-[#180307] flex items-center justify-center">
              <img
                src="/images/manikanta-profile-logo.jpg"
                alt="GS Manikanta"
                className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="absolute -inset-1 bg-slate-300/20 rounded-full blur-sm -z-10 group-hover:bg-slate-200/40 transition-all" />
          </div>

          <div className="flex flex-col">
            <span className="font-display font-bold text-base sm:text-lg tracking-wide text-white group-hover:text-slate-200 transition-colors">
              GS Manikanta<span className="text-slate-400">.</span>
            </span>
            <span className="text-[10px] text-slate-400 font-mono tracking-wider -mt-1 uppercase">
              Software Engineer
            </span>
          </div>
        </a>

        {/* Desktop Single-Word Navigation */}
        <nav className="hidden lg:flex items-center gap-1 bg-[#22050c]/65 backdrop-blur-md px-3 py-1.5 rounded-full border border-slate-400/20 shadow-inner">
          {navItems.map((item) => {
            const isActive = activeSection === item.href.replace('#', '');
            return (
              <a
                key={item.name}
                href={item.href}
                className={`relative px-3.5 py-1.5 rounded-full text-xs xl:text-sm font-medium transition-all duration-300 ${
                  isActive
                    ? 'text-white font-semibold shadow-sm'
                    : 'text-slate-300 hover:text-white hover:bg-white/5'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeNavIndicator"
                    className="absolute inset-0 bg-gradient-to-r from-maroon-800 to-maroon-900 border border-slate-300/30 rounded-full -z-10 shadow-[0_0_15px_rgba(226,232,240,0.2)]"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                {item.name}
              </a>
            );
          })}
        </nav>

        {/* Right CTA Button */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href="#contact"
            className="group relative inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold text-maroon-950 bg-gradient-to-r from-slate-100 via-slate-200 to-zinc-300 hover:from-white hover:to-slate-200 shadow-[0_0_20px_rgba(226,232,240,0.25)] hover:shadow-[0_0_25px_rgba(226,232,240,0.45)] transition-all duration-300 hover:scale-105 active:scale-95"
          >
            <Sparkles className="w-3.5 h-3.5 text-maroon-950" />
            <span>Hire Me</span>
            <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>

        {/* Mobile Menu Trigger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle Navigation"
          className="lg:hidden p-2 rounded-xl bg-maroon-900/40 border border-slate-400/20 text-slate-200 hover:text-white hover:bg-maroon-900/70 transition-colors"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-[#180307]/95 backdrop-blur-2xl border-b border-slate-400/20 overflow-hidden"
          >
            <div className="px-6 py-6 flex flex-col gap-2">
              {navItems.map((item) => {
                const isActive = activeSection === item.href.replace('#', '');
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                      isActive
                        ? 'bg-gradient-to-r from-maroon-800 to-maroon-900/80 text-white border border-slate-300/30 font-semibold'
                        : 'text-slate-300 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    <span>{item.name}</span>
                    {isActive && <div className="w-2 h-2 rounded-full bg-slate-200 shadow-[0_0_8px_#cbd5e1]" />}
                  </a>
                );
              })}

              <div className="pt-4 mt-2 border-t border-white/10 flex flex-col gap-3">
                <a
                  href="#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-center gap-2 py-3 rounded-xl bg-gradient-to-r from-slate-100 to-zinc-200 text-maroon-950 font-bold text-sm shadow-lg shadow-white/10"
                >
                  <Send className="w-4 h-4" />
                  <span>Get In Touch</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
