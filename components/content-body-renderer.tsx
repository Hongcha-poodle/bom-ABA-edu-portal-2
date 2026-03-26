import type { ContentItem } from "@/lib/content-data";

type Props = {
  item: ContentItem;
};

export function ContentBodyRenderer({ item }: Props) {
  if (item.contentType === "image-sequence") {
    return (
      <div className="grid gap-5" data-testid="image-sequence-body">
        {item.body.sections.map((section) => (
          <section key={section.title} className="surface-card p-6">
            <div className="rounded-[18px] border border-[var(--border-default)] bg-[linear-gradient(135deg,rgba(255,255,255,0.95),rgba(229,241,234,0.92))] p-6">
              <span className="eyebrow">{section.imageLabel}</span>
              <h2 className="display-font mt-3 text-[1.75rem] leading-[1.15]">{section.title}</h2>
            </div>
            <p className="quiet mt-4">{section.caption}</p>
          </section>
        ))}
      </div>
    );
  }

  if (item.contentType === "rich-text") {
    return (
      <div className="grid gap-5" data-testid="rich-text-body">
        <p className="quiet max-w-[75ch]">{item.body.intro}</p>
        {item.body.sections.map((section) => (
          <section key={section.heading} className="surface-card p-6">
            <h2 className="display-font text-[1.75rem] leading-[1.15]">{section.heading}</h2>
            <p className="quiet mt-3">{section.text}</p>
          </section>
        ))}
        <section className="rounded-[16px] border border-[var(--border-default)] bg-[var(--bg-subtle)] p-6">
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
    <div className="grid gap-5" data-testid="video-body">
      <section className="surface-card p-6">
        <span className="eyebrow">Video Guide</span>
        <h2 className="display-font mt-3 text-[1.75rem] leading-[1.15]">{item.body.videoTitle}</h2>
        <p className="quiet mt-3">{item.body.summary}</p>
      </section>
      <section className="rounded-[16px] border border-[var(--border-default)] bg-[var(--bg-subtle)] p-6">
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
