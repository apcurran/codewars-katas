"use strict";

/**
 * 
 * @param {number} n 
 * @returns {number[]}
 */
function oddRow(n) {
    const beginningNum = (n * n) - (n - 1);

    let oddNumsArr = [beginningNum];

    for (let i = 1; i < n; i++) {
        const oddNum = beginningNum + (i * 2);
        oddNumsArr.push(oddNum);
    }

    return oddNumsArr;
}

console.log( oddRow(1) ); // [1]
console.log( oddRow(2) ); // [3, 5]
console.log( oddRow(3) ); // [7, 9, 11]
