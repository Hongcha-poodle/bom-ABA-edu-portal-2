import type { Metadata } from "next";
import type { Route } from "next";
import { notFound } from "next/navigation";

import { Container } from "@/components/container";
import { ContentCard } from "@/components/content-card";
import { SectionHeader } from "@/components/section-header";
import { TagChip } from "@/components/tag-chip";
import {
  type ContentType,
  getCategoryBySlug,
  getContentByCategory,
  getContentTypeLabel,
  getContentTypesForCategory
} from "@/lib/content-data";

type CategoryPageProps = {
  params: { slug: string };
  searchParams?: { type?: string };
};

export async function generateMetadata({
  params
}: CategoryPageProps): Promise<Metadata> {
  const category = getCategoryBySlug(params.slug);

  if (!category) {
    return {
      title: "카테고리를 찾을 수 없음"
    };
  }

  return {
    title: `${category.name} 콘텐츠`,
    description: category.description
  };
}

export default function CategoryPage({
  params,
  searchParams
}: CategoryPageProps) {
  const category = getCategoryBySlug(params.slug);

  if (!category) {
    notFound();
  }

  const items = getContentByCategory(category.slug);
  const filter = searchParams?.type as ContentType | undefined;
  const filteredItems = filter
    ? items.filter((item) => item.contentType === filter)
    : items;
  const availableTypes = getContentTypesForCategory(category.slug);
  const hasResults = filteredItems.length > 0;

  return (
    <div className="page-shell py-14 sm:py-20" style={{ backgroundColor: category.softColor }}>
      <Container className="relative z-10 space-y-10">
        <section className="rounded-[2rem] border border-white/60 panel-surface px-6 py-8 shadow-card sm:px-10 sm:py-10">
          <SectionHeader
            eyebrow={`${category.emoji} ${category.name}`}
            title={`${category.name} 카테고리에서 필요한 형식만 골라보세요`}
            description={`${category.description} 카드뉴스, 아티클, 영상 중 현재 읽기 쉬운 형식만 바로 좁혀볼 수 있습니다.`}
          />
          <div className="mt-8 flex flex-wrap gap-3">
            <TagChip
              label="전체"
              href={`/categories/${category.slug}` as Route}
              active={!filter}
            />
            {availableTypes.map((type) => (
              <TagChip
                key={type}
                label={getContentTypeLabel(type)}
                href={`/categories/${category.slug}?type=${type}` as Route}
                active={filter === type}
              />
            ))}
          </div>
        </section>

        <section className="space-y-5">
          <div className="rounded-[1.5rem] bg-white/75 px-5 py-4 shadow-soft">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                  탐색 상태
                </p>
                <p className="mt-2 text-sm font-medium text-slate-700">
                  {hasResults
                    ? `${filteredItems.length}개의 콘텐츠를 볼 수 있어요.`
                    : "이 형식에는 아직 준비된 콘텐츠가 없어요."}
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="rounded-full bg-slate-900 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-white">
                  {category.name}
                </span>
                <span className="rounded-full bg-white px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-slate-600 ring-1 ring-[color:var(--border)]">
                  {filter ? `필터 ${getContentTypeLabel(filter)}` : "전체 형식"}
                </span>
              </div>
            </div>
          </div>

          {hasResults ? (
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {filteredItems.map((item) => (
                <ContentCard key={item.slug} item={item} />
              ))}
            </div>
          ) : (
            <div className="rounded-[2rem] border border-dashed border-[color:var(--border-strong)] bg-white/78 px-6 py-10 text-center shadow-soft">
              <p className="display-font text-3xl font-semibold text-slate-900">
                이 형식의 콘텐츠는 준비 중이에요
              </p>
              <p className="mx-auto mt-3 max-w-xl text-sm leading-7 text-slate-600">
                다른 형식을 선택하거나 전체 보기로 돌아가면 현재 공개된 {category.name}
                콘텐츠를 바로 확인할 수 있습니다.
              </p>
              <div className="mt-6 flex justify-center gap-3">
                <TagChip label="전체 보기" href={`/categories/${category.slug}` as Route} />
              </div>
            </div>
          )}
        </section>
      </Container>
    </div>
  );
}
