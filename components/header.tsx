"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/", label: "홈" },
  { href: "/categories/aba-basics", label: "콘텐츠" },
  { href: "/apps", label: "앱 둘러보기" }
] as const;

export function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 border-b border-[rgba(17,17,17,0.08)] bg-[color:rgba(255,255,255,0.9)] backdrop-blur">
      <div className="page-shell flex min-h-[72px] items-center justify-between gap-6 py-3 max-md:flex-col max-md:items-start">
        <Link href="/" className="inline-flex min-h-11 items-center gap-3" aria-label="ABA 에듀 포털 홈">
          <span className="grid h-11 w-11 place-items-center bg-[rgba(17,17,17,0.05)] text-sm font-semibold text-[var(--accent-primary)]">
            ABA
          </span>
          <span className="flex flex-col gap-0.5">
            <strong className="text-[15px] leading-none">ABA 에듀 포털</strong>
            <span className="text-[13px] leading-5 text-[var(--text-secondary)]">
              부모를 위한 ABA 실천 가이드
            </span>
          </span>
        </Link>

        <nav className="flex items-center gap-2 overflow-x-auto" aria-label="주요 메뉴">
          {navItems.map((item) => {
            const isActive =
              item.href === "/"
                ? pathname === item.href
                : pathname === item.href || pathname.startsWith(`${item.href}/`);

            return (
              <Link
                key={item.href}
                href={item.href}
                className="inline-flex min-h-11 items-center justify-center px-4 text-sm font-semibold text-[var(--text-secondary)] transition hover:bg-[rgba(17,17,17,0.04)]"
                aria-current={isActive ? "page" : undefined}
                style={
                  isActive
                    ? {
                        background: "rgba(17,17,17,0.06)",
                        color: "var(--text-primary)"
                      }
                    : undefined
                }
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
