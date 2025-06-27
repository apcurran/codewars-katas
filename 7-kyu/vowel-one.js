"use strict";

// /**
//  * solution 1 -- regex
//  * time: O(n)
//  * space: O(n)
//  *
//  * @param {string} s
//  * @returns {string}
//  */
// function vowelOne(s) {
//     return s
//             .replace(/[^aeiou]/gi, "0")
//             .replace(/[^\d]/g, "1");
// }

// /**
//  * solution 2
//  * time: O(n)
//  * space: O(n)
//  *
//  * @param {string} s
//  * @returns {string}
//  */
// function vowelOne(s) {
//     const lowerS = s.toLowerCase();
//     let resStr = "";

//     for (let char of lowerS) {
//         if (char === "a" ||
//             char === "e" ||
//             char === "i" ||
//             char === "o" ||
//             char === "u") {
//             resStr += "1";
//         } else {
//             resStr += "0";
//         }
//     }

//     return resStr;
// }

/**
 * solution 3 -- single pass
 * time: O(n)
 * space: O(n)
 *
 * @param {string} s
 * @returns {string}
 */
function vowelOne(s) {
    const vowelSet = new Set([
        "a",
        "A",
        "e",
        "E",
        "i",
        "I",
        "o",
        "O",
        "u",
        "U",
    ]);
    let resStr = "";

    for (let char of s) {
        if (vowelSet.has(char)) {
            resStr += "1";
        } else {
            resStr += "0";
        }
    }

    return resStr;
}

console.log(vowelOne("abceios")); // "1001110"
console.log(vowelOne("aeiou, abc")); // "1111100100"
