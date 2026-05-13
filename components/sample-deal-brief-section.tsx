import { AlertTriangle, MapPin, Star } from "lucide-react"

export function SampleDealBriefSection() {
  return (
    <section className="w-full px-5 py-12 md:py-20 flex flex-col items-center">
      <div className="max-w-[900px] w-full flex flex-col items-center gap-8 md:gap-12">
        <div className="flex flex-col items-center gap-4 text-center">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 ring-1 ring-white/10 text-foreground/80 text-xs md:text-sm font-medium uppercase tracking-wide">
            What you receive
          </span>
          <h2 className="text-foreground text-4xl md:text-5xl font-semibold leading-tight max-w-[600px]">
            Not a spreadsheet. A finished decision.
          </h2>
        </div>

        <article className="w-full rounded-2xl border border-white/15 bg-white/[0.04] backdrop-blur-sm shadow-[0_30px_80px_-30px_rgba(0,0,0,0.5)] overflow-hidden">
          <header className="px-6 md:px-8 pt-6 md:pt-8 pb-5 md:pb-6 border-b border-white/10 flex flex-col gap-3">
            <div className="flex items-start justify-between gap-4 flex-wrap">
              <div className="flex flex-col gap-1.5">
                <h3 className="text-foreground text-xl md:text-2xl font-semibold leading-tight">
                  4711 Ridgeline Dr
                </h3>
                <div className="flex items-center gap-1.5 text-muted-foreground text-sm font-medium">
                  <MapPin className="w-3.5 h-3.5" strokeWidth={2} />
                  Round Rock, TX
                </div>
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/15 ring-1 ring-primary/30">
                <Star className="w-3.5 h-3.5 text-primary" strokeWidth={2.5} fill="currentColor" />
                <span className="text-primary text-xs md:text-sm font-semibold tracking-tight">
                  Match score: 9.1 / 10
                </span>
              </div>
            </div>
            <div className="flex flex-wrap gap-2">
              {["Self-storage parcel", "1.4 acres", "Tax delinquent", "Absentee owner", "20+ year hold"].map(
                (tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 rounded-full bg-white/5 ring-1 ring-white/10 text-foreground/80 text-xs font-medium"
                  >
                    {tag}
                  </span>
                ),
              )}
            </div>
          </header>

          <div className="px-6 md:px-8 py-6 md:py-7 flex flex-col gap-5 md:gap-6">
            <p className="text-foreground/90 text-sm md:text-base leading-relaxed">
              Mike Jones has held this property for 22 years. Tax delinquent since 2023 with two years of unpaid property taxes on file. Mailing address is 214 miles from the property — classic absentee profile. Last permit on file is from 2008, suggesting deferred capex. Assessed value $412K. Last sale price $187K (2003).
            </p>

            <div className="rounded-xl bg-white/[0.04] ring-1 ring-white/10 p-4 md:p-5 flex flex-col gap-2">
              <div className="text-muted-foreground text-xs font-semibold uppercase tracking-wide">
                Why this matched your buy box
              </div>
              <p className="text-foreground/90 text-sm md:text-base leading-relaxed">
                Texas commercial parcel between 1–2 acres, 20+ year hold, active tax delinquency, absentee owner. Hits every criterion.
              </p>
            </div>

            <div className="rounded-xl bg-primary/[0.08] ring-1 ring-primary/20 p-4 md:p-5 flex flex-col gap-3">
              <div className="text-primary text-xs font-semibold uppercase tracking-wide flex items-center gap-1.5">
                <AlertTriangle className="w-3.5 h-3.5" strokeWidth={2.5} />
                Distress signals
              </div>
              <div className="flex flex-wrap gap-2">
                {["Tax delinquent · 2 yrs", "Absentee owner · 214 mi", "No permits since 2008", "20+ yr hold"].map((signal) => (
                  <span key={signal} className="px-2.5 py-1 rounded-full bg-primary/10 ring-1 ring-primary/20 text-primary/90 text-xs font-medium">
                    {signal}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </article>

        <p className="text-muted-foreground text-sm md:text-base font-medium leading-relaxed text-center max-w-[680px]">
          Every deal in your inbox reads like this. Distress signals explained. Match rationale. Property profile. Aerial map. Ready to act.
        </p>
      </div>
    </section>
  )
}
