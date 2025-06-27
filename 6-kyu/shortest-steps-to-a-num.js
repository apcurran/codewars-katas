"use strict";

/**
 * solution 1 -- iterative
 * time: O(n) -- worst-case / O(log n) best-case
 * space: O(1)
 *
 * @param {number} num
 * @returns {number}
 */
function shortestStepsToNum(num) {
    let numCopy = num;
    let stepsCounter = 0;

    while (numCopy > 1) {
        if (numCopy % 2 === 0) {
            numCopy /= 2;
        } else {
            numCopy--;
        }

        stepsCounter++;
    }

    return stepsCounter;
}

console.log(shortestStepsToNum(1)); // 0
console.log(shortestStepsToNum(12)); // 4
console.log(shortestStepsToNum(16)); // 4
console.log(shortestStepsToNum(71)); // 9
