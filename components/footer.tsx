import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-[rgba(217,222,214,0.78)] py-8 md:py-14">
      <div className="mx-auto w-[min(100%-32px,1200px)]">
        <div className="surface-card grid gap-7 p-7 md:grid-cols-[1.45fr_1fr]">
          <div>
            <span className="eyebrow">Next Step</span>
            <h2 className="display-font mt-3 text-[2rem] leading-[1.15]">다음 단계</h2>
            <p className="quiet mt-3 max-w-[54ch]">
              오늘 필요한 주제부터 가볍게 읽고, 익숙해지면 교육 앱으로 바로 이어서 연습할 수
              있게 구성했습니다.
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              <Link href="/categories/aba-basics" className="button-primary">
                ABA 기초부터 보기
              </Link>
              <Link href="/apps" className="button-secondary">
                교육 앱 둘러보기
              </Link>
            </div>
          </div>

          <div className="surface-card bg-white/70 p-6">
            <span className="eyebrow">Service Note</span>
            <p className="quiet mt-3">
              ABA는 어렵지 않습니다. 부모가 집에서 바로 시도할 수 있는 방법과 도구를 꾸준히
              업데이트합니다.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
