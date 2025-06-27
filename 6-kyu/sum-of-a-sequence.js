"use strict";

/**
 * Solution 1
 * Time: O(n)
 * Space: O(1)
 *
 * @param {number} begin
 * @param {number} end
 * @param {number} step
 * @returns {number}
 */
function sequenceSum(begin, end, step) {
    let sum = 0;

    if (begin <= end && step > 0) {
        for (let i = begin; i <= end; i += step) {
            sum += i;
        }
    } else {
        for (let i = begin; i >= end; i += step) {
            sum += i;
        }
    }

    return sum;
}

console.log(sequenceSum(2, 2, 2)); // 2
console.log(sequenceSum(2, 6, 2)); // 12
console.log(sequenceSum(1, 5, 1)); // 15
console.log(sequenceSum(1, 5, 3)); // 5
console.log(sequenceSum(-1, -5, -3)); // -5
