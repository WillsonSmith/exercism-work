"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var letterOptions = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

var usedNames = new Set();

function randomLetter() {
  return letterOptions.charAt(Math.floor(Math.random() * 26));
}
function randomNumber() {
  return [Math.floor(Math.random() * 9), Math.floor(Math.random() * 9), Math.floor(Math.random() * 9)].join('');
}

function generateName() {
  var _again = true;

  _function: while (_again) {
    _again = false;

    var robotName = "" + randomLetter() + randomLetter() + randomNumber();
    if (usedNames.has(robotName)) {
      _again = true;
      robotName = undefined;
      continue _function;
    }
    usedNames.add(robotName);
    return robotName;
  }
}

var Robot = (function () {
  function Robot() {
    _classCallCheck(this, Robot);

    this.robotName = generateName();
  }

  _createClass(Robot, [{
    key: "reset",
    value: function reset() {
      var lastName = this.robotName;
      this.robotName = generateName();
    }
  }, {
    key: "name",
    get: function get() {
      return this.robotName;
    }
  }]);

  return Robot;
})();

exports["default"] = Robot;
module.exports = exports["default"];