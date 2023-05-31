"use strict";

/**
 * solution 1
 * time: O(n) convert to str
 * space: O(n) convert to str
 * 
 * @param {number} n 
 * @returns {string}
 */
function numberToMoney(n) {
    const truncatedNum = Math.trunc(n * 100)/100;

    return truncatedNum.toLocaleString();
}

console.log( numberToMoney(2546.2562) ); // '2,546.25'
