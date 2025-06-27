"use strict";

/**
 * solution 1
 * n = str length
 * nums sorting does not affect time, since it is always 3 numbers long
 * time: O(n)
 * space: O(n)
 *
 * @param {number[]} nums
 * @param {string} str
 * @returns {string}
 */
function missingWord(nums, str) {
    const sortedIndices = [...nums].sort((a, b) => a - b);
    const sentenceWithoutSpaces = str.split(" ").join("");
    let resultWord = "";

    for (let letterIndex of sortedIndices) {
        const letter = sentenceWithoutSpaces[letterIndex];

        if (letter === undefined) return "No mission today";

        resultWord += letter;
    }

    return resultWord.toLowerCase();
}

console.log(missingWord([5, 0, 3], "I love you")); // "ivy"
console.log(missingWord([12, 4, 6], "Good Morning")); // "No mission today"
