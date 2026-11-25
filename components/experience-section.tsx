import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { cv } from "@/content/cv";

export function ExperienceSection() {
  return (
    <section id="experience" className="border-b border-border py-20 md:py-28">
      <div className="container-page">
        <SectionHeading
          index="02"
          label="Experience"
          title="Where I've worked."
          description="A mix of hands-on engineering, developer education, and technical communication — usually with a complex technology in the middle."
        />

        <div className="space-y-10 md:space-y-12">
          {cv.experience.map((role, index) => (
            <Reveal key={`${role.company}-${role.start}`} delay={index * 0.04}>
              <article className="grid gap-4 md:grid-cols-[170px_1fr] md:gap-10">
                <div className="md:pt-1 md:text-right">
                  <p className="font-mono text-xs font-medium text-accent">
                    {role.start} — {role.end}
                  </p>
                  <p className="mt-1 text-xs text-muted">{role.location}</p>
                </div>

                <div className="relative border-l border-border pl-6 md:pl-8">
                  <span
                    aria-hidden="true"
                    className="absolute -left-[5px] top-1.5 h-2.5 w-2.5 rounded-full border-2 border-background bg-accent"
                  />
                  <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1">
                    <h3 className="text-lg font-semibold tracking-tight text-foreground">
                      {role.role}
                    </h3>
                    <span className="text-sm text-accent">{role.company}</span>
                  </div>
                  {role.summary ? (
                    <p className="mt-2 max-w-3xl text-sm leading-relaxed text-muted">
                      {role.summary}
                    </p>
                  ) : null}
                  <ul className="mt-4 max-w-3xl space-y-2">
                    {role.highlights.map((highlight) => (
                      <li
                        key={highlight}
                        className="flex gap-2.5 text-sm leading-relaxed text-muted"
                      >
                        <span
                          aria-hidden="true"
                          className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent/70"
                        />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                  {role.stack?.length ? (
                    <div className="mt-4 flex flex-wrap gap-2">
                      {role.stack.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-full border border-border bg-surface px-2.5 py-1 font-mono text-[10px] text-muted"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  ) : null}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
