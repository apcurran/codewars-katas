"use strict";

/**
 * solution 1
 * time: O(n)
 * space: O(1)
 *
 * @param {string} correctWord
 * @param {string} guess
 * @returns {number}
 */
function countCorrectCharacters(correctWord, guess) {
    if (correctWord.length !== guess.length) {
        throw new Error("Invalid word lengths.");
    }

    let correctLettersCount = 0;

    for (let i = 0; i < correctWord.length; i++) {
        const correctWordLetter = correctWord[i];
        const guessWordLetter = guess[i];

        if (correctWordLetter === guessWordLetter) {
            correctLettersCount++;
        }
    }

    return correctLettersCount;
}

console.log(countCorrectCharacters("dog", "car")); // 0
console.log(countCorrectCharacters("dog", "god")); // 1
console.log(countCorrectCharacters("dog", "cog")); // 2
console.log(countCorrectCharacters("dog", "cod")); // 1
console.log(countCorrectCharacters("dog", "bog")); // 2
console.log(countCorrectCharacters("dog", "dog")); // 3
