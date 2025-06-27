"use strict";

/**
 * solution 1
 * time: O(n)
 * space: O(1)
 *
 * @param {number} n
 * @param {number} m excluded from multiples
 * @returns {number|string} sum of all multiples
 */
function sumMul(n, m) {
    let sum = 0;

    for (let i = n; i < m; i += n) {
        sum += i;
    }

    if (sum === 0) return "INVALID";

    return sum;
}

console.log(sumMul(2, 9)); // 2 + 4 + 6 + 8 = 20
console.log(sumMul(4, -7)); // "INVALID"
