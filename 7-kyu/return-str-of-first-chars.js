"use strict";

/**
 * solution 1
 * time: O(n)
 * space: O(n)
 *
 * @param {string} str
 * @returns {string}
 */
function makeString(str) {
    return str
        .split(" ")
        .map((word) => word[0])
        .join("");
}

console.log(makeString("cars are very nice")); // "cavn"
