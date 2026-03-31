import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { ContentCard } from "@/components/content-card";
import { ContentBodyRenderer } from "@/components/content-body-renderer";
import { ContentThumbnail } from "@/components/content-thumbnail";
import { SectionHeading } from "@/components/section-heading";
import {
  getCategoryBySlug,
  getContentBySlug,
  getContentLevelLabel,
  getContentTypeLabel,
  getRelatedContent
} from "@/lib/content-data";

type Props = { params: { slug: string } };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const item = getContentBySlug(params.slug);
  if (!item) return { title: "콘텐츠를 찾을 수 없음" };
  return { title: item.title, description: item.summary };
}

export default function ContentDetailPage({ params }: Props) {
  const item = getContentBySlug(params.slug);
  if (!item) notFound();

  const category = getCategoryBySlug(item.category);
  const relatedItems = getRelatedContent(item.slug, item.category);

  return (
    <div>
      <section className="section-block section-block--white page-section--tight">
        <div className="page-shell">
          <div className="hero-panel hero-grid border-t border-[rgba(17,17,17,0.16)]">
            <span className="eyebrow">{category?.name ?? "콘텐츠"}</span>
            <h1 className="page-title">{item.title}</h1>
            <p className="page-description">{item.summary}</p>
            <div className="intro-actions">
              <Link href={`/categories/${item.category}`} className="button-secondary">
                {category?.name}로 돌아가기
              </Link>
            </div>
            <div className="meta-row">
              <span>{getContentTypeLabel(item.contentType)}</span>
              <span className="meta-divider" aria-hidden="true" />
              <span>{getContentLevelLabel(item.level)}</span>
              <span className="meta-divider" aria-hidden="true" />
              <span>{item.ageRange}</span>
              <span className="meta-divider" aria-hidden="true" />
              <span>{item.publishedAt}</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section-block section-block--gray page-section">
        <div className="page-shell">
          <div className="grid gap-6 lg:grid-cols-[minmax(0,1.1fr)_320px]">
            <div className="space-y-6">
              <article className="content-card">
                <ContentThumbnail asset={item.coverAsset} className="aspect-[1.9/1] w-full" />
                <p className="quiet">{item.summary}</p>
              </article>

              <ContentBodyRenderer item={item} />
            </div>

            <aside className="space-y-4">
              <section className="info-panel">
                <span className="eyebrow">Content Meta</span>
                <h2 className="mt-3 text-[1.1rem] font-semibold">한눈에 보기</h2>
                <div className="mt-4 grid gap-3 text-sm text-[var(--text-secondary)]">
                  <div>카테고리: {category?.name}</div>
                  <div>형식: {getContentTypeLabel(item.contentType)}</div>
                  <div>난이도: {getContentLevelLabel(item.level)}</div>
                  <div>권장 연령: {item.ageRange}</div>
                </div>
              </section>

              <section className="info-panel">
                <h2 className="text-[1.1rem] font-semibold">같은 주제 더 보기</h2>
                <p className="quiet mt-2 text-sm">
                  지금 읽은 주제와 연결되는 다른 콘텐츠를 이어서 볼 수 있습니다.
                </p>
              </section>
            </aside>
          </div>
        </div>
      </section>

      <section className="section-block section-block--blue page-section">
        <div className="page-shell">
          <SectionHeading eyebrow="Related Content" title="다음으로 읽기 좋은 콘텐츠" />
          <div className="grid gap-5 md:grid-cols-2">
            {relatedItems.map((related) => (
              <ContentCard key={related.slug} item={related} variant="compact" />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
