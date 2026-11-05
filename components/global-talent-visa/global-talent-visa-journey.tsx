import { visaBenefits } from "@/lib/gtv-details";
import { cn } from "@/lib/utils";
import {
  GTVReveal,
  gtvBody,
  gtvContainer,
  gtvHeading,
  gtvLabel,
} from "./gtv-editorial";

export function GlobalTalentVisaJourney() {
  return (
    <section
      id="my-journey"
      aria-labelledby="journey-title"
      className="scroll-mt-24 border-b border-rule"
    >
      <div className={gtvContainer}>
        <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:gap-20">
          <GTVReveal>
            <p className={gtvLabel}>My journey</p>
            <h2 id="journey-title" className={gtvHeading}>
              The application started years before I applied.
            </h2>
          </GTVReveal>
          <GTVReveal className={cn(gtvBody, "space-y-5")}>
            <p>
              Over the past few years, many people have asked me how to qualify
              for the UK Global Talent Visa. Most people start with documents,
              application strategies and checklists.
            </p>
            <p>
              In my experience, the foundation begins much earlier: the projects
              you build, people you work with, communities you contribute to and
              reputation you earn.
            </p>
            <p>
              By the time I submitted my application, the evidence already
              existed. The challenge was presenting the story clearly.
            </p>
          </GTVReveal>
        </div>
        <GTVReveal className="mt-14 grid gap-8 border-t border-rule pt-8 md:grid-cols-[1fr_1.2fr] md:gap-20">
          <h3 className="max-w-sm font-playfair text-2xl">
            Room to build a career
            <br />
            on your own terms.
          </h3>
          <div>
            <ul className="grid gap-5 font-sans text-base leading-7 text-muted sm:grid-cols-2">
              {visaBenefits.map((benefit) => (
                <li key={benefit} className="border-l-2 border-rule pl-4">
                  {benefit}
                </li>
              ))}
            </ul>
            <a
              href="https://www.gov.uk/global-talent"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-block py-2 font-sans text-sm underline underline-offset-4 hover:text-accent"
            >
              Check the current GOV.UK guidance
            </a>
          </div>
        </GTVReveal>
      </div>
    </section>
  );
}
