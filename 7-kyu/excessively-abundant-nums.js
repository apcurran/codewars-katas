"use strict";

/**
 * solution 1
 * time: O(n)
 * space: O(1)
 *
 * @param {number} num
 * @returns {boolean}
 */
function abundantNumber(num) {
    let divisorsSum = 0;

    for (let i = 1; i < num; i++) {
        if (num % i === 0) {
            // add divisor to sum
            divisorsSum += i;
        }
    }

    return divisorsSum > num;
}

console.log(abundantNumber(12)); // true
