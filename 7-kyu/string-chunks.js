"use strict";

/**
 * solution 1
 * time: O(s * n)
 * space: O(s)
 *
 * @param {string} str
 * @param {number} n
 * @returns {string[]}
 */
function stringChunk(str, n) {
    if (typeof n !== "number" || n <= 0) {
        return [];
    }

    let results = [];

    for (let i = 0; i < str.length; i += n) {
        const chunk = str.slice(i, i + n);
        results.push(chunk);
    }

    return results;
}

console.log(stringChunk("codewars", 2)); // ['co', 'de', 'wa', 'rs']
console.log(stringChunk("thiskataeasy", 4)); // ['this', 'kata', 'easy']
console.log(stringChunk("hello world", 3)); // ['hel', 'lo ', 'wor', 'ld']
console.log(stringChunk("sunny day", 0)); // []
