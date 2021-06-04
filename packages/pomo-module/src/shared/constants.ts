import { PomoTabEnum, PomoTabMinutesMap } from "./types";

export const tabsSecondsMap: PomoTabMinutesMap = {
  [PomoTabEnum.longBreak]: 15 * 60,
  [PomoTabEnum.pomodoro]: 25 * 60,
  [PomoTabEnum.shortBreak]: 5 * 60,
};
