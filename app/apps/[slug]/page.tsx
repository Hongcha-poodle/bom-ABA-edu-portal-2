import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { getAppBySlug } from "@/lib/content-data";

type Props = { params: { slug: string } };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const app = getAppBySlug(params.slug);
  if (!app) return { title: "앱을 찾을 수 없음" };
  return { title: app.name, description: app.shortDescription };
}

// TODO: App Detail 페이지 재구현
export default function AppDetailPage({ params }: Props) {
  const app = getAppBySlug(params.slug);
  if (!app || app.status === "coming-soon") notFound();
  return <div />;
}
