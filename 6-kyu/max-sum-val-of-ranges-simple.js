"use strict";

/**
 * solution 1
 * time: O(n^2)
 * space: O(n)
 * 
 * @param {number[]} arr 
 * @param {number[][]} ranges
 * @returns {number}
 */
function maxSum(arr, ranges) {
    let maxSum = -Infinity;
    // iterate over range 2D arr
    for (let [startRange, endRange] of ranges) {
        // for each range, get sum
        const rangeArr = arr.slice(startRange, endRange + 1);
        const localSum = rangeArr.reduce((sum, curr) => sum + curr, 0);
        // add sum to resArr
        maxSum = Math.max(maxSum, localSum);
    }
    // return max sum from resArr
    return maxSum;
}

console.log( maxSum([1, -2, 3, 4, -5, -4, 3, 2, 1], [[1, 3], [0, 4], [6, 8]]) ); // 6
console.log( maxSum([1, -2, 3, 4, -5, -4, 3, 2, 1], [[1, 3]]) ); // 5
console.log( maxSum([1, -2, 3, 4, -5, -4, 3, 2, 1], [[1, 4], [2, 5]]) ); // 0
