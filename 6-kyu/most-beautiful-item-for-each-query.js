"use strict";

/**
 * solution 1 -- brute force, TLE
 * time: O(n^2)
 * space: O(n)
 * 
 * @param {number[][]} items
 * @param {number[]} queries
 * @return {number[]}
 */
function maximumBeauty(items, queries) {
    let maxBeauties = [];

    for (let query of queries) {
        let currentMaxBeautyValue = 0; // default value based on problem description

        for (let [itemPrice, itemBeauty] of items) {
            // get item with price <= current query
            // obtain max beauty for an item with above criteria
            if (itemPrice <= query) {
                currentMaxBeautyValue = Math.max(currentMaxBeautyValue, itemBeauty);
            }
        }
        // add this max amount to results
        maxBeauties.push(currentMaxBeautyValue);
    }

    return maxBeauties;
}

console.log(maximumBeauty([[1, 2], [3, 2], [2, 4], [5, 6], [3, 5]], [1, 2, 3, 4, 5, 6]));
// [2,4,5,5,6,6]
console.log(maximumBeauty([[1, 2], [1, 2], [1, 3], [1, 4]], [1]));
// [4]
