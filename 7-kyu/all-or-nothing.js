"use strict";

/**
 * All correct or all incorrect for 100%
 * solution 1
 * time: O(n)
 * space: O(1)
 * 
 * @param {string[]} key 
 * @param {string[]} studentAnswers 
 * @returns {boolean}
 */
function possiblyPerfect(key, studentAnswers) {
    let correctCount = 0;
    let incorrectCount = 0;
    let blanksCount = 0;

    for (let i = 0; i < key.length; i++) {
        const keyAnswer = key[i];
        const studentAnswer = studentAnswers[i];

        if (keyAnswer === "_") {
            blanksCount++;
        } else if (keyAnswer === studentAnswer) {
            correctCount++;
        } else {
            incorrectCount++;
        }
    }

    const adjustedPossibleAnswers = key.length - blanksCount;

    return correctCount === adjustedPossibleAnswers || incorrectCount === adjustedPossibleAnswers;
}

console.log(possiblyPerfect(["A", "_", "C", "_", "B"], ["A", "D", "C", "E", "B"]));
// true
