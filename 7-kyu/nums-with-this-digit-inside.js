"use strict";

// /**
//  * solution 1 -- regex
//  * time: O(n^2)
//  * space: O(n)
//  * 
//  * @param {number} x 
//  * @param {number} d 
//  * @returns {number[]}
//  */
// function numbersWithDigitInside(x, d) {
//     const containsDRegex = new RegExp(`${d}`);
//     let numsArr = [];

//     for (let i = 1; i <= x; i++) {
//         const hasDigit = containsDRegex.test(String(i));
//         if (hasDigit) numsArr.push(i);
//     }

//     if (numsArr.length === 0) return [0, 0, 0];

//     const numsCount = numsArr.length;
//     const numsSum = numsArr.reduce((sum, curr) => sum + curr, 0);
//     const numsProd = numsArr.reduce((prod, curr) => prod * curr, 1);
    
//     return [numsCount, numsSum, numsProd];
// }

/**
 * solution 2 -- slightly optimized
 * time: O(n^2)
 * space: O(1)
 * 
 * @param {number} x 
 * @param {number} d 
 * @returns {number[]}
 */
function numbersWithDigitInside(x, d) {
    let numsCount = 0;
    let numsSum = 0;
    let numsProd = 1;

    for (let i = 1; i <= x; i++) {
        const hasDigit = String(i).includes(String(d));

        if (!hasDigit) continue;

        numsCount++;
        numsSum += i;
        numsProd *= i;
    }

    if (numsCount === 0) return [0, 0, 0];
    
    return [numsCount, numsSum, numsProd];
}

console.log( numbersWithDigitInside(11, 1) ); // numbers: 1, 10, 11 -> [3, 22, 110]
