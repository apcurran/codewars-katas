"use strict";

/**
 * solution 1
 * time: O(n)
 * space: O(1)
 * 
 * @param {number[][]} matrix 
 * @returns {number}
 */
function sum(matrix) {
    let sumOfDiagonals = 0;

    for (let row = 0; row < matrix.length; row++) {
        const val1 = matrix[row][row];
        const val2 = matrix[matrix.length - 1 - row][row];
        const currentSum = val1 + val2;
        sumOfDiagonals += currentSum;
    }

    return sumOfDiagonals;
}

console.log(sum(
    [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9]
    ]
)); // 30 // 1 + 5 + 9 + 3 + 5 + 7
