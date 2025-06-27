"use strict";

// /**
//  * solution 1 -- with helper function
//  * time: O(n)
//  * space: O(1) -- not including results
//  *
//  * @param {number} length
//  * @returns {string}
//  */
// function generate(length) {
//     let result = "";

//     for (let i = 0; i < length; i++) {
//         const randomBinaryDigit = getRandomBinary();
//         result += randomBinaryDigit;
//     }

//     return result;
// }

// /**
//  * @returns {"0"|"1"}
//  */
// function getRandomBinary() {
//     return Math.random() < 0.5 ? "0" : "1";
// }

/**
 * solution 2
 * time: O(n)
 * space: O(1) -- not including results
 *
 * @param {number} length
 * @returns {string}
 */
function generate(length) {
    let result = "";

    for (let i = 0; i < length; i++) {
        const binaryDigit = Math.round(Math.random());
        result += String(binaryDigit);
    }

    return result;
}
