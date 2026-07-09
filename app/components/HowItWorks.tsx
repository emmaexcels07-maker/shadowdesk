'use client';

import React from "react";

const steps = [
  {
    number: "01",
    title: "Connect Your Stack",
    desc: "Integrate your existing tools in seconds with native webhooks. No complex custom architecture or engineering overhead required.",
  },
  {
    number: "02",
    title: "Configure Workflows",
    desc: "Map your team’s delivery rules using our visual node-based engine. Automate handoffs, notifications, and repetitive status updates.",
  },
  {
    number: "03",
    title: "Optimize Velocity",
    desc: "Monitor bottleneck diagnostics in real-time. Use automated predictive insights to adjust workloads and ship ahead of schedule.",
  },
];

export default function HowItWorks() {
  return (
    <div className="w-full max-w-6xl mx-auto px-4">
      {/* Header Accent */}
      <div className="text-center mb-20">
        <span className="text-xs font-semibold tracking-widest text-indigo-400 uppercase bg-indigo-500/10 px-3 py-1 rounded-full border border-indigo-500/20">
          The Pipeline
        </span>
        <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-5xl bg-gradient-to-b from-white to-slate-400 bg-clip-text text-transparent">
          Three steps to frictionless execution
        </h2>
      </div>

      {/* Grid wrapper with connected timeline line */}
      <div className="relative grid gap-8 lg:grid-cols-3">
        
        {/* Horizontal structural connecting line (Visible on large viewports only) */}
        <div className="hidden lg:block absolute top-[52px] left-[15%] right-[15%] h-[1px] bg-gradient-to-r from-indigo-500/0 via-slate-800 to-indigo-500/0 -z-10" />

        {steps.map((step, index) => (
          <div key={step.number} className="relative group flex flex-col items-start p-6 rounded-2xl border border-slate-900 bg-slate-950/40 backdrop-blur-sm transition-all duration-300 hover:border-slate-800">
            
            {/* Steps Numeric Accent Badge */}
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-900 border border-slate-800 text-sm font-bold text-indigo-400 transition-all duration-300 group-hover:border-indigo-500/50 group-hover:text-white group-hover:shadow-[0_0_15px_rgba(99,102,241,0.15)]">
              {step.number}
            </div>

            {/* Typography Content block */}
            <h3 className="mt-6 text-xl font-semibold text-slate-100 group-hover:text-white transition-colors">
              {step.title}
            </h3>
            
            <p className="mt-3 text-sm leading-relaxed text-slate-400 group-hover:text-slate-300 transition-colors">
              {step.desc}
            </p>

            {/* Subtle mobile indicator/arrow */}
            <div className="lg:hidden absolute bottom-4 right-4 text-slate-700 font-mono text-xs select-none">
              {index < steps.length - 1 ? "↓" : "✓"}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}