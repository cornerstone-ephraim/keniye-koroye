import { bio, skills, tools } from "@/lib/profile";
import { Progress } from "@/components/ui/progress";

export function AboutStory() {
  return (
    <section
      aria-labelledby="about-story-title"
      className="mx-auto grid max-w-360 gap-8 px-6 py-12 md:px-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20 lg:py-16"
    >
      <div className="lg:sticky lg:top-24 lg:self-start">
        <h2 id="about-story-title" className="text-2xl font-bold">
          People, systems,
          <br />
          and materials.
        </h2>
        <blockquote className="mt-6 max-w-sm border-l-2 border-accent pl-5 font-fraunces text-lg leading-relaxed text-muted italic">
          “I design at the intersection of people, systems, and materials, where
          the most interesting problems live.”
        </blockquote>
      </div>
      <div className="min-w-0">
        <div className="max-w-2xl space-y-5 font-sans text-base leading-8 text-ink/80">
          {bio.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
        <div className="mt-10 grid gap-8 border-t border-rule pt-7 sm:grid-cols-2">
          <div>
            <h3 className="mb-4 text-lg font-bold">Core competencies</h3>
            <dl className="space-y-4 font-sans text-sm">
              {skills.map((skill) => (
                <div
                  key={skill.name}
                  className="grid grid-cols-[1fr_auto] gap-x-4 gap-y-2"
                >
                  <dt id={`competency-${skill.name.replaceAll(" ", "-")}`}>
                    {skill.name}
                  </dt>
                  <dd className="font-mono text-xs text-muted tabular-nums">
                    {skill.pct}%
                  </dd>
                  <dd className="col-span-2">
                    <Progress
                      value={skill.pct}
                      aria-labelledby={`competency-${skill.name.replaceAll(" ", "-")}`}
                    />
                  </dd>
                </div>
              ))}
            </dl>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-bold">Tools</h3>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-3 font-sans text-sm text-ink/80">
              {tools.map((tool) => (
                <li key={tool}>{tool}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
