"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import clsx from "clsx";

const navLinks = [
  { label: "Supply chain finance", href: "#supply-chain" },
  { label: "Financial products",   href: "#financial"    },
  { label: "About us",             href: "#about"        },
  { label: "Our contacts",         href: "#contacts"     },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-cream/80 backdrop-blur-md border-b border-peach/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 shrink-0">
          <div className="w-9 h-9 rounded-lg bg-orange flex items-center justify-center text-white font-serif font-bold text-lg">
            ₿
          </div>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8">
          {navLinks.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="text-sm text-navy/70 hover:text-navy transition-colors font-sans"
            >
              {l.label}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <a
          href="#contacts"
          className="hidden md:inline-flex items-center px-4 py-2 border border-navy/30 rounded-full text-sm font-sans text-navy hover:bg-navy hover:text-cream transition-all"
        >
          Speak to sales
        </a>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-2 text-navy"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={clsx(
          "md:hidden overflow-hidden transition-all duration-300 bg-cream border-t border-peach/40",
          open ? "max-h-96 py-4" : "max-h-0"
        )}
      >
        <nav className="flex flex-col gap-4 px-6">
          {navLinks.map((l) => (
            <a
              key={l.label}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-navy/70 hover:text-navy font-sans text-sm py-1"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contacts"
            onClick={() => setOpen(false)}
            className="inline-flex w-fit items-center px-4 py-2 border border-navy/30 rounded-full text-sm font-sans text-navy"
          >
            Speak to sales
          </a>
        </nav>
      </div>
    </header>
  );
}
