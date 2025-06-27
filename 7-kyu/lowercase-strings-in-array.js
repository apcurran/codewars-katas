"use strict";

/**
 * solution 1
 * n = arr length
 * m = string element length
 * time: O(n * m)
 * space: O(n)
 *
 * @param {any[]} arr
 * @returns {any[]}
 */
function arrayLowerCase(arr) {
    return arr.map((element) => {
        if (typeof element !== "string") return element;

        return element.toLowerCase();
    });
}

console.log(arrayLowerCase(["Red", "Green"])); // ['red', 'green']
console.log(arrayLowerCase([1, "Green"])); // [1, 'green']
