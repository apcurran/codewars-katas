"use strict";

/**
 * solution 1
 * n = word1 length
 * m = word2 length
 * time: O(n + m)
 * space: O(1)
 *
 * @param {string} word1
 * @param {string} word2
 * @returns {boolean}
 */
function mispelled(word1, word2) {
    if (Math.abs(word1.length - word2.length) > 1) {
        return false;
    }

    if (word1.includes(word2) || word2.includes(word1)) {
        return true;
    }

    let charDiff = 0;

    for (let i = 0; i < word1.length; i++) {
        const word1Char = word1[i];
        const word2Char = word2[i];

        if (word1Char !== word2Char) {
            charDiff++;
        }
    }

    return charDiff <= 1;
}

console.log(mispelled("versed", "xersed")); // true
console.log(mispelled("versed", "applb")); // false
console.log(mispelled("versed", "v5rsed")); // true
console.log(mispelled("1versed", "versed")); // true
console.log(mispelled("versed", "versed1")); // true
console.log(mispelled("versed", "aversed")); // true
console.log(mispelled("aaversed", "versed")); // false
console.log(mispelled("versed", "aaversed")); // false
