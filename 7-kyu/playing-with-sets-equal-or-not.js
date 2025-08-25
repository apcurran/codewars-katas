"use strict";

/**
 * solution 1 -- iterative
 * time: O(s1 + s2)
 * space: O(1)
 *
 * @param {Set} s1
 * @param {Set} s2
 * @returns {Boolean}
 */
function areEqual(s1, s2) {
    // iterate all values in s1
    // check if value of s1 is within s2
    for (let value of s1) {
        if (!s2.has(value)) {
            return false;
        }
    }

    // iterate all values in s2
    // check if value of s2 is within s1
    for (let value of s2) {
        if (!s1.has(value)) {
            return false;
        }
    }

    // only if both loops pass
    return true;
}

/**
 * @param {Set} s1
 * @param {Set} s2
 * @returns {Boolean}
 */
function notEqual(s1, s2) {
    return !areEqual(s1, s2);
}

console.log(areEqual(new Set([1, 2, 3]), new Set([3, 2, 1]))); // true
console.log(notEqual(new Set([1, 2, 3]), new Set([3, 2, 1]))); // false
