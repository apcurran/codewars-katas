"use strict";

/**
 * solution 1
 * time: O(n)
 * space: O(n)
 *
 * @param {number[]} arr
 * @returns {number}
 */
function highestRank(arr) {
    let valsCache = new Map();

    for (let val of arr) {
        const previousFrequency = valsCache.get(val) || 0;
        valsCache.set(val, previousFrequency + 1);
    }

    const maxFrequency = Math.max(...valsCache.values());
    let maxValWithHighestFrequency = 0;

    for (let [val, frequency] of valsCache) {
        if (frequency === maxFrequency && val > maxValWithHighestFrequency) {
            maxValWithHighestFrequency = val;
        }
    }

    return maxValWithHighestFrequency;
}

console.log(highestRank([12, 10, 8, 12, 7, 6, 4, 10, 12])); // 12
console.log(highestRank([12, 10, 8, 12, 7, 6, 4, 10, 12, 10])); // 12
