"use strict";

/**
 * solution 1
 * time: O(1)
 * space: O(1)
 *
 * @param {[string, string]} arr
 * @returns {string} str num
 */
function arrMultiply(arr) {
    const num1 = Number(arr[0]);
    const num2 = Number(arr[1]);
    const product = num1 * num2;

    return String(product);
}

console.log(arrMultiply(["9", "6"])); // "54"
