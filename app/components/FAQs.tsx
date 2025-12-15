const faqs = [
  ["Is there a free plan?", "Yes, forever free."],
  ["Cancel anytime?", "Absolutely."],
  ["Is my data secure?", "Enterprise-grade security."],
];

export default function FAQ() {
  return (
    <section className="py-24 max-w-4xl mx-auto">
      <h2 className="text-4xl font-bold text-center mb-12">FAQ</h2>
      {faqs.map(([q, a]) => (
        <div key={q} className="mb-6">
          <h4 className="font-semibold">{q}</h4>
          <p className="text-muted-foreground">{a}</p>
        </div>
      ))}
    </section>
  );
}
