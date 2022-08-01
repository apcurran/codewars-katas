"use strict";

/**
 * solution 1
 * time: O(log n)
 * space: O(1)
 * 
 * @param {number} numberOfKata 
 * @param {number} timeLimit 
 * @returns {number}
 */
function alexMistakes(numberOfKata, timeLimit) {
    const timePerKata = 6;
    const baseTime = numberOfKata * timePerKata;
    let totalTime = timeLimit - baseTime;
    let mistakeTime = 5;
    let mistakesCounter = 0;

    while (totalTime - mistakeTime >= 0) {
        mistakesCounter++;
        totalTime -= mistakeTime;
        mistakeTime *= 2;
    }

    return mistakesCounter;
}

console.log( alexMistakes(10, 120) ); // 3
console.log( alexMistakes(11, 120) ); // 3
console.log( alexMistakes(3, 45) ); // 2
