export enum PomoTabEnum {
  pomodoro = "Pomodoro",
  shortBreak = "Short Break",
  longBreak = "Long Break",
}

export type PomoTabMinutesMap = {
  [key in PomoTabEnum]: number;
};
