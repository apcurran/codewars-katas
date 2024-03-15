"use strict";

/**
 * solution 1 -- hashmap
 * time: O(n)
 * space: O(n)
 * 
 * @param {string} s 
 * @returns {string|undefined}
 */
function firstDup(s) {
    let charFrequencies = new Map(); // [char, charFrequencyCount]
    let firstRepeatingChar = undefined;

    for (let char of s) {
        const previousCharFrequency = charFrequencies.get(char) || 0;
        charFrequencies.set(char, previousCharFrequency + 1);
    }

    for (let [char, charFrequency] of charFrequencies) {
        if (charFrequency >= 2) {
            firstRepeatingChar = char;

            break;
        }
    }

    return firstRepeatingChar;
}

console.log(firstDup("tweet")); // "t"
console.log(firstDup("like")); // undefined
