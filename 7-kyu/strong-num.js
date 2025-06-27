"use strict";

/**
 * solution 1
 * n = factorials len
 * m = digit
 *
 * time: O(n * m)
 * space: O(n)
 *
 * @param {number} n
 * @returns {string}
 */
function strong(n) {
    // get factorial of each digit
    const factorials = String(n)
        .split("")
        .map((digitStr) => getFactorial(digitStr));

    // add factorial results of digits together
    const factorialsSum = factorials.reduce((sum, currNum) => sum + currNum, 0);
    // check if this sum is equal to original number
    // if yes -> strong
    // if no -> not strong
    return factorialsSum === n ? "STRONG!!!!" : "Not Strong !!";
}

/**
 * time: O(m)
 * space: O(1)
 *
 * @param {string} digitStr
 * @returns {number}
 */
function getFactorial(digitStr) {
    const digitNum = Number(digitStr);
    let factorialTotal = 1;

    for (let i = 1; i <= digitNum; i++) {
        factorialTotal *= i;
    }

    return factorialTotal;
}

console.log(strong(145)); // "STRONG!!!!"
console.log(strong(7)); // "NOT STRONG !!"
