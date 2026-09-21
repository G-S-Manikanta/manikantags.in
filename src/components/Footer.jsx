import React from 'react';
import { ArrowUp, Github, Linkedin, Mail, Phone } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Education', href: '#education' },
    { name: 'Projects', href: '#projects' },
    { name: 'Services', href: '#services' },
    { name: 'Blogs', href: '#blogs' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="relative bg-[#090204] border-t border-slate-400/20 pt-16 pb-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <a href="#home" className="flex items-center gap-3 group">
              <div className="relative w-10 h-10 rounded-full bg-gradient-to-tr from-maroon-700 via-slate-200 to-slate-400 p-[1.5px] shadow-lg shadow-maroon-950/60 group-hover:scale-110 transition-transform">
                <div className="w-full h-full rounded-full overflow-hidden bg-[#180307] flex items-center justify-center">
                  <img
                    src="/images/manikanta-profile-logo.jpg"
                    alt="GS Manikanta"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              </div>
              <span className="font-display font-bold text-lg text-white group-hover:text-slate-200 transition-colors">
                GS Manikanta<span className="text-slate-400">.</span>
              </span>
            </a>

            <p className="text-xs sm:text-sm text-slate-400 font-light max-w-sm leading-relaxed">
              Software Engineer specializing in scalable enterprise backend systems, .NET Core, C#, REST APIs, and automated cloud CI/CD pipelines.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://www.linkedin.com/in/g-s-manikanta/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-maroon-950/80 border border-slate-400/20 flex items-center justify-center text-slate-300 hover:text-white hover:border-slate-300 transition-all"
                title="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>

              <a
                href="https://github.com/G-S-Manikanta"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-maroon-950/80 border border-slate-400/20 flex items-center justify-center text-slate-300 hover:text-white hover:border-slate-300 transition-all"
                title="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>

              <a
                href="mailto:manikantaiyer53@gmail.com"
                className="w-9 h-9 rounded-xl bg-maroon-950/80 border border-slate-400/20 flex items-center justify-center text-slate-300 hover:text-white hover:border-slate-300 transition-all"
                title="Email"
              >
                <Mail className="w-4 h-4" />
              </a>

              <a
                href="tel:+919880170209"
                className="w-9 h-9 rounded-xl bg-maroon-950/80 border border-slate-400/20 flex items-center justify-center text-slate-300 hover:text-white hover:border-slate-300 transition-all"
                title="Call"
              >
                <Phone className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Nav Links */}
          <div className="md:col-span-4">
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-300 mb-4 font-semibold">
              Navigation
            </h4>
            <div className="grid grid-cols-2 gap-2 text-xs">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-slate-400 hover:text-slate-200 transition-colors py-1"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Location & Quick note */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-300 font-semibold">
              Location
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed font-light">
              Bengaluru, Karnataka, India<br />
              Open to onsite, hybrid & high-impact remote engineering opportunities.
            </p>
            <div className="pt-2">
              <button
                onClick={scrollToTop}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-maroon-950 border border-slate-400/20 text-xs font-medium text-slate-300 hover:text-white hover:border-slate-300 transition-all"
              >
                <span>Back to top</span>
                <ArrowUp className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 font-light">
          <p>© {new Date().getFullYear()} GS Manikanta. All rights reserved.</p>
          <p className="flex items-center gap-1.5 text-slate-400">
            Crafted with React, Tailwind CSS & Soft Gray AI Aesthetics
          </p>
        </div>

      </div>

      {/* Decorative Blur */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-maroon-800/10 blur-3xl pointer-events-none" />
    </footer>
  );
};

export default Footer;
