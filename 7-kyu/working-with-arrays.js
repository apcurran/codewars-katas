"use strict";

/**
 * solution 1
 * time: O(n)
 * space: O(n)
 *
 * @param {number[]} arr
 * @returns {number[]} without the last element
 */
function withoutLast(arr) {
    return arr.slice(0, -1);
}

console.log(withoutLast([1, 2, 3, 4, 5])); // [1, 2, 3, 4]
