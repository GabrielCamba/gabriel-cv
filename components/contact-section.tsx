import { ArrowUpRight, Mail, MapPin } from "lucide-react";
import { CopyEmail } from "@/components/copy-email";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { cv } from "@/content/cv";

export function ContactSection() {
  return (
    <section id="contact" className="py-20 md:py-28">
      <div className="container-page">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-border bg-surface p-6 md:p-10">
            <div
              aria-hidden="true"
              className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-accent-soft blur-3xl"
            />
            <div className="relative">
              <SectionHeading
                index="07"
                label="Contact"
                title="Let's make complex technology clearer."
                description="Open to remote roles in technical support, developer education, technical writing, and developer advocacy."
              />

              <div className="flex flex-col gap-5 border-t border-border pt-6 md:flex-row md:items-center md:justify-between">
                <div>
                  <a
                    href={`mailto:${cv.email}`}
                    className="inline-flex items-center gap-2 text-lg font-semibold tracking-tight text-foreground transition-colors hover:text-accent md:text-xl"
                  >
                    <Mail className="h-5 w-5 text-accent" aria-hidden="true" />
                    {cv.email}
                  </a>
                  <p className="mt-2 flex items-center gap-2 font-mono text-xs text-muted">
                    <MapPin className="h-3.5 w-3.5 text-accent" aria-hidden="true" />
                    {cv.location}
                  </p>
                </div>

                <div className="flex flex-wrap items-center gap-3">
                  <CopyEmail email={cv.email} />
                  <a
                    href={cv.links[0].url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg bg-accent px-4 py-2.5 text-sm font-semibold text-accent-foreground transition-opacity hover:opacity-90"
                  >
                    LinkedIn
                    <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
