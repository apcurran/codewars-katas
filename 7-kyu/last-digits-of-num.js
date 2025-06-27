"use strict";

/**
 * @param {number} num 
 * @param {number} digits 
 * @returns {number[]}
 */
function lastDigit(num, digits) {
    if (digits <= 0) return [];

    return num
        .toString()
        .split("")
        .map((num) => +num)
        .slice(-digits);
}

console.log( lastDigit(123767, 4) ); // [3, 7, 6, 7]
