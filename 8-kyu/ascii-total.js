"use strict";

/**
 * solution 1
 * time: O(n)
 * space: O(1)
 * 
 * @param {string} str 
 * @returns {number}
 */
function uniTotal(str) {
    let asciiValueSum = 0;

    for (let char of str) {
        const charCode = char.charCodeAt(0);
        asciiValueSum += charCode;
    }

    return asciiValueSum;
}

console.log( uniTotal("a") ); // 97
console.log( uniTotal("aaa") ); // 291
