"use strict";

/**
 * solution 1
 * time: O(n)
 * space: O(n)
 * 
 * @param {string} stringOfWords 
 * @returns {string}
 */
function longestWord(stringOfWords) {
    const words = stringOfWords.split(" ");
    let longest = words[0];

    for (let i = 1; i < words.length; i++) {
        const currentWord = words[i];

        if (currentWord.length >= longest.length) {
            longest = currentWord;
        }
    }

    return longest;
}

console.log( longestWord("one two three") ); // "three"
console.log( longestWord("red blue grey") ); // "grey"
