"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useId, useState, type FocusEvent } from "react";

const guideItems = [
  { href: "/categories/language", label: "말문 트기", description: "요청하기와 따라 말하기 시작" },
  { href: "/categories/social", label: "사회성", description: "눈맞춤과 차례 지키기 연습" },
  { href: "/categories/daily-living", label: "루틴", description: "생활 습관과 자조기술 만들기" }
] as const;

const navItems = [
  { href: "/", label: "홈" },
  { href: "/apps", label: "앱 둘러보기" }
] as const;

export function Header() {
  const pathname = usePathname();
  const desktopDropdownId = useId();
  const mobileAccordionId = useId();
  const mobileNavId = useId();
  const [isDesktopGuideOpen, setIsDesktopGuideOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileGuideOpen, setIsMobileGuideOpen] = useState(false);

  const isGuideActive = guideItems.some((item) => pathname === item.href || pathname.startsWith(`${item.href}/`));

  const handleDesktopBlur = (event: FocusEvent<HTMLElement>) => {
    if (!event.currentTarget.contains(event.relatedTarget)) {
      setIsDesktopGuideOpen(false);
    }
  };

  return (
    <header className="sticky top-0 z-40 border-b border-[rgba(17,17,17,0.08)] bg-[color:rgba(255,255,255,0.9)] backdrop-blur">
      <div className="page-shell header-shell">
        <Link href="/" className="header-brand" aria-label="ABA 에듀 포털 홈">
          <span className="header-brand__mark">
            ABA
          </span>
          <span className="header-brand__copy">
            <strong>ABA 에듀 포털</strong>
            <span>
              부모를 위한 ABA 실천 가이드
            </span>
          </span>
        </Link>

        <button
          type="button"
          className="header-menu-toggle"
          aria-expanded={isMobileMenuOpen}
          aria-controls={mobileNavId}
          aria-label={isMobileMenuOpen ? "메뉴 닫기" : "메뉴 열기"}
          onClick={() => setIsMobileMenuOpen((open) => !open)}
        >
          <span />
          <span />
          <span />
        </button>

        <nav className="header-desktop-nav" aria-label="주요 메뉴">
          {navItems.map((item) => {
            const isActive =
              item.href === "/"
                ? pathname === item.href
                : pathname === item.href || pathname.startsWith(`${item.href}/`);

            return (
              <Link
                key={item.href}
                href={item.href}
                className="header-nav-link"
                aria-current={isActive ? "page" : undefined}
                style={
                  isActive
                    ? {
                        background: "rgba(34,87,61,0.08)",
                        color: "var(--text-primary)"
                      }
                    : undefined
                }
              >
                {item.label}
              </Link>
            );
          })}

          <div
            className="desktop-guide-menu"
            onMouseEnter={() => setIsDesktopGuideOpen(true)}
            onMouseLeave={() => setIsDesktopGuideOpen(false)}
            onFocus={() => setIsDesktopGuideOpen(true)}
            onBlur={handleDesktopBlur}
          >
            <button
              type="button"
              className={`header-nav-trigger ${isGuideActive ? "header-nav-trigger--active" : ""}`}
              aria-expanded={isDesktopGuideOpen}
              aria-controls={desktopDropdownId}
            >
              고민별 가이드
            </button>

            <div
              id={desktopDropdownId}
              className={`desktop-guide-dropdown ${isDesktopGuideOpen ? "desktop-guide-dropdown--open" : ""}`}
            >
              <div className="desktop-guide-dropdown__panel">
                <p className="desktop-guide-dropdown__title">지금 필요한 고민을 바로 찾아보세요</p>
                <div className="desktop-guide-dropdown__grid">
                  {guideItems.map((item) => {
                    const isActive = pathname === item.href || pathname.startsWith(`${item.href}/`);

                    return (
                      <Link
                        key={item.href}
                        href={item.href}
                        className={`desktop-guide-link ${isActive ? "desktop-guide-link--active" : ""}`}
                        aria-current={isActive ? "page" : undefined}
                      >
                        <strong>{item.label}</strong>
                        <span>{item.description}</span>
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </nav>

        <div id={mobileNavId} className="header-mobile-panel" hidden={!isMobileMenuOpen}>
          <nav className="header-mobile-nav" aria-label="모바일 주요 메뉴">
            <Link href="/" className="header-mobile-link" onClick={() => setIsMobileMenuOpen(false)}>
              홈
            </Link>

            <div className="header-mobile-accordion">
              <button
                type="button"
                className={`header-mobile-accordion__trigger ${isGuideActive ? "header-mobile-accordion__trigger--active" : ""}`}
                aria-expanded={isMobileGuideOpen}
                aria-controls={mobileAccordionId}
                onClick={() => setIsMobileGuideOpen((open) => !open)}
              >
                고민별 가이드
              </button>
              <div
                id={mobileAccordionId}
                className={`header-mobile-accordion__panel ${isMobileGuideOpen ? "header-mobile-accordion__panel--open" : ""}`}
                hidden={!isMobileGuideOpen}
              >
                {guideItems.map((item) => {
                  const isActive = pathname === item.href || pathname.startsWith(`${item.href}/`);

                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={`header-mobile-sublink ${isActive ? "header-mobile-sublink--active" : ""}`}
                      aria-current={isActive ? "page" : undefined}
                      onClick={() => {
                        setIsMobileGuideOpen(false);
                        setIsMobileMenuOpen(false);
                      }}
                    >
                      {item.label}
                    </Link>
                  );
                })}
              </div>
            </div>

            <Link href="/apps" className="header-mobile-link" onClick={() => setIsMobileMenuOpen(false)}>
              앱 둘러보기
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
