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
    <main className="bg-slate-900 text-gray-100">
      <Navbar />
      <Hero />
      <Logos />
      <Features />
      <HowItWorks />
      <Pricing />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  );
}
export const metadata = {
  title: "ShadowDesk – Modern SaaS Platform",
  description:
    "Organize tasks, automate workflows, and boost productivity.",
};
