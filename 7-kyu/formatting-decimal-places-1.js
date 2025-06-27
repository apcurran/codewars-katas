"use strict";

/**
 * solution 1
 * time: O(1)
 * space: O(1)
 *
 * @param {number} num
 * @returns {number}
 */
function twoDecimalPlaces(num) {
    return Math.trunc(num * 100) / 100;
}

console.log(twoDecimalPlaces(32.8493)); // 32.84
console.log(twoDecimalPlaces(14.3286)); // 14.32
