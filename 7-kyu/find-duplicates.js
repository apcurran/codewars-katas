"use strict";

/**
 * solution 1 -- cache
 * time: O(n)
 * space: O(n)
 *
 * @param {any[]} arr
 * @returns {any[]}
 */
function duplicates(arr) {
    let cache = new Map();
    let results = [];

    for (let elem of arr) {
        const previousCount = cache.get(elem) || 0;
        const updatedCount = previousCount + 1;

        // only add to results on the first duplicate
        if (updatedCount === 2) {
            results.push(elem);
        }

        cache.set(elem, updatedCount);
    }

    return results;
}

console.log(duplicates([1, 2, 4, 4, 3, 3, 1, 5, 3, "5"])); // [4, 3, 1]
console.log(duplicates([0, 1, 2, 3, 4, 5])); // []
