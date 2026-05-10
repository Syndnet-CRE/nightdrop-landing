interface TimelineStep {
  time: string
  title: string
  detail: string
}

const steps: TimelineStep[] = [
  {
    time: "11:59 PM",
    title: "Buy boxes lock in",
    detail: "Any edits to your criteria take effect for tonight's run.",
  },
  {
    time: "2:00 AM",
    title: "Agents run nationwide",
    detail: "160M+ parcels queried against every active buy box simultaneously.",
  },
  {
    time: "3:00 AM",
    title: "Distress gate applied",
    detail: "Properties scored against your match threshold. Anything below the bar is dropped.",
  },
  {
    time: "4:30 AM",
    title: "Briefs written, contacts attached",
    detail: "AI drafts a full deal brief per property. Skip trace pulled. Owner contact attached.",
  },
  {
    time: "6:00 AM",
    title: "Deals in your inbox",
    detail: "Before your first coffee. Ready to read, mark Hot or Not Relevant, and call.",
  },
]

export function MidnightRunSection() {
  return (
    <section className="w-full px-5 py-12 md:py-20 flex flex-col items-center">
      <div className="max-w-[900px] w-full flex flex-col items-center gap-10 md:gap-14">
        <div className="flex flex-col items-center gap-4 text-center">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 ring-1 ring-white/10 text-foreground/80 text-xs md:text-sm font-medium uppercase tracking-wide">
            The Midnight Run
          </span>
          <h2 className="text-foreground text-4xl md:text-5xl font-semibold leading-tight max-w-[680px]">
            While everyone else sleeps, your agent is working.
          </h2>
          <p className="text-muted-foreground text-base md:text-lg font-medium leading-relaxed max-w-[640px]">
            Every subscriber's buy box is different. Every run produces a unique set of deals. No two inboxes look the same.
          </p>
        </div>

        <ol className="w-full flex flex-col gap-0 relative">
          <div
            className="absolute left-[18px] md:left-[22px] top-3 bottom-3 w-px bg-gradient-to-b from-primary/60 via-white/10 to-primary/0"
            aria-hidden="true"
          />
          {steps.map((step, idx) => (
            <li key={step.time} className="relative pl-12 md:pl-16 pb-8 md:pb-10 last:pb-0">
              <div
                className={`absolute left-0 top-1 w-9 h-9 md:w-11 md:h-11 rounded-full flex items-center justify-center text-[10px] md:text-xs font-semibold ${
                  idx === steps.length - 1
                    ? "bg-primary text-primary-foreground ring-4 ring-primary/20"
                    : "bg-white/5 text-foreground ring-1 ring-white/15"
                }`}
              >
                {String(idx + 1).padStart(2, "0")}
              </div>
              <div className="flex flex-col gap-1">
                <div className="flex flex-wrap items-baseline gap-3">
                  <span className="text-primary text-sm md:text-base font-semibold tracking-wide tabular-nums">
                    {step.time}
                  </span>
                  <h3 className="text-foreground text-lg md:text-xl font-semibold leading-tight">
                    {step.title}
                  </h3>
                </div>
                <p className="text-muted-foreground text-sm md:text-base leading-relaxed max-w-[560px]">
                  {step.detail}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
