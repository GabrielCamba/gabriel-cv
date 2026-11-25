import Image from "next/image";
import {
  ArrowUpRight,
  Globe2,
  Mail,
  MapPin,
  Terminal,
} from "lucide-react";
import { PrintButton } from "@/components/print-button";
import { Reveal } from "@/components/reveal";
import { cv } from "@/content/cv";

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden border-b border-border"
    >
      <div aria-hidden="true" className="hero-glow absolute inset-0" />
      <div aria-hidden="true" className="hero-grid absolute inset-0" />

      <div className="container-page relative grid gap-14 py-16 md:py-24 lg:grid-cols-[1.12fr_0.88fr] lg:items-center lg:gap-16">
        <div>
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full border border-accent/25 bg-accent-soft px-3 py-1.5 font-mono text-[11px] font-medium uppercase tracking-[0.16em] text-accent">
              <span className="pulse-dot h-1.5 w-1.5 rounded-full bg-accent" />
              {cv.availability}
            </div>
          </Reveal>

          <Reveal delay={0.06}>
            <p className="mt-8 font-mono text-xs uppercase tracking-[0.22em] text-muted">
              Hello, I&apos;m
            </p>
            <h1 className="mt-3 max-w-3xl text-5xl font-semibold leading-[0.95] tracking-[-0.04em] text-balance sm:text-6xl lg:text-7xl">
              Gabriel Nicolás{" "}
              <span className="text-gradient">González</span>
            </h1>
          </Reveal>

          <Reveal delay={0.12}>
            <p className="mt-6 max-w-2xl text-lg font-medium leading-snug text-foreground sm:text-xl">
              {cv.headline}
            </p>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-muted">
              {cv.summary}
            </p>
          </Reveal>

          <Reveal delay={0.18}>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href={`mailto:${cv.email}`}
                className="inline-flex items-center gap-2 rounded-lg bg-accent px-5 py-3 text-sm font-semibold text-accent-foreground transition-opacity hover:opacity-90"
              >
                <Mail className="h-4 w-4" aria-hidden="true" />
                Email me
              </a>
              <a
                href={cv.links[0].url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-border bg-surface px-5 py-3 text-sm font-semibold text-foreground transition-colors hover:border-accent/50 hover:bg-elevated"
              >
                LinkedIn
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </a>
              <PrintButton className="inline-flex items-center gap-2 rounded-lg px-3 py-3 text-sm font-medium text-muted transition-colors hover:text-foreground" />
            </div>
          </Reveal>

          <Reveal delay={0.24}>
            <dl className="mt-10 flex flex-wrap gap-x-6 gap-y-3 border-t border-border pt-6 font-mono text-xs text-muted">
              <div className="flex items-center gap-2">
                <MapPin className="h-3.5 w-3.5 text-accent" aria-hidden="true" />
                <dt className="sr-only">Location</dt>
                <dd>{cv.location}</dd>
              </div>
              <div className="flex items-center gap-2">
                <Globe2 className="h-3.5 w-3.5 text-accent" aria-hidden="true" />
                <dt className="sr-only">Languages</dt>
                <dd>Spanish / English</dd>
              </div>
              <div className="flex items-center gap-2">
                <Terminal className="h-3.5 w-3.5 text-accent" aria-hidden="true" />
                <dt className="sr-only">Experience</dt>
                <dd>15 years in software</dd>
              </div>
            </dl>
          </Reveal>
        </div>

        <Reveal delay={0.16} className="relative mx-auto w-full max-w-sm lg:max-w-none">
          <div
            aria-hidden="true"
            className="absolute -inset-4 rounded-[2rem] bg-accent-soft blur-2xl"
          />
          <div className="relative overflow-hidden rounded-3xl border border-border bg-surface shadow-2xl shadow-black/20">
            <Image
              src="/profile.webp"
              alt="Portrait of Gabriel Nicolás González"
              width={800}
              height={1200}
              priority
              sizes="(max-width: 1024px) 384px, 440px"
              className="aspect-[4/5] w-full object-cover object-top"
            />
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-gradient-to-t from-background via-background/10 to-transparent"
            />
            <div className="absolute inset-x-4 bottom-4 rounded-xl border border-border bg-background/85 p-4 backdrop-blur-md">
              <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.16em] text-muted">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                currently
              </div>
              <p className="mt-2 font-mono text-xs text-accent">$ whoami</p>
              <p className="mt-1 text-sm font-medium leading-snug text-foreground">
                technical support · developer education · technical content
              </p>
            </div>
          </div>

          <div className="absolute -left-3 top-6 rounded-xl border border-border bg-surface/95 px-3 py-2 shadow-lg backdrop-blur sm:-left-5">
            <p className="font-mono text-[9px] uppercase tracking-[0.18em] text-muted">
              experience
            </p>
            <p className="text-lg font-semibold leading-tight text-foreground">
              15 years
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
