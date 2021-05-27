import React, { useState } from "react";

import PomoTabs from "../../components/PomoTabs";
import PomoTimer from "../../components/PomoTimer";
import { PomoTabEnum } from "../../shared/types";

function PomoPage() {
  const [selectedTab, setSelectedTab] = useState<PomoTabEnum>(
    PomoTabEnum.pomodoro
  );

  return (
    <>
      <PomoTabs selectedTab={selectedTab} onChange={setSelectedTab} />
      <PomoTimer />
    </>
  );
}

export default PomoPage;
