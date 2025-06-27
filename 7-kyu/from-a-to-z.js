"use strict";

/**
 * solution 1
 * time: O(n)
 * space: O(1) -- without counting result space
 *
 * @param {string} lettersRange
 * @returns {string}
 */
function gimmeTheLetters(lettersRange) {
    const startCharCode = lettersRange[0].charCodeAt(0);
    const endCharCode = lettersRange[2].charCodeAt(0);
    let result = "";

    for (let i = startCharCode; i <= endCharCode; i++) {
        const letter = String.fromCharCode(i);
        result += letter;
    }

    return result;
}

console.log(gimmeTheLetters("a-z")); // "abcdefghijklmnopqrstuvwxyz"
console.log(gimmeTheLetters("h-o")); // "hijklmno"
console.log(gimmeTheLetters("Q-Z")); // "QRSTUVWXYZ"
console.log(gimmeTheLetters("J-J")); // "J"
