"use client";

import { useState } from "react";
import Tag from "@/components/ui/Tag";
import { Search, RefreshCw } from "lucide-react";

const filters = ["INCOMING", "OUTGOING", "TAGS", "TODAY", "THIS MONTH", "THIS WEEK"];

const shipments = [
  { company: "ABC Pvt ltd",  date: "02 July, 07:20 PM", amount: "60,000", category: "SHIP",  positive: true  },
  { company: "XYZ Corp",     date: "01 July, 03:10 PM", amount: "12,500", category: "CARGO", positive: false },
  { company: "Global Trade", date: "30 June, 11:00 AM", amount: "1,20,000","category": "SHIP", positive: true },
];

export default function SearchSection() {
  const [query, setQuery] = useState("");
  const [active, setActive] = useState<string[]>(["TODAY"]);

  const toggle = (f: string) =>
    setActive((prev) => prev.includes(f) ? prev.filter((x) => x !== f) : [...prev, f]);

  return (
    <section className="bg-cream-dark py-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        {/* Search icon */}
        <div className="flex justify-center mb-6">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-orange-bright to-orange shadow-lg flex items-center justify-center">
            <Search size={28} className="text-white" />
          </div>
        </div>

        {/* Headline with search bar embedded */}
        <div className="text-center mb-8">
          <h2 className="font-serif text-4xl md:text-5xl text-navy font-normal leading-tight">
            Search every
          </h2>
          {/* Search input */}
          <div className="my-4 flex items-center gap-3 bg-navy/80 rounded-2xl px-5 py-4 shadow-xl">
            <div className="w-0.5 h-5 bg-white/60 rounded animate-pulse" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Container shipment"
              className="flex-1 bg-transparent text-white placeholder-white/50 font-sans text-base outline-none"
            />
            <button className="text-white/50 hover:text-white transition-colors">
              <RefreshCw size={18} />
            </button>
          </div>
          <h2 className="font-serif text-4xl md:text-5xl text-navy font-normal leading-tight">
            shipment instantly
          </h2>
        </div>

        {/* Filter pills */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {filters.map((f) => (
            <Tag
              key={f}
              active={active.includes(f)}
              className="cursor-pointer select-none"
              onClick={() => toggle(f)}
            >
              {f}
            </Tag>
          ))}
        </div>

        {/* Shipment cards */}
        <div className="flex flex-col gap-4">
          {shipments.map((s, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl px-6 py-5 shadow-sm border border-peach/20 flex items-center justify-between"
            >
              <div>
                <p className="font-sans font-semibold text-navy mb-1">{s.company}</p>
                <p className="font-serif text-2xl font-bold text-navy">
                  {s.positive ? "+" : "−"}₹{s.amount}
                </p>
              </div>
              <div className="text-right flex flex-col items-end gap-2">
                <p className="font-sans text-navy/40 text-sm">{s.date}</p>
                <span className="inline-flex items-center gap-2 px-4 py-2 bg-cream rounded-xl text-navy/70 text-xs font-sans font-medium">
                  ⚙️ {s.category}
                </span>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-navy/40 font-sans text-sm mt-6">
          Instantly search suppliers, production records, shipments, and operational history across your entire global network.
        </p>
      </div>
    </section>
  );
}
