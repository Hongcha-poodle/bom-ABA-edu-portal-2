import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { getCategoryBySlug } from "@/lib/content-data";

type Props = { params: { slug: string }; searchParams?: { type?: string } };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const category = getCategoryBySlug(params.slug);
  if (!category) return { title: "카테고리를 찾을 수 없음" };
  return { title: `${category.name} 콘텐츠`, description: category.description };
}

// TODO: Category 페이지 재구현
export default function CategoryPage({ params }: Props) {
  const category = getCategoryBySlug(params.slug);
  if (!category) notFound();
  return <div />;
}
