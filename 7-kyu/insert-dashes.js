"use strict";

/**
 * solution 1
 * time: O(n)
 * space: O(n)
 *
 * @param {number} num
 * @returns {string}
 */
function insertDash(num) {
    const digitsArr = num
        .toString()
        .split("")
        .map((num) => +num);
    let resStr = "";

    for (let i = 0; i < digitsArr.length; i++) {
        const currDigit = digitsArr[i];
        const nextDigit = digitsArr[i + 1];

        // check if not last digit AND curr num is odd, AND next num is odd
        if (nextDigit && currDigit % 2 !== 0 && nextDigit % 2 !== 0) {
            // separate digits with dash
            resStr += currDigit + "-";
            continue;
        }
        // if no, just add num to str
        resStr += currDigit;
    }

    return resStr;
}

console.log(insertDash(454793)); // "4547-9-3"
