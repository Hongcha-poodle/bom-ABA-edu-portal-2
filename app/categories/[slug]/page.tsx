import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { ContentThumbnail } from "@/components/content-thumbnail";
import { getCategoryBySlug, getContentByCategory, getContentLevelLabel, getContentTypeLabel } from "@/lib/content-data";

type Props = { params: { slug: string }; searchParams?: { type?: string } };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const category = getCategoryBySlug(params.slug);
  if (!category) return { title: "카테고리를 찾을 수 없음" };
  return { title: `${category.name} 콘텐츠`, description: category.description };
}

export default function CategoryPage({ params, searchParams }: Props) {
  const category = getCategoryBySlug(params.slug);
  if (!category) notFound();

  const items = getContentByCategory(category.slug);
  const activeType = searchParams?.type;
  const filteredItems = activeType ? items.filter((item) => item.contentType === activeType) : items;
  const types = Array.from(new Set(items.map((item) => item.contentType)));

  return (
    <div className="mx-auto w-[min(100%-32px,1200px)]">
      <section className="pb-3 pt-12">
        <span className="eyebrow">{category.name}</span>
        <h1 className="display-font mt-4 text-[clamp(2.2rem,4vw,3.4rem)] leading-[1.12] tracking-[-0.04em]">
          {category.name} 카테고리에서 필요한 형식만 골라보세요
        </h1>
        <p className="quiet mt-4 max-w-[60ch] text-lg">{category.description}</p>

        <div className="mt-7 flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap gap-2">
            <Link href={`/categories/${category.slug}`} className="chip !min-h-8 !px-3 !text-[13px]">
              모든 형식
            </Link>
            {types.map((type) => {
              const label = getContentTypeLabel(type);
              const isActive = activeType === type;

              return (
                <Link
                  key={type}
                  href={`/categories/${category.slug}?type=${type}`}
                  className="chip !min-h-8 !px-3 !text-[13px]"
                  style={
                    isActive
                      ? {
                          background: "var(--accent-primary-soft)",
                          borderColor: "rgba(47, 107, 79, 0.18)",
                          color: "var(--accent-primary)"
                        }
                      : undefined
                  }
                >
                  {label}
                </Link>
              );
            })}
          </div>

          <span className="quiet text-sm">{filteredItems.length}개의 결과</span>
        </div>
      </section>

      <section className="py-8 md:py-12">
        {filteredItems.length > 0 ? (
          <div className="grid gap-5 md:grid-cols-2">
            {filteredItems.map((item) => (
              <article key={item.slug} className="surface-card flex flex-col gap-5 p-6">
                <ContentThumbnail asset={item.coverAsset} />

                <div className="flex flex-wrap gap-2">
                  <span className="chip !min-h-8 !px-3 !text-[13px]">
                    {getContentTypeLabel(item.contentType)}
                  </span>
                  <span className="chip !min-h-8 !px-3 !text-[13px]">{getContentLevelLabel(item.level)}</span>
                  <span className="chip !min-h-8 !px-3 !text-[13px]">{item.ageRange}</span>
                  <span className="chip !min-h-8 !px-3 !text-[13px]">{item.publishedAt}</span>
                </div>

                <h2 className="text-[1.4rem] font-semibold leading-[1.22]">{item.title}</h2>
                <p className="quiet">{item.summary}</p>
                <Link href={`/content/${item.slug}`} className="button-ghost mt-auto">
                  자세히 읽기 →
                </Link>
              </article>
            ))}
          </div>
        ) : (
          <div className="surface-card p-8 text-center">
            <h2 className="text-[1.6rem] font-semibold">이 형식의 콘텐츠는 준비 중이에요</h2>
            <p className="quiet mt-3">다른 형식으로 둘러보거나 전체 보기로 돌아가 보세요.</p>
            <div className="mt-6 flex justify-center">
              <Link href={`/categories/${category.slug}`} className="button-primary">
                전체 보기
              </Link>
            </div>
          </div>
        )}
      </section>
    </div>
  );
}
