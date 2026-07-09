"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

const navLinks = [
  { label: "Features", href: "#features" },
  { label: "How it Works", href: "#how-it-works" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
];

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Prevent Next.js hydration mismatch flashing by waiting for client mount
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 w-[calc(100%-2rem)] max-w-6xl z-50 rounded-2xl border border-slate-800/80 bg-slate-950/60 backdrop-blur-md shadow-lg shadow-black/20 transition-all duration-300">
      <div className="mx-auto px-4 sm:px-6 py-3.5 flex items-center justify-between">
        
        {/* Brand Block */}
        <a href="#" className="flex items-center gap-2 font-bold text-white text-base tracking-tight group">
          <div className="h-5 w-5 rounded-md bg-indigo-500 flex items-center justify-center shadow-md shadow-indigo-500/20 transition-transform group-hover:scale-105">
            <div className="h-1.5 w-1.5 rounded-full bg-white" />
          </div>
          <span>ShadowDesk</span>
        </a>

        {/* Central Navigation Links (Hidden on small screens) */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-slate-400 hover:text-white transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Utility / Call-To-Action Cluster */}
        <div className="flex items-center gap-3">
          {/* Hydration-Safe Theme Switcher */}
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="p-2 rounded-xl border border-slate-800 bg-slate-900/40 text-slate-400 hover:text-white hover:border-slate-700 transition-all duration-200 focus:outline-none"
            aria-label="Toggle visual theme"
          >
            {mounted && theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
          </button>

          {/* Premium micro-interactive Button */}
          <button className="relative group overflow-hidden bg-white text-slate-950 hover:bg-slate-100 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 shadow-sm shadow-white/5 hover:scale-[1.02] active:scale-[0.98]">
            Get Started
          </button>
        </div>
      </div>
    </nav>
  );
}