"use strict";

/**
 * solution 1 -- two pointers
 * time: O(n)
 * space: O(1)
 *
 * @param {number[][]} matrix
 * @returns {number[][]}
 */
function swapDiagonals(matrix) {
    let leftCol = 0;
    let rightCol = matrix[0].length - 1;

    for (let row = 0; row < matrix.length; row++) {
        const a = matrix[row][leftCol];
        const b = matrix[row][rightCol];
        // swap
        matrix[row][leftCol] = b;
        matrix[row][rightCol] = a;
        // move pointers
        leftCol++;
        rightCol--;
    }

    return matrix;
}

console.log(
    swapDiagonals([
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
    ]),
);
// [[3, 2, 1],
//  [4, 5, 6],
//  [9, 8, 7]]
