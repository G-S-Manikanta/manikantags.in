import React from 'react';
import { motion } from 'framer-motion';
import { 
  GraduationCap, 
  Award, 
  BookOpen, 
  MapPin, 
  Sparkles, 
  CheckCircle2, 
  Binary
} from 'lucide-react';

const courses = [
  'Data Structures & Algorithms',
  'Object-Oriented Programming (OOP)',
  'Database Management Systems (DBMS)',
  'Operating Systems & Concurrency',
  'Computer Networks & Protocols',
  'Software Engineering & Design Patterns',
  'Cloud Computing & Distributed Systems',
  'Web Architecture & Security'
];

const Education = () => {
  return (
    <section id="education" className="py-24 relative overflow-hidden">
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
            <span>ACADEMIC FOUNDATION</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight"
          >
            Academic <span className="gradient-silver-text">Education</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="mt-4 text-slate-300 text-base sm:text-lg leading-relaxed font-light"
          >
            Rigorous engineering background establishing core algorithmic, mathematical, and computer science principles.
          </motion.p>
        </div>

        {/* Education Hero Showcase Card */}
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 45, scale: 0.94 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: false, amount: 0.15 }}
            transition={{ duration: 1.0, ease: [0.22, 1, 0.36, 1] }}
            className="glass-card glass-card-hover p-8 sm:p-12 rounded-[36px] border border-slate-400/25 shadow-2xl relative overflow-hidden"
          >
            {/* Top Banner Row */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-8 border-b border-white/10">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-maroon-700 via-maroon-800 to-slate-300 p-[1.5px] shadow-lg shadow-maroon-950/60">
                  <div className="w-full h-full bg-[#180307] rounded-[14px] flex items-center justify-center text-slate-200">
                    <GraduationCap className="w-7 h-7" />
                  </div>
                </div>

                <div>
                  <h3 className="text-xl sm:text-2xl font-display font-bold text-white">
                    Bachelor of Engineering (B.E.)
                  </h3>
                  <p className="text-sm font-semibold text-rose-300 mt-0.5">
                    Information Science & Engineering
                  </p>
                </div>
              </div>

              {/* CGPA Badge */}
              <div className="flex items-center gap-3 px-5 py-3 rounded-2xl bg-gradient-to-r from-slate-200/10 to-maroon-900/60 border border-slate-400/30 backdrop-blur-md self-start sm:self-auto">
                <Award className="w-5 h-5 text-slate-200" />
                <div>
                  <div className="text-[10px] text-slate-400 uppercase tracking-wider font-mono">Cumulative Score</div>
                  <div className="text-lg font-bold text-white font-display">8.2 / 10.0 CGPA</div>
                </div>
              </div>
            </div>

            {/* Institution & Location details */}
            <div className="py-6 space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-2 text-xs sm:text-sm text-slate-300">
                <div className="flex items-center gap-2 font-medium text-white">
                  <BookOpen className="w-4 h-4 text-slate-300" />
                  <span>RV Institute of Technology and Management (RVITM)</span>
                </div>
                <div className="flex items-center gap-2 text-slate-400 font-mono">
                  <MapPin className="w-4 h-4 text-slate-300" />
                  <span>Bengaluru, Karnataka, India</span>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light">
                Graduated with distinction, focusing on modern distributed systems, data structures, algorithms, and backend enterprise software engineering. Actively participated in technical hackathons, algorithmic coding competitions, and academic workshops.
              </p>
            </div>

            {/* Coursework & Foundations */}
            <div className="pt-6 border-t border-white/10">
              <h4 className="text-xs font-mono uppercase tracking-wider text-slate-300 mb-4 flex items-center gap-2 font-semibold">
                <Binary className="w-4 h-4" />
                <span>Foundational Coursework & Engineering Core</span>
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {courses.map((course, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2.5 p-3 rounded-xl bg-maroon-950/60 border border-slate-400/15 text-xs text-slate-200"
                  >
                    <CheckCircle2 className="w-4 h-4 text-slate-300 shrink-0" />
                    <span>{course}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Ambient background decoration */}
            <div className="absolute -bottom-16 -right-16 w-56 h-56 bg-slate-400/5 rounded-full blur-3xl pointer-events-none" />
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default Education;
