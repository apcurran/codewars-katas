"use strict";

/**
 * solution 1
 * n = words length
 * m = word length
 * time: O(n * m)
 * space: O(n)
 *
 * @param {number} maxReadableWordLength
 * @param {string} text
 * @returns {number}
 */
function timedReading(maxReadableWordLength, text) {
    const isLetter = /[a-zA-Z]/;
    const words = text.split(" ");
    let wordsReadCount = 0;

    for (let word of words) {
        let charCount = 0;

        for (let char of word) {
            if (isLetter.test(char)) {
                charCount++;
            }
        }

        if (charCount > 0 && charCount <= maxReadableWordLength) {
            wordsReadCount++;
        }
    }

    return wordsReadCount;
}

console.log(timedReading(4, "The Fox asked the stork, 'How is the soup?'")); // 7
console.log(timedReading(1, "...")); // 0
console.log(timedReading(1, "Oh!")); // 0
