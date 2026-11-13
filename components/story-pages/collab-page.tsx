import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowUpRight } from "lucide-react";

import { buttonVariants } from "@/components/ui/button";
import { collabContent } from "@/lib/story-pages";
import { cn } from "@/lib/utils";

export default function CollabPage() {
  return (
    <div className="bg-paper pt-14.25 text-ink">
      <header className="border-b border-rule">
        <div className="grid items-center gap-10 inner-page-opening lg:grid-cols-[1fr_1.1fr] lg:gap-12">
          <div className="flex flex-col justify-center">
            <h1 className="inner-page-title">
              Collab<span className="text-accent">.</span>
            </h1>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-muted">
              An ongoing practice in making things with artists and designers
              across art, fashion, and technology.
            </p>
            <a
              href="#creative-partnership"
              className="mt-8 inline-flex min-h-11 w-fit items-center gap-3 border-b border-rule text-sm focus-visible:outline-2 focus-visible:outline-offset-4"
            >
              Meet the creative partner
              <ArrowDown aria-hidden="true" className="size-4" />
            </a>
          </div>
          <Image
            src="/images/keniye-collab.jpg"
            alt="Three people in an art studio surrounded by canvases"
            width={828}
            height={828}
            priority
            sizes="(min-width: 1280px) 670px, (min-width: 1024px) 53vw, 100vw"
            className="aspect-4/3 w-full object-cover object-top"
          />
        </div>
      </header>

      <section
        id="creative-partnership"
        aria-labelledby="partner-title"
        className="grid scroll-mt-20 gap-8 px-6 py-16 md:px-12 lg:grid-cols-2 lg:gap-16 lg:py-24"
      >
        <div>
          <p className="mb-5 font-mono text-sm text-muted">
            The first partnership
          </p>
          <h2
            id="partner-title"
            className="font-playfair text-5xl leading-tight tracking-tight sm:text-6xl"
          >
            {collabContent.featured.name}
          </h2>
        </div>
        <div className="max-w-xl space-y-5 text-lg leading-relaxed text-muted">
          <p>
            Collab began with a friendship. Ken Nwadiogbu, a longtime friend and
            creative partner of Keniye, helped shape the practice from the
            start.
          </p>
          <p>
            Ken brings hyperrealist art and visual storytelling to the
            partnership. Keniye brings a practice that spans design and
            technology. Their shared ground is the space between those
            disciplines.
          </p>
        </div>
      </section>

      <section
        aria-labelledby="work-title"
        className="border-y border-rule bg-cream"
      >
        <div className="px-6 py-16 md:px-12 lg:py-20">
          <h2
            id="work-title"
            className="font-playfair text-4xl tracking-tight sm:text-5xl"
          >
            Explore Ken’s work
          </h2>
          <ul className="mt-8 divide-y divide-rule border-y border-rule">
            {collabContent.links.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="group grid grid-cols-[1fr_auto] items-center gap-x-5 gap-y-2 py-5 focus-visible:outline-2 focus-visible:outline-offset-4 md:grid-cols-[minmax(10rem,1fr)_3fr_auto]"
                >
                  <span className="col-start-1 row-start-2 font-mono text-xs text-muted md:row-start-1">
                    {item.source}
                  </span>
                  <span className="col-start-1 row-start-1 text-lg leading-snug group-hover:underline md:col-start-2">
                    {item.title}
                  </span>
                  <ArrowUpRight
                    aria-hidden="true"
                    className="col-start-2 row-span-2 row-start-1 size-5 text-accent md:col-start-3 md:row-span-1"
                  />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section
        aria-labelledby="contact-title"
        className="flex flex-col items-start justify-between gap-8 px-6 py-16 md:flex-row md:items-end md:px-12 lg:py-20"
      >
        <div>
          <h2
            id="contact-title"
            className="font-playfair text-4xl tracking-tight sm:text-5xl"
          >
            What could we make together?
          </h2>
          <p className="mt-4 max-w-lg text-lg leading-relaxed text-muted">
            If you have a project in mind, tell Keniye what you’re working on.
          </p>
        </div>
        <Link
          href="/contact"
          className={cn(buttonVariants({ size: "lg" }), "no-underline")}
        >
          Get in touch
          <ArrowUpRight aria-hidden="true" data-icon="inline-end" />
        </Link>
      </section>
    </div>
  );
}
