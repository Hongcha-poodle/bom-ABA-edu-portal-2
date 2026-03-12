import React from "react";
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { ContentBodyRenderer } from "@/components/content-body-renderer";
import { getContentBySlug } from "@/lib/content-data";

describe("ContentBodyRenderer", () => {
  it("renders image sequence content", () => {
    const item = getContentBySlug("requesting-with-choice-board");

    if (!item || item.contentType !== "image-sequence") {
      throw new Error("Expected image-sequence content");
    }

    render(<ContentBodyRenderer item={item} />);

    expect(screen.getByTestId("image-sequence-body")).toBeInTheDocument();
    expect(screen.getByText("Scene 01")).toBeInTheDocument();
  });

  it("renders rich text content", () => {
    const item = getContentBySlug("toothbrushing-routine");

    if (!item || item.contentType !== "rich-text") {
      throw new Error("Expected rich-text content");
    }

    render(<ContentBodyRenderer item={item} />);

    expect(screen.getByTestId("rich-text-body")).toBeInTheDocument();
    expect(screen.getByText("양치를 한 덩어리 과제로 보지 않기")).toBeInTheDocument();
  });

  it("renders video content", () => {
    const item = getContentBySlug("turn-taking-at-home");

    if (!item || item.contentType !== "video") {
      throw new Error("Expected video content");
    }

    render(<ContentBodyRenderer item={item} />);

    expect(screen.getByTestId("video-body")).toBeInTheDocument();
    expect(screen.getByText("차례 지키기 5분 루틴")).toBeInTheDocument();
  });
});
