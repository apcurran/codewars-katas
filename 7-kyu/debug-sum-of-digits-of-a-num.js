"use strict";

/**
 * solution 1
 * n = num of digits in val
 * time: O(n)
 * space: O(n)
 * 
 * @param {number} integer 
 * @returns {number}
 */
function getSumOfDigits(integer) {
    var sum = 0;
    var digits = Math.floor(integer).toString();

    for (var i = 0; i < digits.length; i += 1) {
        const digit = digits[i];
        sum += Number(digit);
    }

    return sum;
}

console.log( getSumOfDigits(223) ); // 7
