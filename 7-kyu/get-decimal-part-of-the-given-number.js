"use strict";

// /**
//  * solution 1 -- string to decimal num conversion
//  * time: O(n)
//  * space: O(n)
//  * 
//  * @param {number} n 
//  * @returns {number} decimal portion of number
//  */
// function getDecimal(n) {
//     if (Number.isInteger(n)) return 0;

//     const decimalPortion = String(n).split(".")[1];

//     return Number(`0.${decimalPortion}`);
// }

/**
 * solution 2 -- math version (not quite as accurate)
 * time: O(1)
 * space: O(1)
 * 
 * @param {number} n 
 * @returns {number} decimal portion of number
 */
function getDecimal(n) {
    return Math.abs(n % 1);
}

console.log(getDecimal(2.4)); // 0.4
console.log(getDecimal(-0.2)); // 0.2
