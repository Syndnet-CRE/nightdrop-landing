"use client"

import type React from "react"

const RealtimeCodingPreviews: React.FC = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        position: "relative",
        background: "transparent",
      }}
      role="img"
      aria-label="Buy box criteria flowing into a matched property"
    >
      {/* Left panel — criteria */}
      <div
        style={{
          position: "absolute",
          top: "46px",
          left: "calc(50% - 87.5px)",
          transform: "translateX(-50%)",
          width: "175px",
          height: "180px",
          background: "linear-gradient(180deg, hsl(var(--background) / 0.8) 0%, transparent 100%)",
          backdropFilter: "blur(7.907px)",
          borderRadius: "9.488px",
          border: "1px solid hsl(var(--border))",
          overflow: "hidden",
          boxSizing: "border-box",
        }}
      >
        <div style={{ padding: "10px", height: "100%", boxSizing: "border-box", display: "flex", flexDirection: "column", justifyContent: "center" }}>
          <div
            style={{
              fontFamily: "'Geist Mono', 'SF Mono', Monaco, Consolas, monospace",
              fontSize: "9.5px",
              lineHeight: "14px",
              color: "hsl(var(--foreground))",
              whiteSpace: "pre-wrap",
            }}
          >
            <p style={{ margin: 0 }}><span style={{ color: "hsl(var(--muted-foreground))" }}>asset:</span> <span style={{ color: "hsl(var(--primary))" }}>"self storage"</span></p>
            <p style={{ margin: 0 }}><span style={{ color: "hsl(var(--muted-foreground))" }}>geo:</span> <span style={{ color: "hsl(var(--primary))" }}>"TX · Austin"</span></p>
            <p style={{ margin: 0 }}><span style={{ color: "hsl(var(--muted-foreground))" }}>lot_min:</span> <span style={{ color: "#D97706" }}>1.5</span></p>
            <p style={{ margin: 0 }}><span style={{ color: "hsl(var(--muted-foreground))" }}>value:</span> <span style={{ color: "#D97706" }}>500K-2M</span></p>
            <p style={{ margin: 0 }}><span style={{ color: "hsl(var(--muted-foreground))" }}>distress:</span></p>
            <p style={{ margin: 0 }}>  <span style={{ color: "hsl(var(--primary))" }}>"tax"</span>,</p>
            <p style={{ margin: 0 }}>  <span style={{ color: "hsl(var(--primary))" }}>"absentee"</span>,</p>
            <p style={{ margin: 0 }}>  <span style={{ color: "hsl(var(--primary))" }}>"lis_pendens"</span></p>
            <p style={{ margin: 0 }}><span style={{ color: "hsl(var(--muted-foreground))" }}>schedule:</span> <span style={{ color: "hsl(var(--primary))" }}>"02:00"</span></p>
          </div>
        </div>
      </div>

      {/* Right panel — match preview */}
      <div
        style={{
          position: "absolute",
          top: "46px",
          left: "calc(50% + 87.5px)",
          transform: "translateX(-50%)",
          width: "175px",
          height: "180px",
          background: "linear-gradient(180deg, hsl(var(--background) / 0.8) 0%, transparent 100%)",
          backdropFilter: "blur(7.907px)",
          borderRadius: "9.488px",
          overflow: "hidden",
          boxSizing: "border-box",
        }}
      >
        <div
          style={{
            padding: "10px",
            height: "100%",
            boxSizing: "border-box",
            position: "relative",
            background: "hsl(var(--background) / 0.8)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: "8px",
          }}
        >
          <div
            style={{
              width: "100%",
              padding: "10px",
              borderRadius: "8px",
              background: "hsl(var(--card) / 0.6)",
              border: "1px solid hsl(var(--border))",
              position: "relative",
              fontFamily: "'Geist', sans-serif",
            }}
          >
            <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "2px", background: "hsl(var(--primary))", borderRadius: "8px 8px 0 0", boxShadow: "0 0 8px hsl(var(--primary) / 0.6)" }} />
            <div style={{ fontSize: "11px", fontWeight: 600, color: "hsl(var(--foreground))", marginTop: "2px" }}>1402 Bouldin Ave</div>
            <div style={{ fontSize: "9px", color: "hsl(var(--muted-foreground))", marginTop: "2px" }}>Austin, TX · Self storage</div>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: "6px" }}>
              <span style={{ fontSize: "8px", color: "hsl(var(--muted-foreground))", textTransform: "uppercase", letterSpacing: "0.5px" }}>Match</span>
              <span style={{ fontSize: "13px", fontWeight: 700, color: "hsl(var(--primary))" }}>0.91</span>
            </div>
          </div>
          <div style={{ fontSize: "9px", color: "hsl(var(--muted-foreground))", fontFamily: "'Geist', sans-serif", textAlign: "center" }}>
            <span style={{ color: "#D97706", fontWeight: 600 }}>+27</span> more matched
          </div>
        </div>
      </div>

      {/* Vertical connecting line */}
      <div
        style={{
          position: "absolute",
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div style={{ position: "relative", width: "2px", height: "140px" }}>
          <svg
            width="2"
            height="140"
            viewBox="0 0 2 140"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ position: "absolute", inset: 0 }}
          >
            <defs>
              <linearGradient id="connectionGradient2" x1="1" y1="0" x2="1" y2="140" gradientUnits="userSpaceOnUse">
                <stop stopColor="hsl(var(--primary))" stopOpacity="0" />
                <stop offset="0.5" stopColor="hsl(var(--primary))" />
                <stop offset="1" stopColor="hsl(var(--primary))" stopOpacity="0" />
              </linearGradient>
            </defs>
            <path d="M1 0V140" stroke="url(#connectionGradient2)" strokeWidth="2" />
          </svg>
        </div>
      </div>
    </div>
  )
}

export default RealtimeCodingPreviews
