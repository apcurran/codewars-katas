"use strict";

/**
 * solution 1
 * time: O(n)
 * space: O(n)
 * 
 * @param {string} str 
 * @returns {number}
 */
function countConsonants(str) {
    const consonants = new Set(["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "w", "x", "y", "z"]);
    const lowercaseStr = str.toLowerCase();
    let uniqueConsonants = new Set();

    for (let character of lowercaseStr) {
        if (consonants.has(character)) {
            uniqueConsonants.add(character);
        }
    }

    return uniqueConsonants.size;
}

console.log( countConsonants("add") ); // 1
console.log( countConsonants("Dad") ); // 1
console.log( countConsonants("aeiou") ); // 0
console.log( countConsonants("sillystring") ); // 7
