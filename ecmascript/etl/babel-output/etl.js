"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = transform;

function transform(old) {
  var keys = Object.keys(old);
  return keys.reduce(function (acc, key) {
    old[key].forEach(function (k) {
      return acc[k.toLowerCase()] = Number(key);
    });
    return acc;
  }, {});
}

module.exports = exports["default"];