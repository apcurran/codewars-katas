"use strict";

// /**
//  * solution 1
//  * n = str len
//  * m = char hex len
//  * time: O(n + m)
//  * space: O(m)
//  *
//  * @param {string} str
//  * @returns {number} sum of the nums in the converted hex strings
//  */
// function hexHash(str) {
//     let hexSum = 0;

//     for (let i = 0; i < str.length; i++) {
//         const charHex = str[i]
//                             .charCodeAt(0)
//                             .toString(16);
//         const charHexArr = charHex.split("");

//         for (let val of charHexArr) {
//             const currHexNum = Number(val);

//             if (!Number.isNaN(currHexNum)) {
//                 hexSum += currHexNum;
//             }
//         }
//     }

//     return hexSum;
// }

/**
 * solution 2 -- slight alternative
 * n = str len
 * m = char hex len
 * time: O(n + m)
 * space: O(m)
 *
 * @param {string} str
 * @returns {number} sum of the nums in the converted hex strings
 */
function hexHash(str) {
    let hexSum = 0;

    for (let i = 0; i < str.length; i++) {
        const charHex = str[i].charCodeAt(0).toString(16);
        const charHexNumsArr = charHex.replace(/\D/g, ""); // remove non-digits
        const charHexArrSum = charHexNumsArr
            .split("")
            .reduce((sum, curr) => sum + Number(curr), 0);
        hexSum += charHexArrSum;
    }

    return hexSum;
}

console.log(hexHash("Yo")); // 20
console.log(hexHash("Hello, World!")); // 91
