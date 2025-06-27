"use strict";

/**
 * solution 1
 * time: O(n)
 * space: O(n)
 *
 * @param {number|string} str
 * @returns {string}
 */
function tea42(str) {
    return String(str).replace(/2/g, "t");
}

console.log(tea42("coffee")); // "coffee"
console.log(tea42("2ea")); // "tea"
