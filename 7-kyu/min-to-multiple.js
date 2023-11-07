"use strict";

// /**
//  * solution 1
//  * time: O(n)
//  * space: O(1)
//  * 
//  * @param {number} a 
//  * @param {number} x 
//  * @returns {number}
//  */
// function minimum(a, x) {
//     let addToAmount = 0;
//     let subtractFromAmount = 0;

//     let addACopy = a;

//     while (addACopy % x !== 0) {
//         addToAmount++;
//         addACopy++;
//     }
    
//     let subtractACopy = a;

//     while (subtractACopy % x !== 0) {
//         subtractFromAmount--;
//         subtractACopy--;
//     }

//     return Math.min(Math.abs(addToAmount), Math.abs(subtractFromAmount));
// }

/**
 * solution 2
 * time: O(1)
 * space: O(1)
 * 
 * @param {number} a 
 * @param {number} x 
 * @returns {number}
 */
function minimum(a, x) {
    const subtractFromAmount = a % x;
    const addToAmount = x - subtractFromAmount;

    return Math.min(subtractFromAmount, addToAmount);
}

console.log(minimum(10, 6)); // 2
