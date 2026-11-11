import Link from "next/link";
import { ArrowUpRight, Mail, MapPin } from "lucide-react";
import { BsInstagram, BsLinkedin, BsTwitterX } from "react-icons/bs";
import { buttonVariants } from "@/components/ui/button";
import { personal } from "@/lib/profile";
import { cn } from "@/lib/utils";

const groups = [
  {
    title: "Explore",
    links: [
      { href: "/", label: "Home" },
      { href: "/about", label: "About" },
      { href: "/work", label: "Work" },
      { href: "/shop", label: "Shop" },
      { href: "/contact", label: "Contact" },
    ],
  },
  {
    title: "More from Keniyē",
    links: [
      { href: "/patents", label: "Patents" },
      { href: "/collab", label: "Collab" },
      { href: "/tek", label: "TEK" },
      { href: "/global-talent-visa", label: "Global Talent Visa" },
    ],
  },
];
const linkStyle =
  "transition-colors ease-linear hover:text-paper focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent";

export default function Footer() {
  return (
    <footer className="relative isolate overflow-hidden border-t border-rule bg-ink text-paper">
      <div className="relative z-10 mx-auto max-w-400 px-6 pt-14 pb-8 md:px-12 lg:pt-20">
        <div className="grid grid-cols-2 gap-x-8 gap-y-12 lg:grid-cols-[1.5fr_0.7fr_0.9fr_1fr] lg:gap-12">
          <div className="col-span-2 lg:col-span-1">
            <Link
              href="/"
              aria-label="Keniye home"
              className="font-playfair text-3xl font-black uppercase"
            >
              Ken<em className="text-accent italic">I</em>YĒ
            </Link>
            <p className="mt-6 max-w-80 font-fraunces text-lg leading-relaxed text-paper/70">
              {personal.tagline}
            </p>
            <a
              href={personal.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                buttonVariants({ variant: "outline", size: "lg" }),
                "mt-7 gap-3 border-paper/30 text-paper transition-colors ease-linear hover:bg-paper hover:text-ink",
              )}
            >
              Book a conversation <ArrowUpRight aria-hidden="true" />
            </a>
          </div>
          {groups.map((group) => (
            <nav key={group.title} aria-label={`Footer: ${group.title}`}>
              <h2 className="mb-6 font-mono text-xs font-normal text-paper/60">
                {group.title}
              </h2>
              <ul className="space-y-4 font-sans text-sm text-paper/80">
                {group.links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className={linkStyle}>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
          <div className="col-span-2 sm:col-span-1">
            <h2 className="mb-6 font-mono text-xs font-normal text-paper/60">
              Get in touch
            </h2>
            <ul className="space-y-5 font-sans text-sm text-paper/80">
              <li>
                <a
                  href={`mailto:${personal.email}`}
                  className={cn(linkStyle, "flex items-start gap-3 break-all")}
                >
                  <Mail
                    className="mt-0.5 size-4 shrink-0 text-accent"
                    aria-hidden="true"
                  />
                  {personal.email}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <MapPin
                  className="size-4 shrink-0 text-accent"
                  aria-hidden="true"
                />
                {personal.location}
              </li>
              <li>
                <a
                  href={personal.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(linkStyle, "flex items-center gap-3")}
                >
                  <BsInstagram
                    className="size-4 shrink-0 text-accent"
                    aria-hidden="true"
                  />
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href={personal.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(linkStyle, "flex items-center gap-3")}
                >
                  <BsLinkedin
                    className="size-4 shrink-0 text-accent"
                    aria-hidden="true"
                  />
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href={personal.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(linkStyle, "flex items-center gap-3")}
                >
                  <BsTwitterX
                    className="size-4 shrink-0 text-accent"
                    aria-hidden="true"
                  />
                  X / Twitter
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-16 flex flex-col gap-4 border-t border-paper/20 pt-7 font-mono text-xs leading-relaxed text-paper/70 md:flex-row md:justify-between lg:mt-24">
          <p>
            © {new Date().getFullYear()} Keniyē Koroye. All Rights Reserved.
          </p>
          <p>
            Built by{" "}
            <a
              href="https://cornerstoneephraim.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="text-paper underline decoration-accent underline-offset-4 hover:decoration-paper"
            >
              Cornerstone Ephraim
            </a>
            .
          </p>
        </div>
      </div>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-12 left-1/2 z-0 -translate-x-1/2 font-playfair text-9xl leading-none font-black whitespace-nowrap text-paper/5 select-none md:-bottom-20 md:text-[14rem] lg:text-[20rem]"
      >
        KENIYĒ
      </div>
    </footer>
  );
}
