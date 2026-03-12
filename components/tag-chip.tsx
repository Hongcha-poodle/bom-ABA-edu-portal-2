import type { Route } from "next";
import Link from "next/link";

type TagChipProps = {
  label: string;
  href: Route | URL;
  active?: boolean;
};

export function TagChip({ label, href, active = false }: TagChipProps) {
  return (
    <Link
      href={href}
      className={`pill-label inline-flex rounded-full px-4 text-sm font-semibold transition-all duration-200 ${
        active
          ? "bg-slate-900 text-white shadow-soft"
          : "bg-white/88 text-slate-700 ring-1 ring-[color:var(--border)] hover:bg-white"
      }`}
      aria-pressed={active}
    >
      {label}
    </Link>
  );
}
