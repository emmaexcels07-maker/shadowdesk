import React from "react";
import TaskForm from "./task-form";
import TaskList from "./task-list";

export default function DashboardPage() {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-8 md:py-12">
      
      {/* Structural Workspace Header */}
      <header className="mb-10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-b border-slate-900 pb-6">
        <div>
          <div className="flex items-center gap-2 text-xs font-semibold text-indigo-400 uppercase tracking-wider">
            Workspace / Overview
          </div>
          <h1 className="mt-1 text-2xl font-bold tracking-tight text-white sm:text-3xl">
            Control Center
          </h1>
        </div>

        {/* Dynamic Activity / Meta Indicators */}
        <div className="flex items-center gap-3">
          <div className="rounded-xl border border-slate-800 bg-slate-900/30 px-4 py-2 text-xs font-medium text-slate-400 backdrop-blur-sm">
            Status: <span className="text-emerald-400 font-semibold">Live Syncing</span>
          </div>
        </div>
      </header>

      {/* Asymmetric 12-Column Grid Architecture */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Input Controls Column (Takes up 4 columns on desktop) */}
        <aside className="lg:col-span-4 lg:sticky lg:top-28 space-y-6">
          <div className="rounded-2xl border border-slate-900 bg-slate-950/40 backdrop-blur-sm p-6 shadow-xl shadow-black/10">
            <div className="mb-4">
              <h2 className="text-sm font-semibold text-slate-200 tracking-wide uppercase">
                Deploy New Task
              </h2>
              <p className="text-xs text-slate-500 mt-0.5">
                Fill in parameters to queue operational tasks immediately.
              </p>
            </div>
            
            <TaskForm />
          </div>
        </aside>

        {/* Live Data Streams Column (Takes up 8 columns on desktop) */}
        <main className="lg:col-span-8 space-y-6">
          <div className="rounded-2xl border border-slate-900 bg-slate-950/20 backdrop-blur-sm p-6 shadow-xl">
            <div className="mb-6 flex items-center justify-between">
              <div>
                <h2 className="text-base font-semibold text-slate-100">
                  Active Operational Pipeline
                </h2>
                <p className="text-xs text-slate-400 mt-0.5">
                  Real-time visualization of engine execution stages.
                </p>
              </div>
              
              {/* Context Count Accent Indicator */}
              <span className="rounded-md bg-indigo-500/10 border border-indigo-500/20 px-2 py-0.5 text-xs font-semibold text-indigo-400">
                Live Stream
              </span>
            </div>

            <TaskList />
          </div>
        </main>

      </div>
    </div>
  );
}