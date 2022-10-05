"use strict";

/**
 * solution 1 -- stack
 * time: O(n)
 * space: O(n)
 * 
 * @param {string} str
 * @returns {string}
 */
function cleanString(str) {
    let resStr = [];

    for (let char of str) {
        if (char === "#") {
            resStr.pop();
        } else {
            resStr.push(char);
        }
    }

    return resStr.join("");
}

console.log( cleanString("abc#d##c") ); // "ac"
