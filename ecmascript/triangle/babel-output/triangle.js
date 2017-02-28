'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var triangleTypes = {
  1: 'equilateral',
  2: 'isosceles',
  3: 'scalene'
};

function throwNegative(side) {
  if (Math.sign(side) === -1) {
    throw new Error('negative sides are illegal');
  }
}

function throwZeroSize(set) {
  if (set.size === 1 && set.has(0)) {
    throw new Error('no size set');
  }
}

function throwTriangleInequality(sortedArray) {
  if (sortedArray[0] + sortedArray[1] < sortedArray[2]) {
    throw new Error('Violates inequality');
  }
}

function testForErrors(set, sortedArray) {
  throwTriangleInequality(sortedArray);
  throwZeroSize(set);
  sortedArray.forEach(throwNegative);
}

function triangleType(sidesArray) {
  var sorted = sidesArray.sort(function (a, b) {
    return a - b;
  });
  var sideSet = new Set();
  sorted.forEach(function (side) {
    return sideSet.add(side);
  });
  testForErrors(sideSet, sorted);
  return triangleTypes[sideSet.size];
}

var Triangle = (function () {
  function Triangle() {
    _classCallCheck(this, Triangle);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    this.sides = args;
  }

  _createClass(Triangle, [{
    key: 'kind',
    value: function kind() {
      return triangleType(this.sides);
    }
  }]);

  return Triangle;
})();

exports['default'] = Triangle;
module.exports = exports['default'];