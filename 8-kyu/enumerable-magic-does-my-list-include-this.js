"use strict";

/**
 * solution 1
 * time: O(n)
 * space: O(1)
 * 
 * @param {number[]} arr 
 * @param {number} item 
 * @returns {boolean}
 */
function include(arr, item) {
    return arr.includes(item);
}

console.log( include([1, 2, 3, 4], 3) ); // true
console.log( include([1, 2, 4, 5], 3) ); // false
