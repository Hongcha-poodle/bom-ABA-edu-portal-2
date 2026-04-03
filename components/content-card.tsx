import Link from "next/link";

import { ContentThumbnail } from "@/components/content-thumbnail";
import {
  getCategoryBySlug,
  type ContentItem
} from "@/lib/content-data";

type ContentCardProps = {
  item: ContentItem;
  variant?: "default" | "compact" | "home";
  showCategory?: boolean;
};

export function ContentCard({
  item,
  variant = "default",
  showCategory = true
}: ContentCardProps) {
  const category = getCategoryBySlug(item.category);
  const isCompact = variant === "compact";
  const isHome = variant === "home";
  const categoryToneClass = category ? `chip--${category.slug}` : "";
  const homeTags = [category?.shortName, item.ageRange, "5분"].filter(Boolean);

  return (
    <article className={`content-card ${isCompact ? "content-card--compact" : ""} ${isHome ? "content-card--home" : ""}`}>
      <ContentThumbnail
        asset={item.coverAsset}
        className={isCompact || isHome ? "content-card__thumb--compact" : undefined}
      />

      <div className="card-frame">
        <div className="card-chip-row">
          {isHome
            ? homeTags.map((tag) => (
                <span key={tag} className={`chip ${tag === category?.shortName ? categoryToneClass : ""}`}>
                  {tag}
                </span>
              ))
            : (
              <>
                {showCategory && category ? <span className={`chip ${categoryToneClass}`}>{category.name}</span> : null}
                <span className="chip">{item.ageRange}</span>
              </>
            )}
        </div>

        <div className="card-copy">
          <h3 className="card-title">{item.title}</h3>
          <p className="card-summary">{isHome ? item.homeSummary : item.summary}</p>
        </div>
      </div>

      <Link href={`/content/${item.slug}`} className="button-ghost button-ghost--cta mt-auto">
        {isHome ? "보기" : "5분 가이드 읽기"}
      </Link>
    </article>
  );
}
