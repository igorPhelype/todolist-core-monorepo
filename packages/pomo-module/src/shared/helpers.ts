export function formatSeconds(time: number): string {
  function padNumber(n: number) {
    return n.toString().padStart(2, "0");
  }

  // Hours, minutes and seconds
  const hrs = ~~(time / 3600);
  const mins = ~~((time % 3600) / 60);
  const secs = ~~time % 60;

  // Output like "1:01" or "4:03:59" or "123:03:59"
  let ret = "";
  if (hrs > 0) {
    ret += `${padNumber(hrs)}:`;
  }
  ret += `${padNumber(mins)}:${padNumber(secs)}`;
  return ret;
}
