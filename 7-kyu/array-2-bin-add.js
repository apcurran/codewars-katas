"use strict";

/**
 * solution 1
 * time: O(n)
 * space: O(n)
 *
 * @param {any[]} arr
 * @returns {string|false}
 */
function arr2bin(arr) {
    let sum = 0;

    for (let value of arr) {
        if (typeof value !== "number") return false;

        sum += value;
    }

    return sum.toString(2);
}

console.log(arr2bin([1, 2])); // "11"
console.log(arr2bin([1, 2, "a"])); // false
