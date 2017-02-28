"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
function reduceToString(acronym, word) {
  var upperLetters = word.split(/(?=[A-Z])/);
  if (upperLetters.length > 1 && !word.charAt(1).match(/[A-Z]/)) {
    return acronym + upperLetters.reduce(reduceToString, "");
  }
  return acronym + word.charAt(0).toUpperCase();
}

var Acronyms = {
  parse: function parse(phrase) {
    var words = phrase.split(/\s|[-]/g);
    return words.reduce(reduceToString, "");
  }
};

exports["default"] = Acronyms;
module.exports = exports["default"];