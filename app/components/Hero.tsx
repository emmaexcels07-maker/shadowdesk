"use client";

import { motion, Variants } from "framer-motion"; // <-- Import Variants


export default function Hero() {
  // Animation variants for an elegant cascade effect
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1], // The red line will vanish now
      },
    },
  };

  return (
    <section className="relative flex flex-col items-center justify-center px-4 pt-20 pb-12 text-center md:pt-28 md:pb-20 overflow-hidden">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-4xl mx-auto z-10 flex flex-col items-center"
      >
        {/* Modern Inline Badge */}
        <motion.div variants={itemVariants} className="mb-6">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-indigo-500/30 bg-indigo-500/10 px-3.5 py-1 text-xs font-medium text-indigo-300 backdrop-blur-md">
            <span className="h-1.5 w-1.5 rounded-full bg-indigo-400 animate-pulse" />
            Introducing ShadowDesk v2.0
          </span>
        </motion.div>

        {/* Chiseled Gradient Typography */}
        <motion.h1
          variants={itemVariants}
          className="text-4xl font-extrabold tracking-tight text-white sm:text-6xl md:text-7xl bg-gradient-to-b from-white via-slate-200 to-slate-400 bg-clip-text text-transparent max-w-3xl leading-[1.1]"
        >
          Manage your work.<br className="hidden sm:inline" /> Focus on what matters.
        </motion.h1>

        {/* Descriptive, Balanced Subtitle */}
        <motion.p
          variants={itemVariants}
          className="mt-6 max-w-xl text-base sm:text-lg leading-relaxed text-slate-400"
        >
          ShadowDesk helps technical teams organize high-velocity tasks, automate custom workflows, and reclaim focus—all inside one command center.
        </motion.p>

        {/* Interactive CTA Cluster */}
        <motion.div
          variants={itemVariants}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto"
        >
          {/* Primary Button with internal glow layer */}
          <button className="w-full sm:w-auto group relative overflow-hidden rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-indigo-500/10 transition-all duration-300 hover:scale-[1.02] hover:shadow-indigo-500/20 active:scale-[0.98]">
            <span className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />
            Get Started Free
          </button>

          {/* Secondary Border Button with backdrop blur */}
          <button className="w-full sm:w-auto flex items-center justify-center gap-2 rounded-xl border border-slate-800 bg-slate-900/40 backdrop-blur-sm px-6 py-3.5 text-sm font-semibold text-slate-300 transition-all hover:bg-slate-900 hover:text-white hover:border-slate-700">
            <span>View Demo</span>
            <svg className="w-4 h-4 text-slate-500 group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </motion.div>
      </motion.div>
    </section>
  );
}