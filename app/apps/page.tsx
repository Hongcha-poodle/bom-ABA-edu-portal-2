import type { Metadata } from "next";
import Link from "next/link";
import type { Route } from "next";

import { appItems } from "@/lib/content-data";

export const metadata: Metadata = { title: "교육 앱" };

function AppCard({ slug, eyebrow, title, description, name, shortDescription, href, live }: {
  slug: string;
  eyebrow: string;
  title: string;
  description: string;
  name: string;
  shortDescription: string;
  href?: Route;
  live: boolean;
}) {
  const app = appItems.find((item) => item.slug === slug);
  if (!app) return null;

  return (
    <article className="surface-card flex flex-col gap-5 p-6">
      <div
        className="flex min-h-[180px] flex-col justify-between gap-5 rounded-[18px] p-5"
        style={{
          background: app.thumbnailAsset.background,
          color: app.thumbnailAsset.foreground ?? "var(--text-primary)"
        }}
      >
        <span className="text-[13px] font-bold uppercase tracking-[0.04em]">{eyebrow}</span>
        <div>
          <strong className="visual-title block">{title}</strong>
          <p className="mt-2 text-sm leading-6" style={{ color: "inherit", opacity: 0.82 }}>
            {description}
          </p>
        </div>
      </div>

      <div className="flex flex-wrap gap-2">
        <span
          className="chip !min-h-8 !px-3 !text-[13px]"
          style={
            live
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
          {live ? "Live" : "Coming Soon"}
        </span>
        <span className="chip !min-h-8 !px-3 !text-[13px]">{app.ageRange}</span>
      </div>

      <div>
        <h2 className="text-[1.4rem] font-semibold leading-[1.22]">{name}</h2>
        <p className="quiet mt-3">{shortDescription}</p>
      </div>

      {href ? (
        <Link href={href} className="button-secondary mt-auto">
          앱 상세 보기
        </Link>
      ) : (
        <span className="button-secondary mt-auto" aria-disabled="true">
          출시 준비 중
        </span>
      )}
    </article>
  );
}

export default function AppsPage() {
  const liveApps = appItems.filter((item) => item.status === "live");
  const upcomingApps = appItems.filter((item) => item.status === "coming-soon");

  return (
    <div className="mx-auto w-[min(100%-32px,1200px)]">
      <section className="pb-3 pt-12">
        <span className="eyebrow">Apps List</span>
        <h1 className="display-font mt-4 text-[clamp(2.2rem,4vw,3.4rem)] leading-[1.12] tracking-[-0.04em]">
          읽은 내용을 아이와 직접 연습하는 교육 앱
        </h1>
        <p className="quiet mt-4 max-w-[60ch] text-lg">
          지금 바로 사용할 수 있는 앱과 곧 출시될 앱을 함께 소개합니다.
        </p>
      </section>

      <section className="py-8 md:py-12">
        <div className="mb-7">
          <h2 className="display-font text-[clamp(1.9rem,4vw,2.5rem)] leading-[1.15]">
            지금 사용 가능한 앱
          </h2>
          <p className="quiet mt-3">아이와 함께 지금 바로 시작할 수 있습니다.</p>
        </div>
        <div className="grid gap-5 md:grid-cols-2">
          {liveApps.map((app) => (
            <AppCard
              key={app.slug}
              slug={app.slug}
              eyebrow={app.thumbnailAsset.eyebrow}
              title={app.thumbnailAsset.title}
              description={app.thumbnailAsset.description}
              name={app.name}
              shortDescription={app.shortDescription}
              href={`/apps/${app.slug}` as Route}
              live
            />
          ))}
        </div>
      </section>

      <section className="border-t border-[rgba(217,222,214,0.88)] py-8 md:py-12">
        <div className="mb-7">
          <h2 className="display-font text-[clamp(1.9rem,4vw,2.5rem)] leading-[1.15]">곧 만날 수 있는 앱</h2>
          <p className="quiet mt-3">준비 중인 앱도 미리 살펴보고 학습 계획을 세워보세요.</p>
        </div>
        <div className="grid gap-5 md:grid-cols-2">
          {upcomingApps.map((app) => (
            <AppCard
              key={app.slug}
              slug={app.slug}
              eyebrow={app.thumbnailAsset.eyebrow}
              title={app.thumbnailAsset.title}
              description={app.thumbnailAsset.description}
              name={app.name}
              shortDescription={app.shortDescription}
              live={false}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
