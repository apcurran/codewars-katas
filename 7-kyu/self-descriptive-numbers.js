"use strict";

/**
 * solution 1 -- hashmap
 * time: O(n)
 * space: O(n)
 *
 * @param {number} num
 * @returns {boolean}
 */
function selfDescriptive(num) {
    const numStr = String(num);
    let digitsCount = new Map();

    for (let digitStr of numStr) {
        const previousCount = digitsCount.get(digitStr) || 0;
        digitsCount.set(digitStr, previousCount + 1);
    }

    for (let i = 0; i < numStr.length; i++) {
        const indexDigitCount = digitsCount.get(String(i)) || 0;
        const currentDigit = Number(numStr[i]);

        if (indexDigitCount !== currentDigit) {
            return false;
        }
    }

    return true;
}

console.log(selfDescriptive(21200)); // true
console.log(selfDescriptive(3211000)); // true
console.log(selfDescriptive(21230)); // false
