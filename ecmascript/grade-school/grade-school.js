class School {
  constructor() {
    this.studentRoster = {};
  }

  roster() {
    return Object.keys(this.studentRoster).reduce((students, grade) => {
      students[grade] = this.grade(grade);
      return students;
    }, {});
  }

  add(student, grade) {
     this.studentRoster[grade] ? this.studentRoster[grade].push(student) : this.studentRoster[grade] = [student];
     this.studentRoster[grade] = this.studentRoster[grade].sort();
  }

  grade(grade) {
    const students = this.studentRoster;
    const availableStudents = students[grade] ? [].concat(students[grade]) : [];
    return availableStudents;
  }

}


export default School;