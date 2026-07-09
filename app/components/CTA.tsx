export default function CTA() {
  return (
    <div className="relative isolate overflow-hidden rounded-3xl bg-slate-900 border border-slate-800 px-6 py-20 text-center shadow-2xl sm:px-16 sm:py-28">
      {/* Premium ambient glow behind the text */}
      <div
        className="absolute -top-24 left-1/2 -z-10 h-[400px] w-[600px] -translate-x-1/2 [mask-image:radial-gradient(closest-side,white,transparent)]"
        aria-hidden="true"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 opacity-20 blur-3xl" />
      </div>

      {/* Subtle grid pattern for texture */}
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-40" />

      {/* Content */}
      <div className="mx-auto max-w-2xl">
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl bg-gradient-to-b from-white to-slate-400 bg-clip-text text-transparent">
          Ready to transform your workflow?
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-lg leading-8 text-slate-400">
          Join thousands of teams using ShadowDesk to automate operations, eliminate friction, and ship products faster.
        </p>
        
        {/* Actions */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className="w-full sm:w-auto relative group overflow-hidden rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 px-6 py-3 text-sm font-semibold text-white shadow-md transition-all duration-300 hover:scale-[1.02] hover:shadow-indigo-500/20 active:scale-[0.98]">
            <span className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />
            Get Started Free
          </button>
          
          <button className="w-full sm:w-auto rounded-xl border border-slate-800 bg-slate-950/40 backdrop-blur-sm px-6 py-3 text-sm font-semibold text-slate-300 transition-all hover:bg-slate-900 hover:text-white hover:border-slate-700">
            Schedule a Demo
          </button>
        </div>

        {/* Micro-proof text */}
        <p className="mt-4 text-xs text-slate-500">
          No credit card required. 14-day free trial.
        </p>
      </div>
    </div>
  );
}
