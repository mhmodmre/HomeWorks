export class Stopwatch {
  timer;
  timekeeper;
  constructor() {
    this.timer = 0;
    this.timekeeper = 0;
  }
  start() {
    this.timekeeper = setTimeout(() => {
      this.changeStopwatch();
    }, 1000);
  }
  changeStopwatch() {
    this.timer++;
    document.getElementById("screen").innerText = this.timer;
    this.start();
  }
  stop() {
    clearTimeout(this.timekeeper);
  }
}
