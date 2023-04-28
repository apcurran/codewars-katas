"use strict";

// /**
//  * solution 1
//  * time: O(1)
//  * space: O(1)
//  * 
//  * @param {number} n 
//  * @returns {boolean}
//  */
// function SafeInteger(n) {
//     return n <= Number.MAX_SAFE_INTEGER;
// }

/**
 * solution 2
 * time: O(1)
 * space: O(1)
 * 
 * @param {number} n 
 * @returns {boolean}
 */
function SafeInteger(n) {
    return Number.isSafeInteger(n);
}

console.log( SafeInteger(9007199254740990) ); // true
console.log( SafeInteger(9007199254740992) ); // false
