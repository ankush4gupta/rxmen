"use client";

import Image from "next/image";
import PhoneMockup from "../phone/phoneComponent";
interface LeftHandProps {
  mounted: boolean;
  children?: React.ReactNode;
}

export default function LeftHand({ mounted, children }: LeftHandProps) {
  return (
    <div
    
      className={mounted ? "animate-fade-up" : ""}
      style={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        zIndex: 15,
        opacity: mounted ? 1 : 0,
        transition: "opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1)",
        pointerEvents: "none", // Ensures structural wrapper doesn't block background clicks
      }}
    >
    
      {/* ------------------------------------------------------------- */}
      {/* LEFT HAND HOLDING LAYER                                       */}
      {/* ------------------------------------------------------------- */}
      <div
        style={{
          position: "absolute",
          left: "14%",
          bottom: 0,
          width: "45%",
          maxWidth: 680,
          zIndex: 15,
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

      {/* ------------------------------------------------------------- */}
      {/* LIVE PHONE MOCKUP INTERFACE                                   */}
      {/* ------------------------------------------------------------- */}
      {children}
     
    </div>
  );
}