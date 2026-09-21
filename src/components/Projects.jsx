import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Github, 
  Sparkles, 
  ArrowUpRight
} from 'lucide-react';
import ProjectModal from './ProjectModal';

const projects = [
  {
    id: 'microservices-suite',
    title: 'Enterprise Microservices & REST API Suite',
    category: 'Backend & Cloud',
    timeline: 'Enterprise Scale',
    description: 'Scalable distributed microservices architecture handling high-throughput asynchronous telemetry, authentication, and inter-service messaging.',
    fullDescription: 'Designed and implemented a decoupled microservices architecture utilizing ASP.NET Core Web API, C#, and Azure API Gateway. Built resilient communication patterns with message queues, circuit breakers, and distributed caching to ensure 99.99% system availability.',
    highlights: [
      'Sub-50ms average latency on mission-critical REST API endpoints.',
      'Secured with OAuth2, JWT token authorization, and role-based policies.',
      'Entity Framework Core with optimized connection pooling and read replicas.',
      'Containerized with Docker for rapid orchestration across cloud environments.'
    ],
    tags: ['C#', '.NET Core', 'ASP.NET Core Web API', 'Azure', 'SQL Server', 'Microservices', 'Docker'],
    github: 'https://github.com/G-S-Manikanta',
    demo: '#contact'
  },
  {
    id: 'cicd-automation',
    title: 'Automated CI/CD & Build Pipeline Orchestrator',
    category: 'DevOps & Tooling',
    timeline: 'Production Automation',
    description: 'Automated workflow engine utilizing .NET Core & GitHub Actions that reduced processing turnaround by 70% and saved ~15 engineering hours weekly.',
    fullDescription: 'Engineered an end-to-end continuous integration and deployment orchestration framework. Streamlined code verification, unit testing execution, artifact generation, and deployment triggers across multi-stage staging and production clusters.',
    highlights: [
      'Slashed build and deployment cycle duration by 70%.',
      'Eliminated manual regression errors through automated smoke and integration test suites.',
      'Integrated Git commit hooks, semantic versioning, and automated changelog generators.',
      'Protected deployment gates with zero-downtime rolling updates.'
    ],
    tags: ['.NET Core', 'GitHub Actions', 'Git', 'Java', 'Azure DevOps', 'CI/CD Pipelines'],
    github: 'https://github.com/G-S-Manikanta',
    demo: '#contact'
  },
  {
    id: 'sql-optimizer',
    title: 'High-Throughput SQL Optimizer & Analytics Portal',
    category: 'Databases & Query',
    timeline: 'Database Architecture',
    description: 'High-performance SQL diagnostic and index tuning portal for enterprise database workloads, slashing query latency and memory consumption.',
    fullDescription: 'Developed specialized database optimization tools that analyze query execution plans, missing index suggestions, and locking contention. Integrated with automated telemetry dashboards for real-time query health monitoring.',
    highlights: [
      'Identified and resolved bottleneck SQL queries across high-volume transaction tables.',
      'Reduced server CPU load and memory usage by 40% via proper composite indexing.',
      'Crafted complex stored procedures, triggers, and partitioned tables for fast OLTP and OLAP reporting.'
    ],
    tags: ['Microsoft SQL Server', 'T-SQL', 'C#', '.NET Core', 'Dapper', 'Database Indexing'],
    github: 'https://github.com/G-S-Manikanta',
    demo: '#contact'
  },
  {
    id: 'fullstack-portal',
    title: 'Modern Full-Stack Enterprise Management Portal',
    category: 'Full-Stack Web',
    timeline: 'Responsive Web App',
    description: 'Next-generation web portal built with React.js, TypeScript, Tailwind CSS, and ASP.NET Core Web API for unified data analytics and workflows.',
    fullDescription: 'A dynamic enterprise dashboard featuring fluid animations, role-based dashboard widgets, real-time data grid filtering, and interactive visualization charts. Engineered with a clean separation of concerns and reactive state management.',
    highlights: [
      'Dynamic responsive UI built with modern React, Tailwind CSS, and Framer Motion.',
      'Type-safe REST API integration using TypeScript and Axios interceptors.',
      'Export capabilities for PDF, Excel, and CSV with real-time progress indicators.'
    ],
    tags: ['React.js', 'TypeScript', 'Tailwind CSS', 'ASP.NET Core', 'REST APIs', 'SQL Server'],
    github: 'https://github.com/G-S-Manikanta',
    demo: '#contact'
  },
  {
    id: 'resilience-cache',
    title: 'Distributed Caching & Fault Tolerance Framework',
    category: 'Backend & Cloud',
    timeline: 'System Resilience',
    description: 'Enterprise caching and fault-handling library implementing Polly retry, fallback, and circuit-breaker patterns for mission-critical services.',
    fullDescription: 'Created a modular shared library for .NET applications implementing multi-tier caching (in-memory + distributed Redis) and automated retry policies. Drastically reduced downstream service dependencies during network blips.',
    highlights: [
      'Boosted read throughput by 300% via distributed memory caching.',
      'Prevents cascading system outages during temporary downstream database dropouts.',
      'Comprehensive telemetry logging for cache hit/miss metrics.'
    ],
    tags: ['C#', '.NET Core', 'Redis', 'Polly', 'System Resilience', 'Microservices'],
    github: 'https://github.com/G-S-Manikanta',
    demo: '#contact'
  },
  {
    id: 'automation-testing-suite',
    title: 'Automated Regression & API Testing Suite',
    category: 'DevOps & Tooling',
    timeline: 'QA Automation',
    description: 'Comprehensive test automation framework for RESTful APIs and backend services, guaranteeing high test coverage and release confidence.',
    fullDescription: 'Architected automated integration and contract testing pipelines for microservices. Integrated test execution directly within GitHub Actions to prevent regressions prior to merging to main branches.',
    highlights: [
      'Automated 100+ endpoint regression checks with rapid parallel execution.',
      'Generated visual test reports and code coverage heatmaps in CI pipelines.',
      'Reduced manual QA verification cycle from 2 days to under 20 minutes.'
    ],
    tags: ['.NET', 'Java', 'REST APIs', 'NUnit', 'Postman', 'CI/CD Automation'],
    github: 'https://github.com/G-S-Manikanta',
    demo: '#contact'
  }
];

const categories = ['All', 'Backend & Cloud', 'DevOps & Tooling', 'Databases & Query', 'Full-Stack Web'];

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [activeModalProject, setActiveModalProject] = useState(null);

  const filteredProjects = selectedCategory === 'All'
    ? projects
    : projects.filter(p => p.category === selectedCategory);

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
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
            <span>FEATURED WORK</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight"
          >
            Engineering <span className="gradient-silver-text">Projects</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="mt-4 text-slate-300 text-base sm:text-lg leading-relaxed font-light"
          >
            Architectural showcases spanning scalable backend systems, automation frameworks, cloud APIs, and full-stack solutions.
          </motion.p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat, idx) => (
            <button
              key={idx}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 ${
                selectedCategory === cat
                  ? 'bg-gradient-to-r from-slate-100 to-zinc-300 text-maroon-950 font-bold shadow-lg shadow-white/10 scale-105'
                  : 'bg-maroon-950/60 text-slate-300 border border-slate-400/20 hover:border-slate-300 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid with recurring smooth scroll animation */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProjects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40, scale: 0.93 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: false, amount: 0.15 }}
              transition={{ duration: 0.9, delay: idx * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="glass-card glass-card-hover rounded-[32px] p-6 sm:p-7 flex flex-col justify-between border border-slate-400/20 relative overflow-hidden group"
            >
              <div>
                {/* Top header */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="px-3 py-1 rounded-full text-[11px] font-mono font-semibold bg-slate-200/15 text-slate-200 border border-slate-400/25">
                    {project.category}
                  </span>
                  
                  <div className="flex items-center gap-2">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-full bg-maroon-950 text-slate-300 hover:text-white border border-slate-400/20 hover:border-slate-300 transition-colors"
                      title="GitHub"
                    >
                      <Github className="w-3.5 h-3.5" />
                    </a>
                    <button
                      onClick={() => setActiveModalProject(project)}
                      className="p-2 rounded-full bg-maroon-950 text-slate-300 hover:text-white border border-slate-400/20 hover:border-slate-300 transition-colors"
                      title="View Details"
                    >
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                {/* Project Title */}
                <h3 
                  onClick={() => setActiveModalProject(project)}
                  className="text-lg sm:text-xl font-display font-bold text-white group-hover:text-slate-200 transition-colors cursor-pointer mb-2.5"
                >
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light mb-6 line-clamp-3">
                  {project.description}
                </p>
              </div>

              <div>
                {/* Tech tags */}
                <div className="flex flex-wrap gap-1.5 mb-5 pt-3 border-t border-white/10">
                  {project.tags.slice(0, 4).map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2.5 py-1 rounded-lg text-[10px] font-mono bg-maroon-950/80 text-slate-300 border border-slate-400/20"
                    >
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 4 && (
                    <span className="px-2 py-1 rounded-lg text-[10px] font-mono bg-maroon-950/80 text-slate-200 border border-slate-400/20">
                      +{project.tags.length - 4}
                    </span>
                  )}
                </div>

                {/* Footer Action */}
                <button
                  onClick={() => setActiveModalProject(project)}
                  className="w-full py-2.5 rounded-xl bg-gradient-to-r from-maroon-900/70 to-maroon-800/70 hover:from-slate-200 hover:to-zinc-300 text-slate-200 hover:text-maroon-950 font-semibold text-xs border border-slate-400/25 hover:border-transparent transition-all duration-300 flex items-center justify-center gap-2 group/btn"
                >
                  <span>Explore Architecture</span>
                  <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                </button>
              </div>

              {/* Ambient Glow */}
              <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-slate-400/5 rounded-full blur-2xl group-hover:bg-slate-300/10 transition-colors pointer-events-none" />
            </motion.div>
          ))}
        </div>

        {/* Modal Window */}
        <ProjectModal
          project={activeModalProject}
          isOpen={!!activeModalProject}
          onClose={() => setActiveModalProject(null)}
        />

      </div>
    </section>
  );
};

export default Projects;
