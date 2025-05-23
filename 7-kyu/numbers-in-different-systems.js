"use strict";

/**
 * solution 1 -- regex
 * time: O(n)
 * space: O(n)
 * 
 * @param {number} n 
 * @param {number} sys 
 * @returns {number|string}
 */
function sysNums(n, sys) {
    const digitsOnlyRegex = /^\d+$/;
    const value = n.toString(sys);
    const isOnlyDigits = digitsOnlyRegex.test(value);

    if (isOnlyDigits) {
        return Number(value);
    } else {
        return value;
    }
}

console.log(sysNums(5,2)); // 101
console.log(sysNums(5,8)); // 5
console.log(sysNums(250,2)); // 11111010
console.log(sysNums(250,16)); // "fa"
