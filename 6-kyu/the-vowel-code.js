"use strict";

/**
 * solution 1 -- hashmap
 * time: O(n^2)
 * space: O(n)
 *
 * @param {string} str
 * @returns {string}
 */
function encode(str) {
    const encodeMap = new Map([
        ["a", "1"],
        ["e", "2"],
        ["i", "3"],
        ["o", "4"],
        ["u", "5"],
    ]);
    let strCopy = str;
    // loop while there is a vowel
    while (strCopy.match(/[aeiou]/g)) {
        let newStr = "";
        // iterate string
        for (let i = 0; i < str.length; i++) {
            const char = str[i];

            if (encodeMap.has(char)) {
                const replacementDigit = encodeMap.get(char);
                newStr += replacementDigit;
            } else {
                newStr += str[i];
            }
        }

        strCopy = newStr;
    }

    return strCopy;
}

console.log(encode("hello")); // "h2ll4"

/**
 *
 * @param {string} str
 * @returns {string}
 */
function decode(str) {
    const decodeMap = new Map([
        ["1", "a"],
        ["2", "e"],
        ["3", "i"],
        ["4", "o"],
        ["5", "u"],
    ]);
    let strCopy = str;
    // loop while there is a digit
    while (strCopy.match(/\d/g)) {
        let newStr = "";
        // iterate string
        for (let i = 0; i < str.length; i++) {
            const digit = str[i];

            if (decodeMap.has(digit)) {
                const replacementDigit = decodeMap.get(digit);
                newStr += replacementDigit;
            } else {
                newStr += str[i];
            }
        }

        strCopy = newStr;
    }

    return strCopy;
}

console.log(decode("h3 th2r2")); // "hi there"
