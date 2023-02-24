"use strict";

// /**
//  * solution 1
//  * time: O(1)
//  * space: O(1)
//  * 
//  * @param {number} base 
//  * @param {number} factor 
//  * @returns {boolean}
//  */
// function checkForFactor(base, factor) {
//     return base % factor === 0;
// }

// /**
//  * solution 2
//  * time: O(log n)
//  * space: O(1)
//  * 
//  * @param {number} base 
//  * @param {number} factor 
//  * @returns {boolean}
//  */
// function checkForFactor(base, factor) {
//     let baseCopy = base;

//     while (baseCopy > 0) {
//         baseCopy -= factor;
//     }

//     return baseCopy === 0;
// }

/**
 * solution 3 -- recursion
 * time: O(log n)
 * space: O(log n)
 * 
 * @param {number} base 
 * @param {number} factor 
 * @returns {boolean}
 */
function checkForFactor(base, factor) {
    if (base < 0) return false;

    if (base === 0) return true;

    return checkForFactor(base - factor, factor);
}

console.log( checkForFactor(10, 2) ); // true
console.log( checkForFactor(9, 4) ); // false
