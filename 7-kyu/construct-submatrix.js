"use strict";

/**
 * solution 1
 * n = matrix rows length
 * m = matrix columns length
 * t = total matrix cells
 * time: O(n * m)
 * space: O(t)
 * 
 * @param {number[][]} matrix 
 * @param {number[]} rowsToDelete 
 * @param {number[]} columnsToDelete 
 * @returns {number[][]}
 */
function constructSubmatrix(matrix, rowsToDelete, columnsToDelete) {
    const matrixAfterRowDeletion = matrix.filter((row, rowIndex) => {
        if (rowsToDelete.includes(rowIndex)) {
            return false;
        }

        return true;
    });

    let results = [];

    for (let row of matrixAfterRowDeletion) {
        const rowAfterColumnDeletion = row.filter((value, valueIndex) => {
            if (columnsToDelete.includes(valueIndex)) {
                return false;
            }

            return true;
        });

        results.push(rowAfterColumnDeletion);
    }

    return results;
}

console.log(constructSubmatrix(
    [
        [1, 0, 0, 2],
        [0, 5, 0, 1],
        [0, 0, 3, 5],
    ],
    [1],
    [0, 2],
));
// [
//     [0, 2],
//     [0, 5]
// ]
