"use strict";

/**
 * solution 1
 * time: O(n^2)
 * space: O(n)
 * 
 * @param {number} n 
 * @returns {number|null}
 */
function countCows(n) {
    if (typeof n !== "number") return null;

    if (n < 3) return 1;

    // parent cow children + child cow children
    return countCows(n - 1) + countCows(n - 3);
}

console.log(countCows(1)); // 1
console.log(countCows(3)); // 2
console.log(countCows(10)); // 28
