"use client";

import { useMemo, useState } from "react";

import { HomeContentGrid } from "@/components/home-content-grid";
import { contentItems } from "@/lib/content-data";

const wizardChips = [
  { id: "language", label: "#말문이_트이는_놀이", title: "말문을 여는 첫 연습", description: "요청하기와 따라 말하기부터 시작해요." },
  { id: "social", label: "#어린이집_적응", title: "사회성 적응 가이드", description: "눈맞춤과 차례 지키기 연습을 도와드려요." },
  { id: "behavior", label: "#떼쓰기_대처법", title: "행동 대처 가이드", description: "떼쓰기 대신 할 수 있는 행동을 찾습니다." },
  { id: "daily-living", label: "#생활_루틴_만들기", title: "생활 루틴 가이드", description: "양치와 식사처럼 반복이 필요한 루틴을 다룹니다." }
] as const;

export function HomeWizard() {
  const [selectedChipId, setSelectedChipId] = useState<(typeof wizardChips)[number]["id"]>("language");

  const selectedChip = wizardChips.find((chip) => chip.id === selectedChipId) ?? wizardChips[0];
  const filteredItems = useMemo(
    () => contentItems.filter((item) => item.category === selectedChip.id).slice(0, 3),
    [selectedChip.id]
  );

  return (
    <section className="section-block section-block--gray page-section">
      <div className="page-shell">
        <div className="wizard-shell">
          <div className="wizard-header">
            <span className="eyebrow">Quick Curation</span>
            <h2 className="section-title">지금 우리 아이에게 가장 필요한 것은?</h2>
            <p className="section-description">
              지금 눈앞의 고민을 눌러보세요. 바로 읽기 좋은 가이드를 먼저 골라드릴게요.
            </p>
          </div>

          <div className="wizard-chip-row" role="tablist" aria-label="빠른 고민 선택">
            {wizardChips.map((chip) => {
              const isActive = chip.id === selectedChipId;

              return (
                <button
                  key={chip.id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  className={`wizard-chip ${isActive ? "wizard-chip--active" : ""}`}
                  onClick={() => setSelectedChipId(chip.id)}
                >
                  {chip.label}
                </button>
              );
            })}
          </div>

          <div className="wizard-summary">
            <strong>{selectedChip.title}</strong>
            <p>{selectedChip.description}</p>
          </div>
        </div>

        <HomeContentGrid
          title={selectedChip.title}
          description={selectedChip.description}
          items={filteredItems}
        />
      </div>
    </section>
  );
}
