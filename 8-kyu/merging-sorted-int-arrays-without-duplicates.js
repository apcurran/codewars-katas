"use strict";

/**
 * solution 1
 * time: O(log (n + m))
 * space: O(n + m)
 *
 * @param {number[]} arrA
 * @param {number[]} arrB
 * @returns {number[]}
 */
function mergeArrays(arrA, arrB) {
    let noDuplicates = new Set();

    for (let num of arrA) {
        noDuplicates.add(num);
    }

    for (let num of arrB) {
        noDuplicates.add(num);
    }

    return [...noDuplicates].sort((a, b) => a - b);
}

console.log(mergeArrays([2, 4, 8], [2, 4, 6])); // [2, 4, 6, 8]
