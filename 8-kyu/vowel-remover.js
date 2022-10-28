"use strict";

/**
 * solution 1 -- regex
 * time: O(n)
 * space: O(n)
 * 
 * @param {string} str 
 * @returns {string}
 */
function shortcut(str) {
    return str.replace(/[aeiou]/g, "");
}

console.log( shortcut("hello") ); // "hll"
