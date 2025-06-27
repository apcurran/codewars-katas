"use strict";

/**
 * solution 1
 * time: O(n^2)
 * space: O(n^2)
 * 
 * @param {number} num 
 * @returns {number[][]}
 */
function getMatrix(num) {
    let results = [];

    for (let i = 0; i < num; i++) {
        let row = new Array(num).fill(0);
        row[i] = 1;
        results.push(row);
    }

    return results;
}

console.log(getMatrix(2));
// [
//     [1, 0],
//     [0, 1]
// ];

console.log(getMatrix(5));
[
    [1, 0, 0, 0, 0],
    [0, 1, 0, 0, 0],
    [0, 0, 1, 0, 0],
    [0, 0, 0, 1, 0],
    [0, 0, 0, 0, 1],
]; 
