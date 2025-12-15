const features = [
  { title: "Task Management", desc: "Organize tasks effortlessly." },
  { title: "Automation", desc: "Save hours with workflows." },
  { title: "Collaboration", desc: "Work together in real time." },
  { title: "Analytics", desc: "Track productivity clearly." },
];

export default function Features() {
  return (
    <section className="py-24">
      <h2 className="text-4xl font-bold text-center mb-12">
        Everything you need
      </h2>
      <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {features.map((f) => (
          <div key={f.title} className="p-6 border rounded-xl">
            <h3 className="font-semibold text-xl mb-2">{f.title}</h3>
            <p className="text-muted-foreground">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
