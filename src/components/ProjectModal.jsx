import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, 
  ExternalLink, 
  Github, 
  Layers, 
  CheckCircle2, 
  Cpu
} from 'lucide-react';

const ProjectModal = ({ project, isOpen, onClose }) => {
  if (!isOpen || !project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/85 backdrop-blur-xl -z-10"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3 }}
          className="relative w-full max-w-3xl glass-card rounded-[32px] p-6 sm:p-10 border border-slate-400/30 shadow-2xl max-h-[90vh] overflow-y-auto"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 p-2 rounded-full bg-maroon-900/60 border border-slate-400/30 text-slate-300 hover:text-white hover:bg-maroon-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Tag & Category */}
          <div className="flex items-center gap-2 mb-3">
            <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-slate-200/15 text-slate-200 border border-slate-400/30">
              {project.category}
            </span>
            <span className="text-xs text-slate-400 font-mono">
              {project.timeline}
            </span>
          </div>

          {/* Title */}
          <h3 className="text-2xl sm:text-3xl font-display font-bold text-white mb-4">
            {project.title}
          </h3>

          {/* Full overview */}
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-light mb-6">
            {project.fullDescription || project.description}
          </p>

          {/* Architecture Highlights */}
          <div className="mb-6 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-300 flex items-center gap-2 font-semibold">
              <Cpu className="w-4 h-4 text-slate-300" />
              <span>Architectural Impact & Key Deliverables</span>
            </h4>
            <div className="space-y-2">
              {project.highlights?.map((h, i) => (
                <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-slate-300 shrink-0 mt-0.5" />
                  <span className="font-light">{h}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tech stack */}
          <div className="mb-8">
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-300 mb-3 flex items-center gap-2 font-semibold">
              <Layers className="w-4 h-4 text-slate-300" />
              <span>Technology Stack & Tools</span>
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1.5 rounded-xl text-xs font-medium bg-maroon-950 text-slate-200 border border-slate-400/25"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Links */}
          <div className="flex flex-wrap gap-4 pt-4 border-t border-white/10">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-maroon-950 border border-slate-400/30 text-slate-200 hover:text-white hover:bg-maroon-900 transition-colors text-xs font-semibold"
              >
                <Github className="w-4 h-4" />
                <span>View Source Code</span>
              </a>
            )}

            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-slate-100 to-zinc-300 text-maroon-950 hover:from-white hover:to-slate-200 transition-all text-xs font-bold shadow-lg shadow-white/10"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Live Demonstration</span>
              </a>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default ProjectModal;
