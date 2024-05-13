"use strict";

/**
 * solution 1
 * time: O(n)
 * space: O(n)
 * 
 * @param {string} binaryStr 
 * @returns {string}
 */
function broken(binaryStr) {
    let invertedBinary = "";

    for (let char of binaryStr) {
        const invertedChar = char === "1" ? "0" : "1";
        invertedBinary += invertedChar;
    }

    return invertedBinary;
}

console.log(broken("1")); // "0"
console.log(broken("10000000101101111110011001000")); // "01111111010010000001100110111"
console.log(broken("100010")); // "011101"
