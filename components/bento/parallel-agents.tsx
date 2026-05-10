"use client"

import type React from "react"

const ParallelCodingAgents: React.FC = () => {
  const contacts = [
    {
      title: "(512) 555-0142",
      meta: "Patterson · skip-trace · 94% confidence",
      icon: (
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
        </svg>
      ),
      color: "hsl(var(--foreground))",
    },
    {
      title: "john@patterson-h.com",
      meta: "Patterson · skip-trace · 88% confidence",
      icon: (
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="4" width="20" height="16" rx="2" />
          <path d="m22 7-10 5L2 7" />
        </svg>
      ),
      color: "#D97706",
    },
    {
      title: "4501 Riverside Dr",
      meta: "Patterson · public records · 100% confidence",
      icon: (
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 9.5 12 3l9 6.5V21a1 1 0 0 1-1 1h-5v-7h-6v7H4a1 1 0 0 1-1-1z" />
        </svg>
      ),
      color: "hsl(var(--foreground))",
    },
  ]

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        position: "relative",
        background: "transparent",
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "center",
      }}
      role="img"
      aria-label="Owner contact records attached to a deal"
    >
      <div
        style={{
          width: "calc(100% - 48px)",
          margin: "24px 24px 0",
          padding: "20px",
          background: "linear-gradient(180deg, hsl(var(--card) / 0.4) 0%, transparent 100%)",
          backdropFilter: "blur(16px)",
          borderRadius: "9.628px",
          border: "0.802px solid hsl(var(--border))",
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          boxSizing: "border-box",
        }}
      >
        {contacts.map((c, i) => (
          <div
            key={i}
            style={{
              display: "flex",
              alignItems: "flex-start",
              gap: "10px",
              padding: "8px 10px",
              background: "linear-gradient(180deg, hsl(var(--card) / 0.4) 0%, transparent 100%)",
              backdropFilter: "blur(19px)",
              borderRadius: "8.658px",
              boxShadow: "0px 1.082px 2.165px 0px rgba(0, 0, 0, 0.12)",
              border: "0.541px solid hsl(var(--border))",
              boxSizing: "border-box",
            }}
          >
            <div
              style={{
                width: "18px",
                height: "18px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: c.color,
                flexShrink: 0,
                paddingTop: "1px",
              }}
            >
              {c.icon}
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "2px",
                flex: 1,
                minWidth: 0,
              }}
            >
              <div
                style={{
                  fontFamily: "'Geist', sans-serif",
                  fontWeight: 500,
                  fontSize: "11px",
                  color: "hsl(var(--foreground))",
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                }}
              >
                {c.title}
              </div>
              <div
                style={{
                  fontFamily: "'Geist', sans-serif",
                  fontWeight: 400,
                  fontSize: "10px",
                  color: "hsl(var(--muted-foreground))",
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                }}
              >
                {c.meta}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ParallelCodingAgents
