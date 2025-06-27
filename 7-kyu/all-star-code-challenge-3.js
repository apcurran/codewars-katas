"use strict";

/**
 * solution 1 -- regex
 * time: O(n)
 * space: O(n)
 *
 * @param {string} str
 * @returns {string}
 */
function removeVowels(str) {
    const vowels = /[aeiou]/gi;

    return str.replace(vowels, "");
}

console.log(removeVowels("drake")); // "drk"
