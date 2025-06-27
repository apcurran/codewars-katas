"use strict";

/**
 * solution 1
 * time: O(n^2)
 * space: O(n)
 *
 * @param {number[]} arr
 * @param {number[]} exampleArr
 * @returns {number[]}
 */
function exampleSort(arr, exampleArr) {
    return arr.sort((a, b) => exampleArr.indexOf(a) - exampleArr.indexOf(b));
}

console.log(exampleSort([1, 3, 4, 4, 4, 4, 5], [4, 1, 2, 3, 5]));
// [4,4,4,4,1,3,5]
