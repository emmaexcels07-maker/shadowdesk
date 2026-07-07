import Image from "next/image";

export default function Logos() {
  return (
    <section className="py-12 bg-slate-800">
      <div className="max-w-6xl mx-auto flex flex-wrap justify-center items-center gap-8">
        <Image
          src="/logos/logo1.png"
          alt="Logo 1"
          width={120}
          height={32}
          className="h-8 grayscale opacity-70 hover:opacity-100 transition"
        />
        <Image
          src="/logos/logo2.png"
          alt="Logo 2"
          width={120}
          height={32}
          className="h-8 grayscale opacity-70 hover:opacity-100 transition"
        />
        <Image
          src="/logos/logo3.png"
          alt="Logo 3"
          width={120}
          height={32}
          className="h-8 grayscale opacity-70 hover:opacity-100 transition"
        />
        <Image
          src="/logos/logo4.png"
          alt="Logo 4"
          width={120}
          height={32}
          className="h-8 grayscale opacity-70 hover:opacity-100 transition"
        />
        <Image
          src="/logos/logo5.png"
          alt="Logo 5"
          width={120}
          height={32}
          className="h-8 grayscale opacity-70 hover:opacity-100 transition"
        />
      </div>
    </section>
  );
}

