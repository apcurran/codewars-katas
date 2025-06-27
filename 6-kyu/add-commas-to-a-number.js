"use strict";

/**
 * solution 1
 * time: O(n)
 * space: O(n)
 *
 * @param {number} num
 * @returns {string}
 */
function commas(num) {
    return num.toLocaleString();
}

console.log(commas(1)); // "1"
console.log(commas(1000)); // "1,000"
console.log(commas(100.2346)); // "100.235"
console.log(commas(1000000000.23)); // "1,000,000,000.23"
console.log(commas(-1)); // "-1"
console.log(commas(-1000000.123)); // "-1,000,000.123"
