"use strict";

/**
 * solution 1
 * time: O(n)
 * space: O(1)
 *
 * @param {number[][]} matrix
 * @returns {"Principal Diagonal win!"|"Secondary Diagonal win!"|"Draw!"}
 */
function diagonal(matrix) {
    // principal = upper left -> bottom right
    let principalSum = 0;
    // secondary = upper right -> bottom left
    let secondarySum = 0;

    for (let i = 0; i < matrix.length; i++) {
        const principalValue = matrix[i][i];
        principalSum += principalValue;

        const secondaryValue = matrix[i][matrix.length - i - 1];
        secondarySum += secondaryValue;
    }

    if (principalSum > secondarySum) {
        return "Principal Diagonal win!";
    } else if (secondarySum > principalSum) {
        return "Secondary Diagonal win!";
    } else {
        return "Draw!";
    }
}

const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
];
console.log(diagonal(matrix)); // "Draw!"
