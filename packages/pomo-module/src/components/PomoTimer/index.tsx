import React, { useEffect, useRef, useState } from "react";
import { tabsSecondsMap } from "../../shared/constants";

import { formatSeconds } from "../../shared/helpers";
import { PomoTabEnum } from "../../shared/types";

interface PomoTimerProps {
  currentPomoStage?: PomoTabEnum;
  incrementPomoCycles(): void;
}

function PomoTimer({
  currentPomoStage = PomoTabEnum.pomodoro,
}: PomoTimerProps) {
  const [timer, setTimer] = useState<number>();
  const [isPaused, setIsPaused] = useState(true);

  let intervalRef = useRef<NodeJS.Timeout>();

  useEffect(() => {
    setTimer(tabsSecondsMap[currentPomoStage]);
    pausePomoTimer();
  }, [currentPomoStage]);

  const startOrResumePomoTimer = () => {
    setIsPaused(false);
    setTimer((timer) => timer - 1);
    intervalRef.current = setInterval(() => {
      setTimer((timer) => {
        if (timer === 1) {
          clearInterval(intervalRef.current);
          return timer;
        }
        return timer - 1;
      });
    }, 1000);
  };

  const pausePomoTimer = () => {
    setIsPaused(true);
    clearInterval(intervalRef.current);
  };

  const resetPomoTimer = () => {
    pausePomoTimer();
    setTimer(tabsSecondsMap[currentPomoStage]);
  };

  const toggleTimer = () => {
    !isPaused ? pausePomoTimer() : startOrResumePomoTimer();
  };

  return (
    <>
      <div>{formatSeconds(timer)}</div>
      <div>
        <button onClick={toggleTimer}>
          {!isPaused
            ? "Pause"
            : timer === tabsSecondsMap[currentPomoStage]
            ? "Start"
            : "Resume"}
        </button>
        <button
          disabled={timer === tabsSecondsMap[currentPomoStage]}
          onClick={resetPomoTimer}
        >
          Reset
        </button>
      </div>
    </>
  );
}

export default PomoTimer;
