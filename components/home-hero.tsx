import Link from "next/link";

export function HomeHero() {
  return (
    <section className="section-block section-block--white page-section--tight">
      <div className="page-shell">
        <div className="hero-shell">
          <div className="hero-panel hero-panel--primary hero-grid">
            <span className="eyebrow">부모 중심 ABA 가이드</span>
            <h1 className="page-title">
              오늘 배운 ABA, 지금 바로 우리 아이와 시작해볼까요?
            </h1>
            <p className="hero-summary">
              복잡한 이론은 덜어내고, 아이의 일상에 꼭 맞는 실전 팁과 맞춤형 교육 앱만 모았어요.
            </p>

            <div className="hero-highlight">
              <strong>오늘 바로 시작할 수 있게</strong>
              <p>읽기, 따라 하기, 앱으로 연결하기까지 한 흐름으로 이어드립니다.</p>
            </div>

            <div className="intro-actions intro-actions--hero pt-4">
              <Link href="/apps" className="button-primary">
                교육 앱 무료로 시작하기
              </Link>
              <Link href="/categories/aba-basics" className="button-secondary">
                5분 실전 가이드 보기
              </Link>
            </div>

            <div className="hero-facts pt-4">
              {[
                ["한눈에 쏙", "아이 연령과 상황에 맞는 핵심만 5분 안에 파악해요."],
                ["오늘 당장 시도", "거창한 목표 대신, 오늘 아이와 해볼 수 있는 작은 행동 하나를 제안해요."],
                ["앱으로 자연스럽게 연결", "배운 내용을 아이가 좋아하는 앱과 연결해 즐겁게 복습해요."]
              ].map(([title, description]) => (
                <div key={title} className="hero-fact">
                  <strong>{title}</strong>
                  <span>{description}</span>
                </div>
              ))}
            </div>
          </div>

          <aside className="hero-panel hero-panel--secondary">
            <span className="eyebrow">오늘의 시작</span>
            <h2 className="section-title mt-4">막막할 땐, 지금 필요한 고민부터 고르세요</h2>
            <p className="quiet mt-3 text-sm">
              막막한 하루에도 시작은 간단하게. 아이의 속도에 맞춘 다음 단계를 바로 안내해 드립니다.
            </p>

            <div className="hero-checklist mt-6">
              {[
                ["1. 어려운 순간 고르기", "언어, 사회성, 생활 루틴 중 지금 가장 어렵게 느껴지는 것부터 골라보세요."],
                ["2. 5분 안에 읽기", "카드뉴스, 영상, 아티클 중 지금 집중할 수 있는 형식으로 시작합니다."],
                ["3. 앱으로 바로 이어가기", "같은 주제의 앱이나 다음 가이드로 연결해 반복 연습합니다."]
              ].map(([title, copy]) => (
                <article key={title}>
                  <strong>{title}</strong>
                  <p>{copy}</p>
                </article>
              ))}
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
