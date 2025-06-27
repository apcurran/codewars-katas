"use strict";

/**
 * Solution 1
 * time: O(n)
 * space: O(n)
 *
 * @param {number[]} arr
 * @returns {number[]}
 */
function doubleEveryOther(arr) {
    return arr.map((num, index) => (index % 2 === 0 ? num : num * 2));
}

console.log(doubleEveryOther([1, 2, 3, 4])); // [1, 4, 3, 8]
