"use strict";

/**
 * solution 1
 * time: O(n)
 * space: O(1)
 * 
 * @param {string} str 
 * @returns {number}
 */
function wordsToMarks(str) {
    let totalVal = 0;

    for (let charStr of str) {
        const charNum = charStr.charCodeAt(0) - 96;
        totalVal += charNum;
    }

    return totalVal;
}

console.log( wordsToMarks("attitude") ); // 100
console.log( wordsToMarks("friends") ); // 75
