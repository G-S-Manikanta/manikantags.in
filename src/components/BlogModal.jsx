import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Calendar, Clock, Sparkles } from 'lucide-react';

const BlogModal = ({ blog, isOpen, onClose }) => {
  if (!isOpen || !blog) return null;

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

          {/* Meta header */}
          <div className="flex flex-wrap items-center gap-3 mb-4 text-xs font-mono">
            <span className="px-3 py-1 rounded-full font-semibold bg-slate-200/15 text-slate-200 border border-slate-400/30">
              {blog.category}
            </span>
            <span className="text-slate-400 flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-slate-300" />
              {blog.date}
            </span>
            <span className="text-slate-400 flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-slate-300" />
              {blog.readTime}
            </span>
          </div>

          {/* Title */}
          <h2 className="text-2xl sm:text-3xl font-display font-bold text-white mb-6 leading-snug">
            {blog.title}
          </h2>

          {/* Article Body */}
          <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed font-light mb-8">
            {blog.paragraphs?.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>

          {/* Key Takeaways */}
          {blog.takeaways && (
            <div className="p-5 rounded-2xl bg-maroon-950/70 border border-slate-400/25 mb-8">
              <h4 className="text-xs font-mono uppercase tracking-wider text-slate-200 mb-3 flex items-center gap-2 font-semibold">
                <Sparkles className="w-4 h-4 text-slate-300" />
                <span>Key Engineering Takeaways</span>
              </h4>
              <ul className="space-y-2">
                {blog.takeaways.map((t, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-200">
                    <span className="text-slate-300 font-bold">✓</span>
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Tags & Footer */}
          <div className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-white/10">
            <div className="flex flex-wrap gap-2">
              {blog.tags.map((tag, tIdx) => (
                <span
                  key={tIdx}
                  className="px-2.5 py-1 rounded-lg text-xs font-mono bg-maroon-950 text-slate-300 border border-slate-400/20"
                >
                  #{tag}
                </span>
              ))}
            </div>

            <button
              onClick={onClose}
              className="px-5 py-2 rounded-xl bg-gradient-to-r from-slate-100 to-zinc-300 text-maroon-950 font-bold text-xs shadow-md shadow-white/10"
            >
              Done Reading
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default BlogModal;
