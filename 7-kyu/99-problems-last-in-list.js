"use strict";

/**
 * solution 1
 * time: O(1)
 * space: O(1)
 *
 * @param {number[]} arr
 * @returns {number|null}
 */
function last(arr) {
    if (arr.length === 0) return null;

    return arr[arr.length - 1];
}

console.log(last([1, 2, 3])); // 3
console.log(last([])); // null
