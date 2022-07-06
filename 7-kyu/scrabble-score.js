"use strict";

/**
 * solution 1
 * time: O(n)
 * space: O(1)
 * 
 * @param {string} str 
 * @returns {number}
 */
function scrabbleScore(str) {
    if (str == "") return 0;

    // preloaded table $dict[letter] === value
    let score = 0;

    for (let letter of str) {
        const upperLetter = letter.toUpperCase();
        // fallback to 0 if char is undefined
        const val = $dict[upperLetter] || 0;
        score += val;
    }

    return score;
}