"use strict";

/**
 * solution 1
 * time: O(n)
 * space: O(n)
 * 
 * @param {string} s 
 * @returns {string}
 */
function sortVowels(s) {
    if (typeof s !== "string") {
        return "";
    }

    const VOWELS = "AEIOUaeiou";
    let result = [];

    for (let char of s) {
        if (VOWELS.includes(char)) {
            result.push(`|${char}`);
        } else {
            result.push(`${char}|`);
        }
    }

    return result.join("\n");
}

console.log(sortVowels("CODEWARS"));

