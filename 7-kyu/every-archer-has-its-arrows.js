"use strict";

/**
 * solution 1
 * time: O(n)
 * space: O(1)
 *
 * @param {number[]} archers
 * @returns {boolean}
 */
function archersReady(archers) {
    if (archers.length < 1) return false;

    return archers.every((archer) => archer >= 5);
}

console.log(archersReady([1, 2, 3, 4])); // false
console.log(archersReady([5, 6, 7, 8])); // true
