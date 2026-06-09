import Image from "next/image";

export default function PhoneShipMockup() {
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
        display: "flex",
        flexDirection: "column",
        gap: "12px", // Creates the physical gap between the dashboard and ocean window
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
      {/* ------------------------------------------------------------- */}
      {/* TOP SECTION: APP INTERACTION DASHBOARD                        */}
      {/* ------------------------------------------------------------- */}
      <div 
        style={{ 
          padding: "18px 14px 12px", 
          display: "flex", 
          flexDirection: "column", 
          gap: 12,
          background: "#1F2235B2", 
          backdropFilter: "blur(15.7px)",
          borderRadius: "24px", // Rounded corners on all sides
          zIndex: 2,
        }}
      >
        {/* Navigation Header Bar */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <Image src="/logo.png" alt="logo" width={20} height={23} style={{ filter: "invert(1)", opacity: 0.9 }} />
          <div style={{
            width: 26, height: 26, borderRadius: "50%",
            background: "rgba(250,250,250,0.2)",
            display: "flex", flexDirection: "column",
            alignItems: "center", justifyContent: "center", gap: 3,
          }}>
            {[0, 1, 2].map(i => (
              <div key={i} style={{ width: 12, height: 1.2, background: "#fff", borderRadius: 1 }} />
            ))}
          </div>
        </div>

        {/* Shipment Metadata Content */}
        <div style={{ textAlign: "center", marginTop: 4 }}>
          <p style={{
            fontFamily: "Inter, sans-serif",
            fontWeight: 300,
            fontSize: 10.5,
            letterSpacing: "-0.02em",
            color: "rgba(255,255,255,0.35)",
            margin: 0,
          }}>
            109 899 800 980 098 09
          </p>
          <p style={{
            fontFamily: "Inter, sans-serif",
            fontWeight: 300,
            fontSize: 9,
            color: "rgba(255,255,255,0.25)",
            margin: "1px 0 0 0",
          }}>
            Shipment ID
          </p>
        </div>

        {/* Transit Route Tracker metrics */}
        <div style={{ width: "100%", display: "flex", alignItems: "center", gap: 6, padding: "0 4px" }}>
          <span style={{ fontFamily: "Inter, sans-serif", fontWeight: 300, fontSize: 11, color: "rgba(255,255,255,0.3)" }}>
            Tokyo
          </span>
          <div style={{ flex: 1, borderTop: "1.1px dashed rgba(255,255,255,0.3)" }} />
          <span style={{ fontFamily: "Inter, sans-serif", fontWeight: 300, fontSize: 11, color: "rgba(255,255,255,0.3)" }}>
            Paris
          </span>
        </div>

        {/* Primary Call to Action Button */}
        <div
          style={{
            background: "#FFA053",
            borderRadius: "11px 11px 22px 22px",
            height: 43,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            marginTop: 4,
          }}
        >
          <span style={{
            fontFamily: "Inter, sans-serif",
            fontWeight: 300,
            fontSize: 14,
            color: "#1F2235",
            letterSpacing: "-0.02em",
          }}>
            Track your order
          </span>
        </div>
      </div>

      {/* ------------------------------------------------------------- */}
      {/* BOTTOM SECTION: OCEAN MAP CONTAINER ASSET                     */}
      {/* ------------------------------------------------------------- */}
      <div 
        style={{ 
          position: "relative", 
          width: "100%", 
          flex: 1, 
          overflow: "hidden",
          borderRadius: "24px", // Rounded corners on all sides 
          background: "rgba(36, 20, 86, 0.29)"
        }}
      >
        {/* Sea Background Texture */}
        <Image
          src="/ocean.jpg"
          alt="Ocean surface map track"
          fill
          sizes="25vw"
          style={{ objectFit: "cover" }}
          priority
        />

        {/* Cargo Container Ship: Centered, Zoomed, and top-35% cropped */}
        <div style={{
          position: "absolute",
          bottom: "-2%", // Anchored to the bottom floor
          left: "15%",
          transform: "translateX(-50%)",
          width: "170%", // Excess width zooms past asset's black horizontal borders
          height: "90%", // Height boundary window inside the ocean view
          overflow: "hidden",
        }}>
          <div style={{
            position: "relative",
            width: "100%",
            height: "285%", // 100% / 35% crop window factor math = 285% scaling height
            top: 0,
          }}>
            <Image
              src="/ship.png"
              alt="Cargo vessel position track node"
              fill
              sizes="25vw"
              style={{ 
                objectFit: "cover", 
                // objectPosition: "" // Targets the top-most section of the asset cleanly
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}