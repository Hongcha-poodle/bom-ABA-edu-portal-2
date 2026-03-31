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
  const typeLabel = getContentTypeLabel(item.contentType);
  const levelLabel = getContentLevelLabel(item.level);

  return (
    <article className={`content-card ${isCompact ? "content-card--compact" : ""}`}>
      <ContentThumbnail
        asset={item.coverAsset}
        className={isCompact ? "content-card__thumb--compact" : undefined}
      />

      <div className="card-frame">
        <div className="card-chip-row">
          {showCategory && category ? <span className="chip">{category.name}</span> : null}
          <span className="chip">{typeLabel}</span>
          <span className="chip">{levelLabel}</span>
          <span className="chip">{item.ageRange}</span>
        </div>

        <div className="card-copy">
          <h3 className="card-title">{item.title}</h3>
          <p className="card-summary">{item.summary}</p>
          <p className="card-supporting">
            오늘 바로 적용할 수 있는 {typeLabel}
          </p>
        </div>

        <div className="meta-row">
          <span>{item.publishedAt}</span>
          <span className="meta-divider" aria-hidden="true" />
          <span>{levelLabel}</span>
        </div>
      </div>

      <Link href={`/content/${item.slug}`} className="button-ghost mt-auto">
        콘텐츠 보기
      </Link>
    </article>
  );
}
