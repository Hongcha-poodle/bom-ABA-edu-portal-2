import Link from "next/link";

import { ContentThumbnail } from "@/components/content-thumbnail";
import {
  getCategoryBySlug,
  getContentLevelLabel,
  getContentTypeLabel,
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

  return (
    <article className={`content-card ${isCompact ? "content-card--compact" : ""}`}>
      <ContentThumbnail
        asset={item.coverAsset}
        className={isCompact ? "content-card__thumb--compact" : undefined}
      />

      <div className="card-chip-row">
        {showCategory && category ? <span className="chip">{category.name}</span> : null}
        <span className="chip">{getContentTypeLabel(item.contentType)}</span>
        <span className="chip">{getContentLevelLabel(item.level)}</span>
        <span className="chip">{item.ageRange}</span>
      </div>

      <div className="card-copy">
        <h3 className="card-title">{item.title}</h3>
        <p className="card-summary">{item.summary}</p>
      </div>

      <div className="meta-row">
        <span>{item.publishedAt}</span>
      </div>

      <Link href={`/content/${item.slug}`} className="button-ghost mt-auto">
        자세히 읽기
      </Link>
    </article>
  );
}
