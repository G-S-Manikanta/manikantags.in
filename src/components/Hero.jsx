import React from 'react';
import { motion } from 'framer-motion';
import { 
  Github, 
  Linkedin, 
  Mail, 
  Phone, 
  ArrowRight, 
  Sparkles, 
  Code2, 
  Cpu, 
  Layers,
  CheckCircle2
} from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen pt-28 pb-16 flex items-center justify-center overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Text & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Status Badge */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-gradient-to-r from-maroon-900/80 via-maroon-800/60 to-zinc-950/40 border border-slate-400/25 backdrop-blur-xl shadow-[0_0_20px_rgba(226,232,240,0.1)] mb-6"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span className="text-xs font-semibold tracking-wide text-slate-200">
                Software Engineer • Honeywell
              </span>
              <span className="text-slate-500 text-xs">|</span>
              <span className="text-xs font-medium text-slate-300 hidden sm:inline">
                Bengaluru, India
              </span>
            </motion.div>

            {/* Main Headline */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="space-y-2"
            >
              <h1 className="text-4xl sm:text-6xl xl:text-7xl font-display font-extrabold tracking-tight text-white leading-[1.1]">
                Hi, I'm <br />
                <span className="gradient-silver-text relative inline-block">
                  GS Manikanta
                  {/* Subtle underline glow in soft silver */}
                  <span className="absolute -bottom-1 left-0 w-full h-[3px] bg-gradient-to-r from-slate-200 to-transparent rounded-full opacity-60" />
                </span>
              </h1>
              <p className="text-xl sm:text-2xl font-display font-semibold text-rose-200/90 flex items-center gap-2 pt-2">
                <span className="text-slate-300">&gt;</span> Scalable Backend & Cloud Architect
              </p>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mt-6 text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed font-light"
            >
              Engineering high-throughput backend ecosystems, microservices, and enterprise automation with 
              <span className="font-semibold text-white"> C#, .NET Core, SQL Server, & Azure</span>. 
              Proven track record of optimizing system pipelines by <span className="font-semibold text-slate-100 underline decoration-slate-400/50 decoration-2">70%</span> and delivering resilient mission-critical software.
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="mt-8 flex flex-wrap items-center gap-4 w-full sm:w-auto"
            >
              <a
                href="#projects"
                className="group relative inline-flex items-center justify-center gap-3 px-7 py-3.5 rounded-2xl bg-gradient-to-r from-slate-100 via-slate-200 to-zinc-300 text-maroon-950 font-bold text-sm tracking-wide shadow-[0_0_25px_rgba(226,232,240,0.25)] hover:shadow-[0_0_35px_rgba(226,232,240,0.45)] hover:scale-105 active:scale-95 transition-all duration-300"
              >
                <span>View My Work</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl bg-maroon-950/60 hover:bg-maroon-900/80 text-slate-200 hover:text-white font-semibold text-sm border border-slate-400/25 hover:border-slate-300 backdrop-blur-xl transition-all duration-300 hover:scale-105 active:scale-95"
              >
                <span>Let's Connect</span>
              </a>

              <a
                href="mailto:manikantaiyer53@gmail.com"
                className="p-3.5 rounded-2xl bg-maroon-950/40 hover:bg-maroon-900/60 text-slate-300 hover:text-white border border-white/10 hover:border-slate-400/30 backdrop-blur-xl transition-all duration-300 hover:scale-110"
                title="Send Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </motion.div>

            {/* Social Links & Quick Contact Strip */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="mt-10 pt-6 border-t border-white/10 flex flex-wrap items-center gap-6 text-sm text-slate-400"
            >
              <div className="flex items-center gap-4">
                <a
                  href="https://www.linkedin.com/in/g-s-manikanta/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors"
                >
                  <Linkedin className="w-4 h-4 text-slate-300" />
                  <span>LinkedIn</span>
                </a>

                <a
                  href="https://github.com/G-S-Manikanta"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors"
                >
                  <Github className="w-4 h-4 text-slate-300" />
                  <span>GitHub</span>
                </a>

                <a
                  href="tel:+919880170209"
                  className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors"
                >
                  <Phone className="w-4 h-4 text-slate-300" />
                  <span>+91 98801 70209</span>
                </a>
              </div>
            </motion.div>

          </div>

          {/* Right Column: Hero Portrait & Glass Organic Container */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative w-full max-w-[380px] sm:max-w-[420px]"
            >
              {/* Organic glowing gradient background backdrop in Maroon and Soft Silver */}
              <div className="absolute inset-0 bg-gradient-to-tr from-maroon-700 via-slate-400/30 to-rose-900 rounded-[40px] blur-2xl opacity-40 animate-pulse-slow -z-10" />

              {/* Outer Glass Frame */}
              <div className="relative p-3 rounded-[36px] bg-gradient-to-br from-white/15 via-white/5 to-transparent border border-slate-400/25 backdrop-blur-2xl shadow-2xl shadow-maroon-950/80">
                
                {/* Photo wrapper */}
                <div className="relative w-full aspect-[4/5] rounded-[28px] overflow-hidden bg-maroon-950/80 group">
                  <img
                    src="/images/manikanta-portrait-1.jpg"
                    alt="GS Manikanta - Software Engineer"
                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  />
                  
                  {/* Glassy overlay gradient at bottom */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#150307] via-[#150307]/20 to-transparent opacity-80" />

                  {/* Badges on image */}
                  <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-[#1e050b]/85 backdrop-blur-xl border border-slate-400/25 shadow-lg">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-display font-bold text-white text-base">
                          GS Manikanta
                        </h4>
                        <p className="text-xs text-slate-300 font-mono">
                          Software Engineer @ Honeywell
                        </p>
                      </div>
                      <div className="w-9 h-9 rounded-xl bg-slate-200/15 border border-slate-300/30 flex items-center justify-center">
                        <Cpu className="w-5 h-5 text-slate-200" />
                      </div>
                    </div>
                  </div>
                </div>

              </div>

              {/* Floating Pill 1: Experience */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="absolute -top-4 -left-6 px-4 py-2.5 rounded-2xl bg-[#28050e]/90 border border-slate-400/30 backdrop-blur-xl shadow-xl flex items-center gap-3 hidden sm:flex"
              >
                <div className="w-8 h-8 rounded-lg bg-slate-200/15 flex items-center justify-center">
                  <Sparkles className="w-4 h-4 text-slate-200" />
                </div>
                <div>
                  <div className="text-xs font-bold text-white">3+ Years Experience</div>
                  <div className="text-[10px] text-slate-300 font-mono">Enterprise Backend</div>
                </div>
              </motion.div>

              {/* Floating Pill 2: Performance */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="absolute -bottom-4 -right-4 px-4 py-2.5 rounded-2xl bg-[#28050e]/90 border border-slate-400/30 backdrop-blur-xl shadow-xl flex items-center gap-3 hidden sm:flex"
              >
                <div className="w-8 h-8 rounded-lg bg-emerald-500/20 flex items-center justify-center">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-100">70% Faster Execution</div>
                  <div className="text-[10px] text-slate-300 font-mono">Through Automation</div>
                </div>
              </motion.div>

            </motion.div>
          </div>

        </div>

        {/* Highlight Stats Row with recurring smooth scroll animation */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {[
            { label: 'Years of Experience', value: '3+', icon: Layers, sub: 'Enterprise Engineering' },
            { label: 'Process Automation Boost', value: '70%', icon: Cpu, sub: 'Efficiency Savings' },
            { label: 'Weekly Hours Saved', value: '15+', icon: Sparkles, sub: 'Automated Pipelines' },
            { label: 'Degree CGPA', value: '8.2', icon: Code2, sub: 'RVITM Bengaluru' },
          ].map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 35, scale: 0.92 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 0.85, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
                className="glass-card glass-card-hover p-5 sm:p-6 rounded-3xl relative overflow-hidden group"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-2xl sm:text-3xl lg:text-4xl font-display font-extrabold gradient-silver-text">
                    {stat.value}
                  </span>
                  <div className="p-2 rounded-xl bg-slate-200/10 border border-slate-300/20 text-slate-200 group-hover:scale-110 transition-transform">
                    <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                </div>
                <h4 className="text-xs sm:text-sm font-semibold text-slate-200">{stat.label}</h4>
                <p className="text-[11px] text-slate-400 font-mono mt-0.5">{stat.sub}</p>
                <div className="absolute -bottom-10 -right-10 w-24 h-24 bg-maroon-700/20 rounded-full blur-xl group-hover:bg-slate-400/10 transition-colors" />
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Hero;
