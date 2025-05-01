"use strict";

/**
 * solution 1 -- array methods
 * time: O(n)
 * space: O(n)
 * 
 * @param {string} s 
 * @returns {number[]}
 */
function stringToIntArray(s) {
    return s
        .split(",")
        .filter(function removeEmpty(str) {
            return str !== "";
        })
        .map(Number);
}

console.log(stringToIntArray("1,2,3,,,4,,5,,,")); // [1,2,3,4,5]
