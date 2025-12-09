"use strict";

/**
 * solution 1 -- iterative
 * time: O(n)
 * space: O(n) -- split copy arr
 *
 * @param {string} str
 * @returns {number}
 */
function sumFromString(str) {
    return str.split(/[^0-9]/).reduce((sum, currStr) => sum + Number(currStr), 0);
}

console.log(sumFromString("In 2015, I want to know how much does iPhone 6+ cost?")); // 2021
