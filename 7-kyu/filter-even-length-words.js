"use strict";

/**
 * solution 1
 * time: O(n)
 * space: O(n)
 * 
 * @param {string[]} words 
 * @returns {string[]}
 */
function filterEvenLengthWords(words) {
    return words.filter((word) => word.length % 2 === 0);
}

console.log(filterEvenLengthWords(["word", "words", "word", "words"])); // ['word', 'word']
