import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Clock, 
  ArrowUpRight, 
  Sparkles, 
  BookOpen
} from 'lucide-react';
import BlogModal from './BlogModal';

const blogs = [
  {
    id: 'dotnet-api-performance',
    title: 'Architecting High-Throughput REST APIs in .NET Core 8',
    category: 'Backend Architecture',
    date: 'Aug 2024',
    readTime: '6 min read',
    snippet: 'Exploring memory allocation optimization, response compression, async stream processing, and rate limiting for enterprise-scale .NET Web APIs.',
    paragraphs: [
      'In high-volume backend ecosystems, every millisecond counts. When processing millions of API calls across industrial services, careless memory allocations and unoptimized EF Core queries quickly compound into CPU spikes and garbage collection pauses.',
      'By adopting span-based parsers, zero-allocation serializers with System.Text.Json, and asynchronous IAsyncEnumerable streams, we reduced our P99 response latency by more than 45%.',
      'Additionally, pairing output caching with distributed Redis stores relieves database connection pressure during unexpected traffic surges.'
    ],
    takeaways: [
      'Use AsNoTracking() and projection queries for read-heavy operations.',
      'Leverage IHttpClientFactory with connection pooling to prevent socket exhaustion.',
      'Adopt structured telemetry logging using Serilog and OpenTelemetry.'
    ],
    tags: ['.NET Core', 'C#', 'REST APIs', 'Performance', 'Architecture']
  },
  {
    id: 'sql-query-optimization',
    title: 'Cutting SQL Latency by 70%: An Indexing & Execution Plan Playbook',
    category: 'Database Optimization',
    date: 'Jun 2024',
    readTime: '7 min read',
    snippet: 'Real-world lessons in diagnosing SQL Server execution plans, eliminating table scans with composite indexes, and preventing tempdb bottlenecks.',
    paragraphs: [
      'Database queries are often the silent bottleneck of otherwise fast backend services. A simple missing index or an implicit type conversion can force SQL Server to perform costly clustered index scans across hundreds of thousands of rows.',
      'In this article, I walk through our systematic approach at analyzing dynamic management views (DMVs), diagnosing index fragmentation, and replacing scalar user-defined functions with inline table-valued equivalents.',
      'These architectural adjustments brought our slowest batch processing pipelines from minutes down to mere seconds.'
    ],
    takeaways: [
      'Always inspect query execution plans for implicit CAST operations and missing index warnings.',
      'Implement covering indexes with INCLUDE clauses to satisfy queries without key lookups.',
      'Utilize table partitioning for large chronological audit logs.'
    ],
    tags: ['SQL Server', 'T-SQL', 'Database Indexing', 'Optimization']
  },
  {
    id: 'cicd-automation-github-actions',
    title: 'Enterprise CI/CD with GitHub Actions: From Commit to Production',
    category: 'DevOps & Tooling',
    date: 'Mar 2024',
    readTime: '5 min read',
    snippet: 'How automated linting, parallel test execution, and container caching saved our engineering team ~15 hours of manual release toil every week.',
    paragraphs: [
      'Manual deployments and inconsistent local test environments are the enemies of agile velocity. When engineers spend hours verifying dependencies and hand-crafting build packages, innovation stalls.',
      'By architecting modular GitHub Actions workflows with reusable composite actions, dependency caching, and automated test runners, we cut overall pipeline duration by 70%.',
      'The result is a self-healing pipeline where code merges are automatically vetted, packaged, and staged with complete audit traceability.'
    ],
    takeaways: [
      'Cache NuGet and npm dependencies to cut build minutes in half.',
      'Enforce automated branch protection rules requiring passing test suites and peer code reviews.',
      'Use matrix builds to validate multi-runtime compatibility simultaneously.'
    ],
    tags: ['GitHub Actions', 'CI/CD', 'DevOps', 'Automation', 'Git']
  }
];

const Blogs = () => {
  const [activeBlog, setActiveBlog] = useState(null);

  return (
    <section id="blogs" className="py-24 relative overflow-hidden">
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
            <span>TECHNICAL INSIGHTS</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight"
          >
            Engineering <span className="gradient-silver-text">Blogs</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="mt-4 text-slate-300 text-base sm:text-lg leading-relaxed font-light"
          >
            Deep-dives into backend architecture, database performance, DevOps automation, and scalable system design.
          </motion.p>
        </div>

        {/* Blogs Grid with recurring smooth scroll animation */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog, idx) => (
            <motion.article
              key={blog.id}
              initial={{ opacity: 0, y: 40, scale: 0.93 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: false, amount: 0.15 }}
              transition={{ duration: 0.9, delay: idx * 0.12, ease: [0.22, 1, 0.36, 1] }}
              onClick={() => setActiveBlog(blog)}
              className="glass-card glass-card-hover rounded-[32px] p-7 sm:p-8 flex flex-col justify-between border border-slate-400/20 relative overflow-hidden group cursor-pointer"
            >
              <div>
                {/* Meta header */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="px-3 py-1 rounded-full text-[11px] font-mono font-semibold bg-slate-200/15 text-slate-200 border border-slate-400/25">
                    {blog.category}
                  </span>
                  <div className="flex items-center gap-2 text-slate-400 text-xs font-mono">
                    <Clock className="w-3.5 h-3.5 text-slate-300" />
                    <span>{blog.readTime}</span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-display font-bold text-white group-hover:text-slate-200 transition-colors mb-3 leading-snug">
                  {blog.title}
                </h3>

                {/* Snippet */}
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light mb-6">
                  {blog.snippet}
                </p>
              </div>

              <div>
                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mb-6 pt-4 border-t border-white/10">
                  {blog.tags.slice(0, 3).map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2.5 py-1 rounded-lg text-[10px] font-mono bg-maroon-950/80 text-slate-300 border border-slate-400/20"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>

                {/* Read button */}
                <div className="flex items-center justify-between text-xs font-semibold text-slate-300 group-hover:text-white">
                  <span className="flex items-center gap-1.5">
                    <BookOpen className="w-3.5 h-3.5" />
                    <span>Read Article</span>
                  </span>
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </div>
              </div>

              {/* Background Glow */}
              <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-slate-400/5 rounded-full blur-2xl group-hover:bg-slate-300/10 transition-all pointer-events-none" />
            </motion.article>
          ))}
        </div>

        {/* Blog Reading Modal */}
        <BlogModal
          blog={activeBlog}
          isOpen={!!activeBlog}
          onClose={() => setActiveBlog(null)}
        />

      </div>
    </section>
  );
};

export default Blogs;
