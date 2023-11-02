"use strict";

/**
 * solution 1
 * time: O(n)
 * space: O(1)
 * 
 * @param {number[]} nums 
 * @returns {number}
 */
function sumSquares(nums) {
    return nums.reduce((sum, curr) => sum + curr ** 2, 0);
}

console.log(sumSquares([1,2,3,4,5])); // 55
console.log(sumSquares([11,13,15,18,2])); // 843
