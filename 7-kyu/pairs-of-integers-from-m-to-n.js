"use strict";

/**
 * solution 1
 * time: O(m * n)
 * space: O(1) -- not including results
 * 
 * @param {number} m 
 * @param {number} n 
 * @returns {number[][]}
 */
function generatePairs(m, n) {
    let pairsList = [];

    for (let i = m; i <= n; i++) {
        for (let j = i; j <= n; j++) {
            pairsList.push([i, j]);
        }
    }

    return pairsList;
}

console.log(generatePairs(2, 4)); // [ [2, 2], [2, 3], [2, 4], [3, 3], [3, 4], [4, 4] ]
