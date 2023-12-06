"use strict";

/**
 * solution 1
 * time: O(n)
 * space: O(n)
 * 
 * @param {string} str 
 * @returns {string}
 */
function abbreviate(str) {
    const wordsLongerThanFourChars = /\w{4,}/g;

    return str.replace(wordsLongerThanFourChars, function abbreviateWord(word) {
        const firstLetter = word[0];
        const removedCharsCount = word.length - 2;
        const lastLetter = word[word.length - 1];

        return `${firstLetter}${removedCharsCount}${lastLetter}`;
    });
}

console.log(abbreviate("elephant-rides are really fun!")); // "e6t-r3s are r4y fun!"
