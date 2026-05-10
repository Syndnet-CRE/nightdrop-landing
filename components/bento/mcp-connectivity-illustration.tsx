"use client"

import type React from "react"

const MCPConnectivityIllustration: React.FC = () => {
  const signals = [
    {
      name: "Tax delinquent",
      severity: "active",
      color: "hsl(var(--primary))",
      bg: "hsl(var(--primary) / 0.12)",
    },
    {
      name: "Lis Pendens",
      severity: "active",
      color: "#D97706",
      bg: "rgba(217, 119, 6, 0.12)",
    },
    {
      name: "Absentee owner",
      severity: "active",
      color: "hsl(var(--primary))",
      bg: "hsl(var(--primary) / 0.12)",
    },
    {
      name: "Inactive entity",
      severity: "active",
      color: "#D97706",
      bg: "rgba(217, 119, 6, 0.12)",
    },
    {
      name: "Lien filed",
      severity: "active",
      color: "hsl(var(--primary))",
      bg: "hsl(var(--primary) / 0.12)",
    },
    {
      name: "Long hold",
      severity: null,
      color: null,
      bg: null,
    },
    {
      name: "Vacancy",
      severity: null,
      color: null,
      bg: null,
    },
  ]

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "16px",
        position: "relative",
        background: "transparent",
      }}
      role="img"
      aria-label="Distress signals tracker showing active signals"
    >
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "300px",
          height: "240px",
          background: "linear-gradient(180deg, hsl(var(--background)) 0%, transparent 100%)",
          backdropFilter: "blur(16px)",
          borderRadius: "9.628px",
          border: "0.802px solid hsl(var(--border))",
          overflow: "hidden",
          boxSizing: "border-box",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* Search bar */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            padding: "10px 12px",
            borderBottom: "0.802px solid hsl(var(--border))",
          }}
        >
          <svg
            width="13"
            height="13"
            viewBox="0 0 24 24"
            fill="none"
            stroke="hsl(var(--muted-foreground))"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.3-4.3" />
          </svg>
          <span
            style={{
              fontFamily: "'Geist', sans-serif",
              fontSize: "12px",
              color: "hsl(var(--muted-foreground))",
              fontWeight: 400,
            }}
          >
            Search distress signals
          </span>
        </div>

        {/* Signal rows */}
        {signals.map((s, i) => (
          <div
            key={i}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "8px 12px",
              borderBottom: i < signals.length - 1 ? "0.479px solid hsl(var(--border))" : "none",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <span
                style={{
                  width: "6px",
                  height: "6px",
                  borderRadius: "999px",
                  background: s.color || "hsl(var(--muted-foreground) / 0.3)",
                  boxShadow: s.color ? `0 0 6px ${s.color}` : "none",
                  flexShrink: 0,
                }}
              />
              <span
                style={{
                  fontFamily: "'Geist', sans-serif",
                  fontSize: "11px",
                  color: s.severity ? "hsl(var(--foreground))" : "hsl(var(--muted-foreground))",
                  fontWeight: s.severity ? 500 : 400,
                }}
              >
                {s.name}
              </span>
            </div>
            {s.severity && (
              <span
                style={{
                  background: s.bg!,
                  color: s.color!,
                  padding: "1.5px 6px",
                  borderRadius: "3.5px",
                  fontFamily: "'Geist', sans-serif",
                  fontSize: "9px",
                  fontWeight: 600,
                }}
              >
                Active
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default MCPConnectivityIllustration
