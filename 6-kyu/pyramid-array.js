"use strict";

/**
 * solution 1
 * time: O(n^2)
 * space: O(n^2)
 * 
 * @param {number} n 
 * @returns {any[][]}
 */
function pyramid(n) {
    let results = [];

    for (let i = 0; i < n; i++) {
        // create filled sub-arrays
        const subArray = new Array(i + 1).fill(1);
        results.push(subArray);
    }

    return results;
}

console.log(pyramid(1)); // [ [1] ]
console.log(pyramid(3)); // [ [1], [1, 1], [1, 1, 1] ]
