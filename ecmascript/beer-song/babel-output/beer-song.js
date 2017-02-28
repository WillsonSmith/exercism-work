'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
var zeroBottleString = 'No more bottles of beer on the wall, no more bottles of beer.\nGo to the store and buy some more, 99 bottles of beer on the wall.\n';

function _sing(_x3, _x4, _x5) {
  var _again = true;

  _function: while (_again) {
    var from = _x3,
        to = _x4,
        string = _x5;
    _again = false;

    string += from !== to ? _verse(from) + '\n' : _verse(from);

    if (from !== to) {
      _x3 = from - 1;
      _x4 = to;
      _x5 = string;
      _again = true;
      continue _function;
    } else {
      return string;
    }
  }
}

function pluralized(number) {
  if (number > 1) {
    return 's';
  }
  return false;
}

function _verse(number) {
  var pluralize = pluralized(number) || '';
  var oneLess = number - 1;
  if (number === 0) {
    return zeroBottleString;
  }

  return number + ' bottle' + pluralize + ' of beer on the wall, ' + number + ' bottle' + pluralize + ' of beer.\nTake ' + (pluralize === 's' ? 'one' : 'it') + ' down and pass it around, ' + (oneLess || 'no more') + ' bottle' + (oneLess > 1 || oneLess === 0 ? 's' : '') + ' of beer on the wall.\n';
}
var Beer = {
  verse: function verse(number) {
    return _verse(number);
  },
  sing: function sing() {
    var from = arguments.length <= 0 || arguments[0] === undefined ? 99 : arguments[0];
    var to = arguments.length <= 1 || arguments[1] === undefined ? 0 : arguments[1];

    return _sing(from, to, '');
  }
};

exports['default'] = Beer;
module.exports = exports['default'];