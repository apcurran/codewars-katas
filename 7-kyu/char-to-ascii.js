"use strict";

/**
 * solution 1
 * time: O(n)
 * space: O(n)
 *
 * @param {string} str
 * @returns {object|null}
 */
function charToAscii(str) {
    if (str === "") return null;

    let cache = {};

    for (let char of str) {
        const charCode = char.charCodeAt(0);

        // already exists in obj -- skip
        if (cache[char]) continue;

        if (isAlphaChar(charCode)) {
            cache[char] = charCode;
        }
    }

    return cache;
}

/**
 *
 * @param {number} charCode
 * @returns {boolean}
 */
function isAlphaChar(charCode) {
    return (charCode >= 65 && charCode <= 90) || (charCode >= 97 && charCode <= 122);
}

console.log(charToAscii("ABaa ^")); // {"A":65, "B":66, "a":97}
