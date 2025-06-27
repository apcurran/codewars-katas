"use strict";

/**
 * solution 1
 * time: O(n)
 * space: O(1)
 * 
 * @param {number[][]} trainingData 
 * @returns {number} average of correct
 */
function companyBotStrategy(trainingData) {
    let sum = 0;
    let correctCount = 0;

    for (let [answerTime, correctness] of trainingData) {
        if (correctness === 1) {
            sum += answerTime;
            correctCount++;
        }
    }

    if (sum === 0) {
        // no correct answers in trainingData
        return 0;
    }

    return sum / correctCount;
}

console.log(companyBotStrategy(
    [
        [3, 1],
        [6, 1],
        [4, 1],
        [5, 1],
    ],
)); // 4.5
console.log(companyBotStrategy(
    [
        [4, 1],
        [4, -1],
        [0, 0],
        [6, 1],
    ],
)); // 5.0
console.log(companyBotStrategy(
    [
        [4, -1],
        [0, 0],
        [5, -1],
    ],
));
