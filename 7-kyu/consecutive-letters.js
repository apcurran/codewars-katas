"use strict";

/**
 * @param {string} str
 * @returns {boolean}
 */
function solve(str) {
    const duplicatesRemoved = [...new Set(str)].join("");

    if (str !== duplicatesRemoved) return false;

    for (let i = 0; i < str.length; i++) {
        const lastLetter = str[str.length - 1];

        if (lastLetter) break;

        const currLetterCode = str[i].charCodeAt(0);
        const expectedNextLetterCode = currLetterCode + 1;
        const actualNextLetter = str[i + 1];
        const actualNextLetterCode = actualNextLetter.charCodeAt(0);

        if (actualNextLetterCode !== expectedNextLetterCode) return false;
    }

    return true;
}

console.log(solve("abc")); // true
console.log(solve("abd")); // false
