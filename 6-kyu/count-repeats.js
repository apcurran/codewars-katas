"use strict";

/**
 * solution 1
 * time: O(n)
 * space: O(1)
 *
 * @param {string} str
 * @returns {number}
 */
function countRepeats(str) {
    let count = 0;
    let previousChar = null;

    for (let char of str) {
        if (char === previousChar) {
            count++;
        } else {
            previousChar = char;
        }
    }

    return count;
}

console.log(countRepeats("abc")); // 0
console.log(countRepeats("abbbbc")); // 3
