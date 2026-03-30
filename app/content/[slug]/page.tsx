import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { ContentCard } from "@/components/content-card";
import { ContentBodyRenderer } from "@/components/content-body-renderer";
import { ContentThumbnail } from "@/components/content-thumbnail";
import { PageIntro } from "@/components/page-intro";
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
    <div className="page-shell">
      <PageIntro
        eyebrow={category?.name ?? "콘텐츠"}
        title={item.title}
        description={item.summary}
        narrow
        actions={
          <Link href={`/categories/${item.category}`} className="button-ghost">
            {category?.name}로 돌아가기
          </Link>
        }
        meta={
          <>
            <span>{category?.name}</span>
            <span>·</span>
            <span>{getContentTypeLabel(item.contentType)}</span>
            <span>·</span>
            <span>{getContentLevelLabel(item.level)}</span>
            <span>·</span>
            <span>{item.ageRange}</span>
            <span>·</span>
            <span>{item.publishedAt}</span>
          </>
        }
      />

      <section className="page-section--tight">
        <div className="editorial-grid">
          <article className="surface-card narrow-reading-width p-6">
            <ContentThumbnail asset={item.coverAsset} className="aspect-[1.9/1] w-full rounded-[20px]" />
            <p className="quiet mt-5">{item.summary}</p>
          </article>

          <ContentBodyRenderer item={item} />

          <section className="info-panel narrow-reading-width">
            <h2 className="mb-3 text-[1.5rem] font-semibold">같은 주제 더 보기</h2>
            <p className="quiet">지금 읽은 주제와 연결되는 다른 콘텐츠를 이어서 볼 수 있습니다.</p>
          </section>
        </div>
      </section>

      <section className="page-section">
        <SectionHeading eyebrow="Related Content" title="다음으로 읽기 좋은 콘텐츠" />
        <div className="grid gap-5 md:grid-cols-2">
          {relatedItems.map((related) => (
            <ContentCard key={related.slug} item={related} variant="compact" />
          ))}
        </div>
      </section>
    </div>
  );
}
