"use strict";

/**
 * solution 1
 * time: O(n)
 * space: O(1)
 * 
 * @param {number[][]} matrix 
 * @returns {number[][]}
 */
function reverseOnDiagonals(matrix) {
    for (let row = 0; row < matrix.length / 2; row++) {
        const cellA1 = matrix[row][row];
        const cellA2 = matrix[matrix.length - 1 - row][matrix[0].length - 1 - row];
        const cellB1 = matrix[row][matrix.length - 1 - row];
        const cellB2 = matrix[matrix.length - 1 - row][row];
        // A cells swap
        matrix[row][row] = cellA2; // A1 cell
        matrix[matrix.length - 1 - row][matrix[0].length - 1 - row] = cellA1; // A2 cell
        // B cells swap
        matrix[row][matrix.length - 1 - row] = cellB2; // B1 cell
        matrix[matrix.length - 1 - row][row] = cellB1; // B2 cell
    }

    return matrix;
}

console.log(reverseOnDiagonals(
    [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9]
    ]
)); // [[9,2,7], [4,5,6],  [3,8,1]]
