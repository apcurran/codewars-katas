"use strict";

/**
 * Solution 1 -- recursive
 * time: O(n)
 * space: O(n) -- due to recursive call stack
 * 
 * @param {number} dividend 
 * @param {number} divisor 
 * @returns {number}
 */
function remainder(dividend, divisor) {
    const subResult = dividend - divisor;
    // base case
    if (subResult === 0) return 0;
    // base case
    if (subResult !== 0 && subResult < divisor) return subResult;

    // Recursive call
    return remainder(subResult, divisor);
}

console.log( remainder(19, 2)); // 1
console.log( remainder(10, 2)); // 0