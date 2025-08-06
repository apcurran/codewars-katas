"use strict";

/**
 * solution 1
 * time: O(n)
 * space: O(1) -- excluding results
 *
 * @param {number} n
 * @returns {number[]}
 */
function testit(n) {
    if (n <= 0) return [];

    let results = [];

    // skip by 2s to only check for odd nums
    for (let i = 1; i <= n; i += 2) {
        // is this odd num a divisor of n?
        // if so, include in results
        if (n % i === 0) results.push(i);
    }

    return results;
}

//In order to solve this Kata, and even discarded everything
console.log(testit(-1)); // []
console.log(testit(0)); // []
console.log(testit(1)); // [1]
console.log(testit(2)); // [1]
console.log(testit(3)); // [1, 3]
console.log(testit(4)); // [1]
console.log(testit(5)); // [1, 5]
console.log(testit(6)); // [1, 3]
console.log(testit(7)); // [1, 7]
console.log(testit(8)); // [1]
console.log(testit(9)); // [1, 3, 9]
console.log(testit(10)); //  [1, 5]
