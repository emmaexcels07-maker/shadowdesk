import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Logos from "./components/Logos";
import Features from "./components/Features";
import HowItWorks from "./components/HowItWorks";
import Pricing from "./components/Pricing";
import FAQ from "./components/FAQs";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0B0F19] text-slate-100 selection:bg-purple-500/30">
      {/* 1. NAVIGATION BAR */}
      <nav className="fixed top-0 z-50 w-full border-b border-slate-800/60 bg-[#0B0F19]/80 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
          <span className="text-xl font-bold tracking-tight bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">
            ShadowDesk
          </span>
          <div className="flex items-center gap-6">
            <a href="#features" className="text-sm text-slate-400 hover:text-white transition">Features</a>
            <a href="#pricing" className="text-sm text-slate-400 hover:text-white transition">Pricing</a>
            <button className="rounded-lg bg-purple-600 px-4 py-2 text-sm font-medium hover:bg-purple-500 transition shadow-lg shadow-purple-600/20">
              Get Started
            </button>
          </div>
        </div>
      </nav>

      <main className="pt-16">
        {/* 2. HERO SECTION */}
        <section className="relative mx-auto max-w-5xl px-6 pt-24 pb-16 text-center">
          {/* Subtle background glow */}
          <div className="absolute top-12 left-1/2 -z-10 h-72 w-72 -translate-x-1/2 rounded-full bg-purple-500/10 blur-[120px]" />
          
          <h1 className="text-5xl font-extrabold tracking-tight sm:text-6xl bg-gradient-to-b from-white to-slate-400 bg-clip-text text-transparent">
            Manage your work.<br />Focus on what matters.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-400 leading-relaxed">
            ShadowDesk helps teams organize tasks, automate workflows, and stay productive — all from one dark-mode optimized interface.
          </p>
          <div className="mt-10 flex justify-center gap-4">
            <button className="rounded-xl bg-purple-600 px-6 py-3 font-semibold hover:bg-purple-500 transition shadow-xl shadow-purple-600/20">
              Start Free Trial
            </button>
            <button className="rounded-xl border border-slate-700 bg-slate-900/50 px-6 py-3 font-semibold hover:bg-slate-800 transition">
              Watch Demo
            </button>
          </div>
        </section>

        {/* 3. SOCIAL PROOF / LOGOS */}
        <section className="border-y border-slate-800/50 bg-slate-900/20 py-10">
          <p className="text-center text-xs font-semibold uppercase tracking-widest text-slate-500">Trusted by modern engineering teams</p>
          <div className="mx-auto mt-6 flex max-w-5xl flex-wrap items-center justify-center gap-12 px-6 opacity-40 grayscale contrast-200">
            {/* Loop through your existing logos here */}
            <img src="/logos/logo1.png" alt="Logo 1" className="h-8 w-auto object-contain" />
            <img src="/logos/logo2.png" alt="Logo 2" className="h-8 w-auto object-contain" />
            <img src="/logos/logo3.png" alt="Logo 3" className="h-8 w-auto object-contain" />
            <img src="/logos/logo4.png" alt="Logo 4" className="h-8 w-auto object-contain" />
            <img src="/logos/logo5.png" alt="Logo 5" className="h-8 w-auto object-contain" />
          </div>
        </section>

        {/* 4. FEATURES GRID */}
        <section id="features" className="mx-auto max-w-7xl px-6 py-24">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Everything you need</h2>
            <p className="mt-4 text-slate-400">Ditch the messy toolstack. Experience unified workspace velocity.</p>
          </div>
          
          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { title: "Task Management", desc: "Organize tasks effortlessly with highly interactive kanban boards." },
              { title: "Automation", desc: "Save hours every week with intuitive trigger-and-action background workflows." },
              { title: "Collaboration", desc: "Work together in real time with operational state sync and built-in chat features." },
              { title: "Analytics", desc: "Track productivity clearly via comprehensive server-side dashboard metrics." }
            ].map((feat, i) => (
              <div key={i} className="group relative rounded-2xl border border-slate-800 bg-slate-900/40 p-6 hover:border-slate-700 transition duration-300">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-purple-600/10 text-purple-400 group-hover:bg-purple-600 group-hover:text-white transition duration-300">
                  {/* Insert individual Heroicons here based on index */}
                  {i === 0 && "📋"} {i === 1 && "⚡"} {i === 2 && "💬"} {i === 3 && "📈"}
                </div>
                <h3 className="text-lg font-semibold text-white">{feat.title}</h3>
                <p className="mt-2 text-sm text-slate-400 leading-relaxed">{feat.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 5. PROCESS TIMELINE */}
        <section className="bg-slate-900/10 border-t border-slate-800/40 py-24">
          <div className="mx-auto max-w-5xl px-6">
            <h2 className="text-center text-3xl font-bold tracking-tight">How it works</h2>
            <div className="mt-16 grid gap-8 md:grid-cols-3 relative">
              {[
                { step: "01", title: "Sign Up", desc: "Create your workspace in seconds with zero configuration required." },
                { step: "02", title: "Configure Workflows", desc: "Connect your tools and design custom pipelines using Prisma schemas." },
                { step: "03", title: "Track Results", desc: "Monitor team throughput live with low-latency WebSocket UI state sync." }
              ].map((proc, idx) => (
                <div key={idx} className="relative flex flex-col items-center text-center p-4">
                  <span className="text-5xl font-extrabold text-purple-500/20 tracking-tighter">{proc.step}</span>
                  <h3 className="mt-4 text-xl font-semibold text-white">{proc.title}</h3>
                  <p className="mt-2 text-sm text-slate-400 leading-relaxed">{proc.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 6. PRICING CARDS */}
        <section id="pricing" className="mx-auto max-w-6xl px-6 py-24">
          <h2 className="text-center text-3xl font-bold tracking-tight">Simple, transparent pricing</h2>
          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {[
              { name: "Starter", price: "Free", desc: "For individuals looking to clean up their personal tasks.", popular: false },
              { name: "Pro", price: "$19", desc: "For scaling teams that need robust automated flows.", popular: true },
              { name: "Enterprise", price: "$49", desc: "For large organizations demanding secure architecture.", popular: false }
            ].map((plan, idx) => (
              <div key={idx} className={`relative rounded-2xl p-8 flex flex-col justify-between border ${plan.popular ? 'border-purple-500 bg-slate-900/80 shadow-2xl shadow-purple-500/10' : 'border-slate-800 bg-slate-900/30'}`}>
                {plan.popular && <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-purple-500 px-3 py-1 text-xs font-semibold tracking-wide text-white">Most Popular</span>}
                <div>
                  <h3 className="text-xl font-bold text-white">{plan.name}</h3>
                  <div className="mt-4 flex items-baseline text-white">
                    <span className="text-4xl font-extrabold tracking-tight">{plan.price}</span>
                    {plan.price !== "Free" && <span className="ml-1 text-sm text-slate-400">/month</span>}
                  </div>
                  <p className="mt-4 text-sm text-slate-400">{plan.desc}</p>
                </div>
                <button className={`mt-8 w-full rounded-xl py-3 font-medium transition ${plan.popular ? 'bg-purple-600 hover:bg-purple-500 text-white shadow-lg' : 'bg-slate-800 hover:bg-slate-700 text-slate-200'}`}>
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* 7. FAQ ACCORDION */}
        <section className="mx-auto max-w-3xl px-6 py-24 border-t border-slate-800/40">
          <h2 className="text-center text-3xl font-bold tracking-tight">Frequently Asked Questions</h2>
          <div className="mt-12 space-y-4">
            {[
              { q: "Is there a free plan?", a: "Yes! Our Starter tier is completely free forever for up to 3 team members." },
              { q: "Can I cancel my subscription anytime?", a: "Absolutely. You can upgrade, downgrade, or cancel directly from your settings panel instantly." },
              { q: "Is my workspace data secure?", a: "Data security is paramount. We encrypt data in transit and at rest using enterprise-grade protocols." }
            ].map((faq, idx) => (
              <div key={idx} className="rounded-xl border border-slate-800/60 bg-slate-900/20 p-6">
                <h4 className="text-base font-semibold text-white">{faq.q}</h4>
                <p className="mt-2 text-sm text-slate-400 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 8. FINAL CALL TO ACTION */}
        <section className="relative mx-auto max-w-5xl px-6 py-24 text-center">
          <div className="absolute inset-0 -z-10 rounded-3xl bg-gradient-to-r from-purple-900/20 to-indigo-900/20 border border-purple-500/20 blur-sm" />
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-white">Start organizing today</h2>
          <p className="mx-auto mt-4 max-w-md text-slate-400 text-sm">Join thousands of engineers refining their delivery workflows inside an immersive ecosystem.</p>
          <button className="mt-8 rounded-xl bg-purple-600 px-8 py-3 font-semibold hover:bg-purple-500 transition shadow-xl shadow-purple-600/20">
            Create Your ShadowDesk
          </button>
        </section>
      </main>

      {/* 9. FOOTER */}
      <footer className="border-t border-slate-900 bg-[#070a12] py-8 text-center text-xs text-slate-600">
        <p>© 2026 ShadowDesk. Built with Next.js, Tailwind, and Prisma. All rights reserved.</p>
      </footer>
    </div>
  )
}