import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { ContentCard } from "@/components/content-card";
import { getCategoryBySlug, getContentByCategory, getContentTypeLabel } from "@/lib/content-data";

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
    <div>
      <section className="section-block section-block--white page-section--tight">
        <div className="page-shell">
          <div className="hero-panel hero-panel--narrow hero-grid">
            <span className="eyebrow">{category.name}</span>
            <h1 className="page-title">{`${category.name} 카테고리에서 필요한 형식만 골라보세요`}</h1>
            <p className="page-description">{category.description}</p>
            <div className="meta-row">
              <span>{filteredItems.length}개의 결과</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section-block section-block--yellow page-section">
        <div className="page-shell">
          <div className="section-band">
            <div className="filter-bar">
              <div className="filter-group">
                <Link href={`/categories/${category.slug}`} className={`chip ${!activeType ? "filter-chip--active" : ""}`}>
                  모든 형식
                </Link>
                {types.map((type) => {
                  const label = getContentTypeLabel(type);
                  const isActive = activeType === type;

                  return (
                    <Link
                      key={type}
                      href={`/categories/${category.slug}?type=${type}`}
                      className={`chip ${isActive ? "filter-chip--active" : ""}`}
                    >
                      {label}
                    </Link>
                  );
                })}
              </div>

              <span className="quiet text-sm">{filteredItems.length}개의 결과</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section-block section-block--gray page-section">
        <div className="page-shell">
          {filteredItems.length > 0 ? (
            <div className="section-band">
              <div className="grid gap-5 md:grid-cols-2">
                {filteredItems.map((item) => (
                  <ContentCard key={item.slug} item={item} showCategory={false} />
                ))}
              </div>
            </div>
          ) : (
            <div className="hero-panel text-center">
              <h2 className="section-title">이 형식의 콘텐츠는 준비 중이에요</h2>
              <p className="quiet mt-3">다른 형식으로 둘러보거나 전체 보기로 돌아가 보세요.</p>
              <div className="mt-6 flex justify-center">
                <Link href={`/categories/${category.slug}`} className="button-primary">
                  전체 보기
                </Link>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
