"use strict";

// /**
//  * solution 1 -- keeping filter method
//  * time: O(n)
//  * space: O(n)
//  * 
//  * @param {string} str 
//  * @returns {string} str without numbers
//  */
// function FilterNumbers(str) {
//     const numRegex = /[0-9]/;

//     return str
//         .split("")
//         .filter(function removeDigits(char) {
//             return numRegex.test(char) ? false : true;
//         })
//         .join("");
// }

/**
 * solution 2
 * time: O(n)
 * space: O(n)
 * 
 * @param {string} str 
 * @returns {string} str without numbers
 */
function FilterNumbers(str) {
    return str.replace(/\d/g, "");
}

console.log(FilterNumbers("b0ab0ecebbbfcba")); // "babecebbbfcba"
