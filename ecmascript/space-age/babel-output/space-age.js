'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var earthYearInSeconds = 31557600;
var orbitPeriod = {
  earth: 1,
  mercury: 0.2408467,
  venus: 0.61519726,
  mars: 1.8808158,
  jupiter: 11.862615,
  saturn: 29.447498,
  uranus: 84.016846,
  neptune: 164.79132
};

function calculateAge(earthYears, planet) {
  return parseFloat((earthYears / orbitPeriod[planet]).toFixed(2));
}

var SpaceAge = (function () {
  function SpaceAge(age) {
    _classCallCheck(this, SpaceAge);

    this.age = age;
    this.earthYears = age / earthYearInSeconds;
  }

  _createClass(SpaceAge, [{
    key: 'onEarth',
    value: function onEarth() {
      return calculateAge(this.earthYears, 'earth');
    }
  }, {
    key: 'onMercury',
    value: function onMercury() {
      return calculateAge(this.earthYears, 'mercury');
    }
  }, {
    key: 'onVenus',
    value: function onVenus() {
      return calculateAge(this.earthYears, 'venus');
    }
  }, {
    key: 'onMars',
    value: function onMars() {
      return calculateAge(this.earthYears, 'mars');
    }
  }, {
    key: 'onJupiter',
    value: function onJupiter() {
      return calculateAge(this.earthYears, 'jupiter');
    }
  }, {
    key: 'onSaturn',
    value: function onSaturn() {
      return calculateAge(this.earthYears, 'saturn');
    }
  }, {
    key: 'onUranus',
    value: function onUranus() {
      return calculateAge(this.earthYears, 'uranus');
    }
  }, {
    key: 'onNeptune',
    value: function onNeptune() {
      return calculateAge(this.earthYears, 'neptune');
    }
  }, {
    key: 'seconds',
    get: function get() {
      return this.age;
    }
  }]);

  return SpaceAge;
})();

exports['default'] = SpaceAge;
module.exports = exports['default'];