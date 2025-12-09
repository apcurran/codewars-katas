"use strict";

/**
 * solution 1
 * time: O(n^2)
 * space: O(n)
 *
 * @param {string} words
 * @returns {number}
 */
function shifter(words) {
    // empty str check
    if (words.length === 0) return 0;

    const wordsList = words.split(" ");
    const shifterLetters = new Set(["H", "I", "N", "O", "S", "X", "Z", "M", "W"]);
    let shifterWordsCount = 0;
    let uniqueWords = new Set();

    wordsLoop: for (let word of wordsList) {
        for (let letter of word) {
            if (!shifterLetters.has(letter)) {
                continue wordsLoop;
            }
        }

        if (uniqueWords.has(word)) {
            continue wordsLoop;
        }

        uniqueWords.add(word);
        shifterWordsCount++;
    }

    return shifterWordsCount;
}

console.log(shifter("SOS IN THE HOME")); // 2
console.log(shifter("WHO IS SHIFTER AND WHO IS NO")); // 3
console.log(shifter("TASK")); // 0
console.log(shifter("")); // 0
console.log(shifter("WHO IS WHO")); // 2
