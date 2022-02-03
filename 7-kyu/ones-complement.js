"use strict";

/**
 * 
 * @param {string} n - str version of bin num
 * @returns {string} - str version of bin num with switched digits
 */
function onesComplement(n) {
    let resStr = "";

    for (let digit of n) {
        if (digit === "0") {
            resStr += "1";
        } else {
            resStr += "0";
        }
    }

    return resStr;
}

console.log( onesComplement("1101") ); // "0010"
