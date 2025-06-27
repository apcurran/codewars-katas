"use strict";

/**
 * solution 1
 * time: O(1)
 * spaces: O(1)
 *
 * @param {number} n
 * @returns {boolean} true if -0, otherwise false
 */
function isNegativeZero(n) {
    return Object.is(n, -0);
}

console.log(isNegativeZero(-0)); // true
console.log(isNegativeZero(0)); // false
console.log(isNegativeZero(3)); // false
