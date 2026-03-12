import type { Metadata } from "next";
import type { Route } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { Container } from "@/components/container";
import { CTAButton } from "@/components/cta-button";
import { ContentBodyRenderer } from "@/components/content-body-renderer";
import { ContentCard } from "@/components/content-card";
import {
  getCategoryBySlug,
  getContentBySlug,
  getContentTypeLabel,
  getRelatedContent
} from "@/lib/content-data";

type ContentDetailPageProps = {
  params: { slug: string };
};

export async function generateMetadata({
  params
}: ContentDetailPageProps): Promise<Metadata> {
  const item = getContentBySlug(params.slug);

  if (!item) {
    return {
      title: "콘텐츠를 찾을 수 없음"
    };
  }

  return {
    title: item.title,
    description: item.summary
  };
}

export default function ContentDetailPage({ params }: ContentDetailPageProps) {
  const item = getContentBySlug(params.slug);

  if (!item) {
    notFound();
  }

  const category = getCategoryBySlug(item.category);
  const relatedItems = getRelatedContent(item.slug, item.category);

  return (
    <div className="bg-white py-14 sm:py-20">
      <Container className="space-y-12">
        <article className="mx-auto max-w-3xl space-y-8">
          <header className="rounded-[2rem] border border-[color:var(--border)] bg-[linear-gradient(180deg,#ffffff_0%,#fff9fd_100%)] px-6 py-8 shadow-soft sm:px-8">
            <Link
              href={`/categories/${item.category}`}
              className="text-sm font-semibold text-slate-600 hover:text-slate-900"
            >
              ← {category?.name ?? "카테고리"}로 돌아가기
            </Link>
            <div className="mt-5 flex flex-wrap items-center gap-3 text-sm font-semibold text-slate-600">
              <span className="rounded-full bg-fuchsia-50 px-3 py-1">
                {category?.name}
              </span>
              <span className="rounded-full bg-teal-50 px-3 py-1">
                {getContentTypeLabel(item.contentType)}
              </span>
              <span>{item.publishedAt}</span>
            </div>
            <h1 className="display-font balance-text mt-5 text-4xl font-semibold leading-tight text-slate-900 sm:text-5xl">
              {item.title}
            </h1>
            <p className="mt-4 text-lg leading-8 text-slate-600">{item.summary}</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <CTAButton href={`/categories/${item.category}` as Route} variant="secondary">
                같은 주제 더 보기
              </CTAButton>
              <CTAButton href="/apps" variant="ghost">
                교육 앱도 둘러보기
              </CTAButton>
            </div>
          </header>

          <ContentBodyRenderer item={item} />
        </article>

        <section className="space-y-6">
          <div className="mx-auto flex max-w-3xl items-center justify-between gap-4">
            <div>
              <p className="display-font text-3xl font-semibold text-slate-900">
                다음으로 읽기 좋은 콘텐츠
              </p>
              <p className="mt-2 text-sm text-slate-600">
                같은 주제 안에서 바로 이어보기 좋은 콘텐츠를 골랐습니다.
              </p>
            </div>
            <CTAButton
              href={`/categories/${item.category}` as Route}
              variant="secondary"
              size="compact"
            >
              카테고리 전체
            </CTAButton>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {relatedItems.map((relatedItem) => (
              <ContentCard key={relatedItem.slug} item={relatedItem} />
            ))}
          </div>
        </section>
      </Container>
    </div>
  );
}
