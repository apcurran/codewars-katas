"use strict";

/**
 * solution 1
 * time: O(n)
 * space: O(n)
 *
 * @param {number} n
 * @param {string} x
 * @param {string} y
 */
function middleMe(n, x, y) {
    // cannot place x in the middle of an odd repeated chunk
    if (n % 2 !== 0) return x;

    const repeatedChunk = y.repeat(n / 2);

    return `${repeatedChunk}${x}${repeatedChunk}`;
}

console.log(middleMe(10, "A", "*")); // '*****A*****'
