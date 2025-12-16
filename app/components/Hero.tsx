"use client";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="py-32 text-center">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-5xl font-bold mb-6"
      >
        Manage your work. Focus on what matters.
      </motion.h1>

      <p className="text-gray-400 max-w-xl mx-auto mb-8">
        ShadowDesk helps teams organize tasks, automate workflows,
        and stay productive — all from one platform.
      </p>

      <div className="flex justify-center gap-4">
        <button className="bg-indigo-600 px-6 py-3 rounded-lg font-medium">
          Get Started Free
        </button>
        <button className="border border-gray-700 px-6 py-3 rounded-lg">
          View Demo
        </button>
      </div>
    </section>
  );
}
