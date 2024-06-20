"use strict";

/**
 * solution 1
 * n = total rows in matrix
 * m = row length in matrix
 * time: O(n * m)
 * space: O(n * m)
 * 
 * @param {string[][]} matrix 
 * @returns {string[]}
 */
function binRota(matrix) {
    let results = [];

    for (let row = 0; row < matrix.length; row++) {
        const currentRow = matrix[row];

        if (row % 2 === 0) {
            // left to right
            results.push(...currentRow);
        } else {
            // right to left
            results.push(...currentRow.reverse());
        }
    }

    return results;
}

console.log(binRota(
    [["Stefan", "Raj", "Marie"],
    ["Alexa", "Amy", "Edward"],
    ["Liz", "Claire", "Juan"],
    ["Dee", "Luke", "Katie"]]
));
// ["Stefan", "Raj", "Marie", "Edward", "Amy", "Alexa", "Liz", "Claire", "Juan", "Katie", "Luke", "Dee"]
