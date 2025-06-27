"use strict";

/**
 * solution 1
 * time: O(n)
 * space: O(1)
 *
 * @param {number[][]} matrix
 * @returns {number}
 */
function mainDiagonalProduct(matrix) {
    let product = 1;

    for (let i = 0; i < matrix.length; i++) {
        // get row column value
        product *= matrix[i][i];
    }

    return product;
}

console.log(
    mainDiagonalProduct([
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
    ]),
); // 45
