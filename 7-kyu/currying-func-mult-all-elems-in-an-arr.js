"use strict";

/**
 * return a func that takes a single arg and multiplies the nums arr by this arg
 *
 * solution 1
 * time: O(n)
 * space: O(n)
 *
 * @param {number[]} nums
 * @returns {function}
 */
function multiplyAll(nums) {
    /**
     * @param {number} multiplier
     * @returns {number[]}
     */
    return function multiplyByThisArg(multiplier) {
        return nums.map((num) => num * multiplier);
    };
}

console.log(multiplyAll([1, 2, 3])(2)); // [2, 4, 6]
