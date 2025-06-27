"use strict";

/**
 * solution 1
 * time: O(n^2)
 * space: O(n^2)
 *
 * @param {number} n
 * @returns {number[][]}
 */
function generatePairs(n) {
    let results = [];

    for (let i = 0; i <= n; i++) {
        for (let j = i; j <= n; j++) {
            const pair = [i, j];
            results.push(pair);
        }
    }

    return results;
}

console.log(generatePairs(2));
// [ [0, 0], [0, 1], [0, 2], [1, 1], [1, 2], [2, 2] ]
