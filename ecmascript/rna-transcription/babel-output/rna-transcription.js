"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var failedTranscription = new Error('Invalid input DNA.');

var transcribed = {
  G: "C",
  C: "G",
  T: "A",
  A: "U"
};

var Transcriptor = (function () {
  function Transcriptor() {
    _classCallCheck(this, Transcriptor);
  }

  _createClass(Transcriptor, [{
    key: "toRna",
    value: function toRna(DNA) {
      var DnaArray = DNA.split('');
      return DnaArray.map(function (letter) {
        if (!transcribed[letter]) {
          throw failedTranscription;
        }
        return transcribed[letter];
      }).join('');
    }
  }]);

  return Transcriptor;
})();

exports["default"] = Transcriptor;
module.exports = exports["default"];