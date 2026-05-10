"use client"

import type React from "react"

type CellContent =
  | { kind: "empty" }
  | { kind: "match"; node: React.ReactNode }
  | { kind: "borderline"; node: React.ReactNode }

const ChartBars = (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="6" y1="20" x2="6" y2="14" />
    <line x1="12" y1="20" x2="12" y2="9" />
    <line x1="18" y1="20" x2="18" y2="11" />
  </svg>
)

const TrendUp = (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
    <polyline points="16 7 22 7 22 13" />
  </svg>
)

const Target = (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <circle cx="12" cy="12" r="6" />
    <circle cx="12" cy="12" r="2" />
  </svg>
)

const Activity = (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
  </svg>
)

const Alert = (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <line x1="12" y1="8" x2="12" y2="12" />
    <line x1="12" y1="16" x2="12.01" y2="16" />
  </svg>
)

const PercentText = (txt: string) => (
  <span style={{ fontFamily: "'Geist', sans-serif", fontSize: "15px", fontWeight: 700, letterSpacing: "-0.5px" }}>
    {txt}
  </span>
)

// 4 rows × 7 cols = 28 squares
const rows: CellContent[][] = [
  [
    { kind: "empty" },
    { kind: "match", node: PercentText("84%") },
    { kind: "empty" },
    { kind: "match", node: ChartBars },
    { kind: "empty" },
    { kind: "match", node: PercentText("91%") },
    { kind: "empty" },
  ],
  [
    { kind: "match", node: Target },
    { kind: "empty" },
    { kind: "empty" },
    { kind: "match", node: PercentText("0.78") },
    { kind: "empty" },
    { kind: "borderline", node: Alert },
    { kind: "empty" },
  ],
  [
    { kind: "empty" },
    { kind: "empty" },
    { kind: "match", node: TrendUp },
    { kind: "empty" },
    { kind: "match", node: PercentText("67%") },
    { kind: "empty" },
    { kind: "match", node: Activity },
  ],
  [
    { kind: "empty" },
    { kind: "borderline", node: Alert },
    { kind: "empty" },
    { kind: "match", node: PercentText("92%") },
    { kind: "empty" },
    { kind: "empty" },
    { kind: "match", node: ChartBars },
  ],
]

const SQUARE = 60
const GAP = 12
const ROW_OFFSET = 36 // shift even rows left by half-square + half-gap

const OneClickIntegrationsIllustration: React.FC = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        position: "relative",
        background: "transparent",
        overflow: "visible",
      }}
      role="img"
      aria-label="Grid of evaluated properties with scoring overlays"
    >
      {/* Soft radial glow behind grid */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse 100% 80% at 50% 50%, hsl(var(--foreground) / 0.06) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      {/* Grid — fully visible, no mask */}
      <div
        style={{
          position: "absolute",
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
          display: "flex",
          flexDirection: "column",
          gap: `${GAP}px`,
        }}
      >
        {rows.map((row, ri) => {
          const shiftLeft = ri % 2 === 1 // rows 2 and 4 shift left
          return (
            <div
              key={ri}
              style={{
                display: "flex",
                gap: `${GAP}px`,
                transform: shiftLeft ? `translateX(-${ROW_OFFSET}px)` : "none",
              }}
            >
              {row.map((cell, ci) => {
                const isMatch = cell.kind === "match"
                const isBorderline = cell.kind === "borderline"
                const color = isMatch
                  ? "hsl(var(--primary))"
                  : isBorderline
                  ? "#D97706"
                  : "transparent"
                const bg = isMatch
                  ? "hsl(var(--primary) / 0.18)"
                  : isBorderline
                  ? "rgba(217, 119, 6, 0.18)"
                  : "hsl(var(--foreground) / 0.04)"
                const border = isMatch
                  ? "1px solid hsl(var(--primary))"
                  : isBorderline
                  ? "1px solid #D97706"
                  : "1px solid hsl(var(--border))"
                const shadow = isMatch
                  ? "0 0 28px hsl(var(--primary) / 0.55)"
                  : isBorderline
                  ? "0 0 18px rgba(217, 119, 6, 0.5)"
                  : "none"
                return (
                  <div
                    key={ci}
                    style={{
                      width: `${SQUARE}px`,
                      height: `${SQUARE}px`,
                      borderRadius: "9px",
                      border,
                      background: bg,
                      boxShadow: shadow,
                      color,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    {cell.kind !== "empty" ? cell.node : null}
                  </div>
                )
              })}
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default OneClickIntegrationsIllustration
