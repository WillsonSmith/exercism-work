"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var School = (function () {
  function School() {
    _classCallCheck(this, School);

    this.studentRoster = {};
  }

  _createClass(School, [{
    key: "roster",
    value: function roster() {
      var _this = this;

      return Object.keys(this.studentRoster).reduce(function (students, grade) {
        students[grade] = _this.grade(grade);
        return students;
      }, {});
      // return Object.assign({}, this.studentRoster);
    }
  }, {
    key: "add",
    value: function add(student, grade) {
      this.studentRoster[grade] ? this.studentRoster[grade].push(student) : this.studentRoster[grade] = [student];
      this.studentRoster[grade] = this.studentRoster[grade].sort();
    }
  }, {
    key: "grade",
    value: function grade(_grade) {
      var students = this.studentRoster;
      var availableStudents = students[_grade] ? [].concat(students[_grade]) : [];
      return availableStudents;
    }
  }]);

  return School;
})();

exports["default"] = School;
module.exports = exports["default"];