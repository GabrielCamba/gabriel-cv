import { ArrowUp } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="no-print border-t border-border py-8">
      <div className="container-page flex flex-col gap-3 text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
        <p>
          © {new Date().getFullYear()} Gabriel Nicolás González. Built with
          Next.js, Tailwind CSS, and Motion.
        </p>
        <a
          href="#top"
          className="inline-flex items-center gap-1.5 transition-colors hover:text-foreground"
        >
          Back to top
          <ArrowUp className="h-3.5 w-3.5" aria-hidden="true" />
        </a>
      </div>
    </footer>
  );
}
