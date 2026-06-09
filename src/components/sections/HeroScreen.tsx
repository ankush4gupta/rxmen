"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

function PhoneMockup() {
  return (
    <div
      style={{
        position: "absolute",
        width: 277,
        height: 598,
        left: "50%",
        top: "50%",
        transform: "translate(-50%, -56%)",
        zIndex: 20,
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          borderRadius: 36.73,
          overflow: "hidden",
          backgroundImage: "url(/bg-scene.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      <div
        style={{
          position: "absolute",
          inset: 0,
          borderRadius: 33.4,
          background: "rgba(0,0,0,0.3)",
          backdropFilter: "blur(15.7px)",
        }}
      />

      <div style={{ position: "absolute", inset: 0, padding: "20px 11px 11px", display: "flex", flexDirection: "column" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 8 }}>
          <Image src="/logo.png" alt="logo" width={22} height={25} style={{ filter: "invert(1)", opacity: 0.9 }} />
          <div style={{
            width: 28, height: 28, borderRadius: "50%",
            background: "rgba(250,250,250,0.3)",
            display: "flex", flexDirection: "column",
            alignItems: "center", justifyContent: "center", gap: 3.5,
          }}>
            {[0, 1, 2].map(i => (
              <div key={i} style={{ width: 13, height: 1.4, background: "#fff", borderRadius: 1 }} />
            ))}
          </div>
        </div>

        <div
          style={{
            borderRadius: 24.5,
            background: "linear-gradient(0deg, #1F2235 9.78%, #5B639B 128.48%)",
            padding: "14px 14px 12px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 8,
            flex: 1,
          }}
        >
          <div style={{ position: "relative", width: 160, height: 160, marginTop: 8 }}>
            <Image
              src="/qrcode.png"
              alt="QR Code"
              fill
              style={{ objectFit: "contain", mixBlendMode: "screen" }}
            />
          </div>

          <div style={{ textAlign: "center" }}>
            <p style={{
              fontFamily: "Inter, sans-serif",
              fontWeight: 300,
              fontSize: 10.5,
              letterSpacing: "-0.02em",
              color: "rgba(255,255,255,0.35)",
              lineHeight: "15px",
            }}>
              109 899 800 980 098 09
            </p>
            <p style={{
              fontFamily: "Inter, sans-serif",
              fontWeight: 300,
              fontSize: 9,
              color: "rgba(255,255,255,0.25)",
              letterSpacing: "-0.02em",
            }}>
              Shipment ID
            </p>
          </div>

          <div style={{ width: "100%", display: "flex", alignItems: "center", gap: 6, padding: "0 10px" }}>
            <span style={{ fontFamily: "Inter", fontWeight: 300, fontSize: 11, color: "rgba(255,255,255,0.3)", letterSpacing: "-0.02em" }}>
              Tokyo
            </span>
            <div style={{ flex: 1, borderTop: "1.1px dashed rgba(255,255,255,0.3)" }} />
            <span style={{ fontFamily: "Inter", fontWeight: 300, fontSize: 11, color: "rgba(255,255,255,0.3)", letterSpacing: "-0.02em" }}>
              Paris
            </span>
          </div>
        </div>

        <div
          style={{
            marginTop: 8,
            background: "#FFA053",
            borderRadius: "11px 11px 22px 22px",
            height: 53,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <span style={{
            fontFamily: "Inter, sans-serif",
            fontWeight: 300,
            fontSize: 14,
            letterSpacing: "-0.02em",
            color: "#1F2235",
          }}>
            Track your order
          </span>
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
        bottom: 32,
        left: "50%",
        transform: "translateX(-50%)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 1,
        zIndex: 30,
      }}
    >
      <div style={{ width: 16, height: 1, background: "#FEE1DB" }} />
      <div style={{ width: 1, height: 111, background: "rgba(254,225,219,0.25)", position: "relative", overflow: "hidden" }}>
        <div className="scroll-line-animate" style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", background: "#FEE1DB" }} />
      </div>
      <p style={{
        fontFamily: "'Playfair Display', serif",
        fontStyle: "italic",
        fontSize: 18,
        lineHeight: "24px",
        letterSpacing: "0.02em",
        color: "#FEE3DC",
        whiteSpace: "nowrap",
        marginTop: 2,
      }}>
        Scroll for the full story
      </p>
      <div style={{ width: 25, height: 1, background: "#FEE1DB" }} />
    </div>
  );
}

export default function HeroScreen() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);

  return (
    <section
      style={{
        position: "relative",
        width: "100%",
        minHeight: "100vh",
        background: "linear-gradient(0deg, #FDF8F2 0%, #FFE1DA 102.37%)",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {/* Placed at the top level of the screen container */}
      {/* <Navbar /> */}

      {/* Oval Scene Container */}
      <div
        style={{
        
          position: "relative",
          width: "min(1000px, 62vw)",
          // width: "80%",
          aspectRatio: "1440 / 900",
          borderRadius: "1200px",
          overflow: "hidden",
          background: "#fff",
          marginTop: 100,
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: "url(/bg-scene.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center top",
          }}
        />

        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(133.07deg, rgba(0,0,0,0) 65.7%, rgba(0,0,0,0.63) 88.96%), linear-gradient(236.77deg, rgba(0,0,0,0) 43.3%, rgba(0,0,0,0.63) 82.77%)",
          }}
        />

        {/* Left Hand */}
        <div
          className={mounted ? "animate-fade-up" : ""}
          style={{
            position: "absolute",
            left: "14%",
            bottom: 0,
            width: "45%",
            maxWidth: 680,
            zIndex: 15,
            opacity: 0,
          }}
        >
          <Image
            src="/hand-left.png"
            alt="Hand holding phone"
            width={680}
            height={867}
            style={{
              width: "100%",
              height: "auto",
              filter: "drop-shadow(150px 495px 207px rgba(0,0,0,0.03)) drop-shadow(85px 278px 175px rgba(0,0,0,0.1))",
            }}
            priority
          />
        </div>

        {/* Phone Mockup overlay */}
        <PhoneMockup />

        {/* Right Hand */}
        <div
          className={mounted ? "animate-fade-up delay-200" : ""}
          style={{
            position: "absolute",
            right: "12%",
            bottom: "-25%",
            width: "35%",
            maxWidth: 532,
            zIndex: 20,
            opacity: 0,
            transform: "rotate(10.89deg)",
          }}
        >
          <Image
            src="/hand-right.png"
            alt="Pointing hand"
            width={532}
            height={479}
            style={{
              width: "100%",
              height: "auto",
              filter: "drop-shadow(-101px 112px 91px rgba(0,0,0,0.1)) drop-shadow(-46px 50px 68px rgba(0,0,0,0.17))",
            }}
          />
        </div>

        {/* Left Copy */}
        <div
          className={mounted ? "animate-slide-left" : ""}
          style={{
            position: "absolute",
            left: "4%",
            top: "30%",
            zIndex: 1,
            opacity: 0,
          }}
        >
          <h1
            style={{
              fontFamily: "'Playfair Display', serif",
              fontWeight: 400,
              fontSize: "clamp(40px, 6.2vw, 89px)",
              lineHeight: 1.27,
              letterSpacing: "-0.02em",
              color: "#FEE3DC",
              whiteSpace: "nowrap",
              // zIndex: 1,
            }}
          >
            In a world that
          </h1>
          <p
            className={mounted ? "animate-fade-up delay-300" : ""}
            style={{
              opacity: 0,
              marginTop: 16,
              fontFamily: "Inter, sans-serif",
              fontWeight: 300,
              fontSize: "clamp(13px, 1.4vw, 20px)",
              lineHeight: "26px",
              letterSpacing: "-0.02em",
              color: "rgba(255,255,255,0.85)",
              maxWidth: 376,
            }}
          >
            Financing of global chain supply could be challenging,
            we are your reliable partner from the first step to your big day
          </p>
        </div>

        {/* Right Copy */}
        <div
          className={mounted ? "animate-slide-right delay-100" : ""}
          style={{
            position: "absolute",
            right: "4%",
            top: "38%",
            textAlign: "right",
            zIndex: 25,
            opacity: 0,
          }}
        >
          <h2
            style={{
              fontFamily: "'Playfair Display', serif",
              fontStyle: "italic",
              fontWeight: 400,
              fontSize: "clamp(44px, 6.2vw, 89px)",
              lineHeight: 1,
              letterSpacing: "0.02em",
              color: "#FEE3DC",
              whiteSpace: "nowrap",
            }}
          >
            shifting fast...
          </h2>
          <p
            style={{
              marginTop: 11,
              fontFamily: "Inter, sans-serif",
              fontWeight: 300,
              fontSize: "clamp(13px, 1.24vw, 17.8px)",
              lineHeight: "27px",
              letterSpacing: "-0.02em",
              color: "#ffffff",
            }}
          >
            we help you stay in motion
          </p>
        </div>

        <ScrollIndicator />
      </div>
    </section>
  );
}