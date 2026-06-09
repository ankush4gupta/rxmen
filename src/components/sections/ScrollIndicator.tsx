export default function ScrollIndicator() {
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