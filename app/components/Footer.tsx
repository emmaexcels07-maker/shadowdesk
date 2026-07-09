

import React from "react";

const footerLinks = [
  {
    title: "Product",
    links: ["Features", "Security", "Roadmap", "Pricing"],
  },
  {
    title: "Company",
    links: ["About Us", "Careers", "Blog", "Press Kit"],
  },
  {
    title: "Resources",
    links: ["Documentation", "API Status", "Help Center", "Community"],
  },
  {
    title: "Legal",
    links: ["Privacy Policy", "Terms of Service", "DPA", "Trust Center"],
  },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-slate-900 bg-slate-950 text-sm text-slate-400">
      <div className="mx-auto max-w-6xl px-4 py-12 md:py-16">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-5">
          
          {/* Brand Column */}
          <div className="col-span-2 flex flex-col justify-between md:pr-8">
            <div>
              <div className="flex items-center gap-2 font-bold text-white text-lg tracking-tight">
                {/* Minimalist Logo Icon */}
                <div className="h-6 w-6 rounded-lg bg-indigo-500 flex items-center justify-center shadow-md shadow-indigo-500/20">
                  <div className="h-2 w-2 rounded-full bg-white" />
                </div>
                <span>ShadowDesk</span>
              </div>
              <p className="mt-4 max-w-xs text-xs sm:text-sm leading-relaxed text-slate-500">
                Next-generation workspace engineered to eliminate operational friction and accelerate team velocity.
              </p>
            </div>
            
            {/* Systems Status Indicator */}
            <div className="mt-6 flex items-center gap-2 text-xs text-slate-500">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              All systems operational
            </div>
          </div>

          {/* Dynamic Link Columns */}
          {footerLinks.map((group) => (
            <div key={group.title} className="flex flex-col gap-3">
              <h4 className="font-semibold text-slate-200 tracking-wider text-xs uppercase">
                {group.title}
              </h4>
              <ul className="flex flex-col gap-2.5">
                {group.links.map((link) => (
                  <li key={link}>
                    <a
                      href={`#${link.toLowerCase().replace(/\s+/g, "-")}`}
                      className="transition-colors hover:text-white"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 md:mt-16 border-t border-slate-900/60 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {currentYear} ShadowDesk Inc. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#twitter" className="hover:text-slate-300 transition-colors">Twitter</a>
            <a href="#github" className="hover:text-slate-300 transition-colors">GitHub</a>
            <a href="#linkedin" className="hover:text-slate-300 transition-colors">LinkedIn</a>
          </div>
        </div>
      </div>
    </footer>
  );
}