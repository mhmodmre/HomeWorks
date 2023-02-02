import { Stopwatch } from "./stopwatch.js";

let stopWatch = new Stopwatch();

document.getElementById("startBtn").addEventListener("click", () => {
  stopWatch.start();
});
document.getElementById("stopBtn").addEventListener("click", () => {
  stopWatch.stop();
});
