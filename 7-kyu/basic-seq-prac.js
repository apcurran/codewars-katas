"use strict";

/**
 * solution 1 -- iterative
 * time: O(n)
 * space: O(n)
 * 
 * @param {number} n 
 * @returns {number[]}
 */
function sumOfN(n) {
    let resArr = [];
    let seqNum = 0;

    for (let i = 0; i <= Math.abs(n); i++) {
        const currNum = n < 0 ? -i : i;
        seqNum += currNum;
        resArr.push(seqNum);
    }

    return resArr;
}

console.log(sumOfN(3)); // [0, 1, 3, 6]
console.log(sumOfN(-4)); // [0, -1, -3, -6, -10]
