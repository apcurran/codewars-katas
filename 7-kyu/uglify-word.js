"use strict";

/**
 * solution 1
 * time: O(n)
 * space: O(n)
 *
 * @param {string} str
 * @returns {string}
 */
function uglifyWord(str) {
    const alphaCharRegex = /[a-z]/i;
    let alphaFlag = true;
    let result = "";

    for (let char of str) {
        if (alphaCharRegex.test(char) && alphaFlag === true) {
            // change to uppercase char
            result += char.toUpperCase();
            alphaFlag = !alphaFlag;
        } else if (alphaCharRegex.test(char) && alphaFlag === false) {
            // change to lowercase char
            result += char.toLowerCase();
            alphaFlag = !alphaFlag;
        } else {
            // not an alpha char
            result += char;
            alphaFlag = true;
        }
    }

    return result;
}

console.log(uglifyWord("AAA")); // "AaA"
