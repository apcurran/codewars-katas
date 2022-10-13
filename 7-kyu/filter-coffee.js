"use strict";

/**
 * solution 1
 * time: O(n * log n) -> sorting
 * space: O(n)
 * 
 * @param {number} budget 
 * @param {number[]} prices
 * @returns {string}
 */
function search(budget, prices) {
    return prices
            .filter((price) => price <= budget)
            // sort ASC
            .sort((a, b) => a - b)
            // join arr with "," separator
            .join(",");
}

console.log( search(3, [6, 1, 2, 9, 2]) ); // "1,2,2"
