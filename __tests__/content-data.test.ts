import { describe, expect, it } from "vitest";

import {
  getAppBySlug,
  getCategoryBySlug,
  getContentByCategory,
  getContentBySlug,
  getContentTypesForCategory,
  getRelatedContent
} from "@/lib/content-data";

describe("content data selectors", () => {
  it("returns a content item by slug", () => {
    expect(getContentBySlug("requesting-with-choice-board")?.title).toBe(
      "선택 보드로 요청하기 시작하기"
    );
  });

  it("returns app item by slug", () => {
    expect(getAppBySlug("sia-hangul-keyboard")?.status).toBe("live");
  });

  it("returns category details by slug", () => {
    expect(getCategoryBySlug("behavior")?.name).toBe("마음 알아주기 (떼쓰는 이유를 이해하고 바른 행동 돕기)");
  });

  it("filters content by category", () => {
    expect(getContentByCategory("language")).toHaveLength(2);
  });

  it("returns unique content types per category", () => {
    expect(getContentTypesForCategory("language")).toEqual(
      expect.arrayContaining(["image-sequence", "video"])
    );
  });

  it("returns up to three related items excluding the current one", () => {
    const related = getRelatedContent("requesting-with-choice-board", "language");

    expect(related).toHaveLength(1);
    expect(related[0]?.slug).toBe("echoic-imitation-play");
  });
});
