"use strict";

/**
 * solution 1
 * time: O(1)
 * space: O(1)
 *
 * @param {string} input
 * @returns {string|function}
 */
function iam(input, veryWordCounter = 0) {
    // return a string if input given
    if (input) {
        const veryPortion = "very ".repeat(veryWordCounter);

        return `I am ${veryPortion}${input}`;
    }
    // otherwise, return a func to continue the sentence
    return function calculateVery(input) {
        return iam(input, veryWordCounter + 1);
    };
}

console.log(iam("happy")); // "I am happy"
console.log(iam("excited")); // "I am excited"
console.log(iam()("scared")); // "I am very scared"
