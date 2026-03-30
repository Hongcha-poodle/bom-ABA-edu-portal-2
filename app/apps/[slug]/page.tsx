import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { AppCard } from "@/components/app-card";
import { PageIntro } from "@/components/page-intro";
import { SectionHeading } from "@/components/section-heading";
import { getAppBySlug } from "@/lib/content-data";

type Props = { params: { slug: string } };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const app = getAppBySlug(params.slug);
  if (!app) return { title: "앱을 찾을 수 없음" };
  return { title: app.name, description: app.shortDescription };
}

export default function AppDetailPage({ params }: Props) {
  const app = getAppBySlug(params.slug);
  if (!app || app.status === "coming-soon") notFound();

  return (
    <div className="page-shell">
      <PageIntro
        eyebrow="Live App"
        title={app.name}
        description={app.shortDescription}
        actions={
          <Link href="/apps" className="button-ghost">
            앱 목록으로 돌아가기
          </Link>
        }
        meta={
          <>
            <span className="chip chip--live">Live</span>
            <span className="chip">{app.ageRange}</span>
            <span className="chip">{app.sessionLength}</span>
          </>
        }
      />

      <section className="page-section--tight grid gap-5 md:grid-cols-[1.02fr_0.98fr]">
        <AppCard app={app} ctaLabel="앱 상세 보기" emphasize />

        <article className="surface-card p-6">
          <span className="eyebrow">How To Use</span>
          <h2 className="section-title mt-3 text-[1.5rem]">앱 실행 전 알아두면 좋은 점</h2>
          <ul className="quiet mt-4 grid gap-2 pl-5">
            {app.features.map((feature) => (
              <li key={feature}>{feature}</li>
            ))}
          </ul>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="#" className="button-primary">
              앱 실행
            </a>
            <Link href="/categories/aba-basics" className="button-secondary">
              관련 콘텐츠 보기
            </Link>
          </div>
        </article>
      </section>

      <section className="page-section">
        <SectionHeading
          eyebrow="Use Flow"
          title="부모가 바로 이해할 수 있게 설계했습니다"
          description="앱 설명, 사용 연령, 실행 CTA가 한 번에 읽히도록 정리했습니다."
        />
        <div className="grid gap-4 md:grid-cols-3">
          <div className="info-panel bg-[var(--bg-surface)]">
            <strong className="block text-[15px]">짧은 세션</strong>
            <p className="quiet mt-2 text-sm">부담 없이 시작할 수 있도록 5~10분 안쪽 흐름을 기본으로 잡습니다.</p>
          </div>
          <div className="info-panel bg-[var(--bg-surface)]">
            <strong className="block text-[15px]">명확한 실행 CTA</strong>
            <p className="quiet mt-2 text-sm">무엇을 눌러야 하는지 한눈에 보이도록 한 개의 primary action만 강조합니다.</p>
          </div>
          <div className="info-panel bg-[var(--bg-surface)]">
            <strong className="block text-[15px]">콘텐츠 연결</strong>
            <p className="quiet mt-2 text-sm">앱 사용 전후로 다시 읽을 수 있는 관련 콘텐츠 동선을 함께 안내합니다.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
