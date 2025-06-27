"use strict";

/**
 * solution 1
 * time: O(n)
 * space: O(n)
 *
 * @param {string} str
 * @returns {string}
 */
function nothingSpecial(str) {
    if (typeof str !== "string") return "Not a string!";

    const specialChars = /[^a-z\d\s]/gi;

    return str.replace(specialChars, "");
}

console.log(nothingSpecial("%^Take le$ft ##quad%r&a&nt")); // "Take left quadrant"
