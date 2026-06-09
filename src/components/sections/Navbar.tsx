"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "30px 70px 0",
        transition: "padding 0.3s ease",
        ...(scrolled && { 
          padding: "12px 70px", 
          background: "rgba(253,248,242,0.85)", 
          backdropFilter: "blur(8px)" 
        }),
      }}
    >
      {/* Logo Container */}
      <div
        style={{
          width: 56,
          height: 56,
          background: "#FDF6F0",
          borderRadius: 14,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexShrink: 0,
        }}
      >
        <Image
          src="/logo.png"
          alt="RxMen Logo"
          width={30}
          height={34}
          style={{ filter: "invert(1)" }}
        />
      </div>

      {/* Navigation Links */}
      <nav
        style={{
          display: "flex",
          gap: 48,
          alignItems: "center",
        }}
      >
        {["Supply chain finance", "Financial products", "About us", "Our contacts"].map((item) => (
          <a
            key={item}
            href="#"
            style={{
              fontFamily: "Inter, sans-serif",
              fontWeight: 300,
              fontSize: 16,
              lineHeight: "20px",
              letterSpacing: "-0.02em",
              color: "#1F2235",
              textDecoration: "none",
              whiteSpace: "nowrap",
            }}
          >
            {item}
          </a>
        ))}
      </nav>

      {/* Action CTA */}
      <button
        style={{
          boxSizing: "border-box",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "18px 16px",
          width: 163,
          height: 46,
          border: "1px solid #000000",
          borderRadius: 12,
          background: "transparent",
          cursor: "pointer",
          fontFamily: "Inter, sans-serif",
          fontWeight: 300,
          fontSize: 18,
          letterSpacing: "-0.02em",
          color: "#1F2235",
          whiteSpace: "nowrap",
        }}
      >
        Speak to sales
      </button>
    </header>
  );
}