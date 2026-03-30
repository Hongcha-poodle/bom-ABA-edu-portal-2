import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { ContentBodyRenderer } from "@/components/content-body-renderer";
import { ContentThumbnail } from "@/components/content-thumbnail";
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
    <div className="mx-auto w-[min(100%-32px,1200px)]">
      <section className="pb-3 pt-12">
        <Link href={`/categories/${item.category}`} className="button-ghost !px-0">
          {category?.name}로 돌아가기
        </Link>
        <h1 className="display-font mt-4 text-[clamp(2.2rem,4vw,3.4rem)] leading-[1.12] tracking-[-0.04em]">
          {item.title}
        </h1>
        <div className="quiet mt-4 flex flex-wrap items-center gap-2 text-sm">
          <span>{category?.name}</span>
          <span>·</span>
          <span>{getContentTypeLabel(item.contentType)}</span>
          <span>·</span>
          <span>{getContentLevelLabel(item.level)}</span>
          <span>·</span>
          <span>{item.ageRange}</span>
          <span>·</span>
          <span>{item.publishedAt}</span>
        </div>
      </section>

      <section className="py-8 md:py-12">
        <div className="grid gap-5">
          <article className="surface-card max-w-[760px] p-6">
            <ContentThumbnail asset={item.coverAsset} className="aspect-[1.9/1] w-full rounded-[18px]" />
            <p className="quiet mt-5">{item.summary}</p>
          </article>

          <ContentBodyRenderer item={item} />

          <section className="max-w-[760px] rounded-[16px] border border-[var(--border-default)] bg-[var(--bg-subtle)] p-6">
            <h2 className="mb-3 text-[1.5rem] font-semibold">같은 주제 더 보기</h2>
            <p className="quiet">지금 읽은 주제와 연결되는 다른 콘텐츠를 이어서 볼 수 있습니다.</p>
          </section>

          <section>
            <h2 className="display-font text-[clamp(1.9rem,4vw,2.5rem)] leading-[1.15]">
              다음으로 읽기 좋은 콘텐츠
            </h2>
          </section>

          <div className="grid gap-5 md:grid-cols-2">
            {relatedItems.map((related) => (
              <article key={related.slug} className="surface-card flex flex-col gap-5 p-6">
                <ContentThumbnail asset={related.coverAsset} />
                <h3 className="text-[1.35rem] font-semibold leading-[1.24]">{related.title}</h3>
                <p className="quiet">{related.summary}</p>
                <Link href={`/content/${related.slug}`} className="button-ghost mt-auto">
                  이어서 읽기 →
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
