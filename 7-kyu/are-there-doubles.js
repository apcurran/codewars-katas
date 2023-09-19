"use strict";

/**
 * solution 1
 * time: O(n)
 * space: O(n)
 * 
 * @param {string} str 
 * @returns {boolean}
 */
function doubleCheck(str) {
    for (let i = 0; i < str.length - 1; i++) {
        const currentChar = str[i];
        const nextChar = str[i + 1];

        if (currentChar.toLowerCase() === nextChar.toLowerCase()) return true;
    }

    return false;
}

console.log(doubleCheck("abca")); // false
console.log(doubleCheck("aabc")); // true
console.log(doubleCheck("a 11 c d")); // true
