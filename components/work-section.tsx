import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { cv, type Project } from "@/content/cv";

function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="card-lift flex h-full flex-col rounded-2xl border border-border bg-surface p-5 md:p-6">
      <div className="flex items-start justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted">
              {project.year}
            </p>
            {project.featured ? (
              <span className="rounded-full border border-accent/30 bg-accent-soft px-2 py-0.5 font-mono text-[9px] uppercase tracking-[0.14em] text-accent">
                Featured
              </span>
            ) : null}
          </div>
          <h3 className="mt-2 text-lg font-semibold tracking-tight text-foreground">
            {project.name}
          </h3>
          <p className="mt-1 text-xs text-accent">{project.role}</p>
        </div>
        {project.liveUrl ? (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Open ${project.name}`}
            className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-border bg-elevated text-muted transition-colors hover:border-accent/50 hover:text-accent"
          >
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </a>
        ) : null}
      </div>

      <p className="mt-4 text-sm font-medium leading-relaxed text-foreground">
        {project.tagline}
      </p>
      <p className="mt-2 text-sm leading-relaxed text-muted">
        {project.description}
      </p>

      <ul className="mt-4 space-y-2">
        {project.highlights.map((highlight) => (
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

      <div className="mt-auto flex flex-wrap gap-2 pt-5">
        {project.stack.map((tech) => (
          <span
            key={tech}
            className="rounded-full border border-border bg-background px-2.5 py-1 font-mono text-[10px] text-muted"
          >
            {tech}
          </span>
        ))}
      </div>
    </article>
  );
}

export function WorkSection() {
  return (
    <section id="work" className="border-b border-border py-20 md:py-28">
      <div className="container-page">
        <SectionHeading
          index="03"
          label="Selected work"
          title="Work with a developer-first lens."
          description="A few examples of the engineering, content, and education work that best represents how I operate."
        />

        <div className="grid gap-4 md:grid-cols-2">
          {cv.projects.map((project, index) => (
            <Reveal
              key={project.slug}
              delay={index * 0.04}
              className={project.featured ? "md:col-span-1" : ""}
            >
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
