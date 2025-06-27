"use strict";

/**
 * solution 1
 * time: O(n)
 * space: O(n)
 *
 * @param {number[]} numbers
 * @returns {number[]}
 */
function roundToFive(numbers) {
    return numbers.map(function roundToNearestDivisibleByFive(num) {
        return Math.round(num / 5) * 5;
    });
}

console.log(roundToFive([34.5, 56.2, 11, 13])); // [35, 55, 10, 15]
