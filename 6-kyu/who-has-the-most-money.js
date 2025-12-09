"use strict";

class Student {
    constructor(name, fives, tens, twenties) {
        this.name = name;
        this.fives = fives;
        this.tens = tens;
        this.twenties = twenties;
    }
}

/**
 * solution 1
 * time: O(n)
 * space: O(n)
 *
 * @param {Student[]} students
 * @returns {string} student name with max dollar amount
 */
function mostMoney(students) {
    if (students.length === 1) {
        return students[0].name;
    }

    const studentDollarAmounts = students.map(function getStudentDollarAmount(student) {
        return student.fives * 5 + student.tens * 10 + student.twenties * 20;
    });
    const allStudentsHaveEqualDollarAmounts = studentDollarAmounts.every(
        function checkStudentDollarAmountsEqual(dollarAmount) {
            return dollarAmount === studentDollarAmounts[0];
        },
    );

    if (allStudentsHaveEqualDollarAmounts) {
        return "all";
    }

    const maxDollarAmount = Math.max(...studentDollarAmounts);
    const maxDollarAmountStudentIndex = studentDollarAmounts.indexOf(maxDollarAmount);

    return students[maxDollarAmountStudentIndex].name;
}

const andy = new Student("Andy", 0, 0, 2);
const stephen = new Student("Stephen", 0, 4, 0);
const eric = new Student("Eric", 8, 1, 0);
const david = new Student("David", 2, 0, 1);
const phil = new Student("Phil", 0, 2, 1);
const cam = new Student("Cameron", 2, 2, 0);
const geoff = new Student("Geoff", 0, 3, 0);

console.log(mostMoney([andy, stephen, eric, david, phil])); // "Eric"
console.log(mostMoney([andy])); // "Andy"
console.log(mostMoney([stephen])); // "Stephen"
console.log(mostMoney([david, cam, geoff])); // "all"
