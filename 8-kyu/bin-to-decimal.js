"use strict";

/**
 * solution 1
 * time: O(1)
 * space: O(1)
 * 
 * @param {string} bin 
 * @returns {number}
 */
function binToDec(bin) {
    return parseInt(bin, 2);
}

console.log( binToDec("1001001") ); // 73
