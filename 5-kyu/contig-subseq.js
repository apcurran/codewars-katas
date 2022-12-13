"use strict";

/**
 * solution 1
 * time: O(n)
 * space: O(1)
 * 
 * @param {number[]} arr 
 * @returns {number}
 */
function largestSum(arr) {
    let maxSum = 0;
    let currentTotal = 0;

    for (let num of arr) {
        currentTotal += num;
        // reset if it passes into a negative amount
        if (currentTotal < 0) currentTotal = 0;

        maxSum = Math.max(maxSum, currentTotal);
    }

    return maxSum;
}

console.log( largestSum([31,-41,59,26,-53,58,97,-93,-23,84]) ); // 187
