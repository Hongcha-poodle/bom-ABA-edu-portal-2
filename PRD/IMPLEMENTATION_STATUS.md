# ABA Edu Portal 구현 현황

기준일: 2026-03-19

## 요약

- P1 시각 페이지 작업은 대부분 구현됨
- P0 제품 요구사항 기준으로는 화면 중심 구현은 진행됐으나 데이터 연동과 운영 기능은 남아 있음
- `PRD/P1.md`의 상태표는 현재 코드와 불일치함

## P1 페이지 체크리스트

| 항목 | PRD 기준 | 현재 상태 | 근거 |
|---|---|---|---|
| Home | Hero + 콘텐츠 피드 + 앱 미리보기 + 가이드 + CTA | 완료 | `app/page.tsx` |
| Category | 카테고리 헤더 + 타입 필터 칩 + 카드 그리드 | 완료 | `app/categories/[slug]/page.tsx` |
| Content Detail | 제목+메타 → 본문(타입별) → 관련 콘텐츠 3개 | 완료 | `app/content/[slug]/page.tsx`, `components/content-body-renderer.tsx` |
| Apps List | 앱 카드 그리드, 실사용/Coming Soon 구분 | 완료 | `app/apps/page.tsx`, `components/app-card.tsx` |
| App Detail | 설명 영역 + 전체화면 실행 버튼 레이아웃 | 부분완료 | `app/apps/[slug]/page.tsx` |
| About | 미션 소개 + 운영자 프로필 + 연락처 | 완료 | `app/about/page.tsx` |
| 404 | 중앙 정렬 메시지 + 홈 버튼 | 완료 | `app/not-found.tsx` |

## P1 Done When 판정

| 체크 항목 | 상태 | 메모 |
|---|---|---|
| Category 페이지: 카테고리 헤더 + 필터 칩 + 카드 그리드 | 완료 | 카테고리별 필터와 빈 상태 처리까지 구현 |
| Content Detail 페이지: 3가지 타입 목업 데이터 표시 | 완료 | `image-sequence`, `rich-text`, `video` 렌더링 구현 |
| Apps List 페이지: 실사용 2개 + Coming Soon 카드 표시 | 완료 | 실사용 2개, Coming Soon 2개 확인 |
| App Detail 페이지: 설명 영역 + 전체화면 실행 버튼 | 부분완료 | 버튼과 미리보기 영역은 있으나 실제 실행은 아님 |
| About 페이지: 정적 콘텐츠 레이아웃 | 완료 | 구현됨 |
| 404 페이지: 중앙 정렬 에러 메시지 + 홈 링크 | 완료 | 구현됨 |
| 모든 신규 페이지가 320px~1920px에서 깨짐 없이 표시 | 미검증 | 테스트 환경 미설치로 실제 브라우저 확인 못함 |
| 기존 홈 페이지 스타일과 톤 일관성 유지 | 완료 | 공통 토큰과 컴포넌트 재사용 중 |

## P0 핵심 기능 체크리스트

| 기능 | 상태 | 메모 |
|---|---|---|
| 콘텐츠 피드 | 완료 | 홈과 카테고리/상세 흐름 구현 |
| 카테고리별 필터링 | 부분완료 | 언어, 사회성, 일상생활, 행동 관리는 있음. `ABA 기초`는 없음 |
| 콘텐츠 상세 타입별 렌더링 | 부분완료 | 3가지 타입은 구현됐으나 영상은 실제 embed가 아니라 목업 표시 |
| 교육 앱 섹션 | 부분완료 | 실사용 2개 + Coming Soon 2개 구성됨 |
| 태블릿 전체화면 실행 | 미구현 | 현재는 상세 페이지 내 mock preview |
| Notion API 기반 콘텐츠 관리 | 미구현 | 정적 데이터 파일 사용 중 |
| SEO 메타태그 / OG | 부분완료 | `app/layout.tsx`에 기본 metadata, openGraph 있음 |
| sitemap | 미구현 | 관련 파일 없음 |
| GA4 | 미구현 | 관련 코드 없음 |

## 주요 근거 파일

- `app/page.tsx`
- `app/categories/[slug]/page.tsx`
- `app/content/[slug]/page.tsx`
- `components/content-body-renderer.tsx`
- `app/apps/page.tsx`
- `app/apps/[slug]/page.tsx`
- `app/about/page.tsx`
- `app/not-found.tsx`
- `app/layout.tsx`
- `lib/content-data.ts`

## 문서와 구현의 차이

### 1. `PRD/P1.md` 상태표가 오래됨

`Category`, `Content Detail`, `Apps List`, `App Detail`, `About`, `404`가 문서상 `미구현`으로 남아 있지만 실제 파일은 존재하고 화면도 구성되어 있음.

### 2. 화면 구현과 제품 구현이 다름

페이지는 대부분 구현됐지만 아래 항목은 아직 제품 요구사항 기준으로 미완료임.

- Notion API 연동
- 실제 앱 실행 통합
- SEO 확장 항목(`sitemap`, `robots`, OG 이미지 등)
- GA4
- `ABA 기초` 카테고리

## 현재 판정

- P1 시각 작업: 85~90% 완료
- P0 제품 요구사항 전체: 55~65% 완료

## 검증 메모

- 정적 코드 기준으로 판정함
- `npm test` 실행 시 `vitest: command not found` 오류로 테스트 실행 불가
- 의존성 미설치 상태로 보여 브라우저 실검증은 이번 점검 범위에서 제외함
