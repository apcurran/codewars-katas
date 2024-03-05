"use strict";

/**
 * solution 1
 * time: O(n) -- copy of number into a string
 * space: O(n)
 * 
 * @param {number} number 
 * @returns {number}
 */
function multiply(number) {
    const numDigitsCount = String(Math.abs(number)).length;

    return number * (5 ** numDigitsCount);
}

console.log(multiply(10)); // 250
console.log(multiply(5)); // 25
console.log(multiply(200)); // 25000
console.log(multiply(0)); // 0
console.log(multiply(-2)); // -10
