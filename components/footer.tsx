import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-[var(--border-default)] py-10 md:py-14">
      <div className="page-shell">
        <div className="flex flex-col gap-3 py-2 md:flex-row md:items-center md:justify-between">
          <div>
            <strong className="block text-[15px]">ABA 에듀 포털</strong>
            <p className="quiet mt-1 text-sm">
              발달지연 아동 부모를 위한 ABA 학습 가이드
            </p>
          </div>

          <div className="flex flex-wrap gap-4 text-sm text-[var(--text-secondary)]">
            <Link href="/categories/aba-basics">콘텐츠</Link>
            <Link href="/apps">교육 앱</Link>
            <Link href="/about">소개</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
