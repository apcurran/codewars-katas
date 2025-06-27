"use strict";

/**
 * solution 1 -- iterative
 * time: O(n)
 * space: O(1)
 *
 * @param {number} n
 * @returns {string}
 */
function SeriesSum(n) {
    let sum = 0;

    for (let i = 0; i < n; i++) {
        const currNum = 1 / (1 + i * 3);
        sum += currNum;
    }

    return sum.toFixed(2);
}

console.log(SeriesSum(2)); // "1.25"
