"use strict";

/**
 * solution 1
 * time: O(n)
 * space: O(n) with results arr
 * 
 * @param {number[]} arr 
 * @returns {number[]}
 */
function findMissingNumbers(arr) {
    const start = arr[0];
    const end = arr[arr.length - 1];
    let results = [];

    for (let i = start + 1; i < end; i++) {
        if (!arr.includes(i)) {
            results.push(i);
        }
    }

    return results;
}

console.log(findMissingNumbers([-3, -2, 1, 5])); // [-1,0,2,3,4]
