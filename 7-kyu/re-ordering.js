"use strict";

/**
 * solution 1
 * time: O(n)
 * space: O(n)
 *
 * @param {string} text
 * @returns {string}
 */
function reOrdering(text) {
    if (text[0] === text[0].toUpperCase()) {
        return text;
    }

    let words = text.split(" ");

    for (let i = 0; i < words.length; i++) {
        const word = words[i];

        if (word[0] === word[0].toUpperCase()) {
            // uppercase first letter word
            const removedWord = words.splice(i, 1);
            // move to front
            words.unshift(removedWord);
        }
    }

    return words.join(" ");
}

console.log(reOrdering("ming Yao")); // "Yao ming"
