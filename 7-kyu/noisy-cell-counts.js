"use strict";

/**
 * solution 1
 * time: O(n)
 * space: O(n)
 *
 * @param {number[]} data
 * @returns {number[]}
 */
function cleanedCounts(data) {
    let updatedCounts = [];
    let previousCellCount = 0;

    for (let currentCellCount of data) {
        if (previousCellCount > currentCellCount) {
            updatedCounts.push(previousCellCount);
        } else {
            updatedCounts.push(currentCellCount);
            previousCellCount = currentCellCount;
        }
    }

    return updatedCounts;
}

console.log(cleanedCounts([1, 1, 2, 2, 1, 2, 2, 2, 2]));
// [1, 1, 2, 2, 2, 2, 2, 2, 2]

console.log(cleanedCounts([5, 5, 6, 5, 5, 5, 5, 6]));
// [5, 5, 6, 6, 6, 6, 6, 6]
