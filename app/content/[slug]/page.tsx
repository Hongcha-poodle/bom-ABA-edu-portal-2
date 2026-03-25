import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { getContentBySlug } from "@/lib/content-data";

type Props = { params: { slug: string } };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const item = getContentBySlug(params.slug);
  if (!item) return { title: "콘텐츠를 찾을 수 없음" };
  return { title: item.title, description: item.summary };
}

// TODO: Content Detail 페이지 재구현
export default function ContentDetailPage({ params }: Props) {
  const item = getContentBySlug(params.slug);
  if (!item) notFound();
  return <div />;
}
