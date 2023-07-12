"use strict";

/**
 * solution 1
 * time: O(n^2)
 * space: O(n^2)
 * 
 * @param {number[][]} matrixA 
 * @param {number[][]} matrixB 
 * @returns {number[][]}
 */
function matrixAddition(matrixA, matrixB) {
    let result = [];

    for (let row = 0; row < matrixA.length; row++) {
        let resultRow = [];

        for (let column = 0; column < matrixA.length; column++) {
            const matrixACell = matrixA[row][column];
            const matrixBCell = matrixB[row][column];
            const matrixCellsSum = matrixACell + matrixBCell;
            resultRow.push(matrixCellsSum);
        }

        result.push(resultRow);
    }

    return result;
}

console.log(matrixAddition(
    [[1, 2, 3],
    [3, 2, 1],
    [1, 1, 1]],

    [[2, 2, 1],
    [3, 2, 3],
    [1, 1, 3]]
));

// returns:
// [[3, 4, 4],
// [6, 4, 4],
// [2, 2, 4]]
