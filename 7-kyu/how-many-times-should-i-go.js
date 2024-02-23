"use strict";

/**
 * solution 1
 * time: O(1)
 * space: O(1)
 * 
 * @param {number} annualPrice 
 * @param {number} individualPrice 
 * @returns {number}
 */
function howManyTimes(annualPrice, individualPrice) {
    return Math.ceil(annualPrice / individualPrice);
}

console.log(howManyTimes(40, 15)); // 3
console.log(howManyTimes(30, 10)); // 3
console.log(howManyTimes(80, 15)); // 6
