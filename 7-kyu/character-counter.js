"use strict";

/**
 * Solution 1
 * time: O(n)
 * space: O(n)
 *
 * @param {string} str
 * @returns {boolean}
 */
function validateWord(str) {
    const loweredStr = str.toLowerCase();
    let charMap = new Map();

    for (let char of loweredStr) {
        if (!charMap.has(char)) {
            // Add new char
            charMap.set(char, 1);
        } else {
            // Incr prev char val
            const prevCharVal = charMap.get(char);
            charMap.set(char, prevCharVal + 1);
        }
    }

    const charValsArr = [...charMap.values()];

    return charValsArr.every((val) => val === charValsArr[0]);
}

console.log(validateWord("abcabc")); // true
console.log(validateWord("Abcabc")); // true
console.log(validateWord("abc123")); // true
console.log(validateWord("abcabcd")); // false
console.log(validateWord("abc!abc!")); // true
console.log(validateWord("abc:abc")); // false
