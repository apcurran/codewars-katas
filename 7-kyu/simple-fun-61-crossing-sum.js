"use strict";

/**
 * solution 1
 * n = matrix rows
 * m = matrix cols
 * time: O(n + m)
 * space: O(1)
 *
 * @param {number[][]} matrix
 * @param {number} aRow
 * @param {number} bCol
 * @returns {number} sum of union of elements
 */
function crossingSum(matrix, aRow, bCol) {
    const aRowSum = matrix[aRow].reduce((sum, current) => sum + current, 0);
    let sum = aRowSum;

    for (let row = 0; row < matrix.length; row++) {
        if (row === aRow) continue; // skip row value to prevent duplicate addition of aRowSum element

        const bColValue = matrix[row][bCol];
        sum += bColValue;
    }

    return sum;
}

console.log(
    crossingSum(
        [
            [1, 1, 1, 1],
            [2, 2, 2, 2],
            [3, 3, 3, 3],
        ],
        1,
        3,
    ),
); // 12
