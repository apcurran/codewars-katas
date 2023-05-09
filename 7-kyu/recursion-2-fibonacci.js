"use strict";

/**
 * solution 1 -- recursion
 * time: O(2^n)
 * space: O(n)
 * 
 * @param {number} n 
 * @returns {number}
 */
function fibonacci(n) {
    if (n === 1 || n === 2) return 1;

    return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log( fibonacci(1) ); // 1
console.log( fibonacci(4) ); // 3
