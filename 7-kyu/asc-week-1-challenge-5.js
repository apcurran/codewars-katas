"use strict";

/**
 * solution 1
 * n = rows length
 * m = columns length
 * time: O(m * n)
 * space: O(m)
 * 
 * @param {number[][]} arr 
 * @returns {number[]}
 */
function avgArray(arr) {
    const ROWS = arr.length;
    const COLS = arr[0].length;
    let averages = [];

    for (let col = 0; col < COLS; col++) {
        let rowsSum = 0;
        
        for (let row = 0; row < ROWS; row++) {
            const value = arr[row][col];
            rowsSum += value;
        }

        const average = rowsSum / ROWS;
        averages.push(average);
    }

    return averages;
}

console.log(avgArray([ [1, 2, 3, 4], [5, 6, 7, 8] ])); // [3, 4, 5, 6]
