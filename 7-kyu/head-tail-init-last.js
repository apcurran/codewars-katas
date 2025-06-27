"use strict";

/**
 * time: O(1)
 * space: O(1)
 *
 * @param {number[]} arr
 * @returns {number}
 */
function head(arr) {
    return arr[0];
}

/**
 * time: O(n)
 * space: O(n)
 *
 * @param {number[]} arr
 * @returns {number[]}
 */
function tail(arr) {
    return arr.slice(1);
}

/**
 * time: O(n)
 * space: O(n)
 *
 * @param {number[]} arr
 * @returns {number[]}
 */
function init(arr) {
    return arr.slice(0, -1);
}

/**
 * time: O(1)
 * space: O(1)
 *
 * @param {number[]} arr
 * @returns {number}
 */
function last(arr) {
    return arr[arr.length - 1];
}

console.log(head([5, 1])); // 5
console.log(tail([1])); // []
console.log(init([1, 5, 7, 9])); // [1, 5, 7]
console.log(last([7, 2])); // 2
