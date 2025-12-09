"use strict";

/**
 * solution 1
 * time: O(n^2)
 * space: O(n)
 *
 * @param {string} str
 * @returns {number}
 */
function solve(str) {
    let maxPrefixSuffixLength = 0;

    for (let i = 1; i <= str.length / 2; i++) {
        const prefix = str.slice(0, i);
        const suffix = str.slice(str.length - i);

        if (prefix === suffix) {
            maxPrefixSuffixLength = Math.max(maxPrefixSuffixLength, prefix.length);
        }
    }

    return maxPrefixSuffixLength;
}

console.log(solve("abcda")); // 1
console.log(solve("abcabca")); // 1
console.log(solve("aaaa")); // 2
