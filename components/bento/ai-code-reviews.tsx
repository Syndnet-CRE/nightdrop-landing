import type React from "react"

const AiCodeReviews: React.FC = () => {
  const dayLabels = ["M", "T", "W", "T", "F", "S", "S"]

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        position: "relative",
        background: "transparent",
      }}
      role="img"
      aria-label="Buy box submission card showing an active nightly run"
    >
      {/* Back card (offset behind for depth) */}
      <div
        style={{
          position: "absolute",
          top: "32px",
          left: "calc(50% + 18px)",
          transform: "translateX(-50%) scale(0.94)",
          width: "270px",
          height: "210px",
          background: "hsl(var(--card) / 0.25)",
          backdropFilter: "blur(12px)",
          borderRadius: "12px",
          border: "1px solid hsl(var(--border))",
          opacity: 0.45,
          overflow: "hidden",
          boxSizing: "border-box",
        }}
      >
        <div style={{ padding: "10px 12px" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <span
              style={{
                fontFamily: "'Geist', -apple-system, BlinkMacSystemFont, sans-serif",
                fontSize: "11px",
                fontWeight: 600,
                color: "hsl(var(--foreground))",
              }}
            >
              Active
            </span>
            <span
              style={{
                fontSize: "9px",
                color: "hsl(var(--muted-foreground))",
                background: "hsl(var(--foreground) / 0.06)",
                borderRadius: "999px",
                padding: "1px 6px",
              }}
            >
              1
            </span>
          </div>
          <div
            style={{
              fontSize: "10px",
              color: "hsl(var(--muted-foreground))",
              marginTop: "2px",
            }}
          >
            Running nightly
          </div>
        </div>
        <div
          style={{
            margin: "4px 8px",
            background: "hsl(var(--background) / 0.6)",
            border: "1px solid hsl(var(--border))",
            borderRadius: "8px",
            height: "120px",
            padding: "10px",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              height: "1.5px",
              background: "hsl(var(--primary) / 0.7)",
            }}
          />
          <div
            style={{
              fontSize: "11px",
              fontWeight: 600,
              color: "hsl(var(--foreground))",
            }}
          >
            industrial
          </div>
          <div
            style={{
              fontSize: "9px",
              color: "hsl(var(--muted-foreground))",
              marginTop: "4px",
            }}
          >
            AZ
          </div>
        </div>
      </div>

      {/* Front card (main) */}
      <div
        style={{
          position: "absolute",
          top: "12px",
          left: "calc(50% - 18px)",
          transform: "translateX(-50%)",
          width: "270px",
          background: "hsl(var(--card) / 0.55)",
          backdropFilter: "blur(16px)",
          borderRadius: "12px",
          border: "1px solid hsl(var(--border))",
          overflow: "hidden",
          boxSizing: "border-box",
          boxShadow:
            "0 8px 24px rgba(0,0,0,0.25), 0 2px 6px rgba(0,0,0,0.15)",
        }}
      >
        {/* Status header */}
        <div style={{ padding: "8px 12px 4px" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <span
              style={{
                fontFamily: "'Geist', -apple-system, BlinkMacSystemFont, sans-serif",
                fontSize: "11px",
                fontWeight: 600,
                color: "hsl(var(--foreground))",
              }}
            >
              Active
            </span>
            <span
              style={{
                fontSize: "9px",
                fontWeight: 500,
                color: "hsl(var(--muted-foreground))",
                background: "hsl(var(--foreground) / 0.08)",
                borderRadius: "999px",
                padding: "2px 7px",
                lineHeight: 1,
              }}
            >
              1
            </span>
          </div>
          <div
            style={{
              fontSize: "9px",
              color: "hsl(var(--muted-foreground))",
              marginTop: "2px",
            }}
          >
            Running nightly · 47-day streak
          </div>
        </div>

        {/* Inner buy-box card */}
        <div
          style={{
            margin: "4px 8px 8px",
            background: "hsl(var(--background) / 0.7)",
            border: "1px solid hsl(var(--border))",
            borderRadius: "8px",
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* Green top accent */}
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              height: "2px",
              background: "hsl(var(--primary))",
              boxShadow: "0 0 10px hsl(var(--primary) / 0.6)",
            }}
          />

          {/* Title + settings */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "8px 10px 2px",
            }}
          >
            <span
              style={{
                fontFamily: "'Geist', -apple-system, BlinkMacSystemFont, sans-serif",
                fontSize: "12px",
                fontWeight: 600,
                color: "hsl(var(--foreground))",
              }}
            >
              self storage
            </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="11"
              height="11"
              viewBox="0 0 24 24"
              fill="none"
              stroke="hsl(var(--muted-foreground))"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M14 17H5" />
              <path d="M19 7h-9" />
              <circle cx="17" cy="17" r="3" />
              <circle cx="7" cy="7" r="3" />
            </svg>
          </div>

          {/* Location */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "4px",
              padding: "0 10px",
              fontSize: "9px",
              color: "hsl(var(--muted-foreground))",
            }}
          >
            <svg
              width="9"
              height="9"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M12 22s7-7 7-12a7 7 0 1 0-14 0c0 5 7 12 7 12z" />
              <circle cx="12" cy="10" r="2.5" />
            </svg>
            <span>TX · Austin metro · 5 counties</span>
          </div>

          {/* 2x2 stats grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "2px 8px",
              padding: "6px 10px 6px",
              fontSize: "9px",
              fontFamily: "'Geist', -apple-system, BlinkMacSystemFont, sans-serif",
            }}
          >
            <div style={{ display: "flex", flexDirection: "column" }}>
              <span style={{ color: "hsl(var(--foreground))", fontWeight: 600 }}>
                176
              </span>
              <span style={{ color: "hsl(var(--muted-foreground))", fontSize: "8px" }}>
                delivered
              </span>
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <span style={{ color: "hsl(var(--foreground))", fontWeight: 600 }}>
                92%
              </span>
              <span style={{ color: "hsl(var(--muted-foreground))", fontSize: "8px" }}>
                match rate
              </span>
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <span style={{ color: "hsl(var(--foreground))", fontWeight: 600 }}>
                0.84
              </span>
              <span style={{ color: "hsl(var(--muted-foreground))", fontSize: "8px" }}>
                avg score
              </span>
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <span style={{ color: "hsl(var(--foreground))", fontWeight: 600 }}>
                30d
              </span>
              <span style={{ color: "hsl(var(--muted-foreground))", fontSize: "8px" }}>
                window
              </span>
            </div>
          </div>

          {/* Day buttons */}
          <div
            style={{
              display: "flex",
              gap: "4px",
              padding: "2px 10px 8px",
            }}
          >
            {dayLabels.map((d, i) => (
              <div
                key={i}
                style={{
                  flex: 1,
                  height: "20px",
                  borderRadius: "5px",
                  border: "1px solid hsl(var(--primary) / 0.4)",
                  background: "hsl(var(--primary) / 0.18)",
                  color: "hsl(var(--primary))",
                  fontSize: "9px",
                  fontWeight: 600,
                  fontFamily:
                    "'Geist', -apple-system, BlinkMacSystemFont, sans-serif",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {d}
              </div>
            ))}
          </div>

          {/* Action buttons row: Pause + Edit */}
          <div
            style={{
              display: "flex",
              gap: "6px",
              padding: "0 10px 8px",
            }}
          >
            <div
              style={{
                flex: 1,
                height: "26px",
                borderRadius: "6px",
                border: "1px solid hsl(var(--border))",
                background: "hsl(var(--foreground) / 0.04)",
                color: "hsl(var(--foreground))",
                fontFamily:
                  "'Geist', -apple-system, BlinkMacSystemFont, sans-serif",
                fontSize: "10px",
                fontWeight: 500,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              Pause
            </div>
            <div
              style={{
                flex: 1,
                height: "26px",
                borderRadius: "6px",
                border: "1px solid #D97706",
                background: "rgba(217, 119, 6, 0.12)",
                color: "#D97706",
                fontFamily:
                  "'Geist', -apple-system, BlinkMacSystemFont, sans-serif",
                fontSize: "10px",
                fontWeight: 600,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "4px",
              }}
            >
              <svg
                width="9"
                height="9"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M12 20h9" />
                <path d="M16.376 3.622a1 1 0 0 1 1.414 1.414L7.5 15.314 4 16l.686-3.5z" />
              </svg>
              Edit
            </div>
          </div>

          {/* Footer status */}
          <div
            style={{
              borderTop: "1px solid hsl(var(--border))",
              padding: "6px 10px",
              fontSize: "8px",
              color: "hsl(var(--muted-foreground))",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              fontFamily: "'Geist', -apple-system, BlinkMacSystemFont, sans-serif",
            }}
          >
            <span>Last brief delivered</span>
            <span style={{ color: "hsl(var(--foreground))" }}>
              Today · 5:59 AM
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AiCodeReviews
