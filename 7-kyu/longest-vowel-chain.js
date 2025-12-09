"use strict";

/**
 * solution 1
 * time: O(n)
 * space: O(1)
 *
 * @param {string} str
 * @returns {number}
 */
function solve(str) {
    const vowels = "aeiou";
    let maxVowelSubstrCount = 0;
    let currentVowelSubstrCount = 0;

    for (let i = 0; i < str.length; i++) {
        const char = str[i];

        if (vowels.includes(char)) {
            currentVowelSubstrCount++;
        } else {
            // record max
            maxVowelSubstrCount = Math.max(maxVowelSubstrCount, currentVowelSubstrCount);
            // reset current counter
            currentVowelSubstrCount = 0;
        }
    }

    maxVowelSubstrCount = Math.max(maxVowelSubstrCount, currentVowelSubstrCount);

    return maxVowelSubstrCount;
}

console.log(solve("codewarriors")); // 2
console.log(solve("suoidea")); // 3
