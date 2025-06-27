"use strict";

/**
 * solution 1
 * time: O(n * log n)
 * space: O(n)
 * 
 * @param {number[]} numbers 
 * @param {number} size 
 * @returns {number}
 */
function maxProduct(numbers, size) {
    const sortedNums = [...numbers].sort((a, b) => a - b);

    return sortedNums
        .slice(-size)
        .reduce((prod, curr) => prod * curr, 1);
}

console.log( maxProduct([4, 3, 5], 2) ); // 20
console.log( maxProduct([10, 2, 3, 8, 1, 10, 4], 5) ); // 9600
console.log( maxProduct([-4, -27, -15, -6, -1], 2) ); // 4
