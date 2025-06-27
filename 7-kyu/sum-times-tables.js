"use strict";

/**
 * solution 1
 * t = tables length
 * time: O(t)
 * space: O(1)
 *
 * @param {number[]} tables
 * @param {number} min
 * @param {number} max
 * @returns {number}
 */
function sumTimesTables(tables, min, max) {
    let sum = 0;

    for (let value of tables) {
        sum += value;
    }

    return ((sum * (min + max)) / 2) * (max - min + 1);
}

console.log(sumTimesTables([2, 3], 1, 3)); // 30
console.log(sumTimesTables([1, 3, 5], 1, 1)); // 9
console.log(sumTimesTables([1, 3, 5], 1, 10)); // 495
