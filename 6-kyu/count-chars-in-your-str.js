"use strict";

/**
 * solution 1 -- Map obj
 * time: O(n)
 * space: O(n)
 * 
 * @param {string} str 
 * @returns {object}
 */
function count(str) {
    if (!str || str.length === 0) return {};

    let charMap = new Map();

    for (let char of str) {
        const prevVal = charMap.get(char) || 0;
        charMap.set(char, prevVal + 1);
    }

    return Object.fromEntries(charMap);
}

console.log( count("aba") ); // { a: 2, b: 1 }
console.log( count("") ); // {}
