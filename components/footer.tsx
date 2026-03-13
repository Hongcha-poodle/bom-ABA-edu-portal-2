import type { Route } from "next";
import Link from "next/link";

import { Container } from "@/components/container";
import { CTAButton } from "@/components/cta-button";

export function Footer() {
  return (
    <footer className="border-t border-[color:var(--border)] bg-[#f7f8fb] pt-16">
      <Container className="space-y-12 pb-8">
        <div className="grid gap-10 lg:grid-cols-4">
          <div className="space-y-5">
            <div className="flex items-center gap-3">
              <span className="flex h-8 w-8 items-center justify-center rounded-[10px] bg-[color:var(--primary)] text-sm font-bold text-white">
                A
              </span>
              <p className="display-font text-xl font-semibold text-[color:var(--foreground)]">
                ABA 에듀 포털
              </p>
            </div>

            <div className="flex gap-3 text-xs text-[color:var(--muted-foreground)]">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#eceff3]">
                인
              </span>
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#eceff3]">
                블
              </span>
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#eceff3]">
                메
              </span>
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold text-[color:var(--foreground)]">서비스</p>
            <div className="mt-5 space-y-3 text-sm text-[color:var(--muted-foreground)]">
              <Link href="/categories/language" className="block hover:text-[color:var(--foreground)]">
                언어 콘텐츠
              </Link>
              <Link href="/categories/social" className="block hover:text-[color:var(--foreground)]">
                사회성 가이드
              </Link>
              <Link href="/apps" className="block hover:text-[color:var(--foreground)]">
                교육 앱
              </Link>
              <Link href="/about" className="block hover:text-[color:var(--foreground)]">
                포털 소개
              </Link>
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold text-[color:var(--foreground)]">도움말</p>
            <div className="mt-5 space-y-3 text-sm text-[color:var(--muted-foreground)]">
              <Link href="/categories/behavior" className="block hover:text-[color:var(--foreground)]">
                행동 관리 시작하기
              </Link>
              <Link href="/categories/daily-living" className="block hover:text-[color:var(--foreground)]">
                일상 루틴 만들기
              </Link>
              <Link href="/apps/sia-hangul-keyboard" className="block hover:text-[color:var(--foreground)]">
                추천 앱 살펴보기
              </Link>
            </div>
          </div>

          <div className="space-y-4">
            <p className="text-sm font-semibold text-[color:var(--foreground)]">다음 단계</p>
            <p className="text-sm leading-6 text-[color:var(--muted-foreground)]">
              뉴스레터 대신, 지금 바로 도움이 되는 시작 경로를 정리했습니다.
            </p>
            <div className="flex flex-wrap gap-3">
              <CTAButton href={"/categories/language" as Route} variant="primary" size="compact">
                언어부터 보기
              </CTAButton>
              <CTAButton href="/apps" variant="secondary" size="compact">
                앱 전체 보기
              </CTAButton>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3 border-t border-[color:var(--border)] pt-6 text-xs text-[color:var(--subtle-foreground)] sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 ABA 에듀 포털. All rights reserved.</p>
          <div className="flex gap-6">
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
          </div>
        </div>
      </Container>
    </footer>
  );
}
