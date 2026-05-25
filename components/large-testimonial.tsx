import Image from "next/image"

export function LargeTestimonial() {
  return (
    <section className="w-full px-5 overflow-hidden flex justify-center items-center">
      <div className="flex-1 flex flex-col justify-start items-start overflow-hidden">
        <div className="self-stretch px-4 py-12 md:px-6 md:py-16 lg:py-28 flex flex-col justify-start items-start gap-2">
          <div className="self-stretch flex justify-between items-center">
            <div className="w-full max-w-[1080px] mx-auto px-4 py-4 md:px-8 lg:px-12 md:py-5 lg:py-6 overflow-hidden rounded-[10px] bg-primary border border-primary/40 hover:border-primary/70 shadow-[0px_2px_4px_rgba(0,0,0,0.08)] transition-all duration-500 flex flex-col justify-center items-center gap-4 md:gap-6 lg:gap-8">
              <div className="w-full max-w-[1024px] text-center text-primary-foreground leading-7 sm:leading-8 md:leading-10 lg:leading-[64px] font-medium text-lg sm:text-xl md:text-3xl lg:text-6xl">
                {
                  "“I used to spend half my week pulling lists and screening off-market leads. Nightdrop replaced all of that.”"
                }
              </div>
              <div className="flex justify-start items-center gap-5">
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-primary text-lg font-semibold">
                  JR
                </div>
                <div className="flex flex-col justify-start items-start">
                  <div className="text-primary-foreground text-base font-medium leading-6">Early Access Investor</div>
                  <div className="text-primary-foreground/60 text-sm font-normal leading-6">Austin, TX</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
