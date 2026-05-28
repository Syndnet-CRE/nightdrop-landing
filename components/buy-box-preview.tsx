export function BuyBoxPreview() {
  return (
    <div className="w-full md:w-[1100px] mx-auto">
      <div className="relative">
        {/* Back glass — 16px ring, lightest */}
        <div className="absolute -inset-4 rounded-[24px] bg-primary-light/30 shadow-2xl ring-1 ring-white/[0.08]" />
        {/* Mid glass — 8px ring, slightly stronger */}
        <div className="absolute -inset-2 rounded-2xl bg-primary-light/55 ring-1 ring-white/10" />
        {/* Image — transparent SVG zones cropped flush so all four gaps are uniform */}
        <div className="relative overflow-hidden rounded-2xl">
          <img
            src="/images/buy-box-preview.svg"
            alt="PropCloud buy box setup: configuring your match threshold for tighter or looser deal filtering"
            className="block w-full h-auto -mt-8 -mb-8 md:-mt-20 md:-mb-20"
          />
        </div>
      </div>
    </div>
  )
}
