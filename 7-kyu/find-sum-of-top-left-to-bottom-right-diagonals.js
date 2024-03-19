"use strict";

/**
 * solution 1
 * time: O(n)
 * space: O(1)
 * 
 * @param {number[][]} matrix 
 * @returns {number}
 */
function diagonalSum(matrix) {
    let sum = 0;

    for (let i = 0; i < matrix.length; i++) {
        const value = matrix[i][i];
        sum += value;
    }

    return sum;
}

console.log(diagonalSum([[12]])); // 12
console.log(diagonalSum([[1, 2], [3, 4]])); // 5
console.log(diagonalSum([[1, 2, 3], [4, 5, 6], [7, 8, 9]])); // 15
console.log(diagonalSum([[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12], [13, 14, 15, 16]])); // 34
