"use strict";

/**
 * solution 1
 * time: O(n)
 * space: O(n)
 *
 * @param {string} str
 * @returns {number}
 */
function testit(str) {
    const wordMatches = str.match(/w.*?o.*?r.*?d/gi) || [];

    return wordMatches.length;
}

console.log(testit("word")); // 1
