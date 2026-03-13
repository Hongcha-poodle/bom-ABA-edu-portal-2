"use client";

import type { Route } from "next";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { Container } from "@/components/container";

const topLinks = [
  { href: "/" as Route, label: "홈" },
  { href: "/categories/language" as Route, label: "콘텐츠" },
  { href: "/apps" as Route, label: "교육 앱" },
  { href: "/about" as Route, label: "소개" }
];

export function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 border-b border-[color:var(--border)] bg-[rgba(255,255,255,0.9)] backdrop-blur-xl">
      <Container className="flex items-center justify-between gap-4 py-4">
        <Link href="/" className="flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-[14px] bg-[color:var(--primary)] text-xl font-bold text-white shadow-[var(--shadow-card)]">
            A
          </span>
          <div className="min-w-0">
            <p className="display-font text-lg font-semibold text-[color:var(--foreground)]">
              ABA 에듀 포털
            </p>
          </div>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {topLinks.map((link) => {
            const active =
              link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);

            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={active ? "page" : undefined}
                className={`text-sm font-medium transition-colors ${
                  active
                    ? "text-[color:var(--foreground)]"
                    : "text-[color:var(--muted-foreground)] hover:text-[color:var(--foreground)]"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href="/categories/language"
            className="hidden h-9 items-center rounded-full border border-[color:var(--border)] px-4 text-sm font-medium text-[color:var(--foreground)] transition-colors hover:bg-[color:var(--surface-muted)] sm:inline-flex"
          >
            추천 콘텐츠
          </Link>
          <Link
            href="/apps"
            className="inline-flex h-10 items-center rounded-full bg-[color:var(--foreground)] px-4 text-sm font-semibold text-white transition-colors hover:bg-[#1b2432]"
          >
            앱 둘러보기
          </Link>
        </div>
      </Container>
    </header>
  );
}
