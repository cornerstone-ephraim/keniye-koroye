import Image from "next/image";
import { ArrowDown, ArrowUpRight } from "lucide-react";

import { buttonVariants } from "@/components/ui/button";
import { tekContent } from "@/lib/story-pages";

export default function TekPage() {
  return (
    <div className="bg-paper pt-14.25 text-ink">
      <header className="border-b border-rule bg-cream">
        <div className="grid items-end gap-10 px-6 pt-12 pb-10 md:px-12 lg:grid-cols-[1fr_1.2fr] lg:pt-20 lg:pb-14">
          <div>
            <h1 className="max-w-xl font-playfair text-5xl leading-[1.06] tracking-tight sm:text-6xl xl:text-7xl">
              The Taukeme Edwin Koroye <em className="text-accent">Grant</em>
            </h1>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-muted">
              A grant in his memory that helps young people pursue an education
              and build a career in technology.
            </p>
            <a
              href="#tek-initiatives"
              className="mt-6 inline-flex min-h-11 items-center gap-3 border-b border-rule text-sm font-semibold hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-4"
            >
              Explore the initiatives
              <ArrowDown aria-hidden="true" className="size-4" />
            </a>
          </div>

          <figure>
            <Image
              src="/images/tek-og.png"
              alt="Taukeme Edwin Koroye seated in his office"
              width={1200}
              height={630}
              priority
              sizes="(min-width: 1280px) 625px, (min-width: 1024px) 50vw, 90vw"
              className="h-auto w-full"
            />
            <figcaption className="mt-3 font-mono text-xs leading-relaxed text-muted">
              Taukeme Edwin Koroye, former Executive Director of Access Bank Plc
            </figcaption>
          </figure>
        </div>
      </header>

      <section
        aria-labelledby="tek-legacy"
        className="grid gap-5 px-6 py-14 md:px-12 lg:grid-cols-[1fr_1.2fr] lg:gap-10 lg:py-20"
      >
        <h2
          id="tek-legacy"
          className="font-playfair text-4xl tracking-tight sm:text-5xl"
        >
          In his memory
        </h2>
        <p className="max-w-xl text-lg leading-relaxed text-muted">
          Taukeme Edwin Koroye was a Nigerian financial executive. His family
          honours his memory through the TEK Grant, helping students and young
          people access the funding and tools they need to take their next step.
        </p>
      </section>

      <section
        id="tek-initiatives"
        aria-labelledby="tek-initiatives-title"
        className="scroll-mt-20 border-y border-rule bg-cream"
      >
        <div className="px-6 py-14 md:px-12 lg:py-20">
          <h2
            id="tek-initiatives-title"
            className="font-playfair text-4xl tracking-tight sm:text-5xl"
          >
            What the grant supports
          </h2>
          <div className="mt-8 grid gap-px border border-rule bg-rule md:grid-cols-2">
            <article className="bg-paper p-6 md:p-8">
              <h3 className="font-playfair text-3xl leading-tight">
                Laptop giveaways
              </h3>
              <p className="mt-4 text-base leading-relaxed text-muted">
                With justusedtech, the grant aims to give away three refurbished
                laptops each quarter to aspiring technology professionals.
              </p>
            </article>
            <article className="bg-paper p-6 md:p-8">
              <h3 className="font-playfair text-3xl leading-tight">
                TEK Memorial Scholarship Fund
              </h3>
              <p className="mt-4 text-base leading-relaxed text-muted">
                Selected students can receive up to ₦500,000 each to help cover
                academic costs.
              </p>
            </article>
          </div>
          <div className="mt-8 flex flex-wrap items-baseline gap-x-8 gap-y-3">
            <h3 className="text-sm font-semibold">Who it supports</h3>
            <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted">
              {tekContent.supports.map((group) => (
                <li key={group}>{group}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section
        aria-labelledby="tek-updates"
        className="flex flex-col items-start justify-between gap-6 px-6 py-14 md:flex-row md:items-end md:px-12 lg:py-20"
      >
        <div>
          <h2
            id="tek-updates"
            className="font-playfair text-4xl tracking-tight sm:text-5xl"
          >
            Follow the next opportunity
          </h2>
          <p className="mt-4 max-w-xl text-lg leading-relaxed text-muted">
            The grant announces opportunities throughout the year. Follow its
            official updates on Instagram for application dates and
            instructions.
          </p>
        </div>
        <a href={tekContent.link} className={buttonVariants({ size: "lg" })}>
          Visit the grant site
          <ArrowUpRight aria-hidden="true" data-icon="inline-end" />
        </a>
      </section>
    </div>
  );
}
