import React from 'react';
import { motion } from 'framer-motion';
import { 
  Terminal, 
  Server, 
  Layers, 
  Database, 
  GitBranch, 
  ShieldCheck, 
  Workflow, 
  Cpu,
  Sparkles,
  MapPin,
  Mail,
  Phone
} from 'lucide-react';

const skillCategories = [
  {
    id: 'backend',
    name: 'Backend & APIs',
    icon: Server,
    skills: ['.NET Core', 'ASP.NET Core Web API', 'C#', 'RESTful APIs', 'Microservices', 'Entity Framework Core', 'Java']
  },
  {
    id: 'frontend',
    name: 'Frontend & UI',
    icon: Layers,
    skills: ['React.js', 'Angular', 'TypeScript', 'JavaScript (ES6+)', 'HTML5 & CSS3', 'Tailwind CSS']
  },
  {
    id: 'databases',
    name: 'Databases & Storage',
    icon: Database,
    skills: ['Microsoft SQL Server', 'MySQL', 'Query Optimization', 'Database Indexing', 'Schema Architecture']
  },
  {
    id: 'devops',
    name: 'DevOps & Tooling',
    icon: GitBranch,
    skills: ['Azure DevOps', 'GitHub Actions', 'Git / GitHub', 'CI/CD Pipelines', 'Visual Studio', 'Agile/Scrum']
  },
  {
    id: 'concepts',
    name: 'Core Paradigms',
    icon: Cpu,
    skills: ['Object-Oriented Design', 'Design Patterns', 'Data Structures & Algorithms', 'SDLC', 'Clean Code', 'Performance Tuning']
  }
];

const About = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-maroon-900/60 border border-slate-400/25 text-slate-200 text-xs font-mono mb-4"
          >
            <Sparkles className="w-3.5 h-3.5 text-slate-300" />
            <span>ENGINEERING PROFILE</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight"
          >
            About <span className="gradient-silver-text">My Journey</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="mt-4 text-slate-300 text-base sm:text-lg leading-relaxed font-light"
          >
            Building resilient digital architectures, enterprise systems, and high-performance backend software that scales seamlessly.
          </motion.p>
        </div>

        {/* Story Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch mb-20">
          
          {/* Photo & Quick Details */}
          <motion.div
            initial={{ opacity: 0, x: -45, scale: 0.95 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 1.0, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 flex flex-col justify-between glass-card p-6 sm:p-8 rounded-[32px] border border-slate-400/20 shadow-2xl relative overflow-hidden group"
          >
            <div className="relative mb-6 rounded-2xl overflow-hidden aspect-[4/4.5] border border-slate-400/25 bg-maroon-950">
              <img
                src="/images/manikanta-suit.jpg"
                alt="GS Manikanta"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1b0307] via-transparent to-transparent opacity-70" />
              
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between p-3 rounded-xl bg-maroon-950/90 backdrop-blur-md border border-slate-400/25 text-xs">
                <span className="font-semibold text-white">GS Manikanta</span>
                <span className="text-slate-300 font-mono">B.E. ISE (CGPA: 8.2)</span>
              </div>
            </div>

            <div className="space-y-3 pt-2">
              <div className="flex items-center gap-3 text-xs sm:text-sm text-slate-300">
                <MapPin className="w-4 h-4 text-slate-300 shrink-0" />
                <span>Bengaluru, Karnataka, India</span>
              </div>
              <div className="flex items-center gap-3 text-xs sm:text-sm text-slate-300">
                <Mail className="w-4 h-4 text-slate-300 shrink-0" />
                <a href="mailto:manikantaiyer53@gmail.com" className="hover:text-white transition-colors">
                  manikantaiyer53@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-3 text-xs sm:text-sm text-slate-300">
                <Phone className="w-4 h-4 text-slate-300 shrink-0" />
                <a href="tel:+919880170209" className="hover:text-white transition-colors">
                  +91 98801 70209
                </a>
              </div>
            </div>

            <div className="absolute -top-20 -right-20 w-48 h-48 bg-slate-400/10 rounded-full blur-2xl pointer-events-none" />
          </motion.div>

          {/* Narrative & Highlights */}
          <motion.div
            initial={{ opacity: 0, x: 45, scale: 0.95 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 1.0, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7 flex flex-col justify-between glass-card p-6 sm:p-10 rounded-[32px] border border-slate-400/20 shadow-2xl relative"
          >
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-slate-200/15 border border-slate-300/30 flex items-center justify-center">
                  <Terminal className="w-5 h-5 text-slate-200" />
                </div>
                <div>
                  <h3 className="text-xl font-display font-bold text-white">
                    Passionate Backend Engineer & System Builder
                  </h3>
                  <p className="text-xs text-slate-300 font-mono">Specialized in .NET Ecosystem & Cloud</p>
                </div>
              </div>

              <div className="text-slate-300 space-y-4 text-sm sm:text-base leading-relaxed font-light">
                <p>
                  I am a <strong className="text-white font-semibold">Software Engineer</strong> with 
                  <span className="text-slate-100 font-medium"> 3 years of experience</span> developing scalable backend architectures and enterprise solutions using 
                  <strong className="text-white font-semibold"> C#, .NET Core, ASP.NET Core Web API, SQL Server</strong>, and Azure cloud infrastructure.
                </p>
                <p>
                  At <strong className="text-slate-100 font-semibold">Honeywell</strong>, I specialize in architecting secure RESTful APIs, modernizing microservices, and leading automation workflows that slash system processing cycles by up to <strong>70%</strong>, driving over 15 hours in weekly team productivity savings.
                </p>
                <p>
                  My foundational expertise encompasses robust <strong>Object-Oriented Programming (OOP)</strong>, structural design patterns, relational database modeling, and automated CI/CD deployment pipelines through <strong>Git and GitHub Actions</strong>.
                </p>
              </div>

              {/* Core Pillars */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                <div className="p-4 rounded-2xl bg-maroon-950/60 border border-slate-400/20">
                  <div className="flex items-center gap-2.5 text-slate-100 font-semibold text-sm mb-1">
                    <Workflow className="w-4 h-4 text-slate-300" />
                    <span>Microservices & REST</span>
                  </div>
                  <p className="text-xs text-slate-400">
                    Designing modular, decoupled backend services with high concurrency and reliability.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-maroon-950/60 border border-slate-400/20">
                  <div className="flex items-center gap-2.5 text-slate-100 font-semibold text-sm mb-1">
                    <ShieldCheck className="w-4 h-4 text-slate-300" />
                    <span>Clean Architecture</span>
                  </div>
                  <p className="text-xs text-slate-400">
                    Applying SOLID principles, reusable component abstractions, and strict CI/CD quality gates.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between flex-wrap gap-4">
              <span className="text-xs text-slate-400 font-mono">
                Continuous Integration • Production Support • Agile/Scrum
              </span>
              <a
                href="#experience"
                className="text-xs font-semibold text-slate-300 hover:text-white flex items-center gap-1.5 group"
              >
                <span>Explore Experience</span>
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </a>
            </div>
          </motion.div>
        </div>

        {/* Technical Skills Showcase */}
        <div>
          <div className="text-center max-w-xl mx-auto mb-10">
            <motion.h3 
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
              className="text-2xl sm:text-3xl font-display font-bold text-white"
            >
              Technical <span className="gradient-silver-text">Proficiencies</span>
            </motion.h3>
            <motion.p
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.85, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="text-xs sm:text-sm text-slate-400 mt-2 font-light"
            >
              Technologies, languages, frameworks, and tools I leverage every day.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((cat, idx) => {
              const Icon = cat.icon;
              return (
                <motion.div
                  key={cat.id}
                  initial={{ opacity: 0, y: 40, scale: 0.93 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: false, amount: 0.15 }}
                  transition={{ duration: 0.9, delay: idx * 0.1, ease: [0.22, 1, 0.36, 1] }}
                  className="glass-card glass-card-hover p-6 rounded-3xl relative overflow-hidden group"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-maroon-800 to-maroon-950 border border-slate-400/25 flex items-center justify-center text-slate-200 group-hover:scale-110 transition-transform">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-display font-bold text-base text-white">
                        {cat.name}
                      </h4>
                      <span className="text-[11px] text-slate-400 font-mono">
                        {cat.skills.length} core competencies
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 pt-2">
                    {cat.skills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="px-3 py-1.5 rounded-xl text-xs font-medium bg-[#22040b]/80 text-slate-200 border border-slate-400/20 hover:border-slate-300/50 hover:text-white hover:bg-maroon-900/50 transition-all cursor-default"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  {/* Corner ambient glow */}
                  <div className="absolute -bottom-8 -right-8 w-24 h-24 bg-slate-400/5 rounded-full blur-xl group-hover:bg-slate-300/10 transition-all" />
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
