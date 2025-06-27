"use strict";

/**
 * solution 1
 * n = arr length
 * m = chunkSize
 * time: O(n * m)
 * space: O(n)
 * 
 * @param {number[]} arr 
 * @param {number} chunkSize 
 * @returns {number[][]}
 */
function makeParts(arr, chunkSize) {
    let results = [];

    for (let i = 0; i < arr.length; i += chunkSize) {
        const chunk = arr.slice(i, i + chunkSize);
        results.push(chunk);
    }

    return results;
}

console.log(makeParts([1, 2, 3, 4, 5], 2)); // [[1,2],[3,4],[5]]
