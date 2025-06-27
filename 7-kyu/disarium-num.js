"use strict";

/**
 * solution 1
 * time: O(n)
 * space: O(n)
 *
 * @param {number} num
 * @returns {"Disarium !!"|"Not !!"}
 */
function disariumNumber(num) {
    const strNum = String(num);
    let digitsPoweredSum = 0;

    for (let i = 0; i < strNum.length; i++) {
        const digitPosition = i + 1;
        const digit = Number(strNum[i]);
        const digitPoweredToPosition = digit ** digitPosition;
        digitsPoweredSum += digitPoweredToPosition;
    }

    return digitsPoweredSum === num ? "Disarium !!" : "Not !!";
}

console.log(disariumNumber(89)); // "Disarium !!"
