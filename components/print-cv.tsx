import { cv } from "@/content/cv";

function PrintSection({
  title,
  children,
  className = "",
}: {
  title: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section className={`mt-5 ${className}`}>
      <h2 className="border-b border-foreground/30 pb-1 text-[10pt] font-bold uppercase tracking-[0.16em]">
        {title}
      </h2>
      <div className="mt-2.5">{children}</div>
    </section>
  );
}

export function PrintCv() {
  return (
    <div className="hidden print:block print:text-[9.5pt] print:leading-[1.35]">
      <header className="border-b-2 border-foreground pb-4">
        <h1 className="text-[24pt] font-bold leading-none tracking-tight">
          {cv.name}
        </h1>
        <p className="mt-2 text-[11pt] font-semibold">{cv.headline}</p>
        <p className="mt-2 text-[9pt] text-muted">
          {cv.email} · {cv.location} ·{" "}
          <span className="break-all">{cv.links[0].url}</span>
        </p>
      </header>

      <PrintSection title="Profile">
        <p>{cv.summary}</p>
      </PrintSection>

      <PrintSection title="Professional experience">
        <div className="space-y-4">
          {cv.experience.map((role) => (
            <article
              key={`${role.company}-${role.start}`}
              className="break-inside-avoid"
            >
              <div className="flex items-start justify-between gap-6">
                <div>
                  <h3 className="text-[10.5pt] font-bold leading-snug">
                    {role.role} · {role.company}
                  </h3>
                  <p className="text-[8.5pt] text-muted">{role.location}</p>
                </div>
                <p className="shrink-0 text-[8.5pt] font-medium text-muted">
                  {role.start} — {role.end}
                </p>
              </div>
              <ul className="mt-1.5 list-disc space-y-0.5 pl-4">
                {role.highlights.slice(0, 4).map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </PrintSection>

      <PrintSection title="Selected work" className="break-before-page">
        <div className="space-y-2.5">
          {cv.projects.slice(0, 3).map((project) => (
            <article key={project.slug} className="break-inside-avoid">
              <p className="font-bold">
                {project.name}{" "}
                <span className="font-normal text-muted">
                  — {project.role}, {project.year}
                </span>
              </p>
              <p>{project.tagline}</p>
              <p className="text-[8.5pt] text-muted">
                Stack: {project.stack.join(" · ")}
              </p>
            </article>
          ))}
        </div>
      </PrintSection>

      <PrintSection title="Speaking & community">
        <ul className="space-y-1">
          {cv.speaking.map((talk) => (
            <li key={talk.title}>
              <span className="font-semibold">{talk.title}</span> —{" "}
              {talk.description}
            </li>
          ))}
        </ul>
      </PrintSection>

      <div className="mt-5 grid grid-cols-2 gap-6">
        <PrintSection title="Skills">
          <dl className="space-y-1.5">
            {cv.skills.map((group) => (
              <div key={group.label}>
                <dt className="font-semibold">{group.label}</dt>
                <dd className="text-[8.5pt] text-muted">
                  {group.items.join(" · ")}
                </dd>
              </div>
            ))}
          </dl>
        </PrintSection>

        <PrintSection title="Education">
          <div className="space-y-2">
            {cv.education.map((item) => (
              <div key={item.school}>
                <p className="font-semibold">{item.degree}</p>
                <p className="text-[8.5pt] text-muted">
                  {item.school} · {item.year}
                </p>
              </div>
            ))}
          </div>
        </PrintSection>
      </div>

      <footer className="mt-5 border-t border-foreground/30 pt-2 text-[8pt] text-muted">
        References available on request. Updated{" "}
        {new Date().toLocaleDateString("en-US", {
          month: "long",
          year: "numeric",
        })}
        .
      </footer>
    </div>
  );
}
