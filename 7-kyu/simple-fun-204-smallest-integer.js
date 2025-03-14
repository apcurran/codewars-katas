"use strict";

/**
 * solution 1
 * time O(n^2)
 * space: O(n) -- array.flat() returns a new array copy
 * 
 * @param {number[][]} matrix 
 * @returns {number}
 */
function smallestInteger(matrix) {
    const allNums = matrix.flat();
    let counter = 0;

    while (allNums.includes(counter)) {
        counter++;
    }

    return counter;
}

console.log(smallestInteger([[0, 2], [5, 1]])); // 3
