"use strict";

/**
 * solution 1 -- Set cache
 * time: O(n)
 * space: O(n)
 *
 * @param {string} str
 * @returns {string|null}
 */
function firstNonRepeated(str) {
    const uniqueCharsStr = [...new Set(str)].join("");

    if (uniqueCharsStr === str) return str[0];

    let charCounts = new Map();

    for (let char of str) {
        const previousCharCount = charCounts.get(char) || 0;
        charCounts.set(char, previousCharCount + 1);
    }

    for (let [char, count] of charCounts) {
        if (count === 1) return char;
    }

    return null;
}

console.log(firstNonRepeated("test")); // "e"
console.log(firstNonRepeated("trend")); // "t"
console.log(firstNonRepeated("aabbcc")); // null
