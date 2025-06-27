"use strict";

/**
 * solution 1 -- functional
 * time: O(n)
 * space: O(n)
 *
 * @param {number} n
 * @returns {boolean}
 */
function numberJoy(n) {
    const digitSum = String(n)
        .split("")
        .reduce((sum, curr) => sum + Number(curr), 0);
    const reversedSum = +String(digitSum).split("").reverse().join("");
    const digitSumRevSumProd = digitSum * reversedSum;

    return n === digitSumRevSumProd;
}

console.log(numberJoy(1729)); // true
console.log(numberJoy(1997)); // false
