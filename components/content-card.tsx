import Link from "next/link";

import { type ContentItem, getCategoryBySlug } from "@/lib/content-data";

type ContentCardProps = {
  item: ContentItem;
};

export function ContentCard({ item }: ContentCardProps) {
  const category = getCategoryBySlug(item.category);

  return (
    <Link
      href={`/content/${item.slug}`}
      className="interactive-lift group rounded-[var(--radius-card)] border border-white/60 card-surface p-5 shadow-card"
    >
      <div
        className="flex min-h-48 items-start justify-between rounded-[1.5rem] p-5"
        style={{ backgroundColor: category?.softColor ?? "#fdf2f8" }}
      >
        <div className="max-w-[11rem]">
          <span className="inline-flex rounded-full bg-white/88 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-slate-700">
            {item.contentType}
          </span>
          <p className="mt-4 text-sm leading-6 text-slate-700">
            {item.coverImage}
          </p>
        </div>
        <span className="text-4xl">{category?.emoji ?? "✨"}</span>
      </div>
      <div className="mt-5">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
          {category?.name}
        </p>
        <h3 className="display-font mt-2 text-2xl font-semibold text-slate-900">
          {item.title}
        </h3>
        <p className="mt-3 min-h-[4.5rem] text-sm leading-6 text-slate-700">{item.summary}</p>
        <div className="mt-5 flex items-center justify-between gap-3">
          <p className="text-xs font-medium text-slate-500">{item.publishedAt}</p>
          <span className="text-sm font-semibold text-slate-800">자세히 보기</span>
        </div>
      </div>
    </Link>
  );
}
