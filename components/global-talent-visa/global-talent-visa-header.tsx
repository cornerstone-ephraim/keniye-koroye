import Image from "next/image";
import { ArrowUpRight, ArrowDown } from "lucide-react";
import { personal } from "@/lib/profile";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function GlobalTalentVisaHeader() {
  return (
    <header className="border-b border-rule">
      <div className="inner-page-opening">
        <div className="grid items-center gap-10 md:grid-cols-[1.15fr_0.85fr] md:gap-12">
          <div>
            <h1 className="inner-page-title">
              The work came first.
              <br />
              <em className="font-normal text-accent">The visa followed.</em>
            </h1>
            <p className="mt-7 max-w-lg font-sans text-lg leading-8 text-muted">
              My Global Talent Visa journey, and what it taught me about making
              a professional story clear.
            </p>
            <p className="mt-4 max-w-lg font-sans text-base leading-7 text-muted">
              I’m Keniyē Koroye, a UK Global Talent Visa recipient. These are
              the lessons, evidence and questions I return to when people ask me
              about the process.
            </p>
            <div className="mt-7 flex flex-wrap items-center gap-4">
              <a
                href="#my-journey"
                className={cn(
                  buttonVariants({ size: "lg" }),
                  "gap-3 tracking-normal",
                )}
              >
                Read my journey <ArrowDown aria-hidden="true" />
              </a>
              <a
                href={personal.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  buttonVariants({ variant: "link" }),
                  "gap-2 px-0 tracking-normal no-underline",
                )}
              >
                Book a conversation <ArrowUpRight aria-hidden="true" />
              </a>
            </div>
          </div>
          <figure className="mx-auto w-full max-w-104">
            <div className="relative aspect-square overflow-hidden bg-cream">
              <Image
                src="/images/keniye-gtv.jpeg"
                alt="Keniye seated at a restaurant table"
                fill
                priority
                sizes="(min-width: 1024px) 416px, (min-width: 768px) 40vw, 100vw"
                className="object-cover object-[center_60%]"
              />
            </div>
            <figcaption className="mt-4 font-mono text-xs leading-relaxed text-muted">
              Funfere Keniyē Koroye · Global Talent Visa recipient
            </figcaption>
          </figure>
        </div>
      </div>
    </header>
  );
}
