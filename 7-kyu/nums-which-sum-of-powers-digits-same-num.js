"use strict";

/**
 * solution 1
 * n = total nums between 2 and hMax
 * m = total digits of each number
 * r = output resNums arr len
 * time: O(n * m)
 * space: O(m + r)
 * 
 * @param {number} hMax 
 * @param {number} exp 
 * @returns {number[]}
 */
function eqSumPowdig(hMax, exp) {
    // generate answers above 1
    let resNums = [];

    for (let i = 2; i <= hMax; i++) {
        // break i num into digits
        const digitsRaisedSum = String(i)
            .split("")
            .map((digitStr) => {
                const digit = Number(digitStr);
                // raise each digit to exp power
                const raisedDigit = digit ** exp;

                return raisedDigit;
            })
        // sum digit power results
            .reduce((sum, currNum) => {
                return sum + currNum;
            }, 0);
        // check if resulting sum is equal to original num
        if (digitsRaisedSum === i) {
            // if res matches original num, add to resNums arr
            resNums.push(i);
        }
    }

    return resNums;
}

console.log( eqSumPowdig(370, 3) ); // [153, 370]
