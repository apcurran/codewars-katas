"use strict";

/**
 * solution 1
 * time: O(n)
 * space: O(n) -- regex match returning a new arr
 * 
 * @param {string} word 
 * @returns {string}
 */
function i(word) {
    const invalidMsg = "Invalid word";

    if (word === "") return invalidMsg;

    const firstLetter = word[0];
    const letterCount = word.length;
    const vowels = word.match(/[aeiou]/gi);
    const vowelCount = vowels ? vowels.length : 0;

    // must pass all rules
    if (firstLetter === "I") {
        return invalidMsg;
    }

    if (firstLetter === firstLetter.toLowerCase()) {
        return invalidMsg;
    }
    
    if (vowelCount >= (letterCount / 2)) {
        return invalidMsg;
    }

    return `i${word}`;
}

console.log(i("Phone"));
console.log(i("")); // "Invalid word"
console.log(i("Inspire")); // "Invalid word"
console.log(i("East")); // "Invalid word"
console.log(i("road")); // "Invalid word"
