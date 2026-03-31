import React from "react";
import { render, screen } from "@testing-library/react";
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
    expect(screen.getByRole("link", { name: "콘텐츠" })).toHaveAttribute(
      "href",
      "/categories/aba-basics"
    );
    expect(screen.getByRole("link", { name: "앱 둘러보기" })).toHaveAttribute("href", "/apps");
  });

  it("marks active navigation in header", () => {
    usePathnameMock.mockReturnValue("/categories/aba-basics");

    render(<Header />);

    expect(screen.getByRole("link", { name: "콘텐츠", current: "page" })).toBeInTheDocument();
  });

  it("renders footer action area", () => {
    render(<Footer />);

    expect(screen.getByText("ABA 에듀 포털")).toBeInTheDocument();
    expect(screen.getByText(/오늘 바로 아이와 시도할 수 있도록/)).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "콘텐츠" })).toHaveAttribute(
      "href",
      "/categories/aba-basics"
    );
    expect(screen.getByRole("link", { name: "교육 앱" })).toHaveAttribute("href", "/apps");
  });
});
