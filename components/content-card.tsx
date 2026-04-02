import Link from "next/link";

import { ContentThumbnail } from "@/components/content-thumbnail";
import {
  getCategoryBySlug,
  type ContentItem
} from "@/lib/content-data";

type ContentCardProps = {
  item: ContentItem;
  variant?: "default" | "compact";
  showCategory?: boolean;
};

export function ContentCard({
  item,
  variant = "default",
  showCategory = true
}: ContentCardProps) {
  const category = getCategoryBySlug(item.category);
  const isCompact = variant === "compact";
  const categoryToneClass = category ? `chip--${category.slug}` : "";

  return (
    <article className={`content-card ${isCompact ? "content-card--compact" : ""}`}>
      <ContentThumbnail
        asset={item.coverAsset}
        className={isCompact ? "content-card__thumb--compact" : undefined}
      />

      <div className="card-frame">
        <div className="card-chip-row">
          {showCategory && category ? <span className={`chip ${categoryToneClass}`}>{category.name}</span> : null}
          <span className="chip">{item.ageRange}</span>
        </div>

        <div className="card-copy">
          <h3 className="card-title">{item.title}</h3>
          <p className="card-summary">{item.summary}</p>
        </div>
      </div>

      <Link href={`/content/${item.slug}`} className="button-ghost button-ghost--cta mt-auto">
        5분 가이드 읽기
      </Link>
    </article>
  );
}
