"use strict";

/**
 * You will be given two inputs: a string of words and a letter.
 * For each string, return the alphabetic character after every instance of letter (case insensitive).
 * If there is a number, punctuation, or underscore following the letter it should not be returned.
 *
 * Solution 1
 * Time: O(n)
 * Space: O(n)
 *
 * @param {string} str
 * @param {string} letter
 * @returns {string}
 */
function comesAfter(str, letter) {
    const myRegex = new RegExp(`(?<=${letter})[a-z]`, "gi");
    const finalStrArr = str.match(myRegex);

    return finalStrArr ? finalStrArr.join("") : "";
}

console.log(comesAfter("are you really learning Ruby?", "r")); // "eenu"
console.log(comesAfter("Pirates say arrrrrrrrr.", "r")); // "arrrrrrrr"
