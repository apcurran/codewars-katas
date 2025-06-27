"use strict";

/**
 * solution 1
 * time: O(n)
 * space: O(n)
 *
 * @param {string} word
 * @returns {string}
 */
function unscrambleEggs(word) {
    return word.replace(/egg/gi, "");
}

console.log(unscrambleEggs("ceggodegge heggeregge")); // "code here"
