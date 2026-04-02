import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { beforeEach, describe, expect, it, vi } from "vitest";

const { usePathnameMock } = vi.hoisted(() => ({
  usePathnameMock: vi.fn()
}));

vi.mock("next/navigation", () => ({
  usePathname: usePathnameMock
}));

import { Footer } from "@/components/footer";
import { Header } from "@/components/header";

describe("shell components", () => {
  beforeEach(() => {
    usePathnameMock.mockReturnValue("/");
  });

  it("renders simplified primary navigation in header", () => {
    render(<Header />);

    expect(screen.getByRole("link", { name: "홈" })).toHaveAttribute("href", "/");
    expect(screen.getByRole("button", { name: "고민별 가이드" })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /말문 트기/ })).toHaveAttribute("href", "/categories/language");
    expect(screen.getByRole("link", { name: /사회성/ })).toHaveAttribute("href", "/categories/social");
    expect(screen.getByRole("link", { name: /루틴/ })).toHaveAttribute("href", "/categories/daily-living");
    expect(screen.getByRole("link", { name: "앱 둘러보기" })).toHaveAttribute("href", "/apps");
  });

  it("marks active navigation in header", () => {
    usePathnameMock.mockReturnValue("/categories/language");

    render(<Header />);

    expect(screen.getByRole("link", { name: /말문 트기/, current: "page" })).toBeInTheDocument();
  });

  it("toggles mobile menu state", () => {
    render(<Header />);

    const menuButton = screen.getByRole("button", { name: "메뉴 열기" });
    expect(menuButton).toHaveAttribute("aria-expanded", "false");

    fireEvent.click(menuButton);

    expect(screen.getByRole("button", { name: "메뉴 닫기" })).toHaveAttribute("aria-expanded", "true");
  });

  it("renders footer action area", () => {
    render(<Footer />);

    expect(screen.getByText("ABA 에듀 포털")).toBeInTheDocument();
    expect(screen.getByText(/콘텐츠와 교육 앱을 한 흐름으로 연결한/)).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "콘텐츠" })).toHaveAttribute(
      "href",
      "/categories/aba-basics"
    );
    expect(screen.getByRole("link", { name: "교육 앱" })).toHaveAttribute("href", "/apps");
  });
});
