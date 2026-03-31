import Link from "next/link";

export function Footer() {
  return (
    <footer className="mt-8 bg-[linear-gradient(180deg,rgba(244,237,227,0.42),rgba(251,247,240,0.9))] py-10 md:py-14">
      <div className="page-shell footer-grid">
        <div className="flex flex-col gap-3 py-2">
          <div>
            <strong className="block text-[15px]">ABA 에듀 포털</strong>
            <p className="quiet mt-1 text-sm">
              발달지연 아동 부모를 위한 ABA 학습 가이드
            </p>
          </div>
          <p className="footer-note">
            콘텐츠와 교육 앱을 한 흐름으로 연결한 ABA 실천 가이드입니다.
          </p>
        </div>

        <div className="flex flex-wrap gap-4 py-2 text-sm text-[var(--text-secondary)]">
          <Link href="/categories/aba-basics">콘텐츠</Link>
          <Link href="/apps">교육 앱</Link>
          <Link href="/about">소개</Link>
        </div>
      </div>
    </footer>
  );
}
