"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { PrintButton } from "@/components/print-button";
import { ThemeToggle } from "@/components/theme-toggle";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Work", href: "#work" },
  { label: "Speaking", href: "#speaking" },
  { label: "Contact", href: "#contact" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="no-print sticky top-0 z-50 border-b border-border/70 bg-background/80 backdrop-blur-xl">
      <div className="container-page flex h-16 items-center justify-between gap-4">
        <a href="#top" className="group flex items-center gap-3">
          <span className="grid h-9 w-9 place-items-center rounded-lg border border-accent/30 bg-accent-soft font-mono text-xs font-semibold text-accent transition-colors group-hover:border-accent/60">
            GG
          </span>
          <span className="hidden sm:block">
            <span className="block text-sm font-semibold leading-tight">
              Gabriel González
            </span>
            <span className="block font-mono text-[10px] uppercase tracking-[0.18em] text-muted">
              technical support
            </span>
          </span>
        </a>

        <nav
          aria-label="Main navigation"
          className="hidden items-center gap-1 md:flex"
        >
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-md px-3 py-2 text-sm text-muted transition-colors hover:bg-elevated hover:text-foreground"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <PrintButton className="hidden items-center gap-2 rounded-lg bg-accent px-4 py-2 text-sm font-semibold text-accent-foreground transition-opacity hover:opacity-90 sm:inline-flex" />
          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-label={open ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={open}
            aria-controls="mobile-navigation"
            className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-surface text-muted transition-colors hover:text-foreground md:hidden"
          >
            {open ? (
              <X className="h-4 w-4" aria-hidden="true" />
            ) : (
              <Menu className="h-4 w-4" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {open ? (
        <div
          id="mobile-navigation"
          className="border-t border-border bg-background md:hidden"
        >
          <nav
            aria-label="Mobile navigation"
            className="container-page flex flex-col py-3"
          >
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2.5 text-sm text-muted transition-colors hover:bg-elevated hover:text-foreground"
              >
                {item.label}
              </a>
            ))}
            <div className="mt-2 border-t border-border pt-3">
              <PrintButton
                className="flex w-full items-center justify-center gap-2 rounded-lg bg-accent px-4 py-2.5 text-sm font-semibold text-accent-foreground"
                showIcon
              />
            </div>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
