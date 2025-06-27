"use strict";

/**
 * Solution 1
 * time: O(n)
 * space: O(n)
 *
 * @param {string} str
 * @param {string} sep
 * @returns {string}
 */
function freqSeq(str, sep) {
    let charMap = new Map();
    // Create a res string arr
    let resStrArr = [];
    // Iterate through str
    for (let char of str) {
        // Record each char and charFreq in a map obj
        if (!charMap.has(char)) {
            charMap.set(char, 1);
        } else {
            const prevCharFreq = charMap.get(char);
            charMap.set(char, prevCharFreq + 1);
        }
    }
    // Loop through map obj
    for (let char of str) {
        const charFreq = charMap.get(char);
        // for each char add to the resStrArr the freq val
        resStrArr.push(charFreq);
    }

    // Join arr with sep between chars
    return resStrArr.join(sep);
}

console.log(freqSeq("hello world", "-")); // => "1-1-3-3-2-1-1-2-1-3-1"
