"use client";

import type { ReactNode } from "react";
import { Download } from "lucide-react";

type PrintButtonProps = {
  className?: string;
  children?: ReactNode;
  showIcon?: boolean;
};

export function PrintButton({
  className,
  children = "Download CV",
  showIcon = true,
}: PrintButtonProps) {
  return (
    <button
      type="button"
      onClick={() => window.print()}
      title="Print or save as PDF"
      className={className}
    >
      {showIcon ? <Download className="h-4 w-4" aria-hidden="true" /> : null}
      {children}
    </button>
  );
}
