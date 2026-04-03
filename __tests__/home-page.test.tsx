import React from "react";
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import HomePage from "@/app/page";

describe("home page", () => {
  it("renders primary CTAs with visible labels", () => {
    render(HomePage());

    expect(screen.getByRole("link", { name: "주제 선택하기" })).toHaveAttribute("href", "/categories/aba-basics");
    expect(screen.getByRole("link", { name: "교육 앱 보기" })).toHaveAttribute("href", "/apps");
    const appCtaHrefs = screen.getAllByRole("link", { name: "앱 보기" }).map((link) => link.getAttribute("href"));
    expect(appCtaHrefs).toContain("/apps/sia-hangul-keyboard");
    expect(appCtaHrefs).toContain("/apps/nyamnyam-food-sort");
  });

  it("renders simplified hero messaging", () => {
    render(HomePage());

    expect(screen.getByRole("heading", { name: "아이와 바로 해볼 ABA 실천 콘텐츠" })).toBeInTheDocument();
    expect(
      screen.getByText(/언어, 사회성, 생활 루틴, 행동 관리를 부모가 쉽게 이해하고 적용할 수 있게 정리한 포털/)
    ).toBeInTheDocument();
    expect(screen.getByText("부모 중심 ABA 실천 포털")).toBeInTheDocument();
    expect(screen.queryByText("오늘의 시작")).not.toBeInTheDocument();
    expect(screen.queryByText("한눈에 쏙")).not.toBeInTheDocument();
  });

  it("uses a single topic selection section as the main exploration entry point", () => {
    render(HomePage());

    expect(screen.getByRole("heading", { name: "지금 필요한 주제를 선택해" })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /말문 트기/ })).toHaveAttribute("href", "/categories/language");
    expect(screen.getByRole("link", { name: /사회성/ })).toHaveAttribute("href", "/categories/social");
    expect(screen.getByRole("link", { name: /생활 루틴/ })).toHaveAttribute("href", "/categories/daily-living");
    expect(screen.queryByRole("tab")).not.toBeInTheDocument();
    expect(screen.queryByText("선택한 주제에서 먼저 읽어볼 콘텐츠")).not.toBeInTheDocument();
  });

  it("renders compact recommendation cards that are easy to scan", () => {
    render(HomePage());

    expect(screen.getByRole("heading", { name: "먼저 보기 좋은 추천 콘텐츠" })).toBeInTheDocument();
    expect(screen.getByText("그림을 짚으며 원하는 것을 표현하는 첫 요청 연습")).toBeInTheDocument();
    expect(screen.getByText("놀이 상황에서 3초 기다리기부터 시작하는 간단한 루틴")).toBeInTheDocument();
    expect(screen.getByText("양치를 작은 단계로 나눠 매일 이어가는 생활 루틴 가이드")).toBeInTheDocument();
    expect(screen.queryByText(/말 대신 그림으로 "이거 줘" 표현하기/)).not.toBeInTheDocument();
    expect(screen.getAllByRole("link", { name: "보기" })).toHaveLength(3);
  });

  it("renders replaceable thumbnail images for featured content and apps", () => {
    render(HomePage());

    expect(
      screen
        .getAllByAltText("선택 보드와 요청 훈련 루틴을 표현한 더미 썸네일")
        .some((image) => image.getAttribute("src") === "/content-thumbnails/requesting-choice-board.svg")
    ).toBe(true);

    expect(screen.getByAltText("차례 지키기 놀이를 표현한 더미 썸네일")).toHaveAttribute(
      "src",
      "/content-thumbnails/turn-taking-play.svg"
    );
    expect(screen.getByAltText("한글 키보드 학습 앱 더미 썸네일")).toHaveAttribute(
      "src",
      "/content-thumbnails/app-hangul-keyboard.svg"
    );
  });

  it("keeps the parent guide as a single short introduction and compresses app cards", () => {
    render(HomePage());

    expect(
      screen.getByText("부모가 쉽게 이해하고 바로 시도할 수 있도록, 콘텐츠와 앱을 한 흐름으로 연결한 실천형 포털")
    ).toBeInTheDocument();
    expect(screen.queryByText("이곳은 부모가 바로 선택하고 실천할 수 있게 만든 홈입니다")).not.toBeInTheDocument();
    expect(screen.queryByText("선택이 먼저")).not.toBeInTheDocument();
    expect(screen.queryByText("연결이 자연스럽게")).not.toBeInTheDocument();

    expect(screen.getByText("큰 버튼과 소리로 한글에 친해지는 첫 연습")).toBeInTheDocument();
    expect(screen.getByText("놀면서 음식 단어와 분류를 익히는 짧은 활동")).toBeInTheDocument();
    expect(screen.getByText("4세 이상")).toBeInTheDocument();
    expect(screen.getByText("5-10분")).toBeInTheDocument();
    expect(screen.queryByText("큰 터치 타깃과 명확한 음성 피드백")).not.toBeInTheDocument();
  });

  it("places topic selection right below hero and keeps intro content later", () => {
    render(HomePage());

    const heroHeading = screen.getByRole("heading", { name: "아이와 바로 해볼 ABA 실천 콘텐츠" });
    const topicHeading = screen.getByRole("heading", { name: "지금 필요한 주제를 선택해" });
    const contentHeading = screen.getByRole("heading", { name: "먼저 보기 좋은 추천 콘텐츠" });
    const appsHeading = screen.getByRole("heading", { name: "배운 내용, 교육 앱으로 바로 이어가요" });
    const introCopy = screen.getByText("부모가 쉽게 이해하고 바로 시도할 수 있도록, 콘텐츠와 앱을 한 흐름으로 연결한 실천형 포털");

    expect(heroHeading.compareDocumentPosition(topicHeading) & Node.DOCUMENT_POSITION_FOLLOWING).toBeTruthy();
    expect(topicHeading.compareDocumentPosition(contentHeading) & Node.DOCUMENT_POSITION_FOLLOWING).toBeTruthy();
    expect(contentHeading.compareDocumentPosition(appsHeading) & Node.DOCUMENT_POSITION_FOLLOWING).toBeTruthy();
    expect(appsHeading.compareDocumentPosition(introCopy) & Node.DOCUMENT_POSITION_FOLLOWING).toBeTruthy();
    expect(screen.queryByText("부모가 먼저, 작게 시작합니다")).not.toBeInTheDocument();
  });
});
