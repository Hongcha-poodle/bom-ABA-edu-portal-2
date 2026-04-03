import { ContentCard } from "@/components/content-card";
import { SectionHeading } from "@/components/section-heading";
import type { ContentItem } from "@/lib/content-data";

type HomeContentGridProps = {
  title: string;
  description: string;
  items: ContentItem[];
};

export function HomeContentGrid({ title, description, items }: HomeContentGridProps) {
  return (
    <section className="section-block section-block--gray page-section">
      <div className="page-shell">
        <div className="section-band">
          <SectionHeading
            eyebrow="추천 콘텐츠"
            title={title}
            description={description}
          />
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {items.map((item) => (
              <ContentCard
                key={item.slug}
                item={item}
                variant="home"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
