import Link from "next/link";
import type { Route } from "next";

import { ContentThumbnail } from "@/components/content-thumbnail";
import type { AppItem } from "@/lib/content-data";

type AppCardProps = {
  app: AppItem;
  ctaLabel?: string;
  emphasize?: boolean;
};

export function AppCard({ app, ctaLabel, emphasize = false }: AppCardProps) {
  const isLive = app.status === "live";
  const href = app.launchMode === "detail" ? (`/apps/${app.slug}` as Route) : undefined;

  return (
    <article className={`app-card ${emphasize ? "app-card--emphasize" : ""}`}>
      <ContentThumbnail asset={app.thumbnailAsset} className="app-card__thumb" />

      <div className="card-chip-row">
        <span className={`chip ${isLive ? "chip--live" : "chip--soon"}`}>
          {isLive ? "Live" : "Coming Soon"}
        </span>
        <span className="chip">{app.ageRange}</span>
        <span className="chip">{app.sessionLength}</span>
      </div>

      <div className="card-copy">
        <h3 className="card-title">{app.name}</h3>
        <p className="card-summary">{app.shortDescription}</p>
      </div>

      <ul className="feature-list">
        {app.features.slice(0, 2).map((feature) => (
          <li key={feature}>{feature}</li>
        ))}
      </ul>

      {href ? (
        <Link href={href} className="button-secondary mt-auto">
          {ctaLabel ?? "앱 상세 보기"}
        </Link>
      ) : (
        <span className="button-secondary mt-auto" aria-disabled="true">
          출시 준비 중
        </span>
      )}
    </article>
  );
}
