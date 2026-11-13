import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { bio } from "@/lib/profile";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function AboutHeader() {
  return (
    <header className="border-b border-rule">
      <div className="inner-page-opening">
        <h1 className="inner-page-title">
          Funfere Keniyē
          <br className="sm:hidden" />{" "}
          <em className="font-normal text-accent">Koroye.</em>
        </h1>
        <div className="mt-10 grid items-start gap-10 md:mt-14 lg:grid-cols-[minmax(0,26rem)_minmax(0,1fr)] lg:items-center lg:gap-16">
          <figure>
            <Image
              src="/images/personal/keniye_looking_sideways.webp"
              alt="Keniye wearing a cap and knitted vest, looking to the side"
              width={1440}
              height={1440}
              priority
              sizes="(min-width: 1024px) 416px, (min-width: 768px) calc(100vw - 96px), calc(100vw - 48px)"
              className="aspect-square w-full object-cover"
            />
            <figcaption className="mt-4 font-mono text-xs text-muted">
              Funfere Keniyē Koroye · Designer & product manager
            </figcaption>
          </figure>
          <div>
            <p className="font-playfair text-3xl leading-tight sm:text-4xl xl:text-5xl">
              Working across products,
              <br />
              people and possibilities.
            </p>
            <p className="mt-6 max-w-lg font-sans text-base leading-8 text-muted md:text-lg">
              {bio.intro}
            </p>
            <div className="mt-5 flex flex-wrap gap-x-6 gap-y-2">
              <Link
                href="/work"
                className={cn(
                  buttonVariants({ variant: "link" }),
                  "h-auto gap-2 px-0 py-3 tracking-normal no-underline",
                )}
              >
                Explore my work <ArrowUpRight aria-hidden="true" />
              </Link>
              <a
                href="#about-story-title"
                className={cn(
                  buttonVariants({ variant: "link" }),
                  "h-auto gap-2 px-0 py-3 tracking-normal text-muted no-underline",
                )}
              >
                Read my story <ArrowDown aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
