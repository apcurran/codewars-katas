"use strict";

/**
 * solution 1
 * time: O(n)
 * space: O(n)
 *
 * @param {number} n
 * @returns {number[]}
 */
function climb(n) {
    let results = [n];

    while (n > 1) {
        n = Math.floor(n / 2);
        results.push(n);
    }

    return results.reverse();
}

console.log(climb(10)); // [1, 2, 5, 10]
console.log(climb(13)); // [1, 3, 6, 13]
