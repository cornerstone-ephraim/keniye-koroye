import Link from "next/link";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { personal } from "@/lib/profile";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { GTVReveal, gtvContainer, gtvHeading } from "./gtv-editorial";

export function GlobalTalentVisaCTA() {
  return (
    <section aria-labelledby="conversation-title" className="bg-paper">
      <div className={gtvContainer}>
        <GTVReveal className="grid items-end gap-8 md:grid-cols-2 md:gap-16">
          <div>
            <p className="mb-5 font-mono text-xs text-muted">
              A conversation with Ken
            </p>
            <h2 id="conversation-title" className={gtvHeading}>
              Where does your
              <br />
              <em className="font-normal text-accent">story go next?</em>
            </h2>
          </div>
          <div>
            <p className="max-w-lg font-sans text-base leading-8 text-muted">
              If you’re working toward the Global Talent Visa and want practical
              feedback on your positioning, evidence or portfolio, let’s talk.
            </p>
            <a
              href={personal.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                buttonVariants({ size: "lg" }),
                "mt-7 gap-3 tracking-normal",
              )}
            >
              Book a conversation <ArrowUpRight aria-hidden="true" />
            </a>
          </div>
        </GTVReveal>
        <Link
          href="/work"
          className="mt-12 flex items-center justify-between gap-5 border-t border-rule pt-7 font-sans text-base hover:text-accent focus-visible:outline-2 focus-visible:outline-accent"
        >
          Explore the work behind the story{" "}
          <ArrowRight aria-hidden="true" className="size-5" />
        </Link>
      </div>
    </section>
  );
}
