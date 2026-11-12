import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { projects } from "@/lib/projects";
import { cn } from "@/lib/utils";

const selectedSlugs = ["bunka-totem", "jaza-battery", "cradle-health"];

export function HomeSelectedWork() {
  return (
    <section aria-labelledby="home-work-title" className="border-y border-rule">
      <div className="mx-auto max-w-400 px-6 py-10 md:px-12 md:py-12">
        <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
          <h2
            id="home-work-title"
            className="font-playfair text-4xl tracking-tight sm:text-5xl"
          >
            Selected work
          </h2>
          <Link
            href="/work"
            className={cn(
              buttonVariants({ variant: "link" }),
              "px-0 tracking-normal",
            )}
          >
            All projects <ArrowUpRight aria-hidden="true" />
          </Link>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {selectedSlugs.map((slug) => {
            const project = projects.find((item) => item.slug === slug);
            if (!project?.thumbnail) return null;

            return (
              <Link
                key={slug}
                href={`/work/${slug}`}
                className="group min-w-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
              >
                <div className="relative aspect-4/3 overflow-hidden bg-cream">
                  <Image
                    src={project.thumbnail}
                    alt=""
                    fill
                    sizes="(min-width: 1600px) 480px, (min-width: 768px) 33vw, 100vw"
                    className={cn(
                      "transition-transform duration-500 motion-safe:group-hover:scale-105",
                      project.tag === "product"
                        ? "object-contain p-6"
                        : "object-cover",
                    )}
                  />
                </div>
                <div className="mt-4 flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-lg font-bold">{project.title}</h3>
                    <p className="mt-1 font-mono text-xs text-muted">
                      {project.tagLabel}
                    </p>
                  </div>
                  <ArrowUpRight
                    className="mt-1 size-4 shrink-0"
                    aria-hidden="true"
                  />
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
