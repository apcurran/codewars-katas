"use strict";

// /**
//  * solution 1
//  * time: O(n) string conversion
//  * space: O(n) string conversion
//  * 
//  * @param {number} n 
//  * @returns {number}
//  */
// function twoDecimalPlaces(n) {
//     return Number( n.toFixed(2) );
// }

/**
 * solution 2
 * time: O(1)
 * space: O(1)
 * 
 * @param {number} n 
 * @returns {number}
 */
function twoDecimalPlaces(n) {
    return Math.round(n * 100) / 100;
}

console.log( twoDecimalPlaces(5.5589) ); // 5.56
