"use strict";

// /**
//  * solution 1
//  * time: O(1) -- max 32-bits
//  * space: O(1)
//  *
//  * @param {number} a
//  * @param {number} b
//  * @returns {number}
//  */
// function convertBits(a, b) {
//     const aBinary = a.toString(2).padStart(32, "0");
//     const bBinary = b.toString(2).padStart(32, "0");
//     let differentBitsCount = 0;

//     for (let i = aBinary.length - 1; i >= 0; i--) {
//         if (aBinary[i] !== bBinary[i]) {
//             differentBitsCount++;
//         }
//     }

//     return differentBitsCount;
// }

/**
 * solution 2 -- bitwise XOR
 * time: O(1) -- max 32-bits
 * space: O(1)
 *
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
function convertBits(a, b) {
    const differentBits = (a ^ b).toString(2);
    let count = 0;

    for (let i = 0; i < differentBits.length; i++) {
        if (differentBits[i] === "1") {
            count++;
        }
    }

    return count;
}

console.log(convertBits(31, 14)); // 2
