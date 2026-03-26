import Link from "next/link";

import { ContentThumbnail } from "@/components/content-thumbnail";
import { appItems, categories, contentItems, getCategoryBySlug, getContentTypeLabel } from "@/lib/content-data";

const featuredContent = contentItems.slice(0, 3);
const featuredApps = appItems.slice(0, 3);

export default function HomePage() {
  return (
    <div>
      <section className="pb-10 pt-8 md:pb-14 md:pt-11">
        <div className="mx-auto grid w-[min(100%-32px,1200px)] gap-5 lg:grid-cols-[1.35fr_0.95fr]">
          <div className="surface-card p-7 md:p-8">
            <span className="eyebrow">ABA Edu Portal</span>
            <h1 className="display-font mt-4 text-[clamp(1.75rem,3.5vw,2.75rem)] leading-[1.15]">
              발달지연 자녀를 위한 ABA 가이드, 오늘 바로 시작하세요.
            </h1>
            <p className="quiet mt-4 max-w-[60ch]">
              카드뉴스, 가이드, 영상으로 ABA 방법을 배우고 교육 앱으로 바로 연습합니다.
              오늘 읽은 내용을 오늘 아이와 시도할 수 있습니다.
            </p>

            <div className="mt-6 flex flex-wrap gap-2.5">
              <Link href="/categories/language" className="button-primary">
                언어 콘텐츠부터 시작
              </Link>
              <Link href="/apps" className="button-secondary">
                교육 앱 보기
              </Link>
            </div>

            <div className="mt-6 grid gap-2.5 md:grid-cols-3">
              {[
                {
                  title: "5분이면 충분해요",
                  description: "짧은 카드뉴스와 가이드로 핵심만 담았습니다. 긴 설명 없이 바로 적용할 수 있습니다."
                },
                {
                  title: "언제든 꺼내보세요",
                  description: "육아 중 틈새 시간에 스마트폰으로 읽고 바로 써봅니다."
                },
                {
                  title: "읽고 바로 실습",
                  description: "배운 방법을 교육 앱으로 아이와 함께 반복 연습합니다."
                }
              ].map((item) => (
                <div
                  key={item.title}
                  className="rounded-[10px] border border-[var(--border-default)] bg-[var(--bg-subtle)] p-4"
                >
                  <strong className="block text-[14px]">{item.title}</strong>
                  <span className="quiet mt-1 block text-sm">{item.description}</span>
                </div>
              ))}
            </div>
          </div>

          <aside className="surface-card flex flex-col justify-between gap-6 p-7 md:p-8">
            <div>
              <span className="eyebrow">Today&apos;s Flow</span>
              <h2 className="display-font mt-4 text-[1.6rem] leading-[1.2]">
                3단계로 오늘을 시작하세요.
              </h2>
              <p className="quiet mt-3 text-sm">
                처음이라도 괜찮습니다. 아래 순서대로 따라가면 오늘 바로 아이와 시작할 수 있습니다.
              </p>
            </div>

            <div className="grid gap-2.5">
              {[
                ["1. 주제 선택", "언어, 사회성, 일상생활, 행동 관리 중 필요한 주제를 먼저 고릅니다."],
                ["2. 짧은 가이드 읽기", "카드뉴스, 영상, 아티클 중 부담이 적은 형식부터 시작합니다."],
                ["3. 앱으로 이어보기", "읽은 내용을 손쉽게 반복 연습할 수 있는 학습 앱으로 연결합니다."]
              ].map(([title, copy]) => (
                <div key={title} className="rounded-[10px] border border-[var(--border-default)] bg-[var(--bg-subtle)] p-4">
                  <strong className="block text-[14px]">{title}</strong>
                  <p className="quiet mt-1 text-sm">{copy}</p>
                </div>
              ))}
            </div>
          </aside>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="mx-auto w-[min(100%-32px,1200px)]">
          <div className="mb-6">
            <span className="eyebrow">Topic Shortcuts</span>
            <h2 className="display-font mt-3 text-[clamp(1.5rem,2.5vw,2rem)] leading-[1.2]">
              어떤 주제부터 시작할까요?
            </h2>
            <p className="quiet mt-2 max-w-[60ch] text-sm">
              언어, 사회성, 일상생활, 행동 관리 — 아이에게 지금 가장 필요한 주제를 고르세요.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
            {categories.map((category) => (
              <Link
                key={category.slug}
                href={`/categories/${category.slug}`}
                className="surface-card flex min-h-full flex-col gap-4 p-5"
                style={{ background: category.softColor }}
              >
                <span className="grid h-10 w-10 place-items-center rounded-[10px] border border-white/60 bg-white/60 text-[20px]">
                  {category.emoji}
                </span>
                <div>
                  <h3 className="text-[1.05rem] font-semibold">{category.name}</h3>
                  <p className="quiet mt-1.5 text-sm">{category.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-[var(--border-default)] py-12 md:py-16">
        <div className="mx-auto w-[min(100%-32px,1200px)]">
          <div className="mb-6">
            <span className="eyebrow">Featured Content</span>
            <h2 className="display-font mt-3 text-[clamp(1.5rem,2.5vw,2rem)] leading-[1.2]">
              이번 주에 먼저 읽기 좋은 콘텐츠
            </h2>
            <p className="quiet mt-2 max-w-[60ch] text-sm">
              짧게 읽고 오늘 아이와 바로 시도할 수 있는 내용으로 골랐습니다.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {featuredContent.map((item) => {
              const category = getCategoryBySlug(item.category);
              return (
                <article key={item.slug} className="surface-card flex flex-col gap-4 p-5">
                  <ContentThumbnail asset={item.coverAsset} />

                  <div className="flex flex-wrap gap-1.5">
                    <span className="chip !min-h-7 !px-2.5 !text-[12px]">{category?.name}</span>
                    <span className="chip !min-h-7 !px-2.5 !text-[12px]">
                      {getContentTypeLabel(item.contentType)}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-[1.15rem] font-semibold leading-[1.3]">{item.title}</h3>
                    <p className="quiet mt-2 text-sm">{item.summary}</p>
                  </div>

                  <div className="quiet flex flex-wrap items-center gap-2 text-[13px]">
                    <span>{item.publishedAt}</span>
                    <span>·</span>
                    <span>{getContentTypeLabel(item.contentType)}</span>
                  </div>

                  <Link href={`/content/${item.slug}`} className="button-ghost mt-auto text-sm">
                    자세히 읽기 →
                  </Link>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="mx-auto grid w-[min(100%-32px,1200px)] gap-4 lg:grid-cols-[1fr_1.1fr]">
          <div className="surface-card p-6">
            <span className="eyebrow">Parent Guide</span>
            <h2 className="display-font mt-4 text-[1.55rem] leading-[1.2]">
              ABA, 처음이어도 괜찮습니다.
            </h2>
            <p className="quiet mt-3 text-sm">
              오늘 바로 시도할 한 가지부터 시작합니다. 한 문장, 한 동작이면 충분합니다.
            </p>
            <ul className="mt-5 grid gap-2.5 pl-4 text-sm text-[var(--text-secondary)]">
              <li>한 번에 하나의 목표만 정하고, 오늘은 그 장면만 짧게 연습합니다.</li>
              <li>성공을 만들기 쉬운 두 가지 선택지부터 시작해 아이의 부담을 줄입니다.</li>
              <li>읽고 끝내지 않도록, 같은 주제를 반복 연습할 앱이나 다음 읽을거리를 함께 안내합니다.</li>
            </ul>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <article className="surface-card p-5">
              <span className="eyebrow">Quick Win</span>
              <h3 className="mt-3 text-[1.1rem] font-semibold">짧게, 바로, 같은 문장으로</h3>
              <p className="quiet mt-2 text-sm">
                설명이 길어질수록 아이도 보호자도 지칩니다. 한 문장과 한 동작만 기억하면 충분합니다.
              </p>
            </article>
            <article className="surface-card p-5">
              <span className="eyebrow">Repeat &amp; Practice</span>
              <h3 className="mt-3 text-[1.1rem] font-semibold">읽고, 시도하고, 내일 또 오세요</h3>
              <p className="quiet mt-2 text-sm">
                모든 가이드는 5분 안에 읽을 수 있습니다. 오늘 한 번 써보고 내일 다시 돌아와도 됩니다.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="border-y border-[var(--border-default)] py-12 md:py-16">
        <div className="mx-auto w-[min(100%-32px,1200px)]">
          <div className="mb-6">
            <span className="eyebrow">Education Apps</span>
            <h2 className="display-font mt-3 text-[clamp(1.5rem,2.5vw,2rem)] leading-[1.2]">
              읽고 나서 아이와 바로 연습하세요
            </h2>
            <p className="quiet mt-2 max-w-[60ch] text-sm">
              가이드에서 배운 방법을 교육 앱으로 이어서 연습할 수 있습니다.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {featuredApps.map((app) => (
                <article key={app.slug} className="surface-card flex flex-col gap-4 p-5">
                <ContentThumbnail asset={app.thumbnailAsset} />

                <div className="flex flex-wrap gap-1.5">
                  <span
                    className="chip !min-h-7 !px-2.5 !text-[12px]"
                    style={
                      app.status === "live"
                        ? {
                            background: "var(--accent-primary-soft)",
                            borderColor: "rgba(47, 107, 79, 0.18)",
                            color: "var(--accent-primary)"
                          }
                        : {
                            background: "var(--accent-secondary-soft)",
                            borderColor: "rgba(106, 126, 153, 0.18)",
                            color: "var(--accent-secondary)"
                          }
                    }
                  >
                    {app.status === "live" ? "Live" : "Coming Soon"}
                  </span>
                  <span className="chip !min-h-7 !px-2.5 !text-[12px]">{app.ageRange}</span>
                  <span className="chip !min-h-7 !px-2.5 !text-[12px]">{app.sessionLength}</span>
                </div>

                <div>
                  <h3 className="text-[1.15rem] font-semibold leading-[1.3]">{app.name}</h3>
                  <p className="quiet mt-2 text-sm">{app.shortDescription}</p>
                </div>

                <ul className="grid gap-2 pl-4 text-sm text-[var(--text-secondary)]">
                  {app.features.slice(0, 2).map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>

                {app.slug === "sia-hangul-keyboard" ? (
                  <Link href={`/apps/${app.slug}`} className="button-secondary mt-auto text-sm">
                    앱 상세 보기
                  </Link>
                ) : app.launchMode === "detail" ? (
                  <Link href={`/apps/${app.slug}`} className="button-secondary mt-auto text-sm">
                    자세히 보기
                  </Link>
                ) : (
                  <span className="button-secondary mt-auto text-sm" aria-disabled="true">
                    출시 준비 중
                  </span>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="mx-auto w-[min(100%-32px,1200px)]">
          <div className="surface-card p-7 md:p-8">
            <span className="eyebrow">Start Calmly</span>
            <h2 className="display-font mt-3 text-[1.75rem] leading-[1.2]">
              오늘 한 가지 주제만 골라도 충분합니다.
            </h2>
            <p className="quiet mt-3 max-w-[60ch] text-sm">
              어느 주제든, 짧은 가이드 하나로 오늘을 시작할 수 있습니다. 준비가 됐을 때 교육 앱도 함께 써보세요.
            </p>
            <div className="mt-5 flex flex-wrap gap-2.5">
              <Link href="/categories/language" className="button-primary">
                콘텐츠 둘러보기
              </Link>
              <Link href="/about" className="button-secondary">
                서비스 소개 보기
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
