import { ArrowUpRight, ArrowDown } from "lucide-react";
import { personal } from "@/lib/profile";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import FadeIn from "../ui/FadeIn";
import { GTVJourneyImage } from "./gtv-journey-image";

export function GlobalTalentVisaHeader() {
  return (
    <header className="border-b border-rule">
      <div className="mx-auto grid max-w-360 gap-10 px-6 py-10 md:px-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-center lg:gap-16 lg:py-14">
        <div className="min-w-0">
          <p className="mb-5 font-mono text-xs text-muted">
            A recipient’s perspective
          </p>
          <h1 className="text-4xl leading-tight font-black tracking-normal sm:text-5xl lg:text-6xl">
            My Global Talent
            <br />
            <em className="text-accent">Visa journey.</em>
          </h1>
          <p className="mt-6 max-w-xl font-fraunces text-xl leading-relaxed">
            A practical guide from someone who has already gone through the
            process.
          </p>
          <div className="mt-5 max-w-xl space-y-4 font-sans text-base leading-7 text-muted">
            <p>
              Over the past few years, many people have asked me how to qualify
              for the UK Global Talent Visa. Most people start in the wrong
              place. They focus on documents, application strategies, and
              checklists.
            </p>
            <p>
              But the visa is really asking a much simpler question: are you
              already, or clearly becoming, someone your industry recognises as
              valuable?
            </p>
          </div>
          <div className="mt-7 flex flex-wrap items-center gap-4">
            <a
              href={personal.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                buttonVariants({ size: "lg" }),
                "gap-3 tracking-normal",
              )}
            >
              Book a conversation <ArrowUpRight aria-hidden="true" />
            </a>
            <a
              href="#readiness-check"
              className={cn(
                buttonVariants({ variant: "link" }),
                "gap-2 tracking-normal",
              )}
            >
              Reflect on your profile <ArrowDown aria-hidden="true" />
            </a>
          </div>
        </div>
        {/* <figure className="mx-auto w-full max-w-100">
          <div className="relative aspect-3/4 overflow-hidden bg-cream/40">
            <Image
              src="/images/personal/keniye_walking.webp"
              alt="Keniye Koroye walking"
              fill
              priority
              sizes="(min-width: 1024px) 400px, 100vw"
              className="object-cover object-bottom"
            />
          </div>
          <figcaption className="mt-4 font-mono text-xs leading-relaxed text-muted">
            Funfere Keniyē Koroye · UK Global Talent Visa recipient
          </figcaption>
        </figure> */}
        <FadeIn delay={0.2} className="mx-auto w-full max-w-90">
          <div className="aspect-3/4">
            <GTVJourneyImage />
          </div>
        </FadeIn>
      </div>
    </header>
  );
}
