

import React from "react";

const features = [
  {
    title: "Task Management",
    desc: "Organize, prioritize, and deploy tasks effortlessly. Create custom pipelines that map directly to your unique team structure.",
    icon: (
      <svg className="w-5 h-5 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
      </svg>
    ),
  },
  {
    title: "Next-Gen Automation",
    desc: "Save hours each week by offloading repetitive tasks to smart workflows. Build complex triggers with zero code required.",
    icon: (
      <svg className="w-5 h-5 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    title: "Real-Time Collaboration",
    desc: "Co-author plans, leave inline feedback, and instantly sync across systems. Work together live without stepping on toes.",
    icon: (
      <svg className="w-5 h-5 text-pink-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
  {
    title: "Advanced Analytics",
    desc: "Track velocity, identify bottlenecks, and project launch targets clearly with real-time health dashboards.",
    icon: (
      <svg className="w-5 h-5 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10a2 2 0 01-2 2h-2a2 2 0 01-2-2zm9 5v-18a2 2 0 00-2-2h-2a2 2 0 00-2 2v18a2 2 0 002 2h2a2 2 0 002-2z" />
      </svg>
    ),
  },
];

export default function Features() {
  return (
    <div className="w-full max-w-6xl mx-auto px-4">
      {/* Header section with badge */}
      <div className="text-center mb-16 md:mb-24">
        <span className="text-xs font-semibold tracking-widest text-indigo-400 uppercase bg-indigo-500/10 px-3 py-1 rounded-full border border-indigo-500/20">
          Core Engine
        </span>
        <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-5xl bg-gradient-to-b from-white to-slate-400 bg-clip-text text-transparent">
          Everything you need to scale
        </h2>
        <p className="mt-4 max-w-xl mx-auto text-base sm:text-lg text-slate-400">
          A unified command center engineered to eliminate operational noise and amplify focus.
        </p>
      </div>

      {/* Grid container */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {features.map((f) => (
          <div
            key={f.title}
            className="group relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/30 p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-slate-700 hover:bg-slate-900/50"
          >
            {/* Ambient hover light effect inside card */}
            <div className="absolute inset-0 -z-10 bg-gradient-to-br from-indigo-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            {/* Icon Container */}
            <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-xl bg-slate-950 border border-slate-800 shadow-inner group-hover:border-slate-700 transition-colors">
              {f.icon}
            </div>

            {/* Typography */}
            <h3 className="text-lg font-semibold text-slate-100 group-hover:text-white transition-colors duration-200">
              {f.title}
            </h3>
            
            <p className="mt-2 text-sm leading-relaxed text-slate-400 group-hover:text-slate-300 transition-colors duration-200">
              {f.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}