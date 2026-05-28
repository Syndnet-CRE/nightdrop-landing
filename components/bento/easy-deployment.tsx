"use client"

import type React from "react"

const EasyDeployment: React.FC = () => {
  const logLines = [
    "[02:00:01.012] Nightly pipeline starting in us-east-1",
    "[02:00:01.234] Loading active buy boxes from registry",
    "[02:00:02.456] Querying parcel database (160M parcels)",
    "[02:00:05.741] Applying geospatial filters",
    "[02:00:08.979] Running 900-point property analysis",
    "[02:14:34.945] Scoring matches against criteria",
    "[02:18:30.561] Surfacing distress signals",
    "[02:22:11.880] Resolving owner contacts",
    "[02:25:30.914] Scoring distress signals on matched properties",
    "[02:30:00.940] Filtering weak matches",
    "[02:34:36.436] Building deal briefs",
    "[02:35:45.436] Composing email digests",
    "[02:36:37.265] Saved digest manifest",
    "[02:38:39.076] Notification telemetry",
    "[02:38:39.137] PropCloud pipeline 1.0",
    "[02:38:41.439] ✓ Matches scored",
    "[02:38:53.979] ✓ Briefs generated",
    "[05:55:00.585] Queued for delivery",
    "[05:59:50.099] Digest sent to /inbox",
    "PropCloud complete. Good morning.",
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
      aria-label="PropCloud pipeline console output with Read your digest button"
    >
      {/* Console panel */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "340px",
          height: "239px",
          background: "linear-gradient(180deg, hsl(var(--background)) 0%, transparent 100%)",
          backdropFilter: "blur(7.907px)",
          borderRadius: "10px",
          overflow: "hidden",
          boxSizing: "border-box",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: "2px",
            borderRadius: "8px",
            background: "hsl(var(--foreground) / 0.08)",
          }}
        />
        <div
          style={{
            position: "relative",
            padding: "8px",
            height: "100%",
            overflow: "hidden",
            fontFamily: "'Geist Mono', 'SF Mono', Monaco, Consolas, 'Liberation Mono', monospace",
            fontSize: "10px",
            lineHeight: "16px",
            color: "hsl(var(--foreground))",
            whiteSpace: "pre",
          }}
        >
          {logLines.map((line, i) => (
            <p key={i} style={{ margin: 0 }}>
              {line}
            </p>
          ))}
        </div>
        <div
          style={{
            position: "absolute",
            inset: 0,
            border: "0.791px solid hsl(var(--border))",
            borderRadius: "10px",
            pointerEvents: "none",
          }}
        />
      </div>

      {/* CTA button */}
      <button
        style={{
          position: "absolute",
          top: "calc(50% + 57.6px)",
          left: "50%",
          transform: "translate(-50%, -50%)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "6.375px",
          padding: "5.1px 10.2px",
          background: "hsl(var(--primary))",
          color: "hsl(var(--primary-foreground))",
          border: "none",
          cursor: "pointer",
          borderRadius: "8.925px",
          fontFamily: "'Geist', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
          fontSize: "16.575px",
          lineHeight: "25.5px",
          letterSpacing: "-0.51px",
          fontWeight: 500,
          whiteSpace: "nowrap",
          boxShadow:
            "0px 42.075px 11.475px rgba(0, 0, 0, 0), 0px 26.775px 10.2px rgba(0, 0, 0, 0.01), 0px 15.3px 8.925px rgba(0, 0, 0, 0.05), 0px 6.375px 6.375px rgba(0, 0, 0, 0.09), 0px 1.275px 3.825px rgba(0, 0, 0, 0.1)",
        }}
      >
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <rect x="2" y="4" width="20" height="16" rx="2" />
          <path d="m22 7-10 5L2 7" />
        </svg>
        Read your digest
      </button>
    </div>
  )
}

export default EasyDeployment
