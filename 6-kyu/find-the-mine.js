"use strict";

/**
 * solution 1
 * time: O(n^2)
 * space: O(1)
 *
 * @param {number[][]} field
 * @returns {[number, number]}
 */
function mineLocation(field) {
    for (let row = 0; row < field.length; row++) {
        for (let col = 0; col < field[0].length; col++) {
            if (field[row][col] === 1) {
                return [row, col];
            }
        }
    }

    return [-1, -1];
}

console.log(
    mineLocation([
        [1, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
    ]),
); // [0, 0]
console.log(
    mineLocation([
        [0, 0, 0],
        [0, 1, 0],
        [0, 0, 0],
    ]),
); // [1, 1]
