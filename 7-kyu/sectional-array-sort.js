"use strict";

/**
 * solution 1
 * time: O(n^2)
 * space: O(n)
 *
 * @param {number[]} nums
 * @param {number} start
 * @param {number} [length] optional param
 * @returns {number[]} sorted array
 */
function sectSort(nums, start, length) {
    let numsPortion = length ? nums.slice(start, start + length) : nums.slice(start);
    numsPortion.sort((a, b) => a - b);

    if (length) {
        nums.splice(start, length, ...numsPortion);
    } else {
        nums.splice(start, nums.length, ...numsPortion);
    }

    return nums;
}

console.log(sectSort([1, 2, 5, 7, 4, 6, 3, 9, 8], 2)); // [1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(sectSort([9, 7, 4, 2, 5, 3, 1, 8, 6], 2, 5)); // [9, 7, 1, 2, 3, 4, 5, 8, 6]
