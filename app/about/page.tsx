import type { Metadata } from "next";
import type { Route } from "next";

import { Container } from "@/components/container";
import { CTAButton } from "@/components/cta-button";
import { SectionHeader } from "@/components/section-header";

export const metadata: Metadata = {
  title: "About",
  description: "ABA Edu Portal의 미션과 운영 방향을 소개합니다."
};

export default function AboutPage() {
  return (
    <div className="page-shell py-14 sm:py-20" style={{ background: "var(--surface-about)" }}>
      <Container className="relative z-10 space-y-10">
        <section className="rounded-[2rem] border border-white/60 panel-surface px-6 py-8 shadow-card sm:px-10 sm:py-10">
          <SectionHeader
            eyebrow="About"
            title="부모가 덜 막막하도록, 정보는 더 실용적으로"
            description="ABA Edu Portal은 발달지연 아동 부모가 짧고 선명한 콘텐츠로 실천 방법을 빠르게 익히도록 돕는 것을 목표로 합니다."
          />
        </section>

        <section className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          <article className="rounded-[2rem] border border-white/60 card-surface p-6 shadow-card sm:p-8">
            <h2 className="display-font text-3xl font-semibold text-slate-900">
              우리가 만드는 경험
            </h2>
            <div className="mt-6 space-y-5 text-base leading-8 text-slate-700">
              <p>
                부모가 처음 ABA를 접할 때 가장 필요한 것은 긴 이론보다 바로 해볼 수
                있는 구조화된 실천 예시입니다. 그래서 이 포털은 카드뉴스, 짧은 글,
                영상, 앱 소개를 같은 톤 안에서 연결합니다.
              </p>
              <p>
                콘텐츠는 언어, 사회성, 일상생활, 행동 관리처럼 실제 양육 장면과 가까운
                주제 중심으로 구성하고, 각 상세 페이지에서 바로 다음 읽을거리를
                제안합니다.
              </p>
              <p>
                장기적으로는 Notion 기반 운영 구조와 실제 학습 앱 실행 경험을 붙여
                하나의 부모 지원 허브로 확장할 계획입니다.
              </p>
            </div>
          </article>

          <aside className="space-y-6">
            <div className="rounded-[2rem] border border-white/60 bg-slate-900 p-6 text-white shadow-card sm:p-8">
              <p className="text-sm uppercase tracking-[0.18em] text-white/70">
                운영자 프로필
              </p>
              <p className="display-font mt-4 text-3xl font-semibold">ABA 콘텐츠 팀</p>
              <p className="mt-4 text-sm leading-7 text-white/78">
                부모 교육, 시각 자료 설계, 앱 경험 설계를 함께 다루는 소규모 팀으로
                가정에서 바로 실행 가능한 자료를 우선으로 만듭니다.
              </p>
            </div>

            <div className="rounded-[2rem] border border-white/60 card-surface p-6 shadow-card sm:p-8">
              <p className="text-sm uppercase tracking-[0.18em] text-slate-500">연락처</p>
              <p className="mt-4 text-lg font-semibold text-slate-900">
                hello@aba-edu-portal.local
              </p>
              <p className="mt-2 text-sm leading-7 text-slate-600">
                제휴, 콘텐츠 제안, 앱 협업 문의는 위 주소로 받습니다.
              </p>
              <div className="mt-6">
                <CTAButton href="/apps">교육 앱 살펴보기</CTAButton>
              </div>
            </div>

            <div className="rounded-[2rem] bg-white/82 p-6 shadow-soft ring-1 ring-white/70 sm:p-8">
              <p className="text-sm uppercase tracking-[0.18em] text-slate-500">추천 시작점</p>
              <p className="display-font mt-4 text-2xl font-semibold text-slate-900">
                처음 방문했다면 언어 카테고리부터
              </p>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                가장 빠르게 적용해보기 쉬운 언어 루틴 콘텐츠를 우선 노출하는 흐름을
                기본 추천으로 둡니다.
              </p>
              <div className="mt-5">
                <CTAButton href={"/categories/language" as Route} variant="secondary">
                  언어 콘텐츠 보기
                </CTAButton>
              </div>
            </div>
          </aside>
        </section>
      </Container>
    </div>
  );
}
