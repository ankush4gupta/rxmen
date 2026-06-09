"use client";

import { useState } from "react";
import SlideNav from "@/components/ui/SlideNav";
import TransactionCard from "@/components/ui/TransactionCard";
import Button from "@/components/ui/Button";
import clsx from "clsx";

const transactions = [
  { merchant: "McDonald's", date: "Today, 11:17 PM",     amount: "562",   category: "FOOD & DRINKS", positive: false },
  { merchant: "Myntra",     date: "Yesterday, 5:31 PM",  amount: "3,500", category: "SHOPPING",      positive: false },
  { merchant: "Uber",       date: "Today, 9:00 AM",      amount: "250",   category: "TRANSPORT",     positive: false },
  { merchant: "Salary",     date: "01 July, 9:00 AM",    amount: "85,000","category": "SALARY",      positive: true  },
];

const artImages = [
  { gradient: "from-orange-600 to-amber-800",   label: "Colorful Textiles" },
  { gradient: "from-red-700 to-rose-900",        label: "Bold Patterns" },
  { gradient: "from-teal to-cyan-900",           label: "Global Routes" },
];

export default function GlobalSection() {
  const [txIdx, setTxIdx] = useState(0);
  const [animKey, setAnimKey] = useState(0);
  const [dir, setDir] = useState<"left" | "right">("right");

  const go = (next: number, d: "left" | "right") => {
    setDir(d);
    setTxIdx(next);
    setAnimKey((k) => k + 1);
  };

  return (
    <section id="supply-chain" className="relative bg-cream py-20 overflow-hidden">
      {/* Art collage banner */}
      <div className="relative w-full h-72 md:h-96 overflow-hidden mb-16">
        <div className="absolute inset-0 flex">
          {artImages.map((img, i) => (
            <div
              key={i}
              className={`flex-1 bg-gradient-to-br ${img.gradient} opacity-90`}
            />
          ))}
        </div>
        {/* Overlay text */}
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-6 bg-black/30">
          <h2 className="font-serif text-white text-4xl md:text-6xl text-center leading-tight px-6">
            A global supply service <br />
            <em>built for visionaries.</em>
          </h2>
          <Button variant="outline" size="lg" className="border-white/60 text-white hover:bg-white hover:text-navy">
            Start the Journey
          </Button>
        </div>
      </div>

      {/* Transactions + Stop managing copy */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-start md:items-center gap-12">
        {/* Transaction cards stack */}
        <div className="relative w-full md:w-auto flex-shrink-0 h-48">
          <div className="relative w-72">
            {/* Stacked background cards */}
            <div className="absolute top-[-16px] left-4 w-full opacity-40 scale-95 bg-white rounded-2xl h-20 border border-peach/30" />
            <div className="absolute top-[-8px] left-2 w-full opacity-70 scale-97 bg-white rounded-2xl h-20 border border-peach/30" />
            {/* Active card */}
            <div
              key={animKey}
              className={clsx(
                "opacity-0",
                dir === "right" ? "animate-slide-in-right" : "animate-slide-in-left"
              )}
            >
              <TransactionCard {...transactions[txIdx]} />
            </div>
            <div className="mt-4 flex justify-start">
              <SlideNav
                dark
                onPrev={() => go((txIdx - 1 + transactions.length) % transactions.length, "left")}
                onNext={() => go((txIdx + 1) % transactions.length, "right")}
              />
            </div>
          </div>
        </div>

        {/* Copy */}
        <div>
          <h3 className="font-serif text-5xl md:text-6xl text-navy font-normal leading-none mb-2">
            Stop managing
          </h3>
          <p className="font-serif italic text-navy/60 text-3xl md:text-4xl">
            finances manually.
          </p>
        </div>
      </div>
    </section>
  );
}
