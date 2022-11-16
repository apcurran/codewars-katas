"use strict";

/**
 * solution 1
 * time: O(1)
 * space: O(1)
 * 
 * @param {string} letter 
 * @returns {string}
 */
function position(letter) {
    const pos = letter.charCodeAt(0) - 96;

    return `Position of alphabet: ${pos}`;
}

console.log( position("a") ); // "Position of alphabet: 1"
console.log( position("z") ); // "Position of alphabet: 26"
