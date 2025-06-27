"use strict";

/**
 * solution 1
 * time: O(1)
 * space: O(1)
 *
 * @param {number} n
 * @param {number} m
 * @returns {number}
 */
function cookPancakes(n, m) {
    if (n < m) return 2;

    return Math.ceil((n / m) * 2);
}

console.log(cookPancakes(1, 2)); // 2
console.log(cookPancakes(2, 2)); // 2
console.log(cookPancakes(4, 2)); // 4
