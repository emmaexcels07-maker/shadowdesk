export default function Pricing() {
  const plans = [
    { name: "Starter", price: "Free" },
    { name: "Pro", price: "$19/mo", featured: true },
    { name: "Enterprise", price: "$49/mo" },
  ];

  return (
    <section className="py-24">
      <h2 className="text-4xl font-bold text-center mb-12">Pricing</h2>
      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={`p-8 rounded-xl border ${
              plan.featured
                ? "border-indigo-500 bg-indigo-500/10"
                : "border-gray-800"
            }`}
          >
            <h3 className="text-2xl font-semibold mb-4">{plan.name}</h3>
            <p className="text-3xl font-bold">{plan.price}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
