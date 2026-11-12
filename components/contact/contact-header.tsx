import { personal } from "@/lib/data";

export function ContactHeader() {
  return (
    <header className="border-b border-rule inner-page-opening">
      <h1 className="inner-page-title">
        Let&apos;s build something <em className="text-accent">real.</em>
      </h1>
      <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted">
        {personal.tagline}
      </p>
    </header>
  );
}
