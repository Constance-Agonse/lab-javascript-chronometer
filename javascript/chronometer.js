class Chronometer {

  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(callback) {
    if (callback && typeof callback === 'function') {
      callback();
    };
    this.intervalId = setInterval(() => {
      this.currentTime++;
    }, 1000);
  }

  getMinutes() {
    if (this.currentTime === 0) { return "00" }
    return this.computeTwoDigitNumber(Math.floor(this.currentTime / 60));
  }

  getSeconds() {
    return this.computeTwoDigitNumber(this.currentTime % 60);
  }

  computeTwoDigitNumber(value) {
    let stringValue = value.toString()
    if (stringValue.length === 2) return stringValue;
    else return "0" + stringValue;
  }

  stop() {
    clearInterval(this.intervalId);
  }

  reset() {
    return this.currentTime = 0;
  }

  split() {
    let seconds = this.computeTwoDigitNumber(this.getSeconds());
    let minutes = this.computeTwoDigitNumber(this.getMinutes());
    return `${minutes}:${seconds}`;
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
