"use strict";

/**
 * solution 1 -- regex
 * time: O(n)
 * space: O(n)
 * 
 * @param {string} str 
 * @returns {string}
 */
function solve(str) {
    const uppercaseChars = str.match(/[A-Z]/g) || [];
    const lowercaseChars = str.match(/[a-z]/g) || [];

    if (uppercaseChars.length > lowercaseChars.length) {
        return str.toUpperCase();
    }

    return str.toLowerCase();
}

console.log( solve("coDe") ); // "code"
console.log( solve("CODe") ); // "CODE"
console.log( solve("coDE") ); // "code"
