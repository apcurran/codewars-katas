"use strict";

/**
 * solution 1 -- hashmap
 * time: O(n)
 * space: O(n)
 * 
 * @param {number[]} arr1 
 * @param {number[]} arr2 
 * @returns {number}
 */
function findMissing(arr1, arr2) {
    let arr1Cache = new Map();

    for (let num of arr1) {
        const numPreviousCount = arr1Cache.get(num) || 0;
        arr1Cache.set(num, numPreviousCount + 1);
    }

    let arr2Cache = new Map();

    for (let num of arr2) {
        const numPreviousCount = arr2Cache.get(num) || 0;
        arr2Cache.set(num, numPreviousCount + 1); 
    }

    for (let [arr1Num, arr1NumCount] of arr1Cache) {
        const arr2NumCount = arr2Cache.get(arr1Num) || 0;

        if (arr1NumCount !== arr2NumCount) return arr1Num;
    }

    // should never reach here
}

console.log( findMissing([1, 2, 2, 3], [1, 2, 3]) ); // 2
console.log( findMissing([6, 1, 3, 6, 8, 2], [3, 6, 6, 1, 2]) ); // 8
