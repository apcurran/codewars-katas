"use strict";

/**
 * solution 1
 * time: O(n)
 * space: O(n) -- stringify n
 * 
 * @param {number} n 
 * @returns {"Jumping!!"|"Not!!"}
 */
function jumpingNumber(n) {
    const strNum = String(n);

    for (let i = 0; i < strNum.length - 1; i++) {
        const currentDigit = Number(strNum[i]);
        const nextDigit = Number(strNum[i + 1]);
        const digitsDifference = Math.abs(currentDigit - nextDigit);

        if (digitsDifference !== 1) {
            return "Not!!";
        }
    }

    return "Jumping!!";
}
