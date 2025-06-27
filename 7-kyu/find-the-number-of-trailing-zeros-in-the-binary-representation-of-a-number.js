"use strict";

/**
 * solution 1
 * time: O(n)
 * space: O(n)
 *
 * @param {number} n
 * @returns {number} - binary zeros count
 */
function trailingZeros(n) {
    const nBinary = n.toString(2);
    let binZerosCount = 0;

    for (let i = nBinary.length - 1; i >= 0; i--) {
        const strDigit = nBinary[i];

        if (strDigit === "0") {
            binZerosCount++;
        } else {
            break;
        }
    }

    return binZerosCount;
}

console.log(trailingZeros(4)); // 2
console.log(trailingZeros(5)); // 0
