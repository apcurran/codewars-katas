"use strict";

/**
 * solution 1
 * time: O(n)
 * space: O(n)
 *
 * @param {string} str
 * @param {number} a
 * @param {number} b
 * @returns {string}
 */
function solve(str, a, b) {
    const startChunk = str.slice(0, a);
    const reversedChunk = str
        .slice(a, b + 1)
        .split("")
        .reverse()
        .join("");
    const endChunk = str.slice(b + 1);

    return startChunk + reversedChunk + endChunk;
}

console.log(solve("codewars", 1, 5)); // "cawedors"
console.log(solve("cODEWArs", 1, 5)); // "cAWEDOrs"
