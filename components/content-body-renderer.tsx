import type { ContentItem } from "@/lib/content-data";

type Props = {
  item: ContentItem;
};

export function ContentBodyRenderer({ item }: Props) {
  if (item.contentType === "image-sequence") {
    return (
      <div className="editorial-grid narrow-reading-width" data-testid="image-sequence-body">
        {item.body.sections.map((section) => (
          <section key={section.title} className="surface-card p-6">
            <div className="rounded-[20px] border border-[var(--border-default)] bg-[var(--bg-subtle)] p-6">
              <span className="eyebrow">{section.imageLabel}</span>
              <h2 className="section-title mt-3 text-[1.75rem]">{section.title}</h2>
            </div>
            <p className="quiet mt-4">{section.caption}</p>
          </section>
        ))}
      </div>
    );
  }

  if (item.contentType === "rich-text") {
    return (
      <div className="editorial-grid narrow-reading-width" data-testid="rich-text-body">
        <p className="quiet max-w-[75ch]">{item.body.intro}</p>
        {item.body.sections.map((section) => (
          <section key={section.heading} className="surface-card p-6">
            <h2 className="section-title text-[1.75rem]">{section.heading}</h2>
            <p className="quiet mt-3">{section.text}</p>
          </section>
        ))}
        <section className="info-panel">
          <h3 className="mb-3 text-lg font-semibold">실천 팁</h3>
          <ul className="grid gap-2 pl-5 text-[var(--text-secondary)]">
            {item.body.tips.map((tip) => (
              <li key={tip}>{tip}</li>
            ))}
          </ul>
        </section>
      </div>
    );
  }

  return (
    <div className="editorial-grid narrow-reading-width" data-testid="video-body">
      <section className="surface-card p-6">
        <span className="eyebrow">Video Guide</span>
        <h2 className="section-title mt-3 text-[1.75rem]">{item.body.videoTitle}</h2>
        <p className="quiet mt-3">{item.body.summary}</p>
      </section>
      <section className="info-panel">
        <h3 className="mb-3 text-lg font-semibold">보고 나서 바로 해볼 것</h3>
        <ul className="grid gap-2 pl-5 text-[var(--text-secondary)]">
          {item.body.bulletPoints.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>
      </section>
    </div>
  );
}
