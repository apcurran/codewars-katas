"use strict";

/**
 * solution 1
 * time: O(n^2)
 * space: O(1)
 *
 * @param {string[][]} matrix
 * @returns {boolean}
 */
function solution(matrix) {
    for (let row = 0; row < matrix.length; row++) {
        let arrowRow;
        let arrowCol;

        let targetRow;
        let targetCol;

        for (let col = 0; col < matrix[0].length; col++) {
            const elem = matrix[row][col];

            if (elem === ">") {
                arrowRow = row;
                arrowCol = col;
            }

            if (elem === "x") {
                targetRow = row;
                targetCol = col;
            }

            if (arrowRow !== undefined && arrowRow === targetRow) {
                // check if target col to right of arrowCol
                if (arrowCol < targetCol) {
                    return true;
                }
            }
        }
    }

    return false;
}

console.log(
    solution([
        [" ", " ", " ", " "],
        [" ", " ", " ", " "],
        [" ", ">", " ", "x"],
        [" ", " ", " ", " "],
    ]),
); // true

console.log(
    solution([
        [" ", " ", " ", " "],
        [" ", ">", " ", " "],
        [" ", " ", " ", "x"],
        [" ", " ", " ", " "],
    ]),
); // false
