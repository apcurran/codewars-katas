"use strict";

/**
 * solution 1
 * time: O(n)
 * space: O(n)
 *
 * @param {string} plaintext
 * @returns {string}
 */
function encode(plaintext) {
    let result = "";
    // iterate str
    for (let char of plaintext) {
        const charCode = char.charCodeAt(0);
        const isCharUppercaseLetter = charCode >= 65 && charCode <= 90;
        const isCharLowercaseLetter = charCode >= 97 && charCode <= 122;

        if (!isCharUppercaseLetter && !isCharLowercaseLetter) {
            // if charCode is outside of the letters range, keep the same char in return str
            result += char;

            continue;
        }

        // otherwise, check if charCode - 97
        if (isCharUppercaseLetter) {
            const alphabetBasedCharCode = charCode - 65;

            if (alphabetBasedCharCode % 2 === 0) {
                // is even -> replace with 0
                result += "0";
            } else {
                // if odd -> replace with 1
                result += "1";
            }

            continue;
        }

        if (isCharLowercaseLetter) {
            const alphabetBasedCharCode = charCode - 97;

            if (alphabetBasedCharCode % 2 === 0) {
                result += "0";
            } else {
                result += "1";
            }
        }
    }

    return result;
}

console.log(encode("Hello World!")); // "10110 00111!"
