"use strict";

/**
 * solution 1 -- keeping filter method
 * time: O(n)
 * space: O(n)
 * 
 * @param {string} str 
 * @returns {string} str without numbers
 */
function FilterNumbers(str) {
    const numRegex = /[0-9]/;

    return str
        .split("")
        .filter(function removeDigits(char) {
            return numRegex.test(char) ? false : true;
        })
        .join("");
}

console.log(FilterNumbers("b0ab0ecebbbfcba")); // "babecebbbfcba"
