import React, { useState } from "react";

import PomoTabs from "../../components/PomoTabs";
import PomoTimer from "../../components/PomoTimer";
import { PomoTabEnum, PomoTabMinutesMap } from "../../shared/types";

function PomoPage() {
  const [selectedTab, setSelectedTab] = useState<PomoTabEnum>(
    PomoTabEnum.pomodoro
  );
  const [pomoCicles, setPomoCycles] = useState(0);

  return (
    <>
      <PomoTabs selectedTab={selectedTab} onChange={setSelectedTab} />
      <PomoTimer
        incrementPomoCycles={() =>
          setPomoCycles((currentPomoCycles) => currentPomoCycles + 1)
        }
        currentPomoStage={selectedTab}
      />
    </>
  );
}

export default PomoPage;
