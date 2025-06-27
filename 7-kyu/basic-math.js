"use strict";

/**
 * 
 * @param {string} str - String of text with formula to be added or subtracted 
 * @returns {string} - Return a string version of the final result
 */
function calculate(str) {
    const result = str
        .replace(/plus/gi, "+")
        .replace(/minus/gi, "-")
        .toString();

    console.log(result);
}

console.log(calculate("1plus2plus3plus4")); // "10"
