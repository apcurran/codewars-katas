"use strict";

/**
 * solution 1
 * time: O(log n)
 * space: O(1)
 *
 * @param {number} n
 * @returns {number}
 */
function plantDoubling(n) {
    let plantsCount = 1;

    while (n !== 1) {
        // there is a remainder
        if (n % 2 === 1) {
            n--;
            plantsCount++;
        } else {
            // no remainder
            n /= 2;
        }
    }

    return plantsCount;
}

console.log(plantDoubling(5)); // 2
console.log(plantDoubling(8)); // 1
