"use strict";

/**
 * solution 1
 * time: O(n)
 * space: O(1)
 * 
 * @param {string} word 
 * @param {string} text 
 * @returns {boolean}
 */
function wordSearch(word, text) {
    const regex = new RegExp(`\\b${word}\\b`, "i");

    return regex.test(text);
}

const text = "what makes the desert beautiful, said the little prince is that somewhere it hides a well";
console.log(wordSearch("prince", text)); // true
console.log(wordSearch("beautiful", text)); // true
console.log(wordSearch("clown", text)); // false
console.log(wordSearch("yellow", text)); // false
console.log(wordSearch("akes the", text)); // false
