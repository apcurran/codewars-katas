"use strict";

/**
 * solution 1
 * time: O(s * t)
 * space: O(t)
 *
 * @param {string} s
 * @param {string} t
 * @returns {number}
 */
function createAnagram(s, t) {
    let uniqueTChars = t;

    for (let char of s) {
        const updatedStr = uniqueTChars.replace(char, "");
        uniqueTChars = updatedStr;
    }

    return uniqueTChars.length;
}

console.log(createAnagram("AABAA", "BBAAA")); // 1
console.log(createAnagram("OVGHK", "RPGUC")); // 4
