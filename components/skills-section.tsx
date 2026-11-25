import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { cv } from "@/content/cv";

export function SkillsSection() {
  return (
    <section id="skills" className="border-b border-border py-20 md:py-28">
      <div className="container-page">
        <SectionHeading
          index="05"
          label="Skills"
          title="Tools and strengths."
          description="A practical toolkit built around engineering, explanation, and cross-functional collaboration."
        />

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {cv.skills.map((group, index) => (
            <Reveal key={group.label} delay={index * 0.04}>
              <div className="h-full rounded-2xl border border-border bg-surface p-5">
                <h3 className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent">
                  {group.label}
                </h3>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="rounded-full border border-border bg-background px-2.5 py-1 text-xs text-muted"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
