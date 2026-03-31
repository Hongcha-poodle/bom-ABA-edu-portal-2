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
    <header className="sticky top-0 z-40 bg-[color:rgba(251,247,240,0.78)] shadow-[0_10px_30px_rgba(70,52,31,0.06)] backdrop-blur">
      <div className="page-shell flex min-h-[72px] items-center justify-between gap-6 py-3 max-md:flex-col max-md:items-start">
        <Link href="/" className="inline-flex min-h-11 items-center gap-3" aria-label="ABA 에듀 포털 홈">
          <span className="grid h-11 w-11 place-items-center rounded-2xl bg-[linear-gradient(180deg,rgba(255,250,243,0.98),rgba(243,234,221,0.92))] text-sm font-semibold text-[var(--accent-primary)] shadow-[0_12px_24px_rgba(82,61,35,0.12)]">
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
                className="inline-flex min-h-11 items-center justify-center rounded-full px-4 text-sm font-semibold text-[var(--text-secondary)] transition hover:bg-[color:rgba(255,248,238,0.88)]"
                aria-current={isActive ? "page" : undefined}
                style={
                  isActive
                    ? {
                        background: "rgba(255,248,238,0.96)",
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
