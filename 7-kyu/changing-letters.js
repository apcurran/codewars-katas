"use strict";

// /**
//  * Solution 1
//  * Time: O(n log n)
//  * Space: O(n)
//  *
//  * When provided with a string, capitalize all vowels
//  *
//  * @param {string} str
//  * @returns {string}
//  */
// function swap(str) {
//     const vowelSet = new Set(["A", "E", "I", "O", "U"]);
//     let resStr = "";

//     for (let letter of str) {
//         const letterUpper = letter.toUpperCase();

//         if (vowelSet.has(letterUpper)) {
//             resStr += letterUpper;
//         } else {
//             resStr += letter;
//         }
//     }

//     return resStr;
// }

/**
 * Solution 2
 * Time: O(n)
 * Space: O(n)
 *
 * When provided with a string, capitalize all vowels
 *
 * @param {string} str
 * @returns {string}
 */
function swap(str) {
    const vowelRegex = /[aeiou]/g;

    return str.replace(vowelRegex, (letter) => letter.toUpperCase());
}

console.log(swap("Hello World!")); // "HEllO WOrld!"
