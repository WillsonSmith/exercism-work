"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = isLeapYear;
function divisibleByFourHundred(num) {
  return num % 400 === 0;
}

function divisibleByOneHundred(num) {
  return num % 100 === 0;
}

function divisibleByFour(num) {
  return num % 4 === 0;
}

function isLeapYear(year) {
  return divisibleByFour(year) && !divisibleByOneHundred(year) || divisibleByFourHundred(year);
}

module.exports = exports["default"];