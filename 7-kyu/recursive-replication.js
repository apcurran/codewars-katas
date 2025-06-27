"use strict";

/**
 * solution 1 -- recursion
 * time: O(n)
 * space: O(n)
 *
 * @param {number} times
 * @param {number} value
 * @returns {number[]}
 */
function replicate(times, value) {
    let results = [];

    return addValuesToArray(times, value, results);
}

/**
 * @param {number} times
 * @param {number} value
 * @param {array} results
 * @returns {number[]}
 */
function addValuesToArray(times, value, results) {
    // base case
    if (times <= 0) return results;

    // update
    results.push(value);
    // recursive case
    return addValuesToArray(times - 1, value, results);
}

console.log(replicate(3, 5)); // [5, 5, 5]
console.log(replicate(0, 12)); // []
console.log(replicate(-1, 12)); // []
