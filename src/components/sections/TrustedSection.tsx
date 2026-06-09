"use client";

import { useState } from "react";
import Image from "next/image"; // Injected for efficient image handling
import SlideNav from "@/components/ui/SlideNav";
import clsx from "clsx";

const stats = [
  { metric: "27%",  label: "TRAFFIC INCREASE ONE WEEK POST-LAUNCH",  image: "/card1.png" },
  { metric: "3x",   label: "FASTER TIME TO LAUNCH",                  image: "/card2.png" },
  { metric: "50+",  label: "PERSON DESIGN TEAM",                     image: "/card3.png" },
  { metric: "20x",  label: "FASTER PAGE UPDATES",                    image: "/card4.png" },
  { metric: "200+", label: "WEBFLOW SITES LAUNCHED",                  image: "/card5.png" },
  { metric: "98%",  label: "CLIENT SATISFACTION RATE",               image: "/card1.png" }, // Added card6 to match your 6 stats items
];

export default function TrustedSection() {
  const [offset, setOffset] = useState(0);
  const cardW = 220; // px
  const visible = Math.min(3, stats.length);
  const maxOffset = stats.length - visible;

  const prev = () => setOffset((o) => Math.max(0, o - 1));
  const next = () => setOffset((o) => Math.min(maxOffset, o + 1));

  return (
    <section id="about" className="bg-cream py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header row */}
        <div className="flex items-end justify-between mb-12 flex-wrap gap-6">
          <div>
            <h2 className="font-serif text-4xl md:text-6xl text-navy font-normal leading-tight">
              Trusted by 200,000+<br />leading organizations
            </h2>
          </div>
          <SlideNav dark onPrev={prev} onNext={next} />
        </div>

        {/* Horizontal scrolling stat cards */}
        <div className="overflow-hidden">
          <div
            className="flex gap-4 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
            style={{ transform: `translateX(-${offset * (cardW + 16)}px)` }}
          >
            {stats.map((s, i) => (
              <div
                key={i}
                className="flex-shrink-0 rounded-3xl overflow-hidden relative bg-navy/10"
                style={{ width: cardW, height: 280 }}
              >
                {/* 1. BACKGROUND IMAGE FRAME */}
                <Image
                  src={s.image}
                  alt={s.label}
                  fill
                  sizes="220px"
                  className="object-cover pointer-events-none select-none transition-transform duration-700 hover:scale-105"
                  priority={i < 3} // Priority loading optimization for above-the-fold/visible slides
                />

                {/* 2. READABILITY TIN COVER FILTER */}
                {/* A subtle dark linear gradient wrapper overlay layer over the image ensures white typography readability remains crisp */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-black/30 pointer-events-none z-0" />

                {/* 3. FOREGROUND CONTENT SCROLL INTERACTIVE NODES */}
                <div className="absolute inset-0 p-6 flex flex-col justify-between z-10 pointer-events-none">
                  <div className="flex items-start justify-between">
                    <span className="font-serif text-white text-5xl font-bold tracking-tight">
                      {s.metric}
                    </span>
                  </div>
                  <p className="font-sans text-white/90 text-[10px] font-semibold tracking-widest leading-relaxed uppercase">
                    {s.label}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}