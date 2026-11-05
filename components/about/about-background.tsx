import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import CertHover from "@/components/ui/CertHover";
import { buttonVariants } from "@/components/ui/button";
import { education, awards, residencies } from "@/lib/profile";
import { cn } from "@/lib/utils";
import { AboutTimeline } from "./about-timeline";

export function AboutBackground() {
  return (
    <>
      <section
        aria-labelledby="about-background-title"
        className="border-y border-rule bg-cream/40"
      >
        <div className="px-6 py-12 md:px-12 lg:py-16">
          <h2 id="about-background-title" className="mb-10 text-2xl font-bold">
            Education & recognition
          </h2>
          <div className="grid gap-10 lg:grid-cols-3 lg:gap-12">
            <div>
              <h3 className="mb-6 font-mono text-xs text-muted">Education</h3>
              <div className="space-y-6">
                {education.map((item) => (
                  <div key={item.institution}>
                    <CertHover {...item} />
                    <a
                      href={item.certificate}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-2 inline-flex min-h-8 items-center gap-2 font-sans text-xs text-muted underline underline-offset-4 hover:text-ink"
                    >
                      View certificate{" "}
                      <ArrowUpRight className="size-3" aria-hidden="true" />
                    </a>
                  </div>
                ))}
              </div>
            </div>
            {[
              { label: "Awards", items: awards },
              { label: "Residencies", items: residencies },
            ].map((group) => (
              <div
                key={group.label}
                className="lg:sticky lg:top-24 lg:self-start"
              >
                <h3 className="mb-6 font-mono text-xs text-muted">
                  {group.label}
                </h3>
                <ul className="space-y-6">
                  {group.items.map((item) => (
                    <li key={item.org} className="border-b border-rule pb-5">
                      <div className="flex justify-between gap-4">
                        <h4 className="text-lg font-bold">{item.org}</h4>
                        <span className="pt-1 font-mono text-xs text-muted">
                          {item.year}
                        </span>
                      </div>
                      <p className="mt-2 font-sans text-sm leading-relaxed text-ink/75">
                        {item.title}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section
        aria-labelledby="about-career-title"
        className="px-6 py-12 md:px-12 lg:py-16"
      >
        <div className="mb-8">
          <h2 id="about-career-title" className="text-2xl font-bold">
            Career & experience
          </h2>
        </div>
        <AboutTimeline />
      </section>
      <div className="border-t border-rule">
        <div className="flex flex-wrap items-center justify-between gap-6 px-6 py-10 md:px-12">
          <p className="font-fraunces text-xl">
            Let’s create impactful technology together.
          </p>
          <Link
            href="/contact"
            className={cn(
              buttonVariants({ size: "lg" }),
              "gap-3 tracking-normal",
            )}
          >
            Get in touch <ArrowUpRight aria-hidden="true" />
          </Link>
        </div>
      </div>
    </>
  );
}
