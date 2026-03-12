import type { Route } from "next";
import Link from "next/link";
import type { ReactNode } from "react";

type CTAButtonProps = {
  href: Route | URL;
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  size?: "default" | "compact";
};

const variantClasses = {
  primary:
    "bg-[color:var(--primary)] text-white shadow-[var(--shadow-button)] hover:bg-[color:var(--primary-strong)]",
  secondary:
    "bg-white text-[color:var(--foreground)] ring-1 ring-[color:var(--border)] hover:bg-[color:var(--surface-muted)]",
  ghost:
    "bg-transparent text-[color:var(--foreground)] ring-1 ring-transparent hover:bg-[color:var(--surface-muted)]"
};

export function CTAButton({
  href,
  children,
  variant = "primary",
  size = "default"
}: CTAButtonProps) {
  return (
    <Link
      href={href}
      className={`pill-label interactive-lift inline-flex gap-2 rounded-full font-semibold transition-colors ${size === "default" ? "px-5 text-sm" : "px-4 text-xs uppercase tracking-[0.18em]"} ${variantClasses[variant]}`}
    >
      {children}
    </Link>
  );
}
