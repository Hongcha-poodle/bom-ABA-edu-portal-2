import { Container } from "@/components/container";
import { CTAButton } from "@/components/cta-button";

export default function NotFound() {
  return (
    <div className="page-shell flex min-h-[70vh] items-center justify-center bg-[image:var(--surface-hero)] py-16">
      <Container className="relative z-10">
        <section className="mx-auto max-w-2xl rounded-[2rem] border border-white/60 panel-surface px-6 py-12 text-center shadow-card sm:px-10">
          <p className="text-6xl">🧭</p>
          <p className="display-font mt-6 text-4xl font-semibold text-slate-900">
            찾으시는 페이지가 없어요
          </p>
          <p className="mt-4 text-base leading-7 text-slate-600">
            주소가 바뀌었거나 아직 준비 중인 페이지일 수 있습니다. 홈으로 이동해 다른
            카테고리와 앱을 둘러보세요.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <CTAButton href="/">홈으로 돌아가기</CTAButton>
            <CTAButton href="/apps" variant="secondary">
              앱 목록 보기
            </CTAButton>
          </div>
        </section>
      </Container>
    </div>
  );
}
