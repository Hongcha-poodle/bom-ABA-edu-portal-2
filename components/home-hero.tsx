import Link from "next/link";

export function HomeHero() {
  return (
    <section className="section-block section-block--white page-section--tight">
      <div className="page-shell">
        <div className="hero-shell">
          <div className="hero-panel hero-panel--primary hero-grid">
            <span className="eyebrow">부모 중심 ABA 실천 포털</span>
            <h1 className="page-title">아이와 바로 해볼 ABA 실천 콘텐츠</h1>
            <p className="hero-summary">
              언어, 사회성, 생활 루틴, 행동 관리를 부모가 쉽게 이해하고 적용할 수 있게 정리한 포털
            </p>

            <div className="intro-actions intro-actions--hero pt-4">
              <Link href="/categories/aba-basics" className="button-primary">
                주제 선택하기
              </Link>
              <Link href="/apps" className="button-secondary">
                교육 앱 보기
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
