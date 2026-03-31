import Link from "next/link";

export default function NotFound() {
  return (
    <div>
      <section className="section-block section-block--gray page-section">
        <div className="page-shell py-8">
          <div className="hero-panel mx-auto max-w-[760px] border-t border-[rgba(17,17,17,0.16)] text-center">
            <span className="eyebrow justify-center">404</span>
            <h1 className="page-title mt-4">찾으시는 페이지가 없어요</h1>
            <p className="quiet mt-4">
              홈으로 돌아가거나 콘텐츠와 앱 목록에서 다시 필요한 항목을 찾아보실 수 있습니다.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <Link href="/" className="button-primary">
                홈으로 돌아가기
              </Link>
              <Link href="/apps" className="button-secondary">
                앱 보기
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
