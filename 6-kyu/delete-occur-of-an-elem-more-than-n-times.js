"use strict";

/**
 * solution 1 -- Map cache
 * time: O(n)
 * space: O(n)
 *
 * @param {number[]} arr
 * @param {number} n
 * @returns {number[]}
 */
function deleteNth(arr, n) {
    let numsMap = new Map();
    let resArr = [];

    for (let num of arr) {
        // record curr num and occurVal in map
        const prevCount = numsMap.get(num) || 0;
        const revisedCount = prevCount + 1;
        numsMap.set(num, revisedCount);

        // if occurVal in map reaches more than n, do not add to new resArr
        if (revisedCount > n) continue;

        // otherwise, add to resArr
        resArr.push(num);
    }

    return resArr;
}

console.log(deleteNth([20, 37, 20, 21], 1)); // [20, 37, 21]
console.log(deleteNth([1, 1, 3, 3, 7, 2, 2, 2, 2], 3)); // [1, 1, 3, 3, 7, 2, 2, 2]
