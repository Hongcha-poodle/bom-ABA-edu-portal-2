import { ContentItem } from "@/lib/content-data";

type ContentBodyRendererProps = {
  item: ContentItem;
};

export function ContentBodyRenderer({ item }: ContentBodyRendererProps) {
  switch (item.contentType) {
    case "image-sequence":
      return (
        <div className="space-y-6" data-testid="image-sequence-body">
          {item.body.sections.map((section, index) => (
            <article
              key={`${section.title}-${index}`}
              className="overflow-hidden rounded-[1.75rem] border border-[color:var(--border)] bg-white shadow-card"
            >
              <div className="bg-gradient-to-br from-fuchsia-100 via-white to-teal-100 px-6 py-10">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="display-font text-2xl font-semibold text-slate-800">
                      {section.imageLabel}
                    </p>
                    <p className="mt-2 text-sm text-slate-500">{section.alt}</p>
                  </div>
                  <span className="rounded-full bg-white/88 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-slate-600">
                    Step {index + 1}
                  </span>
                </div>
              </div>
              <div className="space-y-3 px-6 py-5">
                <h3 className="display-font text-2xl font-semibold text-slate-900">
                  {section.title}
                </h3>
                <p className="text-base leading-7 text-slate-600">{section.caption}</p>
              </div>
            </article>
          ))}
        </div>
      );
    case "rich-text":
      return (
        <div className="space-y-8" data-testid="rich-text-body">
          <p className="rounded-[1.75rem] border border-amber-100 bg-amber-50 px-6 py-5 text-base leading-7 text-slate-700">
            {item.body.intro}
          </p>
          {item.body.sections.map((section) => (
            <section key={section.heading} className="space-y-3 rounded-[1.5rem] bg-white px-1">
              <h3 className="display-font text-2xl font-semibold text-slate-900">
                {section.heading}
              </h3>
              <p className="text-base leading-8 text-slate-700">{section.text}</p>
            </section>
          ))}
          <aside className="rounded-[1.75rem] border border-teal-100 bg-teal-50 px-6 py-5">
            <p className="display-font text-xl font-semibold text-slate-900">
              바로 실천 팁
            </p>
            <ul className="mt-4 space-y-2 text-base leading-7 text-slate-700">
              {item.body.tips.map((tip) => (
                <li key={tip} className="flex gap-3">
                  <span className="mt-1 text-teal-600">✓</span>
                  <span>{tip}</span>
                </li>
              ))}
            </ul>
          </aside>
        </div>
      );
    case "video":
      return (
        <div className="space-y-6" data-testid="video-body">
          <div className="overflow-hidden rounded-[1.75rem] bg-slate-950 shadow-card">
            <div className="flex aspect-video items-center justify-center bg-[radial-gradient(circle_at_center,rgba(232,121,249,0.35),transparent_38%),linear-gradient(135deg,#020617,#111827)]">
              <div className="text-center text-white">
                <p className="display-font text-3xl font-semibold">{item.body.videoTitle}</p>
                <p className="mt-3 text-sm text-white/80">{item.body.videoUrl}</p>
                <p className="mt-6 text-xs font-semibold uppercase tracking-[0.22em] text-white/55">
                  영상형 가이드
                </p>
              </div>
            </div>
          </div>
          <p className="text-base leading-7 text-slate-700">{item.body.summary}</p>
          <ul className="space-y-3 rounded-[1.75rem] border border-fuchsia-100 bg-fuchsia-50 px-6 py-5 text-base leading-7 text-slate-700">
            {item.body.bulletPoints.map((point) => (
              <li key={point} className="flex gap-3">
                <span className="mt-1 text-fuchsia-600">▶</span>
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>
      );
    default:
      return null;
  }
}
