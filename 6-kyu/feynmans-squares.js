"use strict";

/**
 * Recursive solution
 * 
 * The input to your function will always be a positive integer.
 * @param {number} n 
 * @returns {number}
 */
function countSquares(n) {
    // Base case
    if (n === 1) return 1;

    return (n ** 2) + countSquares(n - 1);
}

console.log( countSquares(1) ); // 1
console.log( countSquares(2) ); // 5
console.log( countSquares(3) ); // 14
