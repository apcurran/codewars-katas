"use strict";

/**
 * solution 1
 * time: O(1)
 * space: O(1)
 *
 * @param {number} x number of consecutive integers
 * @param {number} y sum of consecutive integers
 * @param {number} n position of requested integer
 * @return {number} consecutive integer at requested position
 */
function position(x, y, n) {
    const avg = y / x;
    const startingNum = avg - (x - 1) / 2;

    return startingNum + n;
}

console.log(position(4, 14, 3)); // 5
