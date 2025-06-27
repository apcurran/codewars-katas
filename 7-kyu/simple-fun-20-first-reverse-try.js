"use strict";

/**
 * solution 1
 * time: O(n)
 * space: O(1)
 *
 * @param {number[]} arr
 * @returns {number[]}
 */
function firstReverseTry(arr) {
    if (arr.length === 0) return arr;

    const firstNum = arr[0];
    const lastNum = arr[arr.length - 1];

    arr[0] = lastNum;
    arr[arr.length - 1] = firstNum;

    return arr;
}

console.log(firstReverseTry([1, 2, 3, 4, 5])); // [5, 2, 3, 4, 1]
