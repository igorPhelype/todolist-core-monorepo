import React, { useState } from "react";

import { PomoTabEnum } from "../../shared/types";

interface PomoTabsProps {
  selectedTab: PomoTabEnum;
  onChange(selectedTab: PomoTabEnum): void;
}

function PomoTabs({ selectedTab, onChange }: PomoTabsProps) {
  return (
    <>
      {Object.keys(PomoTabEnum).map((key) => {
        const currentPomoTab = PomoTabEnum[key];
        return (
          <button key={key} onClick={() => onChange(currentPomoTab)}>
            {currentPomoTab}
          </button>
        );
      })}
    </>
  );
}

export default PomoTabs;
