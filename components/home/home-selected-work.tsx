import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { bio, stats } from "@/lib/profile";
import { projects } from "@/lib/projects";
import { cn } from "@/lib/utils";

const selectedSlugs = ["bunka-totem", "jaza-battery", "cradle-health"];

export function HomeSelectedWork() {
  return (
    <>
      <section
        aria-labelledby="home-work-title"
        className="border-y border-rule"
      >
        <div className="mx-auto max-w-400 px-6 py-10 md:px-12 md:py-12">
          <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
            <h2 id="home-work-title" className="text-2xl font-bold">
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
                      alt={project.title}
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

      <section
        aria-label="About Keniye"
        className="mx-auto grid max-w-400 gap-10 px-6 py-12 md:px-12 lg:grid-cols-2 lg:gap-20 lg:py-16"
      >
        <div>
          <p className="max-w-2xl font-fraunces text-lg leading-relaxed">
            {bio.paragraphs[0]}
          </p>
          <Link
            href="/about"
            className={cn(
              buttonVariants({ variant: "link" }),
              "mt-5 px-0 tracking-normal",
            )}
          >
            More about me <ArrowUpRight aria-hidden="true" />
          </Link>
        </div>
        <div>
          <dl className="grid grid-cols-2 gap-x-8 gap-y-6">
            {stats.map((stat) => (
              <div key={stat.label}>
                <dt className="font-mono text-xs text-muted">{stat.label}</dt>
                <dd className="mt-2 font-playfair text-3xl">{stat.num}</dd>
              </div>
            ))}
          </dl>
          <div className="mt-8 border-t border-rule pt-6">
            <p className="font-fraunces text-lg">
              Planning to apply for the Global Talent Visa?
            </p>
            <Link
              href="/global-talent-visa"
              className={cn(
                buttonVariants({ variant: "link" }),
                "mt-2 px-0 tracking-normal",
              )}
            >
              I can help <ArrowUpRight aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
