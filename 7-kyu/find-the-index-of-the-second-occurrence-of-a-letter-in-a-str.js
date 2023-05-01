"use strict";

/**
 * solution 1
 * time: O(n)
 * space: O(1)
 * 
 * @param {string} str 
 * @param {string} symbol 
 * @returns {number} index of the 2nd occurerence of symbol in the string OR -1 (does not exist)
 */
function secondSymbol(str, symbol) {
    let symbolCount = 0;

    for (let i = 0; i < str.length; i++) {
        const char = str[i];

        if (char === symbol) {
            symbolCount++;
        }

        if (symbolCount === 2) {
            return i;
        }
    }

    // no second occurrence of symbol or symbol does not exist in string
    return -1;
}

console.log( secondSymbol("Hello world!!!", "l") ); // 3
console.log( secondSymbol("Hello world!!!", "A") ); // -1
