import Link from "next/link";

import { AppCard } from "@/components/app-card";
import { HomeContentGrid } from "@/components/home-content-grid";
import { HomeHero } from "@/components/home-hero";
import { SectionHeading } from "@/components/section-heading";
import { appItems, categories, contentItems } from "@/lib/content-data";

const featuredApps = appItems.slice(0, 3);
const featuredContent = contentItems.slice(0, 3);
const categoryToneClass = [
  "category-shortcut--primary",
  "category-shortcut--secondary",
  "category-shortcut--warm"
];
const homeCategoryCards = [
  {
    slug: "language",
    title: "말문 트기",
    description: "요청하기, 따라 말하기, 첫 언어 표현"
  },
  {
    slug: "social",
    title: "사회성",
    description: "차례 지키기, 기다리기, 함께 놀이"
  },
  {
    slug: "daily-living",
    title: "생활 루틴",
    description: "식사, 옷 입기, 정리, 양치"
  },
  {
    slug: "behavior",
    title: "행동 이해",
    description: "행동의 이유 관찰, 대체행동 지도"
  },
  {
    slug: "aba-basics",
    title: "ABA 기초",
    description: "강화, 프롬프트, 실천 원리"
  }
] as const;

export default function HomePage() {
  return (
    <div>
      <HomeHero />

      <section className="section-block section-block--yellow page-section">
        <div className="page-shell">
          <div className="section-band">
            <SectionHeading
              eyebrow="주제 선택"
              title="지금 필요한 주제를 선택해"
              description="바로 시작할 주제를 하나 고르면 다음 콘텐츠로 자연스럽게 이어집니다."
            />

            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
              {homeCategoryCards.map((card, index) => {
                const category = categories.find((item) => item.slug === card.slug);

                return (
                  <Link
                    key={card.slug}
                    href={`/categories/${card.slug}`}
                    className={`category-shortcut ${categoryToneClass[index % categoryToneClass.length]}`}
                  >
                    <span className="category-shortcut__badge">{category?.emoji}</span>
                    <div>
                      <h3 className="card-title">{card.title}</h3>
                      <p className="quiet mt-1.5 text-sm">{card.description}</p>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <HomeContentGrid
        title="먼저 보기 좋은 추천 콘텐츠"
        description="홈에서는 가볍게 비교하고, 자세한 내용은 상세 페이지에서 이어서 보세요."
        items={featuredContent}
      />

      <section className="section-block section-block--blue page-section">
        <div className="page-shell">
          <div className="section-band">
            <SectionHeading
              eyebrow="교육 앱"
              title="배운 내용, 교육 앱으로 바로 이어가요"
              description="읽은 주제와 연결된 앱을 바로 찾아 짧게 반복 연습해보세요."
            />
            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {featuredApps.map((app) => (
                <AppCard
                  key={app.slug}
                  app={app}
                  variant="home"
                  ctaLabel={
                    app.launchMode === "detail" ? "앱 보기" : undefined
                  }
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-block section-block--pink page-section">
        <div className="page-shell">
          <div className="section-band section-band--soft">
            <p className="support-note">
              부모가 쉽게 이해하고 바로 시도할 수 있도록, 콘텐츠와 앱을 한 흐름으로 연결한 실천형 포털
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
