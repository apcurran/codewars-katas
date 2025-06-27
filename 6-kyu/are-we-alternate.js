"use strict";

/**
 * solution 1
 * time: O(n)
 * space: O(1)
 *
 * @param {string} word
 * @returns {boolean}
 */
function isAlt(word) {
    const vowels = "aeiouAEIOU";
    let previous;
    let current;

    for (let i = 0; i < word.length; i++) {
        const letter = word[i];

        if (vowels.includes(letter)) {
            current = "vowel";
        } else {
            current = "consonant";
        }

        if (current === previous) {
            return false;
        }

        // set previous to current value for next iteration
        previous = current;
    }

    return true;
}

console.log(isAlt("amazon")); // true
console.log(isAlt("apple")); // false
console.log(isAlt("banana")); // true
