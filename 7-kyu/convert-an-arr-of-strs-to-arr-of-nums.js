"use strict";

/**
 * solution 1
 * time: O(n)
 * space: O(n)
 * 
 * @param {string[]} strArr 
 * @returns {number[]}
 */
function toNumberArray(strArr) {
    return strArr.map((strNum) => +strNum);
}

console.log( toNumberArray(["1.1", "2.2", "3.3"]) ); // [1.1, 2.2, 3.3]
