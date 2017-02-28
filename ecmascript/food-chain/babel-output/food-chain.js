"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var reactionLyrics = {
  fly: "I don't know why she swallowed the fly. Perhaps she'll die.",
  spider: "It wriggled and jiggled and tickled inside her.",
  bird: "How absurd to swallow a bird!",
  cat: "Imagine that, to swallow a cat!",
  dog: "What a hog, to swallow a dog!",
  goat: "Just opened her throat and swallowed a goat!",
  cow: "I don't know how she swallowed a cow!",
  horse: "She's dead, of course!"
};

var specialSpiderLyric = ' that wriggled and jiggled and tickled inside her.';

var creatureArray = ['fly', 'spider', 'bird', 'cat', 'dog', 'goat', 'cow', 'horse'];

function buildFirstLine() {
  var creature = creatureArray[0];
  return "I know an old lady who swallowed a " + creature + ".\n" + reactionLyrics[creature] + "\n";
}

function swallowedTo(creature) {
  var creatureIndex = creatureArray.indexOf(creature);
  var previousCreature = creatureArray(creatureIndex - 1);
  return "She swallowed the " + creature + " to catch the " + previousCreature + (previousCreature === 'spider' ? specialSpiderLyric : '.');
}

function buildLine(creature, previousCreatureIndex) {
  var previousCreature = creatureArray[previousCreatureIndex];
  return "I know an old lady who swallowed a " + creature + ".\n" + reactionLyrics[creature] + "\nswallowedTo(creature)\n" + reactionLyrics.fly + "\n";
}

function spliceToItem(array, startPoint, endPoint) {
  var startIndex = startPoint - 1;
  var spliceLength = endPoint - startPoint || 1;
  return [].concat(array).splice(startIndex, spliceLength);
}

var Song = (function () {
  function Song() {
    _classCallCheck(this, Song);
  }

  _createClass(Song, [{
    key: "verse",
    value: function verse(start) {
      var end = arguments.length <= 1 || arguments[1] === undefined ? start : arguments[1];
      return (function () {
        var linesArray = spliceToItem(creatureArray, start, end);

        return linesArray.reverse().reduce(function (acc, current) {
          if (current === "fly" && linesArray.length === 1) {
            return acc + buildFirstLine();
          }
          return acc + buildLine(current, creatureArray.indexOf(current) - 1);
        }, "");
        // return linesArray.reduce((acc, current) => {
        //   if (!acc.lines.length) {
        //     return {index: acc.index + 1, lines: acc.lines + buildFirstLine()};
        //   }
        //   return {index: acc.index + 1, lines: buildLine(acc.index)};
        // }, {index: start - 1, lines: ""}).lines;
      })();
    }
  }, {
    key: "verses",
    value: function verses(start, end) {
      return this.verse(start, end);
    }
  }]);

  return Song;
})();

exports["default"] = Song;
module.exports = exports["default"];