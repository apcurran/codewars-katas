"use strict";

/**
 * solution 1
 * time: O(n)
 * space: O(n)
 * 
 * @param {number} n 
 * @returns {"Special!!"|"NOT!!"}
 */
function specialNumber(n) {
    const specialDigits = "012345";
    const strNum = String(n);

    for (let strDigit of strNum) {
        if (!specialDigits.includes(strDigit)) {
            return "NOT!!";
        }
    }

    return "Special!!";
}
