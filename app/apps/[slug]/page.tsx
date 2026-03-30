import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

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
    <div className="mx-auto w-[min(100%-32px,1200px)]">
      <section className="pb-3 pt-12">
        <Link href="/apps" className="button-ghost !px-0">
          앱 목록으로 돌아가기
        </Link>
        <h1 className="display-font mt-4 text-[clamp(2.2rem,4vw,3.4rem)] leading-[1.12] tracking-[-0.04em]">
          {app.name}
        </h1>
        <p className="quiet mt-4 max-w-[60ch] text-lg">{app.shortDescription}</p>
        <div className="mt-5 flex flex-wrap gap-2">
          <span className="chip !min-h-8 !px-3 !text-[13px]">Live</span>
          <span className="chip !min-h-8 !px-3 !text-[13px]">{app.ageRange}</span>
          <span className="chip !min-h-8 !px-3 !text-[13px]">{app.sessionLength}</span>
        </div>
      </section>

      <section className="grid gap-5 py-8 md:grid-cols-[1.05fr_0.95fr] md:py-12">
        <article className="surface-card p-6">
          <div
            className="flex min-h-[220px] flex-col justify-between gap-5 rounded-[18px] p-6"
            style={{
              background: app.thumbnailAsset.background,
              color: app.thumbnailAsset.foreground ?? "var(--text-primary)"
            }}
          >
            <span className="text-[13px] font-bold uppercase tracking-[0.04em]">
              {app.thumbnailAsset.eyebrow}
            </span>
            <div>
              <strong className="visual-title block">{app.thumbnailAsset.title}</strong>
              <p className="mt-2 text-sm leading-6" style={{ color: "inherit", opacity: 0.82 }}>
                {app.thumbnailAsset.description}
              </p>
            </div>
          </div>
        </article>

        <article className="surface-card p-6">
          <span className="eyebrow">How To Use</span>
          <h2 className="mt-3 text-[1.5rem] font-semibold">앱 실행 전 알아두면 좋은 점</h2>
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
    </div>
  );
}
