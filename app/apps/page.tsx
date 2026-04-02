import type { Metadata } from "next";

import { AppCard } from "@/components/app-card";
import { SectionHeading } from "@/components/section-heading";
import { appItems } from "@/lib/content-data";

export const metadata: Metadata = { title: "교육 앱" };

export default function AppsPage() {
  const liveApps = appItems.filter((item) => item.status === "live");
  const upcomingApps = appItems.filter((item) => item.status === "coming-soon");

  return (
    <div>
      <section className="section-block section-block--white page-section--tight">
        <div className="page-shell">
          <div className="hero-panel hero-panel--narrow hero-grid">
            <span className="eyebrow">앱 목록</span>
            <h1 className="page-title">읽은 내용을 아이와 직접 연습하는 교육 앱</h1>
            <p className="page-description">
              지금 바로 사용할 수 있는 앱과 곧 출시될 앱을 함께 소개합니다.
            </p>
          </div>
        </div>
      </section>

      <section className="section-block section-block--blue page-section">
        <div className="page-shell">
          <div className="section-band">
            <SectionHeading
              eyebrow="지금 사용 가능"
              title="지금 사용 가능한 앱"
              description="아이와 함께 지금 바로 시작할 수 있습니다."
            />
            <div className="grid gap-5 md:grid-cols-2">
              {liveApps.map((app) => (
                <AppCard key={app.slug} app={app} emphasize />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-block section-block--gray page-section">
        <div className="page-shell">
          <div className="section-band">
            <SectionHeading
              eyebrow="출시 예정"
              title="곧 만날 수 있는 앱"
              description="곧 출시될 앱을 미리 확인하세요."
            />
            <div className="grid gap-5 md:grid-cols-2">
              {upcomingApps.map((app) => (
                <AppCard key={app.slug} app={app} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
