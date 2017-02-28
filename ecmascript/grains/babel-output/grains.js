'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _bigInteger = require('./big-integer');

var _bigInteger2 = _interopRequireDefault(_bigInteger);

function grains(_x2) {
  var _arguments = arguments;
  var _again = true;

  _function: while (_again) {
    var square = _x2;
    _again = false;
    var lastSquare = _arguments.length <= 1 || _arguments[1] === undefined ? 0 : _arguments[1];

    if (square === 0) {
      return lastSquare;
    }
    var value = lastSquare ? (0, _bigInteger2['default'])(lastSquare).multiply(2) : 1;
    _arguments = [_x2 = square - 1, value];
    _again = true;
    lastSquare = value = undefined;
    continue _function;
  }
}

var Grains = (function () {
  function Grains() {
    _classCallCheck(this, Grains);
  }

  _createClass(Grains, [{
    key: 'square',
    value: function square(_square) {
      return grains(_square).toString();
    }
  }, {
    key: 'total',
    value: function total() {
      var total = (0, _bigInteger2['default'])(0);
      for (var i = 1; i < 65; i++) {
        total = total.add(grains(i));
      }
      return total.toString();
    }
  }]);

  return Grains;
})();

exports['default'] = Grains;
module.exports = exports['default'];