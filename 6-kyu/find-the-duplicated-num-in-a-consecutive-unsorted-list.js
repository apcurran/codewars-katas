"use strict";

/**
 * solution 1 -- hashset
 * time: O(n)
 * space: O(n)
 * 
 * @param {number[]} arr 
 * @returns {number}
 */
function findDup(arr) {
    let seenNums = new Set();

    for (let num of arr) {
        if (seenNums.has(num)) return num;

        seenNums.add(num);
    }

    return -1;
}

console.log(findDup([1, 3, 2, 5, 4, 5, 7, 6])); // 5
