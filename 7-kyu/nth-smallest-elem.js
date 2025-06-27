"use strict";

/**
 * solution 1
 * time: O(n * log n)
 * space: O(1)
 * 
 * @param {number[]} arr 
 * @param {number} pos 
 * @returns {number}
 */
function nthSmallest(arr, pos) {
    // sort list ASC
    arr.sort((a, b) => a - b);

    // index to arr[pos - 1] since it's 0-indexed
    return arr[pos - 1];
}

console.log( nthSmallest([3, 1, 2], 2) ); // 2
console.log( nthSmallest([15, 20, 7, 10, 4, 3], 3) ); // 7
console.log( nthSmallest([3, 1, 2], 2) ); // 2
