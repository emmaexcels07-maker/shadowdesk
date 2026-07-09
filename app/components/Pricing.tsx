'use client';

import React from "react";

const plans = [
  {
    name: "Starter",
    price: "$0",
    period: "forever",
    description: "Essential workflows for small teams and developers looking to streamline delivery.",
    features: [
      "Up to 3 team members",
      "Core task pipelines",
      "Basic automation rules (50/mo)",
      "Standard community support",
    ],
    cta: "Get Started Free",
    featured: false,
  },
  {
    name: "Pro",
    price: "$19",
    period: "per user/mo",
    description: "Advanced engine optimization and automation for scaling organizations.",
    features: [
      "Unlimited team members",
      "Advanced custom pipelines",
      "Unlimited automation logic",
      "Priority SLA support (under 2hr)",
      "Custom analytics & charts",
    ],
    cta: "Upgrade to Pro",
    featured: true,
  },
  {
    name: "Enterprise",
    price: "$49",
    period: "per user/mo",
    description: "Tailored infrastructure, deep compliance control, and dedicated architecture support.",
    features: [
      "Everything in Pro tier",
      "SOC 2 Type II compliance layers",
      "Custom REST/GraphQL API access",
      "Single Sign-On (SSO / SAML)",
      "Dedicated account engineer",
    ],
    cta: "Contact Sales",
    featured: false,
  },
];

export default function Pricing() {
  return (
    <div className="w-full max-w-6xl mx-auto px-4">
      {/* Section Header Accent */}
      <div className="text-center mb-16 md:mb-24">
        <span className="text-xs font-semibold tracking-widest text-indigo-400 uppercase bg-indigo-500/10 px-3 py-1 rounded-full border border-indigo-500/20">
          Transparent Plans
        </span>
        <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-5xl bg-gradient-to-b from-white to-slate-400 bg-clip-text text-transparent">
          Predictable rates, built to scale
        </h2>
        <p className="mt-4 max-w-xl mx-auto text-base text-slate-400">
          Choose a foundation that matches your momentum. Swap plans smoothly as your architecture scales.
        </p>
      </div>

      {/* Grid Architecture */}
      <div className="grid gap-8 lg:grid-cols-3 items-start max-w-5xl mx-auto">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={`relative flex flex-col p-8 rounded-2xl backdrop-blur-sm transition-all duration-300 shadow-xl 
              ${
                plan.featured
                  ? "border-2 border-indigo-500 bg-slate-900/60 lg:-translate-y-4 lg:shadow-indigo-500/5"
                  : "border border-slate-900 bg-slate-950/40 hover:border-slate-800"
              }`}
          >
            {/* Featured Accent Ribbon */}
            {plan.featured && (
              <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 px-4 py-0.5 text-xs font-semibold text-white tracking-wide shadow-md">
                Most Popular
              </span>
            )}

            {/* Header / Meta Block */}
            <div>
              <h3 className="text-xl font-bold text-slate-100">{plan.name}</h3>
              <p className="mt-2 text-sm text-slate-400 min-h-[40px] leading-relaxed">
                {plan.description}
              </p>
              
              {/* Financial Tokens */}
              <div className="mt-6 flex items-baseline gap-1">
                <span className="text-4xl font-extrabold tracking-tight text-white">
                  {plan.price}
                </span>
                <span className="text-sm font-medium text-slate-500">
                  /{plan.period}
                </span>
              </div>
            </div>

            {/* Feature Validation Stack */}
            <ul className="mt-8 space-y-4 border-t border-slate-900 pt-6 flex-grow">
              {plan.features.map((feature) => (
                <li key={feature} className="flex items-start gap-3 text-sm text-slate-300">
                  {/* Clean Minimalist Verification Check SVG */}
                  <svg
                    className={`h-5 w-5 flex-shrink-0 mt-0.5 ${plan.featured ? "text-indigo-400" : "text-slate-500"}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="3"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            {/* Direct Action Target */}
            <div className="mt-8">
              <button
                className={`w-full py-3 px-4 rounded-xl text-sm font-semibold transition-all duration-200 hover:scale-[1.01] active:scale-[0.99]
                  ${
                    plan.featured
                      ? "bg-gradient-to-br from-indigo-500 to-purple-600 text-white shadow-lg shadow-indigo-500/10 hover:shadow-indigo-500/20"
                      : "bg-slate-900 border border-slate-800 text-slate-300 hover:bg-slate-800 hover:text-white hover:border-slate-700"
                  }`}
              >
                {plan.cta}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
