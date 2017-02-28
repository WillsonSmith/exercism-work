function divisibleByFourHundred(num) {
  return num%400 === 0;
}

function divisibleByOneHundred(num) {
  return num%100 === 0;
}

function divisibleByFour(num) {
  return num%4 === 0;
}

export default function isLeapYear(year) {
  return (divisibleByFour(year) &&
    !divisibleByOneHundred(year)) ||
    divisibleByFourHundred(year);
}