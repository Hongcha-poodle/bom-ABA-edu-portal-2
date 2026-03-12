import type { Metadata } from "next";

import { AppCard } from "@/components/app-card";
import { Container } from "@/components/container";
import { SectionHeader } from "@/components/section-header";
import { appItems } from "@/lib/content-data";

export const metadata: Metadata = {
  title: "교육 앱",
  description: "실사용 앱과 Coming Soon 앱을 한 번에 둘러볼 수 있는 교육 앱 목록입니다."
};

export default function AppsPage() {
  const liveCount = appItems.filter((item) => item.status === "live").length;
  const soonCount = appItems.filter((item) => item.status === "coming-soon").length;

  return (
    <div className="page-shell py-14 sm:py-20" style={{ backgroundColor: "var(--surface-apps)" }}>
      <Container className="relative z-10 space-y-10">
        <section className="rounded-[2rem] border border-white/60 panel-surface px-6 py-8 shadow-card sm:px-10 sm:py-10">
          <SectionHeader
            eyebrow="교육 앱"
            title="앱으로 이어지는 학습 경험을 한눈에 정리했습니다"
            description="실사용 앱과 준비 중인 앱을 구분해 보여주고, 각 앱이 어떤 연령과 세션 길이에 맞는지 바로 비교할 수 있게 구성했습니다."
          />
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <div className="rounded-[1.5rem] bg-slate-900 px-5 py-5 text-white">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/60">
                Live Apps
              </p>
              <p className="display-font mt-3 text-4xl font-semibold">{liveCount}</p>
              <p className="mt-2 text-sm text-white/75">지금 바로 상세를 볼 수 있는 앱</p>
            </div>
            <div className="rounded-[1.5rem] bg-white/82 px-5 py-5 ring-1 ring-white/70">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                Coming Soon
              </p>
              <p className="display-font mt-3 text-4xl font-semibold text-slate-900">
                {soonCount}
              </p>
              <p className="mt-2 text-sm text-slate-600">
                준비 중인 주제와 경험 방향을 미리 확인할 수 있는 앱
              </p>
            </div>
          </div>
        </section>

        <section className="grid gap-5 sm:grid-cols-2">
          {appItems.map((item) => (
            <AppCard key={item.slug} item={item} />
          ))}
        </section>
      </Container>
    </div>
  );
}
