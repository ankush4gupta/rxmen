import Image from "next/image";
import {  Box } from "lucide-react";

export default function PhoneMockup() {
  return (
    <div
      style={{
        position: "absolute",
        width: "19%",
        height: "60%",
        left: "49.1%",
        top: "48.5%",
        transform: "translate(-50%, -56%)",
        zIndex: 20,
        //  borderRadius: 36.73,
        //  border: "4px solid rgba(19, 2, 2, 0.3)",
        //  overflow: "hidden",
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

      <div style={{ position: "absolute", inset: 0, padding: "20px 5px 11px", display: "flex", flexDirection: "column" }}>
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
            background: "#1F2235B2",

            // background: "linear-gradient(0deg, #4a4f6e 9.78%, #5B639B 128.48%)",
            padding: "5px 1px 8px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 8,
            flex: 1,
          }}
        >
          <div style={{  borderRadius: 23.73, position: "relative", width: 190, height: 180, marginTop: 0,background: "rgba(36, 20, 86, 0.29)",  display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Image
              src="/qrcode.png"
              alt="QR Code"
              fill
              style={{ objectFit: "contain", mixBlendMode: "screen" }}
            />
            <Box size={32} color="#eeeeee" style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)" }} />
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

          <div
          style={{
           
            background: "#FFA053",
            borderRadius: "11px 11px 22px 22px",
            height: 43,
            width: "95%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginTop :'auto',
            cursor: "pointer",

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
    </div>
  );
}