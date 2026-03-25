import React from "react";
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import HomePage from "@/app/page";

describe("home page", () => {
  it("renders primary CTAs with visible labels", () => {
    render(HomePage());

    expect(screen.getByRole("link", { name: "언어 콘텐츠부터 시작" })).toHaveAttribute(
      "href",
      "/categories/language"
    );
    expect(screen.getByRole("link", { name: "교육 앱 보기" })).toHaveAttribute("href", "/apps");
    expect(
      screen
        .getAllByRole("link", { name: "앱 상세 보기" })
        .every((link) => link.getAttribute("href") === "/apps/sia-hangul-keyboard")
    ).toBe(true);
  });

  it("renders content and app placeholder visuals instead of empty image labels", () => {
    render(HomePage());

    expect(screen.getAllByText("요청 훈련").length).toBeGreaterThan(0);
    expect(screen.getAllByText("차례 놀이").length).toBeGreaterThan(0);
    expect(screen.getAllByText("한글 입력").length).toBeGreaterThan(0);
  });
});
