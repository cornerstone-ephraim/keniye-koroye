import FadeIn from "@/components/ui/FadeIn";
import { visaBenefits } from "@/lib/gtv-details";
import { GTVSectionLabel } from "./gtv-section-label";

export const GlobalTalentVisaJourney = () => {
  return (
    <section className="border-b border-rule">
      <div className="px-6 py-10 md:px-12 md:py-14">
        <div className="grid grid-cols-1 items-start gap-8 md:grid-cols-[0.95fr_1.05fr] md:gap-16">
          <FadeIn delay={0.1}>
            <div>
              <GTVSectionLabel>My Journey</GTVSectionLabel>
              <h2
                className="mb-6 max-w-xl font-playfair leading-tight font-black -tracking-[0.02em]"
                style={{ fontSize: "clamp(1.7rem, 4vw, 3.25rem)" }}
              >
                The application started years before I applied.
              </h2>

              <div className="space-y-4 text-[0.78rem] leading-[1.85] text-muted md:text-[0.85rem]">
                <p>
                  One of the biggest misconceptions about the Global Talent Visa
                  is that the application begins when you decide to apply.
                </p>
                <p>
                  In reality, it begins years earlier: projects you build,
                  people you work with, communities you contribute to, and
                  reputation you earn.
                </p>

                {/* <div className="grid gap-2 py-2 sm:grid-cols-2">
                  {[
                    "Projects you build",
                    "People you work with",
                    "Communities you contribute to",
                    "Reputation you earn",
                  ].map((line) => (
                    <span
                      key={line}
                      className="border-l border-rule py-1.5 pl-4 font-mono text-[0.6rem] tracking-[0.12em] text-ink"
                    >
                      {line}
                    </span>
                  ))}
                </div> */}
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.2} className="md:h-full">
            <div>
              <div className="mb-8">
                <span className="font-mono text-[0.6rem] tracking-[0.18em] text-accent uppercase">
                  Benefits Of The Visa
                </span>
                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                  {visaBenefits.map((benefit) => (
                    <div key={benefit} className="border-l border-rule pl-4">
                      <span className="text-[0.76rem] leading-[1.65] text-muted md:text-[0.82rem]">
                        {benefit}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
              <p>
                By the time I submitted my application, the evidence already
                existed. The challenge was simply presenting the story clearly.
              </p>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};
