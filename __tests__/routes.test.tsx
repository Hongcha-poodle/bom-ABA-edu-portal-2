import React from "react";
import { render, screen } from "@testing-library/react";
import { beforeEach, describe, expect, it, vi } from "vitest";

const { notFoundMock } = vi.hoisted(() => ({
  notFoundMock: vi.fn(() => {
    throw new Error("NEXT_NOT_FOUND");
  })
}));

vi.mock("next/navigation", () => ({
  notFound: notFoundMock
}));

import AboutPage from "@/app/about/page";
import AppsPage from "@/app/apps/page";
import CategoryPage from "@/app/categories/[slug]/page";
import ContentDetailPage from "@/app/content/[slug]/page";
import NotFound from "@/app/not-found";

describe("route components", () => {
  beforeEach(() => {
    notFoundMock.mockClear();
  });

  it("renders filtered category page content", async () => {
    render(
      await CategoryPage({
        params: { slug: "language" },
        searchParams: { type: "video" }
      })
    );

    expect(
      screen.getByText("말문 트기 (요청하고 따라 말하는 법) 카테고리에서 필요한 형식만 골라보세요")
    ).toBeInTheDocument();
    expect(screen.getByAltText("따라 말하기 놀이를 표현한 더미 썸네일")).toHaveAttribute(
      "src",
      "/content-thumbnails/echoic-play.svg"
    );
    expect(screen.getByText("따라 말하기를 놀이로 연결하는 미니 루틴")).toBeInTheDocument();
  });

  it("renders empty state when category filter has no result", async () => {
    render(
      await CategoryPage({
        params: { slug: "behavior" },
        searchParams: { type: "video" }
      })
    );

    expect(screen.getByText("이 형식의 콘텐츠는 준비 중이에요")).toBeInTheDocument();
    expect(screen.getByText("전체 보기")).toBeInTheDocument();
  });

  it("calls notFound for missing category page", async () => {
    expect(() =>
      CategoryPage({
        params: { slug: "missing" },
        searchParams: {}
      })
    ).toThrow("NEXT_NOT_FOUND");
  });

  it("renders not-found page with home CTA", () => {
    render(<NotFound />);

    expect(screen.getByText("찾으시는 페이지가 없어요")).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "홈으로 돌아가기" })).toHaveAttribute(
      "href",
      "/"
    );
  });

  it("renders about page contact section", async () => {
    render(AboutPage());

    expect(screen.getByText("hello@aba-edu-portal.local")).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "ABA 기초 보기" })).toHaveAttribute(
      "href",
      "/categories/aba-basics"
    );
  });

  it("renders apps page summary cards", async () => {
    render(AppsPage());

    expect(screen.getByText("지금 바로 사용할 수 있는 앱과 곧 출시될 앱을 함께 소개합니다.")).toBeInTheDocument();
    expect(screen.getByText("지금 사용 가능한 앱")).toBeInTheDocument();
  });

  it("renders content detail page next actions", async () => {
    render(
      await ContentDetailPage({
        params: { slug: "requesting-with-choice-board" }
      })
    );

    expect(screen.getByText("같은 주제 더 보기")).toBeInTheDocument();
    expect(screen.getByText("다음으로 읽기 좋은 콘텐츠")).toBeInTheDocument();
  });
});
