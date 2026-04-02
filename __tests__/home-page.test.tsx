import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import HomePage from "@/app/page";

describe("home page", () => {
  it("renders primary CTAs with visible labels", () => {
    render(HomePage());

    expect(screen.getByRole("link", { name: "교육 앱 무료로 시작하기" })).toHaveAttribute("href", "/apps");
    expect(screen.getByRole("link", { name: "5분 실전 가이드 보기" })).toHaveAttribute("href", "/categories/aba-basics");
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

  it("filters wizard recommendations when a chip is clicked", () => {
    render(HomePage());

    expect(screen.getByRole("heading", { name: "지금 우리 아이에게 가장 필요한 것은?" })).toBeInTheDocument();
    expect(screen.getByRole("tab", { name: "#말문이_트이는_놀이" })).toHaveAttribute("aria-selected", "true");
    expect(screen.getByText("선택 보드로 요청하기 시작하기")).toBeInTheDocument();

    fireEvent.click(screen.getByRole("tab", { name: "#떼쓰기_대처법" }));

    expect(screen.getByRole("tab", { name: "#떼쓰기_대처법" })).toHaveAttribute("aria-selected", "true");
    expect(screen.getByText("문제 행동 대신 대체 행동을 가르치는 기본")).toBeInTheDocument();
  });

  it("renders replaceable thumbnail images for featured content and apps", () => {
    render(HomePage());

    expect(
      screen
        .getAllByAltText("선택 보드와 요청 훈련 루틴을 표현한 더미 썸네일")
        .some((image) => image.getAttribute("src") === "/content-thumbnails/requesting-choice-board.svg")
    ).toBe(true);

    fireEvent.click(screen.getByRole("tab", { name: "#어린이집_적응" }));

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
