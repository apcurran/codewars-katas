"use strict";

/**
 * solution 1
 * time: O(n)
 * space: O(1)
 *
 * @param {number} input
 * @param {function[]} fsArr
 * @returns {number}
 */
function chain(input, fsArr) {
    return fsArr.reduce((result, currFunc) => currFunc(result), input);
}

function add(num) {
    return num + 1;
}

function mult(num) {
    return num * 30;
}

console.log(chain(2, [add, mult])); // 90
