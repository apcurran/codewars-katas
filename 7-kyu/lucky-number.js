"use strict";

// /**
//  * solution 1
//  * time: O(n)
//  * space: O(n)
//  * 
//  * @param {number} n 
//  * @returns {boolean}
//  */
// function isLucky(n) {
//     const digitsStr = String(n).split("");
//     let digitsSum = 0;

//     for (let digitStr of digitsStr) {
//         digitsSum += Number(digitStr);
//     }

//     return digitsSum === 0 || digitsSum % 9 === 0;
// }

/**
 * solution 2
 * time: O(1)
 * space: O(1)
 * 
 * @param {number} n 
 * @returns {boolean}
 */
function isLucky(n) {
    return n === 0 || n % 9 === 0;
}

console.log(isLucky(1892376)); // 36 (true)
