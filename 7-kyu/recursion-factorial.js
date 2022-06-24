"use strict";

/**
 * solution 1 -- recursive
 * time: O(n)
 * space: O(n)
 * 
 * @param {number} n 
 * @returns {number}
 */
function factorial(n) {
    if (n === 0 || n === 1) return 1;

    return n * factorial(n - 1);
}

console.log( factorial(5) ); // 120
