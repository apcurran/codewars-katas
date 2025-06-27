"use strict";

/**
 * solution 1 -- math formula
 * time: O(1)
 * space: O(1)
 *
 * @param {number} n
 * @returns {number}
 */
function shapeArea(n) {
    return n ** 2 + (n - 1) ** 2;
}

console.log(shapeArea(1)); // 1
console.log(shapeArea(2)); // 5
console.log(shapeArea(3)); // 13
