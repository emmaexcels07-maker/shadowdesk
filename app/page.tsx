import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Logos from "./components/Logos";
import Features from "./components/Features";
import HowItWorks from "./components/HowItWorks";
import Pricing from "./components/Pricing";
import FAQ from "./components/FAQs";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

export const metadata = {
  title: "ShadowDesk – Modern SaaS Platform",
  description: "Organize tasks, automate workflows, and boost productivity.",
};

export default function Home() {
  return (
    <div className="relative min-h-screen bg-slate-950 text-slate-100 antialiased selection:bg-indigo-500/30 selection:text-indigo-200">
      {/* Premium Background Ambient Glows */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[600px] bg-gradient-to-b from-indigo-500/10 via-purple-500/5 to-transparent blur-3xl opacity-70" />
        <div className="absolute top-[120vh] -left-20 w-96 h-96 bg-blue-500/5 blur-3xl rounded-full" />
        <div className="absolute top-[250vh] -right-20 w-96 h-96 bg-purple-500/5 blur-3xl rounded-full" />
      </div>

      <Navbar />

      <main className="relative z-10 flex flex-col items-center justify-between">
        {/* Hero & Trust Section */}
        <section className="w-full pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden">
          <Hero />
          <div className="mt-16 md:mt-24 border-y border-slate-800/60 bg-slate-900/30 py-8 backdrop-blur-sm">
            <Logos />
          </div>
        </section>

        {/* Core Value Proposition */}
        <section id="features" className="w-full py-20 md:py-32 container mx-auto px-4">
          <Features />
        </section>

        {/* Narrative / Workflow */}
        <section id="how-it-works" className="w-full py-20 md:py-32 bg-slate-900/40 border-y border-slate-800/40 backdrop-blur-sm">
          <div className="container mx-auto px-4">
            <HowItWorks />
          </div>
        </section>

        {/* Conversion & Proof */}
        <section id="pricing" className="w-full py-20 md:py-32 container mx-auto px-4">
          <Pricing />
        </section>

        {/* Objection Handling */}
        <section id="faq" className="w-full py-20 md:py-32 bg-slate-900/20 border-t border-slate-800/30">
          <div className="container mx-auto px-4 max-w-4xl">
            <FAQ />
          </div>
        </section>

        {/* Final Closer */}
        <section className="w-full py-20 md:py-36 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-indigo-950/20 via-transparent to-transparent pointer-events-none" />
          <div className="container mx-auto px-4 relative z-10">
            <CTA />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}