"use strict";

/**
 * solution 1
 * n = words length
 * m = word length
 * time: O(n * (m * log m))
 * space: O(n + m)
 *
 * @param {string[]} wordsArray
 * @returns {number} - distinct pairs of anagram words
 */
function anagramCounter(wordsArray) {
    let anagrams = new Map();

    for (let word of wordsArray) {
        const wordSortedChars = word.split("").sort().join("");
        const wordPriorFreq = anagrams.get(wordSortedChars) || 0;
        anagrams.set(wordSortedChars, wordPriorFreq + 1);
    }

    let anagramPairsCount = 0;

    for (let anagramTuple of anagrams) {
        const groupSize = anagramTuple[1];
        // combinations formula -> (n * (n - 1)) / 2
        const uniquePairsInGroup = (groupSize * (groupSize - 1)) / 2;
        anagramPairsCount += uniquePairsInGroup;
    }

    return anagramPairsCount;
}

console.log(anagramCounter(["dell", "ledl", "abc", "cba"])); // 2
console.log(anagramCounter(["dell", "ledl", "abc", "cba", "bca", "bac"])); // 7
