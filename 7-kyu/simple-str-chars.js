"use strict";

/**
 * solution 1 -- regex
 * time: O(n)
 * space: O(n)
 *
 * @param {string} str
 * @returns {number[]}
 */
function solve(str) {
    const uppercaseChars = str.match(/[A-Z]/g) || [];
    const lowercaseChars = str.match(/[a-z]/g) || [];
    const numberChars = str.match(/[0-9]/g) || [];
    const specialChars = str.match(/\W|_/g) || [];

    return [uppercaseChars.length, lowercaseChars.length, numberChars.length, specialChars.length];
}

// console.log( solve("*'&ABCDabcde12345") ); // [4,5,5,3]
console.log(solve("*'&ABCD12345")); // [4,5,5,3]
