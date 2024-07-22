"use strict";

/**
 * @callback myCallback
 * @param {number} a
 * @returns {number}
 */

/**
 * solution 1
 * time: O(n)
 * space: O(n)
 * 
 * @param {number[]} arr 
 * @param {myCallback} callback 
 * @returns {number[]}
 */
function processArray(arr, callback) {
    return arr.map(callback);
}

console.log(processArray([7, 8, 9, 1, 2], function (a) {
    return a + 5;
})); // [ 12, 13, 14, 6, 7 ]
