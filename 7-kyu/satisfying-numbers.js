"use strict";

/**
 * solution 1 -- brute force
 * time: O(n) -- bounded by n (cannot be greater than 40)
 * space: O(1)
 * @param {number} n
 * @returns {number}
 */
function smallest(n) {
    let smallestDivisibleNum = n;

    while (true) {
        for (let i = 2; i <= n; i++) {
            if (smallestDivisibleNum % i !== 0) {
                smallestDivisibleNum++;
                // reset loop
                i = 1;
            }
        }

        // all nums divisible without a remainder
        return smallestDivisibleNum;
    }
}

console.log(smallest(5)); // 60
