"use strict";

/**
 * solution 1
 * time: O(n)
 * space: O(n)
 * 
 * @param {string} city 
 * @returns {string}
 */
function getStrings(city) {
    const alphabet = new Set(["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]);
    let lettersCache = new Map();

    for (let char of city) {
        const lowerChar = char.toLowerCase();

        if (alphabet.has(lowerChar)) {
            const previousLetterCount = lettersCache.get(lowerChar) || 0;
            lettersCache.set(lowerChar, previousLetterCount + 1);
        }
    }

    let letterSegments = [];

    for (let [letter, letterCount] of lettersCache) {
        const asterisks = "*".repeat(letterCount);
        const letterSegment = `${letter}:${asterisks}`;
        letterSegments.push(letterSegment);
    }

    return letterSegments.join(",");
}

console.log( getStrings("Las Vegas") ); // "l:*,a:**,s:**,v:*,e:*,g:*"
