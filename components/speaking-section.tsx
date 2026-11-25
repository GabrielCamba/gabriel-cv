import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { cv } from "@/content/cv";

export function SpeakingSection() {
  return (
    <section id="speaking" className="border-b border-border py-20 md:py-28">
      <div className="container-page">
        <SectionHeading
          index="04"
          label="Speaking & community"
          title="Teaching in public."
          description="Conferences, workshops, and community conversations about Web3, developer ecosystems, and emerging technology."
        />

        <div className="divide-y divide-border border-y border-border">
          {cv.speaking.map((talk, index) => {
            const content = (
              <>
                <div className="min-w-0">
                  <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1">
                    <h3 className="text-base font-semibold text-foreground">
                      {talk.title}
                    </h3>
                    <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-muted">
                      {talk.context}
                    </span>
                  </div>
                  <p className="mt-1.5 max-w-2xl text-sm leading-relaxed text-muted">
                    {talk.description}
                  </p>
                </div>
                {talk.href ? (
                  <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-border bg-surface text-muted transition-colors group-hover:border-accent/50 group-hover:text-accent">
                    <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                  </span>
                ) : null}
              </>
            );

            return (
              <Reveal key={talk.title} delay={index * 0.035}>
                {talk.href ? (
                  <a
                    href={talk.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-start justify-between gap-6 py-5 transition-colors hover:bg-surface/60 md:px-3"
                  >
                    {content}
                  </a>
                ) : (
                  <div className="flex items-start justify-between gap-6 py-5 md:px-3">
                    {content}
                  </div>
                )}
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
