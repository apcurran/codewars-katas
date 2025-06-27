"use strict";

/**
 * solution 1 -- iterative
 * time: O(n)
 * space: O(1)
 *
 * @param {number} a
 * @param {number} r
 * @param {number} n
 * @returns {number}
 */
function ArithmeticSequenceSum(a, r, n) {
    let sum = 0;

    for (let i = 0; i < n; i++) {
        const currentSum = a + r * i;
        sum += currentSum;
    }

    return sum;
}

console.log(ArithmeticSequenceSum(2, 3, 5)); // 40
