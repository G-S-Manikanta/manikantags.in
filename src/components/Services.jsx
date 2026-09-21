import React from 'react';
import { motion } from 'framer-motion';
import { 
  Server, 
  Workflow, 
  Database, 
  Globe, 
  ShieldCheck, 
  Sparkles, 
  ArrowRight,
  Code2
} from 'lucide-react';

const services = [
  {
    icon: Server,
    title: 'Scalable Backend & Microservices',
    description: 'Architecting high-concurrency distributed systems and microservices in C# & .NET Core with fault-tolerant caching, circuit breakers, and async event queues.',
    deliverables: ['Decoupled Microservice Design', 'High Concurrency & Low Latency', 'Distributed Caching with Redis', 'Clean & Onion Architecture']
  },
  {
    icon: Workflow,
    title: 'Enterprise CI/CD & Automation',
    description: 'Building automated deployment, testing, and continuous integration workflows with GitHub Actions & Azure DevOps, slashing release overhead by up to 70%.',
    deliverables: ['Zero-Downtime Deployment Pipelines', 'Automated Unit & Regression Tests', 'Containerization with Docker', 'Multi-Environment Staging Gates']
  },
  {
    icon: Code2,
    title: 'RESTful API Engineering',
    description: 'Designing secure, high-speed RESTful Web APIs with OpenAPI/Swagger documentation, OAuth2/JWT authorization, and robust payload validation.',
    deliverables: ['Custom REST & Webhook Endpoints', 'Token-Based Auth & Rate Limiting', 'Comprehensive API Documentation', 'Seamless Third-Party Integrations']
  },
  {
    icon: Database,
    title: 'Database Design & SQL Tuning',
    description: 'Diagnosing complex SQL Server queries, optimizing execution plans, architecting schema indexes, and eliminating deadlocks for enterprise databases.',
    deliverables: ['Query Execution Plan Analysis', 'Indexing & Partitioning Strategy', 'Stored Procedures & Triggers', 'High-Performance ORM (EF Core/Dapper)']
  },
  {
    icon: Globe,
    title: 'Full-Stack Web Development',
    description: 'Developing reactive, modern web applications combining responsive React.js / Angular interfaces with resilient backend service integrations.',
    deliverables: ['Dynamic Component Architecture', 'Tailwind CSS & Glassmorphism Design', 'Type-Safe TypeScript Frontends', 'State Management & Real-Time Sync']
  },
  {
    icon: ShieldCheck,
    title: 'System Modernization & Code Review',
    description: 'Refactoring legacy codebases into modern .NET ecosystems, implementing SOLID principles, improving maintainability, and providing 24/7 Tier-3 support.',
    deliverables: ['Legacy .NET to Modern .NET 8 Migration', 'Design Pattern Refactoring', 'Automated Code Quality Audits', 'Production Incident Troubleshooting']
  }
];

const Services = () => {
  return (
    <section id="services" className="py-24 relative overflow-hidden">
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
            <span>SOLUTIONS & EXPERTISE</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight"
          >
            Engineering <span className="gradient-silver-text">Services</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="mt-4 text-slate-300 text-base sm:text-lg leading-relaxed font-light"
          >
            Delivering robust software engineering, scalable cloud backends, and high-performance system architectures.
          </motion.p>
        </div>

        {/* Services Grid with recurring smooth scroll animation */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((srv, idx) => {
            const Icon = srv.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40, scale: 0.93 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: false, amount: 0.15 }}
                transition={{ duration: 0.9, delay: idx * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="glass-card glass-card-hover p-7 sm:p-8 rounded-[32px] border border-slate-400/20 flex flex-col justify-between relative overflow-hidden group"
              >
                <div>
                  {/* Icon Box */}
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-maroon-800 via-maroon-950 to-[#20040a] border border-slate-400/30 flex items-center justify-center text-slate-200 mb-6 group-hover:scale-110 group-hover:border-slate-300 transition-all shadow-lg shadow-maroon-950/60">
                    <Icon className="w-7 h-7" />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-display font-bold text-white group-hover:text-slate-200 transition-colors mb-3">
                    {srv.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light mb-6">
                    {srv.description}
                  </p>

                  {/* Deliverables */}
                  <div className="space-y-2 pt-4 border-t border-white/10 mb-6">
                    {srv.deliverables.map((item, dIdx) => (
                      <div key={dIdx} className="flex items-center gap-2 text-xs text-slate-300">
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-300" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card CTA */}
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 text-xs font-semibold text-slate-300 group-hover:text-white pt-2"
                >
                  <span>Request Consultation</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </a>

                {/* Subtle Glow */}
                <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-slate-400/5 rounded-full blur-2xl group-hover:bg-slate-300/10 transition-all pointer-events-none" />
              </motion.div>
            );
          })}
        </div>

        {/* Banner CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.95, ease: [0.22, 1, 0.36, 1] }}
          className="mt-16 p-8 sm:p-12 rounded-[36px] bg-gradient-to-r from-maroon-950/90 via-maroon-900/80 to-[#220409]/90 border border-slate-400/25 backdrop-blur-2xl text-center relative overflow-hidden"
        >
          <div className="relative z-10 max-w-2xl mx-auto space-y-4">
            <h3 className="text-2xl sm:text-3xl font-display font-bold text-white">
              Have a high-scale project or engineering challenge?
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 font-light">
              Let's build scalable backend microservices, automate deployment pipelines, or optimize your database infrastructure.
            </p>
            <div className="pt-2">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-2xl bg-gradient-to-r from-slate-100 via-slate-200 to-zinc-300 text-maroon-950 font-bold text-sm shadow-lg shadow-white/10 hover:scale-105 active:scale-95 transition-all"
              >
                <span>Start a Discussion</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
          <div className="absolute inset-0 bg-slate-400/5 backdrop-blur-3xl -z-10" />
        </motion.div>

      </div>
    </section>
  );
};

export default Services;
