import { guidanceSections } from "@/lib/gtv-details";
import { cn } from "@/lib/utils";
import {
  GTVReveal,
  gtvBody,
  gtvContainer,
  gtvHeading,
  gtvLabel,
} from "./gtv-editorial";

export function GlobalTalentVisaGuidanceSections() {
  return (
    <section
      id="lessons"
      aria-labelledby="lessons-title"
      className="scroll-mt-24 border-b border-rule bg-cream/30"
    >
      <div
        className={cn(
          gtvContainer,
          "grid items-start gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20",
        )}
      >
        <div className="lg:sticky lg:top-24">
          <p className={gtvLabel}>What I learned</p>
          <h2 id="lessons-title" className={gtvHeading}>
            Build the profile.
            <br />
            <em className="font-normal text-accent">Then tell the story.</em>
          </h2>
          <p className={cn(gtvBody, "mt-6 max-w-sm")}>
            Positioning, proof and recognition give the paperwork something
            meaningful to say.
          </p>
        </div>
        <div className="space-y-10">
          {guidanceSections.map((section) => (
            <GTVReveal
              key={section.title}
              className="border-t border-rule pt-7"
            >
              <h3 className="font-playfair text-2xl md:text-3xl text-accent">
                {section.title}
              </h3>
              <div className={cn(gtvBody, "mt-4 space-y-4")}>
                <p>{section.body}</p>
                {section.points && (
                  <p className="text-ink">{section.points.join(" · ")}</p>
                )}
                {section.closing && <p>{section.closing}</p>}
              </div>
            </GTVReveal>
          ))}
          <GTVReveal className="border-l-2 border-accent pl-6">
            <p className="font-playfair text-2xl leading-relaxed">
              Don’t chase the visa.
            </p>
            <p className={cn(gtvBody, "mt-3")}>
              Become the kind of person the visa is looking for.
            </p>
          </GTVReveal>
        </div>
      </div>
    </section>
  );
}
