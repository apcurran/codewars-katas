"use strict";

/**
 * solution 1 -- Map cache
 * time: O(n)
 * space: O(n)
 * 
 * @param {number[]} arr 
 * @returns {number}
 */
function duplicates(arr) {
    // create a map to store num instance count
    let numMap = new Map();
    let totalPairCount = 0;
    // iterate over arr
    for (let num of arr) {
        // record instance count for each num
        const prevCount = numMap.get(num) || 0;
        numMap.set(num, prevCount + 1);
    }

    // check map for nums
    for (let numCount of numMap.values()) {
        // Math.floor(numCount / 2); add pair count to totalPairCount var
        const numPairs = Math.floor(numCount / 2);
        totalPairCount += numPairs;
    }

    return totalPairCount;
}

console.log( duplicates([1, 2, 5, 6, 5, 2]) ); // 2
console.log( duplicates([1, 2, 2, 20, 6, 20, 2, 6, 2]) ); // 4
