import React from "react";
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import HomePage from "@/app/page";

describe("home page", () => {
  it("renders primary CTAs with visible labels", () => {
    render(HomePage());

    expect(screen.getByRole("link", { name: "콘텐츠 바로 보기" })).toHaveAttribute(
      "href",
      "/categories/aba-basics"
    );
    expect(screen.getByRole("link", { name: "교육 앱 둘러보기" })).toHaveAttribute(
      "href",
      "/apps"
    );
    expect(
      screen
        .getAllByRole("link", { name: "우리 아이와 해보기" })
        .every((link) => link.getAttribute("href") === "/apps/sia-hangul-keyboard")
    ).toBe(true);
  });

  it("renders parent-first hero messaging", () => {
    render(HomePage());

    expect(screen.getByRole("heading", { name: /오늘 배운 ABA, 지금 바로 우리 아이와 시작해볼까요\?/ })).toBeInTheDocument();
    expect(screen.getByText(/복잡한 이론은 덜어내고, 아이의 일상에 꼭 맞는 실전 팁과 맞춤형 교육 앱만 모았어요/)).toBeInTheDocument();
    expect(screen.getByText("한눈에 쏙")).toBeInTheDocument();
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
});
