"use client";

import clsx from "clsx";

const categories = [
  { label: "TRANSPORT",     emoji: "🚌" },
  { label: "INVESTMENT",    emoji: "📈" },
  { label: "FOOD & DRINKS", emoji: "🍔" },
  { label: "PERSONAL",      emoji: "👤" },
  { label: "MEDICAL",       emoji: "💊" },
  { label: "FOOD & DRINKS", emoji: "🍔" },
  { label: "GIFT",          emoji: "🎁" },
  { label: "UTILITY BILLS", emoji: "💧" },
  { label: "SALARY",        emoji: "💰" },
  { label: "INSURANCE",     emoji: "🛡️" },
  { label: "SHOPPING",      emoji: "🛍️" },
  { label: "GIFT",          emoji: "🎁" },
];

const mapPins = [
  { top: "30%",  left: "15%"  },
  { top: "50%",  left: "38%"  },
  { top: "60%",  left: "48%"  },
  { top: "45%",  left: "65%"  },
  { top: "30%",  left: "72%"  },
];

export default function SpreadsheetSection() {
  return (
    <section id="financial" className="bg-cream py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          {/* Network icon */}
          <div className="flex justify-center mb-6">
            <div className="relative w-20 h-20">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-14 h-10 bg-gradient-to-br from-orange to-orange-bright rounded-xl shadow-lg" />
              </div>
              {[
                { top: "0%",   left: "60%"  },
                { top: "70%",  left: "70%"  },
                { top: "60%",  left: "0%"   },
              ].map((pos, i) => (
                <div
                  key={i}
                  className="absolute w-3 h-3 bg-orange-bright rounded-full border-2 border-cream"
                  style={{ top: pos.top, left: pos.left }}
                />
              ))}
              {/* Connection lines as SVG */}
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 80 80">
                <line x1="40" y1="40" x2="60" y2="5"  stroke="#E8845A" strokeWidth="1" strokeDasharray="3 2" />
                <line x1="40" y1="40" x2="65" y2="62" stroke="#E8845A" strokeWidth="1" strokeDasharray="3 2" />
                <line x1="40" y1="40" x2="8"  y2="55" stroke="#E8845A" strokeWidth="1" strokeDasharray="3 2" />
              </svg>
            </div>
          </div>

          <h2 className="font-serif text-4xl md:text-5xl text-navy font-normal leading-tight mb-4">
            More than supplier<br />spreadsheets.
          </h2>
          <p className="font-sans text-navy/50 text-base">Not just the numbers, but the story as well</p>
        </div>

        {/* Map + categories grid */}
        <div className="flex flex-col lg:flex-row items-start gap-10">
          {/* Map panel */}
          <div className="relative w-full lg:w-1/2 h-64 bg-white/40 rounded-3xl border border-peach/30 overflow-hidden">
            {/* Grid lines */}
            <svg className="absolute inset-0 w-full h-full opacity-30" viewBox="0 0 400 250">
              {[50, 100, 150, 200, 250].map((y) => (
                <line key={y} x1="0" y1={y} x2="400" y2={y} stroke="#9BA3B2" strokeWidth="0.5" />
              ))}
              {[80, 160, 240, 320].map((x) => (
                <line key={x} x1={x} y1="0" x2={x} y2="250" stroke="#9BA3B2" strokeWidth="0.5" />
              ))}
            </svg>
            {/* Route lines */}
            <svg className="absolute inset-0 w-full h-full opacity-40" viewBox="0 0 400 250">
              <path d="M60,80 Q180,60 300,110" stroke="#9BA3B2" strokeWidth="1" fill="none" />
              <path d="M100,130 Q200,100 280,150" stroke="#9BA3B2" strokeWidth="1" fill="none" />
            </svg>
            {/* Pins */}
            {mapPins.map((pin, i) => (
              <div
                key={i}
                className="absolute text-muted"
                style={{ top: pin.top, left: pin.left }}
              >
                📍
              </div>
            ))}
            {/* Popup */}
            <div className="absolute bottom-6 left-8 bg-white rounded-xl px-4 py-3 shadow-md border border-peach/20">
              <p className="font-sans font-semibold text-navy text-sm">Uber</p>
              <p className="font-sans text-navy/50 text-xs">Today, 11:30 AM</p>
            </div>
          </div>

          {/* Categories grid */}
          <div className="w-full lg:w-1/2">
            <div className="grid grid-cols-3 gap-3">
              {categories.map((cat, i) => (
                <div
                  key={i}
                  className={clsx(
                    "flex items-center gap-2 px-3 py-2 rounded-xl border text-xs font-sans",
                    "bg-white/50 border-peach/20 text-navy/60 hover:bg-white hover:border-peach/50 transition-all cursor-pointer"
                  )}
                >
                  <span>{cat.emoji}</span>
                  <span className="leading-tight">{cat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
