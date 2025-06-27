"use strict";

/**
 * Find the sum of the digits of all the numbers from 1 to num (both ends included).
 * @param {number} num - Number to add up to
 * @returns {number} - Total
 */
function twistedSum(num) {
    let sumTotal = 0;

    for (let i = 1; i <= num; i++) {
        if (i > 9) {
            const digitsSum = addNumDigits(i);
            sumTotal += digitsSum;

            continue;
        }

        sumTotal += i;
    }

    return sumTotal;
}

/**
 * @param {number} currNum - Current number whose digits must be summed.
 * @returns {number} - sum of digits
 */
function addNumDigits(currNum) {
    const splitDigitsStr = currNum.toString().split("");
    const digitsSum = splitDigitsStr.reduce((sum, currDigit) => {
        return sum + Number(currDigit);
    }, 0);

    return digitsSum;
}

console.log(twistedSum(3)); // 6
console.log(twistedSum(10)); // 46
console.log(twistedSum(12)); // 51
