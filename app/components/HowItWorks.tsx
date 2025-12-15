export default function HowItWorks() {
  const steps = ["Sign Up", "Configure Workflows", "Track Results"];

  return (
    <section className="py-24 bg-muted/50">
      <h2 className="text-4xl font-bold text-center mb-12">
        How it works
      </h2>
      <div className="flex flex-col md:flex-row justify-center gap-8">
        {steps.map((step, i) => (
          <div key={step} className="p-6 border rounded-xl">
            <span className="text-indigo-600 font-bold">0{i + 1}</span>
            <h3 className="text-xl font-semibold mt-2">{step}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}
