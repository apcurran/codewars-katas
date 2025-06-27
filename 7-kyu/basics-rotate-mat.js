"use strict";

/**
 * solution 1
 * time: O(n * m)
 * space: O(n * m)
 * 
 * @param {number[][]} arr 
 * @returns {number[][]}
 */
function rotateMatrix(arr) {
    const row1 = arr[0];
    let res = [];

    for (let i = row1.length - 1; i >= 0; i--) {
        let resRow = [];
    
        for (let j = 0; j < arr.length; j++) {
            resRow.push(arr[j][i]);
        }
    
        res.push(resRow);
    }

    return res;
}

console.log( rotateMatrix(
    [
        [-1, 4, 5],
        [2, 3, 4],
    ],
) ); 
// [
//     [5, 4],
//     [4, 3],
//     [-1, 2]
// ]

