"use strict";

/**
 * solution 1
 * n = words str length
 * time: O(n)
 * space: O(1)
 * 
 * @param {any} words 
 * @returns {{ vowels: number, consonants: number }}
 */
function getCount(words) {
    if (typeof words !== "string") {
        return { vowels: 0, consonants: 0 };
    }

    const VOWELS = "aeiou";
    const CONSONANTS = "bcdfghjklmnpqrstvwxyz";
    let vowelsCount = 0;
    let consonantsCount = 0;

    for (let char of words) {
        const lowerChar = char.toLowerCase();

        if (VOWELS.includes(lowerChar)) {
            vowelsCount++;
        } else if (CONSONANTS.includes(lowerChar)) {
            consonantsCount++;
        }
    }

    return { vowels: vowelsCount, consonants: consonantsCount };
}

console.log(getCount("Test")); // { vowels: 1, consonants: 3 }
console.log(getCount()); // { vowels: 0, consonants: 0 }
