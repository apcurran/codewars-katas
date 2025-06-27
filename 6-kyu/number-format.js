"use strict";

/**
 * solution 1
 * time: O(n)
 * space: O(n)
 * 
 * @param {number} number 
 * @returns {string}
 */
function numberFormat(number) {
    return new Intl.NumberFormat("en-US").format(number);
}

console.log(numberFormat(5678545)); // '5,678,545'
