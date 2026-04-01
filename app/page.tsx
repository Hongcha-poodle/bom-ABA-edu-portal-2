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
              <h1 className="page-title">
                오늘 배운 ABA, 지금 바로 우리 아이와 시작해볼까요?
              </h1>
              <p className="hero-summary">
                복잡한 이론은 덜어내고, 아이의 일상에 꼭 맞는 실전 팁과 맞춤형 교육 앱만 모았어요.
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
                  ["한눈에 쏙", "아이 연령과 상황에 맞는 핵심만 5분 안에 파악해요."],
                  ["오늘 당장 시도", "거창한 목표 대신, 오늘 아이와 해볼 수 있는 작은 행동 하나를 제안해요."],
                  ["놀이로 자연스럽게", "배운 내용을 아이가 좋아하는 앱과 연결해 즐겁게 복습해요."]
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
              <h2 className="section-title mt-4">지금 우리 아이에게 가장 필요한 건 무엇인가요?</h2>
              <p className="quiet mt-3 text-sm">
                막막할 땐 여기서 시작해 보세요. 아이의 속도에 맞춘 다음 단계를 안내해 드립니다.
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
                  <h3 className="card-title">{category.name}</h3>
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
                <span className="eyebrow">작은 성공부터 시작해요</span>
                <h3 className="mt-3 visual-title">부담 없이 읽고, 오늘 당장 해볼 수 있는 딱 한 가지만 제안할게요.</h3>
                <p className="quiet mt-2 text-sm">
                </p>
              </article>
              <article className="info-panel">
                <span className="eyebrow">바쁜 부모를 위한 맞춤 요약</span>
                <h3 className="mt-3 visual-title">핵심만 먼저, 다음 행동은 명확하게.</h3>
                <p className="quiet mt-2 text-sm">
                  읽는 시간을 아껴드려요.
                </p>
              </article>
              <article className="info-panel md:col-span-2">
                <span className="eyebrow">기적을 만드는 하루 5분</span>
                <h3 className="mt-3 visual-title">글을 읽고 난 뒤, 아이와 자연스럽게 이어갈 5분 놀이를 알려드려요.</h3>
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
            title="배운 내용, 교육 앱으로 즐겁게 이어가요"
            description="읽은 내용과 연결된 교육 앱을 바로 찾아보세요."
          />
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {featuredApps.map((app) => (
              <AppCard
                key={app.slug}
                app={app}
                ctaLabel={
                  app.slug === "sia-hangul-keyboard"
                    ? "우리 아이와 해보기"
                    : app.launchMode === "detail"
                      ? "어떤 놀이인지 보기"
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
