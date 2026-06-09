"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

function Navbar() {
  return (
    <nav
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        padding: "24px min(4vw, 60px)",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        zIndex: 50,
      }}
    >
      {/* Brand Logo Container */}
      <div
        style={{
          width: 40,
          height: 40,
          backgroundColor: "#ffffff",
          borderRadius: "10px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.05)",
        }}
      >
        <Image
          src="/logo.png"
          alt="Logo"
          width={22}
          height={22}
          style={{ objectFit: "contain", filter: "invert(1)" }}
        />
      </div>

      {/* Nav Links */}
      <div
        style={{
          display: "flex",
          gap: "32px",
          fontFamily: "Inter, sans-serif",
          fontSize: "14px",
          fontWeight: 400,
          color: "#2C2C2C",
        }}
      >
        <span style={{ cursor: "pointer" }}>Supply chain finance</span>
        <span style={{ cursor: "pointer" }}>Financial products</span>
        <span style={{ cursor: "pointer" }}>About us</span>
        <span style={{ cursor: "pointer" }}>Our contacts</span>
      </div>

      {/* Action Button */}
      <button
        style={{
          padding: "10px 22px",
          border: "1px solid #1F2235",
          borderRadius: "14px",
          backgroundColor: "transparent",
          fontFamily: "Inter, sans-serif",
          fontSize: "14px",
          fontWeight: 400,
          color: "#1F2235",
          cursor: "pointer",
          transition: "background-color 0.2s",
        }}
        onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "rgba(0,0,0,0.03)")}
        onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "transparent")}
      >
        Speak to sales
      </button>
    </nav>
  );
}

function PhoneMockup() {
  return (
    <div
      style={{
        position: "absolute",
        width: 277,
        height: 598,
        left: "50%",
        top: "50%",
        transform: "translate(-50%, -54%)",
        zIndex: 22,
        borderRadius: "38px",
        overflow: "hidden",
        boxShadow: "0px 25px 50px -12px rgba(0,0,0,0.5)",
        display: "flex",
        flexDirection: "column",
        background: "#121420",
      }}
    >
      {/* Top App Status / Nav Bar */}
      <div style={{ padding: "18px 16px 8px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <Image 
          src="/logo.png" 
          alt="App logo" 
          width={18} 
          height={18} 
          style={{ objectFit: "contain" }}
        />
        <div style={{
          width: 26, height: 26, borderRadius: "50%",
          background: "rgba(255,255,255,0.15)",
          display: "flex", flexDirection: "column",
          alignItems: "center", justifyContent: "center", gap: 3,
          cursor: "pointer"
        }}>
          {[0, 1, 2].map(i => (
            <div key={i} style={{ width: 11, height: 1.5, background: "#fff", borderRadius: 1 }} />
          ))}
        </div>
      </div>

      {/* Upper Info Panel */}
      <div style={{ padding: "8px 20px", textAlign: "center" }}>
        <p style={{
          fontFamily: "Inter, sans-serif",
          fontWeight: 400,
          fontSize: "11px",
          letterSpacing: "0.05em",
          color: "rgba(255,255,255,0.4)",
          margin: 0
        }}>
          109 899 800 980 098 09
        </p>
        <p style={{
          fontFamily: "Inter, sans-serif",
          fontWeight: 300,
          fontSize: "9px",
          color: "rgba(255,255,255,0.25)",
          marginTop: "2px",
          marginBottom: "16px"
        }}>
          Shipment ID
        </p>

        {/* Route Mapping */}
        <div style={{ display: "flex", alignItems: "center", gap: 8, padding: "0 4px", marginBottom: 18 }}>
          <span style={{ fontFamily: "Inter", fontWeight: 400, fontSize: "12px", color: "rgba(255,255,255,0.6)" }}>
            Tokyo
          </span>
          <div style={{ flex: 1, borderTop: "1.5px dashed rgba(255,255,255,0.2)" }} />
          <span style={{ fontFamily: "Inter", fontWeight: 400, fontSize: "12px", color: "rgba(255,255,255,0.6)" }}>
            Paris
          </span>
        </div>
      </div>

      {/* Action Track Button */}
      <div style={{ padding: "0 14px", marginBottom: 12 }}>
        <div
          style={{
            background: "linear-gradient(90deg, #FFB373 0%, #FFA053 100%)",
            borderRadius: "12px",
            height: "44px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0px 4px 15px rgba(255, 160, 83, 0.3)",
          }}
        >
          <span style={{
            fontFamily: "Inter, sans-serif",
            fontWeight: 500,
            fontSize: "13px",
            color: "#1F2235",
          }}>
            Track your order
          </span>
        </div>
      </div>

      {/* Live Ocean Map View Frame */}
      <div style={{ flex: 1, position: "relative", width: "100%", overflow: "hidden" }}>
        {/* Ocean Backdrop */}
        <Image
          src="/ocean.jpg"
          alt="Live Ocean tracking view"
          fill
          style={{ objectFit: "cover" }}
        />
        {/* Cargo Container Ship Asset Overlay */}
        <div style={{
          position: "absolute",
          top: "40%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "120px",
          height: "190px",
        }}>
          <Image
            src="/ship.png"
            alt="Cargo Ship View"
            fill
            style={{ objectFit: "contain", mixBlendMode: "lighten" }}
          />
        </div>
      </div>
    </div>
  );
}

function ScrollIndicator() {
  return (
    <div
      style={{
        position: "absolute",
        bottom: 24,
        left: "50%",
        transform: "translateX(-50%)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 6,
        zIndex: 30,
      }}
    >
      <div style={{ width: 1, height: 60, background: "linear-gradient(180deg, rgba(254,225,219,0.8) 0%, rgba(254,225,219,0) 100%)" }} />
      <p style={{
        fontFamily: "'Playfair Display', serif",
        fontStyle: "italic",
        fontSize: "15px",
        color: "#FEE3DC",
        whiteSpace: "nowrap",
        margin: 0,
        opacity: 0.9
      }}>
        Scroll for the full story
      </p>
    </div>
  );
}

export default function HeroScreen2() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);

  return (
    <section
      style={{
        position: "relative",
        width: "100%",
        minHeight: "100vh",
        background: "linear-gradient(180deg, #FFE1DA 0%, #FDF8F2 100%)",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        paddingTop: "80px"
      }}
    >
      {/* Top Header Navigation */}
      <Navbar />

      {/* Main Beautiful Oval Frame Canvas Container */}
      <div
        style={{
          position: "relative",
          width: "min(1380px, 94vw)",
          aspectRatio: "1440 / 860",
          borderRadius: "50% / 50%", /* Keeps exact cinematic elliptical profile */
          overflow: "hidden",
          boxShadow: "0px 40px 100px rgba(0, 0, 0, 0.08)",
          background: "#fff",
        }}
      >
        {/* Artistic Painterly City Background Alley */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: "url(/bg-scene.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center 35%",
          }}
        />

        {/* Ambient Overlay Shadow for typography readability */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(180deg, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.4) 100%)",
          }}
        />

        {/* Left Typography Copy Layout Block */}
        <div
          style={{
            position: "absolute",
            left: "8%",
            top: "35%",
            zIndex: 10,
            maxWidth: "340px"
          }}
        >
          <h1
            style={{
              fontFamily: "'Playfair Display', serif",
              fontWeight: 400,
              fontSize: "clamp(36px, 5vw, 76px)",
              lineHeight: 1.15,
              color: "#FEE3DC",
              margin: 0,
              whiteSpace: "nowrap",
            }}
          >
            In a world that
          </h1>
          <p
            style={{
              marginTop: 18,
              fontFamily: "Inter, sans-serif",
              fontWeight: 300,
              fontSize: "clamp(12px, 1.2vw, 15px)",
              lineHeight: "1.6",
              color: "rgba(255,255,255,0.85)",
            }}
          >
            Financing of global chain supply could be challenging,
            we are your reliable partner from the first step to your big day.
          </p>
        </div>

        {/* Left Holding Phone Hand Layer */}
        <div
          style={{
            position: "absolute",
            left: "22%",
            bottom: "-5%",
            width: "38%",
            maxWidth: 540,
            zIndex: 15,
          }}
        >
          <Image
            src="/hand-left.png"
            alt="Hand holding phone"
            width={540}
            height={700}
            style={{
              width: "100%",
              height: "auto",
              objectFit: "contain"
            }}
            priority
          />
        </div>

        {/* Live Tracking Phone Interface Component */}
        <PhoneMockup />

        {/* Right Pointing Interaction Hand Layer */}
        <div
          style={{
            position: "absolute",
            right: "26%",
            bottom: "-15%",
            width: "30%",
            maxWidth: 420,
            zIndex: 25,
            transform: "rotate(4deg)",
          }}
        >
          <Image
            src="/hand-right.png"
            alt="Interactive pointing gesture"
            width={420}
            height={380}
            style={{
              width: "100%",
              height: "auto",
              objectFit: "contain"
            }}
          />
        </div>

        {/* Right Typography Copy Layout Block */}
        <div
          style={{
            position: "absolute",
            right: "8%",
            top: "42%",
            textAlign: "right",
            zIndex: 10,
          }}
        >
          <h2
            style={{
              fontFamily: "'Playfair Display', serif",
              fontStyle: "italic",
              fontWeight: 400,
              fontSize: "clamp(36px, 5vw, 76px)",
              lineHeight: 1,
              color: "#FEE3DC",
              margin: 0
            }}
          >
            shifting fast...
          </h2>
          <p
            style={{
              marginTop: 12,
              fontFamily: "Inter, sans-serif",
              fontWeight: 300,
              fontSize: "clamp(12px, 1.2vw, 16px)",
              color: "rgba(255,255,255,0.9)",
              margin: 0
            }}
          >
            we help you stay in motion
          </p>
        </div>

        {/* Central Bottom Scroll Indicator Hook */}
        <ScrollIndicator />
      </div>
    </section>
  );
}