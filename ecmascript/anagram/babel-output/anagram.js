'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var Anagram = (function () {
  function Anagram(word) {
    _classCallCheck(this, Anagram);

    this.word = word.toLowerCase();
    this.wordLetters = this.word.split('');
  }

  _createClass(Anagram, [{
    key: 'matches',
    value: function matches() {
      var _this = this;

      for (var _len = arguments.length, wordArray = Array(_len), _key = 0; _key < _len; _key++) {
        wordArray[_key] = arguments[_key];
      }

      if (Array.isArray(wordArray[0])) {
        wordArray = wordArray[0];
      }
      var sortedWordLetters = this.wordLetters.sort();
      return wordArray.filter(function (word) {
        var lowerCaseWord = word.toLowerCase();
        var sorted = lowerCaseWord.split('').sort();
        if (lowerCaseWord.length !== _this.word.length || lowerCaseWord === _this.word) {
          return false;
        }
        var filtered = sorted.filter(function (letter, index) {
          return sortedWordLetters[index] !== letter;
        });
        return filtered.length === 0;
      });
      // return wordArray.filter((word) => {
      //   const matchingWord = word.toLowerCase();
      //   if (matchingWord.length !== this.word.length || matchingWord === this.word) {
      //     return false;
      //   }
      //   const letters = matchingWord.split('');
      //   const nonMatch = this.wordLetters.forEach((letter) => {
      //     letters.indexOf(letter) > - 1 ? letters.splice(letters.indexOf(letter), 1) : null;
      //   })
      //   return letters.length > 0 ? false : true;
      // });
    }
  }]);

  return Anagram;
})();

exports['default'] = Anagram;
module.exports = exports['default'];