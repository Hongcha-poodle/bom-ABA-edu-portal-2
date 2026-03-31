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
    <div className="page-shell">
      <section className="page-section--tight">
        <div className="hero-shell">
          <div className="hero-panel hero-grid">
            <span className="eyebrow">Parent-first ABA Guide</span>
            <p className="hero-kicker">부모가 바로 판단하고 시작할 수 있는 흐름</p>
            <h1 className="page-title text-[clamp(2.1rem,4vw,3.5rem)]">
              필요한 정보만 빠르게 읽고,
              <br />
              아이와 바로 실천하세요
            </h1>
            <p className="hero-summary">
              ABA 핵심 개념부터 생활 적용 예시, 교육 앱까지 한 흐름으로 정리했습니다.
            </p>

            <div className="intro-actions pt-2">
              <Link href="/categories/aba-basics" className="button-primary">
                콘텐츠 바로 보기
              </Link>
              <Link href="/apps" className="button-secondary">
                교육 앱 둘러보기
              </Link>
            </div>

            <div className="hero-facts pt-3">
              {[
                {
                  title: "빠른 판단",
                  description:
                    "연령·읽기 시간·핵심 효용을 먼저 보여줍니다."
                },
                {
                  title: "실행 중심",
                  description:
                    "오늘 해볼 한 가지와 다음 행동을 함께 제안합니다."
                },
                {
                  title: "차분한 화면",
                  description:
                    "신뢰감 있는 구성과 여백으로 정보가 잘 읽히게 설계했습니다."
                }
              ].map((item) => (
                <div key={item.title} className="hero-fact">
                  <strong>{item.title}</strong>
                  <span>{item.description}</span>
                </div>
              ))}
            </div>
          </div>

          <aside className="hero-panel flex flex-col justify-between gap-6">
            <div>
              <span className="eyebrow">Today&apos;s Start</span>
              <h2 className="section-title mt-4 text-[1.7rem]">필요한 순서만 담았습니다</h2>
              <p className="quiet mt-3 text-sm">
                우리 아이에게 맞는 것, 시작 방법, 다음 단계를 한 번에 확인하세요.
              </p>
            </div>

            <div className="hero-checklist">
              {[
                [
                  "1. 지금 가장 급한 장면을 고르세요",
                  "언어, 사회성, 생활 루틴 등 막히는 장면을 기준으로 탐색합니다."
                ],
                [
                  "2. 5분 안에 핵심만 읽으세요",
                  "카드뉴스, 영상, 아티클 중 집중할 수 있는 형식으로 시작합니다."
                ],
                [
                  "3. 바로 실습으로 이어가세요",
                  "같은 주제의 앱이나 다음 가이드로 연결해 반복 연습합니다."
                ]
              ].map(([title, copy]) => (
                <article key={title}>
                  <strong>{title}</strong>
                  <p>{copy}</p>
                </article>
              ))}
            </div>

            <div className="info-panel">
              <span className="eyebrow">Parent Note</span>
              <p className="quiet mt-3 text-sm">
                ABA가 처음이어도 괜찮습니다. 집에서 바로 적용할 수 있는 장면과 문장으로 정리했습니다.
              </p>
            </div>
          </aside>
        </div>
      </section>

      <section className="page-section">
        <div className="rounded-[32px] bg-[#ffd84d] p-6 md:p-8">
          <SectionHeading
            eyebrow="Topic Shortcuts"
            title="어떤 주제부터 시작할까요?"
            description="지금 가장 필요한 장면을 고르세요."
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
                  <span className="category-shortcut__meta mt-3 inline-block">
                    바로 살펴보기
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="page-section page-section--bordered">
        <div className="rounded-[32px] bg-[#f3f5f7] p-6 md:p-8">
          <SectionHeading
            eyebrow="Featured Content"
            title="지금 바로 읽기 좋은 콘텐츠"
            description="핵심 효용과 적용 장면을 빠르게 확인하세요."
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

      <section className="page-section">
        <div className="grid gap-4 lg:grid-cols-[1.05fr_1fr]">
          <div className="support-panel">
            <div>
              <span className="eyebrow">Parent Guide</span>
              <h2 className="section-title mt-4 text-[1.7rem]">부모가 먼저 안심하고 시작합니다</h2>
              <p className="support-note mt-3">
                오늘 한 장면, 한 문장만 정해도 충분합니다.
              </p>
            </div>
            <ul className="feature-list">
              <li>한 번에 하나의 목표, 오늘 그 장면만 짧게 연습합니다.</li>
              <li>두 가지 선택지부터 시작해 아이의 부담을 줄입니다.</li>
              <li>같은 주제의 앱이나 다음 읽을거리로 이어갑니다.</li>
            </ul>
          </div>

          <div className="support-grid md:grid-cols-2">
            <article className="info-panel">
              <span className="eyebrow">Quick Win</span>
              <h3 className="mt-3 text-[1.1rem] font-semibold">짧게 읽고 바로 써보는 구조</h3>
              <p className="quiet mt-2 text-sm">
                핵심 문장과 바로 해볼 행동만 남겨 시작 장벽을 낮췄습니다.
              </p>
            </article>
            <article className="info-panel">
              <span className="eyebrow">Trust &amp; Rhythm</span>
              <h3 className="mt-3 text-[1.1rem] font-semibold">차분하고 신뢰감 있는 정보 흐름</h3>
              <p className="quiet mt-2 text-sm">
                제목, 요약, 다음 행동이 먼저 보이도록 정리했습니다.
              </p>
            </article>
            <article className="info-panel md:col-span-2">
              <span className="eyebrow">5-minute Routine</span>
              <h3 className="mt-3 text-[1.1rem] font-semibold">오늘의 5분 루틴으로 연결합니다</h3>
              <p className="quiet mt-2 text-sm">
                콘텐츠와 앱을 같은 흐름으로 이어 다음 행동을 쉽게 선택할 수 있게 했습니다.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="page-section page-section--bordered">
        <div className="rounded-[32px] bg-[#cfe8ff] p-6 md:p-8">
          <SectionHeading
            eyebrow="Education Apps"
            title="읽고 나서 아이와 바로 연습하세요"
            description="같은 흐름의 교육 앱으로 바로 이어서 연습하세요."
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
