"use strict";

/**
 * solution 1
 * time: O(n)
 * space: O(n)
 *
 * @param {number} num
 * @param {number} index1
 * @param {number} index2
 * @param {number} targetDigit
 * @returns {boolean}
 */
function checkDigit(num, index1, index2, targetDigit) {
    const startingPosition = Math.min(index1, index2);
    const endingPosition = Math.max(index1, index2);
    const strNum = String(num);
    const strTargetDigit = String(targetDigit);

    for (let i = startingPosition; i <= endingPosition; i++) {
        const currentStrDigit = strNum[i];

        if (currentStrDigit === strTargetDigit) {
            return true;
        }
    }

    return false;
}

console.log(checkDigit(1234567, 1, 0, 1)); // true
console.log(checkDigit(9999999999, 2, 5, 1)); // false
