"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  email: z.string().trim().min(1, "Email is required").email("Please enter a valid email address"),
});

type FormInput = z.infer<typeof schema>;

export default function EmailSignup() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormInput>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: FormInput) => {
    // Simulate premium async API submission sequence
    await new Promise((resolve) => setTimeout(resolve, 1400));
    console.log("Registered subscriber:", data.email);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="flex items-center justify-center gap-2 text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-6 py-4 rounded-xl max-w-md mx-auto animate-fadeIn">
        <svg className="w-5 h-5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
        </svg>
        <span className="font-medium text-sm">Check your inbox. Secure access link dispatched!</span>
      </div>
    );
  }

  return (
    <div className="w-full max-w-md mx-auto">
      <form onSubmit={handleSubmit(onSubmit)} className="relative flex flex-col sm:flex-row gap-2 w-full">
        {/* Input Wrapper for relative icon or focus tracking */}
        <div className="relative flex-grow">
          <input
            {...register("email")}
            type="email"
            autoComplete="email"
            disabled={isSubmitting}
            placeholder="Enter your work email"
            className={`w-full px-4 py-3 bg-slate-950/60 backdrop-blur-md text-slate-100 placeholder-slate-500 text-sm rounded-xl border transition-all duration-200 outline-none focus:bg-slate-950
              ${
                errors.email
                  ? "border-red-500/50 focus:border-red-500 focus:ring-1 focus:ring-red-500/30"
                  : "border-slate-800 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500/30"
              } disabled:opacity-60`}
          />
        </div>

        {/* Submit Action Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="relative group flex items-center justify-center gap-2 h-auto px-5 py-3 sm:py-0 bg-gradient-to-br from-indigo-500 to-purple-600 text-sm font-semibold text-white rounded-xl shadow-lg shadow-indigo-500/10 transition-all duration-200 hover:scale-[1.01] hover:shadow-indigo-500/20 active:scale-[0.99] disabled:opacity-70 disabled:hover:scale-100 overflow-hidden min-w-[100px]"
        >
          {isSubmitting ? (
            /* Premium micro-spinner */
            <svg className="animate-spin h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
            </svg>
          ) : (
            <>
              <span className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />
              <span>Join Waitlist</span>
            </>
          )}
        </button>
      </form>

      {/* Structured, absolute-positioned error block to eliminate dynamic height layout popping */}
      <div className="h-5 relative mt-1.5 px-1">
        {errors.email && (
          <p className="absolute text-xs text-red-400 font-medium flex items-center gap-1 animate-fadeIn">
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
            {errors.email.message}
          </p>
        )}
      </div>
    </div>
  );
}