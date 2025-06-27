"use strict";

/**
 * solution 1 -- regex
 * n = words length
 * m = word length
 * time: O(n * m)
 * space: O(n)
 *
 * @param {string} yourID
 * @returns {boolean}
 */
function showMe(yourID) {
    return (
        yourID
            // if word does not have a dash,
            // this will keep the word full (even keeping empty spaces)
            .split("-")
            .every(function isName(word) {
                return /^[A-Z][a-z]+$/.test(word);
            })
    );
}

console.log(showMe("Francis")); // true
console.log(showMe("Jean-Eluard")); // true
console.log(showMe("Le Mec")); // false
