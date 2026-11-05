"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import { ArrowDown, ArrowRight, ArrowUpRight } from "lucide-react";
import type { ReactNode } from "react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  patentImages,
  patentsContent,
  registeredDesign,
} from "@/lib/story-pages";

const label = "font-mono text-xs tracking-widest text-muted uppercase";
const body = "font-sans text-base leading-relaxed text-muted md:text-lg";
const heading =
  "font-playfair text-4xl leading-tight tracking-tight md:text-5xl";

function Reveal({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const reducedMotion = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reducedMotion ? false : { opacity: 0, y: 18 }}
      animate={reducedMotion ? { opacity: 1, y: 0 } : undefined}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2, margin: "0px 0px -40px 0px" }}
      transition={{
        duration: reducedMotion ? 0 : 0.55,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      {children}
    </motion.div>
  );
}

function Render({
  index,
  caption,
  priority = false,
  className,
}: {
  index: number;
  caption: string;
  priority?: boolean;
  className?: string;
}) {
  const image = patentImages[index];
  return (
    <figure className={className}>
      <div className={cn("relative overflow-hidden bg-cream", image.className)}>
        <Image
          src={image.src}
          alt={image.alt}
          fill
          priority={priority}
          sizes="(min-width: 1280px) 620px, (min-width: 768px) 50vw, 100vw"
          className={index === 0 ? "object-cover" : "object-contain"}
        />
      </div>
      <figcaption className="mt-4 font-mono text-xs leading-relaxed text-muted">
        {caption}
      </figcaption>
    </figure>
  );
}

function Film({
  src,
  poster,
  caption,
}: {
  src: string;
  poster: string;
  caption: string;
}) {
  return (
    <figure>
      <video
        controls
        playsInline
        preload="none"
        poster={poster}
        aria-label={caption}
        className="aspect-video w-full bg-cream object-contain"
      >
        <source src={src} type="video/webm" />
        <a href={src}>Watch the TekGlove film</a>
      </video>
      <figcaption className="mt-4 font-mono text-xs leading-relaxed text-muted">
        {caption}
      </figcaption>
    </figure>
  );
}

export default function PatentsPage() {
  return (
    <article className="bg-paper pt-14.25 text-ink">
      <header className="px-6 pt-12 pb-14 md:px-12 md:pt-20 lg:pb-20">
        {/* <div className="mb-8 flex flex-wrap items-center justify-between gap-3 border-b border-rule pb-5">
          <p className={label}>Patents</p>
          <p className="font-mono text-xs text-muted">
            TekGlove · Wearable technology
          </p>
        </div> */}
        <div className="grid items-center gap-10 md:grid-cols-2 lg:gap-16">
          <div>
            <h1 className="font-playfair text-6xl leading-none tracking-tight sm:text-7xl lg:text-8xl">
              TekGlove<span className="text-accent">.</span>
            </h1>
            <p className={cn(body, "mt-8 max-w-md")}>{patentsContent.intro}</p>
            <a
              href="#the-idea"
              className={cn(
                buttonVariants({ variant: "link" }),
                "mt-6 h-auto gap-3 px-0 py-3 text-sm no-underline",
              )}
            >
              Explore the invention{" "}
              <ArrowDown aria-hidden="true" className="size-4" />
            </a>
          </div>
          <Render
            index={0}
            priority
            caption="TekGlove · The hand as an interface"
          />
        </div>
      </header>

      <section
        id="the-idea"
        aria-labelledby="idea-title"
        className="scroll-mt-24 border-t border-rule"
      >
        <div className="px-6 py-16 md:px-12 md:py-24">
          <Reveal className="grid gap-8 md:grid-cols-[1fr_1.5fr] md:gap-16">
            <div>
              <p className={label}>The idea</p>
              <h2 id="idea-title" className={cn(heading, "mt-5")}>
                Movement, captured.
                <br />
                <em className="font-normal text-accent">
                  Possibilities, explored.
                </em>
              </h2>
            </div>
            <div className={cn(body, "max-w-2xl space-y-5 md:pt-10")}>
              {patentsContent.overview.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </Reveal>
          <div className="mt-12">
            <Film
              src="/videos/patents/tekglove-hero-video.webm"
              poster="/images/patents/tekglove/tekglove-hero-picture.jpeg"
              caption="TekGlove · A closer look at the wearable platform"
            />
          </div>
          <div className="mt-14 grid items-center gap-10 md:mt-20 md:grid-cols-[1.15fr_1fr] md:gap-16">
            <Reveal>
              <Render index={2} caption="Kinetik · Motion, grip and gesture" />
            </Reveal>
            <Reveal>
              <p className={label}>Kinetik</p>
              <h3 className="mt-5 font-playfair text-3xl leading-tight md:text-4xl">
                Connecting movement
                <br />
                with machines.
              </h3>
              <div className="mt-8 space-y-7">
                {[patentsContent.features[0], patentsContent.features[4]].map(
                  (feature) => (
                    <div key={feature.title}>
                      <h4 className="font-sans text-base font-semibold">
                        {feature.title}
                      </h4>
                      <p className={cn(body, "mt-2")}>{feature.body}</p>
                    </div>
                  ),
                )}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section
        aria-labelledby="inside-title"
        className="border-y border-rule bg-cream/40"
      >
        <div className="px-6 py-16 md:px-12 md:py-24">
          <Reveal className="max-w-2xl">
            <p className={label}>Inside the system</p>
            <h2 id="inside-title" className={cn(heading, "mt-5")}>
              A shared core.
              <br />A modular design.
            </h2>
          </Reveal>
          <div className="mt-12 grid items-start gap-10 md:grid-cols-2 md:gap-16">
            <Reveal>
              <Render index={1} caption="TekGlove · Exploded assembly study" />
            </Reveal>
            <div className="space-y-8 md:pt-4">
              {[
                patentsContent.features[1],
                patentsContent.features[2],
                patentsContent.features[3],
                patentsContent.features[5],
              ].map((feature) => (
                <Reveal key={feature.title}>
                  <h3 className="font-playfair text-2xl">{feature.title}</h3>
                  <p className={cn(body, "mt-3")}>{feature.body}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        aria-labelledby="possibilities-title"
        className="px-6 py-16 md:px-12 md:py-24"
      >
        <Reveal className="grid gap-8 md:grid-cols-2 md:gap-16">
          <div>
            <p className={label}>Product directions</p>
            <h2 id="possibilities-title" className={cn(heading, "mt-5")}>
              One platform.
              <br />
              Different possibilities.
            </h2>
          </div>
          <p className={cn(body, "max-w-xl self-end")}>
            TekGlove explores six product directions built around a shared
            platform. These are concepts and capabilities in development.
          </p>
        </Reveal>
        <div className="mt-12 space-y-8 lg:mt-16">
          {patentsContent.applications.map((application) => (
            <Reveal
              key={application.title}
              className="grid gap-4 border-t border-rule pt-6 md:grid-cols-[1fr_1.5fr] md:gap-16"
            >
              <h3 className="font-playfair text-2xl">{application.title}</h3>
              <p className={cn(body, "mt-4")}>{application.body}</p>
            </Reveal>
          ))}
        </div>
        <div className="mt-16 grid items-center gap-10 md:mt-24 md:grid-cols-2 md:gap-16">
          <Reveal>
            <Film
              src="/videos/patents/tekglove-kradle-video.webm"
              poster="/images/patents/tekglove/tekglove-kradle.webp"
              caption="Kradle · Health, fitness and wellness concept"
            />
          </Reveal>
          <Reveal>
            <h3 className="font-playfair text-3xl leading-tight md:text-4xl">
              Kradle.
              <br />
              Designed around activity.
            </h3>
            <p className={cn(body, "mt-6")}>{patentsContent.vision}</p>
            <a
              href="https://tekglove.co.uk"
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                buttonVariants({ variant: "link" }),
                "mt-6 h-auto gap-3 px-0 py-3 no-underline",
              )}
            >
              Explore TekGlove{" "}
              <ArrowUpRight aria-hidden="true" className="size-4" />
            </a>
          </Reveal>
        </div>
      </section>

      <section
        aria-labelledby="record-title"
        className="border-y border-rule bg-cream/40"
      >
        <div className="grid gap-10 px-6 py-16 md:grid-cols-2 md:gap-16 md:px-12 md:py-20">
          <Reveal>
            <p className={label}>The record</p>
            <h2 id="record-title" className={cn(heading, "mt-5")}>
              Registered design.
            </h2>
            <p className={cn(body, "mt-6 max-w-lg")}>
              The Smart Watch Glove design is registered with the UK
              Intellectual Property Office.
            </p>
            <p className="mt-4 max-w-lg font-sans text-sm leading-relaxed text-muted">
              The document below records the registered design. It does not
              establish the performance of the product concepts shown here.
            </p>
            <a
              href="/documents/tek-smart-glove-patent.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                buttonVariants({ variant: "outline" }),
                "mt-8 h-auto gap-3 px-5 py-4",
              )}
            >
              View supporting document{" "}
              <span className="font-mono text-xs">PDF</span>
              <ArrowUpRight aria-hidden="true" className="size-4" />
            </a>
          </Reveal>
          <Reveal>
            <dl className="border-t border-rule">
              {registeredDesign.map(([term, value]) => (
                <div
                  key={term}
                  className="grid gap-2 border-b border-rule py-4 sm:grid-cols-[1fr_1.4fr] sm:gap-6"
                >
                  <dt className="font-mono text-xs leading-relaxed text-muted">
                    {term}
                  </dt>
                  <dd className="font-sans text-sm leading-relaxed">{value}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </section>

      <nav
        aria-label="Continue exploring"
        className="px-6 py-14 md:px-12 md:py-20"
      >
        <p className={label}>Continue exploring</p>
        <Link
          href="/work"
          className="group mt-5 flex items-center justify-between gap-6 py-3 font-playfair text-3xl leading-tight transition-colors hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-8 focus-visible:outline-accent md:text-5xl"
        >
          More of Keniye’s work
          <ArrowRight
            aria-hidden="true"
            className="size-7 shrink-0 transition-transform group-hover:translate-x-1 md:size-10"
          />
        </Link>
      </nav>
    </article>
  );
}
