"use strict";

/**
 * solution 1
 * time: O(n * log n)
 * space: O(n)
 * 
 * @param {number[]} arr1 
 * @param {number[]} arr2 
 * @returns {number[]}
 */
function mergeArrays(arr1, arr2) {
    const mergedArr = [...arr1, ...arr2];
    const noDupsMergedArr = [...new Set(mergedArr)];

    return noDupsMergedArr.sort((a, b) => a - b);
}

console.log( mergeArrays([1, 2, 3, 4], [5, 6, 7, 8]) ); // [1,2,3,4,5,6,7,8]
console.log( mergeArrays([1, 3, 5, 7, 9, 11, 12], [1, 2, 3, 4, 5, 10, 12]) ); // [1,2,3,4,5,7,9,10,11,12]
