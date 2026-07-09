import Image from "next/image";

const corporateLogos = [
  { src: "/logos/logo1.png", alt: "Acme Corp" },
  { src: "/logos/logo2.png", alt: "Stark Industries" },
  { src: "/logos/logo3.png", alt: "Wayne Enterprises" },
  { src: "/logos/logo4.png", alt: "Cyberdyne Systems" },
  { src: "/logos/logo5.png", alt: "Tyrell Corp" },
];

export default function Logos() {
  // We duplicate the array to generate a seamless looping texture track
  const marqueeTrack = [...corporateLogos, ...corporateLogos];

  return (
    <div className="w-full">
      {/* Contextual subtext framing social proof */}
      <p className="text-center text-xs font-semibold tracking-wider text-slate-500 uppercase">
        Trusted by high-velocity engineering teams globally
      </p>

      {/* Infinite Marquee Container */}
      <div className="mt-8 relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]">
        {/* Animated continuous track */}
        <div className="flex w-max gap-16 items-center animate-marquee whitespace-nowrap py-1">
          {marqueeTrack.map((logo, index) => (
            <div
              key={`${logo.alt}-${index}`}
              className="flex items-center justify-center w-32 h-8"
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                width={120}
                height={32}
                className="h-7 w-auto object-contain brightness-0 invert opacity-40 hover:opacity-80 transition-all duration-300 ease-in-out cursor-pointer"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Tailwind Utility Animation Injector */}
      <style jsx global>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
}
