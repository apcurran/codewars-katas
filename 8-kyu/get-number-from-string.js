"use strict";

/**
 * solution 1 -- regex
 * time: O(n)
 * space: O(n)
 * 
 * @param {string} s 
 * @returns {number}
 */
function getNumberFromString(s) {
    const nonDigits = /\D/g;
    const digitsOnly = s.replace(nonDigits, "");

    return Number(digitsOnly);
}

console.log(getNumberFromString("1")); // 1
console.log(getNumberFromString("123")); // 123
console.log(getNumberFromString("this is number: 7")); // 7
