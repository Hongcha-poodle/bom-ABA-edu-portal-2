import Link from "next/link";

import { AppCard } from "@/components/app-card";
import { HomeHero } from "@/components/home-hero";
import { HomeWizard } from "@/components/home-wizard";
import { SectionHeading } from "@/components/section-heading";
import { appItems, categories } from "@/lib/content-data";

const featuredApps = appItems.slice(0, 3);
const categoryToneClass = [
  "category-shortcut--primary",
  "category-shortcut--secondary",
  "category-shortcut--warm"
];

export default function HomePage() {
  return (
    <div>
      <HomeHero />
      <HomeWizard />

      <section className="section-block section-block--yellow page-section">
        <div className="page-shell">
          <div className="section-band">
            <SectionHeading
              eyebrow="주제 바로가기"
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
        </div>
      </section>

      <section className="section-block section-block--pink page-section">
        <div className="page-shell">
          <div className="section-band section-band--soft">
            <div className="grid gap-4 lg:grid-cols-[1.05fr_1fr]">
              <div className="support-panel">
                <div>
                  <span className="eyebrow">부모 가이드</span>
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
                  <p className="quiet mt-2 text-sm">복잡한 설명보다 지금 바로 따라 할 수 있는 행동을 먼저 보여드립니다.</p>
                </article>
                <article className="info-panel">
                  <span className="eyebrow">바쁜 부모를 위한 맞춤 요약</span>
                  <h3 className="mt-3 visual-title">핵심만 먼저, 다음 행동은 명확하게.</h3>
                  <p className="quiet mt-2 text-sm">
                    읽는 시간을 아껴드리고, 다음 단계가 막히지 않게 이어드립니다.
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
        </div>
      </section>

      <section className="section-block section-block--blue page-section">
        <div className="page-shell">
          <div className="section-band">
            <SectionHeading
              eyebrow="교육 앱"
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
        </div>
      </section>
    </div>
  );
}
