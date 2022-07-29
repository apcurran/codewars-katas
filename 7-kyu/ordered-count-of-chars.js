"use strict";

/**
 * solution 1
 * time: O(n)
 * space: O(n)
 * 
 * @param {string} text 
 * @returns {string[][]}
 */
function orderedCount(text) {
    let charMap = new Map();

    for (let char of text) {
        const prevCount = charMap.get(char) || 0;
        charMap.set(char, prevCount + 1);
    }

    return [...charMap.entries()];
}

console.log( orderedCount("abracadabra") ); // [['a', 5], ['b', 2], ['r', 2], ['c', 1], ['d', 1]]
