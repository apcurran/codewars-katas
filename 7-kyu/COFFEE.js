"use strict";

/**
 * solution 1
 * time: O(n)
 * space: O(n)
 *
 * @param {string} str
 * @returns {string}
 */
function coffee(str) {
    return str.replace(/coffee/gi, "COFFEE");
}

console.log(coffee("Coffee! Buy me a COFFEE!")); // "COFFEE! Buy me a COFFEE!"
