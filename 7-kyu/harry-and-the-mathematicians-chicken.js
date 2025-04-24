"use strict";

/**
 * solution 1 -- hashset
 * time: O(n)
 * space: O(n) -- Set
 * 
 * @param {number} n 
 * @returns {number[]}
 */
function chickenOptions(n) {
    let results = new Set([0]);

    if (typeof n !== "number") {
        return [0];
    }

    // start at i = 3,
    // we know that anything less than 3
    // cannot sub 3, 6, or 9
    for (let i = 3; i <= n; i++) {
        if (
            results.has(i - 3) ||
            results.has(i - 6) ||
            results.has(i - 10)
        ) {
            results.add(i);
        }
    }

    return [...results];
}

console.log(chickenOptions(13)); // [0, 3, 6, 9, 10, 12, 13]

