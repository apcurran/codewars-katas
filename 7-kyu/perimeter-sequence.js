"use strict";

/**
 * solution 1
 * time: O(1)
 * space: O(1)
 * 
 * @param {number} a 
 * @param {number} n 
 * @returns {number}
 */
function perimeterSequence(a, n) {
    return (a * 4) * n;
}

console.log(perimeterSequence(1, 3)); // 12
