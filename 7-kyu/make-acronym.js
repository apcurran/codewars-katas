"use strict";

/**
 * solution 1
 * time: O(n)
 * space: O(n)
 *
 * @param {string} text
 * @returns {string}
 */
function toAcronym(text) {
    return text
        .split(" ")
        .map((word) => word[0].toUpperCase())
        .join("");
}

console.log(toAcronym("Code Wars")); // "CW"
console.log(toAcronym("Portable Network Graphics")); // "PNG"
console.log(toAcronym("PHP: Hypertext Preprocessor")); // "PHP"
