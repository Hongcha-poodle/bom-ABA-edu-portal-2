import type { Route } from "next";
import Link from "next/link";

import { AppCard } from "@/components/app-card";
import { Container } from "@/components/container";
import { CTAButton } from "@/components/cta-button";
import { SectionHeader } from "@/components/section-header";
import { appItems, categories, contentItems } from "@/lib/content-data";

export default function HomePage() {
  const liveApps = appItems.filter((app) => app.status === "live");
  const featuredApp = liveApps[0];
  const latestContent = contentItems.slice(0, 3);
  const quickGuides = [
    {
      title: "용어 사전",
      description: "어려운 ABA 용어를 부모의 언어로 다시 정리합니다.",
      href: "/categories/language" as Route,
      tone: "var(--primary)"
    },
    {
      title: "환경 조성",
      description: "집에서 바로 적용할 수 있는 놀이 환경 배치를 제안합니다.",
      href: "/categories/daily-living" as Route,
      tone: "var(--accent)"
    },
    {
      title: "Q&A",
      description: "보호자가 자주 묻는 고민을 주제별 콘텐츠로 연결합니다.",
      href: "/categories/behavior" as Route,
      tone: "var(--secondary)"
    },
    {
      title: "교구 추천",
      description: "연령과 목표에 맞는 교구 아이디어를 빠르게 둘러봅니다.",
      href: "/apps" as Route,
      tone: "#dbeafe"
    },
    {
      title: "성장 기록",
      description: "하루 한 번 체크하기 좋은 루틴을 카드 형태로 제공합니다.",
      href: "/categories/social" as Route,
      tone: "#ede9fe"
    },
    {
      title: "커뮤니티 흐름",
      description: "혼자 고민하지 않도록 콘텐츠와 앱을 한 번에 묶어 제안합니다.",
      href: "/about" as Route,
      tone: "#ffe7d6"
    }
  ];

  return (
    <div className="page-shell relative bg-[image:var(--surface-hero)] py-10 sm:py-14">
      <Container className="relative z-10 space-y-14">
        <section className="space-y-8 rounded-[var(--radius-panel)] bg-transparent py-4">
          <div className="mx-auto max-w-4xl space-y-5 text-center">
            <h1 className="display-font balance-text text-4xl font-semibold leading-tight text-[color:var(--foreground)] sm:text-5xl lg:text-7xl">
              발달지연 아동 부모를 위한
              <span className="block text-[color:var(--primary)]">ABA 교육 콘텐츠 포털</span>
            </h1>
            <p className="mx-auto max-w-3xl text-base leading-8 text-[color:var(--muted-foreground)] sm:text-xl">
              매거진, 가이드, 교육 앱을 한곳에서.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            <CTAButton href={"/categories/language" as Route}>언어 콘텐츠부터 시작</CTAButton>
            <CTAButton href="/apps" variant="secondary">
              교육 앱 보기
            </CTAButton>
          </div>

          <div className="hero-grid">
            <div className="section-frame relative overflow-hidden">
              <div className="grid min-h-[28rem] items-end bg-[linear-gradient(180deg,rgba(255,255,255,0)_0%,rgba(16,24,40,0.68)_100%),linear-gradient(135deg,#f0ede8_0%,#d7dde6_45%,#c9d6c4_100%)] p-8">
                <div className="absolute inset-6 rounded-[calc(var(--radius-card)-0.25rem)] border border-white/35" />
                <div className="absolute right-8 top-8 flex -space-x-3">
                  <span className="h-10 w-10 rounded-full border-2 border-white bg-[#d1d5db]" />
                  <span className="h-10 w-10 rounded-full border-2 border-white bg-[#98a2b3]" />
                  <span className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-white bg-[#1f2937] text-xs font-semibold text-white">
                    +{liveApps.length}
                  </span>
                </div>
                <div className="relative z-10 max-w-sm space-y-3 text-white">
                  <h2 className="display-font text-3xl font-semibold leading-tight sm:text-4xl">
                    교육 앱
                  </h2>
                </div>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="section-frame relative overflow-hidden bg-[color:var(--secondary)] p-6 flex flex-col justify-between">
                <div className="absolute right-4 top-4 h-16 w-16 rounded-full bg-black/5" />
                <div className="space-y-4">
                  <div className="flex -space-x-3">
                    <span className="h-10 w-10 rounded-full border-2 border-white bg-[#d1d5db]" />
                    <span className="h-10 w-10 rounded-full border-2 border-white bg-[#98a2b3]" />
                    <span className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-white bg-[#1f2937] text-xs font-semibold text-white">
                      +15
                    </span>
                  </div>
                  <h3 className="display-font text-2xl font-semibold text-[color:var(--foreground)]">
                    콘텐츠 피드
                  </h3>
                </div>
                <div className="mt-8 flex items-center justify-between text-sm font-semibold text-[color:var(--foreground)]">
                  <span>콘텐츠 큐레이션 보기</span>
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-black text-white">
                    →
                  </span>
                </div>
              </div>

              <div className="section-frame relative overflow-hidden bg-[color:var(--accent)] p-6 flex flex-col justify-between">
                <h3 className="display-font text-2xl font-semibold text-[#312c85]">
                  카테고리별 필터링
                </h3>
                <div className="mt-10 grid h-16 grid-cols-5 items-end gap-2">
                  <span className="rounded-t-md bg-[#8c9cff]/45" style={{ height: "40%" }} />
                  <span className="rounded-t-md bg-[#8c9cff]/45" style={{ height: "60%" }} />
                  <span className="rounded-t-md bg-[#8c9cff]/45" style={{ height: "30%" }} />
                  <span className="rounded-t-md bg-white shadow-sm" style={{ height: "80%" }} />
                  <span className="rounded-t-md bg-[#8c9cff]/45" style={{ height: "50%" }} />
                </div>
              </div>

              {categories.slice(0, 2).map((category) => (
                <Link
                  key={category.slug}
                  href={`/categories/${category.slug}`}
                  className="section-frame interactive-lift flex min-h-[13rem] flex-col justify-between p-6"
                  style={{ backgroundColor: category.softColor }}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-3xl">{category.emoji}</span>
                    <span className="rounded-full bg-white/80 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-[color:var(--muted-foreground)]">
                      카테고리
                    </span>
                  </div>
                  <div>
                    <h3 className="display-font text-2xl font-semibold text-[color:var(--foreground)]">
                      {category.name}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-[color:var(--muted-foreground)]">
                      {category.description}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="space-y-8 rounded-[var(--radius-panel)] bg-[#faf7f3] px-6 py-10 sm:px-8">
          <SectionHeader
            title="콘텐츠 피드"
            align="center"
          />
          <div className="grid gap-4 lg:grid-cols-3">
            {latestContent.map((item) => (
              <Link
                key={item.slug}
                href={`/content/${item.slug}`}
                className="interactive-lift rounded-[var(--radius-card)] border border-[#f3d5c6] bg-[#ffede4] p-6 shadow-[var(--shadow-soft)]"
              >
                <div className="flex items-start justify-between gap-3">
                  <span className="rounded-full bg-white/90 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-[color:var(--muted-foreground)]">
                    {item.category}
                  </span>
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-[color:var(--muted-foreground)]">
                    ↗
                  </span>
                </div>
                <h2 className="mt-6 text-xl font-bold leading-8 text-[color:var(--foreground)]">
                  {item.title}
                </h2>
                <p className="mt-3 min-h-20 text-sm leading-6 text-[color:var(--muted-foreground)]">
                  {item.summary}
                </p>
                <div className="mt-6 rounded-[20px] border border-white/60 bg-white/65 p-4 text-sm text-[color:var(--subtle-foreground)]">
                  {item.coverImage}
                </div>
              </Link>
            ))}
          </div>
        </section>

        <section className="space-y-8">
          <SectionHeader
            title="카테고리별 가이드"
            align="center"
          />
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {quickGuides.map((guide) => (
              <Link
                key={guide.title}
                href={guide.href}
                className="interactive-lift section-frame flex min-h-[12rem] flex-col items-center justify-center p-8 text-center"
              >
                <div
                  className="mb-5 flex h-16 w-16 items-center justify-center rounded-[20px]"
                  style={{ backgroundColor: guide.tone }}
                >
                  <span className="text-lg font-semibold text-[color:var(--foreground)]">
                    {guide.title.slice(0, 1)}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-[color:var(--foreground)]">{guide.title}</h3>
                <p className="mt-3 text-sm leading-6 text-[color:var(--muted-foreground)]">
                  {guide.description}
                </p>
              </Link>
            ))}
          </div>
        </section>

        <section className="section-frame overflow-hidden">
          <div className="grid lg:grid-cols-[0.95fr_1.05fr]">
            <div className="p-8 sm:p-10 flex flex-col justify-center">
              <h2 className="display-font text-3xl font-semibold text-[color:var(--foreground)] sm:text-4xl">
                교육 앱: {featuredApp.name}
              </h2>
              <div className="mt-8 flex flex-wrap gap-3">
                <CTAButton href={`/apps/${featuredApp.slug}` as Route}>앱 상세 보기</CTAButton>
                <CTAButton href="/apps" variant="secondary">
                  전체 앱 보기
                </CTAButton>
              </div>
              <div className="mt-8 max-w-xl">
                <AppCard item={featuredApp} />
              </div>
            </div>

            <div className="relative overflow-hidden bg-[#f4eefb] p-8 sm:p-10">
              <div className="mx-auto flex max-w-sm justify-center">
                <div className="rounded-[2.2rem] border border-white/80 bg-white p-4 shadow-[var(--shadow-card)]">
                  <div className="mx-auto mb-4 h-5 w-24 rounded-full bg-[#101828]" />
                  <div className="rounded-[1.6rem] bg-[#f7f8fb] p-6">
                    <div className="rounded-[1rem] bg-white p-4 text-center shadow-sm">
                      <div className="text-4xl">🍎</div>
                      <p className="mt-2 text-sm font-semibold text-[color:var(--foreground)]">
                        사과 주세요
                      </p>
                    </div>
                    <div className="mt-4 grid grid-cols-3 gap-3">
                      {["🍎", "🍌", "🍇", "🥛", "🍪", "🍬"].map((emoji) => (
                        <div
                          key={emoji}
                          className="flex aspect-square items-center justify-center rounded-[14px] bg-white text-2xl shadow-sm"
                        >
                          {emoji}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute -left-8 bottom-10 h-28 w-28 rounded-full bg-white/30 blur-2xl" />
              <div className="absolute -right-8 top-8 h-28 w-28 rounded-full bg-white/30 blur-2xl" />
            </div>
          </div>
        </section>

        <section className="space-y-6 py-2 text-center">
          <SectionHeader
            title="함께 시작하기"
            align="center"
          />
          <div className="mx-auto max-w-sm rounded-[2rem] bg-[linear-gradient(135deg,#7d5ef8_0%,#8b6cf4_100%)] p-3 shadow-[0_24px_48px_rgba(125,94,248,0.28)]">
            <div className="flex items-center gap-4 rounded-[1.6rem] px-5 py-4 text-left text-white">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-[color:var(--primary)]">
                ✦
              </div>
              <div className="flex-1">
                <p className="text-sm text-white/80">지금 바로 시작하기</p>
                <p className="text-2xl font-bold">추천 경로 둘러보기</p>
              </div>
              <span className="text-2xl">→</span>
            </div>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            <CTAButton href={"/categories/language" as Route}>언어 카테고리 열기</CTAButton>
            <CTAButton href="/apps" variant="secondary">
              앱 목록 전체 보기
            </CTAButton>
            <CTAButton href="/about" variant="ghost">
              포털 운영 방향 보기
            </CTAButton>
          </div>
        </section>
      </Container>
    </div>
  );
}
