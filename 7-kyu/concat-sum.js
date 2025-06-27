"use strict";

// /**
//  * solution 1
//  * m = originalNum length
//  * time: O(m * n)
//  * space: O(m)
//  * 
//  * @param {number} originalNum 
//  * @param {number} n 
//  * @returns {boolean}
//  */
// function checkConcatenatedSum(originalNum, n) {
//     const positiveOriginalNum = Math.abs(originalNum);
//     const strNum = String(positiveOriginalNum);
//     let digitsSum = 0;

//     for (let strDigit of strNum) {
//         let repeatedDigit = Number(strDigit.repeat(n));
//         digitsSum += repeatedDigit;
//     }

//     return digitsSum === positiveOriginalNum;
// }

/**
 * solution 2 -- functional style
 * m = originalNum length
 * time: O(m * n)
 * space: O(m)
 * 
 * @param {number} originalNum 
 * @param {number} n 
 * @returns {boolean}
 */
function checkConcatenatedSum(originalNum, n) {
    const positiveOriginalNum = Math.abs(originalNum);
    const strNum = String(positiveOriginalNum);
    const digitsSum = strNum
        .split("")
        .reduce((sum, currentDigit) => sum + Number(currentDigit.repeat(n)), 0);

    return positiveOriginalNum === digitsSum;
}

console.log(checkConcatenatedSum(2997, 3)); // true
console.log(checkConcatenatedSum(-2997, 3)); // true
