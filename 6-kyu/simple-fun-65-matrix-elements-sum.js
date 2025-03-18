"use strict";

/**
 * solution 1
 * time: O(n * m)
 * space: O(1)
 * 
 * @param {number[][]} matrix 
 * @returns {number}
 */
function matrixElementsSum(matrix) {
    const rows = matrix.length;
    const cols = matrix[0].length;
    let sum = 0;

    for (let col = 0; col < cols; col++) {
        for (let row = 0; row < rows; row++) {
            const cellValue = matrix[row][col];

            if (cellValue === 0) {
                break;
            }

            sum += cellValue;
        }
    }

    return sum;
}

console.log(matrixElementsSum(
    [
        [0, 1, 1, 2],
        [0, 5, 0, 0],
        [2, 0, 3, 3]
    ]
));
