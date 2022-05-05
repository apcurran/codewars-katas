"use strict";

/**
 * solution 1
 * time: O(n * log n)
 * space: O(n)
 * 
 * @param {number} n 
 * @returns {number}
 */
function lastManStanding(n) {
    let numArr = [];

    for (let i = 1; i <= n; i++) {
        numArr.push(i);
    }

    while (numArr.length > 1) {
        let updatedNumArr = [];

        for (let i = 1; i < numArr.length; i += 2) {
            updatedNumArr.push(numArr[i]);
        }

        numArr = updatedNumArr.reverse();
    }

    return numArr[0];
}

console.log( lastManStanding(9) ); // 6
