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
    <div className="mt-8">
      <SectionHeading
        eyebrow="Featured Content"
        title={title}
        description={description}
      />
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {items.map((item, index) => (
          <ContentCard
            key={item.slug}
            item={item}
            variant={index === 0 ? "default" : "compact"}
          />
        ))}
      </div>
    </div>
  );
}
