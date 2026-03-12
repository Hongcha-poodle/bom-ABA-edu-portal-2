import type { Metadata } from "next";
import type { Route } from "next";
import { notFound } from "next/navigation";

import { Container } from "@/components/container";
import { CTAButton } from "@/components/cta-button";
import { getAppBySlug } from "@/lib/content-data";

type AppDetailPageProps = {
  params: { slug: string };
};

export async function generateMetadata({
  params
}: AppDetailPageProps): Promise<Metadata> {
  const app = getAppBySlug(params.slug);

  if (!app) {
    return {
      title: "앱을 찾을 수 없음"
    };
  }

  return {
    title: app.name,
    description: app.shortDescription
  };
}

export default function AppDetailPage({ params }: AppDetailPageProps) {
  const app = getAppBySlug(params.slug);

  if (!app || app.status === "coming-soon") {
    notFound();
  }

  return (
    <div className="page-shell py-14 sm:py-20" style={{ background: "var(--surface-hero)" }}>
      <Container className="relative z-10">
        <section className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-stretch">
          <div className="rounded-[2rem] border border-white/60 panel-surface p-6 shadow-card sm:p-8">
            <p className="text-sm font-semibold text-slate-600">← 앱 목록에서 이동</p>
            <div className="mt-4 flex items-center gap-4">
              <span className="text-5xl">{app.thumbnail}</span>
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-600">
                  Live App
                </p>
                <h1 className="display-font text-4xl font-semibold text-slate-900">
                  {app.name}
                </h1>
              </div>
            </div>
            <p className="mt-6 text-base leading-8 text-slate-700">
              {app.shortDescription}
            </p>
            <div className="mt-6 rounded-[1.5rem] bg-white/82 p-5 ring-1 ring-[color:var(--border)]">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                이 앱이 좋은 상황
              </p>
              <p className="mt-3 text-sm leading-7 text-slate-700">
                짧은 세션 안에서 아이의 참여를 유지하면서 시각적 단서와 즉시 피드백이
                필요한 경우에 적합합니다.
              </p>
            </div>
            <dl className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-[1.5rem] bg-fuchsia-50 px-5 py-4">
                <dt className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                  추천 연령
                </dt>
                <dd className="mt-2 text-lg font-semibold text-slate-900">
                  {app.ageRange}
                </dd>
              </div>
              <div className="rounded-[1.5rem] bg-teal-50 px-5 py-4">
                <dt className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                  세션 길이
                </dt>
                <dd className="mt-2 text-lg font-semibold text-slate-900">
                  {app.sessionLength}
                </dd>
              </div>
            </dl>
            <ul className="mt-8 space-y-3 text-base leading-7 text-slate-700">
              {app.features.map((feature) => (
                <li key={feature} className="flex gap-3">
                  <span className="mt-1 text-fuchsia-600">•</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-wrap gap-3">
              <CTAButton href="/apps">앱 목록으로</CTAButton>
              <CTAButton
                href={`/apps/${app.slug}#fullscreen-preview` as Route}
                variant="secondary"
              >
                전체화면 미리보기
              </CTAButton>
            </div>
          </div>

          <div
            id="fullscreen-preview"
            className="overflow-hidden rounded-[2rem] border border-slate-200 bg-slate-950 shadow-card"
          >
            <div className="flex items-center justify-between border-b border-white/10 px-5 py-4 text-white/80">
              <span className="text-sm font-medium">Immersive Preview</span>
              <span className="rounded-full bg-white/10 px-3 py-1 text-xs uppercase tracking-[0.18em]">
                v1 mock
              </span>
            </div>
            <div className="flex min-h-[420px] flex-col justify-between bg-[radial-gradient(circle_at_top,rgba(94,234,212,0.28),transparent_32%),radial-gradient(circle_at_bottom_right,rgba(232,121,249,0.28),transparent_36%),linear-gradient(160deg,#020617_0%,#111827_100%)] p-6 text-white sm:min-h-[540px] sm:p-8">
              <div>
                <p className="display-font text-3xl font-semibold">{app.name}</p>
                <p className="mt-3 max-w-md text-sm leading-7 text-white/75">
                  실제 앱 임베드는 다음 단계에서 붙일 예정입니다. 현재는 포털 내
                  몰입형 실행 경험의 구조와 진입 CTA의 기대감을 먼저 검증합니다.
                </p>
              </div>
              <div className="grid gap-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-[1.5rem] bg-white/10 p-5 backdrop-blur">
                    <p className="text-xs uppercase tracking-[0.18em] text-white/60">
                      Preview Panel
                    </p>
                    <p className="mt-4 text-lg font-semibold">터치 친화적 UI</p>
                    <p className="mt-2 text-sm text-white/75">
                      큰 버튼, 짧은 세션, 명확한 시각 강화 구조를 적용합니다.
                    </p>
                  </div>
                  <div className="rounded-[1.5rem] bg-white/10 p-5 backdrop-blur">
                    <p className="text-xs uppercase tracking-[0.18em] text-white/60">
                      Launch State
                    </p>
                    <p className="mt-4 text-lg font-semibold">포털 내 전체화면 진입</p>
                    <p className="mt-2 text-sm text-white/75">
                      앱 실행 버튼과 전환 애니메이션은 실앱 연동 단계에서 확장합니다.
                    </p>
                  </div>
                </div>
                <div className="rounded-[1.5rem] bg-white/12 p-5 backdrop-blur">
                  <p className="text-xs uppercase tracking-[0.18em] text-white/60">
                    Parent Benefit
                  </p>
                  <p className="mt-4 text-lg font-semibold">
                    앱 사용 전 기대할 경험을 먼저 확인
                  </p>
                  <p className="mt-2 max-w-2xl text-sm text-white/75">
                    연령, 세션 길이, 주요 학습 방식과 함께 어떤 상호작용이 들어갈지
                    미리 보여주어 실제 실행 전 판단 부담을 줄입니다.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Container>
    </div>
  );
}
