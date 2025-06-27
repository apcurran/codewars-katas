"use strict";

/**
 * solution 1
 * time: O(1)
 * space: O(1)
 *
 * @param {number} num
 * @param {number} power
 * @returns {number}
 */
function danspower(num, power) {
    const result = num ** power;

    if (result % 2 === 0) {
        // even value
        return result;
    } else {
        return Math.round(result / 10) * 10;
    }
}

console.log(danspower(7, 2)); // 50
console.log(danspower(8, 1)); // 8
