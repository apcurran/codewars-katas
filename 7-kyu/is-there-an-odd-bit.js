"use strict";

/**
 * solution 1
 * time: O(n)
 * space: O(n) -- stringify num for binary digits
 * 
 * @param {number} x 
 * @returns {0|1}
 */
function anyOdd(x) {
    const binaryNumStr = x.toString(2);
    const reversedNumStr = binaryNumStr.split("").reverse();

    for (let i = 0; i < reversedNumStr.length; i++) {
        const currentBit = Number(reversedNumStr[i]);

        if (i % 2 !== 0 && currentBit === 1) {
            return 1;
        }
    }

    return 0;
}

console.log(anyOdd(2)); // 1
console.log(anyOdd(5)); // 0
console.log(anyOdd(170)); // 1
