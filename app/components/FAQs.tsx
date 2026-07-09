'use client';

import { useState } from "react";

const faqData = [
  {
    question: "Is there a free tier available?",
    answer: "Yes, our Free Plan includes all core task tracking tools for up to 3 team members. No credit card is required to get started, and you can stay on the free tier as long as you like."
  },
  {
    question: "Can I change or cancel my plan at any time?",
    answer: "Absolutely. You can upgrade, downgrade, or cancel your subscription directly from your billing dashboard. If you cancel, your premium features will remain active until the end of your current billing cycle."
  },
  {
    question: "How secure is my data with ShadowDesk?",
    answer: "Security is our highest priority. We use enterprise-grade AES-256 encryption at rest and TLS 1.3 in transit. Our infrastructure is SOC 2 Type II compliant, and we run continuous automated vulnerability scans."
  },
  {
    question: "Do you offer custom integrations for enterprise teams?",
    answer: "Yes. Our Enterprise tier includes dedicated support, custom API access, and tailored integration pipelines for platforms like Salesforce, internal databases, and custom ERP systems."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full max-w-3xl mx-auto">
      {/* Header Accent */}
      <div className="text-center mb-16">
        <span className="text-xs font-semibold tracking-widest text-indigo-400 uppercase bg-indigo-500/10 px-3 py-1 rounded-full border border-indigo-500/20">
          Questions
        </span>
        <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl bg-gradient-to-b from-white to-slate-400 bg-clip-text text-transparent">
          Frequently asked questions
        </h2>
        <p className="mt-4 text-slate-400">
          Can’t find the answer you’re looking for? Reach out to our dedicated support team.
        </p>
      </div>

      {/* Accordion Group */}
      <div className="space-y-4">
        {faqData.map((item, index) => {
          const isOpen = openIndex === index;
          return (
            <div
              key={index}
              className="group overflow-hidden rounded-2xl border border-slate-800/80 bg-slate-900/20 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="flex w-full items-center justify-between p-6 text-left text-slate-200 transition-colors hover:text-white focus:outline-none"
                aria-expanded={isOpen}
              >
                <span className="text-base font-medium sm:text-lg">
                  {item.question}
                </span>
                <span className="ml-4 flex h-7 items-center">
                  {/* Chevron Icon with CSS rotation */}
                  <svg
                    className={`h-5 w-5 transform text-slate-400 transition-transform duration-300 group-hover:text-indigo-400 ${
                      isOpen ? "rotate-180 text-indigo-400" : ""
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </button>

              {/* Animated Height Collapse */}
              <div
                className={`grid transition-all duration-300 ease-in-out ${
                  isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden">
                  <div className="px-6 pb-6 text-sm sm:text-base leading-relaxed text-slate-400 border-t border-slate-800/40 pt-4">
                    {item.answer}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}