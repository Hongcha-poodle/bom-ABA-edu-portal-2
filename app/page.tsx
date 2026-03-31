import Link from "next/link";

import { AppCard } from "@/components/app-card";
import { ContentCard } from "@/components/content-card";
import { SectionHeading } from "@/components/section-heading";
import { appItems, categories, contentItems } from "@/lib/content-data";

const featuredContent = contentItems.slice(0, 3);
const featuredApps = appItems.slice(0, 3);
const categoryToneClass = [
  "category-shortcut--primary",
  "category-shortcut--secondary",
  "category-shortcut--warm"
];

export default function HomePage() {
  return (
    <div>
      <section className="section-block section-block--white page-section--tight">
        <div className="page-shell">
          <div className="hero-shell">
            <div className="hero-panel hero-grid border-t border-[rgba(17,17,17,0.16)]">
              <span className="eyebrow">Parent-first ABA Guide</span>
              <p className="hero-kicker">복잡하지 않게, 필요한 것만 바로 찾을 수 있습니다</p>
              <h1 className="page-title">
                필요한 정보만 빠르게 읽고,
                <br />
                아이와 바로 실천하세요
              </h1>
              <p className="hero-summary">
                ABA 핵심 개념, 생활 적용 예시, 교육 앱을 한 곳에서 바로 찾을 수 있습니다.
              </p>

              <div className="intro-actions pt-4">
                <Link href="/categories/aba-basics" className="button-primary">
                  콘텐츠 바로 보기
                </Link>
                <Link href="/apps" className="button-secondary">
                  교육 앱 둘러보기
                </Link>
              </div>

              <div className="hero-facts pt-4">
                {[
                  ["빠른 판단", "연령, 읽는 시간, 핵심 내용을 한눈에 확인합니다."],
                  ["실행 중심", "오늘 해볼 한 가지와 다음 행동을 함께 제안합니다."],
                  ["심플한 화면", "중요한 내용이 한눈에 들어옵니다."]
                ].map(([title, description]) => (
                  <div key={title} className="hero-fact">
                    <strong>{title}</strong>
                    <span>{description}</span>
                  </div>
                ))}
              </div>
            </div>

            <aside className="hero-panel border-t border-[rgba(17,17,17,0.16)]">
              <span className="eyebrow">Today&apos;s Start</span>
              <h2 className="section-title mt-4">오늘 어디서 시작할까요?</h2>
              <p className="quiet mt-3 text-sm">
                우리 아이에게 맞는 것, 시작 방법, 다음 단계를 한 번에 확인하세요.
              </p>

              <div className="hero-checklist mt-6">
                {[
                  ["1. 어려운 순간 골라보기", "언어, 사회성, 생활 루틴 중 지금 가장 어렵게 느껴지는 것부터 찾아보세요."],
                  ["2. 5분 안에 읽기", "카드뉴스, 영상, 아티클 중 지금 집중할 수 있는 형식으로 시작합니다."],
                  ["3. 앱으로 바로 이어가기", "같은 주제의 앱이나 다음 가이드로 연결해 반복 연습합니다."]
                ].map(([title, copy]) => (
                  <article key={title}>
                    <strong>{title}</strong>
                    <p>{copy}</p>
                  </article>
                ))}
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="section-block section-block--yellow page-section">
        <div className="page-shell">
          <SectionHeading
            eyebrow="Topic Shortcuts"
            title="어떤 주제부터 시작할까요?"
            description="지금 가장 필요한 주제를 골라보세요."
          />

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {categories.map((category, index) => (
              <Link
                key={category.slug}
                href={`/categories/${category.slug}`}
                className={`category-shortcut ${categoryToneClass[index % categoryToneClass.length]}`}
              >
                <span className="category-shortcut__badge">{category.emoji}</span>
                <div>
                  <h3 className="text-[1.05rem] font-semibold">{category.name}</h3>
                  <p className="quiet mt-1.5 text-sm">{category.description}</p>
                  <span className="category-shortcut__meta mt-3 inline-block">바로 살펴보기</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section-block section-block--gray page-section">
        <div className="page-shell">
          <SectionHeading
            eyebrow="Featured Content"
            title="지금 바로 읽기 좋은 콘텐츠"
            description="핵심 내용과 활용 방법을 빠르게 확인하세요."
          />
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {featuredContent.map((item, index) => (
              <ContentCard
                key={item.slug}
                item={item}
                variant={index === 0 ? "default" : "compact"}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="section-block section-block--pink page-section">
        <div className="page-shell">
          <div className="grid gap-4 lg:grid-cols-[1.05fr_1fr]">
            <div className="support-panel">
              <div>
                <span className="eyebrow">Parent Guide</span>
                <h2 className="section-title mt-4">부모가 먼저, 작게 시작합니다</h2>
                <p className="support-note mt-3">오늘 한 가지, 한 문장만 시작해도 충분합니다.</p>
              </div>
              <ul className="feature-list">
                <li>한 번에 하나의 목표만 정하고, 오늘 바로 짧게 시도합니다.</li>
                <li>두 가지 선택지부터 시작해 아이의 부담을 줄입니다.</li>
                <li>같은 주제의 앱이나 다음 읽을거리로 이어갑니다.</li>
              </ul>
            </div>

            <div className="support-grid md:grid-cols-2">
              <article className="info-panel">
                <span className="eyebrow">Quick Win</span>
                <h3 className="mt-3 text-[1.1rem] font-semibold">짧게 읽고 바로 실천하기</h3>
                <p className="quiet mt-2 text-sm">
                  핵심 문장과 바로 해볼 행동만 담았습니다.
                </p>
              </article>
              <article className="info-panel">
                <span className="eyebrow">Trust &amp; Rhythm</span>
                <h3 className="mt-3 text-[1.1rem] font-semibold">읽기 쉬운 정보 순서</h3>
                <p className="quiet mt-2 text-sm">
                  제목, 요약, 다음 행동 순서로 바로 읽힙니다.
                </p>
              </article>
              <article className="info-panel md:col-span-2">
                <span className="eyebrow">5-minute Routine</span>
                <h3 className="mt-3 text-[1.1rem] font-semibold">오늘의 5분 루틴으로 연결합니다</h3>
                <p className="quiet mt-2 text-sm">
                  콘텐츠를 읽고 나면 다음에 할 일이 자연스럽게 이어집니다.
                </p>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section className="section-block section-block--blue page-section">
        <div className="page-shell">
          <SectionHeading
            eyebrow="Education Apps"
            title="읽고 나서 아이와 바로 연습하세요"
            description="읽은 내용과 연결된 교육 앱을 바로 찾아보세요."
          />
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {featuredApps.map((app) => (
              <AppCard
                key={app.slug}
                app={app}
                ctaLabel={
                  app.slug === "sia-hangul-keyboard"
                    ? "앱 상세 보기"
                    : app.launchMode === "detail"
                      ? "앱 살펴보기"
                      : undefined
                }
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
