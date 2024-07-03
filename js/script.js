'use strict';

function Student(name, lastName, yearOfBirth, grades = []) {
    this.name = name;
    this.lastName = lastName;
    this.yearOfBirth = yearOfBirth;
    this.grades = grades;
    this.attendance = new Array(25).fill(null);
}

Student.prototype.getFullName = function () {
    return `${this.name} ${this.lastName}`;
};

Student.prototype.getAge = function () {
    const currentYear = new Date().getFullYear();
    return currentYear - this.yearOfBirth;
};

Student.prototype.getGPA = function () {
    if (this.grades.length === 0) return 0;

    const sum = this.grades.reduce((acc, grade) => acc + grade, 0);
    return sum / this.grades.length;
};

Student.prototype.visiting = function () {
    const i = this.attendance.indexOf(null);

    if (i !== -1) {
        this.attendance[i] = true;
    } else {
        console.log('Явка вже повністю зафіксована!');
    }
};

Student.prototype.absenteeism = function () {
    const i = this.attendance.indexOf(null);

    if (i !== -1) {
        this.attendance[i] = false;
    } else {
        console.log('Явка вже повністю зафіксована!');
    }
};

Student.prototype.getVisitingRate = function () {
    const visitingClasses = this.attendance.filter(day => day === true).length;
    const totalClasses = this.attendance.filter(day => day !== null).length;

    return visitingClasses / totalClasses;
};

Student.prototype.summary = function () {
    const avgGrade = this.getGPA();
    const attendanceRate = this.getVisitingRate();

    if (avgGrade > 90 && attendanceRate > 0.9) {
        return "Молодець!";
    } else if (avgGrade > 90 || attendanceRate > 0.9) {
        return "Добре, але можна краще";
    } else {
        return "Редиска!";
    }
};


const s1 = new Student('Letty', 'Ortiz', 2001, [67, 98, 100, 56]);
const s2 = new Student('Paul', 'Walker', 2000, [70, 65, 60, 75]);
const s3 = new Student('Dominic', 'Toretto', 1999, [78, 75, 64, 68]);
const s4 = new Student('Mia', 'Toretto', 2002, [88, 98, 93, 100]);

console.log(s1.getFullName());
console.log(s1.getAge());
console.log(s1.getGPA());

s1.visiting();
s1.visiting();
s1.absenteeism();

console.log(s1.attendance);
console.log(s1.getGPA());
console.log(s1.summary());

console.log('________________________________________________________________________________');

console.log(s4.getFullName());
console.log(s4.getAge());
console.log(s4.getGPA());

for (let i = 0; i < 20; i++) {
    s4.visiting();
}
s4.absenteeism();

console.log(s4.attendance);
console.log(s4.getGPA());
console.log(s4.summary());
