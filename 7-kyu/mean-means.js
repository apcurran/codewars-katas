"use strict";

/**
 * solution 1
 * time: O(n)
 * space: O(n)
 *
 * @param {number[]} nums
 * @param {number} arith_mean
 * @returns {number}
 */
function geo_mean(nums, arith_mean) {
    // add 1 for the missing number from the list
    const n = nums.length + 1;
    const totalSum = arith_mean * n;
    const currentSum = nums.reduce((sum, current) => sum + current, 0);
    const missingNumber = totalSum - currentSum;
    const completeList = [...nums, missingNumber];
    // geometricMean -> multiply all nums and take to nth root
    const totalProduct = completeList.reduce(
        (product, current) => product * current,
        1,
    );

    return totalProduct ** (1 / n);
}

console.log(geo_mean([1, 3, 9, 27], 24.2)); // 9
