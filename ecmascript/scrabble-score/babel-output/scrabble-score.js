'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
var scoreChart = {
  a: 1, b: 3, c: 3, d: 2, e: 1,
  f: 4, g: 2, h: 4, i: 1, j: 8,
  k: 5, l: 1, m: 3, n: 1, o: 1,
  p: 3, q: 10, r: 1, s: 1, t: 1,
  u: 1, v: 4, w: 4, x: 8, y: 4,
  z: 10
};

function score(word) {
  if (word) {
    return word.split('').reduce(function (total, letter) {
      return total + scoreChart[letter.toLowerCase()];
    }, 0);
  }
  return 0;
}

exports['default'] = score;
module.exports = exports['default'];