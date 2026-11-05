import { coreDocs, evidenceItems, visaExpertise } from "@/lib/gtv-details";
import { cn } from "@/lib/utils";
import {
  GTVReveal,
  gtvBody,
  gtvContainer,
  gtvHeading,
  gtvLabel,
} from "./gtv-editorial";

export function GlobalTalentVisaApplicationStructure() {
  return (
    <section
      id="submission"
      aria-labelledby="submission-title"
      className="scroll-mt-24 border-b border-rule"
    >
      <div className={gtvContainer}>
        <GTVReveal className="grid gap-8 md:grid-cols-2 md:gap-16">
          <div>
            <p className={gtvLabel}>My evidence</p>
            <h2 id="submission-title" className={gtvHeading}>
              A body of work,
              <br />
              brought together.
            </h2>
          </div>
          <div className={gtvBody}>
            <p>
              Every application is different. This is how I organised the
              evidence I submitted, drawing on my work in{" "}
              {visaExpertise.join(", ")}.
            </p>
            <p className="mt-4">
              This is personal experience, not a universal document checklist or
              legal advice. Verify the formal requirements for your own route.
            </p>
          </div>
        </GTVReveal>
        <div className="mt-14 grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
          <div>
            <h3 className="border-b border-rule pb-5 font-playfair text-2xl">
              The profile foundation
            </h3>
            <div className="space-y-8 pt-8">
              {coreDocs.map((doc) => (
                <GTVReveal key={doc.num}>
                  <p className="font-mono text-xs text-muted">{doc.label}</p>
                  <h4 className="mt-3 font-playfair text-xl md:text-2xl">
                    {doc.title}
                  </h4>
                  <p className={cn(gtvBody, "mt-3")}>{doc.body}</p>
                </GTVReveal>
              ))}
            </div>
          </div>
          <div className="bg-cream/50 p-6 md:p-8">
            <h3 className="font-playfair text-2xl">The supporting evidence</h3>
            <p className="mt-3 font-sans text-sm leading-7 text-muted">
              The ten pieces in my submission connected my work to recognition,
              contribution and impact.
            </p>
            <ul className="mt-6">
              {evidenceItems.map((item) => (
                <li key={item.title} className="border-t border-rule py-4">
                  <p className="font-sans text-base leading-7">{item.title}</p>
                  <p className="mt-1 font-mono text-xs text-muted">
                    {item.label}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
