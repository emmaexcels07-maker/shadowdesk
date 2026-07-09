"use client";

import React, { useState } from "react";

interface TaskFormProps {
  /** Optional callback to notify parent layout stream to refresh task listings */
  onTaskCreated?: () => void;
}

export default function TaskForm({ onTaskCreated }: TaskFormProps) {
  const [title, setTitle] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault(); // Prevents layout refreshing natively
    
    // Quick micro-validation guard
    const cleanTitle = title.trim();
    if (!cleanTitle) return;

    setIsSubmitting(true);
    setErrorMessage(null);

    try {
      const response = await fetch("/api/tasks", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title: cleanTitle }),
      });

      if (!response.ok) {
        throw new Error("Failed to deploy task down-stream.");
      }

      setTitle("");
      // Safely run refresher callback if attached
      if (onTaskCreated) onTaskCreated();
    } catch (err) {
      setErrorMessage(err instanceof Error ? err.message : "An unexpected operational error occurred.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="w-full space-y-4">
      <div className="flex flex-col sm:flex-row gap-2.5 items-stretch">
        
        {/* Core Input Field Wrapper */}
        <div className="relative flex-grow">
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            disabled={isSubmitting}
            placeholder="Type task asset name (e.g., Run DB migrations)"
            className="w-full px-4 py-3 bg-slate-950/60 backdrop-blur-md text-slate-100 placeholder-slate-500 text-sm rounded-xl border border-slate-800 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500/30 outline-none transition-all duration-200 disabled:opacity-60"
          />
        </div>

        {/* Dynamic Action Button */}
        <button
          type="submit"
          disabled={isSubmitting || !title.trim()}
          className="relative group flex items-center justify-center gap-2 px-5 py-3 sm:py-0 bg-gradient-to-br from-indigo-500 to-purple-600 text-sm font-semibold text-white rounded-xl shadow-lg shadow-indigo-500/10 transition-all duration-200 hover:scale-[1.01] hover:shadow-indigo-500/20 active:scale-[0.99] disabled:opacity-40 disabled:hover:scale-100 min-w-[100px]"
        >
          {isSubmitting ? (
            /* Hardware accelerated micro spinner */
            <svg className="animate-spin h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
            </svg>
          ) : (
            <>
              <span className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />
              <span>Queue</span>
            </>
          )}
        </button>
      </div>

      {/* Safety Catch Error UI feedback block */}
      {errorMessage && (
        <div className="text-xs text-red-400 font-medium flex items-center gap-1.5 animate-fadeIn px-1">
          <svg className="w-4 h-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
          <span>{errorMessage}</span>
        </div>
      )}
    </form>
  );
}