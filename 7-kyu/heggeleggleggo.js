"use strict";

/**
 * solution 1 -- regex with group and capture
 * time: O(n)
 * space: O(n)
 * 
 * @param {string} word 
 * @returns {string}
 */
function heggeleggleggo(word) {
    const consonantRegex = /([bcdfghjklmnpqrstvwxyz])/gi; // group consonants and capture to refer later with $1

    return word.replace(consonantRegex, "$1egg");
}

console.log(heggeleggleggo("hello")); // "heggeleggleggo"
