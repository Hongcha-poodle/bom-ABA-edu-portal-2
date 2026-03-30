import type { Metadata } from "next";
import Link from "next/link";

import { PageIntro } from "@/components/page-intro";

export const metadata: Metadata = { title: "소개" };

export default function AboutPage() {
  return (
    <div className="page-shell">
      <PageIntro
        eyebrow="About"
        title="발달지연 자녀를 둔 부모가 오늘 바로 써볼 수 있는 ABA 가이드를 만듭니다."
        description="ABA 개념을 어렵게 풀지 않고, 집에서 바로 시도할 수 있는 문장과 흐름으로 바꾸는 것이 이 서비스의 출발점입니다."
        narrow
      />

      <section className="page-section--tight">
        <div className="grid gap-5 md:grid-cols-2">
          <article className="surface-card p-6">
            <span className="eyebrow">Mission</span>
            <h2 className="section-title mt-3 text-[1.5rem]">왜 이 서비스를 만들었나요</h2>
            <p className="quiet mt-3">
              보호자에게 지금 당장 필요한 건 긴 이론이 아닙니다. 오늘 아이와 무엇을 해볼 수 있는지,
              그 한 가지를 먼저 보여드리고 싶었습니다.
            </p>
          </article>

          <article className="surface-card p-6">
            <span className="eyebrow">Principles</span>
            <h2 className="section-title mt-3 text-[1.5rem]">운영 원칙</h2>
            <ul className="mt-3 grid gap-2 pl-5 text-[var(--text-secondary)]">
              <li>짧고 명확한 한국어</li>
              <li>읽고 바로 실천 가능한 설명</li>
              <li>콘텐츠와 앱이 같은 톤으로 이어지는 경험</li>
            </ul>
          </article>
        </div>

        <article className="surface-card mt-5 max-w-[760px] p-6">
          <span className="eyebrow">Contact</span>
          <h2 className="section-title mt-3 text-[1.5rem]">문의</h2>
          <p className="quiet mt-3">hello@aba-edu-portal.local</p>
          <div className="mt-5 flex flex-wrap gap-3">
            <Link href="/categories/aba-basics" className="button-primary">
              ABA 기초 보기
            </Link>
            <Link href="/apps" className="button-secondary">
              앱 둘러보기
            </Link>
          </div>
        </article>
      </section>
    </div>
  );
}
