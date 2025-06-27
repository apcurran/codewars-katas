"use strict";

/**
 * solution 1
 * n = matrix length
 * m = uniqueSquares size
 * time: O(n^2)
 * space: O(m)
 *
 * @param {number[][]} matrix
 * @returns {number} count of different 2x2 squares
 */
function differentSquares(matrix) {
    let uniqueSquares = new Set();

    for (let row = 0; row < matrix.length - 1; row++) {
        for (let col = 0; col < matrix[0].length - 1; col++) {
            // check current 2x2 square
            const firstCell = matrix[row][col];
            const secondCell = matrix[row][col + 1];
            const thirdCell = matrix[row + 1][col];
            const fourthCell = matrix[row + 1][col + 1];
            // concat current row into a string for comparison
            const squareSection = `${firstCell}${secondCell}${thirdCell}${fourthCell}`;
            // add string to Set obj
            uniqueSquares.add(squareSection);
        }
    }

    return uniqueSquares.size;
}

const matrix = [
    [1, 2, 1],
    [2, 2, 2],
    [2, 2, 2],
    [1, 2, 3],
    [2, 2, 1],
];
console.log(differentSquares(matrix)); // 6
