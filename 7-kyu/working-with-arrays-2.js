"use strict";

/**
 * solution 1
 * time: O(n)
 * space: O(n)
 * 
 * @param {number[]} arr 
 * @param {number} n 
 * @returns {number[]}
 */
function removeNthElement(arr, n) {
    let arrCopy = arr.slice();
    arrCopy.splice(n, 1);

    return arrCopy;
}

console.log(removeNthElement([1, 2, 3, 4, 5], 4)); // [1, 2, 3, 4]
console.log(removeNthElement([9, 7, 6, 9], 0)); // [7, 6, 9]
