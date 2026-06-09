"use client";

import { useState } from "react";
import SlideNav from "@/components/ui/SlideNav";
import clsx from "clsx";

const slides = [
  {
    id: 0,
    leftText: "In a world that",
    rightText: "shifting fast...",
    rightSub: "we help you stay in motion",
    leftSub: "Financing of global chain supply could be challenging, we are your reliable partner from the first step to your big day",
    bg: "from-slate-700/80 to-slate-900/60",
    phoneContent: "qr",
  },
  {
    id: 1,
    leftText: "When the chain is frag...",
    rightText: "connection is everything",
    leftSub: "",
    rightSub: "",
    bg: "from-teal/90 to-teal/70",
    phoneContent: "ship",
  },
];

function QRPhone() {
  return (
    <div className="w-full h-full bg-[#2D3A54] rounded-[2rem] flex flex-col items-center justify-center gap-4 p-5">
      {/* QR pattern */}
      <div className="bg-white/10 rounded-xl p-4 w-36 h-36 grid grid-cols-3 gap-1">
        {Array.from({ length: 9 }).map((_, i) => (
          <div
            key={i}
            className={clsx(
              "rounded-sm",
              [0, 2, 6, 8].includes(i)
                ? "bg-white/80 border-2 border-white/30"
                : i === 4
                ? "bg-orange/60 flex items-center justify-center text-white text-lg"
                : "bg-white/20"
            )}
          >
            {i === 4 && <span className="text-sm">📦</span>}
          </div>
        ))}
      </div>
      <div className="text-center">
        <p className="text-white/50 text-xs font-sans">109 899 800 980 098 09</p>
        <p className="text-white/30 text-[10px] font-sans">Shipment ID</p>
      </div>
      <div className="flex items-center gap-3 w-full px-2">
        <span className="text-white/60 text-xs font-sans">Tokyo</span>
        <div className="flex-1 border-t border-dashed border-white/20" />
        <span className="text-white/60 text-xs font-sans">Paris</span>
      </div>
      <button className="w-full bg-orange-bright text-white rounded-xl py-3 text-sm font-sans font-medium">
        Track your order
      </button>
    </div>
  );
}

function ShipPhone() {
  return (
    <div className="w-full h-full bg-teal rounded-[2rem] flex flex-col items-center justify-center gap-4 p-5">
      <div className="w-full flex items-center justify-between mb-2">
        <div className="w-8 h-8 rounded-lg bg-orange-bright flex items-center justify-center text-white text-sm font-bold">₿</div>
        <div className="flex gap-1">
          <div className="w-1 h-1 rounded-full bg-white/40" />
          <div className="w-1 h-1 rounded-full bg-white/40" />
          <div className="w-1 h-1 rounded-full bg-white/40" />
        </div>
      </div>
      {/* Ship illustration */}
      <div className="text-6xl">🚢</div>
      <p className="text-white font-serif text-lg text-center leading-tight">
        When the chain is fragile...
      </p>
      <p className="text-white/60 text-sm font-sans text-center">connection is everything</p>
    </div>
  );
}

export default function HeroSection() {
  const [current, setCurrent] = useState(0);
  const [dir, setDir] = useState<"left" | "right">("right");
  const [key, setKey] = useState(0);

  const go = (next: number, direction: "left" | "right") => {
    setDir(direction);
    setCurrent(next);
    setKey((k) => k + 1);
  };

  const slide = slides[current];

  return (
    <section className="relative min-h-screen bg-cream flex flex-col items-center justify-center pt-16 overflow-hidden">
      {/* Large oval background with painted street image */}
      <div className="relative w-full max-w-[1100px] mx-auto px-4">
        <div
          className="relative w-full rounded-[40%/20%] overflow-hidden"
          style={{ aspectRatio: "16/9", minHeight: 480 }}
        >
          {/* Painted background overlay */}
          <div
            className={clsx(
              "absolute inset-0 transition-colors duration-700",
              current === 0
                ? "bg-gradient-to-br from-amber-800/70 via-green-900/60 to-slate-800/80"
                : "bg-gradient-to-br from-teal/80 via-teal/90 to-slate-800/80"
            )}
          />

          {/* Decorative painted look */}
          <div className="absolute inset-0 opacity-40"
            style={{
              background: current === 0
                ? "radial-gradient(ellipse at 20% 50%, #8B6914 0%, transparent 50%), radial-gradient(ellipse at 80% 40%, #2D5A27 0%, transparent 50%), radial-gradient(ellipse at 50% 80%, #1a1a2e 0%, transparent 60%)"
                : "radial-gradient(ellipse at 30% 60%, #1a5c6b 0%, transparent 50%), radial-gradient(ellipse at 70% 30%, #0d4a5c 0%, transparent 50%)",
            }}
          />

          {/* Left text */}
          <div
            key={`left-${key}`}
            className={clsx(
              "absolute left-8 md:left-16 top-1/2 -translate-y-1/2 max-w-xs opacity-0",
              dir === "right" ? "animate-slide-in-left" : "animate-slide-in-right"
            )}
          >
            <h1 className="font-serif text-white text-3xl md:text-5xl font-normal leading-tight mb-3">
              {slide.leftText}
            </h1>
            {slide.leftSub && (
              <p className="font-sans text-white/70 text-sm leading-relaxed max-w-[220px]">
                {slide.leftSub}
              </p>
            )}
          </div>

          {/* Right text */}
          <div
            key={`right-${key}`}
            className={clsx(
              "absolute right-8 md:right-16 top-1/2 -translate-y-1/2 max-w-xs text-right opacity-0 delay-100",
              dir === "right" ? "animate-slide-in-right" : "animate-slide-in-left"
            )}
          >
            <h2 className="font-serif italic text-white text-2xl md:text-4xl font-normal leading-tight mb-2">
              {slide.rightText}
            </h2>
            {slide.rightSub && (
              <p className="font-sans text-white/60 text-sm">{slide.rightSub}</p>
            )}
          </div>

          {/* Phone mockup in center */}
          <div
            key={`phone-${key}`}
            className={clsx(
              "absolute left-1/2 -translate-x-1/2 bottom-0 w-44 md:w-52 opacity-0 animate-scale-in delay-200"
            )}
            style={{ height: "80%" }}
          >
            {/* Phone shell */}
            <div className="w-full h-full bg-gray-900 rounded-[2.5rem] border-4 border-gray-800 shadow-2xl overflow-hidden p-1">
              {/* Notch */}
              <div className="absolute top-3 left-1/2 -translate-x-1/2 w-16 h-4 bg-gray-900 rounded-full z-10" />
              <div className="w-full h-full rounded-[2rem] overflow-hidden">
                {slide.phoneContent === "qr" ? <QRPhone /> : <ShipPhone />}
              </div>
            </div>
          </div>
        </div>

        {/* Slide navigation */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2">
          <SlideNav
            onPrev={() => go((current - 1 + slides.length) % slides.length, "left")}
            onNext={() => go((current + 1) % slides.length, "right")}
          />
        </div>
      </div>
    </section>
  );
}
