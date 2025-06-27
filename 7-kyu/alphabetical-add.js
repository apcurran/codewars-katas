"use strict";

/**
 * solution 1
 * time: O(n)
 * space: O(1)
 *
 * @param  {...string} letters
 * @returns {string}
 */
function addLetters(...letters) {
    if (letters.length === 0) return "z";

    if (letters.length === 1) return letters[0];

    const charCodeConversionAmount = 96;
    const totalLetterInAlphabet = 26;
    // add up all nums
    let sumOfAlphabeticalPositions = 0;

    for (let letter of letters) {
        // convert each letter
        const charCode = letter.charCodeAt(0);
        // subtract 96 from charCodeAt to obtain a working number
        const alphabeticalPosition = charCode - charCodeConversionAmount;
        sumOfAlphabeticalPositions += alphabeticalPosition;
    }
    // use modulo operator with 26 on sum to resolve overflow
    const resolvedOverflowSumOfAlphabeticalPositions =
        sumOfAlphabeticalPositions % totalLetterInAlphabet;
    // add 96 to final number to get back to charCode for JS
    const finalLetterCharCode =
        resolvedOverflowSumOfAlphabeticalPositions + charCodeConversionAmount;

    // edge case
    if (finalLetterCharCode === 96) return "z";
    // convert charCode to string char
    return String.fromCharCode(finalLetterCharCode);
}

console.log(addLetters("a", "b", "c")); // "f"
console.log(addLetters("a", "b")); // "c"
console.log(addLetters("z")); // "z"
console.log(addLetters()); // "z"
console.log(addLetters("y", "c", "b")); // "d"
console.log(addLetters("i", "h", "s", "g", "x", "f", "w", "h")); // "z"
