"use strict";

// /**
//  * solution 1
//  * time: O(n)
//  * space: O(n)
//  *
//  * @param {number} n
//  * @returns {boolean}
//  */
// function tidyNumber(n) {
//     const sortedAscStr = String(n)
//                             .split("")
//                             .map((numStr) => Number(numStr))
//                             .sort((a, b) => a - b)
//                             .join("");

//     return Number(sortedAscStr) === n;
// }

/**
 * solution 2
 * time: O(n)
 * space: O(n)
 *
 * @param {number} n
 * @returns {boolean}
 */
function tidyNumber(n) {
    const strNum = String(n);

    for (let i = 0; i < strNum.length; i++) {
        const currDigit = Number(strNum[i]);
        const nextDigit = Number(strNum[i + 1]);

        if (currDigit > nextDigit) return false;
    }

    return true;
}

console.log(tidyNumber(12)); // true
console.log(tidyNumber(102)); // false
