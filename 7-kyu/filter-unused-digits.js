"use strict";

/**
 * solution 1
 * time: O(n^2)
 * space: O(n)
 *
 * @param {...number} nums
 * @returns {string}
 */
function unusedDigits(...nums) {
    const numsDigitsArr = nums.join("").split("");
    const allDigitsStr = "0123456789";
    let missingDigitsStr = "";

    for (let strDigit of allDigitsStr) {
        const isDigitPresent = numsDigitsArr.includes(strDigit);

        if (!isDigitPresent) {
            missingDigitsStr += strDigit;
        }
    }

    return missingDigitsStr;
}

console.log(unusedDigits(12, 34, 56, 78)); // "09"
console.log(unusedDigits(2015, 8, 26)); // "3479"
