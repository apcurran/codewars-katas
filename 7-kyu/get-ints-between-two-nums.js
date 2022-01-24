"use strict";

/**
 * 
 * @param {number} startNum 
 * @param {number} endNum 
 * @returns {number[]}
 */
function range(startNum, endNum) {
    if (startNum === endNum) return [];

    let resultArr = [];

    for (let i = startNum + 1; i < endNum; i++) {
        resultArr.push(i);
    }

    return resultArr;
}

console.log( range(2,9) ); // [ 3, 4, 5, 6, 7, 8 ]

