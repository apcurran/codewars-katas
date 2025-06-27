"use strict";

/**
 * solution 1
 * time: O(sqrt(n))
 * space: O(1)
 *
 * @param {number} n
 * @returns {number}
 */
function getNumberOfSquares(n) {
    let sum = 0;
    let result = 0;

    for (let i = 1; i <= Math.sqrt(n); i++) {
        const squaredValue = i * i;
        sum += squaredValue;

        if (sum < n) {
            result++;
        }
    }

    return result;
}

console.log(getNumberOfSquares(6)); // 2
console.log(getNumberOfSquares(15)); // 3
console.log(getNumberOfSquares(1)); // 0
console.log(getNumberOfSquares(2)); // 1
console.log(getNumberOfSquares(5)); // 1
console.log(getNumberOfSquares(6)); // 2
console.log(getNumberOfSquares(15)); // 3
