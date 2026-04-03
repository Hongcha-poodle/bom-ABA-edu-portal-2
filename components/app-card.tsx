import Link from "next/link";
import type { Route } from "next";

import { ContentThumbnail } from "@/components/content-thumbnail";
import type { AppItem } from "@/lib/content-data";

type AppCardProps = {
  app: AppItem;
  ctaLabel?: string;
  emphasize?: boolean;
  variant?: "default" | "home";
};

export function AppCard({ app, ctaLabel, emphasize = false, variant = "default" }: AppCardProps) {
  const isLive = app.status === "live";
  const isHome = variant === "home";
  const href = app.launchMode === "detail" ? (`/apps/${app.slug}` as Route) : undefined;

  return (
    <article className={`app-card ${emphasize ? "app-card--emphasize" : ""} ${isHome ? "app-card--home" : ""}`}>
      <ContentThumbnail asset={app.thumbnailAsset} className={isHome ? "content-card__thumb--compact" : "app-card__thumb"} />

      <div className="card-chip-row">
        <span className={`chip ${isLive ? "chip--live" : "chip--soon"}`}>
          {isLive ? "Live" : "Coming Soon"}
        </span>
        {isHome ? null : <span className="chip">{app.ageRange}</span>}
        {isHome ? null : <span className="chip">{app.sessionLength}</span>}
      </div>

      <div className="card-copy">
        <h3 className="card-title">{app.name}</h3>
        <p className="card-summary">{isHome ? app.homeSummary : app.shortDescription}</p>
      </div>

      {isHome ? (
        <div className="meta-row">
          <span>{app.ageRange}</span>
          <span className="meta-divider" aria-hidden="true" />
          <span>{app.sessionLength}</span>
        </div>
      ) : (
        <ul className="feature-list">
          {app.features.slice(0, 2).map((feature) => (
            <li key={feature}>{feature}</li>
          ))}
        </ul>
      )}

      {href ? (
        <Link href={href} className={`${isHome ? "button-ghost button-ghost--cta" : "button-secondary"} mt-auto`}>
          {ctaLabel ?? (isHome ? "앱 보기" : "우리 아이와 해보기")}
        </Link>
      ) : (
        <span className={`${isHome ? "button-ghost button-ghost--cta" : "button-secondary"} mt-auto`} aria-disabled="true">
          {isHome ? "출시 예정" : "출시 준비 중"}
        </span>
      )}
    </article>
  );
}
