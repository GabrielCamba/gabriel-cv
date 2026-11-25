import { GraduationCap } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { cv } from "@/content/cv";

export function EducationSection() {
  return (
    <section id="education" className="border-b border-border py-20 md:py-28">
      <div className="container-page">
        <SectionHeading
          index="06"
          label="Education"
          title="Foundations."
          description="Formal training in software development, plus an intensive blockchain program."
        />

        <div className="grid gap-4 md:grid-cols-2">
          {cv.education.map((item, index) => (
            <Reveal key={item.school} delay={index * 0.05}>
              <article className="flex h-full gap-4 rounded-2xl border border-border bg-surface p-5 md:p-6">
                <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-border bg-elevated text-accent">
                  <GraduationCap className="h-5 w-5" aria-hidden="true" />
                </span>
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted">
                    {item.year}
                  </p>
                  <h3 className="mt-1.5 text-base font-semibold text-foreground">
                    {item.degree}
                  </h3>
                  <p className="text-sm text-accent">{item.school}</p>
                  {item.note ? (
                    <p className="mt-2 text-sm leading-relaxed text-muted">
                      {item.note}
                    </p>
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
