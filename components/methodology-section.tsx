import { FileWarning, Gavel, Scale, ShieldAlert } from "lucide-react"
import type { LucideIcon } from "lucide-react"

interface DistressSignal {
  name: string
  detail: string
  Icon: LucideIcon
}

const signals: DistressSignal[] = [
  {
    name: "Tax Delinquency",
    detail: "Active delinquent tax record on file.",
    Icon: ShieldAlert,
  },
  {
    name: "Pre-Foreclosure",
    detail: "Notice of Default or Lis Pendens filed.",
    Icon: FileWarning,
  },
  {
    name: "Active Foreclosure",
    detail: "Notice of Trustee Sale on record.",
    Icon: Gavel,
  },
  {
    name: "Auction Scheduled",
    detail: "Confirmed courthouse or online auction date.",
    Icon: Scale,
  },
]

export function MethodologySection() {
  return (
    <section className="w-full px-5 py-12 md:py-20 flex flex-col items-center">
      <div className="max-w-[1100px] w-full flex flex-col items-center gap-8 md:gap-12">
        <div className="flex flex-col items-center gap-4 text-center">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 ring-1 ring-white/10 text-foreground/80 text-xs md:text-sm font-medium uppercase tracking-wide">
            Our Methodology
          </span>
          <h2 className="text-foreground text-4xl md:text-5xl font-semibold leading-tight max-w-[760px]">
            Every deal has a real reason to sell. And every deal clears your bar.
          </h2>
          <p className="text-muted-foreground text-base md:text-lg font-medium leading-relaxed max-w-[680px]">
            You pick the distress signals that matter. You set the match threshold. Anything below your bar gets dropped before it ever hits your inbox.
          </p>
        </div>

        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {signals.map(({ name, detail, Icon }) => (
            <div
              key={name}
              className="rounded-2xl border border-white/15 bg-white/[0.03] backdrop-blur-sm p-5 md:p-6 flex flex-col gap-3 transition-colors hover:border-primary/30"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/15 flex items-center justify-center">
                <Icon className="w-5 h-5 text-primary" strokeWidth={2} />
              </div>
              <h3 className="text-foreground text-lg font-semibold leading-tight">{name}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{detail}</p>
            </div>
          ))}
        </div>

        <p className="text-foreground/80 text-sm md:text-base font-medium text-center max-w-[680px] leading-relaxed">
          Every property is scored against your buy box. If it doesn't clear your threshold, it doesn't ship.
        </p>
      </div>
    </section>
  )
}
