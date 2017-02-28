'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var alphabet = 'abcdefghijklmnopqrstuvwxyz';

var Pangram = (function () {
  function Pangram(string) {
    _classCallCheck(this, Pangram);

    this.string = string.toLowerCase();
  }

  _createClass(Pangram, [{
    key: 'isPangram',
    value: function isPangram() {
      var _this = this;

      var alphabetArray = alphabet.split('').filter(function (letter) {
        return !_this.string.includes(letter);
      });
      return alphabetArray.length === 0;
    }
  }]);

  return Pangram;
})();

exports['default'] = Pangram;
module.exports = exports['default'];