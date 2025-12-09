"use strict";

// /**
//  * solution 1
//  * time: O(n)
//  * space: O(n)
//  *
//  * @param {string} s
//  * @returns {string}
//  */
// function reverseByCenter(s) {
//     if (s.length % 2 === 0) {
//         const startChunk = s.slice(0, s.length / 2);
//         const endChunk = s.slice(s.length / 2);

//         return `${endChunk}${startChunk}`;
//     } else {
//         const middleCharIndex = Math.floor(s.length / 2);
//         const middleChar = s[middleCharIndex];
//         const startChunk = s.slice(0, middleCharIndex);
//         const endChunk = s.slice(middleCharIndex + 1);

//         return `${endChunk}${middleChar}${startChunk}`;
//     }
// }

/**
 * solution 2 -- slightly refined
 * time: O(n)
 * space: O(n)
 *
 * @param {string} s
 * @returns {string}
 */
function reverseByCenter(s) {
    const endChunk = s.slice(Math.ceil(s.length / 2));
    const middleChar = s.slice(Math.floor(s.length / 2), Math.ceil(s.length / 2));
    const startChunk = s.slice(0, Math.floor(s.length / 2));

    return `${endChunk}${middleChar}${startChunk}`;
}

console.log(reverseByCenter("secret")); // "retsec"
console.log(reverseByCenter("agent")); // "nteag"
