"use strict";

/**
 * solution 1
 * time: O(n)
 * space: O(n)
 *
 * @param {number[]} arrA
 * @param {number[]} arrB
 * @returns {number[]}
 */
function getLargerNumbers(arrA, arrB) {
    let resArr = [];

    for (let i = 0; i < arrA.length; i++) {
        const arrANum = arrA[i];
        const arrBNum = arrB[i];

        resArr.push(Math.max(arrANum, arrBNum));
    }

    return resArr;
}

console.log(getLargerNumbers([13, 64, 15, 17, 88], [23, 14, 53, 17, 80])); // [23, 64, 53, 17, 88]
