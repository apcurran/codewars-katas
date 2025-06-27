"use strict";

/**
 * solution 1 -- math formula
 * time: O(1)
 * space: O(1)
 *
 * @param {number} n
 * @returns {number} red beads count
 */
function countRedBeads(n) {
    if (n < 2) return 0;

    return (n - 1) * 2;
}

console.log(countRedBeads(0)); // 0
console.log(countRedBeads(1)); // 0
console.log(countRedBeads(3)); // 4
console.log(countRedBeads(5)); // 8
