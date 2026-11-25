import { Compass, Languages, Sparkles, Users } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";

const focusItems = [
  {
    icon: Compass,
    title: "Developer support",
    body: "Helping developers navigate complex products, protocols, and fast-moving ecosystems.",
  },
  {
    icon: Sparkles,
    title: "Technical clarity",
    body: "Turning dense technical material into practical explanations for developers and non-technical audiences.",
  },
  {
    icon: Languages,
    title: "Bilingual content",
    body: "Creating and adapting technical content in Spanish and English without losing accuracy.",
  },
  {
    icon: Users,
    title: "Community learning",
    body: "Teaching, workshops, talks, and the day-to-day work of building trust in developer communities.",
  },
];

export function AboutSection() {
  return (
    <section id="about" className="border-b border-border py-20 md:py-28">
      <div className="container-page">
        <SectionHeading
          index="01"
          label="About"
          title="Complex technology, made clear."
          description="I sit between the product and the people who use it — close enough to the code to understand the details, and focused enough on communication to make those details useful."
        />

        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          <Reveal className="space-y-5 text-base leading-relaxed text-muted">
            <p>
              I have spent 15 years in software development across engineering,
              QA, technical writing, and developer advocacy. For the past five
              years, my work has focused on Web3: helping developers understand
              and adopt complex, fast-moving technologies through written
              content, educational sessions, and talks at international
              conferences.
            </p>
            <p>
              My strongest work happens when technical depth and communication
              meet. I enjoy analyzing how a system works, finding the part that
              is hard to explain, and building the explanation, example, or
              workshop that makes it click. I work comfortably with engineers,
              product stakeholders, marketing teams, and community members.
            </p>
            <p className="border-l-2 border-accent/50 pl-4 font-medium text-foreground">
              The through-line: make technology easier to understand, easier to
              use, and easier to talk about — in Spanish and English.
            </p>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="rounded-2xl border border-border bg-surface p-5 md:p-6">
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted">
                What I bring
              </p>
              <div className="mt-5 space-y-5">
                {focusItems.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.title} className="flex gap-3.5">
                      <span className="mt-0.5 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-border bg-elevated text-accent">
                        <Icon className="h-4 w-4" aria-hidden="true" />
                      </span>
                      <div>
                        <h3 className="text-sm font-semibold text-foreground">
                          {item.title}
                        </h3>
                        <p className="mt-1 text-sm leading-relaxed text-muted">
                          {item.body}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
