"use strict";

/**
 * solution 1
 * time: O(n)
 * space: O(n)
 * 
 * @param {number[]} arr 
 * @returns {number[]}
 */
function add(arr) {
    if (arr.length === 0) return [];

    let results = new Array(arr.length);
    results[0] = arr[0];

    for (let i = 1; i < arr.length; i++) {
        const previousPrefixSum = results[i - 1];
        const currentPrefixSum = previousPrefixSum + arr[i];
        results[i] = currentPrefixSum;
    }

    return results;
}

console.log(add([1,2,3,4,5])); // [1, 3, 6, 10, 15]
