"use strict";

// /**
//  * solution 1
//  * n = w1
//  * m = w2
//  * time: O(n * m^2)
//  * space: O(m)
//  * 
//  * @param {string} w1 
//  * @param {string} w2 
//  * @returns {number}
//  */
// function anagramDifference(w1, w2) {
//     let counter = 0;

//     for (let i = 0; i < w1.length; i++) {
//         const word1Letter = w1[i];

//         if (w2.includes(word1Letter)) {
//             w2 = w2.replace(word1Letter, "1");
//             counter++;
//         }
//     }

//     return w1.length + w2.length - 2 * counter;
// }

/**
 * solution 2
 * n = w1
 * m = w2
 * time: O(n * m)
 * space: O(1) getFrequencyList does not scale with inputs
 * 
 * @param {string} w1 
 * @param {string} w2 
 * @returns {number}
 */
function anagramDifference(w1, w2) {
    const word1LetterFrequencies = getFrequencyList(w1);
    const word2LetterFrequencies = getFrequencyList(w2);
    let counter = 0;

    for (let i = 0; i < 26; i++) {
        const letterFrequencyDiff = Math.abs(word1LetterFrequencies[i] - word2LetterFrequencies[i]);
        counter += letterFrequencyDiff;
    }

    return counter;
}

/**
 * @param {string} str 
 * @returns {number[]}
 */
function getFrequencyList(str) {
    let letterFrequencies = new Array(26).fill(0);

    for (let letter of str) {
        const zeroBasedAlphabetPosition = letter.charCodeAt(0) - 97;
        letterFrequencies[zeroBasedAlphabetPosition] += 1;
    }

    return letterFrequencies;
}

console.log(anagramDifference("codewars", "hackerrank")); // 10

