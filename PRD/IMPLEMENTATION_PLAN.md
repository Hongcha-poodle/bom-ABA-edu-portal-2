# ABA Edu Portal 실행 계획

기준일: 2026-03-19

## 목표

현재 구현된 화면 중심 포털을 P0 핵심 요구사항 수준으로 끌어올린다.

## 우선순위

### P1. 콘텐츠 운영 가능 상태 만들기

목표:
- 정적 목업 데이터에서 벗어나 실제 운영 가능한 콘텐츠 소스로 전환

작업:
- Notion 데이터 모델 정의
- Notion API fetch 레이어 추가
- `lib/content-data.ts`의 정적 데이터 구조를 Notion 응답 기반으로 치환
- 카테고리, 콘텐츠 상세, 관련 콘텐츠 계산 로직을 서버 데이터 기준으로 정리
- 실패 시 fallback 전략 정의

완료 기준:
- 콘텐츠 추가/수정이 코드 수정 없이 Notion에서 가능
- 홈, 카테고리, 상세 페이지가 Notion 데이터로 렌더링됨

예상 영향 파일:
- `lib/` 이하 데이터 레이어 신설
- `app/page.tsx`
- `app/categories/[slug]/page.tsx`
- `app/content/[slug]/page.tsx`

### P2. 앱 상세를 실제 실행 경험으로 전환

목표:
- 현재 mock preview를 실제 앱 실행 진입점으로 교체

작업:
- 실사용 2개 앱의 실행 방식 정의
- 포털 내 직접 통합인지, 별도 route 기반 실행인지 결정
- 전체화면 모드 UI와 종료 동선 설계
- 앱 상태와 상세 페이지의 CTA 연결

완료 기준:
- `시아 한글 키보드`, `냠냠 쩝쩝`이 실제 인터랙션 가능한 상태로 열림
- 상세 페이지의 전체화면 CTA가 mock이 아니라 실제 실행으로 연결됨

예상 영향 파일:
- `app/apps/[slug]/page.tsx`
- 앱 실행용 route 또는 component 파일 신규 추가
- `components/` 앱 실행 관련 UI

### P3. SEO 기본 마감

목표:
- 검색엔진과 공유 미리보기 품질 확보

작업:
- 페이지별 metadata 보강
- `sitemap.ts` 추가
- `robots.ts` 추가
- 콘텐츠 상세별 OG 정보 정리
- canonical 전략 검토

완료 기준:
- 홈, 카테고리, 콘텐츠 상세, 앱 상세, 소개 페이지에 개별 metadata 적용
- `sitemap`과 `robots`가 생성됨

예상 영향 파일:
- `app/layout.tsx`
- `app/sitemap.ts`
- `app/robots.ts`
- 각 route의 `generateMetadata`

### P4. 분석 도입

목표:
- 최소한의 운영 지표 수집

작업:
- GA4 스니펫 또는 Next.js 연동 방식 결정
- 페이지뷰 추적
- 주요 CTA 클릭 이벤트 정의

완료 기준:
- 페이지뷰 수집 확인
- 핵심 CTA 이벤트 3~5개 수집 가능

예상 영향 파일:
- `app/layout.tsx`
- 분석 유틸 파일 신규 추가 가능

### P5. 정보 구조 보강

목표:
- PRD와 현재 정보 구조의 차이를 해소

작업:
- `ABA 기초` 카테고리 추가 여부 결정
- 실제 필요 시 카테고리 데이터와 홈 진입 동선 반영
- 콘텐츠 타입 명칭을 사용자 친화적으로 통일

완료 기준:
- PRD 카테고리 목록과 실제 서비스 정보 구조가 일치

예상 영향 파일:
- `lib/content-data.ts` 또는 Notion 스키마
- `app/page.tsx`

## 추천 순서

1. Notion API 연동
2. 앱 실제 실행 통합
3. SEO 기본 마감
4. GA4 연동
5. 카테고리 구조 보정

## 빠른 실행안

이번 주 안에 가장 효과가 큰 최소 범위는 아래 순서다.

1. `sitemap`, `robots`, 상세 metadata 추가
2. `App Detail`의 mock 문구를 실제 상태에 맞는 beta 문구로 정리하거나 실앱 연결
3. Notion 스키마 먼저 확정
4. 이후 정적 데이터 치환

## 리스크

- Notion 스키마를 늦게 정하면 이후 route와 타입 정의를 다시 손볼 가능성이 큼
- 앱 실행 방식을 먼저 못 정하면 `App Detail` 구조를 다시 바꿀 수 있음
- 현재 테스트 실행 환경이 없어 문서상 완료와 실제 브라우저 품질 사이에 차이가 있을 수 있음
