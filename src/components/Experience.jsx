import React from 'react';
import { motion } from 'framer-motion';
import { 
  Briefcase, 
  Calendar, 
  MapPin, 
  Sparkles, 
  TrendingUp, 
  CheckCircle2
} from 'lucide-react';

const experiences = [
  {
    role: 'Software Engineer I',
    company: 'Honeywell',
    period: 'Sep 2023 – Present',
    type: 'Full-Time',
    location: 'Bengaluru, India',
    highlight: 'Reduced processing time by 70% & saved 15+ hours/week',
    description: 'Spearheading backend architectural development, secure RESTful APIs, and enterprise automation engines for mission-critical industrial workflows.',
    achievements: [
      'Architected and developed secure, scalable backend applications and RESTful APIs utilizing C# and .NET Core.',
      'Collaborated with cross-functional product owners, business analysts, and architects to translate complex industrial requirements into resilient software solutions.',
      'Constructed enterprise automation tooling using .NET Core and Java, reducing processing cycles by 70% and saving ~15 engineering hours weekly.',
      'Managed end-to-end CI/CD build & deployment automation workflows leveraging Git and GitHub Actions.',
      'Enforced SOLID design patterns and reusable component modularity to substantially elevate code quality and system performance.',
      'Delivered rigorous SQL query tuning, database debugging, and 24/7 Tier-3 production incident triage.'
    ],
    skills: ['C#', '.NET Core', 'ASP.NET Core', 'REST APIs', 'SQL Server', 'GitHub Actions', 'CI/CD', 'Microservices', 'Agile']
  },
  {
    role: 'Software Engineer Intern',
    company: 'Honeywell',
    period: 'Mar 2023 – Aug 2023',
    type: 'Internship',
    location: 'Bengaluru, India',
    highlight: 'Automated test suites & streamlined SQL database integrations',
    description: 'Contributed to automation pipelines, operational tooling, and database-backed services under senior engineering mentorship.',
    achievements: [
      'Engineered operational automation features in .NET and Java to boost workflow throughput.',
      'Built backend modules tightly integrated with enterprise SQL Server databases.',
      'Authored automated test cases and execution frameworks, driving down manual QA overhead.',
      'Actively participated in daily Agile standups, sprint planning, and staging code deployments.'
    ],
    skills: ['.NET', 'Java', 'SQL Server', 'Test Automation', 'Agile/Scrum', 'Git']
  },
  {
    role: 'Web Development Intern',
    company: 'Veave Technologies',
    period: 'Aug 2022 – Nov 2022',
    type: 'Internship',
    location: 'Bengaluru, India',
    highlight: 'REST API integration & frontend component architecture',
    description: 'Engineered dynamic frontend web modules and integrated REST endpoints with backend SQL databases.',
    achievements: [
      'Developed responsive, dynamic UI components using modern JavaScript (ES6+), HTML5, CSS3, and .NET.',
      'Integrated RESTful APIs with backend services, optimizing data payloads and round-trip latency.',
      'Refactored SQL queries to enhance page rendering speed and reduce database lock contention.'
    ],
    skills: ['JavaScript', 'HTML5/CSS3', '.NET', 'REST APIs', 'SQL Optimization']
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-maroon-900/60 border border-slate-400/25 text-slate-200 text-xs font-mono mb-4"
          >
            <Sparkles className="w-3.5 h-3.5 text-slate-300" />
            <span>CAREER PATH</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight"
          >
            Work <span className="gradient-silver-text">Experience</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="mt-4 text-slate-300 text-base sm:text-lg leading-relaxed font-light"
          >
            Delivering high-impact software solutions and enterprise backend engineering at industry leaders.
          </motion.p>
        </div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Vertical central timeline glowing line in Silver and Maroon */}
          <div className="hidden lg:block absolute left-1/2 top-4 bottom-4 w-0.5 bg-gradient-to-b from-slate-300 via-maroon-600 to-slate-400/20 -translate-x-1/2" />

          <div className="space-y-12 lg:space-y-16">
            {experiences.map((exp, index) => {
              const isEven = index % 2 === 0;
              return (
                <div key={index} className="relative">
                  
                  {/* Center glowing node on desktop */}
                  <div className="hidden lg:flex absolute left-1/2 top-8 -translate-x-1/2 w-8 h-8 rounded-full bg-[#1b0307] border-2 border-slate-300 items-center justify-center z-20 shadow-[0_0_15px_rgba(226,232,240,0.4)]">
                    <div className="w-2.5 h-2.5 rounded-full bg-slate-200 animate-ping" />
                  </div>

                  {/* Grid row */}
                  <div className={`grid grid-cols-1 lg:grid-cols-12 gap-8 items-center ${isEven ? '' : 'lg:flex-row-reverse'}`}>
                    
                    {/* Content Card */}
                    <motion.div
                      initial={{ opacity: 0, x: isEven ? -50 : 50, scale: 0.94 }}
                      whileInView={{ opacity: 1, x: 0, scale: 1 }}
                      viewport={{ once: false, amount: 0.15 }}
                      transition={{ duration: 0.95, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
                      className={`lg:col-span-6 ${isEven ? 'lg:pr-12' : 'lg:col-start-7 lg:pl-12'}`}
                    >
                      <div className="glass-card glass-card-hover p-6 sm:p-8 rounded-[32px] border border-slate-400/25 relative overflow-hidden group">
                        
                        {/* Header info */}
                        <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                          <div className="flex items-center gap-2">
                            <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-slate-200/15 text-slate-200 border border-slate-400/25">
                              {exp.type}
                            </span>
                            <span className="text-xs text-slate-400 flex items-center gap-1 font-mono">
                              <Calendar className="w-3.5 h-3.5 text-slate-300" />
                              {exp.period}
                            </span>
                          </div>
                          
                          <div className="flex items-center gap-1 text-xs text-slate-400">
                            <MapPin className="w-3.5 h-3.5 text-slate-300" />
                            {exp.location}
                          </div>
                        </div>

                        {/* Title & Company */}
                        <div className="mb-4">
                          <h3 className="text-xl sm:text-2xl font-display font-bold text-white group-hover:text-slate-200 transition-colors">
                            {exp.role}
                          </h3>
                          <div className="text-base font-semibold text-rose-300 flex items-center gap-2 mt-0.5">
                            <Briefcase className="w-4 h-4 text-slate-300" />
                            <span>{exp.company}</span>
                          </div>
                        </div>

                        {/* Key Highlight Banner */}
                        {exp.highlight && (
                          <div className="mb-5 p-3 rounded-xl bg-gradient-to-r from-slate-200/10 via-maroon-800/30 to-transparent border-l-4 border-slate-300 text-xs sm:text-sm font-medium text-slate-200 flex items-center gap-2">
                            <TrendingUp className="w-4 h-4 text-slate-300 shrink-0" />
                            <span>{exp.highlight}</span>
                          </div>
                        )}

                        {/* Achievements Bullet List */}
                        <ul className="space-y-2.5 mb-6 text-xs sm:text-sm text-slate-300">
                          {exp.achievements.map((item, aIdx) => (
                            <li key={aIdx} className="flex items-start gap-2.5">
                              <CheckCircle2 className="w-4 h-4 text-slate-300 shrink-0 mt-0.5" />
                              <span className="leading-relaxed font-light">{item}</span>
                            </li>
                          ))}
                        </ul>

                        {/* Skills chips */}
                        <div className="pt-4 border-t border-white/10 flex flex-wrap gap-1.5">
                          {exp.skills.map((skill, sIdx) => (
                            <span
                              key={sIdx}
                              className="px-2.5 py-1 rounded-lg text-[11px] font-mono bg-maroon-950/70 text-slate-300 border border-slate-400/20"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>

                        {/* Background glow decoration */}
                        <div className="absolute -top-10 -right-10 w-32 h-32 bg-slate-400/5 rounded-full blur-2xl group-hover:bg-slate-300/10 transition-all pointer-events-none" />
                      </div>
                    </motion.div>

                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Experience;
