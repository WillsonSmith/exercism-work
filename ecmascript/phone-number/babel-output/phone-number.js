'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function containsLetters(number) {
  return number.toUpperCase() !== number;
}

function startsWithOne(number) {
  return number[0] === '1';
}

function validNumber(number) {
  var numbersOnly = number.match(/[0-9]/g);

  if (containsLetters(number)) {
    return false;
  }
  if (numbersOnly.length > 10 && !startsWithOne(numbersOnly) || numbersOnly.length < 10) {
    return false;
  }
  return numbersOnly.join('');
}

var PhoneNumber = (function () {
  function PhoneNumber(number) {
    _classCallCheck(this, PhoneNumber);

    this.num = number;
  }

  _createClass(PhoneNumber, [{
    key: 'number',
    value: function number() {
      var validatedNumber = validNumber(this.num);
      if (!validatedNumber) {
        return null;
      }
      if (startsWithOne(validatedNumber) && validatedNumber.length === 11) {
        return validatedNumber.split('').splice(1, validatedNumber.length - 1).join('');
      }
      return validatedNumber;
    }
  }]);

  return PhoneNumber;
})();

exports['default'] = PhoneNumber;
module.exports = exports['default'];