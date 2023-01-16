"use strict";

// /**
//  * solution 1
//  * time: O(n) -- stringifying number
//  * space: O(n)
//  * 
//  * @param {number} finalPrice 
//  * @returns {number} original price
//  */
// function excludingVatPrice(finalPrice) {
//     if (finalPrice === null) return -1;
//     // divide by 1.15 to account for 15% VAT
//     const originalPrice = finalPrice / 1.15;

//     return Number(originalPrice.toFixed(2));
// }

/**
 * solution 2
 * time: O(1)
 * space: O(1)
 * 
 * @param {number} finalPrice 
 * @returns {number} original price
 */
function excludingVatPrice(finalPrice) {
    if (finalPrice === null) return -1;
    // divide by 1.15 to account for 15% VAT
    return Math.round((finalPrice / 1.15) * 100) / 100;
}

console.log( excludingVatPrice(230) ); // 200.00
console.log( excludingVatPrice(123) ); // 106.96
