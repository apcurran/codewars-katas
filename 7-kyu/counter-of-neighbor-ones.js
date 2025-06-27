"use strict";

/**
 * solution 1
 * time: O(n)
 * space: O(n)
 *
 * @param {number[]} input
 * @returns {number[]}
 */
function onesCounter(input) {
    let consecOnes = 0;
    let resArr = [];

    for (let num of input) {
        if (num !== 1) {
            if (consecOnes !== 0) {
                resArr.push(consecOnes);
            }
            // reset the ones counter if the curr num is not 1
            consecOnes = 0;

            continue;
        }

        consecOnes++;
    }

    if (consecOnes !== 0) {
        resArr.push(consecOnes);
    }

    return resArr;
}

console.log(onesCounter([1, 1, 1, 0, 1])); // [3, 1]
console.log(onesCounter([0, 0, 0, 0, 0, 0, 0, 0])); // []
