"use strict";

// /**
//  * solution 1 -- basic, iterative
//  * time: O(n)
//  * space: O(n)
//  * 
//  * @param {string} str
//  * @returns {string}
//  */
// function reverseCase(str) {
//     let results = [];
//     let consectiveChar = null;
//     let consectiveCharsCount = 0;

//     for (let i = 0; i < str.length; i++) {
//         const currentChar = str[i];
//         const nextChar = str[i + 1];

//         if (currentChar === nextChar) {
//             consectiveCharsCount++;

//             if (currentChar === currentChar.toLowerCase()) {
//                 consectiveChar = currentChar.toUpperCase();
//             } else {
//                 consectiveChar = currentChar.toLowerCase();
//             }
//         } else if (consectiveCharsCount > 0) {
//             results.push(consectiveChar.repeat(consectiveCharsCount + 1));

//             // reset
//             consectiveChar = null;
//             consectiveCharsCount = 0;
//         } else {
//             results.push(currentChar);
//         }
//     }

//     if (consectiveChar) {
//         results.push(consectiveChar.repeat(consectiveCharsCount + 1));
//     }

//     return results.join("");
// }

// /**
//  * solution 2 -- iterative (simplified)
//  * time: O(n)
//  * space: O(1)
//  * 
//  * @param {string} str
//  * @returns {string}
//  */
// function reverseCase(str) {
//     let result = "";

//     for (let i = 0; i < str.length; i++) {
//         const char = str[i];

//         if (char === str[i + 1] || char === str[i - 1]) {
//             // consecutive char found
//             const charAdjustedCase = char === char.toLowerCase() ? char.toUpperCase() : char.toLowerCase();
//             result += charAdjustedCase;
//         } else {
//             result += char;
//         }
//     }

//     return result;
// }

/**
 * solution 3 -- regex (capture group and backreference)
 * time: O(n)
 * space: O(1) -- not including results
 * 
 * @param {string} str
 * @returns {string}
 */
function reverseCase(str) {
    return str.replace(/([a-zA-Z])\1+/g, function invertCharCasing(letter) {
        return letter.toLowerCase() === letter ? letter.toUpperCase() : letter.toLowerCase();
    });
}

console.log(reverseCase("puzzles")); // "puZZles"
console.log(reverseCase("shhh")); // "sHHH"
