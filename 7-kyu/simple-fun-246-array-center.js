"use strict";

/**
 * solution 1 -- reduce & filter methods
 * time: O(n)
 * space: O(n)
 *
 * @param {number[]} a
 * @returns {number[]}
 */
function arrayCenter(a) {
    const aMin = Math.min(...a);
    const aAvg = a.reduce((sum, curr) => sum + curr, 0) / a.length;

    return a.filter((num) => Math.abs(num - aAvg) < aMin);
}

console.log(arrayCenter([8, 3, 4, 5, 2, 8])); // [4, 5]
