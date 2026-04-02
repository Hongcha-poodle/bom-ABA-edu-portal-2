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
          <div className="hero-panel hero-panel--narrow hero-grid">
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
          <div className="detail-grid">
            <div className="space-y-6">
              <article className="content-card">
                <ContentThumbnail asset={item.coverAsset} className="aspect-[1.9/1] w-full" />
                <p className="quiet">{item.summary}</p>
              </article>

              <ContentBodyRenderer item={item} />
            </div>

            <aside className="space-y-4">
              <section className="info-panel">
                <span className="eyebrow">콘텐츠 정보</span>
                <h2 className="mt-3 text-[1.1rem] font-medium">한눈에 보기</h2>
                <div className="info-list mt-4">
                  <div className="info-list__item">
                    <span className="info-list__label">카테고리</span>
                    <span className="info-list__value">{category?.name}</span>
                  </div>
                  <div className="info-list__item">
                    <span className="info-list__label">형식</span>
                    <span className="info-list__value">{getContentTypeLabel(item.contentType)}</span>
                  </div>
                  <div className="info-list__item">
                    <span className="info-list__label">난이도</span>
                    <span className="info-list__value">{getContentLevelLabel(item.level)}</span>
                  </div>
                  <div className="info-list__item">
                    <span className="info-list__label">권장 연령</span>
                    <span className="info-list__value">{item.ageRange}</span>
                  </div>
                </div>
              </section>

              <section className="info-panel section-stack">
                <span className="eyebrow">다음 동선</span>
                <h2 className="text-[1.1rem] font-medium">같은 주제 더 보기</h2>
                <p className="quiet text-sm">같은 카테고리의 다른 형식 콘텐츠로 바로 이어서 볼 수 있어요.</p>
                <Link href={`/categories/${item.category}`} className="button-secondary">
                  {category?.name} 전체 보기
                </Link>
              </section>
            </aside>
          </div>
        </div>
      </section>

      <section className="section-block section-block--blue page-section">
        <div className="page-shell">
          <div className="section-band">
            <SectionHeading eyebrow="관련 콘텐츠" title="다음으로 읽기 좋은 콘텐츠" />
            <div className="grid gap-5 md:grid-cols-2">
              {relatedItems.map((related) => (
                <ContentCard key={related.slug} item={related} variant="compact" />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
