import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { bio, personal } from "@/lib/profile";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function AboutHeader() {
  return (
    <header className="border-b border-rule">
      <div className="px-6 pt-10 pb-16 md:px-12">
        {/* <div className="flex flex-wrap justify-between gap-3 border-b border-rule pb-5 font-mono text-xs text-muted">
          <p>About Keniyē</p>
          <p>{personal.location}</p>
        </div> */}
        <h1 className="mt-8 font-playfair text-5xl leading-none tracking-tight sm:text-7xl lg:text-8xl">
          Funfere Keniyē
          <br className="sm:hidden" />{" "}
          <em className="font-normal text-accent">Koroye.</em>
        </h1>
        <div className="mt-10 grid items-start gap-10 md:mt-14 lg:grid-cols-[1.25fr_1fr] lg:gap-16">
          <figure>
            <Image
              src="/images/personal/keniye_sitting_on_bench_smiling.webp"
              alt="Keniye smiling while seated on a bench in a pale blue blazer"
              width={1440}
              height={1440}
              priority
              sizes="(min-width: 1280px) 620px, (min-width: 1024px) 55vw, 100vw"
              className="aspect-square w-full object-cover"
            />
            <figcaption className="mt-4 font-mono text-xs text-muted">
              Funfere Keniyē Koroye · Designer & product manager
            </figcaption>
          </figure>
          <div className="lg:pt-3">
            <p className="font-playfair text-3xl leading-tight sm:text-4xl">
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
            <figure className="mt-9 ml-auto w-3/5 max-w-64 border-t border-rule pt-5">
              <Image
                src="/images/personal/keniye_looking_sideways.webp"
                alt="Keniye wearing a cap and knitted vest, looking to the side"
                width={1440}
                height={1440}
                sizes="(min-width: 640px) 256px, 55vw"
                className="aspect-square h-auto w-full object-cover"
              />
            </figure>
          </div>
        </div>
      </div>
    </header>
  );
}
