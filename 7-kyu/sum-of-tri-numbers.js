"use strict";

/**
 * solution 1
 * time: O(n)
 * space: O(1)
 * 
 * @param {number} n 
 * @returns {number}
 */
function sumTriangularNumbers(n) {
    let previousTriValue = 0;
    let total = 0;

    for (let i = 1; i <= n; i++) {
        previousTriValue += i;
        total += previousTriValue;
    }

    return total;
}

console.log(sumTriangularNumbers(4)); // 1 + 3 + 6 + 10 -> 20
console.log(sumTriangularNumbers(34)); // 7140 
