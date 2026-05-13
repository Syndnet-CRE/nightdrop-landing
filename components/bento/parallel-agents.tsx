"use client"

import type React from "react"

const ParallelCodingAgents: React.FC = () => {
  const contacts = [
    {
      title: "Tax delinquent · 2 yrs unpaid",
      meta: "Patterson · distress signal · high severity",
      icon: (
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
          <line x1="12" y1="9" x2="12" y2="13" />
          <line x1="12" y1="17" x2="12.01" y2="17" />
        </svg>
      ),
      color: "#D97706",
    },
    {
      title: "Match score: 9.1 / 10",
      meta: "Patterson · buy box match · confirmed",
      icon: (
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="20 6 9 17 4 12" />
        </svg>
      ),
      color: "hsl(var(--foreground))",
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
      aria-label="Distress signals and match score for a matched deal"
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
