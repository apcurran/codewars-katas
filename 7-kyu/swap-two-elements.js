"use strict";

/**
 * solution 1
 * time: O(n)
 * space: O(1)
 *
 * @param {number[]} array
 * @param {number} a
 * @param {number} b
 * @returns {number[]}
 */
function swapTwo(array, a, b) {
    const aFirstIndex = array.indexOf(a);
    const bLastIndex = array.lastIndexOf(b);
    array[aFirstIndex] = b;
    array[bLastIndex] = a;

    return array;
}

console.log(swapTwo([1, 2, 3, 4], 2, 4)); // [1, 4, 3, 2]
