"use strict";

/**
 * Solution 1
 * Time: O(n^2)
 * Space: O(n^2)
 * 
 * @param {number} depth 
 * @returns {number[][]}
 */
function pascal(depth) {
    if (depth === 0) return [];

    if (depth === 1) return [[1]];

    let resultArr = [];

    for (let row = 1; row <= depth; row++) {
        let innerRowArr = [];

        for (let column = 0; column < row; column++) {
            // Check if it is the first or last column -- which should be 1
            if (column === 0 || column === row - 1) {
                innerRowArr.push(1);
                continue;
            }

            const firstVal = resultArr[row - 2][column - 1];
            const secondVal = resultArr[row - 2][column];
            innerRowArr.push(firstVal + secondVal);
        }

        resultArr.push(innerRowArr);
    }

    return resultArr;
}

console.log( pascal(5) ); // [ [1], [1,1], [1,2,1], [1,3,3,1], [1,4,6,4,1] ]
