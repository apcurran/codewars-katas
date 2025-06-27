"use strict";

/**
 * solution 1
 * time: O(n)
 * space: O(1)
 *
 * @param {string} text
 * @param {string} a
 * @param {string} b
 * @returns {boolean}
 */
function bestFriend(text, a, b) {
    for (let i = 0; i < text.length; i++) {
        const currentLetter = text[i];
        const nextLetter = text[i + 1];

        if (currentLetter === a && nextLetter !== b) {
            return false;
        }
    }

    return true;
}

console.log(bestFriend("he headed to the store", "h", "e")); // true
console.log(bestFriend("abcdee", "e", "e")); // false
