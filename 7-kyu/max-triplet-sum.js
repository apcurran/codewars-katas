"use strict";

/**
 * solution 1
 * time: O(n * log n) -- due to sorting arr
 * space: O(n)
 * 
 * @param {number[]} numbers 
 * @returns {number}
 */
function maxTriSum(numbers) {
    const sortedNumsNoDups = [...new Set(numbers)].sort((a, b) => a - b);
    const largestThreeNums = sortedNumsNoDups.slice(-3);

    return largestThreeNums.reduce((sum, currNum) => sum + currNum, 0);
}

console.log( maxTriSum([3, 2, 6, 8, 2, 3]) ); // 17
console.log( maxTriSum([-14, -12, -7, -42, -809, -14, -12]) ); // -33
