import Link from "next/link";

import { type AppItem } from "@/lib/content-data";

type AppCardProps = {
  item: AppItem;
};

export function AppCard({ item }: AppCardProps) {
  const isComingSoon = item.status === "coming-soon";

  return (
    <div className="relative">
      <Link
        href={isComingSoon ? "/apps" : `/apps/${item.slug}`}
        className={`interactive-lift block rounded-[1.9rem] border border-white/60 card-surface p-5 shadow-card ${
          isComingSoon ? "overflow-hidden" : ""
        }`}
      >
        <div
          className={`rounded-[1.5rem] p-5 ${
            isComingSoon
              ? "bg-slate-100/90"
              : "bg-gradient-to-br from-fuchsia-100 via-white to-teal-100"
          }`}
        >
          <div className="flex items-start justify-between gap-4">
            <span className="text-5xl">{item.thumbnail}</span>
            <span
              className={`rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] ${
                isComingSoon
                  ? "bg-slate-800 text-white"
                  : "bg-emerald-100 text-emerald-700"
              }`}
            >
              {item.status === "live" ? "Live" : "Coming Soon"}
            </span>
          </div>
          <h3 className="display-font mt-8 text-2xl font-semibold text-slate-900">
            {item.name}
          </h3>
          <p className="mt-3 text-sm leading-6 text-slate-600">
            {item.shortDescription}
          </p>
          <dl className="mt-5 grid grid-cols-2 gap-3 text-left">
            <div className="rounded-2xl bg-white/72 px-4 py-3">
              <dt className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">
                추천 연령
              </dt>
              <dd className="mt-2 text-sm font-semibold text-slate-800">{item.ageRange}</dd>
            </div>
            <div className="rounded-2xl bg-white/72 px-4 py-3">
              <dt className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">
                세션 길이
              </dt>
              <dd className="mt-2 text-sm font-semibold text-slate-800">
                {item.sessionLength}
              </dd>
            </div>
          </dl>
        </div>
        <ul
          className={`mt-5 space-y-2 text-sm leading-6 text-slate-700 ${
            isComingSoon ? "blur-[2px]" : ""
          }`}
        >
          {item.features.map((feature) => (
            <li key={feature} className="flex items-start gap-2">
              <span className="mt-1 text-fuchsia-500">•</span>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
        <div className="mt-5 flex items-center justify-between">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
            {isComingSoon ? "준비 중" : "바로 살펴보기"}
          </span>
          <span className="text-sm font-semibold text-slate-900">
            {isComingSoon ? "알림 예정" : "상세 페이지"}
          </span>
        </div>
      </Link>
      {isComingSoon ? (
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center rounded-[1.9rem] bg-white/40 backdrop-blur-[2px]">
          <div className="rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white shadow-soft">
            곧 공개됩니다
          </div>
        </div>
      ) : null}
    </div>
  );
}
