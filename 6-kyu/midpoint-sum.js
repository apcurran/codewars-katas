"use strict";

/**
 * solution 1
 * time: O(n^2)
 * space: O(n)
 *
 * @param {number[]} nums
 * @returns {number|undefined} index of midpoint element where left and right side sums are equal
 */
function midpointSum(nums) {
    if (nums.length <= 2) return undefined;

    for (let i = 0; i < nums.length; i++) {
        const leftChunk = nums.slice(0, i);

        if (leftChunk.length === 0) continue;

        const leftSum = leftChunk.reduce(
            (sum, currentNum) => sum + currentNum,
            0,
        );

        const rightChunk = nums.slice(i + 1);

        if (rightChunk.length === 0) continue;

        const rightSum = rightChunk.reduce(
            (sum, currentNum) => sum + currentNum,
            0,
        );

        if (leftSum === rightSum) return i;
    }

    return undefined;
}

console.log(midpointSum([4, 1, 7, 9, 3, 9])); // 3
console.log(midpointSum([1, 0, 1])); // 1
console.log(midpointSum([-10, 3, 7, 8, -6, -13, 21])); // 4
console.log(midpointSum([1, 0, 0])); // undefined
