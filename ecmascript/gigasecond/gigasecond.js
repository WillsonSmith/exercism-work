//giga - 1,000,000,000

const gigasecondInMilliseconds = 1000000000 * 1000;

export default class Gigasecond {
  constructor(date) {
    this.gigasecondDate = new Date(date.getTime() + gigasecondInMilliseconds);
  }

  date() {
    return this.gigasecondDate;
  }
}