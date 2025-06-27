"use strict";

// /**
//  * solution 1
//  * time: O(n)
//  * space: O(n)
//  *
//  * @param {string} text
//  * @param {string} replacementChar
//  * @returns {string}
//  */
// function contamination(text, replacementChar) {
//     if (text === "" || replacementChar === "") return "";

//     return text
//             .split("")
//             .map(() => replacementChar)
//             .join("");
// }

/**
 * solution 2
 * time: O(n)
 * space: O(n)
 *
 * @param {string} text
 * @param {string} replacementChar
 * @returns {string}
 */
function contamination(text, replacementChar) {
    return replacementChar.repeat(text.length);
}

console.log(contamination("abc", "z")); // "zzz"
console.log(contamination("//case", " ")); // "      "
